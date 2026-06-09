import { PageMeta } from '../components/PageMeta'
import { ProjectsMagazine } from '../components/ProjectsMagazine'
import { projects } from '../data/projects'
import { site } from '../data/site'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <>
      <PageMeta
        title="Projects"
        description="Unreal Engine game, Reef Radar, stellar classification, and stock time-series analysis."
      />
      <div className={styles.page} data-nav-surface="light">
        <div className={styles.inner}>
          <ProjectsMagazine
            projects={projects}
            headingId="projects-heading"
            headshot={{
              src: site.projects.headshotSrc,
              alt: site.projects.headshotAlt,
            }}
          />
        </div>
      </div>
    </>
  )
}
