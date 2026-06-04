import { Link } from 'react-router-dom'
import { EmployerBadge } from './EmployerBadge'
import { site } from '../data/site'
import styles from './HeroSignature.module.css'

/** Centered “Max Milkin”-style block — lives at the bottom of the home page */
export function HeroSignature() {
  return (
    <section
      id="signature"
      className={styles.section}
      aria-label="Contact and links"
    >
      <div className={styles.inner}>
        <h2 className={styles.name}>{site.name.toUpperCase()}</h2>
        <EmployerBadge />
        <nav className={styles.social} aria-label="Social and resume">
          {site.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.socialLink}
              {...(link.href.startsWith('http') || link.href.endsWith('.pdf')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className={styles.email}>
          <a href={`mailto:${site.email}`}>
            EMAIL: {site.email.toUpperCase()}
          </a>
        </p>
        <p className={styles.roleLine}>{site.roleLine}</p>
      </div>
      <p className={styles.ghost} aria-hidden="true">
        {site.roleGhost}
      </p>
      <div className={styles.footer}>
        <Link to="/#projects" className={styles.scrollCta}>
          View projects
        </Link>
      </div>
    </section>
  )
}
