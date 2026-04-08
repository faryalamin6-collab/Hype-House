'use client'

import { useRef } from 'react'

const items = [
  'Branding', 'Copywriting', 'Social Media', 'Digital Advertising',
  'Web & UX/UI', 'SEO', 'Automation', 'AI Systems', 'Strategy', 'Campaigns',
]

export default function ServiceTicker() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isHovered = useRef(false)

  const tickerItems = [...items, ...items] // double for seamless loop

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        padding: '6px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Gradient masks */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(90deg, #020008 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(270deg, #020008 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        ref={trackRef}
        style={{
          display: 'flex',
          animation: 'ticker 32s linear infinite',
          width: 'max-content',
        }}
        onMouseEnter={() => {
          isHovered.current = true
          if (trackRef.current) {
            trackRef.current.style.animationDuration = '90s'
          }
        }}
        onMouseLeave={() => {
          isHovered.current = false
          if (trackRef.current) {
            trackRef.current.style.animationDuration = '32s'
          }
        }}
      >
        {tickerItems.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 600,
              fontSize: '18px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              padding: '0 24px',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {item}
            <span style={{ color: '#A614B2', fontSize: '10px' }}>✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
