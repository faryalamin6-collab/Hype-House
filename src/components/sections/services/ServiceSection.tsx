'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

interface Inclusion {
  item: string
}

interface ServiceSectionProps {
  id: string
  icon: string
  label: string
  title: string
  description: string
  inclusions: Inclusion[]
  pricing?: string
  reverse?: boolean
}

export default function ServiceSection({
  id,
  icon,
  label,
  title,
  description,
  inclusions,
  pricing,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '80px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
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
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <span style={{ fontSize: '24px', color: '#9f01f6' }}>{icon}</span>
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
              marginBottom: '32px',
            }}
          >
            {description}
          </p>

          {pricing && (
            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(159,1,246,0.1)',
                border: '1px solid rgba(159,1,246,0.25)',
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

          <Button href="/contact" variant="primary">Get Started →</Button>
        </ScrollReveal>

        {/* Inclusions */}
        <ScrollReveal delay={150} style={{ direction: 'ltr' }}>
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
                      color: '#9f01f6',
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
        </ScrollReveal>
      </div>
    </section>
  )
}
