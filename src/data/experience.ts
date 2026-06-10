export type HighlightTone = 'chrome'

export type ExperienceSegment =
  | string
  | { text: string; tone: HighlightTone }

export type ExperienceParagraph = ExperienceSegment[]

export type ExperienceRole = {
  org: string
  title: string
  location: string
  bullets: ExperienceParagraph[]
  logo: string
  logoAlt: string
  logoTone?: 'light' | 'dark' | 'embedded' | 'seal' | 'badge'
  logoScale?: number
}

export type ExperiencePhase = {
  id: string
  year: string
  period: string
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
        bullets: [
          [
            'Cleaned hardware inventory ',
            { text: 'datasets', tone: 'chrome' },
            ' for ',
            { text: '3+', tone: 'chrome' },
            ' school districts, with validation, normalization, and cross-district reporting.',
          ],
        ],
        logo: '/employers/lanrover.png',
        logoAlt: 'LANRover Network Services logo',
        logoTone: 'light',
      },
    ],
  },
  {
    id: 'long-island',
    year: '2025',
    period: 'Sep 2024 – Aug 2026',
    simultaneous: true,
    roles: [
      {
        org: 'Homeland Security Investigations',
        title: 'Volunteer Post Program Manager',
        location: 'New York, NY',
        bullets: [
          [
            'Led HSI Explorer Post 601, ',
            { text: 'mentored', tone: 'chrome' },
            ' recruits, ran weekly ops, co-built the post site (+',
            { text: '25%', tone: 'chrome' },
            ' engagement).',
          ],
        ],
        logo: '/employers/hsi.png?v=3',
        logoAlt: 'HSI Explorer Post 601 New York seal',
        logoTone: 'badge',
      },
      {
        org: 'Power Device Corporation',
        title: 'Semiconductor Test Technician',
        location: 'Bohemia, NY',
        bullets: [
          [
            'Thermal stress testing and ',
            { text: 'SPC', tone: 'chrome' },
            ' on ',
            { text: '200+', tone: 'chrome' },
            ' daily semiconductor results with engineering partners.',
          ],
        ],
        logo: '/employers/power-device.png?v=4',
        logoAlt: 'Power Device Corporation logo',
        logoTone: 'embedded',
        logoScale: 1.09,
      },
    ],
  },
  {
    id: 'deloitte',
    year: '2026',
    period: 'Sep 2026 – Present',
    roles: [
      {
        org: 'Deloitte Government & Public Services',
        title: 'AI & Data Engineering Solutions Analyst',
        location: 'Orlando, FL',
        bullets: [
          [
            'Build ',
            { text: 'end-to-end data pipelines', tone: 'chrome' },
            ' for government clients and present analytics to ',
            { text: 'client stakeholders', tone: 'chrome' },
            '.',
          ],
        ],
        logo: '/employers/deloitte.svg?v=2',
        logoAlt: 'Deloitte logo',
        logoTone: 'embedded',
      },
    ],
  },
]
