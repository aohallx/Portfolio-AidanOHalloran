import { SKILL_IMAGE_SRC } from '../data/skillAssets'
import type { SkillId } from '../data/skills'

type SkillIconProps = {
  id: SkillId
  className?: string
}

/** Monochrome marks for the skills ribbon (fill via currentColor) */
export function SkillIcon({ id, className }: SkillIconProps) {
  const imageSrc = SKILL_IMAGE_SRC[id]
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt=""
        className={className}
        loading="lazy"
        decoding="async"
        aria-hidden
      />
    )
  }

  const props = {
    className,
    viewBox: '0 0 24 24',
    role: 'img' as const,
    'aria-hidden': true,
  }

  switch (id) {
    case 'python':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M14.25.18c-.77 0-1.45.3-1.96.77L8.94 3.3v2.63h2.02V4.56l2.6-2.15c.35-.29.8-.45 1.28-.45.98 0 1.77.79 1.77 1.77v1.9h1.77V3.73C17.38 1.67 15.96.18 14.25.18ZM9.75 23.82c.77 0 1.45-.3 1.96-.77l3.35-2.35v-2.63H13.04v1.37l-2.6 2.15c-.35.29-.8.45-1.28.45-.98 0-1.77-.79-1.77-1.77v-1.9H5.62v3.17c0 2.06 1.42 3.55 3.13 3.55ZM5.62 10.1V7.93H3.85v3.17c0 2.06 1.42 3.55 3.13 3.55.77 0 1.45-.3 1.96-.77l3.35-2.35v-2.63h-2.02v1.37l-2.6 2.15c-.35.29-.8.45-1.28.45-.98 0-1.77-.79-1.77-1.77Zm13.76 3.55c-.77 0-1.45.3-1.96.77l-3.35 2.35v2.63h2.02v-1.37l2.6-2.15c.35-.29.8-.45 1.28-.45.98 0 1.77.79 1.77 1.77v1.9h1.77v-3.17c0-2.06-1.42-3.55-3.13-3.55Z"
          />
        </svg>
      )
    case 'react':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89ZM7.37 12c0-1.47.42-2.83 1.14-4h-.01a8.01 8.01 0 0 0-3.4 4.01c1.28 3.2 4.56 5.49 8.28 5.49 1.03 0 2.02-.18 2.94-.5-.72-1.17-1.14-2.53-1.14-4 0-1.47.42-2.83 1.14-4-2.52-.96-5.4-.96-7.92 0 .72 1.17 1.14 2.53 1.14 4Zm9.26 0c0 1.47-.42 2.83-1.14 4 2.52.96 5.4.96 7.92 0-.72-1.17-1.14-2.53-1.14-4 0-1.47-.42-2.83-1.14-4-2.52.96-5.4.96-7.92 0 .72 1.17 1.14 2.53 1.14 4ZM12 4.5c-3.72 0-7 2.29-8.28 5.49h.01c.72-1.17 1.84-2.12 3.2-2.72A8.01 8.01 0 0 1 12 4.5Zm0 15c3.72 0 7-2.29 8.28-5.49h-.01a8.01 8.01 0 0 1-3.2 2.72A8.01 8.01 0 0 1 12 19.5Z"
          />
        </svg>
      )
    case 'typescript':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 18.75c-.54 1.051-1.35 1.804-2.43 2.258-1.08.455-2.4.682-3.96.682-1.2 0-2.19-.15-2.97-.45-.78-.3-1.395-.705-1.845-1.215-.45-.51-.765-1.08-.945-1.71h3.24c.12.36.315.66.585.9.27.24.615.36 1.035.36.42 0 .75-.105 1.005-.315.255-.21.435-.51.54-.9h3.3c-.18 1.14-.615 2.085-1.305 2.835zm-8.238-6.9h3.54v9.45h-3.54V11.85z"
          />
        </svg>
      )
    case 'git':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.84 1.84 0 0 1-2.6 0 1.846 1.846 0 0 1-.04-2.59l-2.48-2.48v6.49a1.84 1.84 0 0 1 1.48 3.58 1.84 1.84 0 0 1-1.85-3.18V8.322a1.85 1.85 0 0 1-1.01-2.42L6.169 3.55.452 9.266a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.428-10.43a1.55 1.55 0 0 0 0-2.19"
          />
        </svg>
      )
    case 'unreal':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 2.18 6.9 3.45v6.74L12 18.82l-6.9-3.45V7.63L12 4.18zM8.2 9.5v5l3.8 1.9 3.8-1.9v-5L12 7.6 8.2 9.5z"
          />
        </svg>
      )
    case 'sql':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M12 3C7.03 3 3 4.79 3 7v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c4.42 0 7 .95 7 2s-2.58 2-7 2-7-.95-7-2 2.58-2 7-2zm0 14c-4.42 0-7-.95-7-2v-2.05c1.49.94 4.05 1.55 7 1.55s5.51-.61 7-1.55V17c0 1.05-2.58 2-7 2zm0-5c-4.42 0-7-.95-7-2v-2.05c1.49.94 4.05 1.55 7 1.55s5.51-.61 7-1.55V12c0 1.05-2.58 2-7 2z"
          />
        </svg>
      )
    case 'jupyter':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4.02 2a1.5 1.5 0 0 0-1.48 1.24l-.37 2.2a6.5 6.5 0 0 0-2.17 1.12l-2-.72a1.5 1.5 0 0 0-1.86.87l-1 1.73a1.5 1.5 0 0 0 .54 1.94l1.84 1.06a6.4 6.4 0 0 0 0 2.24l-1.84 1.06a1.5 1.5 0 0 0-.54 1.94l1 1.73a1.5 1.5 0 0 0 1.86.87l2-.72a6.5 6.5 0 0 0 2.17 1.12l.37 2.2A1.5 1.5 0 0 0 4.02 22h2a1.5 1.5 0 0 0 1.48-1.24l.37-2.2a6.5 6.5 0 0 0 2.17-1.12l2 .72a1.5 1.5 0 0 0 1.86-.87l1-1.73a1.5 1.5 0 0 0-.54-1.94l-1.84-1.06a6.4 6.4 0 0 0 0-2.24l1.84-1.06a1.5 1.5 0 0 0 .54-1.94l-1-1.73a1.5 1.5 0 0 0-1.86-.87l-2 .72a6.5 6.5 0 0 0-2.17-1.12l-.37-2.2A1.5 1.5 0 0 0 6.02 2h-2zm1 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
          />
        </svg>
      )
    case 'after-effects':
      return (
        <svg {...props}>
          <rect width="24" height="24" rx="4" fill="currentColor" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="#0a0a0a"
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-condensed), sans-serif"
          >
            Ae
          </text>
        </svg>
      )
    case 'photoshop':
      return (
        <svg {...props}>
          <rect width="24" height="24" rx="4" fill="currentColor" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="#0a0a0a"
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-condensed), sans-serif"
          >
            Ps
          </text>
        </svg>
      )
    case 'premiere':
      return (
        <svg {...props}>
          <rect width="24" height="24" rx="4" fill="currentColor" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="#0a0a0a"
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-condensed), sans-serif"
          >
            Pr
          </text>
        </svg>
      )
    case 'pandas':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M16.922 0h2.623v18.104h-2.623V0zm-4.139 0h2.623v18.104h-2.623V0zM12 4.92 2.572 10.5 12 16.08l9.428-5.58L12 4.92zM2.573 12.737 12 18.317l9.427-5.58-2.623-1.556L12 15.762l-6.804-4.043-2.623 1.018z"
          />
        </svg>
      )
    case 'sklearn':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M12.974 6.89a1.008 1.008 0 1 0 0 1.944 1.008 1.008 0 0 0 0-1.944zm-6.501 3.687a1.355 1.355 0 1 0 0 2.71 1.355 1.355 0 0 0 0-2.71zm13.002 0a1.355 1.355 0 1 0 0 2.71 1.355 1.355 0 0 0 0-2.71zm-6.501 3.687a1.008 1.008 0 1 0 0 1.944 1.008 1.008 0 0 0 0-1.944zM12.974 2.5a10.474 10.474 0 1 0 0 20.948 10.474 10.474 0 0 0 0-20.948zm0 2.326a8.148 8.148 0 1 1 0 16.296 8.148 8.148 0 0 1 0-16.296z"
          />
        </svg>
      )
    case 'tableau':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M7.556 0 0 4.556v14.888L7.556 24 15.112 19.444V4.556L7.556 0zm0 2.444 5.556 3.111v12.889L7.556 21.556 2 18.444V5.556l5.556-3.111zM8.889 8.889v6.222H5.333V8.889h3.556zm5.778 0v6.222h-3.556V8.889h3.556z"
          />
        </svg>
      )
    case 'cpp':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M22.394 6c-.796-.001-1.575.235-2.235.677-.66.442-1.176 1.066-1.485 1.8L15.69 14.633l-4.22-8.536c-.31-.735-.826-1.358-1.487-1.8-.66-.442-1.44-.678-2.236-.677H1.5v12h2.848l4.22 8.536c.31.734.826 1.358 1.487 1.8.66.442 1.439.678 2.235.677h11.28V6h-.106z"
          />
        </svg>
      )
    case 'java':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M8.85 18.2s-.55.32 1.24.44c1.44.1 2.18.09 3.77-.1 0 0 .63.39 1.51.73-3.55 1.51-8.3 1.38-10.47.02 0 0 .83-.45 1.95-.99l1-.1zm-.42-2.9s-.61.45 1.03.54c1.87.17 3.35.15 5.9-.16 0 0 .42.43 1.08.66-5.18 1.35-11.02 1.18-13.8-.05 0 0 .74-.5 1.79-.99zM12 3.5c3.12 3.64 2.07 6.92 1.04 8.86.23.06.45.12.64.2 1.56-1.56 2.2-3.66 2.2-5.74 0-1.28-.28-2.48-.78-3.52-.7-.36-1.48-.66-2.3-.8h-.8z"
          />
        </svg>
      )
    case 'numpy':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z"
          />
        </svg>
      )
    case 'matplotlib':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4 18V6h2v10h12v2H4zm3-3 3-4 3 3 4-6 3 7H7z"
          />
        </svg>
      )
    case 'seaborn':
      return (
        <svg {...props}>
          <path
            fill="currentColor"
            d="M4 18h16v2H4v-2zm2-4h3v3H6v-3zm5-2h3v5h-3v-5zm5-3h3v8h-3V9z"
          />
        </svg>
      )
    case 'sql-server':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" fill="currentColor" rx="7" ry="2.5" />
          <path fill="currentColor" d="M5 6v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
          <path fill="currentColor" d="M5 11v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5c-1.8 1.2-4.5 1.8-7 1.8S6.8 12.2 5 11z" />
        </svg>
      )
    default:
      return null
  }
}
