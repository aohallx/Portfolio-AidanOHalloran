import { Link } from 'react-router-dom'
import { reefRadarBrand } from '../data/reefRadar'
import styles from './ReefRadarName.module.css'

type ReefRadarNameProps = {
  className?: string
  to?: string
  href?: string
}

export function ReefRadarName({ className, to, href }: ReefRadarNameProps) {
  const content = (
    <>
      {reefRadarBrand.name}
      <sup className={styles.mark}>{reefRadarBrand.entityMark}</sup>
    </>
  )

  const rootClass = [styles.name, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={rootClass}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={rootClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return <span className={rootClass}>{content}</span>
}
