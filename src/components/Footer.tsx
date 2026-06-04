import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {site.name}
        </p>
        <a href={`mailto:${site.email}`} className={styles.email}>
          {site.email}
        </a>
      </div>
    </footer>
  )
}
