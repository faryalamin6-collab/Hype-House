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
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 48px' }}>
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
            Most agencies sell disconnected services. We build one connected system where strategy shapes the creative, creative drives performance, and every part of the brand moves in the same direction.
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
      </ScrollReveal>
    </section>
  )
}
