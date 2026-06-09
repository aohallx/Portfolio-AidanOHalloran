export const HOME_PROJECT_SCROLL_KEY = 'portfolio:home-project-slug'
export const HOME_RETURN_TO_PROJECTS_KEY = 'portfolio:return-to-home-projects'

export function markReturnToHomeProjects() {
  sessionStorage.setItem(HOME_RETURN_TO_PROJECTS_KEY, '1')
}

export function clearReturnToHomeProjects() {
  sessionStorage.removeItem(HOME_RETURN_TO_PROJECTS_KEY)
}

export function shouldReturnToHomeProjects(): boolean {
  return sessionStorage.getItem(HOME_RETURN_TO_PROJECTS_KEY) === '1'
}

function scrollToElement(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'instant', block: 'start' })
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
