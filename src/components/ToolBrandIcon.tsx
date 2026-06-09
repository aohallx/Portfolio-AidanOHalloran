import type { ReactNode } from 'react'
import type { SkillId } from '../data/skills'

type ToolBrandIconProps = {
  id: SkillId
  className?: string
}

type SvgProps = {
  className?: string
  viewBox?: string
}

function IconShell({ className, viewBox = '0 0 24 24', children }: SvgProps & { children: ReactNode }) {
  return (
    <svg className={className} viewBox={viewBox} role="img" aria-hidden="true">
      {children}
    </svg>
  )
}

/** Colored brand marks for the tools magazine grid */
export function ToolBrandIcon({ id, className }: ToolBrandIconProps) {
  switch (id) {
    case 'python':
      return (
        <IconShell className={className}>
          <path fill="#3776AB" d="M12 2C7.6 2 5 4.2 5 7.5V9h7V8.1H6.2c.2-1.8 1.8-3.2 5.8-3.2 3.5 0 5.6 1.4 5.6 3.5 0 2.2-1.8 3.4-4.8 3.4H9v1.8c0 3.2 2.4 5.5 6.8 5.5 4.1 0 6.7-2.1 6.7-5.2V7.5C22.5 4.2 19.6 2 12 2Z" />
          <path fill="#FFD43B" d="M5 16.5c0 3.3 2.6 5.5 7 5.5V20c-4 0-5.8-1.4-5.8-3.2V16.5Z" />
        </IconShell>
      )
    case 'cpp':
      return (
        <IconShell className={className}>
          <path fill="#00599C" d="M22.4 6.2c-.8 0-1.6.2-2.3.7-.6.4-1.2 1.1-1.5 1.9l-2.9 5.9-4.2-8.5c-.3-.7-.8-1.4-1.5-1.8-.7-.5-1.5-.7-2.3-.7H1.5v12h2.8l4.2 8.5c.3.8.8 1.4 1.5 1.8.7.5 1.5.7 2.3.7h11.3V6.2h-.2Z" />
          <path fill="#fff" d="M14.5 10.5h-1.8l-2.2 4.4-2.2-4.4H6.5l3.4 6.8-3.4 6.7h1.8l2.2-4.4 2.2 4.4h1.8l-3.4-6.7 3.4-6.8Z" />
        </IconShell>
      )
    case 'sql':
      return (
        <IconShell className={className}>
          <ellipse cx="12" cy="5" fill="#336791" rx="8" ry="3" />
          <path fill="#336791" d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path fill="#4E9AD1" d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6c-2 1.4-5.1 2.2-8 2.2S6 12.4 4 11Z" />
        </IconShell>
      )
    case 'jupyter':
      return (
        <IconShell className={className}>
          <circle cx="6" cy="12" r="2.2" fill="#F37726" />
          <circle cx="18" cy="6" r="1.6" fill="#616161" />
          <circle cx="17" cy="18" r="1.6" fill="#616161" />
          <path fill="#767677" d="M7.8 11.2h8.4c1.2 0 2.2 1 2.2 2.2v1.2c0 1.2-1 2.2-2.2 2.2H7.8" />
        </IconShell>
      )
    case 'sklearn':
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="10" fill="#F7931E" />
          <circle cx="8.5" cy="10" r="1.5" fill="#fff" />
          <circle cx="15.5" cy="10" r="1.5" fill="#fff" />
          <circle cx="12" cy="15" r="1.5" fill="#fff" />
        </IconShell>
      )
    case 'pandas':
      return (
        <IconShell className={className}>
          <path fill="#150458" d="M16.9 0h2.6v18.1h-2.6V0Zm-4.1 0h2.6v18.1h-2.6V0ZM12 4.9 2.6 10.5 12 16.1l9.4-5.6L12 4.9Z" />
          <path fill="#E70488" d="M2.6 12.7 12 18.3l9.4-5.6-2.6-1.6L12 15.8l-6.8-4-2.6 1Z" />
        </IconShell>
      )
    case 'tableau':
      return (
        <IconShell className={className}>
          <path fill="#E97627" d="M7.6 0 0 4.6v14.9L7.6 24l7.5-4.4V4.6L7.6 0Z" />
          <path fill="#C72037" d="M8.9 8.9v6.2H5.3V8.9h3.6Zm5.8 0v6.2h-3.6V8.9h3.6Z" />
        </IconShell>
      )
    case 'react':
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.2" rx="10" ry="4" />
          <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.2" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.2" rx="10" ry="4" transform="rotate(120 12 12)" />
        </IconShell>
      )
    case 'typescript':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#3178C6" />
          <path fill="#fff" d="M13.5 16.8V18h-6v-1.2h2.2v-5.6H7.5V10h6v1.2h-2.2v5.6h2.2Zm5.1-1.2c.5 1 1.3 1.8 2.4 1.8.8 0 1.3-.4 1.3-1 0-.7-.6-1-1.7-1.4-1.6-.5-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 3.2-2.7 1.3 0 2.3.4 3 1.1l-1.1 1.3c-.5-.5-1-.8-1.9-.8-.7 0-1.1.3-1.1.8 0 .6.5.9 1.6 1.2 1.6.5 2.8 1.2 2.8 2.8 0 1.7-1.3 2.9-3.4 2.9-1.5 0-2.6-.6-3.3-1.5l1.1-1.2Z" />
        </IconShell>
      )
    case 'unreal':
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="10" fill="#0E1128" />
          <path fill="#fff" d="M12 5.5 7 8.2v7.6l5 2.7 5-2.7V8.2l-5-2.7Zm0 2.3 2.8 1.5v3.4L12 14.2l-2.8-1.5V9.3L12 7.8Z" />
        </IconShell>
      )
    case 'git':
      return (
        <IconShell className={className}>
          <path fill="#F05032" d="M23.5 10.9 13.1.5a1.5 1.5 0 0 0-2.1 0L8.7 2.6l2.7 2.7a1.8 1.8 0 0 1 2.3 2.3l2.6 2.6a1.8 1.8 0 1 1-1.1 1.1l-2.4-2.4v6.3a1.8 1.8 0 1 1-1.5 0v-5.9a1.8 1.8 0 0 1-1-1.6L6.2 3.6.5 9.3a1.5 1.5 0 0 0 0 2.1l10.4 10.4a1.5 1.5 0 0 0 2.1 0l10.5-10.5a1.5 1.5 0 0 0 0-2.1Z" />
        </IconShell>
      )
    case 'after-effects':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="3" fill="#9999FF" />
          <text x="12" y="16" textAnchor="middle" fill="#2E0066" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">
            Ae
          </text>
        </IconShell>
      )
    case 'aws':
      return (
        <IconShell className={className} viewBox="0 0 24 24">
          <path fill="#252F3E" d="M6.5 17.5 12 20l5.5-2.5v-2L12 17.5l-5.5-2.5v2Z" />
          <path fill="#FF9900" d="M6.5 12.5 12 15l5.5-2.5v-2L12 13l-5.5-2.5v2Zm0-5L12 10l5.5-2.5v-2L12 8l-5.5-2.5v2Z" />
        </IconShell>
      )
    case 'ubuntu':
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="10" fill="#E95420" />
          <circle cx="9" cy="10" r="1.3" fill="#fff" />
          <circle cx="15" cy="10" r="1.3" fill="#fff" />
          <path fill="none" stroke="#fff" strokeWidth="1.4" d="M8 14c1.5 1.5 6.5 1.5 8 0" />
        </IconShell>
      )
    case 'powershell':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#012456" />
          <path fill="#fff" d="m8 7 6 5-6 5V7Zm4 0h4v10h-4V7Z" />
        </IconShell>
      )
    case 'azure':
      return (
        <IconShell className={className}>
          <path fill="#0089D6" d="M13.2 2 4 20h6.3l3.9-8.2L13.2 2Zm1.5 11.8L12 20h8.5L14.7 13.8Z" />
        </IconShell>
      )
    case 'cisco':
      return (
        <IconShell className={className} viewBox="0 0 24 24">
          <path fill="#049FD9" d="M4 14h2v-4H4v4Zm4 3h2V7H8v10Zm4 2h2V5h-2v14Zm4-4h2V9h-2v6Zm4-2h2v-2h-2v2Z" />
          <path fill="#1BA0D7" d="M4 20h16v1H4z" opacity="0.8" />
        </IconShell>
      )
    case 'virtualbox':
      return (
        <IconShell className={className}>
          <path fill="#183867" d="M3 5h18v14H3z" />
          <path fill="#2D6DB5" d="M6 8h12v8H6z" />
          <path fill="#fff" d="M9 11h6v2H9z" />
        </IconShell>
      )
    case 'kali':
      return (
        <IconShell className={className}>
          <circle cx="12" cy="12" r="10" fill="#557C94" />
          <path fill="#fff" d="M14 6.5c-2.5-.5-4.5 1-5 3.5 2 .5 3.5 2 4 4.5 2.5-.5 4-2.5 3.5-5-.5-1.5-1.5-2.5-2.5-3Z" />
          <circle cx="15.5" cy="8.5" r="1" fill="#fff" />
        </IconShell>
      )
    case 'wireshark':
      return (
        <IconShell className={className}>
          <path fill="#167FCF" d="M3 14c3-6 8-9 14-8-1 6-5 10-11 11-1.5.2-2.5-.5-3-3Z" />
          <path fill="#89CFF0" d="M8 12c2-2 5-3 8-2.5-1 2.5-3 4-6.5 4.5C8.5 14.2 8 13.2 8 12Z" />
        </IconShell>
      )
    case 'nmap':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#1C1C1C" />
          <circle cx="12" cy="11" r="4.5" fill="none" stroke="#7EC8E3" strokeWidth="1.5" />
          <circle cx="12" cy="11" r="1.5" fill="#7EC8E3" />
          <path stroke="#7EC8E3" strokeWidth="1.2" d="M12 15.5v3M8 19h8" />
        </IconShell>
      )
    default:
      return null
  }
}
