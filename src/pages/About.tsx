import { PageMeta } from '../components/PageMeta'
import { site } from '../data/site'
import styles from './About.module.css'

export function About() {
  return (
    <>
      <PageMeta
        title="About"
        description={`${site.jobTitle} at Deloitte GPS. Long Island native — HSI NYC, Power Device Corp, surf, and build.`}
      />
      <div className={styles.page}>
        <h1 className={styles.title}>{site.name}</h1>
        <p className={styles.role}>
          {site.jobTitle} · {site.employer.name} {site.employer.division} (
          {site.employer.sector})
        </p>
        <div className={styles.body}>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.interests} aria-label="Interests">
          {site.beyond.highlights.map((item) => (
            <span key={item} className={styles.chip}>
              {item}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </>
  )
}
