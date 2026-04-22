'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { InteractiveServiceCard } from '@/components/ui/3d-card'

const services = [
  {
    id: 1,
    title: 'Branding',
    subtitle: '01 — Identity',
    actionText: 'Build your brand →',
    href: '/services#branding',
    accentColor: '#049DFF',
  },
  {
    id: 2,
    title: 'Copywriting',
    subtitle: '02 — Voice',
    actionText: 'Script conversions →',
    href: '/services#copywriting',
    accentColor: '#A614B2',
  },
  {
    id: 3,
    title: 'Social Media',
    subtitle: '03 — Presence',
    actionText: 'Own the feed →',
    href: '/services#social-media',
    accentColor: '#049DFF',
  },
  {
    id: 4,
    title: 'Digital Advertising',
    subtitle: '04 — Growth',
    actionText: 'Scale your reach →',
    href: '/services#advertising',
    accentColor: '#A614B2',
  },
  {
    id: 5,
    title: 'Web & UX/UI',
    subtitle: '05 — Experience',
    actionText: 'Build to convert →',
    href: '/services#web',
    accentColor: '#049DFF',
  },
  {
    id: 6,
    title: 'SEO',
    subtitle: '06 — Discovery',
    actionText: 'Rank higher →',
    href: '/services#seo',
    accentColor: '#A614B2',
  },
]

function wrap(n: number, len: number) {
  return ((n % len) + len) % len
}

// Position each card relative to the active index
function getCardLayout(offset: number) {
  const abs = Math.abs(offset)
  if (abs > 2) return null
  return {
    x: offset * 260,
    scale: offset === 0 ? 1 : 0.82 - abs * 0.04,
    opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25,
    zIndex: 10 - abs,
    rotateY: offset * -8,
  }
}

export default function ServiceCards3D() {
  const [active, setActive] = useState(0)
  const len = services.length
  const touchStartX = useRef(0)

  const next = useCallback(() => setActive(a => wrap(a + 1, len)), [len])
  const prev = useCallback(() => setActive(a => wrap(a - 1, len)), [len])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]!.clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0]!.clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  return (
    <section style={{ width: '100%', padding: '96px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 600,
            fontSize: '11px', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#049DFF',
            marginBottom: '16px',
          }}>
            ✦ What We Do
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'white',
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            Six Pillars.{' '}
            <span className="gradient-text">One Agency.</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '440px', perspective: '1200px' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false}>
            {services.map((service, i) => {
              const raw = i - active
              const alt = raw > 0 ? raw - len : raw + len
              const offset = Math.abs(alt) < Math.abs(raw) ? alt : raw
              const layout = getCardLayout(offset)
              if (!layout) return null

              return (
                <motion.div
                  key={service.id}
                  style={{
                    position: 'absolute',
                    zIndex: layout.zIndex,
                    cursor: offset === 0 ? 'default' : 'pointer',
                  }}
                  animate={{
                    x: layout.x,
                    scale: layout.scale,
                    opacity: layout.opacity,
                    rotateY: layout.rotateY,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  onClick={() => { if (offset !== 0) setActive(i) }}
                >
                  <InteractiveServiceCard
                    title={service.title}
                    subtitle={service.subtitle}
                    actionText={service.actionText}
                    href={service.href}
                    accentColor={service.accentColor}
                    active={offset === 0}
                    onActionClick={() => { window.location.href = service.href }}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '48px' }}>
          <button
            onClick={prev}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white', fontSize: '16px', cursor: 'pointer',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(4,157,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(4,157,255,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
            aria-label="Previous"
          >
            ←
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '999px',
                  background: i === active ? '#049DFF' : 'rgba(255,255,255,0.25)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white', fontSize: '16px', cursor: 'pointer',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(4,157,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(4,157,255,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Counter */}
        <p style={{
          textAlign: 'center', marginTop: '16px',
          fontFamily: 'var(--font-poppins)', fontSize: '12px',
          letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)',
        }}>
          {String(active + 1).padStart(2, '0')} / {String(len).padStart(2, '0')}
        </p>

      </div>
    </section>
  )
}
