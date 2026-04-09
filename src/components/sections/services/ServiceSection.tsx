'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

interface Inclusion {
  item: string
}

interface ServiceSectionProps {
  id: string
  icon?: string
  svgPath?: string
  label: string
  title: string
  description: string
  inclusions: Inclusion[]
  pricing?: string
  reverse?: boolean
  imageSrc?: string
}

export default function ServiceSection({
  id,
  svgPath,
  label,
  title,
  description,
  inclusions,
  pricing,
  imageSrc,
}: ServiceSectionProps) {
  // isTarget: this section was in the viewport on mount (i.e. the hash anchor target)
  const [isTarget, setIsTarget] = useState(false)
  // revealed: image has loaded — safe to show both image + text simultaneously
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight * 1.1

    if (!inViewport) {
      // Below the fold — not the hash target. Let ScrollReveal handle text
      // animation normally; image is always visible (no opacity hide).
      return
    }

    // This section is the hash navigation target — coordinate image + text reveal.
    setIsTarget(true)

    if (!imageSrc) {
      setRevealed(true)
      return
    }

    // Use a probe Image to detect when the browser has the bitmap ready.
    // Same URL → reuses any in-flight or cached request, no extra download.
    const probe = new window.Image() as HTMLImageElement
    const done = () => setRevealed(true)
    probe.onload = done
    probe.onerror = done
    probe.src = imageSrc
    // If already cached, onload won't fire — check complete synchronously.
    if (probe.complete) { setRevealed(true); return }

    // Safety: reveal after 1.5 s regardless (slow connections / edge cases)
    const fallback = setTimeout(done, 1500)
    return () => { clearTimeout(fallback) }
  }, [id, imageSrc])

  // When this section IS the hash target, apply a single coordinated CSS fade
  // to both the image container and the text container. ScrollReveal is skipped
  // so text doesn't animate in separately before the image is ready.
  const syncFade: React.CSSProperties = isTarget
    ? { opacity: revealed ? 1 : 0, transition: 'opacity 0.4s ease' }
    : {}

  return (
    <section
      ref={sectionRef}
      id={id}
      className="service-anchor"
      style={{
        position: 'relative',
        zIndex: 10,
        paddingBottom: '80px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* ── HEADER IMAGE ─────────────────────────────────────────────────── */}
      {imageSrc && (
        <div style={{ marginBottom: '48px', overflow: 'hidden', ...syncFade }}>
          <Image
            src={imageSrc}
            alt={label}
            width={1400}
            height={560}
            priority={id === 'branding'}
            loading={id === 'branding' ? undefined : 'eager'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}

      {/* ── TEXT CARD ────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          ...syncFade,
          background: 'rgba(4,0,20,0.60)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 40px',
        }}>
          {/* skip=isTarget: when already in viewport, bypass ScrollReveal's
              opacity:0 initial state — the parent syncFade handles visibility */}
          <ScrollReveal delay={imageSrc && !isTarget ? 80 : 0} skip={isTarget}>
            {/* Label row */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              {svgPath && (
                <div className="service-icon-tile" style={{
                  width: '48px', height: '48px',
                  background: 'rgba(4,157,255,0.12)',
                  border: '1px solid rgba(4,157,255,0.2)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="#049DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={svgPath} />
                  </svg>
                </div>
              )}
              <span style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 500,
                fontSize: '11px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(192,132,252,0.7)',
              }}>
                ✦ {label}
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 48px)', color: 'white',
              letterSpacing: '-0.02em', lineHeight: 1.12,
              marginBottom: '20px', maxWidth: '860px',
            }}>
              {title}
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-poppins)', fontSize: '17px',
              color: 'rgba(255,255,255,0.75)', lineHeight: 1.8,
              maxWidth: '760px', marginBottom: '40px',
            }}>
              {description}
            </p>

            {/* Inclusions */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px 32px',
              marginBottom: '40px',
            }}>
              {inclusions.map(({ item }) => {
                const [title] = item.split(' — ')
                return (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.30)', display: 'inline-block', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{
                      fontFamily: 'var(--font-poppins)', fontSize: '14px',
                      color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, fontWeight: 500,
                    }}>
                      {title}
                    </span>
                  </div>
                )
              })}
            </div>

            {pricing && (
              <div style={{
                display: 'inline-block', padding: '8px 16px', marginBottom: '32px',
                background: 'rgba(166,20,178,0.1)',
                border: '1px solid rgba(166,20,178,0.25)',
                borderRadius: '8px',
                fontFamily: 'var(--font-poppins)', fontWeight: 600,
                fontSize: '14px', color: '#C084FC',
              }}>
                {pricing}
              </div>
            )}

            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
              Get Started →
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
