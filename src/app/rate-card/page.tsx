import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'Our Packages — What\'s Included | HypeHouse Digital',
  description:
    'Explore what\'s included in every HypeHouse package — from monthly retainers and branding to one-time services. Get in touch for a tailored quote.',
  alternates: { canonical: 'https://hypehouse.digital/rate-card' },
}

const retainers = [
  {
    name: 'Starter',
    tagline: 'This is where we take over your socials and complete community management.',
    highlight: false,
    features: [
      'Instagram, Facebook & TikTok',
      '2 stories daily (5 days/week)',
      '2 reels/week',
      '3 static posts/week',
      'Community management',
      'Basic iPhone content shoots',
      'Minimal marketing material design',
      'Quarterly analysis & review',
    ],
  },
  {
    name: 'Growth',
    tagline: 'Social media management and your beginning into the world of digital advertising.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Campaign — Engagement',
      'Campaign — Awareness & Views',
      'Campaign — Traffic & Lead Gen',
      'Ad spend billed separately',
    ],
  },
  {
    name: 'Full House',
    tagline: 'The complete 360 degree HypeHouse experience.',
    highlight: false,
    badge: 'Full Service',
    features: [
      'Everything in Growth',
      'Website management',
      'SEO — on-page & technical',
      'Monthly SEO reporting',
      'Ad spend billed separately',
    ],
  },
]

const brandingPackages = [
  {
    name: 'Basic',
    highlight: false,
    items: [
      'Logo design',
      'Brand colours',
      'Typography system',
    ],
  },
  {
    name: 'Full Stack',
    highlight: true,
    items: [
      'Naming & positioning',
      'Logo design',
      'Brand guidelines',
      'Collateral design',
      '12-post sample grid',
    ],
  },
]

// One-time services grouped by category
const oneTimeGroups = [
  {
    category: 'Copywriting',
    services: [
      { service: 'Website Copy' },
      { service: 'Brand Copy Pack (bio, tagline, about us + up to 5 services)' },
      { service: 'Campaign Copy' },
      { service: 'Full Copy Suite (website + brand + campaign)' },
      { service: 'Blog Post' },
      { service: 'Magazine Article (2-page spread)' },
    ],
  },
  {
    category: 'Design & Collateral',
    services: [
      { service: 'Pitch Deck 10–12 pages' },
      { service: 'Pitch Deck 15–18 pages' },
      { service: 'Pitch Deck 20+ pages' },
      { service: 'Company Profile' },
      { service: 'Social Media Template Set (10 templates)' },
      { service: 'OOH & Print Collateral' },
    ],
  },
  {
    category: 'Website Development',
    services: [
      { service: 'Brochure Website up to 10 pages' },
      { service: 'Corporate Website up to 15 pages' },
      { service: 'E-Commerce' },
      { service: 'Website Management (monthly)' },
      { service: 'Complex/Custom Build' },
    ],
  },
  {
    category: 'Automation — Tachyon',
    services: [
      { service: 'WhatsApp flows · CRM setup · Lead pipelines' },
      { service: 'Reporting dashboards · AI workflows' },
    ],
  },
]

const cardBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '20px',
  padding: '36px 32px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}

