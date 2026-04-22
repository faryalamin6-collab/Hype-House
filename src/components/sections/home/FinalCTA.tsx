import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function FinalCTA() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '64px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(166,20,178,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <ScrollReveal>
          <div
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(192,132,252,0.7)',
              marginBottom: '24px',
            }}
          >
            ✦ &nbsp; Taking Your Brand To The Next Level
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(24px, 4.5vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'white',
              marginBottom: '24px',
            }}
          >
            Ready to build something{' '}
            <span className="gradient-text">unforgettable?</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            If your brand deserves thinking that shifts culture, creative that breaks the mould,
            and a partner that plays at a different level, this is where we start.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Start a Project →</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
