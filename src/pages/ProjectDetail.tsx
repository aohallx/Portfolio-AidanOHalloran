import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { ProjectDeepDive } from '../components/ProjectDeepDive'
import { ProjectDetailStack } from '../components/ProjectDetailStack'
import { ProjectGalleryLightbox } from '../components/ProjectGalleryLightbox'
import { ProjectMedia } from '../components/ProjectMedia'
import { ProjectTagline } from '../components/ProjectTagline'
import { ProjectTitle } from '../components/ProjectTitle'
import { getProjectDeepDives } from '../data/projectDeepDives'
import { getProjectBySlug } from '../data/projects'
import { buildProjectGallery, getGalleryIndex } from '../lib/projectGallery'
import { HOME_PROJECT_SCROLL_KEY } from '../lib/homeScroll'
import styles from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const deepDiveSections = slug ? getProjectDeepDives(slug) : undefined
  const gallery = useMemo(
    () =>
      project
        ? buildProjectGallery(project.media, deepDiveSections)
        : { items: [], indexBySrc: new Map<string, number>() },
    [project, deepDiveSections],
  )
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (slug) {
      sessionStorage.setItem(HOME_PROJECT_SCROLL_KEY, slug)
    }
  }, [slug])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <PageMeta title="Not found" />
        <p>Project not found.</p>
        <Link to="/projects" className={styles.back}>
          All projects
        </Link>
      </div>
    )
  }

  const isVideo = project.media.type === 'video'

  return (
    <>
      <PageMeta title={project.title} description={project.tagline} />
      {lightboxIndex !== null && (
        <ProjectGalleryLightbox
          items={gallery.items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
      <article className={styles.page}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>
              <ProjectTitle project={project} />
            </h1>
            <Link to="/projects" className={styles.back}>
              All projects
            </Link>
          </div>
          <ProjectTagline project={project} className={styles.tagline} />
        </header>

        <div className={styles.mediaBlock}>
          <ProjectMedia
            media={project.media}
            autoplay={isVideo}
            onOpenLightbox={() => {
              const index = getGalleryIndex(
                gallery.indexBySrc,
                project.media.src,
              )
              if (index !== undefined) setLightboxIndex(index)
            }}
          />
        </div>

        <div className={styles.detailsRow}>
          <section className={styles.highlightsSection} aria-label="Project highlights">
            <ul className={styles.highlights}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className={styles.stackAside}>
            <ProjectDetailStack ids={project.stackIds} className={styles.stack} />
          </aside>
        </div>

        {deepDiveSections && deepDiveSections.length > 0 && (
          <ProjectDeepDive
            sections={deepDiveSections}
            indexBySrc={gallery.indexBySrc}
            onOpenGallery={setLightboxIndex}
          />
        )}

        {(project.links.live || project.links.github || project.links.tableau) && (
          <div className={styles.actions}>
            {project.links.live && (
              <a
                href={project.links.live}
                className={`${styles.btn} ${styles.btnLive}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                REEFRADAR.COM
              </a>
            )}
            {project.links.tableau && (
              <a
                href={project.links.tableau}
                className={`${styles.btn} ${styles.btnGithub}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tableau dashboard
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className={`${styles.btn} ${styles.btnGithub}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </article>
    </>
  )
}
