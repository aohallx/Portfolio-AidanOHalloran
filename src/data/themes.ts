export type ThemeId = 'sage' | 'gold' | 'ocean'

export type ThemeOption = {
  id: ThemeId
  label: string
  description: string
}

export const THEME_STORAGE_KEY = 'portfolio-theme'

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'sage',
    label: 'Sage',
    description: 'Soft sage green (default)',
  },
  {
    id: 'gold',
    label: 'Gold',
    description: 'Warm gold gradient',
  },
  {
    id: 'ocean',
    label: 'Ocean',
    description: 'Teal ocean gradient',
  },
]

export const DEFAULT_THEME: ThemeId = 'sage'

export function isThemeId(value: string | null): value is ThemeId {
  return value === 'sage' || value === 'gold' || value === 'ocean'
}
