import { useState } from 'react'
import { ListScrollRestore } from '../components/ListScrollRestore'
import { ContactForm } from '../components/ContactForm'
import { HeroLanding } from '../components/HeroLanding'
import { HeroSignature } from '../components/HeroSignature'
import { HobbyMusicPlayer } from '../components/HobbyMusicPlayer'
import { PageMeta } from '../components/PageMeta'
import { ProjectsSection } from '../components/ProjectsSection'
import { site } from '../data/site'
import { ToolsStack } from '../components/ToolsStack'
import styles from './Home.module.css'

export function Home() {
  const [activeMusicId, setActiveMusicId] = useState<string | null>(null)

  return (
    <>
      <ListScrollRestore pathname="/" />
      <PageMeta />
      <HeroLanding />

      <ProjectsSection />

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

        <ul className={styles.hobbyGrid} aria-label="Side hobbies">
          {site.beyond.hobbies.map((hobby) => (
            <li key={hobby.id} className={styles.hobbyCard}>
              <div className={styles.hobbyMedia}>
                <img src={hobby.image} alt={hobby.imageAlt} loading="lazy" />
              </div>
              <p className={styles.hobbyLabel}>{hobby.label}</p>
            </li>
          ))}
        </ul>

        <div className={styles.musicGrid} aria-label="Music demos">
          {site.beyond.musicDemos.map((demo) => (
            <HobbyMusicPlayer
              key={demo.hobbyId}
              id={demo.hobbyId}
              music={demo}
              isActive={activeMusicId === demo.hobbyId}
              onActivate={setActiveMusicId}
            />
          ))}
        </div>
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
          <ContactForm />
        </div>
      </section>

      <HeroSignature />
    </>
  )
}
