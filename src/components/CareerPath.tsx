import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MutableRefObject,
  type RefObject,
} from 'react'
import { ExperienceRichText } from './ExperienceRichText'
import {
  experiencePhases,
  type ExperiencePhase,
  type ExperienceRole,
} from '../data/experience'
import {
  getCareerScrollState,
  getPhaseVisuals,
  nearestPhaseIndex,
  yearRailStyle,
} from '../lib/careerScroll'
import styles from './CareerPath.module.css'

const PHASE_COUNT = experiencePhases.length

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

function compactLogoClassFor(role: ExperienceRole): string {
  return [
    styles.compactLogo,
    role.logoTone === 'seal' && styles.compactLogoSeal,
    role.logoTone === 'light' && styles.compactLogoLight,
    role.logoTone === 'embedded' && styles.compactLogoWide,
  ]
    .filter(Boolean)
    .join(' ')
}

function PhaseCompact({ phase }: { phase: ExperiencePhase }) {
  return (
    <div className={styles.compactRow}>
      <span className={styles.compactYear}>{phase.year}</span>
      <div className={styles.compactRoles}>
        {phase.roles.map((role) => (
          <div key={role.org} className={styles.compactRole}>
            <img
              src={role.logo}
              alt=""
              className={compactLogoClassFor(role)}
              loading="lazy"
              aria-hidden
            />
            <span className={styles.compactTitle}>{role.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
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
      <div className={styles.copy}>
        {role.paragraphs.map((paragraph, index) => (
          <ExperienceRichText
            key={index}
            paragraph={paragraph}
            className={styles.paragraph}
          />
        ))}
      </div>
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

type TimelineRailProps = {
  rowRefs: MutableRefObject<(HTMLLIElement | null)[]>
  yearRefs: MutableRefObject<(HTMLSpanElement | null)[]>
}

function TimelineRail({ rowRefs, yearRefs }: TimelineRailProps) {
  return (
    <div className={styles.railWrap}>
      <div className={styles.line} aria-hidden="true">
        <span className={styles.lineGradient} />
      </div>

      <ol className={styles.rail} aria-label="Career timeline">
        {experiencePhases.map((phase, index) => (
          <li
            key={phase.id}
            ref={(el) => {
              rowRefs.current[index] = el
            }}
            className={styles.row}
          >
            <span
              ref={(el) => {
                yearRefs.current[index] = el
              }}
              className={styles.year}
            >
              {phase.year}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

type TimelineContentProps = {
  activeIndex: number
  panelRefs: MutableRefObject<(HTMLDivElement | null)[]>
  innerRef: RefObject<HTMLDivElement | null>
  rowRefs: MutableRefObject<(HTMLLIElement | null)[]>
  yearRefs: MutableRefObject<(HTMLSpanElement | null)[]>
}

function TimelineContent({
  activeIndex,
  panelRefs,
  innerRef,
  rowRefs,
  yearRefs,
}: TimelineContentProps) {
  return (
    <div className={styles.sticky}>
      <div ref={innerRef} className={styles.inner}>
        <p className={styles.eyebrow}>( Where I&apos;ve worked )</p>

        <div className={styles.timeline}>
          <TimelineRail rowRefs={rowRefs} yearRefs={yearRefs} />

          <div className={styles.contentCol} aria-live="polite">
            <div className={styles.phaseStack}>
              {experiencePhases.map((phase, index) => (
                <div
                  key={phase.id}
                  ref={(el) => {
                    panelRefs.current[index] = el
                  }}
                  className={styles.phaseBlock}
                  aria-hidden={index !== activeIndex}
                >
                  <PhaseCompact phase={phase} />
                  <div className={styles.phaseFull}>
                    <PhaseBody phase={phase} />
                  </div>
                </div>
              ))}
            </div>
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

function applyScrollVisuals(
  track: HTMLElement,
  inner: HTMLDivElement | null,
  panelRefs: (HTMLDivElement | null)[],
  rowRefs: (HTMLLIElement | null)[],
  yearRefs: (HTMLSpanElement | null)[],
) {
  const { progress, phaseProgress, enterProgress } = getCareerScrollState(
    track,
    PHASE_COUNT,
  )

  track.style.setProperty('--timeline-progress', `${progress * 100}%`)
  track.style.setProperty('--phase-progress', String(phaseProgress))

  if (inner) {
    inner.style.opacity = '1'
    inner.style.transform = `translateY(${(1 - enterProgress) * 40}px) scale(${0.94 + enterProgress * 0.06})`
    inner.style.transformOrigin = 'left top'
  }

  panelRefs.forEach((panel, index) => {
    if (!panel) return

    const { compact, open, minimize, pop } = getPhaseVisuals(
      phaseProgress,
      index,
      PHASE_COUNT,
    )
    panel.style.setProperty('--compact-show', String(compact))
    panel.style.setProperty('--minimize', String(minimize))
    panel.style.setProperty('--open', String(open))
    panel.style.setProperty('--pop', String(pop))
  })

  rowRefs.forEach((row, index) => {
    const year = yearRefs[index]
    if (!row || !year) return

    const { topPercent, emphasis } = yearRailStyle(
      phaseProgress,
      index,
      PHASE_COUNT,
    )
    row.style.top = `${topPercent}%`
    year.style.setProperty('--year-emphasis', String(emphasis))
  })
}

export function CareerPath() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const rowRefs = useRef<(HTMLLIElement | null)[]>([])
  const yearRefs = useRef<(HTMLSpanElement | null)[]>([])
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

    let frame = 0

    const syncScroll = () => {
      applyScrollVisuals(
        track,
        innerRef.current,
        panelRefs.current,
        rowRefs.current,
        yearRefs.current,
      )

      const { phaseProgress } = getCareerScrollState(track, PHASE_COUNT)
      const next = nearestPhaseIndex(phaseProgress, PHASE_COUNT)

      if (next !== activeIndexRef.current) {
        activeIndexRef.current = next
        setActiveIndex(next)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        syncScroll()
        frame = 0
      })
    }

    syncScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    window.addEventListener('scrollend', syncScroll, { passive: true })

    const observer = new ResizeObserver(onScroll)
    observer.observe(track)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('scrollend', syncScroll)
      observer.disconnect()
      track.style.removeProperty('--timeline-progress')
      track.style.removeProperty('--phase-progress')

      if (innerRef.current) {
        innerRef.current.style.removeProperty('opacity')
        innerRef.current.style.removeProperty('transform')
      }

      panelRefs.current.forEach((panel) => {
        if (!panel) return
        panel.style.removeProperty('--minimize')
        panel.style.removeProperty('--compact-show')
        panel.style.removeProperty('--open')
        panel.style.removeProperty('--pop')
      })

      rowRefs.current.forEach((row) => {
        if (!row) return
        row.style.removeProperty('top')
      })

      yearRefs.current.forEach((year) => {
        if (!year) return
        year.style.removeProperty('--year-emphasis')
      })
    }
  }, [reduceMotion])

  if (reduceMotion) {
    return <StaticTimeline />
  }

  return (
    <div ref={scrollRef} className={styles.scrollTrack}>
      <TimelineContent
        activeIndex={activeIndex}
        panelRefs={panelRefs}
        innerRef={innerRef}
        rowRefs={rowRefs}
        yearRefs={yearRefs}
      />
    </div>
  )
}
