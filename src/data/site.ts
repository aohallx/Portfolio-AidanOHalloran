export const site = {
  name: "Aidan O'Halloran",
  tagline: 'Developer · games, data, and the web',
  employer: {
    label: 'Currently at',
    name: 'Deloitte',
    division: '(GPS)',
    href: 'https://www.linkedin.com/in/aohallx/',
  },
  hero: {
    portraitSrc: '/portrait.png',
    portraitAlt: "Aidan O'Halloran — black and white portrait",
    titleDark: 'AI & DATA',
    titleLight: 'ENGINEER',
    titleSub: '& ANALYST',
    bioLead:
      'ML pipelines, the web, and Unreal — building where data meets product.',
    bioDetail:
      "Aidan O'Halloran · Orlando, FL · open to the right conversation.",
    employerPrefix: '@',
    scrollLabel: 'View projects',
  },
  /** Short line under email on the signature block */
  roleLine: 'AI & Data Engineering · Orlando, FL',
  /** Large low-contrast watermark on the hero */
  roleGhost: 'AI & DATA ENGINEERING ANALYST',
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
    eyebrow: 'Beyond the desk',
    title: 'Music, games, and salt water',
    body: 'I am a guitarist and composer — in a few bands and writing film scores on the side. In my free time I build games (including my Unreal Engine project), video edit, and get outside for lacrosse and surfing.',
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
