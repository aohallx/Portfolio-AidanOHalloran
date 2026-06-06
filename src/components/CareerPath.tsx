import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  experiencePhases,
  getActivePhaseIndex,
  phaseScrollWeights,
  type ExperiencePhase,
  type ExperienceRole,
} from '../data/experience'
import styles from './CareerPath.module.css'

const SNAP_SPRING = { type: 'spring' as const, stiffness: 160, damping: 24 }

function railSnapTop(index: number, count: number): string {
  if (count <= 1) return '50%'
  return `${(index / (count - 1)) * 100}%`
}

function logoClassFor(role: ExperienceRole): string {
  return [
    styles.logo,
    role.logoTone === 'light' && styles.logoLight,
    role.logoTone === 'dark' && styles.logoDark,
    role.logoTone === 'seal' && styles.logoSeal,
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
      <p className={styles.org}>{role.org}</p>
      <p className={styles.title}>{role.title}</p>
      <p className={styles.meta}>{role.note}</p>
      <p className={styles.location}>{role.location}</p>
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
  const count = experiencePhases.length
  const snapTop = railSnapTop(activeIndex, count)

  return (
    <div className={styles.railWrap}>
      <div className={styles.line} aria-hidden="true">
        <motion.span
          className={styles.lineFill}
          animate={{ height: snapTop }}
          transition={SNAP_SPRING}
        />
        <motion.span
          className={styles.scrollNeedle}
          animate={{ top: snapTop }}
          transition={SNAP_SPRING}
          aria-hidden="true"
        />
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
            <span className={styles.marker} aria-hidden="true" />
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

          <div className={styles.contentCol} key={activePhase.id}>
            <PhaseBody phase={activePhase} />
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
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActiveIndex(getActivePhaseIndex(progress, phaseScrollWeights))
  })

  useEffect(() => {
    setActiveIndex(getActivePhaseIndex(scrollYProgress.get(), phaseScrollWeights))
  }, [scrollYProgress])

  if (reduceMotion) {
    return <StaticTimeline />
  }

  return (
    <div ref={scrollRef} className={styles.scrollTrack}>
      <TimelineContent activeIndex={activeIndex} />
    </div>
  )
}
