import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'About HypeHouse Digital — AI Creative Agency Karachi',
  description:
    'Learn about HypeHouse Digital — the AI-powered creative agency from Karachi redefining how brands are built. Our story, philosophy, and the team behind the hype.',
  alternates: {
    canonical: 'https://hypehouse.digital/about',
  },
}

const philosophyItems = [
  {
    title: 'Built Different',
    desc: 'We launched HypeHouse because we saw a gap: agencies that talk strategy but deliver execution. We refused to be that agency.',
  },
  {
    title: 'AI at the Core',
    desc: 'We don\'t use AI as a gimmick. It\'s woven into every workflow — from research and strategy to production and reporting.',
  },
  {
    title: 'Karachi Built',
    desc: 'Born in Pakistan\'s most dynamic city, we understand the energy, the ambition, and the appetite for something world-class.',
  },
  {
    title: 'Global Standard',
    desc: 'Our work holds up against any agency in London, Dubai, or New York. Geography doesn\'t limit quality. Neither do we.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '160px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>About Us</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 80px)',
              color: 'white',
              marginTop: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            We are{' '}
            <span className="gradient-text">HypeHouse.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            A full-service AI-powered creative agency built for brands that refuse
            to be ordinary. We don&apos;t just run campaigns — we build systems that
            compound, brands that endure, and reputations that precede you.
          </p>
        </div>
      </section>

      {/* Brand story — two column */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '80px 24px',
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
          }}
        >
          <ScrollReveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 800,
                fontSize: 'clamp(24px, 3.5vw, 44px)',
                color: 'white',
                marginTop: '20px',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Born from frustration.
              <br />
              <span className="gradient-text">Built with purpose.</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              HypeHouse was born from a simple belief: Pakistani brands deserve world-class
              creative strategy — not cookie-cutter packages and vague promises. We saw
              founders across Karachi burning budgets on agencies that delivered activity
              without results.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              So we built the agency we always wanted to work with. One obsessed with
              outcomes, powered by AI, and committed to making every client feel like
              our only client.
            </p>
            <Button href="/contact" variant="primary">Work With Us →</Button>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {[
                { n: '6+', label: 'Service Pillars' },
                { n: '∞', label: 'Ambition' },
                { n: 'AI', label: 'Powered Workflows' },
                { n: '24/7', label: 'Systems Running' },
              ].map(item => (
                <HoverCard
                  key={item.label}
                  style={{ padding: '24px', textAlign: 'center', borderRadius: '12px' }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 800,
                      fontSize: '36px',
                      marginBottom: '8px',
                    }}
                  >
                    {item.n}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {item.label}
                  </div>
                </HoverCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy 2×2 grid */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Our Principles</SectionLabel>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 4vw, 48px)',
                  color: 'white',
                  marginTop: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                What drives{' '}
                <span className="gradient-text">everything we do.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {philosophyItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <HoverCard style={{ padding: '32px', height: '100%' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(159,1,246,0.15)',
                      border: '1px solid rgba(159,1,246,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontSize: '16px',
                      color: '#C084FC',
                    }}
                  >
                    ✦
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'white',
                      marginBottom: '12px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tachyon mention panel */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '40px 24px 100px',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              background: 'rgba(159,1,246,0.06)',
              border: '1px solid rgba(159,1,246,0.2)',
              borderRadius: '20px',
              padding: '48px',
            }}
          >
            <SectionLabel>Tachyon AI</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 800,
                fontSize: 'clamp(22px, 3.5vw, 40px)',
                color: 'white',
                marginTop: '20px',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Our proprietary{' '}
              <span className="gradient-text">AI backbone.</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Every HypeHouse retainer comes with access to Tachyon — our suite of
              AI workflows that automate the repetitive, accelerate the creative, and
              keep your brand operating at machine speed.
            </p>
            <Button href="/tachyon" variant="primary">Discover Tachyon →</Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
