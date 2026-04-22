'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const services = [
  {
    number: '01',
    title: 'Branding',
    tagline: 'A system of influence',
    rotate: '-6deg',
    top: '10%',
    left: '8%',
    width: 'clamp(200px, 22vw, 310px)',
    accent: '#049DFF',
    href: '/services#branding',
    initZ: 1,
  },
  {
    number: '02',
    title: 'Copywriting',
    tagline: 'Words that convert',
    rotate: '7deg',
    top: '52%',
    left: '6%',
    width: 'clamp(185px, 20vw, 285px)',
    accent: '#A614B2',
    href: '/services#copywriting',
    initZ: 2,
  },
  {
    number: '03',
    title: 'Social Media',
    tagline: 'Strategy, not luck',
    rotate: '-10deg',
    top: '18%',
    left: '53%',
    width: 'clamp(178px, 19vw, 270px)',
    accent: '#049DFF',
    href: '/services#social-media',
    initZ: 3,
  },
  {
    number: '04',
    title: 'Digital Advertising',
    tagline: 'Paid media that performs',
    rotate: '5deg',
    top: '55%',
    left: '46%',
    width: 'clamp(210px, 24vw, 335px)',
    accent: '#A614B2',
    href: '/services#advertising',
    initZ: 4,
  },
  {
    number: '05',
    title: 'Web & UX/UI',
    tagline: 'Built to convert',
    rotate: '-14deg',
    top: '10%',
    left: '33%',
    width: 'clamp(190px, 21vw, 300px)',
    accent: '#049DFF',
    href: '/services#web',
    initZ: 5,
  },
  {
    number: '06',
    title: 'SEO',
    tagline: "Attention you don't pay for",
    rotate: '11deg',
    top: '38%',
    left: '72%',
    width: 'clamp(170px, 18vw, 260px)',
    accent: '#A614B2',
    href: '/services#seo',
    initZ: 6,
  },
]

const LONG_PRESS_MS = 600
const DRAG_THRESHOLD = 8

