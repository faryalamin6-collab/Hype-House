'use client'

import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

export default function TachyonHero() {
  return (
    <section className="page-top w-full relative overflow-hidden rounded-2xl" style={{ minHeight: '600px', background: '#020008', border: '1px solid rgba(4,157,255,0.12)' }}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#5B5BFF"
      />

      <div className="flex flex-col md:flex-row h-full" style={{ minHeight: '600px' }}>
        {/* Left — Tachyon Hero Text */}
        <div className="flex-1 p-10 md:p-16 relative z-10 flex flex-col justify-center">
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#00F0FF',
            marginBottom: '16px',
          }}>
            ✦ Tachyon by HypeHouse
          </p>

          <h1 style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            <span style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Business Systems
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #9F01F6 0%, #021FC3 35%, #00F0FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              That Think For You.
            </span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.60)',
            lineHeight: 1.75,
            maxWidth: '420px',
            marginBottom: '32px',
          }}>
            Automation and AI intelligence built for agencies, brands, and businesses that refuse to slow down.
          </p>

          <a
            href="https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20know%20more%20about%20Tachyon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              textDecoration: 'none',
              width: 'fit-content',
              background: 'linear-gradient(135deg, #9F01F6 0%, #021FC3 35%, #00F0FF 100%)',
            }}
          >
            Activate Tachyon →
          </a>
        </div>

        {/* Right — 3D Spline Scene */}
        <div className="flex-1 relative overflow-hidden" style={{ minHeight: '300px', maxWidth: '50%' }}>
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </section>
  )
}
