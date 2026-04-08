'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

// ─────────────────────────────────────────────────────────────────────────────
// ClipReveal — each line slides up from underneath its overflow-hidden wrapper.
// This is the core Apple/Spotify transition technique.
// ─────────────────────────────────────────────────────────────────────────────
function ClipReveal({
  children,
  delay = 0,
  className = '',
  tag: Tag = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  tag?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'blockquote'
}) {
  return (
    <div className="about-clip-wrap">
      <Tag
        className={`about-clip-inner about-observe ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Tag>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FadeUp — standard opacity + translateY reveal for body copy
// ─────────────────────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <div
      className="about-fade about-observe"
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// StatementBreak — large full-width text moment between sections.
// Acts as both a visual breath and a narrative beat. Apple uses these
// ("The thinnest Mac ever.") to separate conceptual blocks.
// ─────────────────────────────────────────────────────────────────────────────
function StatementBreak({
  line1,
  line2,
  gradient2 = false,
}: {
  line1: string
  line2?: string
  gradient2?: boolean
}) {
  return (
    <section
      className="about-statement-break"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          marginBottom: '48px',
        }}
        aria-hidden="true"
      />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <ClipReveal tag="h2" className="about-statement-text" delay={0}>
          {line1}
        </ClipReveal>
        {line2 && (
          <ClipReveal
            tag="h2"
            className={`about-statement-text${gradient2 ? ' gradient-text' : ''}`}
            delay={100}
          >
            {line2}
          </ClipReveal>
        )}
      </div>
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          marginTop: '48px',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutContent() {
  const heroInnerRef = useRef<HTMLDivElement>(null)

  // Hero parallax — desktop only
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

  // Single IntersectionObserver — adds .visible to every .about-observe element.
  // Also immediately reveals any element already in the viewport on mount
  // (hero headings are above the fold and would never scroll into view).
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.about-observe'))

    const reveal = (el: HTMLElement) => {
      el.classList.add('visible')
    }

    // Immediate check — elements already visible when page loads
    const vh = window.innerHeight
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh * 0.95) reveal(el)
    })

    // Observer for elements below the fold
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => {
      if (!el.classList.contains('visible')) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="page-top"
        style={{
          position: 'relative', zIndex: 10,
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '56px',
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
          <FadeUp>
            <SectionLabel>About Us · Nice To Meet You</SectionLabel>
          </FadeUp>

          {/* H1 — each line is a separate clip-reveal */}
          <div style={{ margin: '24px 0 48px' }}>
            <ClipReveal
              tag="h1"
              className="about-h1-line"
              delay={60}
            >
              We&apos;re Not Just an Agency.
            </ClipReveal>
            <ClipReveal
              tag="h1"
              className="about-h1-line gradient-text"
              delay={180}
            >
              We&apos;re the System Behind the Hype.
            </ClipReveal>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FadeUp delay={280}>
              <p className="about-body">
                HypeHouse is a creative agency based in Karachi, built to operate at a global level.
              </p>
            </FadeUp>
            <FadeUp delay={360}>
              <p className="about-body">
                We bring together a network of world-class creatives, strategists, and specialists,
                combining the strength of our in-house team with collaborators from around the world.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={440} style={{ marginTop: '48px' }}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us →
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ── STATEMENT BREAK 1 ────────────────────────────────────────────── */}
      {/* This IS the inter-section transition — the statement slides up       */}
      {/* dramatically from underneath, giving the Apple "reveal" moment.      */}
      <StatementBreak
        line1="Masters of their craft."
        line2="Working as one system."
        gradient2
      />

      {/* ── PHILOSOPHY & IDENTITY ────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '56px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* First statement line — clip-reveal, large */}
          <div style={{ marginBottom: '28px' }}>
            <ClipReveal tag="p" className="about-lead" delay={0}>
              We&apos;re not your typical agency.
            </ClipReveal>
          </div>

          <FadeUp delay={80} style={{ marginBottom: '28px' }}>
            <p className="about-body">
              We&apos;re architects of velocity, where design, storytelling, and AI collide to create
              ecosystems that move at lightspeed and perform with precision.
            </p>
          </FadeUp>

          <div style={{ marginBottom: '28px' }}>
            <ClipReveal tag="p" className="about-mid" delay={0}>
              Where bold creative ignites movements.
            </ClipReveal>
          </div>

          <FadeUp delay={80} style={{ marginBottom: '36px' }}>
            <p className="about-body">
              Where every visual, every line, and every campaign is built to inspire
              and engineered to perform.
            </p>
          </FadeUp>

          <FadeUp delay={0}>
            <p className="about-body">
              At HypeHouse, we believe that modern brands need more than marketing.
              They need systems that evolve. Stories that spread like wildfire.
              Visuals that rewire perception.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── TACHYON INLINE ───────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '0 48px 56px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', paddingTop: '56px' }}>
          <FadeUp style={{ marginBottom: '24px' }}>
            <p className="about-body">
              Powered by Tachyon, our AI backbone, we launch brands, scale performance,
              and turn attention into revenue.
            </p>
          </FadeUp>
          <FadeUp delay={120} style={{ marginBottom: '36px' }}>
            <p className="about-body">
              Tachyon is an AI and automation engine we&apos;ve built, designed to help businesses
              operate smarter, move faster, and scale without friction with AI business integrations.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <Link href="/tachyon" className="about-tachyon-link">
              Explore Tachyon →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── STATEMENT BREAK 2 ────────────────────────────────────────────── */}
      {/* Second inter-section moment — the italic tagline revealed large      */}
      <StatementBreak
        line1="Where hype isn't noise."
        line2="It's momentum."
        gradient2
      />

      {/* ── CLOSING ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '56px 48px 100px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-closing-glow" aria-hidden="true" />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
            <ClipReveal tag="p" className="about-closing-line" delay={0}>
              We exist for brands that want to feel alive.
            </ClipReveal>
            <ClipReveal tag="p" className="about-closing-sub" delay={80}>
              The ones that want more than visibility.
            </ClipReveal>
            <ClipReveal tag="p" className="about-closing-sub" delay={160}>
              The ones that want to matter.
            </ClipReveal>
          </div>

          <FadeUp delay={0} style={{ marginBottom: '48px' }}>
            <p className="about-body" style={{ fontWeight: 600, color: 'rgba(255,255,255,0.88)' }}>
              This is the future of creative. And it starts here.<br />
              Welcome to HypeHouse.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us →
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
