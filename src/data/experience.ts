export type ExperienceRole = {
  org: string
  title: string
  location: string
  note: string
  logo: string
  logoAlt: string
  logoTone?: 'light' | 'dark' | 'embedded' | 'seal'
}

export type ExperiencePhase = {
  id: string
  /** Large label on the vertical rail */
  year: string
  period: string
  /** Both roles ran in parallel during this phase */
  simultaneous?: boolean
  roles: ExperienceRole[]
}

/** Relative scroll time per phase — middle phase gets more room (two parallel roles). */
export const phaseScrollWeights = [1, 1.85, 1] as const

export function getPhaseCenters(weights: readonly number[]): number[] {
  const total = weights.reduce((sum, weight) => sum + weight, 0)
  const centers: number[] = []
  let start = 0

  for (const weight of weights) {
    const segment = weight / total
    centers.push(start + segment / 2)
    start += segment
  }

  return centers
}

export function getActivePhaseIndex(
  progress: number,
  weights: readonly number[],
): number {
  const total = weights.reduce((sum, weight) => sum + weight, 0)
  let boundary = 0

  for (let i = 0; i < weights.length; i++) {
    boundary += weights[i] / total
    if (progress < boundary) return i
  }

  return weights.length - 1
}

/** Simplified career path — scroll narrative on the home projects section. */
export const experiencePhases: ExperiencePhase[] = [
  {
    id: 'intern',
    year: '2024',
    period: 'Jul – Oct 2024',
    roles: [
      {
        org: 'LANRover Network Services',
        title: 'IT Intern',
        location: 'Wantagh, NY',
        note: 'Hardware inventory data across Long Island school districts.',
        logo: '/employers/lanrover.png',
        logoAlt: 'LANRover Network Services logo',
        logoTone: 'light',
      },
    ],
  },
  {
    id: 'long-island',
    year: '2025',
    period: 'Sep 2024 – Aug 2025',
    simultaneous: true,
    roles: [
      {
        org: 'Homeland Security Investigations',
        title: 'Explorer Program Manager',
        location: 'New York, NY',
        note: 'Volunteer mock ops, post website, weekly sessions with agents.',
        logo: '/employers/hsi.png',
        logoAlt: 'Homeland Security Investigations seal',
        logoTone: 'seal',
      },
      {
        org: 'Power Device Corporation',
        title: 'Semiconductor Test Technician',
        location: 'Bohemia, NY',
        note: 'Thermal stress testing, SPC, and daily device data logging.',
        logo: '/employers/power-device.png',
        logoAlt: 'Power Device Corporation logo',
        logoTone: 'dark',
      },
    ],
  },
  {
    id: 'deloitte',
    year: '2026',
    period: 'Sep 2025 – Present',
    roles: [
      {
        org: 'Deloitte Government & Public Services',
        title: 'AI & Data Engineering Solutions Analyst',
        location: 'Orlando, FL',
        note: 'Consulting on data pipelines, ML workflows, and analytics.',
        logo: '/employers/deloitte.svg',
        logoAlt: 'Deloitte Government and Public Services logo',
        logoTone: 'embedded',
      },
    ],
  },
]
