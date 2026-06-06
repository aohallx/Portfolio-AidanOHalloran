import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import { CareerPath } from './CareerPath'
import { ProjectCard } from './ProjectCard'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-nav-surface="light"
      className={styles.section}
      aria-labelledby="featured-heading"
    >
      <div className={styles.backdrop} aria-hidden="true" />

      <CareerPath />

      <div className={styles.projectsBlock}>
        <div className={styles.projectsInner}>
          <header className={styles.header}>
            <div>
              <h2 id="featured-heading" className={styles.title}>
                Featured work
              </h2>
              <p className={styles.lead}>
                Games, data science, and web — each with a detail page for media
                and links.
              </p>
            </div>
            <Link to="/projects" className={styles.viewAll}>
              All projects
            </Link>
          </header>

          <div className={styles.grid}>
            {featuredProjects.map((project, i) => (
              <div
                key={project.slug}
                className={styles.cardWrap}
                style={{ '--stagger': `${i * 0.08}s` } as CSSProperties}
              >
                <ProjectCard project={project} tone="light" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
