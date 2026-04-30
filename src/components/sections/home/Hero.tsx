'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

const PHRASES = ['Strategy first.', 'Built with intent.', 'Built to outperform.']

export default function Hero() {
  const badgeRef    = useRef<HTMLDivElement>(null)
  const typeLineRef = useRef<HTMLDivElement>(null)
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const btnsRef     = useRef<HTMLDivElement>(null)

  const [ready,     setReady]     = useState(false)
  const [typed,     setTyped]     = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting,  setDeleting]  = useState(false)
  const [cursor,    setCursor]    = useState(true)

  // Entrance animation
  useEffect(() => {
    const els = [
      { el: badgeRef.current,    delay: 0 },
      { el: typeLineRef.current, delay: 160 },
      { el: paraRef.current,     delay: 320 },
      { el: btnsRef.current,     delay: 480 },
    ]
    els.forEach(({ el, delay }) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    })
    const t = setTimeout(() => setReady(true), 950)
    return () => clearTimeout(t)
  }, [])

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursor(v => !v), 500)
    return () => clearInterval(t)
  }, [])

  // Typewriter loop
  useEffect(() => {
    if (!ready) return
    const phrase = PHRASES[phraseIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && typed.length < phrase.length) {
      t = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 80)
    } else if (!deleting && typed.length === phrase.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && typed.length > 0) {
      t = setTimeout(() => setTyped(phrase.slice(0, typed.length - 1)), 45)
    } else {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % PHRASES.length)
    }
    return () => clearTimeout(t)
  }, [ready, typed, phraseIdx, deleting])

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
            fontSize: 'clamp(28px, 6vw, 76px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}
        >
          <div style={{ color: 'white' }}>
            We Don&apos;t Build Brands.
          </div>
          <div style={{ marginTop: '4px' }}>
            <span className="gradient-text">We Engineer Hype.</span>
          </div>
        </h1>

        {/* Typewriter line */}
        <div
          ref={typeLineRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: 'clamp(15px, 1.6vw, 22px)',
            letterSpacing: '0.03em',
            marginBottom: '28px',
            minHeight: '1.6em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #9F01F6 0%, #021FC3 35%, #00F0FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {typed}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: 'linear-gradient(180deg, #9F01F6, #00F0FF)',
              opacity: cursor ? 1 : 0,
              transition: 'opacity 0.1s',
              verticalAlign: 'middle',
              borderRadius: '1px',
            }}
          />
        </div>

        {/* Subheading */}
        <p
          ref={paraRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '16px',
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
          <Button
            href="https://hypehouse-client-intake-form.netlify.app"
            variant="primary"
            external
            style={{
              flex: 1,
              height: '52px',
              minHeight: 'unset',
              padding: '0 16px',
              fontSize: 'clamp(12px, 3.2vw, 15px)',
              whiteSpace: 'nowrap',
            }}
          >
            Start a Project
          </Button>
          <Button
            href="/services"
            variant="primary"
            style={{
              flex: 1,
              height: '52px',
              minHeight: 'unset',
              padding: '0 16px',
              fontSize: 'clamp(12px, 3.2vw, 15px)',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Our Services
          </Button>
        </div>

      </div>
    </section>
  )
}
