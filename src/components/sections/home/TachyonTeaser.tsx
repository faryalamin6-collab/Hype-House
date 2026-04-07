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
        padding: '60px 48px',
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
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left: Content */}
        <ScrollReveal>
          <SectionLabel className="tachyon-label">Tachyon AI System</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
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
              fontSize: '17px',
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
              fontSize: '17px',
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

        {/* Right: Energy node visual — hidden on mobile to avoid blank space */}
        <ScrollReveal delay={150} className="hidden md:block">
          <div
            style={{
              position: 'relative',
              aspectRatio: '1',
              maxWidth: '440px',
              margin: '0 auto',
            }}
          >
            {/* Constellation of dots — Tachyon palette */}
            <svg
              viewBox="0 0 400 400"
              style={{ width: '100%', height: '100%', opacity: 0.7 }}
            >
              {/* Connection lines — faint cyan strokes */}
              {[
                [200, 200, 120, 100],
                [200, 200, 300, 80],
                [200, 200, 340, 240],
                [200, 200, 240, 340],
                [200, 200, 80, 300],
                [200, 200, 60, 160],
                [120, 100, 300, 80],
                [300, 80, 340, 240],
                [340, 240, 240, 340],
                [240, 340, 80, 300],
                [80, 300, 60, 160],
                [60, 160, 120, 100],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(0,240,255,0.12)"
                  strokeWidth="1"
                />
              ))}

              {/* Nodes — Tachyon palette: Electric Core, Deep System Blue, Plasma Violet */}
              {[
                [200, 200, 8, '#9F01F6'],   // centre — Plasma Violet
                [120, 100, 5, '#00F0FF'],   // Electric Core
                [300, 80,  5, '#021FC3'],   // Deep System Blue
                [340, 240, 5, '#9F01F6'],   // Plasma Violet
                [240, 340, 5, '#00F0FF'],   // Electric Core
                [80,  300, 5, '#0A0F3C'],   // Neural Indigo (deep anchor node)
                [60,  160, 5, '#00F0FF'],   // Electric Core
              ].map(([cx, cy, r, fill], i) => (
                <circle
                  key={i}
                  cx={cx as number}
                  cy={cy as number}
                  r={r as number}
                  fill={fill as string}
                  opacity={0.9}
                />
              ))}

              {/* Outer ring — faint cyan dashes */}
              <circle
                cx="200" cy="200" r="140"
                fill="none"
                stroke="rgba(0,240,255,0.10)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              {/* Inner ring — Deep System Blue */}
              <circle
                cx="200" cy="200" r="100"
                fill="none"
                stroke="rgba(2,31,195,0.10)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            </svg>

            {/* Glow behind — Tachyon Plasma Violet at low opacity */}
            <div
              style={{
                position: 'absolute',
                inset: '20%',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(159,1,246,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
