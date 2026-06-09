export type HighlightTone = 'chrome'

export type ExperienceSegment =
  | string
  | { text: string; tone: HighlightTone }

export type ExperienceParagraph = ExperienceSegment[]

export type ExperienceRole = {
  org: string
  title: string
  location: string
  paragraphs: [ExperienceParagraph, ExperienceParagraph]
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
        paragraphs: [
          [
            'Aggregated and cleaned hardware inventory ',
            { text: 'datasets', tone: 'chrome' },
            ' across ',
            { text: '3+', tone: 'chrome' },
            ' Long Island school districts, applying ',
            { text: 'data validation', tone: 'chrome' },
            ' and consistency checks to improve asset documentation accuracy and district-level reporting.',
          ],
          [
            'Normalized device records for ',
            { text: '10+', tone: 'chrome' },
            ' IT staff, structured asset fields for ',
            { text: 'analysis', tone: 'chrome' },
            ', and built repeatable lookup workflows that supported ',
            { text: 'cross-district', tone: 'chrome' },
            ' trend spotting on device lifecycle and deployment patterns.',
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
    period: 'Sep 2024 – Aug 2025',
    simultaneous: true,
    roles: [
      {
        org: 'Homeland Security Investigations',
        title: 'Volunteer Post Program Manager',
        location: 'New York, NY',
        paragraphs: [
          [
            'Program manager for HSI Explorer Post 601. ',
            { text: 'Mentored', tone: 'chrome' },
            ' recruits, ran weekly post operations, and co-developed the post website that increased online engagement by ',
            { text: '25%', tone: 'chrome' },
            '.',
          ],
          [
            'Facilitated ',
            { text: '30+', tone: 'chrome' },
            ' weekly sessions with federal agents, coordinating mock calls, suspect confrontations, arrest-warrant simulations, and witness interview exercises alongside post advisors.',
          ],
        ],
        logo: '/employers/hsi.png',
        logoAlt: 'HSI Explorer Post 601 New York seal',
        logoTone: 'seal',
      },
      {
        org: 'Power Device Corporation',
        title: 'Semiconductor Test Technician',
        location: 'Bohemia, NY',
        paragraphs: [
          [
            'Conducted thermal stress and reliability testing on semiconductors, collecting ',
            { text: 'structured datasets', tone: 'chrome' },
            ' to evaluate compliance with performance thresholds.',
          ],
          [
            'Logged and analyzed ',
            { text: '200+', tone: 'chrome' },
            ' device test results daily using ',
            { text: 'statistical process control (SPC)', tone: 'chrome' },
            ' to detect trends and failure patterns, partnering with engineers on data-driven processes.',
          ],
        ],
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
        paragraphs: [
          [
            'Design and build ',
            { text: 'end-to-end data pipelines', tone: 'chrome' },
            ' for government and public-sector clients, covering ingestion, transformation, orchestration, and quality checks for analytics and ML downstream.',
          ],
          [
            'Present analytics and AI/ML work to ',
            { text: 'client stakeholders', tone: 'chrome' },
            ' through demos, working sessions, and executive-ready reporting, translating technical delivery into ',
            { text: 'clear recommendations', tone: 'chrome' },
            ' teams can act on.',
          ],
        ],
        logo: '/employers/deloitte.svg',
        logoAlt: 'Deloitte Government and Public Services logo',
        logoTone: 'embedded',
      },
    ],
  },
]
