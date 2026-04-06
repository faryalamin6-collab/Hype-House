import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'Rate Card — Pricing & Packages | HypeHouse Digital',
  description:
    'Transparent pricing from HypeHouse Digital: monthly retainer tiers, branding packages, and one-time service rates. Creative agency Karachi.',
  alternates: { canonical: 'https://hypehouse.digital/rate-card' },
}

const retainers = [
  {
    name: 'Starter',
    price: 'PKR 350,000',
    period: '/month',
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
    price: 'PKR 600,000',
    period: '/month',
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
    price: 'PKR 1,000,000',
    period: '/month',
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
    price: 'PKR 150,000',
    highlight: false,
    items: [
      'Logo design',
      'Brand colours',
      'Typography system',
    ],
  },
  {
    name: 'Full Stack',
    price: 'PKR 650,000',
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
      { service: 'Website Copy', price: 'PKR 150,000' },
      { service: 'Brand Copy Pack (bio, tagline, about us + up to 5 services)', price: 'PKR 75,000' },
      { service: 'Campaign Copy', price: 'PKR 50,000' },
      { service: 'Full Copy Suite (website + brand + campaign)', price: 'PKR 250,000' },
      { service: 'Blog Post', price: 'PKR 3,500/blog' },
      { service: 'Magazine Article (2-page spread)', price: 'PKR 15,000' },
    ],
  },
  {
    category: 'Design & Collateral',
    services: [
      { service: 'Pitch Deck 10–12 pages', price: 'PKR 35,000' },
      { service: 'Pitch Deck 15–18 pages', price: 'PKR 50,000' },
      { service: 'Pitch Deck 20+ pages', price: 'PKR 75,000' },
      { service: 'Company Profile', price: 'PKR 75,000' },
      { service: 'Social Media Template Set (10 templates)', price: 'PKR 35,000' },
      { service: 'OOH & Print Collateral', price: 'Custom quote' },
    ],
  },
  {
    category: 'Website Development',
    services: [
      { service: 'Brochure Website up to 10 pages', price: 'PKR 180,000' },
      { service: 'Corporate Website up to 15 pages', price: 'PKR 250,000' },
      { service: 'E-Commerce', price: 'PKR 500,000' },
      { service: 'Website Management', price: 'from PKR 80,000/month' },
      { service: 'Complex/Custom Build', price: 'Custom quote' },
    ],
  },
  {
    category: 'Automation — Tachyon',
    services: [
      { service: 'All Tachyon work', price: 'Custom quote' },
      { service: 'WhatsApp flows · CRM setup · Lead pipelines · Reporting dashboards · AI workflows', price: '' },
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
      <section style={{ position: 'relative', zIndex: 10, padding: '160px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 80px)', marginTop: '24px', marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Investment that{' '}
            <span className="gradient-text">pays for itself.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto' }}>
            Complete pricing transparency. No hidden fees, no vague proposals.
            Here&apos;s exactly what it costs to work with the best.
          </p>
        </div>
      </section>

      {/* ── MONTHLY RETAINERS ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Monthly Retainers</SectionLabel>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 48px)', marginTop: '20px', letterSpacing: '-0.02em' }}>
                Choose your{' '}
                <span className="gradient-text">growth velocity.</span>
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

                  <h3 style={{ fontWeight: 800, fontSize: '24px', color: '#ffffff', marginBottom: '4px' }}>
                    {tier.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '16px 0 28px' }}>
                    <span className="gradient-text" style={{ fontWeight: 800, fontSize: '28px' }}>
                      {tier.price}
                    </span>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>
                      {tier.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                    {tier.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#A614B2', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✦</span>
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="https://hypehouse-client-intake-form.netlify.app" variant={tier.highlight ? 'primary' : 'secondary'} fullWidth external>
                    Get Started →
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDING PACKAGES ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '120px 48px' }}>
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
                  <h3 style={{ fontWeight: 700, fontSize: '22px', color: '#ffffff', marginBottom: '4px' }}>
                    {pkg.name}
                  </h3>
                  <div className="gradient-text" style={{ fontWeight: 800, fontSize: '28px', marginBottom: '24px' }}>
                    {pkg.price}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '28px' }}>
                    {pkg.items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#A614B2', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✦</span>
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="https://hypehouse-client-intake-form.netlify.app" variant={pkg.highlight ? 'primary' : 'secondary'} fullWidth external>
                    Enquire →
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE-TIME SERVICES ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '120px 48px' }}>
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

                  {/* Column header */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px',
                    padding: '12px 28px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.40)' }}>Service</span>
                    <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.40)' }}>Rate</span>
                  </div>

                  {group.services.map((row, i) => (
                    <div
                      key={row.service}
                      style={{
                        display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px',
                        padding: '14px 28px',
                        borderBottom: i < group.services.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.5 }}>{row.service}</span>
                      {row.price && (
                        <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '14px', color: '#C084FC', whiteSpace: 'nowrap' }}>{row.price}</span>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CLAUSE ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 24px 100px' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px', padding: '28px 32px',
        }}>
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.8 }}>
            All packages and rates listed are standard offerings. Any requirements beyond the defined
            scope will be assessed and priced separately. Retainers are billed monthly in advance.
            One-time projects require a 50% deposit to commence. Ad spend is billed directly to the
            client and is not included in agency fees.
          </p>
        </div>
      </section>
    </>
  )
}
