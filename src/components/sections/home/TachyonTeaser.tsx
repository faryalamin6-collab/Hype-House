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
        padding: '140px 48px',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(166,20,178,0.08) 0%, transparent 70%)',
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
          <SectionLabel>Tachyon AI System</SectionLabel>
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
            <span className="gradient-text">That Think For You.</span>
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
            Tachyon is HypeHouse&apos;s proprietary AI automation layer — a suite of intelligent
            workflows that eliminate repetitive tasks, accelerate content production, and
            keep your brand running 24/7 without extra headcount.
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
            From lead qualification to automated reporting, competitor monitoring to
            content scheduling — Tachyon makes your business faster, smarter, and more
            resilient than any agency operating without AI.
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
              background: 'linear-gradient(135deg, #A614B2, #0C128D)',
            }}
          >
            Explore Tachyon →
          </Link>
        </ScrollReveal>

        {/* Right: Energy node visual */}
        <ScrollReveal delay={150}>
          <div
            style={{
              position: 'relative',
              aspectRatio: '1',
              maxWidth: '440px',
              margin: '0 auto',
            }}
          >
            {/* Constellation of dots */}
            <svg
              viewBox="0 0 400 400"
              style={{ width: '100%', height: '100%', opacity: 0.7 }}
            >
              {/* Connection lines */}
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
                  stroke="rgba(166,20,178,0.3)"
                  strokeWidth="1"
                />
              ))}

              {/* Nodes */}
              {[
                [200, 200, 8, '#A614B2'],
                [120, 100, 5, '#C084FC'],
                [300, 80, 5, '#049DFF'],
                [340, 240, 5, '#A614B2'],
                [240, 340, 5, '#C084FC'],
                [80, 300, 5, '#0C128D'],
                [60, 160, 5, '#049DFF'],
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

              {/* Outer ring */}
              <circle
                cx="200" cy="200" r="140"
                fill="none"
                stroke="rgba(166,20,178,0.12)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx="200" cy="200" r="100"
                fill="none"
                stroke="rgba(12,18,141,0.10)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            </svg>

            {/* Glow behind */}
            <div
              style={{
                position: 'absolute',
                inset: '20%',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(166,20,178,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
