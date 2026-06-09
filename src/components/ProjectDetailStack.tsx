import { SKILL_LIGHT_TILE_IDS, type SkillId } from '../data/skills'
import { skillLabels } from '../data/skillLabels'
import { ToolBrandIcon } from './ToolBrandIcon'
import styles from './ProjectDetailStack.module.css'

type ProjectDetailStackProps = {
  ids: SkillId[]
}

export function ProjectDetailStack({ ids }: ProjectDetailStackProps) {
  if (ids.length === 0) return null

  return (
    <ul className={styles.grid} aria-label="Skills used">
      {ids.map((id) => (
        <li key={id} className={styles.item}>
          <span
            className={
              SKILL_LIGHT_TILE_IDS.has(id)
                ? `${styles.tile} ${styles.tileLight}`
                : `${styles.tile} ${styles.tileDark}`
            }
          >
            <ToolBrandIcon id={id} className={styles.icon} />
          </span>
          <span className={styles.label}>{skillLabels[id]}</span>
        </li>
      ))}
    </ul>
  )
}
