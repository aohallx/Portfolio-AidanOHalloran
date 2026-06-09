export const site = {
  name: "Aidan O'Halloran",
  jobTitle: 'AI & Data Engineering Solutions Analyst',
  tagline: 'Consulting at Deloitte GPS · games, data, and the web',
  employer: {
    label: 'Currently at',
    sector: 'Consulting',
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
    bioLocation: 'Orlando-based.',
    bioMemo:
      'I work in consulting on data engineering — pipelines and analytics for public-sector clients.',
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
  about: {
    paragraphs: [
      "I'm from Long Island, New York. Before Deloitte, I spent two years volunteering as a program manager at Homeland Security Investigations in NYC, at the same time a test technician at Power Device Corporation in Bohemia.",
      'These days I build data pipelines in consulting. On my own time I put together websites, games, and small apps — a full Unreal Engine project, Jupyter ML work, and Reef Radar, a live surf forecast site.',
      'When I am not at a keyboard I surf, score films, play guitar in a few bands, edit video, and still get out for lacrosse.',
    ],
  },
  beyond: {
    eyebrow: 'Side hobbies',
    title: 'Music, games, and salt water',
    hobbies: [
      {
        id: 'guitarist',
        label: 'Guitarist in 3 bands',
        image: '/hobbies/placeholder.svg',
        imageAlt: 'Guitarist photo placeholder',
      },
      {
        id: 'film',
        label: 'Film composer',
        image: '/hobbies/placeholder.svg',
        imageAlt: 'Film composer photo placeholder',
      },
      {
        id: 'dev',
        label: 'Video game & app dev',
        image: '/hobbies/placeholder.svg',
        imageAlt: 'Game and app development photo placeholder',
      },
      {
        id: 'surf',
        label: 'Surfer',
        image: '/hobbies/placeholder.svg',
        imageAlt: 'Surfing photo placeholder',
      },
      {
        id: 'lacrosse',
        label: 'Lacrosse',
        image: '/hobbies/placeholder.svg',
        imageAlt: 'Lacrosse photo placeholder',
      },
    ],
  },
  contact: {
    eyebrow: '( Contact )',
    title: 'Open to any chat',
    topics: ['Work', 'Music', 'Projects', 'Just saying hi'] as const,
  },
} as const
