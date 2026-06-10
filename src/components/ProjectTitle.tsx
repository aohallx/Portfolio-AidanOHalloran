import type { Project } from '../data/projects'

type ProjectTitleProps = {
  project: Pick<Project, 'title'>
  className?: string
}

export function ProjectTitle({ project, className }: ProjectTitleProps) {
  return <span className={className}>{project.title}</span>
}
