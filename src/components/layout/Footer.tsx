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

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(2,0,8,0.8)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 24px 32px',
        }}
      >
        {/* Row 1: Brand + Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <Image
                src="/images/logo-white.png"
                alt="HypeHouse Digital"
                width={140}
                height={35}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                maxWidth: '260px',
                marginBottom: '24px',
              }}
            >
              Full-service AI-powered creative agency based in Karachi, Pakistan.
              Strategy. Systems. Creative. Unified.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.60)',
                lineHeight: 1.8,
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}
            >
              <div>📍 Karachi, Pakistan</div>
              <div>
                <a
                  href="https://hypehouse-client-intake-form.netlify.app"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(4,157,255,0.8)', textDecoration: 'none' }}
                >
                  📋 Start a project
                </a>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)' }}>💬 WhatsApp: available on request</div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)',
                  marginBottom: '20px',
                }}
              >
                {section}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e =>
                      ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.9)')
                    }
                    onMouseLeave={e =>
                      ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '20px',
              }}
            >
              Start Today
            </div>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Ready to build something unforgettable? Let&apos;s talk strategy.
            </p>
            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'white',
                textDecoration: 'none',
                padding: '11px 24px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #A614B2, #0C128D)',
              }}
            >
              Start a Project →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            marginBottom: '24px',
          }}
        />

        {/* Row 4: Legal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            © {new Date().getFullYear()} HypeHouse Digital. All rights reserved.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
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
