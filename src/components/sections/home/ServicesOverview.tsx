'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

const services = [
  { name: 'Branding',            manifesto: 'Identity is destiny.',       href: '/services#branding',    image: '/images/branding-header.png' },
  { name: 'Copywriting',         manifesto: 'Words that convert.',         href: '/services#copywriting', image: '/images/copywriting-header.png' },
  { name: 'Social Media',        manifesto: 'Presence is power.',          href: '/services#social-media',image: '/images/social-media-header.png' },
  { name: 'Digital Advertising', manifesto: 'Every penny, optimised.',     href: '/services#advertising', image: '/images/digital-adverts-header.png' },
  { name: 'Web & UX/UI',         manifesto: 'First impressions convert.',  href: '/services#web',         image: '/images/web-design-header.png' },
  { name: 'SEO',                 manifesto: 'Visibility that compounds.',  href: '/services#seo',         image: '/images/seo-header.png' },
]

// Alternating entrance directions by column position
const ENTRANCES = [
  { x: -70, y: 30 },  // col 0 — from left
  { x:   0, y: 70 },  // col 1 — from below
  { x:  70, y: 30 },  // col 2 — from right
]

export default function ServicesOverview() {
  const gridRef = useRef<HTMLDivElement>(null)

  // GSAP scroll-triggered entrance
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any
    async function init() {
      const { gsap, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      ctx = gsap.context(() => {
        const cards = gridRef.current?.querySelectorAll<HTMLElement>('.service-holo-tile')
        if (!cards) return

        cards.forEach((card, i) => {
          const { x, y } = ENTRANCES[i % 3]
          gsap.fromTo(
            card,
            { opacity: 0, x, y, scale: 0.88 },
            {
              opacity: 1, x: 0, y: 0, scale: 1,
              duration: 1.0,
              ease: 'power3.out',
              delay: (i % 3) * 0.07,
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      })
    }
    init()
    return () => ctx?.revert()
  }, [])

  // 3D holographic tilt handlers
  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width   // 0 → 1
    const py = (e.clientY - rect.top)  / rect.height  // 0 → 1
    const rx = (py - 0.5) * -18   // rotateX
    const ry = (px - 0.5) *  18   // rotateY

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04,1.04,1.04)`

    const shimmer = el.querySelector<HTMLElement>('.holo-shimmer')
    if (shimmer) {
      shimmer.style.backgroundPosition = `${px * 100}% ${py * 100}%`
      shimmer.style.opacity = '1'
    }
    const spot = el.querySelector<HTMLElement>('.holo-spot')
    if (spot) {
      spot.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(4,157,255,0.28) 0%, transparent 58%)`
    }
    const border = el.querySelector<HTMLElement>('.holo-border')
    if (border) {
      border.style.opacity = '1'
    }
  }

  const onMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transition = 'none'
    e.currentTarget.style.zIndex = '10'
    const img = e.currentTarget.querySelector<HTMLElement>('.tile-img')
    if (img) img.style.transform = 'scale(1.08)'
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    el.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1), z-index 0s 0.6s'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    el.style.zIndex = ''

    const shimmer = el.querySelector<HTMLElement>('.holo-shimmer')
    if (shimmer) shimmer.style.opacity = '0'
    const spot = el.querySelector<HTMLElement>('.holo-spot')
    if (spot) spot.style.background = 'transparent'
    const border = el.querySelector<HTMLElement>('.holo-border')
    if (border) border.style.opacity = '0'
    const img = el.querySelector<HTMLElement>('.tile-img')
    if (img) img.style.transform = 'scale(1)'
  }

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px 100px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionLabel>What We Do</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
            marginTop: '20px', letterSpacing: '-0.02em', lineHeight: 1.15,
          }}>
            For brands that want to be felt,{' '}
            <span className="gradient-text">not just seen.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontSize: '17px',
            color: 'rgba(255,255,255,0.72)', lineHeight: 1.75,
            maxWidth: '640px', margin: '20px auto 0',
          }}>
            Strategy, creative, and execution — unified under one roof, moving as one.
          </p>
        </div>

        {/* Holographic tile grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              scroll={false}
              className="service-holo-tile"
              style={{
                position: 'relative',
                display: 'block',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                textDecoration: 'none',
                cursor: 'pointer',
                opacity: 0,               // GSAP animates to 1
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
              }}
              onMouseMove={onMouseMove}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {/* ── IMAGE ── */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="tile-img"
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                }}
              />

              {/* ── DARK OVERLAY — bottom up ── */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(2,0,8,0.96) 0%, rgba(2,0,8,0.55) 45%, rgba(2,0,8,0.12) 100%)',
              }} />

              {/* ── HOLOGRAPHIC SHIMMER — tracks mouse ── */}
              <div
                className="holo-shimmer"
                style={{
                  position: 'absolute', inset: 0,
                  background: [
                    'linear-gradient(105deg,',
                    '  transparent 25%,',
                    '  rgba(192,132,252,0.22) 38%,',
                    '  rgba(4,157,255,0.22) 50%,',
                    '  rgba(52,211,153,0.15) 62%,',
                    '  transparent 75%)',
                  ].join(''),
                  backgroundSize: '250% 250%',
                  backgroundPosition: '50% 50%',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                }}
              />

              {/* ── MOUSE-TRACKED BLUE SPOT ── */}
              <div
                className="holo-spot"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'transparent',
                  transition: 'background 0.08s linear',
                  pointerEvents: 'none',
                }}
              />

              {/* ── GRADIENT BORDER GLOW (hover) ── */}
              <div
                className="holo-border"
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '20px',
                  boxShadow: 'inset 0 0 0 1px rgba(4,157,255,0.55), 0 0 40px rgba(4,157,255,0.18)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }}
              />

              {/* ── STATIC TOP EDGE HIGHLIGHT ── */}
              <div style={{
                position: 'absolute', top: 0, left: '12%', right: '12%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                pointerEvents: 'none',
              }} />

              {/* ── CONTENT ── */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '22px 24px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 500,
                  fontSize: '10px', letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(4,157,255,0.85)',
                  display: 'block', marginBottom: '7px',
                }}>
                  ✦ {service.manifesto}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 800,
                  fontSize: 'clamp(22px, 2.6vw, 36px)',
                  color: 'white', letterSpacing: '-0.02em',
                  lineHeight: 1.1, margin: '0 0 12px',
                }}>
                  {service.name}
                </h3>

                <span style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 600,
                  fontSize: '12px', letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.45)',
                  display: 'flex', alignItems: 'center', gap: '5px',
                }}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
