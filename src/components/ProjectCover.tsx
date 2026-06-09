import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import styles from './ProjectCover.module.css'

type ProjectCoverProps = {
  project: Project
}

/** Magazine/card preview — loops muted video when in view, poster otherwise. */
export function ProjectCover({ project }: ProjectCoverProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const isVideo = project.media.type === 'video'

  useEffect(() => {
    const video = videoRef.current
    const wrap = wrapRef.current
    if (!video || !wrap || !isVideo) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = 'auto'
          video.play().catch(() => {
            /* autoplay blocked — poster remains */
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(wrap)
    return () => observer.disconnect()
  }, [isVideo])

  if (!isVideo) {
    return (
      <div className={styles.media}>
        <img src={project.coverImage} alt={project.coverAlt} loading="lazy" />
      </div>
    )
  }

  const { src, poster, alt } = project.media as Extract<
    Project['media'],
    { type: 'video' }
  >

  return (
    <div className={styles.media} ref={wrapRef}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
      />
    </div>
  )
}
