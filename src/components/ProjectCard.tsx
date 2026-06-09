import { ProjectCover } from './ProjectCover'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: Project
  tone?: 'dark' | 'light'
}

export function ProjectCard({ project, tone = 'dark' }: ProjectCardProps) {
  const primaryTag = project.stack[0]
  const toolTag = project.tools[0]

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={tone === 'light' ? `${styles.card} ${styles.cardLight}` : styles.card}
    >
      <ProjectCover project={project} />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.tags}>
          {primaryTag && <span className={styles.tag}>{primaryTag}</span>}
          {toolTag && (
            <span className={`${styles.tag} ${styles.tagGold}`}>{toolTag}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
