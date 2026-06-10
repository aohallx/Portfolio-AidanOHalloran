import { ExperienceRichText } from './ExperienceRichText'
import {
  experiencePhases,
  type ExperiencePhase,
  type ExperienceRole,
} from '../data/experience'
import styles from './CareerPath.module.css'

function logoClassFor(role: ExperienceRole): string {
  return [
    styles.logo,
    role.logoTone === 'light' && styles.logoLight,
    role.logoTone === 'dark' && styles.logoDark,
    role.logoTone === 'seal' && styles.logoSeal,
    role.logoTone === 'badge' && styles.logoBadge,
    role.logoTone === 'embedded' && styles.logoEmbedded,
  ]
    .filter(Boolean)
    .join(' ')
}

function RoleEntry({ role }: { role: ExperienceRole }) {
  return (
    <article className={styles.role}>
      <div className={styles.logoWrap}>
        <img
          src={role.logo}
          alt={role.logoAlt}
          className={logoClassFor(role)}
          style={
            role.logoScale
              ? {
                  transform: `scale(${role.logoScale})`,
                  transformOrigin: 'left center',
                }
              : undefined
          }
          loading="eager"
          decoding="async"
        />
      </div>
      <div className={styles.roleCopy}>
        <h3 className={styles.title}>{role.title}</h3>
        <p className={styles.org}>{role.org}</p>
      </div>
      {role.bullets[0] && (
        <div className={styles.summary}>
          <ExperienceRichText paragraph={role.bullets[0]} />
        </div>
      )}
    </article>
  )
}

function PhaseBlock({ phase }: { phase: ExperiencePhase }) {
  return (
    <li className={styles.phase}>
      <div className={styles.marker}>
        <span className={styles.year}>{phase.year}</span>
        <span className={styles.period}>{phase.period}</span>
      </div>

      <div className={styles.phaseContent}>
        {phase.simultaneous ? (
          <ol className={styles.parallelGrid}>
            {phase.roles.map((role) => (
              <li key={role.org} className={styles.parallelItem}>
                <RoleEntry role={role} />
              </li>
            ))}
          </ol>
        ) : (
          <RoleEntry role={phase.roles[0]} />
        )}
      </div>
    </li>
  )
}

export function CareerPath() {
  return (
    <div className={styles.track}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>( Where I&apos;ve worked )</p>

        <div className={styles.timeline}>
          <ol className={styles.phases} aria-label="Career timeline">
            {experiencePhases.map((phase) => (
              <PhaseBlock key={phase.id} phase={phase} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
