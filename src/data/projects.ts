import type { SkillId } from './skills'

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string }

export type ProjectLinks = {
  live?: string
  github?: string
  tableau?: string
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
  stackIds: SkillId[]
  tools: string[]
  highlights: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'unreal-game',
    title: '3D Level-Based Survival Game',
    tagline:
      'Non-commercial Unreal Engine project built by hand with survival mechanics, combat logic, and AI enemies.',
    coverImage: '/projects/unreal/poster.webp',
    coverAlt: 'UE5 third-person action prototype gameplay preview',
    media: {
      type: 'video',
      src: '/video/unreal-ue5-zombie.mp4',
      poster: '/projects/unreal/poster.webp',
      alt: 'Gameplay footage from UE5 third-person action prototype',
    },
    links: {
      github: 'https://github.com/aohallx/UE5-3D-demo1',
    },
    stack: [
      'Unreal Engine',
      'C++',
      'Blueprints',
      'Blender',
      'Photoshop',
      'Premiere Pro',
      'After Effects',
    ],
    stackIds: ['unreal', 'cpp', 'photoshop', 'premiere', 'after-effects'],
    tools: [],
    highlights: [
      'Developed 3D maps and 30+ assets in Unreal Engine/Blender, with textures in Photoshop and trailers cut in Premiere Pro.',
      'Scripted 1000+ Blueprint/C++ functions to enhance animation, 3D-object modeling and optimized performance.',
      'Engineered 3 AI-enemy types with pathfinding, perception and combat-state logic for responsive gameplay.',
    ],
    featured: true,
  },
  {
    slug: 'reef-radar',
    title: 'Reef Radar LLC',
    tagline:
      'Reef Radar LLC is a surf forecast web app built for reading conditions, spotting breaks, and planning trips.',
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
    stackIds: ['react', 'typescript'],
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
    title: 'HR Diagram-Based Stellar Classification',
    tagline:
      'Exoplanet research via Hertzsprung–Russell diagram analysis and linear regression on 240 stellar records.',
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
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'Seaborn'],
    stackIds: ['python', 'sklearn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'jupyter'],
    tools: ['Jupyter'],
    highlights: [
      'Processed 240 stellar records and engineered 5 features (Pandas + NumPy), including log-scaled temperature and luminosity.',
      'Trained a linear regression model to view spectral patterns and show HR diagram groupings (main sequence, giants, dwarfs).',
      'Applied IQR-based outlier filtering and visualized raw vs log-scaled relationships in 2 plots using Matplotlib and Seaborn.',
    ],
    featured: true,
  },
  {
    slug: 'stock-time-series',
    title: 'Tesla Stock Reversal Prediction',
    tagline:
      'Stock market reversal prediction research via SQL preprocessing, scikit-learn RandomForest, and an end-to-end ETL pipeline.',
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
    stack: ['Python', 'SQL', 'scikit-learn', 'Tableau'],
    stackIds: ['python', 'sql', 'sklearn', 'jupyter', 'tableau'],
    tools: ['Jupyter', 'Tableau'],
    highlights: [
      'Engineered 7 ML features from Tesla stock data via SQL preprocessing and Python feature derivation (1st/2nd derivatives).',
      'Trained a scikit-learn RandomForest on 339 time steps with 5-fold TimeSeriesSplit for a 0.75 F1-score on reversal detection.',
      'Integrated an end-to-end ETL pipeline (SQL → Python → Tableau) with reversal markers across 16 months of Tesla stock data.',
    ],
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProjects = projects.filter((p) => p.featured)
