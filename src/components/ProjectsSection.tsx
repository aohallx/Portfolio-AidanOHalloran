import { ProjectsMagazine } from './ProjectsMagazine'
import { featuredProjects } from '../data/projects'
import { CareerPath } from './CareerPath'
import styles from './ProjectsSection.module.css'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-nav-surface="light"
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.backdrop} aria-hidden="true" />

      <CareerPath />

      <div id="projects-magazine" className={styles.projectsBlock}>
        <div className={styles.projectsInner}>
          <ProjectsMagazine
            projects={featuredProjects}
            headingId="projects-heading"
          />
        </div>
      </div>
    </section>
  )
}
