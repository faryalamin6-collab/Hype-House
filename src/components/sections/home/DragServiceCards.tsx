'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Branding',
    tagline: 'A system of influence',
    rotate: '6deg',
    top: '15%',
    left: '20%',
    width: 220,
    accent: '#049DFF',
    href: '/services#branding',
  },
  {
    number: '02',
    title: 'Copywriting',
    tagline: 'Words that convert',
    rotate: '-8deg',
    top: '55%',
    left: '15%',
    width: 200,
    accent: '#A614B2',
    href: '/services#copywriting',
  },
  {
    number: '03',
    title: 'Social Media',
    tagline: 'Strategy, not luck',
    rotate: '12deg',
    top: '25%',
    left: '55%',
    width: 190,
    accent: '#049DFF',
    href: '/services#social-media',
  },
  {
    number: '04',
    title: 'Digital Advertising',
    tagline: 'Paid media that performs',
    rotate: '-5deg',
    top: '60%',
    left: '50%',
    width: 240,
    accent: '#A614B2',
    href: '/services#advertising',
  },
  {
    number: '05',
    title: 'Web & UX/UI',
    tagline: 'Built to convert',
    rotate: '15deg',
    top: '15%',
    left: '38%',
    width: 210,
    accent: '#049DFF',
    href: '/services#web',
  },
  {
    number: '06',
    title: 'SEO',
    tagline: "Attention you don't pay for",
    rotate: '-12deg',
    top: '45%',
    left: '72%',
    width: 185,
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
}: {
  containerRef: React.RefObject<HTMLDivElement>
  number: string
  title: string
  tagline: string
  top: string
  left: string
  rotate: string
  width: number
  accent: string
}) {
  const [zIndex, setZIndex] = useState(0)

  const bringToFront = () => {
    const els = document.querySelectorAll('.drag-card')
    let max = 0
    els.forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex) || 0
      if (z > max) max = z
    })
    setZIndex(max + 1)
  }

  return (
    <motion.div
      className="drag-card absolute cursor-grab active:cursor-grabbing"
      onMouseDown={bringToFront}
      onTouchStart={bringToFront}
      drag
      dragConstraints={containerRef}
      dragElastic={0.55}
      whileDrag={{
        scale: 1.06,
        rotateX: 10,
        boxShadow: `0 30px 70px ${accent}44`,
        cursor: 'grabbing',
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        top,
        left,
        rotate,
        zIndex,
        width,
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'absolute',
        background: 'linear-gradient(135deg, rgba(12,18,141,0.65) 0%, rgba(34,0,65,0.85) 100%)',
        border: `1px solid ${accent}44`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: `0 8px 32px ${accent}22`,
        transformStyle: 'preserve-3d',
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
        fontSize: '17px', color: 'white',
        lineHeight: 1.2, margin: 0,
      }}>
        {title}
      </h3>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-poppins)', fontWeight: 400,
        fontSize: '12px', color: 'rgba(255,255,255,0.38)',
        lineHeight: 1.5, margin: 0,
      }}>
        {tagline}
      </p>

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '16px', right: '16px', height: '1px',
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        borderRadius: '999px',
      }} />

      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '52px', height: '52px',
        borderRadius: '0 16px 0 100%',
        background: accent, opacity: 0.15,
        filter: 'blur(12px)',
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
        <h2 style={{
          fontFamily: 'var(--font-poppins)', fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 220px)',
          lineHeight: 1, textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(12,18,141,0.08), rgba(166,20,178,0.08))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          SERVICES
        </h2>
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '80px', paddingBottom: '32px', paddingLeft: '24px', paddingRight: '24px' }}>
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
          fontSize: 'clamp(32px, 5vw, 60px)', color: 'white',
          letterSpacing: '-0.02em', lineHeight: 1.1,
          marginBottom: '12px',
        }}>
          Six Pillars.{' '}
          <span className="gradient-text">One Agency.</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-poppins)', fontSize: '13px',
          color: 'rgba(255,255,255,0.28)',
        }}>
          Drag the cards · Tap to bring forward
        </p>
      </div>

      {/* Drag area */}
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '100%', height: '65vh' }}
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
