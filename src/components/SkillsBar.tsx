import { useEffect, useState } from 'react'
import { skills, WORDMARK_SKILL_IDS } from '../data/skills'
import { SkillIcon } from './SkillIcon'
import styles from './SkillsBar.module.css'

function SkillMark({ name, id }: (typeof skills)[number]) {
  const iconClass = WORDMARK_SKILL_IDS.has(id)
    ? `${styles.icon} ${styles.iconWide}`
    : styles.icon

  return (
    <li className={styles.item}>
      <SkillIcon id={id} className={iconClass} />
      <span className={styles.label}>{name}</span>
    </li>
  )
}

export function SkillsBar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const track = isMobile ? skills : [...skills, ...skills]

  return (
    <div className={styles.bar} aria-label="Tools and technologies">
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {track.map((skill, index) => (
            <SkillMark key={`${skill.id}-${index}`} {...skill} />
          ))}
        </ul>
      </div>
    </div>
  )
}
