import { site } from '../data/site'
import { EmployerBadge } from './EmployerBadge'
import { SkillsBar } from './SkillsBar'
import styles from './HeroLanding.module.css'

export function HeroLanding() {
  const { hero } = site

  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={styles.stage}>
        <div className={styles.panelDark}>
          <img
            className={styles.portrait}
            src={hero.portraitSrc}
            alt={hero.portraitAlt}
            width={900}
            height={1200}
            fetchPriority="high"
            decoding="async"
          />
          <div className={styles.darkVeil} aria-hidden="true" />
          <p className={styles.megaDark}>{hero.titleDark}</p>
        </div>

        <div className={styles.navLightSentinel} data-nav-surface="light" aria-hidden="true" />
        <div className={styles.panelLight}>
          <div className={styles.rightStack}>
            <div className={styles.titleBlock}>
              <p className={styles.megaDarkMobile}>{hero.titleDark}</p>
              <p className={styles.megaLight}>{hero.titleLight}</p>
              <p className={styles.megaSub}>{hero.titleSub}</p>
              <EmployerBadge variant="hero" tone="light" />
            </div>

            <div className={styles.bio}>
              <p className={styles.bioLocation}>{hero.bioLocation}</p>
              <p className={styles.bioMemo}>{hero.bioMemo}</p>
            </div>
          </div>
        </div>

        <h1 className={styles.srOnly}>
          {site.name} — {site.jobTitle} at {site.employer.name}{' '}
          {site.employer.division} · {site.employer.sector}
        </h1>
      </div>

      <SkillsBar />
    </section>
  )
}
