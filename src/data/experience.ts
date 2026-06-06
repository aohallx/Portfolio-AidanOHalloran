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

/** Career phases for the home projects timeline. */
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
        title: 'Volunteer Post Program Manager',
        location: 'New York, NY',
        note: 'Volunteer mock ops, post website, weekly sessions with agents.',
        logo: '/employers/hsi.png',
        logoAlt: 'HSI Explorer Post 601 New York seal',
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