// ─── Card ────────────────────────────────────────────────────────────────────
function ServiceCard({
  containerRef,
  number,
  title,
  tagline,
  top,
  left,
  rotate,
  width,
  accent,
  href,
  initZ,
  animDelay,
}: {
  containerRef: React.RefObject<HTMLDivElement>
  number: string
  title: string
  tagline: string
  top: string
  left: string
  rotate: string
  width: string
  accent: string
  href: string
  initZ: number
  animDelay: number
}) {
  const router = useRouter()
  const [zIndex, setZIndex] = useState(initZ)
  const [isPressing, setIsPressing] = useState(false)

  const pressTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pressOrigin = useRef<{ x: number; y: number } | null>(null)

  // Bring this card above all others
  const bringToFront = () => {
    const els = document.querySelectorAll('.drag-card')
    let max = 0
    els.forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex) || 0
      if (z > max) max = z
    })
    setZIndex(max + 1)
  }

  const clearPress = () => {
    if (pressTimer.current) { clearTimeout(pressTimer.current); pressTimer.current = null }
    setIsPressing(false)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    bringToFront()
    setIsPressing(true)

    pressTimer.current = setTimeout(() => {
      setIsPressing(false)
      router.push(href)
    }, LONG_PRESS_MS)

    // Attach cancel to window — fires even when FM captures the pointer
    const onWindowUp = () => {
      clearPress()
      window.removeEventListener('pointerup', onWindowUp)
      window.removeEventListener('pointermove', onWindowMove)
    }
    const onWindowMove = (ev: PointerEvent) => {
      const dx = ev.clientX - e.clientX
      const dy = ev.clientY - e.clientY
      if (Math.sqrt(dx * dx + dy * dy) > DRAG_THRESHOLD) {
        clearPress()
        window.removeEventListener('pointerup', onWindowUp)
        window.removeEventListener('pointermove', onWindowMove)
      }
    }
    window.addEventListener('pointerup', onWindowUp, { once: true })
    window.addEventListener('pointermove', onWindowMove)
  }

  return (
    <motion.div
      className="drag-card absolute"
      // ── Entrance: fall from above ──
      initial={{ opacity: 0, y: -380, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ type: 'spring', stiffness: 90, damping: 14, delay: animDelay }}
      // ── Drag ──
      drag
      dragConstraints={containerRef}
      dragElastic={0.45}
      dragMomentum={false}
      // ── Long-press detection ──
      onPointerDown={onPointerDown}
      onDragStart={clearPress}      // FM drag detected → kill long-press immediately
      // ── Visual states ──
      whileHover={{ scale: 1.03 }}
      whileDrag={{
        scale: 1.05,
        rotateX: 8,
        boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${accent}15`,
        cursor: 'grabbing',
      }}
      style={{
        top,
        left,
        zIndex,
        width,
        position: 'absolute',
        borderRadius: '20px',
        padding: 'clamp(20px, 2vw, 30px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        cursor: 'grab',
        background: 'linear-gradient(145deg, rgba(12,18,141,0.50) 0%, rgba(34,0,65,0.70) 60%, rgba(2,0,8,0.85) 100%)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: isPressing ? `1px solid ${accent}88` : `1px solid ${accent}25`,
        boxShadow: isPressing
          ? [
              'inset 0 1px 0 rgba(255,255,255,0.18)',
              `0 0 40px rgba(166,20,178,0.30)`,
              `0 0 18px ${accent}25`,
              '0 16px 48px rgba(0,0,0,0.6)',
            ].join(', ')
          : [
              'inset 0 1px 0 rgba(255,255,255,0.10)',
              `0 8px 32px rgba(0,0,0,0.5)`,
              `0 0 12px ${accent}12`,
            ].join(', '),
        transformStyle: 'preserve-3d',
        transition: 'border 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      {/* Inner top-edge shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 700,
        fontSize: '11px', letterSpacing: '0.24em',
        textTransform: 'uppercase', color: accent,
      }}>
        {number}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 800,
        fontSize: 'clamp(16px, 1.5vw, 23px)', color: 'white',
        lineHeight: 1.15, margin: 0,
      }}>
        {title}
      </h3>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 400,
        fontSize: 'clamp(12px, 0.9vw, 14px)', color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.55, margin: 0,
      }}>
        {tagline}
      </p>

      {/* CTA hint */}
      <span style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 600,
        fontSize: '12px', letterSpacing: '0.06em',
        color: isPressing ? accent : 'rgba(255,255,255,0.28)',
        transition: 'color 0.15s ease',
      }}>
        {isPressing ? 'Hold…' : 'Hold to explore →'}
      </span>

      {/* Long-press progress bar */}
      {isPressing && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px', borderRadius: '0 0 20px 20px', overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            background: `linear-gradient(90deg, ${accent}, #A614B2)`,
            animation: `lp-fill ${LONG_PRESS_MS}ms linear forwards`,
          }} />
        </div>
      )}

      {/* Bottom glow line (hidden when progress bar shows) */}
      {!isPressing && (
        <div style={{
          position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '1px',
          background: `linear-gradient(90deg, transparent, ${accent}55, transparent)`,
          borderRadius: '999px',
        }} />
      )}

      {/* Purple corner glow */}
      <div style={{
        position: 'absolute', top: '-8px', right: '-8px',
        width: '60px', height: '60px', borderRadius: '50%',
        background: 'rgba(166,20,178,0.15)', filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      {/* Accent corner glow (bottom-left) */}
      <div style={{
        position: 'absolute', bottom: '-8px', left: '-8px',
        width: '40px', height: '40px', borderRadius: '50%',
        background: `${accent}20`, filter: 'blur(18px)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function DragServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', zIndex: 10, background: '#020008', isolation: 'isolate' }}>

      {/* Watermark */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', userSelect: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-poppins)', fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 220px)', lineHeight: 1,
          background: 'linear-gradient(135deg, rgba(12,18,141,0.06), rgba(166,20,178,0.06))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          SERVICES
        </span>
      </div>

      {/* Header */}
      <div style={{
        position: 'relative', zIndex: 10, textAlign: 'center',
        paddingTop: '80px', paddingBottom: '32px',
        paddingLeft: '24px', paddingRight: '24px',
      }}>
        <p style={{
          fontFamily: 'var(--font-poppins)', fontWeight: 600,
          fontSize: '11px', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#049DFF', marginBottom: '16px',
        }}>
          ✦ What We Do
        </p>
        <h2 style={{
          fontFamily: 'var(--font-poppins)', fontWeight: 800,
          fontSize: 'clamp(28px, 4.5vw, 52px)', color: 'white',
          letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '12px',
        }}>
          Six Pillars.{' '}
          <span className="gradient-text">One Agency.</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-poppins)', fontSize: '13px',
          color: 'rgba(255,255,255,0.28)',
        }}>
          Drag freely · Hold a card to explore it
        </p>
      </div>

      {/* Drag area */}
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '72vh' }}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
            {...service}
            animDelay={i * 0.1}
          />
        ))}
      </div>

      {/* Long-press fill animation */}
      <style>{`
        @keyframes lp-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      {/* Bottom CTA */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingBottom: '72px' }}>
        <Link
          href="/services"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 36px', borderRadius: '999px',
            fontFamily: 'var(--font-poppins)', fontWeight: 600,
            fontSize: '14px', color: 'white', textDecoration: 'none',
            background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          View All Services →
        </Link>
      </div>
    </section>
  )
}
