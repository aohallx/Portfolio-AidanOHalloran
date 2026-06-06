import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  experiencePhases,
  type ExperiencePhase,
  type ExperienceRole,
} from '../data/experience'
import styles from './CareerPath.module.css'

type ScrollState = {
  progress: number
  activeIndex: number
}

function getScrollStateFromTrack(
  track: HTMLElement,
  phaseCount: number,
): ScrollState {
  if (phaseCount <= 1) return { progress: 0, activeIndex: 0 }

  const rect = track.getBoundingClientRect()
  const viewport = window.innerHeight
  const scrollable = track.offsetHeight - viewport

  if (scrollable <= 0) return { progress: 0, activeIndex: 0 }
  if (rect.top > 0) return { progress: 0, activeIndex: 0 }
  if (rect.bottom <= viewport) {
    return { progress: 1, activeIndex: phaseCount - 1 }
  }

  const scrolled = Math.min(scrollable, Math.max(0, -rect.top))
  const progress = scrolled / scrollable
  const activeIndex = Math.min(
    phaseCount - 1,
    Math.max(0, Math.round(progress * (phaseCount - 1))),
  )

  return { progress, activeIndex }
}

function logoClassFor(role: ExperienceRole): string {
  return [
    styles.logo,
    role.logoTone === 'light' && styles.logoLight,
    role.logoTone === 'dark' && styles.logoDark,
    role.logoTone === 'seal' && styles.logoSeal,
    role.logoTone === 'embedded' && styles.logoEmbedded,
  ]
    .filter(Boolean)
    .join(' ')
}

function RoleCard({ role }: { role: ExperienceRole }) {
  return (
    <article className={styles.roleCard}>
      <div className={styles.logoWrap}>
        <img
          src={role.logo}
          alt={role.logoAlt}
          className={logoClassFor(role)}
          loading="lazy"
        />
      </div>
      <p className={styles.org}>
        {role.org}
        <span className={styles.orgSep} aria-hidden="true">
          {' '}
          ·{' '}
        </span>
        <span className={styles.orgLocation}>{role.location}</span>
      </p>
      <p className={styles.title}>{role.title}</p>
      <p className={styles.meta}>{role.note}</p>
    </article>
  )
}

function PhaseBody({ phase }: { phase: ExperiencePhase }) {
  if (phase.simultaneous) {
    return (
      <div className={styles.parallelGrid}>
        {phase.roles.map((role) => (
          <RoleCard key={role.org} role={role} />
        ))}
      </div>
    )
  }

  return <RoleCard role={phase.roles[0]} />
}

function TimelineRail({ activeIndex }: { activeIndex: number }) {
  return (
    <div className={styles.railWrap}>
      <div className={styles.line} aria-hidden="true">
        <span className={styles.lineGradient} />
      </div>

      <ol className={styles.rail} aria-label="Career timeline">
        {experiencePhases.map((phase, index) => (
          <li
            key={phase.id}
            className={
              index === activeIndex
                ? `${styles.row} ${styles.rowActive}`
                : index < activeIndex
                  ? `${styles.row} ${styles.rowPast}`
                  : styles.row
            }
          >
            <span className={styles.year}>{phase.year}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function TimelineContent({ activeIndex }: { activeIndex: number }) {
  const activePhase = experiencePhases[activeIndex]

  return (
    <div className={styles.sticky}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>( Where I&apos;ve worked )</p>

        <div className={styles.timeline}>
          <TimelineRail activeIndex={activeIndex} />

          <div className={styles.contentCol} aria-live="polite">
            <PhaseBody key={activePhase.id} phase={activePhase} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StaticTimeline() {
  return (
    <div className={styles.staticTrack}>
      <div className={styles.sticky}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>( Where I&apos;ve worked )</p>
          <div className={styles.staticList}>
            {experiencePhases.map((phase) => (
              <section key={phase.id} className={styles.staticPhase}>
                <h3 className={styles.staticYear}>{phase.year}</h3>
                <PhaseBody phase={phase} />
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CareerPath() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(media.matches)
    syncMotion()
    media.addEventListener('change', syncMotion)
    return () => media.removeEventListener('change', syncMotion)
  }, [])

  useLayoutEffect(() => {
    if (reduceMotion) return

    const track = scrollRef.current
    if (!track) return

    const phaseCount = experiencePhases.length

    const syncScroll = () => {
      const { progress, activeIndex: next } = getScrollStateFromTrack(track, phaseCount)
      track.style.setProperty('--timeline-progress', `${progress * 100}%`)

      if (next !== activeIndexRef.current) {
        activeIndexRef.current = next
        setActiveIndex(next)
      }
    }

    syncScroll()

    window.addEventListener('scroll', syncScroll, { passive: true })
    window.addEventListener('resize', syncScroll, { passive: true })
    window.addEventListener('scrollend', syncScroll, { passive: true })

    const observer = new ResizeObserver(syncScroll)
    observer.observe(track)

    return () => {
      window.removeEventListener('scroll', syncScroll)
      window.removeEventListener('resize', syncScroll)
      window.removeEventListener('scrollend', syncScroll)
      observer.disconnect()
      track.style.removeProperty('--timeline-progress')
    }
  }, [reduceMotion])

  if (reduceMotion) {
    return <StaticTimeline />
  }

  return (
    <div ref={scrollRef} className={styles.scrollTrack}>
      <TimelineContent activeIndex={activeIndex} />
    </div>
  )
}
