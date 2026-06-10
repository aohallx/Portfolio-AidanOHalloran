import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import {
  clearReturnToHomeProjects,
  clearSavedScrollPosition,
  isProjectDetailPath,
  isScrollRestorePath,
  markReturnToHomeProjects,
  restoreListScrollPosition,
  saveScrollPosition,
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
  const navigationType = useNavigationType()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

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
      if (isScrollRestorePath(from)) {
        markReturnToHomeProjects()
      }
      window.scrollTo(0, 0)
      return
    }

    if (pathname === '/projects') {
      const returningFromProject = isProjectDetailPath(from)
      const isPop = navigationType === 'POP'

      if (returningFromProject || isPop) {
        restoreListScrollPosition('/projects')
        return
      }

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

    const fromProjects = from === '/projects' || isProjectDetailPath(from)
    const shouldRestore =
      fromProjects || shouldReturnToHomeProjects() || navigationType === 'POP'

    if (shouldRestore) {
      clearReturnToHomeProjects()
      restoreListScrollPosition('/')
      return
    }

    if (hash) {
      requestAnimationFrame(() => scrollToId(hash.replace('#', '')))
    }
  }, [pathname, hash, state, navigationType])

  return null
}
