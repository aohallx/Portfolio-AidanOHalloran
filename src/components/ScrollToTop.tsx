import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HOME_PROJECT_SCROLL_KEY } from '../lib/homeScroll'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'instant', block: 'start' })
  }
}

function scrollToProjectsOnHome() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const slug = sessionStorage.getItem(HOME_PROJECT_SCROLL_KEY)
      const projectEl = slug ? document.getElementById(`project-${slug}`) : null
      if (projectEl) {
        projectEl.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
      scrollToId('projects-magazine')
    })
  })
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

    const snapTop = () => window.scrollTo(0, 0)

    if (pathname !== '/') {
      snapTop()
      return
    }

    if (homeState?.scrollToTop || from !== '/') {
      if (from === '/projects' || from.startsWith('/projects/')) {
        if (!homeState?.scrollToTop) {
          scrollToProjectsOnHome()
          return
        }
      }

      if (homeState?.scrollToTop || from === '/contact') {
        snapTop()
        return
      }
    }

    if (hash) {
      requestAnimationFrame(() => scrollToId(hash.replace('#', '')))
    }
  }, [pathname, hash, state])

  return null
}
