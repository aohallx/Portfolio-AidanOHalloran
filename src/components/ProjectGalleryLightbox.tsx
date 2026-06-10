import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectGalleryItem } from '../lib/projectGallery'
import styles from './ProjectGalleryLightbox.module.css'

type ProjectGalleryLightboxProps = {
  items: ProjectGalleryItem[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d={
          direction === 'left'
            ? 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
            : 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      />
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

const MAX_LIGHTBOX_UPSCALE = 1.35

function computeLightboxImageSize(naturalWidth: number, naturalHeight: number) {
  const maxWidth = window.innerWidth - 64
  const maxHeight = window.innerHeight - 72
  const fitScale = Math.min(
    maxWidth / naturalWidth,
    maxHeight / naturalHeight,
  )
  const scale = Math.min(fitScale, MAX_LIGHTBOX_UPSCALE)

  return {
    width: Math.round(naturalWidth * scale),
    height: Math.round(naturalHeight * scale),
  }
}

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  )

  const syncSize = useCallback(() => {
    const img = imgRef.current
    if (!img?.naturalWidth) return

    setSize(
      computeLightboxImageSize(img.naturalWidth, img.naturalHeight),
    )
  }, [])

  useEffect(() => {
    setSize(null)
  }, [src])

  useEffect(() => {
    window.addEventListener('resize', syncSize)
    return () => window.removeEventListener('resize', syncSize)
  }, [syncSize])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={styles.media}
      style={
        size
          ? { width: `${size.width}px`, height: `${size.height}px` }
          : undefined
      }
      onLoad={syncSize}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  )
}

export function ProjectGalleryLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: ProjectGalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const mediaShellRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const item = items[index]
  const total = items.length

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total)
  }, [index, onIndexChange, total])

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total)
  }, [index, onIndexChange, total])

  const toggleFullscreen = useCallback(() => {
    const shell = mediaShellRef.current
    if (!shell) return

    if (document.fullscreenElement) {
      void document.exitFullscreen()
      return
    }

    void shell.requestFullscreen()
  }, [])

  useEffect(() => {
    setHovered(false)
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    }
  }, [index])

  useEffect(() => {
    if (total <= 0) return

    const preloadIndices = new Set([
      index,
      (index - 1 + total) % total,
      (index + 1) % total,
    ])

    for (const preloadIndex of preloadIndices) {
      const preloadItem = items[preloadIndex]
      if (preloadItem?.type !== 'image') continue

      const img = new Image()
      img.decoding = 'async'
      img.src = preloadItem.src
    }
  }, [index, items, total])

  useEffect(() => {
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === mediaShellRef.current)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (document.fullscreenElement) {
          void document.exitFullscreen()
          return
        }
        onClose()
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [goNext, goPrev, onClose])

  if (!item) return null

  const showFullscreenControl = item.type === 'image' || item.type === 'video'

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Project media gallery"
      onClick={onClose}
    >
      <div
        className={styles.toolbar}
        onClick={(event) => event.stopPropagation()}
      >
        <span className={styles.counter}>
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close gallery"
        >
          ×
        </button>
      </div>

      {total > 1 && (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navPrev}`}
          onClick={(event) => {
            event.stopPropagation()
            goPrev()
          }}
          aria-label="Previous image"
        >
          <ChevronIcon direction="left" />
        </button>
      )}

      <div className={styles.stage}>
        <div
          ref={mediaShellRef}
          className={styles.mediaShell}
          onClick={(event) => event.stopPropagation()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {item.type === 'image' ? (
            <LightboxImage src={item.src} alt={item.alt} />
          ) : (
            <video
              key={item.src}
              src={item.src}
              poster={item.poster}
              className={styles.media}
              controls
              autoPlay
              playsInline
            />
          )}

          {showFullscreenControl && (
            <button
              type="button"
              className={
                hovered || isFullscreen
                  ? `${styles.fullscreenBtn} ${styles.fullscreenBtnVisible}`
                  : styles.fullscreenBtn
              }
              onClick={(event) => {
                event.stopPropagation()
                toggleFullscreen()
              }}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
            </button>
          )}
        </div>
      </div>

      {item.caption && <p className={styles.caption}>{item.caption}</p>}

      {total > 1 && (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navNext}`}
          onClick={(event) => {
            event.stopPropagation()
            goNext()
          }}
          aria-label="Next image"
        >
          <ChevronIcon direction="right" />
        </button>
      )}
    </div>
  )
}
