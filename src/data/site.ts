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
  jobTitle: 'AI & Data Engineering Solutions Analyst',
  tagline: 'Data, solutions, and the people side of technical work',
  employer: {
    label: 'Currently at',
    sector: 'Government & Public Services',
    name: 'Deloitte',
    division: 'GPS',
    href: 'https://www.linkedin.com/in/aohallx/',
  },
  hero: {
    portraitSrc: '/portrait.png',
    portraitAlt: "Aidan O'Halloran — black and white portrait",
    titleDark: 'AI & DATA',
    titleLight: 'ENGINEERING',
    titleSub: 'SOLUTIONS ANALYST',
    bioLocation: 'Based in Orlando, Florida.',
    bioMemo:
      'I build data pipelines and analytics for government clients, working directly with stakeholders to turn data into decisions.',
    employerPrefix: '@',
  },
  projects: {
    headshotSrc: '/headshot-professional.png',
    headshotAlt: "Aidan O'Halloran — professional headshot",
  },
  /** Large low-contrast watermark on the signature block */
  roleGhost: 'AI & DATA ENGINEERING SOLUTIONS ANALYST',
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
        label: 'Film composer',
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
        previewSrc: '/audio/no-peace.wav',
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
        title: 'Coming soon',
        placeholder: true,
        coverArt: '/hobbies/music-blank.svg',
        coverAlt: 'Upcoming release artwork placeholder',
        links: {},
      },
      {
        hobbyId: 'surf',
        title: 'Coming soon',
        placeholder: true,
        coverArt: '/hobbies/music-blank.svg',
        coverAlt: 'Upcoming release artwork placeholder',
        links: {},
      },
    ],
  },
  contact: {
    eyebrow: '( Contact )',
    title: 'Open to any chat',
    topics: ['Work', 'Music', 'Projects', 'Just saying hi'] as const,
    backgroundImage: '/contact/guitar-bg.png',
    backgroundAlt: 'Live guitar performance, black and white',
  },
} as const
