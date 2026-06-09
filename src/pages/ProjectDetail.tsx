import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { ProjectDetailStack } from '../components/ProjectDetailStack'
import { ProjectMedia } from '../components/ProjectMedia'
import { getProjectBySlug } from '../data/projects'
import { HOME_PROJECT_SCROLL_KEY } from '../lib/homeScroll'
import styles from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

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
      <article className={styles.page}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{project.title}</h1>
            <Link to="/projects" className={styles.back}>
              All projects
            </Link>
          </div>
          <p className={styles.tagline}>{project.tagline}</p>
        </header>

        <div className={styles.mediaBlock}>
          <ProjectMedia media={project.media} autoplay={isVideo} />
        </div>

        <ProjectDetailStack ids={project.stackIds} />

        <section className={styles.highlightsSection} aria-label="Project highlights">
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {(project.links.live || project.links.github) && (
          <div className={styles.actions}>
            {project.links.live && (
              <a
                href={project.links.live}
                className={`${styles.btn} ${styles.btnLive}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
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
