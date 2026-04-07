import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact HypeHouse Digital — Start Your Project',
  description:
    'Ready to build something unforgettable? Contact HypeHouse Digital — AI-powered creative agency. Start your project, request a quote, or ask about our services.',
  alternates: { canonical: 'https://hypehouse.digital/contact' },
}

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <section className="page-top" style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '120px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#049DFF',
            marginBottom: '20px',
          }}>✦ LET&apos;S BUILD</span>

          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Let&apos;s build something unforgettable.
          </h1>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            The intake form takes 6 minutes. It helps us come to you prepared — not with a pitch, but with a plan.
          </p>
        </div>

        {/* CONTACT DETAILS ROW */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          marginBottom: '48px',
        }}>
          <div style={{
            padding: '16px 24px',
            background: 'rgba(34,0,65,0.4)',
            border: '1px solid rgba(4,157,255,0.15)',
            borderRadius: '10px',
            color: 'rgba(255,255,255,0.72)',
            fontSize: '15px',
          }}>
            📍 Headquartered in Karachi · Operating globally
          </div>

          <a
            href="https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 28px',
              background: 'linear-gradient(135deg, #128C7E, #25D366)',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            💬 Chat on WhatsApp →
          </a>
        </div>

        {/* DIVIDER */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          marginBottom: '56px',
        }} />

        {/* INTAKE FORM HEADING */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '12px',
          }}>
            Start with the intake form
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.55)',
          }}>
            Or open it directly at{' '}
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#049DFF', textDecoration: 'none' }}
            >
              hypehouse-client-intake-form.netlify.app →
            </a>
          </p>
        </div>

        {/* EMBEDDED FORM — FULL WIDTH, SINGLE COLUMN */}
        <div style={{
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(4,157,255,0.2)',
          background: 'rgba(34,0,65,0.2)',
        }}>
          <iframe
            src="https://hypehouse-client-intake-form.netlify.app/"
            style={{
              width: '100%',
              height: '1000px',
              border: 'none',
              display: 'block',
            }}
            title="HypeHouse Client Intake Form"
          />
        </div>

      </section>
    </main>
  )
}
