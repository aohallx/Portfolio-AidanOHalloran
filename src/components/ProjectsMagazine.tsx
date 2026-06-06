import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import styles from './ProjectsMagazine.module.css'

type ProjectsMagazineProps = {
  projects: Project[]
  showHeader?: boolean
  headingId?: string
}

const layoutClass = [
  styles.itemHero,
  styles.itemSideTop,
  styles.itemSideBottom,
  styles.itemStrip,
] as const

export function ProjectsMagazine({
  projects,
  showHeader = true,
  headingId,
}: ProjectsMagazineProps) {
  return (
    <div className={styles.wrap}>
      {showHeader && (
        <header className={styles.header}>
          <p className={styles.eyebrow}>( Projects )</p>
          <h2 id={headingId} className={styles.heading}>
            Projects
          </h2>
        </header>
      )}

      <div className={styles.grid}>
        {projects.map((project, index) => {
          const layout = layoutClass[index] ?? styles.itemDefault
          const stackLine = project.stack.slice(0, 3).join(' · ')

          return (
            <article
              key={project.slug}
              className={`${styles.item} ${layout}`}
              style={{ '--i': index } as CSSProperties}
            >
              <Link to={`/projects/${project.slug}`} className={styles.link}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={styles.media}>
                  <img src={project.coverImage} alt={project.coverAlt} loading="lazy" />
                </div>

                <div className={styles.copy}>
                  <p className={styles.stack}>{stackLine}</p>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.tagline}>{project.tagline}</p>
                  <span className={styles.cta}>View project</span>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
