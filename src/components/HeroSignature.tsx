import { Link } from 'react-router-dom'
import { SocialIconRow } from './SocialIconRow'
import { site } from '../data/site'
import styles from './HeroSignature.module.css'

/** Centered signature block — lives at the bottom of the home page */
export function HeroSignature() {
  return (
    <section
      id="signature"
      className={styles.section}
      aria-label="Contact and links"
    >
      <div className={styles.inner}>
        <h2 className={styles.nameHeading}>
          <Link to="/about" className={`chrome-link ${styles.name}`}>
            {site.name.toUpperCase()}
          </Link>
        </h2>

        <SocialIconRow includeEmail={false} />

        <p className={styles.email}>
          <a href={`mailto:${site.email}`}>
            EMAIL: {site.email.toUpperCase()}
          </a>
        </p>
      </div>
      <p className={styles.ghost} aria-hidden="true">
        {site.roleGhost}
      </p>
    </section>
  )
}
