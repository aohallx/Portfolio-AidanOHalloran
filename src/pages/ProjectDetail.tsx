import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { ProjectMedia } from '../components/ProjectMedia'
import { getProjectBySlug } from '../data/projects'
import styles from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className={styles.notFound}>
        <PageMeta title="Not found" />
        <p>Project not found.</p>
        <Link to="/projects">Back to projects</Link>
      </div>
    )
  }

  const isVideo = project.media.type === 'video'

  return (
    <>
      <PageMeta title={project.title} description={project.tagline} />
      <article className={styles.page}>
        <Link to="/projects" className={styles.back}>
          ← Projects
        </Link>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
        </header>

        <div className={styles.mediaBlock}>
          <ProjectMedia media={project.media} autoplay={isVideo} />
        </div>

        <div className={styles.meta}>
          <div>
            <h2 className={styles.blockTitle}>Stack</h2>
            <div className={styles.stack}>
              {project.stack.map((item) => (
                <span key={item} className={`${styles.pill} ${styles.pillAccent}`}>
                  {item}
                </span>
              ))}
              {project.tools.map((item) => (
                <span key={item} className={`${styles.pill} ${styles.pillGold}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className={styles.blockTitle}>Highlights</h2>
            <ul className={styles.highlights}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {(project.links.live || project.links.github) && (
          <div className={styles.actions}>
            {project.links.live && (
              <a
                href={project.links.live}
                className={`${styles.btn} ${styles.btnLive}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className={`${styles.btn} ${styles.btnGit}`}
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
