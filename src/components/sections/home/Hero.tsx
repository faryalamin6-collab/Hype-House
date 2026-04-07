'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const paraRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [
      { el: badgeRef.current, delay: 0 },
      { el: line1Ref.current, delay: 100 },
      { el: line2Ref.current, delay: 200 },
      { el: line3Ref.current, delay: 300 },
      { el: paraRef.current, delay: 450 },
      { el: btnsRef.current, delay: 600 },
    ]

    elements.forEach(({ el, delay }) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    })

    // Scroll indicator appears at 800ms
    const scrollTimer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.style.opacity = '1'
      }
    }, 800)

    return () => clearTimeout(scrollTimer)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '90px 24px 80px',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '840px', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div ref={badgeRef} style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <SectionLabel>An AI Powered Creative Revolution</SectionLabel>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 7vw, 88px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          <div ref={line1Ref} style={{ color: 'white' }}>
            We Don&apos;t Build Brands.
          </div>
          <div ref={line2Ref} style={{ color: 'white', marginTop: '4px' }}>
            We Engineer Hype.
          </div>
          <div
            ref={line3Ref}
            className="gradient-text"
            style={{ marginTop: '4px' }}
          >
            An AI Powered Creative Revolution.
          </div>
        </h1>

        {/* Subheading */}
        <p
          ref={paraRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '18px',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          HypeHouse is a full-service AI-powered creative agency built for brands that
          are serious about their identity. Strategy. Systems. Creative. One partner.
        </p>

        {/* CTAs */}
        <div
          ref={btnsRef}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Start a Project →</Button>
          <Button href="/services" variant="secondary">See Our Work</Button>
        </div>

        {/* Social proof */}
        <div
          ref={socialRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.05em',
          }}
        >
          Built for founders who are serious about their brand.
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ animation: 'chevron-bounce 1.5s ease-in-out infinite' }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
