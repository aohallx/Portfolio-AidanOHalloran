import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { PageMeta } from '../components/PageMeta'
import { ReefRadarName } from '../components/ReefRadarName'
import { SocialIconRow } from '../components/SocialIconRow'
import { site } from '../data/site'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <>
      <PageMeta
        title="Contact"
        description={`${site.jobTitle} at Deloitte (${site.employer.sector}). Open to work, music, projects, or just saying hi.`}
      />
      <div className={styles.page}>
        <div className={styles.backdrop} aria-hidden="true">
          <img
            className={styles.backdropImage}
            src={site.contact.backgroundImage}
            alt=""
          />
          <div className={styles.backdropOverlay} />
          <div className={styles.backdropGold} />
        </div>

        <div className={styles.inner}>
          <header className={styles.hero}>
            <h1 id="contact-heading" className={styles.title}>
              {site.contact.title}
            </h1>
          </header>

          <div className={styles.prose}>
            <p className={styles.copy}>
              I&apos;m from Long Island, New York. From 2024–2026, I volunteered
              as a program manager at{' '}
              <strong className={styles.emphasis}>
                Homeland Security Investigations
              </strong>{' '}
              in NYC while working as a test technician at{' '}
              <strong className={styles.emphasis}>
                Power Device Corporation
              </strong>{' '}
              in Bohemia.
            </p>

            <p className={styles.copy}>
              I work for{' '}
              <strong className={styles.emphasis}>
                Deloitte Government &amp; Public Services
              </strong>
              , where I build data pipelines and present technical work to
              clients. I like talking through ideas with people, at work or
              outside it. On my own time I&apos;ve built a{' '}
              <Link
                to="/projects/unreal-game"
                className={`chrome-link ${styles.projectLink}`}
              >
                video game
              </Link>
              ,{' '}
              <Link
                to="/projects/stock-time-series"
                className={`chrome-link ${styles.projectLink}`}
              >
                stock analyzer
              </Link>
              ,{' '}
              <Link
                to="/projects/stellar-classification"
                className={`chrome-link ${styles.projectLink}`}
              >
                exoplanet research project
              </Link>
              , and{' '}
              <Link
                to="/projects/reef-radar"
                className={`chrome-link ${styles.projectLink}`}
              >
                <ReefRadarName />
              </Link>
              . I also surf, write music, score films, play guitar in a few
              bands, and play lacrosse.
            </p>
          </div>

          <ContactForm variant="dark" />

          <SocialIconRow className={styles.social} />
        </div>
      </div>
    </>
  )
}
