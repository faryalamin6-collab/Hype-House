'use client'

import { useRef, MouseEvent, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  external?: boolean
  onClick?: () => void
  children: ReactNode
  fullWidth?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function Button({
  variant = 'primary',
  href,
  external = false,
  onClick,
  children,
  fullWidth = false,
  className = '',
  style: styleOverride,
}: ButtonProps) {
  const elRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  // Magnetic effect
  const onMouseMove = (e: MouseEvent) => {
    const el = elRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.25
    const dy = (e.clientY - cy) * 0.25
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const onMouseLeave = () => {
    const el = elRef.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s ease'
  }

  const styles: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-poppins)',
    fontWeight: 600,
    fontSize: '15px',
    minHeight: '52px',
    padding: '14px 32px',
    borderRadius: '9999px',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
    ...(variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)',
          color: 'white',
        }
      : {
          background: 'transparent',
          border: '1px solid rgba(166,20,178,0.5)',
          color: 'rgba(255,255,255,0.88)',
        }),
    ...styleOverride,
  }

  const shimmerStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '60%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
    transform: 'skewX(-20deg)',
    animation: variant === 'primary' ? 'shimmer 2.5s linear infinite' : 'none',
    pointerEvents: 'none',
  }

  const content = (
    <>
      <span style={shimmerStyle} />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={elRef as React.Ref<HTMLAnchorElement>}
          style={styles}
          className={className}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseEnter={() => {
            if (variant === 'primary' && elRef.current) {
              elRef.current.style.boxShadow = '0 0 32px rgba(166,20,178,0.5)'
            }
          }}
        >
          {content}
        </a>
      )
    }
    return (
      <Link
        href={href}
        ref={elRef as React.Ref<HTMLAnchorElement>}
        style={styles}
        className={className}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => {
          if (variant === 'primary' && elRef.current) {
            elRef.current.style.boxShadow = '0 0 32px rgba(166,20,178,0.5)'
          }
        }}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={elRef as React.Ref<HTMLButtonElement>}
      style={styles}
      className={className}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => {
        if (variant === 'primary' && elRef.current) {
          elRef.current.style.boxShadow = '0 0 32px rgba(166,20,178,0.5)'
        }
      }}
    >
      {content}
    </button>
  )
}
