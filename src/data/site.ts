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
      'I build end-to-end data pipelines, ML workflows, and analytics solutions in consulting. Surfer, film composer, musician, and game developer.',
    employerPrefix: '@',
  },
  /** Short line under email on the signature block */
  roleLine:
    'AI & Data Engineering Solutions Analyst · Deloitte GPS (Consulting) · Orlando, FL',
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
    eyebrow: 'Beyond the desk',
    title: 'Music, games, and salt water',
    body: 'Guitarist and composer in a few bands, film scores on the side, and usually building something in Unreal or on the web between surf sessions.',
    highlights: [
      'Guitarist & composer',
      'Bands & film scores',
      'Unreal Engine game dev',
      'Video editing',
      'Lacrosse',
      'Surfing',
    ],
  },
  contact: {
    eyebrow: '( Contact )',
    title: 'Open to any chat',
    subtitle:
      'Work, music, projects, or just saying hi — send a note and I will get back to you.',
    topics: ['Work', 'Music', 'Projects', 'Just saying hi'] as const,
  },
} as const
