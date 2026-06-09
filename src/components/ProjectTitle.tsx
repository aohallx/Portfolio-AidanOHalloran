import type { Project } from '../data/projects'
import { isReefRadarSlug } from '../data/reefRadar'
import { ReefRadarBrand } from './ReefRadarBrand'

type ProjectTitleProps = {
  project: Pick<Project, 'slug' | 'title'>
  className?: string
}

export function ProjectTitle({ project, className }: ProjectTitleProps) {
  if (isReefRadarSlug(project.slug)) {
    return <ReefRadarBrand className={className} size="title" />
  }

  return <span className={className}>{project.title}</span>
}
