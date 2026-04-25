import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'
import TachyonHero from '@/components/sections/tachyon/TachyonHero'

export const metadata: Metadata = {
  title: 'Tachyon AI — Business Automation Systems | HypeHouse Digital',
  description:
    'Tachyon is HypeHouse Digital\'s AI automation division. We design, build, and operate the business systems that remove friction, eliminate manual work, and create compounding growth.',
  alternates: { canonical: 'https://hypehouse.digital/tachyon' },
}

// ── CAPABILITY CARDS DATA ──────────────────────────────────────────────────
const capabilities = [
  {
    svgPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Instant Response Engines',
    description: 'From the moment someone fills a form or clicks your ad, they get a personalised email that feels human — but happens automatically, using your domain, your tone, and your brand.',
  },
  {
    svgPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    title: 'Booking Intelligence',
    description: 'We connect your calendars to your inbound journey, so interested leads can schedule calls without back-and-forth. Confirmations go out instantly, reminders are sent, and meetings appear in your CRM.',
  },
  {
    svgPath: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
    title: 'Smart CRM Syncing',
    description: 'No lead ever gets lost. Your CRM updates in real-time, tagged, tracked, and categorised — even if your team never touches it.',
  },
  {
    svgPath: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    title: 'Hyper-Personal Email Outreach',
    description: 'You give us a list. We turn it into hundreds of custom-crafted, AI-personalised emails — delivered from your brand, written for each prospect, and tracked for replies.',
  },
  {
    svgPath: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244',
    title: 'Campaign-Integrated Intelligence',
    description: 'Already running Meta, Google, or email campaigns? We plug in seamlessly — making sure every response flows through Tachyon\'s system before your team ever sees it.',
  },
]

const deliveryItems = [
  'Instant Response Engines',
  'Booking Intelligence',
  'Smart CRM Syncing',
  'Hyper-Personal Email Outreach',
  'Campaign-Integrated Intelligence',
  'End-to-end buildout of all flows',
  'Complete white-glove deployment',
  'No technical input needed from your team',
]

