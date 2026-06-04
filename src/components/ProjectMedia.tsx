import { useEffect, useRef } from 'react'
import type { ProjectMedia as ProjectMediaType } from '../data/projects'
import styles from './ProjectMedia.module.css'

type ProjectMediaProps = {
  media: ProjectMediaType
  autoplay?: boolean
}

export function ProjectMedia({ media, autoplay = false }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || media.type !== 'video') return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) {
      video.pause()
      video.removeAttribute('autoplay')
      return
    }

    if (autoplay) {
      video.play().catch(() => {
        /* autoplay blocked — poster still visible */
      })
    }
  }, [media, autoplay])

  if (media.type === 'image') {
    return (
      <div className={styles.wrap}>
        <img
          src={media.src}
          alt={media.alt}
          className={styles.image}
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <video
        ref={videoRef}
        className={styles.video}
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        muted
        loop={autoplay}
        autoPlay={autoplay}
        preload="metadata"
      >
        Your browser does not support video playback.
      </video>
      <p className={styles.hint}>
        Replace <code>public/video/game-demo.mp4</code> with your gameplay
        footage.
      </p>
    </div>
  )
}
