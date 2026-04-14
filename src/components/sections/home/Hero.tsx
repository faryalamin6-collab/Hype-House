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

    return () => {}
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
        padding: '90px 24px 40px',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '840px', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div ref={badgeRef} style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <SectionLabel>An AI-Powered Creative Agency</SectionLabel>
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
          <div ref={line2Ref} style={{ marginTop: '4px' }}>
            <span className="gradient-text">We Engineer Hype.</span>
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
          HypeHouse is a full service creative agency built for brands that want more than
          visibility. We bring strategy, content, design, performance, and AI backed systems
          together under one roof so your brand grows with clarity, consistency, and momentum.
        </p>

        {/* CTAs */}
        <div
          ref={btnsRef}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            maxWidth: '480px',
            margin: '0 auto 20px',
          }}
        >
          <div style={{ flex: 1 }}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external fullWidth>Start a Project</Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button href="/services" variant="primary" fullWidth>Explore Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
