export type CareerScrollState = {
  progress: number
  phaseProgress: number
  enterProgress: number
}

export type PhaseVisuals = {
  /** Compact logo + title strip (pinned past years) */
  compact: number
  /** Full role card visibility */
  open: number
  /** Scroll-linked shrink while a year is active */
  minimize: number
  /** Entrance pop for the active card */
  pop: number
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function smoothstep(value: number): number {
  const t = clamp(value, 0, 1)
  return t * t * (3 - 2 * t)
}

export function smootherstep(value: number): number {
  const t = clamp(value, 0, 1)
  return t * t * t * (t * (t * 6 - 15) + 10)
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function popOut(value: number): number {
  const t = clamp(value, 0, 1)
  const c1 = 1.12
  return 1 + c1 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

export function getCareerScrollState(
  track: HTMLElement,
  phaseCount: number,
): CareerScrollState {
  if (phaseCount <= 1) {
    return { progress: 0, phaseProgress: 0, enterProgress: 1 }
  }

  const rect = track.getBoundingClientRect()
  const viewport = window.innerHeight
  const scrollable = track.offsetHeight - viewport

  const enterProgress = popOut(
    clamp(1 - rect.top / (viewport * 0.8), 0, 1),
  )

  if (scrollable <= 0) {
    return { progress: 0, phaseProgress: 0, enterProgress }
  }

  if (rect.top > 0) {
    return { progress: 0, phaseProgress: 0, enterProgress }
  }

  const scrolled = clamp(-rect.top, 0, scrollable)
  const progress = scrolled / scrollable
  const phaseProgress = progress * (phaseCount - 1)

  return { progress, phaseProgress, enterProgress }
}

/**
 * Per-year scroll visuals.
 * Past years → compact strip. Active year → full card (minimizes as you scroll).
 * Final year stays fully open once reached.
 */
export function getPhaseVisuals(
  phaseProgress: number,
  index: number,
  phaseCount: number,
): PhaseVisuals {
  const isLast = index === phaseCount - 1
  const dist = phaseProgress - index

  if (dist < -0.05) {
    return { compact: 0, open: 0, minimize: 0, pop: 0 }
  }

  if (dist < 0.14) {
    const t = smootherstep(clamp((dist + 0.05) / 0.19, 0, 1))
    return { compact: 0, open: t, minimize: 0, pop: t }
  }

  if (isLast) {
    return { compact: 0, open: 1, minimize: 0, pop: 1 }
  }

  if (dist < 0.58) {
    const minimize = smootherstep((dist - 0.14) / 0.44)
    return {
      compact: 0,
      open: 1,
      minimize,
      pop: 1,
    }
  }

  if (dist < 0.84) {
    const handoff = smootherstep((dist - 0.58) / 0.26)
    const clip = smootherstep(clamp((handoff - 0.72) / 0.28, 0, 1))
    return {
      compact: handoff,
      open: 1 - clip,
      minimize: 1,
      pop: 1 - handoff * 0.12,
    }
  }

  return { compact: 1, open: 0, minimize: 1, pop: 0 }
}

export function nearestPhaseIndex(
  phaseProgress: number,
  phaseCount: number,
): number {
  return clamp(Math.round(phaseProgress), 0, phaseCount - 1)
}

export type YearRailStyle = {
  topPercent: number
  emphasis: number
}

export function yearRailStyle(
  phaseProgress: number,
  index: number,
  phaseCount: number,
): YearRailStyle {
  const { compact, open, minimize } = getPhaseVisuals(
    phaseProgress,
    index,
    phaseCount,
  )
  const stackTop = 6 + index * 9.5
  const activeTop = 40
  const futureTop = 68 + Math.max(0, index - phaseProgress) * 10

  let topPercent: number
  if (compact > 0.2) {
    topPercent = lerp(activeTop, stackTop, smootherstep(compact))
  } else if (phaseProgress < index - 0.08) {
    topPercent = futureTop
  } else {
    topPercent = activeTop
  }

  const activeWeight = Math.max(open, compact > 0.5 ? 0.45 : 0)
  const emphasis =
    activeWeight * (1 - minimize * 0.75) * (1 - compact * 0.9)

  return { topPercent, emphasis: clamp(emphasis, 0.28, 1) }
}
