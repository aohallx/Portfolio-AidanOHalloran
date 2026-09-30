import type { ConceptId } from '../data/tools'
import styles from './ConceptIcon.module.css'

type ConceptIconProps = {
  id: ConceptId
  className?: string
}

/** Monochrome concept marks for math & data science tiles */
export function ConceptIcon({ id, className }: ConceptIconProps) {
  const props = {
    className: [styles.icon, className].filter(Boolean).join(' '),
    viewBox: '0 0 24 24',
    role: 'img' as const,
    'aria-hidden': true,
  }

  switch (id) {
    case 'calculus':
      return (
        <img
          src="/tool-icons/calculus.png"
          alt=""
          className={[styles.calculusLogo, className].filter(Boolean).join(' ')}
          loading="lazy"
          decoding="async"
          aria-hidden
        />
      )
    case 'linear-algebra':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zM11 7h2v10h-2V7zM7 11h10v2H7v-2z"
          />
        </svg>
      )
    case 'probability-stats':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4 18V6h2v10h12v2H4zm3-3 2.5-3 2.5 2 3-4 3 5H7z"
          />
        </svg>
      )
    case 'optimization':
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            d="M4 17c2.2-6 4.4-9 8-9s5.8 3 8 9"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2.2 2.2"
            d="M5 13.5h14"
          />
          <circle cx="12" cy="8" r="1.8" fill="currentColor" />
          <path
            fill="currentColor"
            d="M11.2 4.2h1.6v2.4h-1.6V4.2zm-2.1 1.5 1.1-1.1 1.7 1.7-1.1 1.1-1.7-1.7zm5.8 0-1.1-1.1-1.7 1.7 1.1 1.1 1.7-1.7z"
          />
        </svg>
      )
    case 'game-physics':
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M5 18c1.5-3.5 3.5-5.5 7-5.5S17.5 14.5 19 18"
          />
          <circle cx="12" cy="7.5" r="2.4" fill="currentColor" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="1.8 2"
            d="M12 10v4.2"
          />
          <path
            fill="currentColor"
            d="M10.6 14.8h2.8l.9 3.4H9.7l.9-3.4z"
          />
        </svg>
      )
    case 'machine-learning':
      return (
        <svg {...props}>
          <circle cx="6" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="6" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="18" r="2" fill="currentColor" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            d="M8 11 10.5 7m1 5 1.5-4m1 5 1.5-4M8 13l4 3 4-3"
          />
        </svg>
      )
    case 'feature-engineering':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4 7h6v2H4V7zm0 5h10v2H4v-2zm0 5h14v2H4v-2zM16 7h4v2h-4V7z"
          />
        </svg>
      )
    case 'eda':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M5 18V8h2v8h10v2H5zm2-6h3v4H7v-4zm4-2h3v6h-3v-6zm4-3h3v9h-3V9z"
          />
        </svg>
      )
    case 'etl':
      return (
        <svg {...props}>
          <rect
            x="3.2"
            y="4.5"
            width="5.2"
            height="5.2"
            rx="1.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <rect
            x="15.6"
            y="14.3"
            width="5.2"
            height="5.2"
            rx="1.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.2 7h3.2c1.4 0 2.5 1.1 2.5 2.5v5M14.9 14.5l2.2 2.2 2.2-2.2"
          />
          <circle cx="12" cy="12" r="1.35" fill="currentColor" />
        </svg>
      )
    case 'time-series':
      return (
        <svg {...props}>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            d="M4 17 8 12l3 3 4-6 5 8"
          />
          <circle cx="8" cy="12" r="1.2" fill="currentColor" />
          <circle cx="11" cy="15" r="1.2" fill="currentColor" />
          <circle cx="15" cy="9" r="1.2" fill="currentColor" />
          <circle cx="20" cy="17" r="1.2" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}
