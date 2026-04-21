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
    rotate: '6deg',
    top: '12%',
    left: '18%',
    width: 'clamp(200px, 22vw, 320px)',
    accent: '#049DFF',
    href: '/services#branding',
  },
  {
    number: '02',
    title: 'Copywriting',
    tagline: 'Words that convert',
    rotate: '-8deg',
    top: '54%',
    left: '12%',
    width: 'clamp(185px, 20vw, 290px)',
    accent: '#A614B2',
    href: '/services#copywriting',
  },
  {
    number: '03',
    title: 'Social Media',
    tagline: 'Strategy, not luck',
    rotate: '12deg',
    top: '22%',
    left: '54%',
    width: 'clamp(178px, 19vw, 275px)',
    accent: '#049DFF',
    href: '/services#social-media',
  },
  {
    number: '04',
    title: 'Digital Advertising',
    tagline: 'Paid media that performs',
    rotate: '-5deg',
    top: '58%',
    left: '48%',
    width: 'clamp(210px, 24vw, 340px)',
    accent: '#A614B2',
    href: '/services#advertising',
  },
  {
    number: '05',
    title: 'Web & UX/UI',
    tagline: 'Built to convert',
    rotate: '15deg',
    top: '12%',
    left: '37%',
    width: 'clamp(192px, 21vw, 305px)',
    accent: '#049DFF',
    href: '/services#web',
  },
  {
    number: '06',
    title: 'SEO',
    tagline: "Attention you don't pay for",
    rotate: '-12deg',
    top: '42%',
    left: '71%',
    width: 'clamp(172px, 18vw, 265px)',
    accent: '#A614B2',
    href: '/services#seo',
  },
]

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
}) {
  const [zIndex, setZIndex] = useState(0)
  const router = useRouter()
  // Track pointer-down position to distinguish tap vs drag
  const pointerDownPos = useRef<{ x: number; y: number } | null>(null)
  const didDrag = useRef(false)

  const bringToFront = () => {
    const els = document.querySelectorAll('.drag-card')
    let max = 0
    els.forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex) || 0
      if (z > max) max = z
    })
    setZIndex(max + 1)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    pointerDownPos.current = { x: e.clientX, y: e.clientY }
    didDrag.current = false
    bringToFront()
  }

  const onDragEnd = (_: unknown, info: { offset: { x: number; y: number } }) => {
    // If total drag offset is small it was a tap
    const dist = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2)
    didDrag.current = dist > 8
    if (!didDrag.current) {
      router.push(href)
    }
  }

  return (
    <motion.div
      className="drag-card absolute"
      onPointerDown={onPointerDown}
      drag
      dragConstraints={containerRef}
      dragElastic={0.55}
      dragMomentum={false}
      onDragEnd={onDragEnd}
      whileDrag={{
        scale: 1.06,
        rotateX: 10,
        cursor: 'grabbing',
        boxShadow: `0 0 60px rgba(166,20,178,0.55), 0 30px 70px ${accent}44`,
      }}
      whileHover={{ scale: 1.04, cursor: 'grab' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        top,
        left,
        rotate,
        zIndex,
        width,
        borderRadius: '18px',
        padding: 'clamp(20px, 2vw, 32px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'absolute',
        // More translucent
        background: 'linear-gradient(135deg, rgba(12,18,141,0.28) 0%, rgba(34,0,65,0.38) 100%)',
        border: `1px solid ${accent}55`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        // Purple glow always present, stronger
        boxShadow: `0 0 32px rgba(166,20,178,0.28), 0 8px 32px ${accent}28`,
        transformStyle: 'preserve-3d',
        cursor: 'grab',
      }}
    >
      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 700,
        fontSize: '11px', letterSpacing: '0.22em',
        textTransform: 'uppercase', color: accent,
      }}>
        {number}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 800,
        fontSize: 'clamp(18px, 1.6vw, 26px)', color: 'white',
        lineHeight: 1.2, margin: 0,
      }}>
        {title}
      </h3>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 400,
        fontSize: 'clamp(12px, 0.9vw, 15px)', color: 'rgba(255,255,255,0.4)',
        lineHeight: 1.5, margin: 0,
      }}>
        {tagline}
      </p>

      {/* Tap hint */}
      <span style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 600,
        fontSize: 'clamp(11px, 0.8vw, 13px)', letterSpacing: '0.06em',
        color: `${accent}99`,
      }}>
        Explore →
      </span>

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '16px', right: '16px', height: '1px',
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        borderRadius: '999px',
      }} />

      {/* Purple corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '60px', height: '60px',
        borderRadius: '0 16px 0 100%',
        background: '#A614B2',
        opacity: 0.25,
        filter: 'blur(14px)',
        pointerEvents: 'none',
      }} />
    </motion.div>
  )
}

export default function DragServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null)

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
          lineHeight: 1, textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(12,18,141,0.09), rgba(166,20,178,0.09))',
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
          Drag the cards · Tap to explore
        </p>
      </div>

      {/* Drag area */}
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '70vh' }}
      >
        {services.map(service => (
          <ServiceCard
            key={service.number}
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
            {...service}
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
