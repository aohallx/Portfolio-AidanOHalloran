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
        <svg {...props}>
          <path
            fill="currentColor"
            d="M5 18c2-4 4-8 7-8s5 4 7 8H5zm2.2-2h9.6c-1.2-2-2.8-4-4.8-4s-3.6 2-4.8 4zM8 6h8v2H8V6z"
          />
        </svg>
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
            fill="currentColor"
            d="m12 4 2.2 4.5 5 .7-3.6 3.5.9 5L12 15.8 7.5 17.7l.9-5L4.8 9.2l5-.7L12 4z"
          />
        </svg>
      )
    case 'game-physics':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm-1 3v5.5l4.5 2.6.8-1.4-3.7-2.1V8h-1.6z"
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
          <path
            fill="currentColor"
            d="M4 8h6v3H7.5l4.5 5 4.5-5H14V8h6v8h-4v-3h-2.5l-3 3.3-3-3.3H10v3H6V8z"
          />
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
