import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  HOME_PROJECT_SCROLL_KEY,
  clearReturnToHomeProjects,
  markReturnToHomeProjects,
  scrollToHomeProjectsSection,
  shouldReturnToHomeProjects,
} from '../lib/homeScroll'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'instant', block: 'start' })
  }
}

/** Route-aware scroll — project pages start at top; home restores context */
type HomeLocationState = { scrollToTop?: boolean }

export function ScrollToTop() {
  const { pathname, hash, state } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    const from = prevPath.current
    prevPath.current = pathname
    const homeState = state as HomeLocationState | null

    if (from === '/' && (pathname === '/projects' || pathname.startsWith('/projects/'))) {
      markReturnToHomeProjects()
    }

    if (pathname === '/projects') {
      sessionStorage.removeItem(HOME_PROJECT_SCROLL_KEY)
    }

    if (pathname !== '/') {
      window.scrollTo(0, 0)
      return
    }

    if (homeState?.scrollToTop) {
      clearReturnToHomeProjects()
      window.scrollTo(0, 0)
      return
    }

    const fromProjects = from === '/projects' || from.startsWith('/projects/')
    const shouldScrollToProjects = fromProjects || shouldReturnToHomeProjects()

    if (shouldScrollToProjects) {
      clearReturnToHomeProjects()
      scrollToHomeProjectsSection(from !== '/projects')
      return
    }

    if (hash) {
      requestAnimationFrame(() => scrollToId(hash.replace('#', '')))
    }
  }, [pathname, hash, state])

  return null
}
