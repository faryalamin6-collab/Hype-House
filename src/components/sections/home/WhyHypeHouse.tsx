'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { number: 'Strategy First', label: 'Before a single pixel is touched', icon: '◆' },
  { number: 'AI-Powered', label: 'Human-led creative', icon: '◈' },
  { number: 'Karachi → Global', label: 'Built for ambition', icon: '⬡' },
]

export default function WhyHypeHouse() {
  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '60px 0' }}>
      {/* Full-width image with overlay */}
      <ScrollReveal>
        <div style={{ position: 'relative', width: '100%', minHeight: '500px', overflow: 'hidden' }}>
          <Image
            src="/images/hero-bg.png"
            alt="HypeHouse Digital"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.20 }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(2,0,8,0.95) 0%, rgba(2,0,8,0.6) 50%, rgba(2,0,8,0.95) 100%)',
          }} />
          <div style={{
            position: 'relative', zIndex: 2,
            maxWidth: '1200px', margin: '0 auto', padding: '60px 48px',
          }}>
            <SectionLabel>Why HypeHouse</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
              marginTop: '20px', marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '700px',
            }}>
              Strategy before execution.{' '}
              <span className="gradient-text">Always.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-poppins)', fontSize: '18px',
              color: 'rgba(255,255,255,0.80)', lineHeight: 1.7,
              maxWidth: '580px', marginBottom: '56px',
            }}>
              Strategy. Creative. Technology. Automation — one unified system. Not six disconnected vendors. One partner who owns the outcome.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-poppins)', fontWeight: 800,
                    fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1, marginBottom: '6px',
                  }} className="gradient-text">
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-poppins)', fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
