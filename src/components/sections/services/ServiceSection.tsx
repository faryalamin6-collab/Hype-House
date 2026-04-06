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
  reverse = false,
  imageSrc,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '120px 48px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          direction: reverse ? 'rtl' : 'ltr',
        }}
      >
        {/* Content */}
        <ScrollReveal style={{ direction: 'ltr' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {svgPath && (
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(4,157,255,0.12)',
                  border: '1px solid rgba(4,157,255,0.2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#049DFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={svgPath} />
                </svg>
              </div>
            )}
            <span
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(192,132,252,0.7)',
              }}
            >
              ✦ {label}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: '24px',
            }}
          >
            {description}
          </p>

          {/* Inclusions as inline list when image is present */}
          {imageSrc && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {inclusions.map(({ item }) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#049DFF', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>✦</span>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}

          {pricing && (
            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(166,20,178,0.1)',
                border: '1px solid rgba(166,20,178,0.25)',
                borderRadius: '8px',
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#C084FC',
                marginBottom: '32px',
              }}
            >
              {pricing}
            </div>
          )}

          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Get Started →</Button>
        </ScrollReveal>

        {/* Image or Inclusions card */}
        <ScrollReveal delay={150} style={{ direction: 'ltr' }}>
          {imageSrc ? (
            <div
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '420px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(4,157,255,0.18)',
              }}
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          ) : (
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '20px',
                }}
              >
                What&apos;s Included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {inclusions.map(({ item }) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        color: '#A614B2',
                        fontSize: '14px',
                        marginTop: '2px',
                        flexShrink: 0,
                      }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontSize: '15px',
                        color: 'rgba(255,255,255,0.72)',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
