import { Link } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { HeroLanding } from '../components/HeroLanding'
import { HeroSignature } from '../components/HeroSignature'
import { PageMeta } from '../components/PageMeta'
import { ProjectCard } from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'
import { site } from '../data/site'
import { ToolsStack } from '../components/ToolsStack'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <PageMeta />
      <HeroLanding />

      <section
        id="projects"
        data-nav-surface="light"
        className={`${styles.section} ${styles.sectionLight}`}
        aria-labelledby="featured-heading"
      >
        <div className={styles.sectionHeader}>
          <h2 id="featured-heading" className={styles.sectionTitle}>
            Featured work
          </h2>
          <Link to="/projects" className={styles.viewAll}>
            All projects
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} tone="light" />
          ))}
        </div>
      </section>

      <ToolsStack />

      <section
        id="beyond"
        className={`${styles.section} ${styles.beyond}`}
        aria-labelledby="beyond-heading"
      >
        <p className={styles.beyondEyebrow}>{site.beyond.eyebrow}</p>
        <h2 id="beyond-heading" className={styles.beyondTitle}>
          {site.beyond.title}
        </h2>
        <p className={styles.beyondBody}>{site.beyond.body}</p>
        <ul className={styles.beyondChips} aria-label="Personal interests">
          {site.beyond.highlights.map((item) => (
            <li key={item} className={styles.beyondChip}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        data-nav-surface="light"
        className={styles.contact}
        aria-labelledby="contact-heading"
      >
        <div className={styles.contactInner}>
          <p className={styles.contactEyebrow}>{site.contact.eyebrow}</p>
          <h2 id="contact-heading" className={styles.contactTitle}>
            {site.contact.title}
          </h2>
          <p className={styles.contactRule} aria-hidden="true" />
          <p className={styles.contactSub}>{site.contact.subtitle}</p>
          <ContactForm />
          <nav className={styles.contactLinks} aria-label="Contact links">
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
          </nav>
        </div>
      </section>

      <HeroSignature />
    </>
  )
}
