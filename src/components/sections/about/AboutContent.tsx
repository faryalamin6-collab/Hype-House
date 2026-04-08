'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

const codeValues = [
  {
    title: 'Freedom',
    body: "Creative freedom is not optional. It is the condition under which great work becomes possible. We don't do templates. We don't do safe. We chase the ideas that scare us.",
  },
  {
    title: 'Partnership',
    body: "When we work with a brand we treat it like our own. We listen. We challenge. We stay up. We are not a vendor you brief and forget — we are the partner who tells you when you're wrong.",
  },
  {
    title: 'Quality',
    body: 'If it is not exceptional it does not leave the room. This is not a standard. It is a filter. Average work from HypeHouse is not possible because average work is not HypeHouse.',
  },
  {
    title: 'Hype',
    body: 'Hype is not noise. Hype is not likes. Hype is momentum — the kind that compounds, that makes markets move, that builds brands people remember long after the campaign ends.',
  },
]

const introPunchlines = [
  { text: 'Most agencies give you deliverables.', size: '20px', weight: 500, opacity: 0.55 },
  { text: 'We give you a system.', size: '26px', weight: 800, opacity: 1.0 },
  { text: 'Strategy that thinks ahead. Creative that cuts through. AI that scales it all.', size: '16px', weight: 400, opacity: 0.72 },
  { text: 'One partner. End to end. No gaps.', size: '16px', weight: 600, opacity: 0.88 },
]

export default function AboutContent() {
  const heroInnerRef = useRef<HTMLDivElement>(null)
  const punchlineRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const tachyonRef = useRef<HTMLDivElement>(null)
  const closingRef = useRef<HTMLDivElement>(null)

  // Hero parallax — desktop only, max ±6px
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    if (mq.matches) return

    const handle = (e: MouseEvent) => {
      if (!heroInnerRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      heroInnerRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  // IntersectionObserver: fade-up on punchlines, cards, tachyon, closing
  useEffect(() => {
    const targets = [
      ...punchlineRefs.current,
      ...cardRefs.current,
      tachyonRef.current,
      closingRef.current,
    ].filter(Boolean) as HTMLElement[]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = el.dataset.transform ?? 'translateY(0)'
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    targets.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="page-top"
        style={{
          position: 'relative', zIndex: 10,
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '80px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        {/* Radial glow pulse behind heading */}
        <div className="about-hero-glow" />

        <div
          ref={heroInnerRef}
          style={{
            maxWidth: '860px', margin: '0 auto', position: 'relative',
            willChange: 'transform',
            transition: 'transform 0.12s linear',
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

          {/* Staggered punch-lines */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', gap: '18px',
              maxWidth: '640px', margin: '0 auto 52px',
            }}
          >
            {introPunchlines.map((line, i) => (
              <div
                key={i}
                ref={(el) => { punchlineRefs.current[i] = el }}
                data-transform="translateY(0)"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.65s ease ${i * 130}ms, transform 0.65s ease ${i * 130}ms`,
                  willChange: 'opacity, transform',
                  fontFamily: 'var(--font-poppins)',
                  fontSize: line.size,
                  fontWeight: line.weight,
                  color: `rgba(255,255,255,${line.opacity})`,
                  lineHeight: 1.5,
                }}
              >
                {line.text}
              </div>
            ))}
          </div>

          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
            Work With Us →
          </Button>
        </div>
      </section>

      {/* ── LIGHT SWEEP DIVIDER ──────────────────────────────────────────── */}
      <div className="about-divider-sweep" aria-hidden="true">
        <div className="about-divider-sweep__line" />
        <div className="about-divider-sweep__beam" />
      </div>

      {/* ── THE CODE ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '64px 48px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <SectionLabel>The Code</SectionLabel>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
              textAlign: 'center', letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Freedom. Partnership. Quality. Hype.
          </h2>
          <p
            style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.60)',
              textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.75,
            }}
          >
            These are not values on a wall. They are operating principles. Every decision we make runs through this filter.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {codeValues.map((v, i) => (
              <div
                key={v.title}
                ref={(el) => { cardRefs.current[i] = el }}
                data-transform="translateY(0)"
                style={{
                  opacity: 0,
                  transform: 'translateY(32px)',
                  transition: `opacity 0.65s ease ${i * 110}ms, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i * 110}ms`,
                  willChange: 'opacity, transform',
                }}
              >
                <HoverCard style={{ padding: '40px 32px', height: '100%' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins)', fontWeight: 800,
                      fontSize: '22px', marginBottom: '16px',
                    }}
                  >
                    <span className="gradient-text">{v.title}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                    {v.body}
                  </p>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORB PULSE DIVIDER + TRANSITION TEXT ──────────────────────────── */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          padding: '72px 48px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-orb-pulse" aria-hidden="true" />
        <p
          style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 700,
            fontSize: 'clamp(18px, 3vw, 30px)',
            color: 'rgba(255,255,255,0.82)',
            letterSpacing: '-0.01em', lineHeight: 1.4,
            position: 'relative',
          }}
        >
          And behind everything&hellip;{' '}
          <span className="gradient-text">there&apos;s a system.</span>
        </p>
      </div>

      {/* ── TACHYON MENTION ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 48px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div
            ref={tachyonRef}
            data-transform="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(32px)',
              transition: 'opacity 0.7s ease, transform 0.75s cubic-bezier(0.34,1.56,0.64,1)',
              willChange: 'opacity, transform',
              background: 'rgba(4,157,255,0.05)',
              border: '1px solid rgba(4,157,255,0.2)',
              borderRadius: '16px', padding: '48px 40px',
            }}
          >
            <div className="about-tachyon-text">TACHYON</div>
            <p
              style={{
                fontSize: '14px', color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.75, marginBottom: '28px',
              }}
            >
              We also built Tachyon — our automation and AI intelligence sub-brand. Because great creative deserves intelligent systems behind it.
            </p>
            <Link
              href="/tachyon"
              className="about-tachyon-link"
            >
              Explore Tachyon →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ENERGY FIELD DIVIDER ─────────────────────────────────────────── */}
      <div className="about-energy-field" aria-hidden="true">
        <div className="about-energy-field__line about-energy-field__line--1" />
        <div className="about-energy-field__line about-energy-field__line--2" />
        <div className="about-energy-field__line about-energy-field__line--3" />
      </div>

      {/* ── CLOSING SECTION ──────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '64px 48px 100px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-closing-glow" aria-hidden="true" />
        <div
          ref={closingRef}
          data-transform="scale(1)"
          style={{
            opacity: 0,
            transform: 'scale(0.95)',
            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
            willChange: 'opacity, transform',
            position: 'relative',
          }}
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 48px)', lineHeight: 1.2,
              letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 52px',
              color: 'rgba(255,255,255,0.90)',
            }}
          >
            &ldquo;We don&apos;t build brands. We engineer hype. And we don&apos;t stop until the market feels it.&rdquo;
          </blockquote>
          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
            Work With Us →
          </Button>
        </div>
      </section>
    </>
  )
}
