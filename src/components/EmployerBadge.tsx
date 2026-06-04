import { site } from '../data/site'
import styles from './EmployerBadge.module.css'

type EmployerBadgeProps = {
  /** dark = sage hero; light = editorial split panel */
  tone?: 'dark' | 'light'
  align?: 'center' | 'start'
  /** Large inline mark under hero titles */
  variant?: 'default' | 'hero'
  prefix?: string
}

export function EmployerBadge({
  tone = 'dark',
  align = 'center',
  variant = 'default',
  prefix,
}: EmployerBadgeProps) {
  const { employer } = site
  const atLabel = prefix ?? site.hero.employerPrefix

  const Mark = (
    <>
      <span className={variant === 'hero' ? styles.heroWord : styles.word}>
        {employer.name}
      </span>
      <span
        className={variant === 'hero' ? styles.heroDot : styles.dot}
        aria-hidden="true"
      />
      {variant === 'default' ? (
        <span className={styles.division}>{employer.division}</span>
      ) : (
        <span className={styles.heroDivision}>{employer.division}</span>
      )}
    </>
  )

  const link = employer.href ? (
    <a
      href={employer.href}
      className={variant === 'hero' ? styles.heroMark : styles.mark}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${employer.name} ${employer.division} — opens in a new tab`}
    >
      {Mark}
    </a>
  ) : (
    <p className={variant === 'hero' ? styles.heroMarkStatic : styles.markStatic}>
      {Mark}
    </p>
  )

  if (variant === 'hero') {
    return (
      <div className={styles.heroRow}>
        <span className={styles.heroAt} aria-hidden="true">
          {atLabel}
        </span>
        {link}
      </div>
    )
  }

  const badgeClass =
    tone === 'light'
      ? `${styles.badge} ${styles.badgeLight} ${align === 'start' ? styles.alignStart : ''}`
      : styles.badge

  return (
    <div className={badgeClass}>
      <span className={styles.eyebrow}>{employer.label}</span>
      {link}
    </div>
  )
}
