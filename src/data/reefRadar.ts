export const reefRadarBrand = {
  slug: 'reef-radar',
  name: 'Reef Radar',
  entityMark: 'LLC',
  logoSrc: '/projects/reef-radar/logo.svg',
  logoAlt: 'Reef Radar LLC',
  liveUrl: 'https://reefradar.com',
  description:
    'is a surf forecast web app built for reading conditions, spotting breaks, and planning trips.',
} as const

export function isReefRadarSlug(slug: string): boolean {
  return slug === reefRadarBrand.slug
}
