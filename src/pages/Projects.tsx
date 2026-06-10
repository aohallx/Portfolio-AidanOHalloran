import { useMemo } from 'react'
import { ListScrollRestore } from '../components/ListScrollRestore'
import { PageMeta } from '../components/PageMeta'
import { ProjectsMagazine } from '../components/ProjectsMagazine'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { buildProjectsItemListSchema } from '../lib/seoSchema'
import styles from './Projects.module.css'

export function Projects() {
  const projectsSchema = useMemo(() => buildProjectsItemListSchema(), [])

  return (
    <>
      <ListScrollRestore pathname="/projects" />
      <PageMeta
        title="Projects"
        description="Portfolio projects: data engineering & ML (Python, scikit-learn, time-series), Reef Radar (React, TypeScript), and Unreal Engine game development."
        schemaExtra={projectsSchema}
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
