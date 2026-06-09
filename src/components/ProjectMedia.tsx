import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from 'react'
import type { ProjectMedia as ProjectMediaType } from '../data/projects'
import styles from './ProjectMedia.module.css'

type ProjectMediaProps = {
  media: ProjectMediaType
  autoplay?: boolean
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
      />
    </svg>
  )
}

function ExitFullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
      />
    </svg>
  )
}

function VideoPlayer({
  src,
  poster,
  alt,
  autoplay,
}: {
  src: string
  poster: string
  alt: string
  autoplay: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const showChrome = hovered || !isPlaying || reduceMotion
  const showTapLayer = isPlaying && !showChrome

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {
        /* blocked */
      })
    } else {
      video.pause()
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    const shell = shellRef.current
    if (!shell) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void shell.requestFullscreen()
    }
  }, [])

  const stopBubble = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const seekFromClientX = useCallback((clientX: number) => {
    const video = videoRef.current
    const track = trackRef.current
    if (!video || !track || !duration) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    video.currentTime = ratio * duration
    setCurrentTime(video.currentTime)
  }, [duration])

  const handleTrackClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    seekFromClientX(e.clientX)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      togglePlay()
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const video = videoRef.current
      if (video) video.currentTime = Math.max(0, video.currentTime - 2)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const video = videoRef.current
      if (video) video.currentTime = Math.min(duration, video.currentTime + 2)
    }
    if (e.key === 'f') {
      e.preventDefault()
      toggleFullscreen()
    }
  }

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === shellRef.current)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(motion.matches)
    syncMotion()
    motion.addEventListener('change', syncMotion)

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onTime = () => setCurrentTime(video.currentTime)
    const onMeta = () => setDuration(video.duration)

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    video.addEventListener('timeupdate', onTime)
    video.addEventListener('loadedmetadata', onMeta)
    video.addEventListener('durationchange', onMeta)

    if (motion.matches) {
      video.pause()
      video.removeAttribute('autoplay')
    } else if (autoplay) {
      video.play().catch(() => {
        /* autoplay blocked */
      })
    }

    return () => {
      motion.removeEventListener('change', syncMotion)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('loadedmetadata', onMeta)
      video.removeEventListener('durationchange', onMeta)
    }
  }, [autoplay, src])

  return (
    <div
      ref={shellRef}
      className={styles.videoShell}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="group"
      aria-label={`Video: ${alt}`}
    >
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        playsInline
        muted
        loop={autoplay}
        autoPlay={autoplay && !reduceMotion}
        preload="metadata"
      >
        Your browser does not support video playback.
      </video>

      {showTapLayer && (
        <button
          type="button"
          className={styles.tapLayer}
          onClick={togglePlay}
          aria-label="Pause video"
        />
      )}

      <div
        className={
          showChrome ? `${styles.overlay} ${styles.overlayVisible}` : styles.overlay
        }
        aria-hidden={!showChrome}
        onClick={togglePlay}
      >
        <div className={styles.vignette} />

        <button
          type="button"
          className={styles.playToggle}
          onClick={(e) => {
            e.stopPropagation()
            togglePlay()
          }}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <span className={styles.playRing} aria-hidden="true" />
          {isPlaying ? (
            <PauseIcon />
          ) : (
            <span className={styles.playIcon}>
              <PlayIcon />
            </span>
          )}
        </button>

        <div className={styles.chrome} onClick={stopBubble}>
          <div
            ref={trackRef}
            className={styles.progressTrack}
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            onClick={handleTrackClick}
          >
            <div className={styles.progressGlow} style={{ width: `${progress}%` }} />
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            <div className={styles.progressThumb} style={{ left: `${progress}%` }} />
          </div>

          <div className={styles.metaRow}>
            <span className={styles.timeCurrent}>{formatTime(currentTime)}</span>
            <span className={styles.timeDivider} aria-hidden="true" />
            <span className={styles.timeDuration}>{formatTime(duration)}</span>
            <button
              type="button"
              className={styles.fullscreenBtn}
              onClick={(e) => {
                e.stopPropagation()
                toggleFullscreen()
              }}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
            </button>
          </div>
        </div>
      </div>

      {!showChrome && isPlaying && (
        <div className={styles.progressPeek} aria-hidden="true">
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  )
}

export function ProjectMedia({ media, autoplay = false }: ProjectMediaProps) {
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
      <VideoPlayer
        src={media.src}
        poster={media.poster}
        alt={media.alt}
        autoplay={autoplay}
      />
    </div>
  )
}
