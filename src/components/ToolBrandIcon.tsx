import type { ReactNode } from 'react'
import { SKILL_IMAGE_SRC } from '../data/skillAssets'
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

function CppPlus({ cx, cy }: { cx: number; cy: number }) {
  const arm = 1.35
  const thick = 0.48

  return (
    <g>
      <rect x={cx - thick / 2} y={cy - arm} width={thick} height={arm * 2} fill="#fff" />
      <rect x={cx - arm} y={cy - thick / 2} width={arm * 2} height={thick} fill="#fff" />
    </g>
  )
}

function CppMark({ className }: { className?: string }) {
  return (
    <IconShell className={className} viewBox="0 0 24 24">
      <path
        fill="#004482"
        d="M12 2.2 20.2 6.8v10.4L12 21.8 3.8 17.2V6.8L12 2.2z"
      />
      <path fill="#00599C" d="M12 2.2 20.2 6.8v4.8L3.8 17.2V6.8L12 2.2z" />
      <text
        x="7.35"
        y="16.35"
        fill="#fff"
        fontSize="10.5"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        C
      </text>
      <CppPlus cx={15.15} cy={12} />
      <CppPlus cx={17.85} cy={12} />
    </IconShell>
  )
}

function TableauMark({ className }: { className?: string }) {
  const fill = '#d8dde3'

  const plus = (cx: number, cy: number, arm: number, thick: number) => (
    <g key={`${cx}-${cy}`}>
      <rect x={cx - thick / 2} y={cy - arm} width={thick} height={arm * 2} fill={fill} />
      <rect x={cx - arm} y={cy - thick / 2} width={arm * 2} height={thick} fill={fill} />
    </g>
  )

  return (
    <IconShell className={className}>
      {plus(12, 12, 4.2, 1.35)}
      {plus(12, 4.8, 1.55, 0.55)}
      {plus(12, 19.2, 1.55, 0.55)}
      {plus(4.8, 12, 1.55, 0.55)}
      {plus(19.2, 12, 1.55, 0.55)}
      {plus(7.1, 7.1, 1.05, 0.42)}
      {plus(16.9, 7.1, 1.05, 0.42)}
      {plus(7.1, 16.9, 1.05, 0.42)}
      {plus(16.9, 16.9, 1.05, 0.42)}
    </IconShell>
  )
}

function BrandImage({ src, className }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}

/** Colored brand marks for the tools magazine grid */
export function ToolBrandIcon({ id, className }: ToolBrandIconProps) {
  const imageSrc = SKILL_IMAGE_SRC[id]
  if (imageSrc) {
    return <BrandImage src={imageSrc} className={className} />
  }

  switch (id) {
    case 'tableau':
      return <TableauMark className={className} />
    case 'python':
      return (
        <IconShell className={className}>
          <path fill="#3776AB" d="M12 2C7.6 2 5 4.2 5 7.5V9h7V8.1H6.2c.2-1.8 1.8-3.2 5.8-3.2 3.5 0 5.6 1.4 5.6 3.5 0 2.2-1.8 3.4-4.8 3.4H9v1.8c0 3.2 2.4 5.5 6.8 5.5 4.1 0 6.7-2.1 6.7-5.2V7.5C22.5 4.2 19.6 2 12 2Z" />
          <path fill="#FFD43B" d="M5 16.5c0 3.3 2.6 5.5 7 5.5V20c-4 0-5.8-1.4-5.8-3.2V16.5Z" />
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
    case 'cpp':
      return <CppMark className={className} />
    case 'java':
      return (
        <IconShell className={className}>
          <path fill="#5382A1" d="M8.9 18.2s-.55.32 1.2.44c1.44.1 2.18.09 3.8-.1 0 0 .63.39 1.5.73-3.55 1.51-8.3 1.38-10.5.02 0 0 .83-.45 1.95-.99l.85-.1zm-.4-2.9s-.6.45 1 .54c1.9.17 3.4.15 5.9-.16 0 0 .42.43 1.1.66-5.2 1.35-11 1.18-13.8-.05 0 0 .74-.5 1.8-.99zM12 3.5c3.1 3.6 2.1 6.9 1 8.9.2.06.45.12.65.2 1.6-1.6 2.2-3.7 2.2-5.7 0-1.3-.28-2.5-.78-3.5-.7-.36-1.5-.66-2.3-.8h-.8z" />
        </IconShell>
      )
    case 'numpy':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#4D77CB" />
          <path fill="#fff" d="M7 7h10v10H7V7zm2 2v6h6V9H9zm1.5 1.5h3v3h-3v-3z" />
        </IconShell>
      )
    case 'matplotlib':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#11557C" />
          <path fill="#fff" d="M6 17V8h2v7h10v2H6zm2-2 3-4 3 3 3-5 2 6H8z" />
        </IconShell>
      )
    case 'seaborn':
      return (
        <IconShell className={className}>
          <rect width="24" height="24" rx="2" fill="#5A9FD4" />
          <path fill="#fff" d="M6 17h12v2H6v-2zm1-3h3v3H7v-3zm4-2h3v5h-3v-5zm4-3h3v8h-3V9z" />
        </IconShell>
      )
    case 'firebase':
      return (
        <IconShell className={className} viewBox="0 0 24 24">
          <path
            fill="#FF9100"
            d="M5.27 21.01 11.72 9.31 9.72 3.02 3.05 13.71l2.22 7.3z"
          />
          <path
            fill="#FFC400"
            d="M13.27 9.31 11.57 3.01 3.05 13.71h9.65l.57-4.4z"
          />
          <path
            fill="#DD2C00"
            d="M21.9 13.71 11.57 3.01l1.7 6.3 4.48 8.3 4.15-3.9z"
          />
        </IconShell>
      )
    case 'sql-server':
      return (
        <IconShell className={className}>
          <ellipse cx="12" cy="6" fill="#CC2927" rx="7.5" ry="2.8" />
          <path fill="#CC2927" d="M4.5 6v5.2c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6" />
          <path fill="#E74C3C" d="M4.5 11.2v5.2c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-5.2c-1.9 1.3-4.7 1.9-7.5 1.9s-5.6-.6-7.5-1.9z" />
        </IconShell>
      )
    default:
      return null
  }
}
