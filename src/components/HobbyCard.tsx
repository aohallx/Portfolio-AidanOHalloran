import { HobbyMusicPlayer } from './HobbyMusicPlayer'
import type { Hobby } from '../data/site'
import styles from './HobbyCard.module.css'

type HobbyCardProps = {
  hobby: Hobby
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <img src={hobby.image} alt={hobby.imageAlt} loading="lazy" />
      </div>
      <p className={styles.label}>{hobby.label}</p>
      {hobby.music && <HobbyMusicPlayer {...hobby.music} />}
    </li>
  )
}
