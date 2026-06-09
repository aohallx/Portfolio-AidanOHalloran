import type { ExperienceParagraph } from '../data/experience'
import styles from './ExperienceRichText.module.css'

type ExperienceRichTextProps = {
  paragraph: ExperienceParagraph
  className?: string
}

export function ExperienceRichText({
  paragraph,
  className,
}: ExperienceRichTextProps) {
  return (
    <p className={className}>
      {paragraph.map((segment, index) => {
        if (typeof segment === 'string') {
          return <span key={index}>{segment}</span>
        }

        return (
          <span key={index} className={styles.accentChrome}>
            {segment.text}
          </span>
        )
      })}
    </p>
  )
}
