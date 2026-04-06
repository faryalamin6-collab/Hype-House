'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

const services = [
  {
    icon: '◈',
    name: 'Branding',
    manifesto: 'Identity is destiny.',
    description:
      'We craft brand identities that command attention — from strategy and naming to visual systems that scale across every touchpoint.',
    href: '/services#branding',
  },
  {
    icon: '✎',
    name: 'Copywriting',
    manifesto: 'Words that convert.',
    description:
      'AI-augmented copy that speaks directly to your audience\'s psychology. Brand voice, campaigns, web copy, and content that moves people to act.',
    href: '/services#copywriting',
  },
  {
    icon: '◉',
    name: 'Social Media',
    manifesto: 'Presence is power.',
    description:
      'Strategic content systems and community management that builds loyal audiences and drives consistent engagement across every platform.',
    href: '/services#social-media',
  },
  {
    icon: '⬡',
    name: 'Digital Advertising',
    manifesto: 'Every rupee, optimised.',
    description:
      'Data-driven paid campaigns across Meta, Google, and TikTok — built to acquire customers at the lowest possible cost per acquisition.',
    href: '/services#advertising',
  },
  {
    icon: '⬤',
    name: 'Web & UX/UI',
    manifesto: 'First impressions convert.',
    description:
      'Conversion-optimised websites and digital experiences that turn visitors into customers. Performance-first, pixel-perfect, always.',
    href: '/services#web',
  },
  {
    icon: '◆',
    name: 'SEO & AI Systems',
    manifesto: 'Visibility that compounds.',
    description:
      'Long-term organic growth paired with intelligent automation — so your brand keeps performing even when you\'re not in the room.',
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
                <div
                  style={{
                    fontSize: '28px',
                    marginBottom: '16px',
                    color: '#A614B2',
                  }}
                >
                  {service.icon}
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
