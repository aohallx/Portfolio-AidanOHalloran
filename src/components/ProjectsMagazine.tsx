import { ProjectCover } from './ProjectCover'
import { ProjectStackIcons } from './ProjectStackIcons'
import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import styles from './ProjectsMagazine.module.css'

type ProjectsMagazineProps = {
  projects: Project[]
  showHeader?: boolean
  headingId?: string
  headshot?: { src: string; alt: string }
}

export function ProjectsMagazine({
  projects,
  showHeader = true,
  headingId,
  headshot,
}: ProjectsMagazineProps) {
  return (
    <div className={styles.wrap}>
      {showHeader && (
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <p className={styles.eyebrow}>( Projects )</p>
            <h2 id={headingId} className={styles.heading}>
              Projects
            </h2>
          </div>
          {headshot && (
            <figure className={styles.headshot}>
              <img src={headshot.src} alt={headshot.alt} loading="eager" />
            </figure>
          )}
        </header>
      )}

      <div className={styles.grid}>
        {projects.map((project, index) => {
          const mediaFirst = index % 2 === 0

          return (
            <article
              key={project.slug}
              id={`project-${project.slug}`}
              className={`${styles.item} ${styles.itemRow} ${
                mediaFirst ? styles.itemMediaFirst : styles.itemCopyFirst
              }`}
              style={{ '--i': index } as CSSProperties}
            >
              <Link to={`/projects/${project.slug}`} className={styles.link}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <ProjectCover project={project} />

                <div className={styles.copy}>
                  <ProjectStackIcons ids={project.stackIds} />
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.tagline}>{project.tagline}</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
