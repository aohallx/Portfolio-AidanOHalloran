import { useCallback, type MouseEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useActiveNavItem, type NavItemId } from '../hooks/useActiveNavItem'
import { useNavOnLight } from '../hooks/useNavOnLight'
import { site } from '../data/site'
import styles from './Nav.module.css'

type NavItem = {
  id: NavItemId
  label: string
  to: string
  sectionId?: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', to: '/', sectionId: 'home' },
  { id: 'projects', label: 'PROJECTS', to: '/projects' },
  { id: 'contact', label: 'CONTACT', to: '/contact' },
]

export function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const activeId = useActiveNavItem()
  const onLight = useNavOnLight()

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [])

  const goHomeTop = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (location.pathname === '/') {
        scrollToTop()
        return
      }
      navigate('/', { state: { scrollToTop: true } })
    },
    [location.pathname, navigate, scrollToTop],
  )

  const handleNavClick = useCallback(
    (item: NavItem, e: MouseEvent<HTMLAnchorElement>) => {
      if (item.id === 'home') {
        goHomeTop(e)
        return
      }

      if (!item.sectionId) return

      const onHome = location.pathname === '/'

      if (onHome) {
        e.preventDefault()
        scrollToSection(item.sectionId)
      }
    },
    [goHomeTop, location.pathname, scrollToSection],
  )

  return (
    <header
      className={onLight ? `${styles.header} ${styles.onLight}` : styles.header}
    >
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end onClick={goHomeTop}>
          {site.name.split(' ')[0]}{' '}
          <span>{site.name.split(' ').slice(1).join(' ')}</span>
        </NavLink>
        <nav className={styles.nav} aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            const className = isActive
              ? `${styles.link} ${styles.linkActive}`
              : styles.link

            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={className}
                end={item.id === 'home'}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
