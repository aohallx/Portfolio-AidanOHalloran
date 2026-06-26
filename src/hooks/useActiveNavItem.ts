import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export type NavItemId = 'home' | 'projects' | 'contact'

const SECTION_IDS: NavItemId[] = ['home', 'projects', 'contact']

function routeNavItem(pathname: string): NavItemId | null {
  if (pathname.startsWith('/projects')) return 'projects'
  if (pathname === '/contact') return 'contact'
  return null
}

export function useActiveNavItem(): NavItemId {
  const { pathname } = useLocation()
  const [scrollSection, setScrollSection] = useState<NavItemId>('home')

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null,
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const next = visible[0].target.id as NavItemId
          setScrollSection((prev) => (prev === next ? prev : next))
        }
      },
      {
        rootMargin: '-72px 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  const routeItem = routeNavItem(pathname)

  if (routeItem) return routeItem
  if (scrollSection === 'contact') return 'contact'

  return scrollSection
}
