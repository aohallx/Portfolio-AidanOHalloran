import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LIGHT_SURFACE_SELECTOR = '[data-nav-surface="light"]'

function isNavOverLightSurface(): boolean {
  const surfaces = document.querySelectorAll<HTMLElement>(LIGHT_SURFACE_SELECTOR)
  if (surfaces.length === 0) return false

  const navHeight =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10,
    ) || 72
  const probeY = navHeight * 0.5

  return Array.from(surfaces).some((el) => {
    const { top, bottom } = el.getBoundingClientRect()
    return top <= probeY && bottom >= probeY
  })
}

export function useNavOnLight(): boolean {
  const { pathname } = useLocation()
  const [onLight, setOnLight] = useState(false)

  useEffect(() => {
    const update = () => setOnLight(isNavOverLightSurface())
    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })

    const surfaces = document.querySelectorAll(LIGHT_SURFACE_SELECTOR)
    const observer = new IntersectionObserver(update, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
    })
    surfaces.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [pathname])

  return onLight
}
