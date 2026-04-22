'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  { num: '01', name: 'Branding',            tagline: 'Identity is destiny.',        href: '/services#branding' },
  { num: '02', name: 'Copywriting',         tagline: 'Words that convert.',          href: '/services#copywriting' },
  { num: '03', name: 'Social Media',        tagline: 'Presence is power.',           href: '/services#social-media' },
  { num: '04', name: 'Digital Advertising', tagline: 'Every penny, optimised.',      href: '/services#advertising' },
  { num: '05', name: 'Web & UX/UI',         tagline: 'First impressions convert.',   href: '/services#web' },
  { num: '06', name: 'SEO',                 tagline: 'Visibility that compounds.',   href: '/services#seo' },
  { num: '✦',  name: 'Tachyon',             tagline: 'AI that runs your brand.',     href: '/tachyon' },
]

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any
    async function init() {
      const { gsap, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      ctx = gsap.context(() => {
        const tiles = sectionRef.current?.querySelectorAll<HTMLElement>('.svc-tile')
        if (!tiles) return

        tiles.forEach((tile, i) => {
          // Zoom-in from below with stagger
          gsap.fromTo(
            tile,
            { opacity: 0, y: 60, scale: 0.82, filter: 'blur(8px)' },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.95,
              ease: 'power3.out',
              delay: (i % 3) * 0.08,
              scrollTrigger: {
                trigger: tile,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      }, sectionRef)
    }
    init()
    return () => ctx?.revert()
  }, [])

  // 3D tilt on mouse move
  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -14
    const ry = (px - 0.5) * 14
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.035,1.035,1.035)`

    // Move the live glow spot
    const spot = el.querySelector<HTMLElement>('.glow-spot')
    if (spot) {
      spot.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(4,157,255,0.22) 0%, transparent 62%)`
    }
    // Brighten border
    const border = el.querySelector<HTMLElement>('.glow-border')
    if (border) border.style.opacity = '1'
  }

  const onMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transition = 'none'
    e.currentTarget.style.zIndex = '10'
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    el.style.transition = 'transform 0.65s cubic-bezier(0.23,1,0.32,1)'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    el.style.zIndex = ''
    const spot = el.querySelector<HTMLElement>('.glow-spot')
    if (spot) spot.style.background = 'transparent'
    const border = el.querySelector<HTMLElement>('.glow-border')
    if (border) border.style.opacity = '0'
  }

  return (
    <section
      ref={sectionRef}
      style={{ position: 'relative', zIndex: 10, padding: '90px 24px 110px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 600,
            fontSize: '11px', letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#049DFF',
            marginBottom: '18px',
          }}>
            ✦ What We Do
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
            letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: '20px',
          }}>
            For brands that want to be felt,{' '}
            <span className="gradient-text">not just seen.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontSize: '15px',
            color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
            maxWidth: '560px', margin: '0 auto',
          }}>
            Strategy, creative, and execution — unified under one roof, moving as one.
          </p>
        </div>

        {/* Tile grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {services.map((svc) => (
            <Link
              key={svc.name}
              href={svc.href}
              scroll={false}
              className="svc-tile"
              style={{
                position: 'relative',
                display: 'block',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                opacity: 0,
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.65s cubic-bezier(0.23,1,0.32,1)',
                // Glass card
                background: 'linear-gradient(135deg, rgba(4,157,255,0.07) 0%, rgba(166,20,178,0.07) 100%)',
                border: '1px solid rgba(4,157,255,0.18)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                padding: '36px 32px 32px',
                minHeight: '200px',
              }}
              onMouseMove={onMouseMove}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {/* Live mouse-tracked glow spot */}
              <div
                className="glow-spot"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'transparent',
                  transition: 'background 0.08s linear',
                  pointerEvents: 'none',
                  borderRadius: '20px',
                }}
              />

              {/* Animated border glow on hover */}
              <div
                className="glow-border"
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '20px',
                  boxShadow: 'inset 0 0 0 1px rgba(4,157,255,0.6), 0 0 48px rgba(4,157,255,0.16)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }}
              />

              {/* Top-left corner accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '80px', height: '80px',
                background: 'radial-gradient(circle at 0% 0%, rgba(166,20,178,0.22) 0%, transparent 70%)',
                borderRadius: '20px 0 0 0',
                pointerEvents: 'none',
              }} />

              {/* Top edge highlight */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                pointerEvents: 'none',
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Service number */}
                <span style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 700,
                  fontSize: '12px', letterSpacing: '0.18em',
                  color: '#049DFF', display: 'block', marginBottom: '20px',
                }}>
                  {svc.num}
                </span>

                {/* Service name */}
                <h3 style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 800,
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  color: 'white', letterSpacing: '-0.02em',
                  lineHeight: 1.1, margin: '0 0 14px',
                }}>
                  {svc.name}
                </h3>

                {/* Tagline */}
                <p style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 400,
                  fontSize: '14px', color: 'rgba(255,255,255,0.42)',
                  lineHeight: 1.6, margin: '0 0 28px',
                }}>
                  {svc.tagline}
                </p>

                {/* Explore CTA */}
                <span style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 600,
                  fontSize: '12px', letterSpacing: '0.1em',
                  color: 'rgba(4,157,255,0.75)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  Explore →
                </span>
              </div>

              {/* Bottom glow line */}
              <div style={{
                position: 'absolute', bottom: 0, left: '8%', right: '8%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(4,157,255,0.55), transparent)',
                pointerEvents: 'none',
              }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
