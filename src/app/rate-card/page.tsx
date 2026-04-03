import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'Rate Card — Pricing & Packages | HypeHouse Digital',
  description:
    'View HypeHouse Digital\'s transparent pricing: monthly retainer tiers, branding packages, and one-time service rates. Digital marketing agency Karachi.',
  alternates: {
    canonical: 'https://hypehouse.digital/rate-card',
  },
}

const retainers = [
  {
    name: 'Core',
    tagline: 'For brands getting serious.',
    price: 'PKR 150,000',
    period: '/month',
    highlight: false,
    features: [
      'Social media management (2 platforms)',
      '16 posts/month',
      'Caption writing',
      'Monthly analytics report',
      'Email support',
      'Basic Tachyon automation',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For brands ready to scale.',
    price: 'PKR 350,000',
    period: '/month',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Social media management (4 platforms)',
      '32 posts/month + Stories/Reels',
      'Copywriting (ads + social)',
      'Meta & Google Ads management',
      'SEO (on-page + 2 articles/month)',
      'Weekly performance reports',
      'Full Tachyon suite access',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Dominant',
    tagline: 'For brands that refuse second place.',
    price: 'PKR 700,000',
    period: '/month',
    highlight: false,
    badge: 'Full Service',
    features: [
      'Everything in Growth, plus:',
      'Full branding management',
      'Multi-platform ads (Meta, Google, TikTok)',
      'PR & influencer outreach',
      'Website maintenance & CRO',
      'SEO (technical + 4 articles/month)',
      'Custom Tachyon automation builds',
      'Priority support & strategy calls',
      'Quarterly brand performance review',
    ],
  },
]

const brandingPackages = [
  {
    name: 'Brand Starter',
    price: 'PKR 85,000',
    items: [
      'Logo design (3 concepts)',
      'Brand colour palette',
      'Typography selection',
      'Business card design',
      'Brand guidelines (basic)',
    ],
  },
  {
    name: 'Brand Complete',
    price: 'PKR 180,000',
    items: [
      'Everything in Brand Starter, plus:',
      'Full logo suite (primary, secondary, icon)',
      'Complete visual identity system',
      'Social media templates (10)',
      'Presentation template',
      'Brand guidelines (comprehensive)',
    ],
  },
  {
    name: 'Brand Premium',
    price: 'PKR 320,000',
    items: [
      'Everything in Brand Complete, plus:',
      'Brand strategy workshop',
      'Brand naming & tagline',
      'Brand voice framework',
      'Full collateral suite',
      'Brand video (30s)',
      '6-month brand support',
    ],
  },
]

const oneTimeServices = [
  { service: 'Website Design & Development (5 pages)', price: 'PKR 120,000+' },
  { service: 'Website Design & Development (10+ pages)', price: 'PKR 250,000+' },
  { service: 'Landing Page Design & Development', price: 'PKR 45,000' },
  { service: 'Social Media Audit & Strategy', price: 'PKR 30,000' },
  { service: 'SEO Audit & Recommendations', price: 'PKR 25,000' },
  { service: 'Ad Creative Production (5 ads)', price: 'PKR 35,000' },
  { service: 'Email Sequence (5 emails)', price: 'PKR 28,000' },
  { service: 'Content Writing (per article)', price: 'PKR 8,000' },
  { service: 'Tachyon Automation Setup (per workflow)', price: 'PKR 40,000' },
  { service: 'Competitor Analysis Report', price: 'PKR 18,000' },
  { service: 'Brand Consultation (1 hour)', price: 'PKR 12,000' },
  { service: 'Social Media Content Pack (30 posts)', price: 'PKR 50,000' },
]

export default function RateCardPage() {
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
          <SectionLabel>Transparent Pricing</SectionLabel>
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
            Investment that{' '}
            <span className="gradient-text">pays for itself.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            We believe in complete pricing transparency. No hidden fees, no vague
            proposals. Here&apos;s exactly what you&apos;d pay to work with the best.
          </p>
        </div>
      </section>

      {/* Retainer tiers */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Monthly Retainers</SectionLabel>
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
                Choose your{' '}
                <span className="gradient-text">growth velocity.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            {retainers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 80}>
                <HoverCard
                  style={{
                    position: 'relative',
                    background: tier.highlight
                      ? 'linear-gradient(135deg, rgba(159,1,246,0.12), rgba(2,31,195,0.08))'
                      : 'rgba(255,255,255,0.04)',
                    border: tier.highlight
                      ? '1px solid rgba(159,1,246,0.4)'
                      : '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '20px',
                    padding: '36px 32px',
                  }}
                  hoverStyle={{
                    transform: 'translateY(-4px)',
                    boxShadow: tier.highlight
                      ? '0 24px 64px rgba(159,1,246,0.25)'
                      : '0 20px 60px rgba(159,1,246,0.12)',
                  }}
                  baseStyle={{
                    transform: 'translateY(0)',
                    boxShadow: 'none',
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: tier.highlight
                          ? 'linear-gradient(135deg, #9f01f6, #021FC3)'
                          : 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '100px',
                        padding: '4px 14px',
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 600,
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        color: 'white',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <div
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 800,
                      fontSize: '24px',
                      color: 'white',
                      marginBottom: '4px',
                    }}
                  >
                    {tier.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)',
                      marginBottom: '24px',
                    }}
                  >
                    {tier.tagline}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '32px' }}>
                    <span
                      className="gradient-text"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 800,
                        fontSize: '32px',
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {tier.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#9f01f6', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✦</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.72)',
                            lineHeight: 1.5,
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant={tier.highlight ? 'primary' : 'secondary'} fullWidth>
                    Get Started →
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Branding packages */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>Brand Packages</SectionLabel>
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
                Build your brand{' '}
                <span className="gradient-text">from the ground up.</span>
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
            {brandingPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 80}>
                <HoverCard
                  style={{
                    padding: '32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'white',
                      marginBottom: '4px',
                    }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 800,
                      fontSize: '26px',
                      marginBottom: '24px',
                    }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: 1,
                      marginBottom: '28px',
                    }}
                  >
                    {pkg.items.map(item => (
                      <div key={item} style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#9f01f6', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✦</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.72)',
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" variant="secondary" fullWidth>
                    Enquire →
                  </Button>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* One-time services table */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <SectionLabel>One-Time Services</SectionLabel>
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
                Need something{' '}
                <span className="gradient-text">specific?</span>
              </h2>
            </div>
          </ScrollReveal>

          <HoverCard style={{ overflow: 'hidden' }}>
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                padding: '16px 28px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Service
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                Rate
              </span>
            </div>

            {oneTimeServices.map((row, i) => (
              <div
                key={row.service}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  padding: '16px 28px',
                  borderBottom: i < oneTimeServices.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.72)',
                  }}
                >
                  {row.service}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: '#C084FC',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.price}
                </span>
              </div>
            ))}
          </HoverCard>
        </div>
      </section>

      {/* Footer clause */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 24px 100px' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '28px 32px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.8,
              marginBottom: '8px',
            }}
          >
            * All prices are exclusive of applicable taxes. Monthly retainers are billed
            in advance. One-time projects require 50% deposit before work commences.
            Ad spend budgets are separate from management fees. Pricing is subject to
            change — locked in at time of contract signing.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.8,
            }}
          >
            Custom projects, enterprise pricing, and multi-service bundles are available
            upon request. Contact us to discuss your requirements.
          </p>
        </div>
      </section>
    </>
  )
}
