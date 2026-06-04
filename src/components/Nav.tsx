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
  { id: 'projects', label: 'PROJECTS', to: '/projects', sectionId: 'projects' },
  { id: 'about', label: 'ABOUT', to: '/about' },
  { id: 'contact', label: 'CONTACT', to: '/#contact', sectionId: 'contact' },
]

export function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const activeId = useActiveNavItem()
  const onLight = useNavOnLight()

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleNavClick = useCallback(
    (item: NavItem, e: MouseEvent<HTMLAnchorElement>) => {
      if (!item.sectionId) return

      const onHome = location.pathname === '/'

      if (onHome) {
        e.preventDefault()
        scrollToSection(item.sectionId)
        return
      }

      if (item.id === 'home') return

      if (item.sectionId === 'contact') {
        e.preventDefault()
        navigate('/')
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToSection('contact'))
        })
        return
      }

      if (item.id === 'projects' && item.sectionId === 'projects') {
        e.preventDefault()
        navigate('/')
        requestAnimationFrame(() => {
          requestAnimationFrame(() => scrollToSection('projects'))
        })
      }
    },
    [location.pathname, navigate, scrollToSection],
  )

  return (
    <header
      className={onLight ? `${styles.header} ${styles.onLight}` : styles.header}
    >
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} end>
          {site.name.split(' ')[0]}{' '}
          <span>{site.name.split(' ').slice(1).join(' ')}</span>
        </NavLink>
        <nav className={styles.nav} aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            const className = isActive
              ? `${styles.link} ${styles.linkActive}`
              : styles.link

            if (item.id === 'contact') {
              return (
                <a
                  key={item.id}
                  href={item.to}
                  className={className}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </a>
              )
            }

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
