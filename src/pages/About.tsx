import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { SocialIconRow } from '../components/SocialIconRow'
import { site } from '../data/site'
import styles from './About.module.css'

function AboutIntro() {
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

function AboutProjectLinks() {
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

export function About() {

  return (
    <>
      <PageMeta
        title="About"
        description={`${site.jobTitle} at Deloitte (${site.employer.sector}). Long Island native, HSI NYC, Power Device Corp, surf, and build.`}
      />
      <div className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>( About )</p>
          <h1 className={styles.title}>{site.name}</h1>
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

        <figure className={styles.portrait}>
          <img
            src={site.projects.headshotSrc}
            alt={site.projects.headshotAlt}
            loading="eager"
          />
          <figcaption className={styles.portraitCaption}>
            {site.hero.bioLocation}
          </figcaption>
        </figure>

        <div className={styles.prose}>
          <AboutIntro />
          <AboutProjectLinks />
          <p className={styles.copy}>{site.about.outro}</p>
        </div>

        <SocialIconRow className={styles.social} />
      </div>
    </>
  )
}
