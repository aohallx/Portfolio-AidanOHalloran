export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string }

export type ProjectLinks = {
  live?: string
  github?: string
}

export type Project = {
  slug: string
  title: string
  tagline: string
  coverImage: string
  coverAlt: string
  media: ProjectMedia
  links: ProjectLinks
  stack: string[]
  tools: string[]
  highlights: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'unreal-game',
    title: 'Unreal Engine Game',
    tagline:
      'Full Unreal game built by hand, before the surge of IDE LLMs and coding assistants.',
    coverImage: '/projects/unreal/poster.svg',
    coverAlt: 'Unreal Engine game preview',
    media: {
      type: 'video',
      src: '/video/game-demo.mp4',
      poster: '/projects/unreal/poster.svg',
      alt: 'Gameplay footage from Unreal Engine project',
    },
    links: {
      github: 'https://github.com/aohallx/UE5-3D-demo1',
    },
    stack: ['Unreal Engine', 'C++', 'Blueprints'],
    tools: [],
    highlights: [
      'End-to-end game development from design through implementation, all manual',
      'Predates the IDE LLM wave: systems, C++, and Blueprints written by hand',
      'Showcased here with gameplay video — docs and media on GitHub',
    ],
    featured: true,
  },
  {
    slug: 'reef-radar',
    title: 'Reef Radar',
    tagline: 'Surf forecast web app — conditions, spots, and trip planning.',
    coverImage: '/projects/reef-radar/cover.svg',
    coverAlt: 'Reef Radar surf forecast interface',
    media: {
      type: 'image',
      src: '/projects/reef-radar/cover.svg',
      alt: 'Reef Radar application screenshot',
    },
    links: {
      live: 'https://reefradar.com',
    },
    stack: ['React', 'TypeScript', 'Web APIs'],
    tools: [],
    highlights: [
      'Live product at reefradar.com',
      'Forecast-driven UX inspired by real surf planning workflows',
      'Dark, media-first interface built for quick scanning',
    ],
    featured: true,
  },
  {
    slug: 'stellar-classification',
    title: 'Stellar Classification',
    tagline: 'HR diagram analysis with log-scaled features for star typing.',
    coverImage: '/projects/stellar/poster.webp',
    coverAlt: 'Stellar classification Hertzsprung–Russell diagram preview',
    media: {
      type: 'video',
      src: '/video/stellar-hertzsprung.mp4',
      poster: '/projects/stellar/poster.webp',
      alt: 'Hertzsprung–Russell diagram analysis preview',
    },
    links: {
      github:
        'https://github.com/aohallx/Stellar-Classification-via-Log-Scaled-HR-Diagram-Analysis',
    },
    stack: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
    tools: ['Jupyter'],
    highlights: [
      'Log-scaled Hertzsprung–Russell diagram feature engineering',
      'Classification pipeline with evaluation and visualization',
      'Documented in Jupyter with reproducible notebook workflow',
    ],
    featured: true,
  },
  {
    slug: 'stock-time-series',
    title: 'Stock Time-Series Analysis',
    tagline: 'Exploratory and predictive analysis on equity time series.',
    coverImage: '/projects/stocks/poster.webp',
    coverAlt: 'Tesla stock time-series analysis preview',
    media: {
      type: 'video',
      src: '/video/stock-timeseries-tesla.mp4',
      poster: '/projects/stocks/poster.webp',
      alt: 'Tesla stock time-series analysis preview',
    },
    links: {
      github: 'https://github.com/aohallx/time-series-stock-analysis',
    },
    stack: ['Python', 'pandas', 'statsmodels'],
    tools: ['Jupyter', 'Tableau'],
    highlights: [
      'Time-series decomposition, trends, and forecasting experiments',
      'Interactive exploration in Jupyter notebooks',
      'Tableau dashboards for stakeholder-friendly views',
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProjects = projects.filter((p) => p.featured)
