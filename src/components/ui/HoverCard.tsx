'use client'

import { ReactNode, CSSProperties } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  hoverStyle?: CSSProperties
  baseStyle?: CSSProperties
}

export default function HoverCard({
  children,
  className = '',
  style,
  hoverStyle = {
    borderColor: 'rgba(4,157,255,0.35)',
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 60px rgba(166,20,178,0.12)',
  },
  baseStyle = {
    borderColor: 'rgba(255,255,255,0.10)',
    transform: 'translateY(0)',
    boxShadow: 'none',
  },
}: HoverCardProps) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(10,6,30,0.75)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '16px',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        ...style,
      }}
      onMouseEnter={e => {
        Object.assign((e.currentTarget as HTMLDivElement).style, hoverStyle)
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        Object.assign(el.style, baseStyle)
        el.style.boxShadow = ''
      }}
    >
      {children}
    </div>
  )
}
