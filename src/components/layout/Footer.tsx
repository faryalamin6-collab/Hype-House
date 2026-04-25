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
    <footer className="relative z-10 bg-[#020008] border-t border-white/10 pt-12 md:pt-16">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 32px' }}>

        {/* Main grid: 2-col mobile (logo full-width + 2 link cols + hidden CTA), 4-col desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start w-full mb-10">

          {/* ── Col 1: Brand — full width on mobile, 1 col on desktop ── */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 items-start">
            <div className="hidden md:block h-[20px]" />
            <Image
              src="/images/logo-white.png"
              alt="HypeHouse Digital"
              width={130}
              height={32}
              className="mb-0 pb-0"
              style={{ objectFit: 'contain', objectPosition: 'left top', display: 'block' }}
            />
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.65, margin: 0 }}>
              Full-service AI-powered creative agency.
              Strategy. Systems. Creative. Unified.
            </p>
            {/* Location — desktop only */}
            <span className="hidden md:inline" style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.30)' }}>
              📍 Karachi · Operating globally
            </span>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <div style={colHeader}>Services</div>
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              {footerLinks.Company.map(link => (
                <Link key={link.href} href={link.href} style={linkStyle}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.90)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.50)')}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 4: Start Today — desktop only ── */}
          <div className="hidden md:flex flex-col gap-4 items-start">
            <div style={colHeader}>Start Today</div>
            <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
              Ready to build something unforgettable? Let&apos;s talk strategy.
            </p>
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '13px', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '9999px', background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)', display: 'inline-block' }}
            >
              Start a Project
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

        {/* Mobile-only CTA row */}
        <div className="flex md:hidden items-center gap-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <a
            href="https://wa.me/971509790412?text=Hi%20HypeHouse%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(37,211,102,0.85)', textDecoration: 'none' }}
          >
            💬 WhatsApp
          </a>
          <a
            href="https://hypehouse-client-intake-form.netlify.app"
            target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', fontWeight: 600, color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: '9999px', background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)' }}
          >
            Start a Project
          </a>
        </div>

        {/* Desktop divider (hidden on mobile — above row handles it) */}
        <div className="hidden md:block" style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />
        <div className="md:hidden" style={{ height: '24px' }} />

        {/* Legal */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.30)', margin: 0 }}>
            © {new Date().getFullYear()} HypeHouse Digital. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.30)', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.30)', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
