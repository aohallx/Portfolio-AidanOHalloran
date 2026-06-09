import { SKILL_LIGHT_TILE_IDS, type SkillId } from '../data/skills'
import { skillLabels } from '../data/skillLabels'
import { ToolBrandIcon } from './ToolBrandIcon'
import styles from './ProjectStackIcons.module.css'

type ProjectStackIconsProps = {
  ids: SkillId[]
}

export function ProjectStackIcons({ ids }: ProjectStackIconsProps) {
  if (ids.length === 0) return null

  return (
    <ul className={styles.row} aria-label="Tech stack">
      {ids.map((id) => (
        <li key={id}>
          <span
            className={
              SKILL_LIGHT_TILE_IDS.has(id)
                ? `${styles.tile} ${styles.tileLight}`
                : `${styles.tile} ${styles.tileDark}`
            }
            title={skillLabels[id]}
          >
            <ToolBrandIcon id={id} className={styles.icon} />
            <span className={styles.srOnly}>{skillLabels[id]}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
