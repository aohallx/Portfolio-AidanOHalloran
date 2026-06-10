import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  clearReturnToHomeProjects,
  clearSavedScrollPosition,
  isProjectDetailPath,
  isScrollRestorePath,
  markProjectDetailEntry,
  saveScrollPosition,
  shouldReturnToHomeProjects,
} from '../lib/homeScroll'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'auto', block: 'start' })
  }
}

/** Route-aware scroll — project pages start at top; list pages restore via ListScrollRestore */
type HomeLocationState = { scrollToTop?: boolean }

export function ScrollToTop() {
  const { pathname, hash, state } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (!isScrollRestorePath(pathname)) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        saveScrollPosition(pathname)
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useLayoutEffect(() => {
    const from = prevPath.current
    prevPath.current = pathname
    const homeState = state as HomeLocationState | null

    if (isScrollRestorePath(from) && pathname !== from) {
      saveScrollPosition(from)
    }

    if (isProjectDetailPath(pathname)) {
      markProjectDetailEntry(from)
      window.scrollTo(0, 0)
      return
    }

    if (pathname === '/projects') {
      if (shouldReturnToHomeProjects()) return
      window.scrollTo(0, 0)
      return
    }

    if (pathname !== '/') {
      window.scrollTo(0, 0)
      return
    }

    if (homeState?.scrollToTop) {
      clearReturnToHomeProjects()
      clearSavedScrollPosition('/')
      window.scrollTo(0, 0)
      return
    }

    if (shouldReturnToHomeProjects()) return

    if (hash) {
      requestAnimationFrame(() => scrollToId(hash.replace('#', '')))
    }
  }, [pathname, hash, state])

  return null
}
