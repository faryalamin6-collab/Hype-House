'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

// ── Animated Section Dividers ─────────────────────────────────────────────

function DividerSynapses() {
  return (
    <div aria-hidden="true" style={{ padding: '12px 0', position: 'relative', zIndex: 10 }}>
      <svg
        viewBox="0 0 1000 80"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '80px', display: 'block' }}
      >
        {/* Connection curves */}
        <path d="M 120 40 Q 205 14 310 40" stroke="rgba(192,132,252,0.22)" strokeWidth="1" fill="none" />
        <path d="M 310 40 Q 415 66 520 40" stroke="rgba(4,157,255,0.22)"   strokeWidth="1" fill="none" />
        <path d="M 520 40 Q 625 16 720 40" stroke="rgba(52,211,153,0.22)"  strokeWidth="1" fill="none" />
        <path d="M 720 40 Q 820 62 900 40" stroke="rgba(192,132,252,0.22)" strokeWidth="1" fill="none" />

        {/* Outer ring pulses */}
        {[120, 310, 520, 720, 900].map((x, i) => (
          <circle key={`ring-${x}`} cx={x} cy="40" r="4" fill="none"
            stroke={i % 2 === 0 ? 'rgba(192,132,252,0.55)' : 'rgba(4,157,255,0.55)'}
            strokeWidth="1">
            <animate attributeName="r"       values="3;6;3"   dur={`${2.6 + i * 0.35}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2.6 + i * 0.35}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Inner fill dots */}
        {[120, 310, 520, 720, 900].map((x, i) => (
          <circle key={`dot-${x}`} cx={x} cy="40" r="2.5"
            fill={i % 2 === 0 ? '#C084FC' : '#049DFF'} opacity="0.8" />
        ))}

        {/* Traveling pulses */}
        <circle r="3.5" fill="#C084FC">
          <animateMotion dur="3.2s" begin="0s"    repeatCount="indefinite" path="M 120 40 Q 205 14 310 40" />
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="0s"    repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="#049DFF">
          <animateMotion dur="3.2s" begin="0.9s"  repeatCount="indefinite" path="M 310 40 Q 415 66 520 40" />
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="0.9s"  repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="#34D399">
          <animateMotion dur="3.2s" begin="1.8s"  repeatCount="indefinite" path="M 520 40 Q 625 16 720 40" />
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="1.8s"  repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill="#C084FC">
          <animateMotion dur="3.2s" begin="2.7s"  repeatCount="indefinite" path="M 720 40 Q 820 62 900 40" />
          <animate attributeName="opacity" values="0;1;0" dur="3.2s" begin="2.7s"  repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

function DividerRadialPulse() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative', zIndex: 10,
        height: '120px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="about-radial-ring about-radial-ring--1" />
      <div className="about-radial-ring about-radial-ring--2" />
      <div className="about-radial-ring about-radial-ring--3" />
      <div className="about-radial-center" />
    </div>
  )
}

function DividerWarpLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative', zIndex: 10,
        height: '72px', overflow: 'hidden',
      }}
    >
      <div className="about-warp-line about-warp-line--1" />
      <div className="about-warp-line about-warp-line--2" />
      <div className="about-warp-line about-warp-line--3" />
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────

const fadeInit: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(22px)',
  willChange: 'opacity, transform',
}

export default function AboutContent() {
  const heroInnerRef = useRef<HTMLDivElement>(null)
  const fadeRefs = useRef<(HTMLElement | null)[]>([])

  // Hero parallax — desktop only, ±6–8 px
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const handle = (e: MouseEvent) => {
      if (!heroInnerRef.current) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      heroInnerRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  // Single IntersectionObserver for all fade-up elements
  useEffect(() => {
    const targets = fadeRefs.current.filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="page-top"
        style={{
          position: 'relative', zIndex: 10,
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '80px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-hero-glow" aria-hidden="true" />

        <div
          ref={heroInnerRef}
          style={{
            maxWidth: '860px', margin: '0 auto', position: 'relative',
            willChange: 'transform', transition: 'transform 0.12s linear',
          }}
        >
          <SectionLabel>About Us · Nice To Meet You</SectionLabel>

          <h1
            style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 76px)',
              marginTop: '24px', marginBottom: '48px',
              letterSpacing: '-0.02em', lineHeight: 1.05,
            }}
          >
            We&apos;re Not Just<br />
            an Agency.<br />
            <span className="gradient-text">We&apos;re the System Behind the Hype.</span>
          </h1>

          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              ref={(el) => { fadeRefs.current[0] = el }}
              style={{ ...fadeInit, transition: 'opacity 0.65s ease 0ms, transform 0.65s ease 0ms' }}
            >
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                HypeHouse is a creative agency based in Karachi, built to operate at a global level.
              </p>
            </div>

            <div
              ref={(el) => { fadeRefs.current[1] = el }}
              style={{ ...fadeInit, transition: 'opacity 0.65s ease 120ms, transform 0.65s ease 120ms' }}
            >
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
                We bring together a network of world-class creatives, strategists, and specialists,
                combining the strength of our in-house team with collaborators from around the world.
              </p>
            </div>

            <div
              ref={(el) => { fadeRefs.current[2] = el }}
              style={{ ...fadeInit, transition: 'opacity 0.7s ease 240ms, transform 0.7s ease 240ms', marginTop: '8px' }}
            >
              <p style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
                color: 'rgba(255,255,255,0.94)',
              }}>
                Masters of their craft,{' '}
                <span className="gradient-text">working as one system.</span>
              </p>
            </div>
          </div>

          <div
            ref={(el) => { fadeRefs.current[3] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 360ms, transform 0.65s ease 360ms', marginTop: '48px' }}
          >
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us →
            </Button>
          </div>
        </div>
      </section>

      {/* ── SYNAPSE DIVIDER ──────────────────────────────────────────────── */}
      <DividerSynapses />

      {/* ── 2. PHILOSOPHY & IDENTITY ─────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {[
            {
              text: "We're not your typical agency.",
              size: '20px', weight: 700, opacity: 0.95, mb: '28px',
            },
            {
              text: "We're architects of velocity, where design, storytelling, and AI collide to create ecosystems that move at lightspeed and perform with precision.",
              size: '15px', weight: 400, opacity: 0.75, mb: '28px',
            },
            {
              text: "Where bold creative ignites movements.",
              size: '18px', weight: 600, opacity: 0.90, mb: '20px',
            },
            {
              text: "Where every visual, every line, and every campaign is built to inspire and engineered to perform.",
              size: '15px', weight: 400, opacity: 0.75, mb: '36px',
            },
            {
              text: "HypeHouse is a collective of digital natives, AI visionaries, and creative architects who know that modern brands need more than marketing. They need systems that evolve. Stories that spread like wildfire. Visuals that rewire perception.",
              size: '15px', weight: 400, opacity: 0.75, mb: '0',
            },
          ].map((line, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[4 + i] = el }}
              style={{
                ...fadeInit,
                transition: `opacity 0.65s ease ${i * 80}ms, transform 0.65s ease ${i * 80}ms`,
                marginBottom: line.mb,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: line.size,
                fontWeight: line.weight,
                color: `rgba(255,255,255,${line.opacity})`,
                lineHeight: 1.85,
              }}>
                {line.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RADIAL PULSE DIVIDER ─────────────────────────────────────────── */}
      <DividerRadialPulse />

      {/* ── 3. TACHYON INLINE ────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 48px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            ref={(el) => { fadeRefs.current[9] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 0ms, transform 0.65s ease 0ms', marginBottom: '24px' }}
          >
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
              Powered by Tachyon, our AI backbone, we launch brands, scale performance,
              and turn attention into revenue.
            </p>
          </div>

          <div
            ref={(el) => { fadeRefs.current[10] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 140ms, transform 0.65s ease 140ms', marginBottom: '36px' }}
          >
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85 }}>
              Tachyon is an AI and automation engine we&apos;ve built, designed to help businesses
              operate smarter, move faster, and scale without friction with AI business integrations.
            </p>
          </div>

          <div
            ref={(el) => { fadeRefs.current[11] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 260ms, transform 0.65s ease 260ms' }}
          >
            <Link href="/tachyon" className="about-tachyon-link">
              Explore Tachyon →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WARP LINES DIVIDER ───────────────────────────────────────────── */}
      <DividerWarpLines />

      {/* ── 4. CLOSING ───────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px 100px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-closing-glow" aria-hidden="true" />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>

          {[
            { text: "We exist for brands that want to feel alive.", size: 'clamp(18px, 2.5vw, 26px)', weight: 700, color: 'rgba(255,255,255,0.94)' },
            { text: "The ones that want more than visibility.",     size: '16px',                      weight: 400, color: 'rgba(255,255,255,0.70)' },
            { text: "The ones that want to matter.",               size: '16px',                      weight: 400, color: 'rgba(255,255,255,0.70)' },
          ].map((line, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[12 + i] = el }}
              style={{
                ...fadeInit,
                transition: `opacity 0.65s ease ${i * 100}ms, transform 0.65s ease ${i * 100}ms`,
                marginBottom: i === 0 ? '16px' : '8px',
              }}
            >
              <p style={{ fontSize: line.size, fontWeight: line.weight, color: line.color, lineHeight: 1.5 }}>
                {line.text}
              </p>
            </div>
          ))}

          <div
            ref={(el) => { fadeRefs.current[15] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 320ms, transform 0.65s ease 320ms', margin: '40px 0 20px' }}
          >
            <p style={{
              fontFamily: 'var(--font-poppins)', fontStyle: 'italic',
              fontWeight: 500, fontSize: '18px',
              color: 'rgba(255,255,255,0.82)', lineHeight: 1.5,
            }}>
              Where hype isn&apos;t noise. It&apos;s momentum.
            </p>
          </div>

          <div
            ref={(el) => { fadeRefs.current[16] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 420ms, transform 0.65s ease 420ms', marginBottom: '56px' }}
          >
            <p style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 600,
              fontSize: '16px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7,
            }}>
              This is the future of creative. And it starts here.<br />
              Welcome to HypeHouse.
            </p>
          </div>

          <div
            ref={(el) => { fadeRefs.current[17] = el }}
            style={{ ...fadeInit, transition: 'opacity 0.65s ease 520ms, transform 0.65s ease 520ms' }}
          >
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
