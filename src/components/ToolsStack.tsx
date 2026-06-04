import { toolCategories } from '../data/tools'
import { SkillIcon } from './SkillIcon'
import styles from './ToolsStack.module.css'

function ToolCard({ id, name }: (typeof toolCategories)[number]['items'][number]) {
  const iconClass = styles.icon

  return (
    <li className={styles.card}>
      <span className={styles.iconWrap} aria-hidden="true">
        <SkillIcon id={id} className={iconClass} />
      </span>
      <span className={styles.name}>{name}</span>
    </li>
  )
}

export function ToolsStack() {
  return (
    <section
      className={styles.section}
      aria-labelledby="tools-heading"
    >
      <header className={styles.header}>
        <h2 id="tools-heading" className={styles.title}>
          Tools & stack
        </h2>
        <p className={styles.lead}>
          Languages, ML tooling, and what I ship on the web and in engines.
        </p>
      </header>
      <div className={styles.categories}>
        {toolCategories.map((cat) => (
          <div key={cat.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>{cat.title}</h3>
            <ul className={styles.grid}>
              {cat.items.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
