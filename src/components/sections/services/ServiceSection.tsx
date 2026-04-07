'use client'

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
  reverse?: boolean   // kept for API compatibility, not used in new layout
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
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 48px 80px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── HEADER IMAGE — full width, natural aspect ratio, always visible ── */}
        {imageSrc && (
          <div
            style={{
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(4,157,255,0.15)',
              marginBottom: '56px',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <Image
              src={imageSrc}
              alt={label}
              width={1280}
              height={512}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority={id === 'branding'}
            />
          </div>
        )}

        {/* ── CONTENT — label, title, description, inclusions, CTA ───────── */}
        <ScrollReveal delay={imageSrc ? 80 : 0}>
          {/* Label row */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            {svgPath && (
              <div style={{
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

          {/* Inclusions — responsive 2-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px 32px',
            marginBottom: '40px',
          }}>
            {inclusions.map(({ item }) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#049DFF', fontSize: '12px', marginTop: '4px', flexShrink: 0 }}>✦</span>
                <span style={{
                  fontFamily: 'var(--font-poppins)', fontSize: '14px',
                  color: 'rgba(255,255,255,0.72)', lineHeight: 1.55,
                }}>
                  {item}
                </span>
              </div>
            ))}
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
    </section>
  )
}
