import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { isReefRadarSlug, reefRadarBrand } from '../data/reefRadar'
import { ReefRadarName } from './ReefRadarName'

type ProjectTaglineProps = {
  project: Pick<Project, 'slug' | 'tagline'>
  className?: string
  /** Set when rendered inside a parent link (project cards / magazine rows) */
  nested?: boolean
  tone?: 'light' | 'dark'
}

export function ProjectTagline({
  project,
  className,
  nested = false,
  tone = 'dark',
}: ProjectTaglineProps) {
  if (!isReefRadarSlug(project.slug)) {
    return <p className={className}>{project.tagline}</p>
  }

  const chromeClass =
    tone === 'light' ? 'chrome-link chrome-link-on-light' : 'chrome-link'

  const name = nested ? (
    <span className={chromeClass}>
      <ReefRadarName />
    </span>
  ) : (
    <Link to={`/projects/${project.slug}`} className={chromeClass}>
      <ReefRadarName />
    </Link>
  )

  return (
    <p className={className}>
      {name} {reefRadarBrand.description}
    </p>
  )
}
