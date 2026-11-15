import { THEME_OPTIONS } from '../data/themes'
import { useTheme } from '../context/ThemeContext'
import styles from './ThemeSwitcher.module.css'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.wrap} role="group" aria-label="Site color theme">
      {THEME_OPTIONS.map((option) => {
        const selected = theme === option.id

        return (
          <button
            key={option.id}
            type="button"
            className={
              selected
                ? `${styles.swatch} ${styles.selected} ${styles[option.id]}`
                : `${styles.swatch} ${styles[option.id]}`
            }
            aria-pressed={selected}
            aria-label={option.description}
            title={option.label}
            onClick={() => setTheme(option.id)}
          />
        )
      })}
    </div>
  )
}
