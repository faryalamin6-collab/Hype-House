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
  { text: 'Strategy that thinks ahead. Creative that cuts through. AI that scales it all.', size: '15px', weight: 400, opacity: 0.72 },
  { text: 'One partner. End to end. No gaps.', size: '15px', weight: 600, opacity: 0.88 },
]

// Reusable fade-up initial style
const fadeInit: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(24px)',
  transition: 'opacity 0.65s ease, transform 0.65s ease',
  willChange: 'opacity, transform',
}

export default function AboutContent() {
  const heroInnerRef = useRef<HTMLDivElement>(null)
  const punchlineRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // Collected fade targets — push refs here in render
  const fadeRefs = useRef<(HTMLElement | null)[]>([])

  // Hero parallax — desktop only, ±6–8px
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const handle = (e: MouseEvent) => {
      if (!heroInnerRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      heroInnerRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  // Single IntersectionObserver for all fade-up elements
  useEffect(() => {
    const targets = [
      ...punchlineRefs.current,
      ...cardRefs.current,
      ...fadeRefs.current,
    ].filter(Boolean) as HTMLElement[]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = el.dataset.scaleTarget ? 'scale(1)' : 'translateY(0)'
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
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.65s ease ${i * 130}ms, transform 0.65s ease ${i * 130}ms`,
                  willChange: 'opacity, transform',
                  fontFamily: 'var(--font-poppins)',
                  fontSize: line.size,
                  fontWeight: line.weight,
                  color: `rgba(255,255,255,${line.opacity})`,
                  lineHeight: 1.55,
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

      {/* ── 2. PHILOSOPHY ────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            ref={(el) => { fadeRefs.current[0] = el }}
            style={{ ...fadeInit, marginBottom: '12px' }}
          >
            <SectionLabel>Our Philosophy</SectionLabel>
          </div>

          <div
            ref={(el) => { fadeRefs.current[1] = el }}
            style={{ ...fadeInit, transitionDelay: '80ms', marginBottom: '48px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                marginTop: '16px',
              }}
            >
              Built different.<br />
              <span className="gradient-text">By design.</span>
            </h2>
          </div>

          {/* Philosophy paragraphs — each fades in independently */}
          {[
            {
              lines: ["We're not your typical agency.", "We're architects of velocity."],
              bold: true,
            },
            {
              lines: [
                "Where design, storytelling, and AI collide to create ecosystems that move at lightspeed and perform with precision.",
              ],
            },
            {
              lines: [
                "Where bold creative ignites movements.",
                "Where every visual, every line, and every campaign is built to inspire and engineered to perform.",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[2 + i] = el }}
              style={{
                ...fadeInit,
                transitionDelay: `${(i + 2) * 90}ms`,
                marginBottom: '32px',
              }}
            >
              {block.lines.map((line, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: '16px',
                    fontWeight: block.bold ? 600 : 400,
                    color: block.bold ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8,
                    marginBottom: j < block.lines.length - 1 ? '10px' : 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBTLE RULE ──────────────────────────────────────────────────── */}
      <div
        style={{
          height: '1px',
          margin: '0 48px',
          background: 'rgba(255,255,255,0.06)',
          zIndex: 10, position: 'relative',
        }}
        aria-hidden="true"
      />

      {/* ── 3. IDENTITY ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            ref={(el) => { fadeRefs.current[5] = el }}
            style={{ ...fadeInit, marginBottom: '12px' }}
          >
            <SectionLabel>Who We Are</SectionLabel>
          </div>

          <div
            ref={(el) => { fadeRefs.current[6] = el }}
            style={{ ...fadeInit, transitionDelay: '80ms', marginBottom: '40px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                marginTop: '16px',
              }}
            >
              A collective.<br />
              <span className="gradient-text">Not a conventional agency.</span>
            </h2>
          </div>

          {[
            {
              lines: [
                "HypeHouse is a collective of digital natives, AI visionaries, and creative architects",
                "who know that modern brands need more than marketing.",
              ],
            },
            {
              lines: [
                "They need systems that evolve.",
                "Stories that spread like wildfire.",
                "Visuals that rewire perception.",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[7 + i] = el }}
              style={{
                ...fadeInit,
                transitionDelay: `${(i + 2) * 90}ms`,
                marginBottom: '28px',
              }}
            >
              {block.lines.map((line, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8,
                    marginBottom: j < block.lines.length - 1 ? '8px' : 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBTLE RULE ──────────────────────────────────────────────────── */}
      <div
        style={{
          height: '1px',
          margin: '0 48px',
          background: 'rgba(255,255,255,0.06)',
          zIndex: 10, position: 'relative',
        }}
        aria-hidden="true"
      />

      {/* ── 4. TACHYON SECTION ───────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            ref={(el) => { fadeRefs.current[9] = el }}
            style={{ ...fadeInit, marginBottom: '12px' }}
          >
            <SectionLabel>The Engine</SectionLabel>
          </div>

          <div
            ref={(el) => { fadeRefs.current[10] = el }}
            style={{ ...fadeInit, transitionDelay: '80ms', marginBottom: '40px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                marginTop: '16px',
              }}
            >
              Powered by{' '}
              <span className="about-tachyon-text-inline">TACHYON</span>
              .<br />
              <span className="gradient-text">Built to scale.</span>
            </h2>
          </div>

          {[
            "Powered by Tachyon, our AI backbone, we launch brands, scale performance, and turn attention into revenue.",
            "But Tachyon doesn't stop with us.",
            "It's an AI and automation engine we've built to help businesses operate smarter, move faster, and scale without friction.",
            "From intelligent workflows to connected systems — it's designed for brands that want more than just marketing.",
          ].map((para, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[11 + i] = el }}
              style={{
                ...fadeInit,
                transitionDelay: `${(i + 2) * 90}ms`,
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: i === 1 ? 600 : 400,
                  color: i === 1 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
                  lineHeight: 1.8,
                }}
              >
                {para}
              </p>
            </div>
          ))}

          <div
            ref={(el) => { fadeRefs.current[15] = el }}
            style={{ ...fadeInit, transitionDelay: '450ms', marginTop: '8px' }}
          >
            <Link href="/tachyon" className="about-tachyon-link">
              Explore Tachyon →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. VALUES — THE CODE ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '80px 48px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            ref={(el) => { fadeRefs.current[16] = el }}
            style={{ ...fadeInit, textAlign: 'center', marginBottom: '16px' }}
          >
            <SectionLabel>The Code</SectionLabel>
          </div>
          <div
            ref={(el) => { fadeRefs.current[17] = el }}
            style={{ ...fadeInit, transitionDelay: '80ms', textAlign: 'center', marginBottom: '20px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.02em',
              }}
            >
              Freedom. Partnership. Quality. Hype.
            </h2>
          </div>
          <div
            ref={(el) => { fadeRefs.current[18] = el }}
            style={{ ...fadeInit, transitionDelay: '140ms', textAlign: 'center', marginBottom: '48px' }}
          >
            <p
              style={{
                fontSize: '15px', color: 'rgba(255,255,255,0.60)',
                maxWidth: '600px', margin: '0 auto', lineHeight: 1.75,
              }}
            >
              These are not values on a wall. They are operating principles. Every decision we make runs through this filter.
            </p>
          </div>

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

      {/* ── 6. CLOSING ───────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative', zIndex: 10,
          padding: '80px 48px 100px',
          textAlign: 'center', overflow: 'hidden',
        }}
      >
        <div className="about-closing-glow" aria-hidden="true" />

        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
          {/* Closing statement lines */}
          {[
            { text: 'We exist for brands that want to feel alive.', weight: 700, size: 'clamp(18px, 2.5vw, 26px)', opacity: 0.92 },
            { text: 'The ones that want more than visibility.', weight: 400, size: '16px', opacity: 0.72 },
            { text: 'The ones that want to matter.', weight: 400, size: '16px', opacity: 0.72 },
          ].map((line, i) => (
            <div
              key={i}
              ref={(el) => { fadeRefs.current[19 + i] = el }}
              style={{
                ...fadeInit,
                transitionDelay: `${i * 100}ms`,
                marginBottom: i === 0 ? '20px' : '8px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: line.weight,
                  fontSize: line.size,
                  color: `rgba(255,255,255,${line.opacity})`,
                  lineHeight: 1.5,
                }}
              >
                {line.text}
              </p>
            </div>
          ))}

          {/* Italicised tagline */}
          <div
            ref={(el) => { fadeRefs.current[22] = el }}
            style={{ ...fadeInit, transitionDelay: '300ms', margin: '36px 0 24px' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-poppins)', fontStyle: 'italic',
                fontSize: '18px', fontWeight: 500,
                color: 'rgba(255,255,255,0.80)', lineHeight: 1.5,
              }}
            >
              Where hype isn&apos;t noise. It&apos;s momentum.
            </p>
          </div>

          {/* Future statement */}
          <div
            ref={(el) => { fadeRefs.current[23] = el }}
            style={{ ...fadeInit, transitionDelay: '380ms', marginBottom: '56px' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 600,
                fontSize: '16px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6,
              }}
            >
              This is the future of creative. And it starts here.<br />
              Welcome to HypeHouse.
            </p>
          </div>

          {/* Closing quote */}
          <div
            ref={(el) => { fadeRefs.current[24] = el }}
            data-scale-target="true"
            style={{
              opacity: 0,
              transform: 'scale(0.96)',
              transition: 'opacity 0.8s ease 460ms, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 460ms',
              willChange: 'opacity, transform',
              marginBottom: '52px',
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(20px, 3.5vw, 40px)', lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.90)',
              }}
            >
              &ldquo;We don&apos;t build brands. We engineer hype.<br />
              And we don&apos;t stop until the market feels it.&rdquo;
            </blockquote>
          </div>

          <div
            ref={(el) => { fadeRefs.current[25] = el }}
            style={{ ...fadeInit, transitionDelay: '540ms' }}
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
