import { Link } from 'react-router-dom'
import { reefRadarBrand } from '../data/reefRadar'
import styles from './ReefRadarBrand.module.css'

type ReefRadarBrandProps = {
  className?: string
  /** Inline in body copy vs project card heading */
  size?: 'inline' | 'title'
  /** Link to the live product instead of the portfolio project page */
  href?: string
  /** When set, wraps the logo in a router Link */
  to?: string
}

export function ReefRadarBrand({
  className,
  size = 'inline',
  href,
  to,
}: ReefRadarBrandProps) {
  const sizeClass = size === 'title' ? styles.titleSize : styles.inlineSize
  const rootClass = [styles.brand, sizeClass, className].filter(Boolean).join(' ')

  const logo = (
    <img
      src={reefRadarBrand.logoSrc}
      alt={reefRadarBrand.logoAlt}
      className={styles.logo}
      loading="lazy"
      decoding="async"
    />
  )

  if (to) {
    return (
      <Link to={to} className={rootClass} aria-label={reefRadarBrand.logoAlt}>
        {logo}
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
        aria-label={`${reefRadarBrand.logoAlt} — opens in a new tab`}
      >
        {logo}
      </a>
    )
  }

  return <span className={rootClass}>{logo}</span>
}
