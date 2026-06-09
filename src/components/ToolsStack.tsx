import { type CSSProperties } from 'react'
import { SKILL_WHITE_TILE_IDS } from '../data/skillAssets'
import { toolCategories, type ToolItem } from '../data/tools'
import { ConceptIcon } from './ConceptIcon'
import { ToolBrandIcon } from './ToolBrandIcon'
import styles from './ToolsStack.module.css'

const categoryLayout = [
  styles.blockPrimary,
  styles.blockSecondary,
  styles.blockTertiary,
  styles.blockWeb,
] as const

function ToolTile({ item }: { item: ToolItem }) {
  if (item.kind === 'concept') {
    return (
      <li className={styles.tile}>
        <span className={styles.tileIcon} aria-hidden="true">
          <ConceptIcon id={item.id} className={styles.logo} />
        </span>
        <span className={styles.tileName}>{item.name}</span>
      </li>
    )
  }

  const useLightTile = SKILL_WHITE_TILE_IDS.has(item.id)

  return (
    <li
      className={useLightTile ? `${styles.tile} ${styles.tileLight}` : styles.tile}
    >
      <span className={styles.tileIcon} aria-hidden="true">
        <ToolBrandIcon id={item.id} className={styles.logo} />
      </span>
      <span
        className={useLightTile ? `${styles.tileName} ${styles.tileNameDark}` : styles.tileName}
      >
        {item.name}
      </span>
    </li>
  )
}

export function ToolsStack() {
  return (
    <section
      className={styles.section}
      data-nav-surface="light"
      aria-labelledby="tools-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>( Tools )</p>
          <h2 id="tools-heading" className={styles.heading}>
            Tools
          </h2>
        </header>

        <div className={styles.magazine}>
          {toolCategories.map((category, index) => (
            <article
              key={category.title}
              className={`${styles.block} ${categoryLayout[index] ?? styles.blockDefault}`}
              style={{ '--i': index } as CSSProperties}
            >
              <div className={styles.blockHead}>
                <h3 className={styles.blockTitle}>{category.title}</h3>
              </div>

              <ul className={styles.logoGrid}>
                {category.items.map((item) => (
                  <ToolTile
                    key={`${category.title}-${
                      item.kind === 'skill' ? item.id : item.id
                    }`}
                    item={item}
                  />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
