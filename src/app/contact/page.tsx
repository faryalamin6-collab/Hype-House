import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact HypeHouse Digital — Start Your Project',
  description:
    'Ready to build something unforgettable? Contact HypeHouse Digital — AI-powered creative agency. Start your project, request a quote, or ask about our services.',
  alternates: { canonical: 'https://hypehouse.digital/contact' },
}

const contactDetails = [
  { label: 'Location', value: 'Headquartered in Karachi · Operating globally', href: null },
  { label: 'Enquiries', value: 'Use the intake form →', href: 'https://hypehouse-client-intake-form.netlify.app' },
  { label: 'Response Time', value: 'Within 24 hours', href: null },
]

const WA_HREF = 'https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20discuss%20a%20project'

export default function ContactPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <SectionLabel>Let&apos;s Talk</SectionLabel>
          <h1 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(32px, 6vw, 72px)', marginTop: '24px',
            letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '20px',
          }}>
            Start something{' '}
            <span className="gradient-text">unforgettable.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
            Tell us about your brand and what you&apos;re trying to achieve. We&apos;ll be back within 24 hours with a strategy to match.
          </p>
        </div>
      </section>

      {/* Two-column layout — flex so mobile stacks correctly */}
      <section style={{ position: 'relative', zIndex: 10 }}>
        <div
          className="contact-layout"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 48px 120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          {/* Left column */}
          <ScrollReveal>
            <div className="contact-left" style={{ flexShrink: 0 }}>
              <h2 style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '-0.02em',
                marginBottom: '20px', lineHeight: 1.2,
              }}>
                We&apos;d love to hear{' '}
                <span className="gradient-text">from you.</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '32px' }}>
                Whether you have a fully formed brief or a rough idea, we&apos;re here to listen. Our process starts with a conversation — no pitches, no pressure.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {contactDetails.map(detail => (
                  <div key={detail.label}>
                    <span style={{
                      fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '11px',
                      letterSpacing: '0.18em', textTransform: 'uppercase' as const,
                      color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '4px',
                    }}>
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a href={detail.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', color: '#049DFF', textDecoration: 'none' }}>
                        {detail.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '16px', color: 'rgba(255,255,255,0.80)' }}>
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '13px 20px', borderRadius: '10px', marginBottom: '32px',
                  background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.35)',
                  fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '15px',
                  color: '#25D366', textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {['Middle East', 'South Asia', 'Europe'].map(region => (
                  <span key={region} style={{
                    padding: '6px 14px', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)', borderRadius: '100px',
                    fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.60)',
                  }}>
                    {region}
                  </span>
                ))}
              </div>

              <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.6 }}>
                Prefer to open in a new tab?{' '}
                <a href="https://hypehouse-client-intake-form.netlify.app" target="_blank" rel="noopener noreferrer"
                  style={{ color: '#049DFF', textDecoration: 'underline' }}>
                  Open intake form →
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Right column — iframe */}
          <ScrollReveal delay={150}>
            <div
              className="contact-right"
              style={{ minWidth: 0, flex: 1 }}
            >
              <div style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(4,157,255,0.25)',
              }}>
                <iframe
                  src="https://hypehouse-client-intake-form.netlify.app/"
                  style={{
                    width: '100%',
                    height: '950px',
                    border: 'none',
                    display: 'block',
                    maxWidth: '100%',
                  }}
                  title="HypeHouse Client Intake Form"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
