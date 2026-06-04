import { PageMeta } from '../components/PageMeta'
import { site } from '../data/site'
import styles from './About.module.css'

export function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Aspiring data scientist — surf, games, ML, and building things."
      />
      <div className={styles.page}>
        <h1 className={styles.title}>{site.name}</h1>
        <p className={styles.role}>Aspiring data scientist</p>
        <div className={styles.body}>
          <p>
            I am 22 and graduating soon. I build across games, machine learning,
            and the web — from a full Unreal Engine title to Jupyter-driven ML
            projects and a live surf forecast product at Reef Radar.
          </p>
          <p>{site.beyond.body}</p>
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
