import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'Tachyon AI — Business Automation Systems | HypeHouse Digital',
  description:
    'Tachyon is HypeHouse Digital\'s AI automation system — intelligent workflows that eliminate repetitive tasks, accelerate content production, and keep your brand running 24/7.',
  alternates: {
    canonical: 'https://hypehouse.digital/tachyon',
  },
}

const automations = [
  {
    icon: '⚡',
    title: 'Lead Qualification Engine',
    description:
      'Automatically qualify, score, and route inbound leads based on custom criteria. Your sales team only talks to prospects who are ready to buy.',
  },
  {
    icon: '◈',
    title: 'Content Production Pipeline',
    description:
      'AI-powered workflows that transform your brand guidelines into a continuous stream of on-brand content — drafted, reviewed, and scheduled at machine speed.',
  },
  {
    icon: '◉',
    title: 'Competitor Intelligence Monitor',
    description:
      'Real-time monitoring of competitor activity across social media, ads, pricing, and content — delivered as digestible weekly intelligence reports.',
  },
  {
    icon: '⬡',
    title: 'Automated Reporting Suite',
    description:
      'Every metric that matters, automatically compiled and presented in branded reports — sent to your team on your schedule, zero manual work required.',
  },
  {
    icon: '◆',
    title: 'Customer Re-engagement System',
    description:
      'AI-driven email and SMS sequences that identify lapsed customers and automatically re-engage them with personalised, timely outreach.',
  },
  {
    icon: '⬤',
    title: 'Social Listening & Response',
    description:
      'Automated monitoring of brand mentions, sentiment tracking, and AI-drafted responses — keeping your brand present and responsive around the clock.',
  },
]

const beforeAfter = [
  {
    area: 'Content Production',
    before: '3–5 days per campaign',
    after: '4–6 hours with Tachyon',
  },
  {
    area: 'Lead Response Time',
    before: '24–48 hours average',
    after: 'Under 5 minutes automated',
  },
  {
    area: 'Monthly Reporting',
    before: '8–12 hours manual work',
    after: 'Fully automated, zero hours',
  },
  {
    area: 'Competitor Monitoring',
    before: 'Ad-hoc, inconsistent',
    after: 'Daily automated intelligence',
  },
]

export default function TachyonPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '160px 24px 100px',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className="plasma-bg"
          style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(166,20,178,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <SectionLabel>Tachyon AI System</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(38px, 7vw, 96px)',
              color: 'white',
              marginTop: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Business Systems{' '}
            <span className="gradient-text">That Think For You.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '20px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto 48px',
            }}
          >
            Tachyon is HypeHouse&apos;s proprietary AI automation layer — a suite of
            intelligent workflows that eliminate repetitive tasks, accelerate creative
            production, and keep your brand running 24/7 without extra headcount.
          </p>
          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Get Tachyon For Your Business →</Button>
        </div>
      </section>

      {/* Tachyon visual */}
      <section style={{ position: 'relative', zIndex: 10, padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(4,157,255,0.18)' }}>
              <Image src="/images/additional-2.png" alt="Tachyon AI System" fill style={{ objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Six automation cards */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel>What Tachyon Does</SectionLabel>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 800,
                  fontSize: 'clamp(24px, 4vw, 52px)',
                  color: 'white',
                  marginTop: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                Six systems.{' '}
                <span className="gradient-text">Infinite leverage.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {automations.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <HoverCard style={{ padding: '32px', height: '100%' }}>
                  <div style={{ fontSize: '28px', color: '#A614B2', marginBottom: '16px' }}>
                    {item.icon}
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
                    {item.description}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>The Tachyon Difference</SectionLabel>
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
                Before Tachyon{' '}
                <span className="gradient-text">vs After.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '16px',
                padding: '0 16px',
              }}
            >
              {['Area', 'Before', 'After Tachyon'].map((h, i) => (
                <div
                  key={h}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    color: i === 2 ? '#C084FC' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {beforeAfter.map((row, i) => (
              <ScrollReveal key={row.area} delay={i * 60}>
                <HoverCard
                  style={{
                    display: 'grid' as const,
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '16px',
                    padding: '20px 16px',
                    borderRadius: '12px',
                  }}
                  hoverStyle={{ borderColor: 'rgba(166,20,178,0.25)' }}
                  baseStyle={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '15px', color: 'white' }}>{row.area}</span>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through' }}>{row.before}</span>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '14px', color: '#34D399' }}>{row.after}</span>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote CTA */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px 120px', textAlign: 'center' }}>
        <ScrollReveal>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              background: 'rgba(166,20,178,0.06)',
              border: '1px solid rgba(166,20,178,0.2)',
              borderRadius: '20px',
              padding: '56px 48px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-50%',
                background: 'conic-gradient(from 0deg, transparent, rgba(166,20,178,0.06), transparent)',
                animation: 'plasma-rotate 20s linear infinite',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative' }}>
              <SectionLabel>Get a Custom Quote</SectionLabel>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 3.5vw, 44px)',
                  color: 'white',
                  marginTop: '20px',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to operate at{' '}
                <span className="gradient-text">machine speed?</span>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                  maxWidth: '480px',
                  margin: '0 auto 36px',
                }}
              >
                Every Tachyon implementation is bespoke. Tell us about your business and
                we&apos;ll design a custom automation stack built around your specific bottlenecks.
              </p>
              <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Get Your Custom Quote →</Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
