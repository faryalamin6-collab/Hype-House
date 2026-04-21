'use client'

import Link from 'next/link'
import { InteractiveServiceCard } from '@/components/ui/3d-card'

const services = [
  {
    id: 1,
    icon: '◈',
    title: 'Branding',
    subtitle: '01 — Identity',
    actionText: 'Build your brand →',
    href: '/services#branding',
    accentColor: '#049DFF',
  },
  {
    id: 2,
    icon: '✍️',
    title: 'Copywriting',
    subtitle: '02 — Voice',
    actionText: 'Script conversions →',
    href: '/services#copywriting',
    accentColor: '#A614B2',
  },
  {
    id: 3,
    icon: '📱',
    title: 'Social Media',
    subtitle: '03 — Presence',
    actionText: 'Own the feed →',
    href: '/services#social-media',
    accentColor: '#049DFF',
  },
  {
    id: 4,
    icon: '📣',
    title: 'Digital Advertising',
    subtitle: '04 — Growth',
    actionText: 'Scale your reach →',
    href: '/services#advertising',
    accentColor: '#A614B2',
  },
  {
    id: 5,
    icon: '🌐',
    title: 'Web & UX/UI',
    subtitle: '05 — Experience',
    actionText: 'Build to convert →',
    href: '/services#web',
    accentColor: '#049DFF',
  },
  {
    id: 6,
    icon: '🔍',
    title: 'SEO',
    subtitle: '06 — Discovery',
    actionText: 'Rank higher →',
    href: '/services#seo',
    accentColor: '#A614B2',
  },
]

export default function ServiceCards3D() {
  return (
    <section style={{ width: '100%', padding: '96px 0', background: 'transparent' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 600,
            fontSize: '11px', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#049DFF',
            marginBottom: '16px',
          }}>
            ✦ What We Do
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 60px)', color: 'white',
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            Six Pillars.{' '}
            <span className="gradient-text">One Agency.</span>
          </h2>
        </div>

        {/* 3D Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            justifyItems: 'center',
            perspective: '1000px',
          }}
        >
          {services.map((service) => (
            <InteractiveServiceCard
              key={service.id}
              title={service.title}
              subtitle={service.subtitle}
              icon={service.icon}
              actionText={service.actionText}
              href={service.href}
              accentColor={service.accentColor}
              onActionClick={() => { window.location.href = service.href }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 36px', borderRadius: '999px',
              fontFamily: 'var(--font-poppins)', fontWeight: 600,
              fontSize: '14px', color: 'white', textDecoration: 'none',
              background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View All Services →
          </Link>
        </div>

      </div>
    </section>
  )
}
