'use client'

import React, { useRef, useState, useEffect } from 'react'
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
  },
]

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
  zIndex,
  isActive,
  onTapCard,
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
  zIndex: number
  isActive: boolean
  onTapCard: () => void
  animDelay: number
}) {
  const router = useRouter()

  const handleTap = () => {
    if (isActive) {
      router.push(href)
    } else {
      onTapCard()
    }
  }

  return (
    <motion.div
      className="drag-card absolute"
      // ── Entrance: fall from above ──
      initial={{ opacity: 0, y: -380, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 14,
        delay: animDelay,
      }}
      // ── Drag ──
      drag
      dragConstraints={containerRef}
      dragElastic={0.45}
      dragMomentum={false}
      // ── Tap — Framer Motion only fires this when no drag occurred ──
      onTap={handleTap}
      // ── Hover / drag states ──
      whileHover={{ scale: 1.03 }}
      whileDrag={{
        scale: 1.07,
        rotateX: 8,
        boxShadow: `0 0 80px rgba(166,20,178,0.7), 0 32px 80px ${accent}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
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
        // Premium frosted glass
        background: 'linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(166,20,178,0.10) 45%, rgba(4,157,255,0.07) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        border: '1px solid rgba(255,255,255,0.16)',
        // Multi-layer shadow: inner highlight + purple outer glow + depth
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,0.22)',
          `0 0 40px rgba(166,20,178,0.32)`,
          `0 0 12px ${accent}22`,
          '0 20px 60px rgba(0,0,0,0.55)',
        ].join(', '),
        transformStyle: 'preserve-3d',
        // Active card: brighter border
        outline: isActive ? `1.5px solid ${accent}` : 'none',
        outlineOffset: '2px',
      }}
    >
      {/* Inner top-edge shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%',
        height: '1px',
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
        fontSize: 'clamp(19px, 1.7vw, 27px)', color: 'white',
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

      {/* CTA — changes on active */}
      <span style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 600,
        fontSize: '12px', letterSpacing: '0.06em',
        color: isActive ? accent : 'rgba(255,255,255,0.28)',
        transition: 'color 0.2s ease',
      }}>
        {isActive ? 'Tap again to explore →' : 'Tap to select'}
      </span>

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '1px',
        background: `linear-gradient(90deg, transparent, ${accent}cc, transparent)`,
        borderRadius: '999px',
      }} />

      {/* Purple corner glow */}
      <div style={{
        position: 'absolute', top: '-8px', right: '-8px',
        width: '70px', height: '70px',
        borderRadius: '50%',
        background: 'rgba(166,20,178,0.45)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      {/* Accent corner glow (bottom-left) */}
      <div style={{
        position: 'absolute', bottom: '-8px', left: '-8px',
        width: '50px', height: '50px',
        borderRadius: '50%',
        background: `${accent}55`,
        filter: 'blur(18px)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function DragServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState<string | null>(null)
  // Track per-card z-index
  const [zMap, setZMap] = useState<Record<string, number>>(() =>
    Object.fromEntries(services.map((s, i) => [s.number, i + 1]))
  )
  const zCounter = useRef(services.length + 1)

  const bringToFront = (number: string) => {
    zCounter.current += 1
    setZMap(prev => ({ ...prev, [number]: zCounter.current }))
  }

  const handleTapCard = (number: string) => {
    bringToFront(number)
    setActiveCard(number)
  }

  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', zIndex: 10 }}>

      {/* Watermark */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', userSelect: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-poppins)', fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 220px)',
          lineHeight: 1,
          background: 'linear-gradient(135deg, rgba(12,18,141,0.08), rgba(166,20,178,0.08))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
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
          fontSize: 'clamp(32px, 5vw, 60px)', color: 'white',
          letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '12px',
        }}>
          Six Pillars.{' '}
          <span className="gradient-text">One Agency.</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-poppins)', fontSize: '13px',
          color: 'rgba(255,255,255,0.28)',
        }}>
          Drag freely · Tap once to select · Tap again to explore
        </p>
      </div>

      {/* Drag area */}
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '72vh' }}
        // Clicking the backdrop deselects
        onClick={() => setActiveCard(null)}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
            {...service}
            zIndex={zMap[service.number] ?? i + 1}
            isActive={activeCard === service.number}
            onTapCard={() => handleTapCard(service.number)}
            animDelay={i * 0.1}
          />
        ))}
      </div>

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
