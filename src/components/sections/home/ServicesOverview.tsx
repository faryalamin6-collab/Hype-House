'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

// SVG paths (Heroicons v2 outline, 24px viewBox)
const services = [
  {
    svgPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    name: 'Branding',
    manifesto: 'Identity is destiny.',
    href: '/services#branding',
  },
  {
    svgPath: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125',
    name: 'Copywriting',
    manifesto: 'Words that convert.',
    href: '/services#copywriting',
  },
  {
    svgPath: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    name: 'Social Media',
    manifesto: 'Presence is power.',
    href: '/services#social-media',
  },
  {
    svgPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    name: 'Digital Advertising',
    manifesto: 'Every penny, optimised.',
    href: '/services#advertising',
  },
  {
    svgPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    name: 'Web & UX/UI',
    manifesto: 'First impressions convert.',
    href: '/services#web',
  },
  {
    svgPath: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z',
    name: 'SEO & AI Systems',
    manifesto: 'Visibility that compounds.',
    href: '/services#seo',
  },
]

export default function ServicesOverview() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gridRef.current?.children
    if (!cards) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    async function init() {
      const { gsap, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      ctx = gsap.context(() => {
        gsap.fromTo(
          Array.from(cards as HTMLCollection),
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'cubic-bezier(0.2,0.8,0.2,1)',
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      style={{ position: 'relative', zIndex: 10, padding: '140px 48px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionLabel>What We Do</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
              color: 'white',
              marginTop: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Every service. One agency.{' '}
            <span className="gradient-text">Zero compromises.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map(service => (
            <div
              key={service.name}
              style={{ opacity: 0 }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '16px',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(4,157,255,0.35)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 20px 60px rgba(166,20,178,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.10)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(4,157,255,0.12)',
                    border: '1px solid rgba(4,157,255,0.2)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#049DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.svgPath} />
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(192,132,252,0.7)',
                    marginBottom: '8px',
                  }}
                >
                  {service.manifesto}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: 'white',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {service.name}
                </h3>
                <div style={{ flex: 1 }} />
                <Link
                  href={service.href}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#C084FC',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
