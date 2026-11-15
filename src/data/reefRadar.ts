export const reefRadarBrand = {
  slug: 'reef-radar',
  name: 'Reef Radar',
  entityMark: 'LLC',
  logoSrc: '/projects/reef-radar/logo.svg',
  logoAlt: 'Reef Radar LLC',
  liveUrl: 'https://reefradar.com',
  description:
    'is a free surf forecast and trip planning site that I\'m actively developing with over 1,000 live surf spots, NOAA physics-based forecasts, realtime beach and flight alerts, and covering monthly data for over 147 global surf nations.',
} as const

export function isReefRadarSlug(slug: string): boolean {
  return slug === reefRadarBrand.slug
}