export default function RateCardPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-top" style={{ position: 'relative', zIndex: 10, paddingLeft: '24px', paddingRight: '24px', paddingBottom: '60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>Our Packages</SectionLabel>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 80px)', marginTop: '24px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Investment that{' '}
            <span className="gradient-text">pays for itself.</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 28px' }}>
            Every package is tailored to your market and goals. Get in touch and we&apos;ll build the right scope for you.
          </p>
        </div>
      </section>

      {/* ── MONTHLY RETAINERS ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Monthly Retainers</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', marginTop: '20px', letterSpacing: '-0.02em' }}>
                Pick the level that{' '}
                <span className="gradient-text">fits your ambition.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start' }}>
            {retainers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 80}>
                <HoverCard
                  style={{
                    ...cardBase,
                    background: tier.highlight
                      ? 'linear-gradient(135deg, rgba(166,20,178,0.14), rgba(12,18,141,0.10))'
                      : 'rgba(255,255,255,0.04)',
                    border: tier.highlight
                      ? '1px solid rgba(166,20,178,0.45)'
                      : '1px solid rgba(255,255,255,0.10)',
                    position: 'relative',
                  }}
                  hoverStyle={{ transform: 'translateY(-4px)', boxShadow: tier.highlight ? '0 24px 64px rgba(166,20,178,0.25)' : '0 20px 60px rgba(166,20,178,0.12)' }}
                  baseStyle={{ transform: 'translateY(0)', boxShadow: 'none' }}
                >
                  {tier.badge && (
                    <div style={{
                      position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                      background: tier.highlight ? 'linear-gradient(135deg, #A614B2, #0C128D)' : 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px',
                      padding: '4px 14px', fontFamily: 'var(--font-poppins)', fontWeight: 600,
                      fontSize: '11px', letterSpacing: '0.1em', color: 'white', whiteSpace: 'nowrap',
                    }}>
                      {tier.badge}
                    </div>
                  )}

                  <h3 style={{ fontWeight: 800, fontSize: '21px', color: '#ffffff', marginBottom: '8px' }}>
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {tier.tagline}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                    {tier.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.30)', display: 'inline-block', flexShrink: 0, marginTop: '7px' }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="https://hypehouse-client-intake-form.netlify.app" variant={tier.highlight ? 'primary' : 'secondary'} fullWidth external>
                    Get Started
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDING PACKAGES ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Branding Packages</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', marginTop: '20px', letterSpacing: '-0.02em' }}>
                Build your identity{' '}
                <span className="gradient-text">from the ground up.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {brandingPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 80}>
                <HoverCard
                  style={{
                    ...cardBase,
                    background: pkg.highlight
                      ? 'linear-gradient(135deg, rgba(166,20,178,0.14), rgba(12,18,141,0.10))'
                      : 'rgba(255,255,255,0.04)',
                    border: pkg.highlight
                      ? '1px solid rgba(166,20,178,0.45)'
                      : '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '19px', color: '#ffffff', marginBottom: '20px' }}>
                    {pkg.name}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                    {pkg.items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.30)', display: 'inline-block', flexShrink: 0, marginTop: '7px' }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="https://hypehouse-client-intake-form.netlify.app" variant={pkg.highlight ? 'primary' : 'secondary'} fullWidth external>
                    Enquire
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE-TIME SERVICES ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '64px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>One-Time Services</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', marginTop: '20px', letterSpacing: '-0.02em' }}>
                Need something{' '}
                <span className="gradient-text">specific?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {oneTimeGroups.map((group, gi) => (
              <ScrollReveal key={group.category} delay={gi * 60}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.10)', borderRadius: '16px', overflow: 'hidden',
                }}>
                  {/* Category header */}
                  <div style={{
                    padding: '16px 28px', background: 'rgba(166,20,178,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-poppins)', fontWeight: 700, fontSize: '13px',
                      letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#A614B2',
                    }}>
                      {group.category}
                    </span>
                  </div>

                  {group.services.map((row, i) => (
                    <div
                      key={row.service}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '14px 28px',
                        borderBottom: i < group.services.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.30)', display: 'inline-block', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{row.service}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA + CLAUSES ───────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.8, marginBottom: '40px' }}>
            Every project is scoped to your specific goals and market. Reach out and we&apos;ll put together the right plan for you.
          </p>
          <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
            Start a Project
          </Button>

          {/* Operational fine print */}
          <div style={{
            marginTop: '48px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '24px 28px',
            textAlign: 'left',
          }}>
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.85, marginBottom: '10px' }}>
              All one-time project pricing is scoped individually. Get in touch for a custom quote.
            </p>
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.85 }}>
              Any requirements beyond the defined scope will be assessed and priced separately. Retainers are billed monthly in advance. One-time projects require a 50% deposit to commence. Ad spend is billed directly to the client and is not included in agency fees.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
