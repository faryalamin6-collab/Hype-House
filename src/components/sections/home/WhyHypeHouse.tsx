'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

const stats = [
  {
    number: '6',
    label: 'Service Pillars',
    sub: 'One unified system',
    icon: '⬡',
  },
  {
    number: 'AI',
    label: 'AI-Powered',
    sub: 'Human-led creative',
    icon: '◈',
  },
  {
    number: 'PKR 1M+',
    label: 'In client results',
    sub: 'Generated & growing',
    icon: '◆',
  },
]

export default function WhyHypeHouse() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.children
    if (!cards) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    async function init() {
      const { gsap, ScrollTrigger, registerGSAP } = await import('@/lib/gsap')
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
              trigger: cardsRef.current,
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
      ref={sectionRef}
      className="section-pad"
      style={{ position: 'relative', zIndex: 10, padding: '96px 24px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <SectionLabel>Why HypeHouse</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
              color: 'white',
              marginTop: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Strategy before execution.{' '}
            <span className="gradient-text">Always.</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {stats.map(stat => (
            <div
              key={stat.label}
              style={{ opacity: 0 }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(124,58,237,0.35)'
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 20px 60px rgba(159,1,246,0.15)'
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
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  height: '100%',
                  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                  borderTop: '1px solid rgba(159,1,246,0)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 800,
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                  className="gradient-text"
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: 'white',
                    marginBottom: '6px',
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
