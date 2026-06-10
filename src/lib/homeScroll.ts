export const HOME_PROJECT_SCROLL_KEY = 'portfolio:home-project-slug'
export const HOME_RETURN_TO_PROJECTS_KEY = 'portfolio:return-to-home-projects'

const SCROLL_Y_KEYS = {
  '/': 'portfolio:scroll-y:home',
  '/projects': 'portfolio:scroll-y:projects',
} as const

export type ScrollRestorePath = keyof typeof SCROLL_Y_KEYS

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
}

export function shouldReturnToHomeProjects(): boolean {
  return sessionStorage.getItem(HOME_RETURN_TO_PROJECTS_KEY) === '1'
}

export function saveScrollPosition(pathname: ScrollRestorePath) {
  sessionStorage.setItem(SCROLL_Y_KEYS[pathname], String(window.scrollY))
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

function scrollToElement(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'instant', block: 'start' })
}

/** Restore an exact scroll offset once layout has enough height. */
export function restoreScrollPosition(y: number) {
  const tryRestore = (attempt = 0) => {
    window.scrollTo(0, y)

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight
    const settled = maxScroll <= 0 || Math.abs(window.scrollY - y) <= 2

    if (!settled && attempt < 12) {
      requestAnimationFrame(() => tryRestore(attempt + 1))
    }
  }

  requestAnimationFrame(() => tryRestore())
}

/** Scroll home to the projects magazine, or a specific featured project card. */
export function scrollToHomeProjectsSection(preferProjectSlug = true) {
  const tryScroll = (attempt = 0) => {
    const slug = preferProjectSlug
      ? sessionStorage.getItem(HOME_PROJECT_SCROLL_KEY)
      : null
    const projectEl = slug ? document.getElementById(`project-${slug}`) : null
    const sectionEl =
      document.getElementById('projects-magazine') ??
      document.getElementById('projects')

    const target = projectEl ?? sectionEl
    if (target) {
      scrollToElement(target)
      return
    }

    if (attempt < 8) {
      requestAnimationFrame(() => tryScroll(attempt + 1))
    }
  }

  requestAnimationFrame(() => tryScroll())
}

/** Prefer saved offset; fall back to projects section / project card. */
export function restoreListScrollPosition(pathname: ScrollRestorePath) {
  const savedY = getSavedScrollPosition(pathname)
  if (savedY !== null) {
    restoreScrollPosition(savedY)
    return true
  }

  if (pathname === '/') {
    scrollToHomeProjectsSection()
    return true
  }

  return false
}
