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
  // Note: the WRAPPER is what gets observed (not the inner element).
  // The inner starts at translateY(108%) so its bounding rect is shifted
  // below its parent — observing it would never fire. The wrapper stays
  // at its normal layout position and triggers correctly.
  return (
    <div className="about-clip-wrap">
      <Tag
        className={`about-clip-inner ${className}`}
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
      className="about-fade"
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
          marginBottom: '28px',
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
          marginTop: '28px',
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

  // Animation observer.
  //
  // KEY INSIGHT: .about-clip-inner starts at translateY(108%), so its
  // getBoundingClientRect() is shifted BELOW the wrapper — the browser
  // reports its visual position, not layout position. Observing the inner
  // element would never fire because it's "below the viewport" even when
  // the wrapper is fully visible.
  //
  // Solution: observe .about-clip-wrap (wrapper, always at layout position).
  // When wrapper enters viewport, add .visible to its .about-clip-inner children.
  // .about-fade elements are observed directly (no transform offset issue).
  useEffect(() => {
    const clipWraps = Array.from(document.querySelectorAll<HTMLElement>('.about-clip-wrap'))
    const fades     = Array.from(document.querySelectorAll<HTMLElement>('.about-fade'))
    const vh = window.innerHeight

    const revealClip = (wrap: HTMLElement) => {
      wrap.querySelectorAll<HTMLElement>('.about-clip-inner')
        .forEach((inner) => inner.classList.add('visible'))
    }
    const revealFade = (el: HTMLElement) => el.classList.add('visible')

    // Immediately reveal anything already in the viewport on mount
    clipWraps.forEach((el) => { if (el.getBoundingClientRect().top < vh) revealClip(el) })
    fades    .forEach((el) => { if (el.getBoundingClientRect().top < vh) revealFade(el) })

    // Observe everything else
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el.classList.contains('about-clip-wrap')) revealClip(el)
          else revealFade(el)
          obs.unobserve(el)
        })
      },
      { threshold: 0.05 }
    )
    clipWraps.forEach((el) => { if (!el.querySelector('.about-clip-inner.visible')) obs.observe(el) })
    fades    .forEach((el) => { if (!el.classList.contains('visible')) obs.observe(el) })

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

          {/* H1 — single gradient line, same pattern as homepage */}
          <div style={{ margin: '24px 0 48px' }}>
            <ClipReveal
              tag="h1"
              className="about-h1-line gradient-text"
              delay={80}
            >
              We&apos;re the System Behind the Hype.
            </ClipReveal>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

          <FadeUp delay={440} style={{ marginTop: '32px' }}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us
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
          padding: '36px 24px 0',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          <div style={{ marginBottom: '20px' }}>
            <ClipReveal tag="p" className="about-lead" delay={0}>
              We&apos;re not your typical agency.
            </ClipReveal>
          </div>

          <FadeUp delay={80} style={{ marginBottom: '20px' }}>
            <p className="about-body">
              We&apos;re architects of velocity, where design, storytelling, and AI collide to create
              ecosystems that move at lightspeed and perform with precision.
            </p>
          </FadeUp>

          <FadeUp delay={80} style={{ marginBottom: '20px' }}>
            <p className="about-body">
              Where bold creative ignites movements.
            </p>
          </FadeUp>

          <FadeUp delay={80} style={{ marginBottom: '20px' }}>
            <p className="about-body">
              Where every visual, every line, and every campaign is built to inspire
              and engineered to perform.
            </p>
          </FadeUp>

          <FadeUp delay={0} style={{ marginBottom: '20px' }}>
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
          padding: '0 24px 36px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', paddingTop: '24px' }}>
          <div style={{ marginBottom: '20px' }}>
            <ClipReveal tag="p" className="about-lead" delay={0}>
              Everyone talks about AI.
            </ClipReveal>
            <ClipReveal tag="p" className="about-lead" delay={80}>
              We actually build with it.
            </ClipReveal>
          </div>

          <FadeUp style={{ marginBottom: '16px' }}>
            <p className="about-body">
              Powered by Tachyon, our AI backbone, we launch brands, scale performance,
              and turn attention into revenue.
            </p>
          </FadeUp>
          <FadeUp delay={120} style={{ marginBottom: '24px' }}>
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
          padding: '36px 24px 72px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-closing-glow" aria-hidden="true" />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
            <ClipReveal tag="p" className="about-closing-line" delay={0}>
              This is the future of creative.
            </ClipReveal>
            <ClipReveal tag="p" className="about-closing-line" delay={100}>
              &hellip;And it starts here.
            </ClipReveal>
            <ClipReveal tag="p" className="about-closing-line gradient-text" delay={200}>
              Welcome to HypeHouse!
            </ClipReveal>
          </div>

          <FadeUp delay={100}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Work With Us
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
