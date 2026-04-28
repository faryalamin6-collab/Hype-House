'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { number: 'Strategy First', label: 'Before a single pixel is touched.', icon: '◆' },
  { number: 'Built with Intent', label: 'Creative that is designed to drive real outcomes.', icon: '◈' },
  { number: 'Built to Outperform', label: 'Connecting ambitious brands to marketing that actually moves.', icon: '⬡' },
]

export default function WhyHypeHouse() {
  return (
    <section style={{ position: 'relative', zIndex: 10 }}>
      <ScrollReveal>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(28px, 5vw, 60px) 24px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Why HypeHouse</SectionLabel>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(24px, 3.5vw, 44px)', color: 'white',
            marginTop: '20px', marginBottom: '24px', letterSpacing: '-0.02em',
          }}>
            Strategy before execution.{' '}
            <span className="gradient-text">Always.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontSize: '16px',
            color: 'rgba(255,255,255,0.80)', lineHeight: 1.7,
            maxWidth: '580px', margin: '0 auto 56px',
          }}>
            Most agencies sell disconnected services. We build one connected system where strategy shapes the creative, creative drives performance, and every part of the brand moves in the same direction.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 800,
                  fontSize: 'clamp(20px, 2.5vw, 34px)', lineHeight: 1, marginBottom: '6px',
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
      </ScrollReveal>
    </section>
  )
}
