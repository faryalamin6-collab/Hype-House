'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Services: [
    { href: '/services#branding', label: 'Branding' },
    { href: '/services#social-media', label: 'Social Media' },
    { href: '/services#advertising', label: 'Digital Advertising' },
    { href: '/services#web', label: 'Web & UX/UI' },
    { href: '/services#seo', label: 'SEO' },
    { href: '/tachyon', label: 'AI Automation' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/rate-card', label: 'Rate Card' },
    { href: '/tachyon', label: 'Tachyon AI' },
    { href: '/contact', label: 'Contact' },
  ],
}

const colHeader: React.CSSProperties = {
  fontFamily: 'var(--font-poppins)',
  fontWeight: 600,
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '20px',
  lineHeight: 1,
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-poppins)',
  fontSize: '14px',
  color: 'rgba(255,255,255,0.50)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(4,157,255,0.10)',
        background: '#020008',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '64px 24px 32px',
        }}
      >
        {/* Grid — 4 equal columns, all start at top */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
        >
          {/* ── Brand column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Spacer = colHeader lineHeight (11px) + marginBottom (20px) + a little breathing = 40px */}
            <div style={{ height: '40px' }} />

            <Image
              src="/images/logo-white.png"
              alt="HypeHouse Digital"
              width={130}
              height={32}
              style={{ objectFit: 'contain', display: 'block' }}
            />

            <p style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.50)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Full-service AI-powered creative agency.
              Strategy. Systems. Creative. Unified.
            </p>

            <span style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
            }}>
              📍 Karachi · Operating globally
            </span>
          </div>

          {/* ── Services column ── */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div style={colHeader}>{section}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={linkStyle}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.90)')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.50)')}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* ── Start Today column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <div style={colHeader}>Start Today</div>
            <p style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Ready to build something unforgettable? Let&apos;s talk strategy.
            </p>
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'white',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #A614B2, #0C128D)',
                display: 'inline-block',
              }}
            >
              Start a Project →
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(37,211,102,0.75)', textDecoration: 'none' }}
              >
                💬 WhatsApp us
              </a>
              <a
                href="https://hypehouse-client-intake-form.netlify.app"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(4,157,255,0.75)', textDecoration: 'none' }}
              >
                📋 Start a project
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

        {/* Legal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {new Date().getFullYear()} HypeHouse Digital. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span
                key={item}
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', cursor: 'pointer' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
