import type {
  ProjectDeepDiveSection,
  ProjectEquation,
  ProjectGalleryImage,
} from '../data/projectDeepDives'
import { reefRadarBrand } from '../data/reefRadar'
import { getGalleryIndex } from '../lib/projectGallery'
import styles from './ProjectDeepDive.module.css'

function DeepDiveParagraph({ text }: { text: string }) {
  const parts = text.split(/(reefradar\.com)/i)

  return (
    <p className={styles.lead}>
      {parts.map((part, index) =>
        part.toLowerCase() === 'reefradar.com' ? (
          <a
            key={`${part}-${index}`}
            href={reefRadarBrand.liveUrl}
            className={`chrome-link ${styles.inlineChromeLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </p>
  )
}

type ProjectDeepDiveProps = {
  sections: ProjectDeepDiveSection[]
  indexBySrc: Map<string, number>
  onOpenGallery: (index: number) => void
}

function EquationBlock({ equation }: { equation: ProjectEquation }) {
  return (
    <div className={styles.equation}>
      <p className={styles.equationLabel}>{equation.label}</p>
      <code className={styles.formula}>{equation.formula}</code>
      {equation.note && <p className={styles.equationNote}>{equation.note}</p>}
    </div>
  )
}

function GalleryFigure({
  image,
  showKind,
  onOpen,
}: {
  image: ProjectGalleryImage
  showKind: boolean
  onOpen: () => void
}) {
  return (
    <figure className={styles.figure}>
      <button
        type="button"
        className={styles.figureMedia}
        onClick={onOpen}
        aria-label={`View larger: ${image.alt}`}
      >
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        {showKind && (
          <span
            className={
              image.kind === 'blueprint' ? styles.kindBlueprint : styles.kindGameplay
            }
          >
            {image.kind === 'blueprint' ? 'Blueprint' : 'Gameplay'}
          </span>
        )}
      </button>
      <figcaption className={styles.caption}>{image.caption}</figcaption>
    </figure>
  )
}

function openBySrc(
  src: string,
  indexBySrc: Map<string, number>,
  onOpenGallery: (index: number) => void,
) {
  const index = getGalleryIndex(indexBySrc, src)
  if (index !== undefined) {
    onOpenGallery(index)
  }
}

function DeepDiveSection({
  section,
  indexBySrc,
  onOpenGallery,
}: {
  section: ProjectDeepDiveSection
  indexBySrc: Map<string, number>
  onOpenGallery: (index: number) => void
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{section.title}</h2>

      {section.paragraphs?.map((paragraph) => (
        <DeepDiveParagraph key={paragraph} text={paragraph} />
      ))}

      {section.equations && section.equations.length > 0 && (
        <div className={styles.equations}>
          {section.equations.map((equation) => (
            <EquationBlock key={equation.label} equation={equation} />
          ))}
        </div>
      )}

      {section.heroImage && (
        <figure
          className={
            section.heroImage.fullQuality
              ? `${styles.heroFigure} ${styles.heroFigureFull}`
              : styles.heroFigure
          }
        >
          <button
            type="button"
            className={
              section.heroImage.fullQuality
                ? `${styles.heroMedia} ${styles.heroMediaFull}`
                : styles.heroMedia
            }
            onClick={() =>
              openBySrc(section.heroImage!.src, indexBySrc, onOpenGallery)
            }
            aria-label={`View larger: ${section.heroImage.alt}`}
          >
            <img
              src={section.heroImage.src}
              alt={section.heroImage.alt}
              loading={section.heroImage.fullQuality ? 'eager' : 'lazy'}
              decoding={section.heroImage.fullQuality ? 'sync' : 'async'}
              fetchPriority={section.heroImage.fullQuality ? 'high' : undefined}
            />
          </button>
          {section.heroImage.caption && (
            <figcaption className={styles.caption}>
              {section.heroImage.caption}
            </figcaption>
          )}
        </figure>
      )}

      {section.images && section.images.length > 0 && (
        <div className={styles.gallery}>
          {section.images.map((image) => (
            <GalleryFigure
              key={image.src}
              image={image}
              showKind={!section.galleryKind}
              onOpen={() => openBySrc(image.src, indexBySrc, onOpenGallery)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export function ProjectDeepDive({
  sections,
  indexBySrc,
  onOpenGallery,
}: ProjectDeepDiveProps) {
  return (
    <div className={styles.deepDive}>
      {sections.map((section) => (
        <DeepDiveSection
          key={section.title}
          section={section}
          indexBySrc={indexBySrc}
          onOpenGallery={onOpenGallery}
        />
      ))}
    </div>
  )
}
