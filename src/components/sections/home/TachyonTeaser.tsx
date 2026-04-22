'use client'

import { useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function TachyonTeaser() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background glow — Deep System Blue, not HypeHouse violet */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(2,31,195,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel className="tachyon-label">Tachyon AI System</SectionLabel>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              color: 'white',
              marginTop: '20px',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Business Systems{' '}
            <span className="tachyon-gradient-text">That Think For You.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: '16px',
            }}
          >
            Most businesses still run on manual follow ups, scattered tools, and slow processes.
            Tachyon replaces that with connected systems built to respond faster, organize smarter,
            and keep growth moving in the background.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: '36px',
            }}
          >
            CRM automation, WhatsApp flows, lead pipelines, booking systems, and reporting
            dashboards. Built once. Running continuously.
          </p>
          <Link
            href="/tachyon"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 600,
              fontSize: '15px',
              color: 'white',
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #5B8FFF 0%, #B040FF 55%, #00F0FF 100%)',
            }}
          >
            Explore Tachyon →
          </Link>
        </ScrollReveal>

      </div>
    </section>
  )
}
