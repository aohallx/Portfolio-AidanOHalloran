export type HobbyMusic = {
  hobbyId: string
  title: string
  subtitle?: string
  previewSrc?: string
  placeholder?: boolean
  coverArt: string
  coverAlt: string
  links: {
    spotify?: string
    appleMusic?: string
    youtube?: string
  }
}

export const site = {
  name: "Aidan O'Halloran",
  jobTitle: 'Data Engineer',
  tagline: 'Cloud data engineering, pipelines, and stakeholder-facing technical delivery',
  seo: {
    siteUrl: 'https://www.aidanohalloran.com',
    title: "Aidan O'Halloran | Data Engineer at Deloitte | Databricks, AWS, Python",
    description:
      "Data Engineer at Deloitte Consulting LLP (GPS). Python, SQL, Databricks, AWS, ETL/ELT pipelines, and client-facing technical delivery. Based in Orlando, FL. Open to data engineering, solutions engineering, and sales engineering conversations.",
    keywords: [
      "Aidan O'Halloran",
      'data engineer',
      'data engineering',
      'Deloitte',
      'Deloitte Consulting LLP',
      'Deloitte GPS',
      'Databricks',
      'AWS',
      'Python',
      'SQL',
      'ETL pipelines',
      'ELT',
      'analytics engineer',
      'solutions engineer',
      'sales engineer',
      'Orlando Florida',
      'New York',
    ],
    rolesOpenTo: [
      'Data Engineer',
      'Analytics Engineer',
      'Solutions Engineer',
      'Sales Engineer',
    ],
    expertise: [
      'Data Engineering',
      'Databricks',
      'AWS',
      'Python',
      'SQL',
      'ETL/ELT Pipelines',
      'Lakehouse architecture',
      'Stakeholder-facing technical delivery',
    ],
    location: {
      city: 'Orlando',
      region: 'FL',
      country: 'US',
    },
  },
  employer: {
    label: 'Currently at',
    sector: 'Government & Public Services',
    legalName: 'Deloitte Consulting LLP',
    name: 'Deloitte',
    division: 'GPS',
    href: 'https://www.linkedin.com/in/aohallx/',
  },
  hero: {
    portraitSrc: '/portrait.jpg?v=2',
    portraitAlt: "Aidan O'Halloran — black and white portrait",
    titleDark: 'DATA',
    titleLight: 'ENGINEER',
    bioLocation: 'Based in Orlando, Florida.',
    bioMemo:
      "I'm a Data Engineer at Deloitte, where I build cloud data pipelines with Python, SQL, Databricks, and AWS.",
    employerPrefix: '@',
  },
  projects: {
    headshotSrc: '/headshot-professional.png',
    headshotAlt: "Aidan O'Halloran — professional headshot",
  },
  /** Large low-contrast watermark on the signature block */
  roleGhost: 'DATA ENGINEER',
  email: 'aohalloran716@gmail.com',
  github: 'https://github.com/aohallx',
  linkedin: 'https://www.linkedin.com/in/aohallx/',
  resumePath: '/resume.pdf',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aohallx/' },
    { label: 'GitHub', href: 'https://github.com/aohallx' },
    { label: 'Resume', href: '/resume.pdf' },
  ],
  beyond: {
    eyebrow: 'Side hobbies',
    title: 'What I do in my free time',
    hobbies: [
      {
        id: 'guitarist',
        label: 'Guitarist in 3 bands',
        image: '/hobbies/guitar.png',
        imageAlt: 'Aidan O\'Halloran playing guitar live on stage',
      },
      {
        id: 'film',
        label: 'Film Composer / Producer',
        image: '/hobbies/film-composer.png',
        imageAlt: '5 Bison Lessons film score artwork with bison silhouette',
      },
      {
        id: 'dev',
        label: 'Video game & app dev',
        image: '/hobbies/game-dev.png',
        imageAlt: 'Unreal Engine game development through a sniper scope view',
      },
      {
        id: 'surf',
        label: 'Surfer',
        image: '/hobbies/surf.png',
        imageAlt: 'Two surfers walking on the beach with boards',
      },
      {
        id: 'lacrosse',
        label: 'Lacrosse',
        image: '/hobbies/lacrosse.png',
        imageAlt: 'Lacrosse game action on the field',
      },
    ],
    musicDemos: [
      {
        hobbyId: 'guitarist',
        title: 'Invisible',
        subtitle: 'Album · Guitarist/Writer',
        previewSrc: '/audio/invisible-instrumental.mp3',
        coverArt: '/hobbies/no-peace.png',
        coverAlt: 'Invisible album artwork',
        links: {
          spotify:
            'https://open.spotify.com/track/2w9h7lWJJvSqUlqrsmKi36?si=8f13434b16b043ca',
          appleMusic: 'https://music.apple.com/us/album/no-peace/1795939341',
        },
      },
      {
        hobbyId: 'film',
        title: 'Lesson Five (Stagnant)',
        subtitle: 'Album · Score Composer',
        previewSrc: '/audio/lesson-five-stagnant.wav',
        coverArt: '/hobbies/film-composer.png',
        coverAlt: '5 Bison Lessons score artwork',
        links: {
          spotify:
            'https://open.spotify.com/track/5YGFQ7XEKRvpcwYzk0xcjv?si=e2c2f27e1fc9413e',
          youtube:
            'https://www.youtube.com/playlist?list=OLAK5uy_mdjn4-xDAAnI1KMGuQJiuuxiA2Q3NgYT4',
          appleMusic:
            'https://music.apple.com/au/artist/aidan-ohalloran/1876052996',
        },
      },
      {
        hobbyId: 'dev',
        title: 'Conscious',
        subtitle: 'Single · Writer/Producer',
        previewSrc: '/audio/conscious.wav',
        coverArt: '/hobbies/conscious.jpg',
        coverAlt: 'Conscious single artwork by Aidan O\'Halloran',
        links: {
          spotify:
            'https://open.spotify.com/track/1UAF1kZCDOBX3Xs5olWbJW?si=b1562d6ff7e447ec',
          youtube: 'https://www.youtube.com/watch?v=QNKJUiDLrj0',
          appleMusic: 'https://music.apple.com/au/song/conscious/6795787413',
        },
      },
      {
        hobbyId: 'surf',
        title: 'Releasing soon',
        placeholder: true,
        coverArt: '/hobbies/music-blank.svg',
        coverAlt: 'Upcoming release artwork placeholder',
        links: {},
      },
    ],
  },
  contact: {
    eyebrow: '( Contact )',
    title: 'Open to opportunities',
    topics: ['Work', 'Music', 'Projects', 'Misc'] as const,
    backgroundImage: '/contact/guitar-bg.png',
    backgroundAlt: 'Live guitar performance, black and white',
  },
  footerDisclaimer:
    'This is a personal website. The views and projects presented here are my own and do not represent Deloitte or any other current or future employer.',
} as const
