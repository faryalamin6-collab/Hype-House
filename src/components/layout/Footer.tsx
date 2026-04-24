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
  color: 'rgba(255,255,255,0.40)',
  marginBottom: '20px',
  lineHeight: 1,
  display: 'block',
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
    <footer className="relative z-10" style={{ borderTop: '1px solid rgba(4,157,255,0.10)', background: '#020008' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '64px 24px 32px' }}>

        {/* 1 col on mobile → 4 equal cols from md, all pinned to top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-3">
            {/* Spacer = colHeader height (11px line-height:1) + marginBottom 20px + 9px breathing = 40px total */}
            <div style={{ height: '40px' }} />
            <Image
              src="/images/logo-white.png"
              alt="HypeHouse Digital"
              width={130}
              height={32}
              style={{ objectFit: 'contain', display: 'block' }}
            />
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.65, margin: 0 }}>
              Full-service AI-powered creative agency.
              Strategy. Systems. Creative. Unified.
            </p>
            <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.30)' }}>
              📍 Karachi · Operating globally
            </span>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <div style={colHeader}>Services</div>
            <div className="flex flex-col gap-3">
              {footerLinks.Services.map(link => (
                <Link key={link.href} href={link.href} style={linkStyle}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.90)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.50)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <div style={colHeader}>Company</div>
            <div className="flex flex-col gap-3">
              {footerLinks.Company.map(link => (
                <Link key={link.href} href={link.href} style={linkStyle}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.90)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.50)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 4: Start Today ── */}
          <div className="flex flex-col gap-4 items-start">
            <div style={colHeader}>Start Today</div>
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
              Ready to build something unforgettable? Let&apos;s talk strategy.
            </p>
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '13px', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #A614B2, #0C128D)', display: 'inline-block' }}
            >
              Start a Project →
            </a>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(37,211,102,0.75)', textDecoration: 'none' }}>
                💬 WhatsApp us
              </a>
              <a href="https://hypehouse-client-intake-form.netlify.app"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(4,157,255,0.75)', textDecoration: 'none' }}>
                📋 Start a project
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

        {/* Legal */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {new Date().getFullYear()} HypeHouse Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span key={item} style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', cursor: 'pointer' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
