export type HighlightTone = 'chrome'

export type ExperienceSegment =
  | string
  | { text: string; tone: HighlightTone }

export type ExperienceParagraph = ExperienceSegment[]

export type ExperienceRole = {
  org: string
  title: string
  location: string
  summary: ExperienceParagraph
  details?: ExperienceParagraph
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

/** Career phases for the home timeline, newest first. */
export const experiencePhases: ExperiencePhase[] = [
  {
    id: 'deloitte',
    year: '2026',
    roles: [
      {
        org: 'Deloitte Consulting LLP',
        title: 'Data Engineer',
        location: 'Lake Mary, FL',
        summary: [
          'Build ETL/ELT pipelines in Python, SQL, Databricks, and AWS for a federal housing client at Deloitte GPS.',
        ],
        details: [
          'Support data modernization with automated validation, APIs, and CI/CD, working with senior engineers and federal stakeholders to turn requirements into reliable financial data solutions.',
        ],
        logo: '/employers/deloitte.svg?v=2',
        logoAlt: 'Deloitte logo',
        logoTone: 'embedded',
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
        title: 'Volunteer Program Manager, HSI Explorer Post 601',
        location: 'New York, NY',
        summary: [
          'Partnered with federal agents at HSI Explorer Post 601 to demo technical work, mentor recruits, and ship a website that grew engagement 85%.',
        ],
        details: [
          'Delivered technical demonstrations on generative AI, Python, and SQL, and coordinated 100+ law-enforcement training sessions.',
        ],
        logo: '/employers/hsi.png?v=3',
        logoAlt: 'HSI Explorer Post 601 New York seal',
        logoTone: 'badge',
        mobileLogoScale: 1.39,
      },
      {
        org: 'Power Device Corporation',
        title: 'Data Analyst & Semiconductor Test Technician',
        location: 'Bohemia, NY',
        summary: [
          'Used Python and SQL to process 200+ devices a day, then walked engineers through what the data meant.',
        ],
        details: [
          'Modeled schemas for 1,000+ raw metrics and translated statistical anomalies into design recommendations across three engineering teams.',
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
    id: 'intern',
    year: '2024',
    roles: [
      {
        org: 'LANRover Network Services',
        title: 'Data Science Intern',
        location: 'Wantagh, NY',
        summary: [
          'Wrote Python ETL to clean hardware inventory data and stand up SQL reporting across districts.',
        ],
        details: [
          'Automated ingestion, validation, and normalization for more than 100 daily data events.',
        ],
        logo: '/employers/lanrover.png',
        logoAlt: 'LANRover Network Services logo',
        logoTone: 'light',
        mobileLogoScale: 1.36,
      },
    ],
  },
]
