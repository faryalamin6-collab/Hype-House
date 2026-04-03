import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ContactForm from '@/components/sections/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact HypeHouse Digital — Start Your Project in Karachi',
  description:
    'Ready to build something unforgettable? Contact HypeHouse Digital — AI-powered creative agency in Karachi. Start your project, request a quote, or ask about our services.',
  alternates: {
    canonical: 'https://hypehouse.digital/contact',
  },
}

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@hypehouse.digital',
    href: 'mailto:hello@hypehouse.digital',
  },
  {
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
  },
  {
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '160px 24px 60px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <SectionLabel>Let&apos;s Talk</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 80px)',
              color: 'white',
              marginTop: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Start something{' '}
            <span className="gradient-text">unforgettable.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
            }}
          >
            Tell us about your brand and what you&apos;re trying to achieve. We&apos;ll
            be back within 24 hours with a strategy to match.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '40px 24px 120px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <ScrollReveal>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 3vw, 36px)',
                  color: 'white',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                }}
              >
                We&apos;d love to hear{' '}
                <span className="gradient-text">from you.</span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.75,
                  marginBottom: '36px',
                }}
              >
                Whether you have a fully formed brief or a rough idea, we&apos;re here to
                listen. Our process starts with a conversation — no pitches, no pressure,
                just genuine strategic thinking.
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {contactDetails.map(detail => (
                  <div
                    key={detail.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 600,
                        fontSize: '12px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '16px',
                          color: '#C084FC',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '16px',
                          color: 'rgba(255,255,255,0.72)',
                        }}
                      >
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social proof pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Karachi', 'Dubai', 'London'].map(city => (
                  <span
                    key={city}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      borderRadius: '100px',
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    Serving {city}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={150}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '20px',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'white',
                  marginBottom: '8px',
                }}
              >
                Send us a message
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '28px',
                  lineHeight: 1.6,
                }}
              >
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
