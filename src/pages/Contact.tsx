import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { PageMeta } from '../components/PageMeta'
import { SocialIconRow } from '../components/SocialIconRow'
import { site } from '../data/site'
import styles from './Contact.module.css'

function ContactIntro() {
  return (
    <p className={styles.copy}>
      I&apos;m from Long Island, New York. Before{' '}
      <strong className={styles.emphasis}>{site.employer.name}</strong>, I spent
      two years volunteering as a program manager at{' '}
      <strong className={styles.emphasis}>
        Homeland Security Investigations
      </strong>{' '}
      in NYC, at the same time a test technician at{' '}
      <strong className={styles.emphasis}>Power Device Corporation</strong> in
      Bohemia.
    </p>
  )
}

function ContactProjectLinks() {
  const { buildLead, projectLinks } = site.about

  return (
    <p className={styles.copy}>
      {buildLead}{' '}
      {projectLinks.map((project, index) => {
        const isLast = index === projectLinks.length - 1
        const isSecondLast = index === projectLinks.length - 2

        return (
          <Fragment key={project.slug}>
            <Link
              to={`/projects/${project.slug}`}
              className={`chrome-link ${styles.projectLink}`}
            >
              {project.label}
            </Link>
            {isSecondLast ? ', and ' : isLast ? '.' : ', '}
          </Fragment>
        )
      })}
    </p>
  )
}

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
            <p className={styles.eyebrow}>{site.contact.eyebrow}</p>
            <h1 id="contact-heading" className={styles.title}>
              {site.contact.title}
            </h1>
            <p className={styles.role}>
              {site.jobTitle}
              <span className={styles.roleSep} aria-hidden="true">
                ·
              </span>
              <strong className={styles.emphasis}>
                {site.employer.name} ({site.employer.sector})
              </strong>
            </p>
          </header>

          <div className={styles.prose}>
            <ContactIntro />
            <ContactProjectLinks />
            <p className={styles.copy}>{site.about.outro}</p>
          </div>

          <ContactForm variant="dark" />

          <SocialIconRow className={styles.social} />
        </div>
      </div>
    </>
  )
}
