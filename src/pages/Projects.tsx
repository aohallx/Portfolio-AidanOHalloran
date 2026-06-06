import { PageMeta } from '../components/PageMeta'
import { ProjectsMagazine } from '../components/ProjectsMagazine'
import { projects } from '../data/projects'
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
          <ProjectsMagazine projects={projects} headingId="projects-heading" />
        </div>
      </div>
    </>
  )
}
