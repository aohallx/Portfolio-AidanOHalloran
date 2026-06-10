export const reefRadarBrand = {
  slug: 'reef-radar',
  name: 'Reef Radar',
  entityMark: 'LLC',
  logoSrc: '/projects/reef-radar/logo.svg',
  logoAlt: 'Reef Radar LLC',
  liveUrl: 'https://reefradar.com',
  description:
    'is a free surf forecast and trip planning platform with 900+ live spots, NOAA physics-based forecasts, and monthly ratings for 200+ destinations.',
} as const

export function isReefRadarSlug(slug: string): boolean {
  return slug === reefRadarBrand.slug
}
