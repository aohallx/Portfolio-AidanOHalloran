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
  mobileLogoScale?: number
}

export type ExperiencePhase = {
  id: string
  year: string
  simultaneous?: boolean
  roles: ExperienceRole[]
}

/** Career phases for the home projects timeline. */
export const experiencePhases: ExperiencePhase[] = [
  {
    id: 'intern',
    year: '2024',
    roles: [
      {
        org: 'LANRover Network Services',
        title: 'Data Science Intern',
        location: 'Wantagh, NY',
        bullets: [
          [
            'Applied data science fundamentals to clean hardware inventory datasets with validation, normalization, and cross-district reporting.',
          ],
        ],
        logo: '/employers/lanrover.png',
        logoAlt: 'LANRover Network Services logo',
        logoTone: 'light',
        mobileLogoScale: 1.36,
      },
    ],
  },
  {
    id: 'long-island',
    year: '2025',
    simultaneous: true,
    roles: [
      {
        org: 'Homeland Security Investigations',
        title: 'Volunteer Post Program Manager',
        location: 'New York, NY',
        bullets: [
          [
            'Led HSI Explorer Post 601 with Federal agents, mentoring recruits and co-developing the website to increase engagement by 25%.',
          ],
        ],
        logo: '/employers/hsi.png?v=3',
        logoAlt: 'HSI Explorer Post 601 New York seal',
        logoTone: 'badge',
        mobileLogoScale: 1.39,
      },
      {
        org: 'Power Device Corporation',
        title: 'Semiconductor Test Technician',
        location: 'Bohemia, NY',
        bullets: [
          [
            'Collaborated with engineers to run thermal stress and data analysis on 200+ semiconductors daily.',
          ],
        ],
        logo: '/employers/power-device.png?v=4',
        logoAlt: 'Power Device Corporation logo',
        logoTone: 'embedded',
        logoScale: 1.09,
        mobileLogoScale: 1.27,
      },
    ],
  },
  {
    id: 'deloitte',
    year: '2026',
    roles: [
      {
        org: 'Deloitte Government & Public Services',
        title: 'Incoming AI & Data Engineering Solutions Analyst',
        location: 'Orlando, FL',
        bullets: [],
        logo: '/employers/deloitte.svg?v=2',
        logoAlt: 'Deloitte logo',
        logoTone: 'embedded',
      },
    ],
  },
]
