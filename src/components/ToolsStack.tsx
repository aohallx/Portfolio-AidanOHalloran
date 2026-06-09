import { type CSSProperties } from 'react'
import { toolCategories } from '../data/tools'
import { ToolBrandIcon } from './ToolBrandIcon'
import styles from './ToolsStack.module.css'

const categoryLayout = [
  styles.blockPrimary,
  styles.blockSecondary,
  styles.blockTertiary,
  styles.blockInfra,
] as const

function ToolTile({ id, name }: (typeof toolCategories)[number]['items'][number]) {
  return (
    <li className={styles.tile}>
      <span className={styles.tileIcon} aria-hidden="true">
        <ToolBrandIcon id={id} className={styles.logo} />
      </span>
      <span className={styles.tileName}>{name}</span>
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
                {category.items.map((tool) => (
                  <ToolTile key={tool.id} {...tool} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
