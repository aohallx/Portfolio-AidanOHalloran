import { PageMeta } from '../components/PageMeta'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <>
      <PageMeta
        title="Projects"
        description="Unreal Engine game, Reef Radar, stellar classification, and stock time-series analysis."
      />
      <div className={styles.page}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.intro}>
          Games, data science, and web — each with a detail page for media and
          links.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
