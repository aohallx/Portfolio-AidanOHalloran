import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import type { HobbyMusic } from '../data/site'
import styles from './HobbyMusicPlayer.module.css'

type HobbyMusicPlayerProps = {
  id: string
  music: HobbyMusic
  isActive: boolean
  onActivate: (id: string | null) => void
}

const BAR_COUNT = 96

function buildWaveformHeights(): number[] {
  return Array.from({ length: BAR_COUNT }, (_, index) => {
    const t = index / BAR_COUNT
    const wave =
      Math.abs(Math.sin(t * Math.PI * 5.5) * 0.55) +
      Math.abs(Math.cos(t * Math.PI * 11) * 0.28) +
      Math.abs(Math.sin(t * Math.PI * 22 + 1.2) * 0.12)
    return 0.12 + wave * 0.88
  })
}

const WAVEFORM_HEIGHTS = buildWaveformHeights()

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

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.28a.75.75 0 0 1-1.02.28 9.86 9.86 0 0 0-9.94 0 .75.75 0 1 1-.74-1.3 11.36 11.36 0 0 1 11.42 0 .75.75 0 0 1 .28 1.02zm1.56-3.47a.94.94 0 0 1-1.28.34 12.9 12.9 0 0 0-13.54 0 .937.937 0 0 1-1.28-.35.95.95 0 0 1 .35-1.29 14.8 14.8 0 0 1 15.5 0 .94.94 0 0 1 .35 1.29zm1.35-3.58a1.12 1.12 0 0 1-1.53.4 16.5 16.5 0 0 0-17.74 0 1.12 1.12 0 0 1-1.15-1.92 18.7 18.7 0 0 1 20.04 0 1.12 1.12 0 0 1-.62 1.52z"
      />
    </svg>
  )
}

function AppleMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
      />
    </svg>
  )
}

const PLATFORM_ICONS = {
  spotify: SpotifyIcon,
  appleMusic: AppleMusicIcon,
  youtube: YouTubeIcon,
} as const

export function HobbyMusicPlayer({
  id,
  music,
  isActive,
  onActivate,
}: HobbyMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const waveformRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const isPlaceholder = music.placeholder || !music.previewSrc

  const links = useMemo(
    () => Object.entries(music.links).filter(([, href]) => Boolean(href)),
    [music.links],
  )

  const progress = duration > 0 ? currentTime / duration : 0
  const playedBars = Math.floor(progress * BAR_COUNT)

  useEffect(() => {
    if (!isActive) {
      const audio = audioRef.current
      if (audio) {
        audio.pause()
        setIsPlaying(false)
      }
    }
  }, [isActive])

  const togglePlay = useCallback(async () => {
    if (isPlaceholder) return

    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    onActivate(id)
    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }, [id, isPlaceholder, isPlaying, onActivate])

  const seek = useCallback(
    (clientX: number) => {
      if (isPlaceholder) return

      const audio = audioRef.current
      const waveform = waveformRef.current
      if (!audio || !waveform || !duration) return

      const rect = waveform.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      audio.currentTime = ratio * duration
      setCurrentTime(audio.currentTime)

      if (!isActive) {
        onActivate(id)
      }
    },
    [duration, id, isActive, isPlaceholder, onActivate],
  )

  const handleWaveformClick = (e: MouseEvent<HTMLDivElement>) => {
    seek(e.clientX)
  }

  return (
    <article
      className={
        isPlaceholder ? `${styles.player} ${styles.playerPlaceholder}` : styles.player
      }
    >
      {!isPlaceholder && music.previewSrc ? (
        <audio
          ref={audioRef}
          src={music.previewSrc}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onEnded={() => {
            setIsPlaying(false)
            onActivate(null)
          }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      ) : null}

      <div className={styles.header}>
        <img
          className={styles.cover}
          src={music.coverArt}
          alt={music.coverAlt}
          loading="lazy"
        />

        <div className={styles.meta}>
          <div className={styles.titleBlock}>
            <p className={styles.title}>{music.title}</p>
            {music.subtitle ? (
              <p className={styles.subtitle}>{music.subtitle}</p>
            ) : null}
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.playBtn}
              onClick={togglePlay}
              disabled={isPlaceholder}
              aria-label={isPlaying ? `Pause ${music.title}` : `Play ${music.title}`}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            {(links.length > 0 || isPlaceholder) && (
              <div className={styles.platforms}>
                {isPlaceholder ? (
                  <>
                    <span className={styles.platformSlot} aria-hidden="true">
                      <SpotifyIcon />
                    </span>
                    <span className={styles.platformSlot} aria-hidden="true">
                      <AppleMusicIcon />
                    </span>
                  </>
                ) : (
                  links.map(([platform, href]) => {
                    const Icon =
                      PLATFORM_ICONS[platform as keyof typeof PLATFORM_ICONS]
                    const label =
                      platform === 'spotify'
                        ? 'Spotify'
                        : platform === 'appleMusic'
                          ? 'Apple Music'
                          : 'YouTube'
                    return (
                      <a
                        key={platform}
                        href={href}
                        className={styles.platformLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${music.title} on ${label}`}
                      >
                        <Icon />
                      </a>
                    )
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        ref={waveformRef}
        className={styles.waveform}
        onClick={handleWaveformClick}
        role={isPlaceholder ? undefined : 'slider'}
        aria-label={isPlaceholder ? undefined : `Seek ${music.title}`}
        aria-valuemin={isPlaceholder ? undefined : 0}
        aria-valuemax={isPlaceholder ? undefined : duration}
        aria-valuenow={isPlaceholder ? undefined : currentTime}
        tabIndex={isPlaceholder ? -1 : 0}
        onKeyDown={(e) => {
          if (isPlaceholder) return
          const audio = audioRef.current
          if (!audio || !duration) return
          const step = duration * 0.05
          if (e.key === 'ArrowRight') {
            audio.currentTime = Math.min(duration, audio.currentTime + step)
          }
          if (e.key === 'ArrowLeft') {
            audio.currentTime = Math.max(0, audio.currentTime - step)
          }
        }}
      >
        {WAVEFORM_HEIGHTS.map((height, index) => (
          <span
            key={index}
            className={
              index < playedBars ? `${styles.bar} ${styles.barPlayed}` : styles.bar
            }
            style={{ height: `${height * 100}%` }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className={styles.times}>
        <span>{formatTime(currentTime)}</span>
        <span>{isPlaceholder ? '—' : formatTime(duration)}</span>
      </div>
    </article>
  )
}
