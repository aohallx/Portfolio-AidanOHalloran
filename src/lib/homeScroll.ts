export const HOME_PROJECT_SCROLL_KEY = 'portfolio:home-project-slug'
export const HOME_RETURN_TO_PROJECTS_KEY = 'portfolio:return-to-home-projects'
export const HOME_RETURN_FROM_PATH_KEY = 'portfolio:return-from-path'

const SCROLL_Y_KEYS = {
  '/': 'portfolio:scroll-y:home',
  '/projects': 'portfolio:scroll-y:projects',
} as const

export type ScrollRestorePath = keyof typeof SCROLL_Y_KEYS

if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

export function isScrollRestorePath(pathname: string): pathname is ScrollRestorePath {
  return pathname === '/' || pathname === '/projects'
}

export function isProjectDetailPath(pathname: string): boolean {
  return pathname.startsWith('/projects/') && pathname !== '/projects'
}

export function markReturnToHomeProjects() {
  sessionStorage.setItem(HOME_RETURN_TO_PROJECTS_KEY, '1')
}

export function clearReturnToHomeProjects() {
  sessionStorage.removeItem(HOME_RETURN_TO_PROJECTS_KEY)
  sessionStorage.removeItem(HOME_RETURN_FROM_PATH_KEY)
}

export function shouldReturnToHomeProjects(): boolean {
  return sessionStorage.getItem(HOME_RETURN_TO_PROJECTS_KEY) === '1'
}

export function getReturnFromPath(): ScrollRestorePath | null {
  const from = sessionStorage.getItem(HOME_RETURN_FROM_PATH_KEY)
  if (!isScrollRestorePath(from ?? '')) return null
  return from as ScrollRestorePath
}

export function markProjectDetailEntry(fromPath: string) {
  markReturnToHomeProjects()
  if (isScrollRestorePath(fromPath)) {
    sessionStorage.setItem(HOME_RETURN_FROM_PATH_KEY, fromPath)
  }
}

export function shouldRestoreListPage(pathname: ScrollRestorePath): boolean {
  return shouldReturnToHomeProjects() && getReturnFromPath() === pathname
}

export function saveScrollPosition(pathname: ScrollRestorePath) {
  const y = window.scrollY
  if (y <= 0) return
  sessionStorage.setItem(SCROLL_Y_KEYS[pathname], String(y))
}

export function captureListScrollForProjectNav(pathname: string) {
  if (!isScrollRestorePath(pathname)) return
  saveScrollPosition(pathname)
  markReturnToHomeProjects()
  sessionStorage.setItem(HOME_RETURN_FROM_PATH_KEY, pathname)
}

export function getSavedScrollPosition(pathname: ScrollRestorePath): number | null {
  const raw = sessionStorage.getItem(SCROLL_Y_KEYS[pathname])
  if (raw === null) return null
  const y = Number(raw)
  return Number.isFinite(y) ? y : null
}

export function clearSavedScrollPosition(pathname: ScrollRestorePath) {
  sessionStorage.removeItem(SCROLL_Y_KEYS[pathname])
}

function getNavOffset(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-height')
    .trim()
  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) ? parsed : 72
}

function scrollToY(y: number) {
  window.scrollTo({ top: Math.max(0, y), left: 0, behavior: 'auto' })
}

export function scrollToProjectsTarget(): boolean {
  const slug = sessionStorage.getItem(HOME_PROJECT_SCROLL_KEY)
  const projectEl = slug ? document.getElementById(`project-${slug}`) : null
  const sectionEl =
    document.getElementById('projects-magazine') ??
    document.getElementById('projects')

  const target = projectEl ?? sectionEl
  if (!target) return false

  const top =
    target.getBoundingClientRect().top + window.scrollY - getNavOffset()
  scrollToY(top)
  return true
}

function runWithRetries(run: () => boolean, delays = [0, 32, 120, 280]) {
  let settled = false
  const timeoutIds: number[] = []
  let rafId = 0

  const listenerOpts: AddEventListenerOptions = { passive: true, capture: true }

  const cleanup = () => {
    window.removeEventListener('touchstart', onUserInput, listenerOpts)
    window.removeEventListener('wheel', onUserInput, listenerOpts)
    timeoutIds.forEach((id) => window.clearTimeout(id))
    if (rafId) cancelAnimationFrame(rafId)
  }

  const finish = (success: boolean) => {
    if (settled) return
    if (success) {
      settled = true
      cleanup()
    }
  }

  const onUserInput = () => {
    settled = true
    cleanup()
  }

  const attempt = () => {
    if (settled) return
    finish(run())
  }

  window.addEventListener('touchstart', onUserInput, listenerOpts)
  window.addEventListener('wheel', onUserInput, listenerOpts)

  for (const delay of delays) {
    if (delay === 0) {
      rafId = requestAnimationFrame(attempt)
    } else {
      timeoutIds.push(window.setTimeout(attempt, delay))
    }
  }
}

/** Scroll home (or projects list) to the projects magazine / opened project card. */
export function scrollToHomeProjectsSection() {
  runWithRetries(scrollToProjectsTarget)
}

export function tryRestoreListPageAfterProject(
  pathname: ScrollRestorePath,
): boolean {
  if (pathname === '/') {
    return scrollToProjectsTarget()
  }

  const savedY = getSavedScrollPosition('/projects')
  if (savedY !== null && savedY > 0) {
    scrollToY(savedY)
    return true
  }

  return scrollToProjectsTarget()
}

export function restoreListPageAfterProject(pathname: ScrollRestorePath) {
  runWithRetries(() => {
    const restored = tryRestoreListPageAfterProject(pathname)
    if (restored) {
      clearReturnToHomeProjects()
    }
    return restored
  })
}