const industryTags = [
  'Clinics & Healthcare',
  'Design & Creative Firms',
  'E-Commerce Brands',
  'Logistics & Operations',
  'Agencies & Consultants',
  'Real Estate',
]

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function TachyonPage() {
  return (
    <>
      {/* ── SECTION 1: HERO — full viewport width ────────────────────────── */}
      <TachyonHero />

      {/* ── SECTION 2: THE PROBLEM ────────────────────────────────────────── */}
      <section
        id="problem"
        style={{
          position: 'relative', zIndex: 10,
          padding: '72px 24px',
          background: 'rgba(30,79,140,0.12)',
          borderTop: '1px solid rgba(58,141,255,0.15)',
          borderBottom: '1px solid rgba(58,141,255,0.15)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel className="tachyon-label">The Modern Growth Dilemma</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 44px)', color: 'white',
              marginTop: '20px', marginBottom: '28px', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              Your campaigns aren&apos;t the problem. Your internal systems are.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '20px' }}>
              You&apos;re running ads. Leads are coming in. But conversions? Scattered. Delayed. Lost.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '36px' }}>
              Most small and medium businesses pour money into marketing without building the
              infrastructure needed to catch, respond to, and convert the interest they generate.
            </p>

            {/* Bullet list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {[
                'Leads fall through the cracks.',
                'No follow-up. No call booked. No sale.',
                'Your team blames the ad budget — but the real leak is what happens after the click.',
              ].map((line) => (
                <div key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ color: '#3A8DFF', fontSize: '15px', flexShrink: 0, marginTop: '2px' }}>→</span>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Bold accent line */}
            <p style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 700,
              fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#3A8DFF', lineHeight: 1.4,
            }}>
              The real leak is what happens after the click.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 3: WHAT TACHYON IS ───────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '72px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <SectionLabel className="tachyon-label">Tachyon Is Your Backend Brain</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 44px)', color: 'white',
              marginTop: '20px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              It&apos;s not automation. It&apos;s business infrastructure with intelligence.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
              We build and embed responsive digital systems that sit quietly in the background —
              watching, responding, organising, and pushing leads forward before your team even
              lifts a finger.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 4: FIVE CAPABILITY CARDS ────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10, padding: '72px 24px',
        background: 'rgba(30,79,140,0.10)',
        borderTop: '1px solid rgba(0,240,255,0.08)',
        borderBottom: '1px solid rgba(0,240,255,0.08)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel className="tachyon-label">What We Build</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(24px, 3.5vw, 44px)', color: 'white',
                marginTop: '20px', letterSpacing: '-0.02em', lineHeight: 1.15,
              }}>
                Five systems.{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #B040FF 0%, #5B8FFF 50%, #00F0FF 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  One brain. Zero manual effort.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          {/* First 4 cards — fixed 2-column grid (responsive via .tachyon-cards-grid) */}
          <div className="tachyon-cards-grid">
            {capabilities.slice(0, 4).map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <HoverCard
                  style={{ padding: '40px 32px', height: '100%', background: 'rgba(30,79,140,0.18)', animation: 'card-idle-glow-blue 4s ease-in-out infinite' }}
                  hoverStyle={{
                    borderColor: 'rgba(0,240,255,0.45)',
                    transform: 'translateY(-4px)',
                    background: 'rgba(30,79,140,0.38)',
                    boxShadow: '0 0 24px rgba(0,240,255,0.18)',
                  }}
                  baseStyle={{
                    borderColor: 'rgba(0,240,255,0.12)',
                    transform: 'translateY(0)',
                    background: 'rgba(10,15,60,0.6)',
                    boxShadow: 'none',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px',
                    background: 'rgba(30,79,140,0.4)', border: '1px solid rgba(58,141,255,0.4)',
                    borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px', flexShrink: 0,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="#3A8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.svgPath} />
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-poppins)', fontWeight: 700,
                    fontSize: '18px', color: 'white', marginBottom: '12px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>

          {/* 5th card — centred on its own row */}
          <div style={{ maxWidth: '420px', margin: '0 auto' }}>
            <ScrollReveal delay={320}>
              <HoverCard
                style={{ padding: '40px 32px', background: 'rgba(30,79,140,0.18)', animation: 'card-idle-glow-blue 4s ease-in-out infinite' }}
                hoverStyle={{
                  borderColor: 'rgba(191,215,255,0.55)',
                  transform: 'translateY(-4px)',
                  background: 'rgba(30,79,140,0.32)',
                  boxShadow: '0 0 28px rgba(58,141,255,0.3)',
                }}
                baseStyle={{
                  borderColor: 'rgba(191,215,255,0.18)',
                  transform: 'translateY(0)',
                  background: 'rgba(30,79,140,0.18)',
                  boxShadow: 'none',
                }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  background: 'rgba(30,79,140,0.4)', border: '1px solid rgba(58,141,255,0.4)',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px', flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={capabilities[4].svgPath} />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 700,
                  fontSize: '18px', color: 'white', marginBottom: '12px',
                }}>
                  {capabilities[4].title}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                  {capabilities[4].description}
                </p>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHO IT'S BUILT FOR ────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '72px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <SectionLabel className="tachyon-label">Built For Companies Who Move Fast</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 3.5vw, 44px)', color: 'white',
              marginTop: '20px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              If your business depends on leads, Tachyon turns those moments into momentum.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '16px' }}>
              Tachyon works with SMEs across industries — whether you&apos;re a clinic, design firm,
              logistics company, or e-commerce brand.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '40px' }}>
              This isn&apos;t software your team has to learn. This isn&apos;t a tool your assistant has to babysit.
            </p>

            {/* Gradient accent statement */}
            <p style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1,
              marginBottom: '48px',
              background: 'linear-gradient(135deg, #B040FF 0%, #5B8FFF 50%, #00F0FF 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              We build it. We run it. You grow.
            </p>

            {/* Industry pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {industryTags.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(30,79,140,0.28)',
                  border: '1px solid rgba(191,215,255,0.25)',
                  borderRadius: '20px', padding: '8px 18px',
                  fontFamily: 'var(--font-poppins)', fontSize: '14px',
                  color: 'rgba(255,255,255,0.75)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6: DELIVERY DETAILS ──────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10, padding: '72px 24px',
        background: 'rgba(30,79,140,0.10)',
        borderTop: '1px solid rgba(0,240,255,0.08)',
        borderBottom: '1px solid rgba(0,240,255,0.08)',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{
              background: 'rgba(30,79,140,0.28)',
              border: '1px solid rgba(58,141,255,0.35)',
              borderRadius: '16px',
              padding: '56px 48px',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <SectionLabel className="tachyon-label">How It Works</SectionLabel>
                <h2 style={{
                  fontFamily: 'var(--font-poppins)', fontWeight: 800,
                  fontSize: 'clamp(18px, 3vw, 30px)', color: 'white',
                  marginTop: '20px', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.15,
                }}>
                  This isn&apos;t a tool. It&apos;s an upgrade to your business.
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
                  Tachyon isn&apos;t visible to your clients — but they feel it at every step. Faster replies.
                  Smarter follow-ups. Better meetings.
                </p>
              </div>

              {/* Three delivery specs */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '24px',
                justifyContent: 'center', marginBottom: '36px',
              }}>
                {[
                  { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', label: 'Fully Automated' },
                  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z', label: 'Fully Custom-Tailored' },
                  { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', label: 'No Technical Input Needed' },
                ].map(spec => (
                  <div key={spec.label} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                    minWidth: '140px',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="#3A8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={spec.icon} />
                    </svg>
                    <span style={{
                      fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '14px',
                      color: 'rgba(255,255,255,0.80)', textAlign: 'center',
                    }}>
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(191,215,255,0.15)', margin: '32px 0' }} />

              {/* What you get list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {deliveryItems.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ color: '#3A8DFF', fontSize: '14px', flexShrink: 0 }}>✓</span>
                    <span style={{
                      fontFamily: 'var(--font-poppins)', fontWeight: 500, fontSize: '15px',
                      color: 'rgba(255,255,255,0.80)',
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: CLOSING CTA ────────────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10,
        padding: '80px 24px',
        textAlign: 'center', overflow: 'hidden',
      }}>
        {/* Plasma background */}
        <div style={{
          position: 'absolute', inset: '-50%',
          background: 'conic-gradient(from 0deg, transparent, rgba(0,240,255,0.05), transparent)',
          animation: 'plasma-rotate 20s linear infinite',
          pointerEvents: 'none',
        }} />
        <ScrollReveal>
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 4.5vw, 48px)', color: 'white',
              letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px',
            }}>
              You don&apos;t need more people. You need better systems.
            </h2>
            <p style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.80)',
              lineHeight: 1.75, marginBottom: '28px',
            }}>
              Welcome to business at Tachyon speed.
            </p>
            <p style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#3A8DFF',
              letterSpacing: '-0.01em', marginBottom: '40px',
            }}>
              Ready to stop losing leads?
            </p>
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tachyon-cta-link"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: '15px',
                color: '#FFFFFF', textDecoration: 'none',
                padding: '18px 40px', borderRadius: '9999px',
                background: 'linear-gradient(135deg, #9F01F6 0%, #021FC3 35%, #00F0FF 100%)',
                border: 'none',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              Start Your Tachyon System →
            </a>
            <p style={{
              fontFamily: 'var(--font-poppins)', fontSize: '13px',
              color: 'rgba(255,255,255,0.40)', marginTop: '16px',
            }}>
              Custom quote · Fully scoped · Built for your business · No subscriptions
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
