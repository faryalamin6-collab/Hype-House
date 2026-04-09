'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import ImageReveal from '@/components/ui/ImageReveal'

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
      className="service-anchor"
      style={{
        position: 'relative',
        zIndex: 10,
        paddingBottom: '80px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* ── HEADER IMAGE — edge to edge with reveal animation ────────────── */}
      {imageSrc && (
        <div style={{ marginBottom: '48px' }}>
          <ImageReveal
            src={imageSrc}
            alt={label}
            priority={id === 'branding'}
          />
        </div>
      )}

      {/* Frosted backdrop — improves legibility over the canvas animation */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
      }}>
        <div style={{
          background: 'rgba(4,0,20,0.60)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 40px',
        }}>

        {/* ── CONTENT — label, title, description, inclusions, CTA ───────── */}
        <ScrollReveal delay={imageSrc ? 80 : 0}>
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

          {/* Inclusions — responsive 2-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px 32px',
            marginBottom: '40px',
          }}>
            {inclusions.map(({ item }) => {
              const [title, ...rest] = item.split(' — ')
              const body = rest.join(' — ')
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
