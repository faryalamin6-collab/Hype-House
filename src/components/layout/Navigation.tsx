'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/services', label: 'Services' },
  { href: '/tachyon', label: 'Tachyon' },
  { href: '/rate-card', label: 'Rate Card' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll when mobile open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px 0' : '14px 0',
          background: scrolled
            ? 'rgba(2,0,8,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'padding 0.3s ease, background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/logo-white.png"
              alt="HypeHouse Digital"
              width={160}
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop links */}
          <div
            className="hidden md:flex"
            style={{ gap: '8px', alignItems: 'center' }}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: pathname === link.href
                    ? '#ffffff'
                    : 'rgba(255,255,255,0.80)',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  background: pathname === link.href
                    ? 'rgba(166,20,178,0.12)'
                    : 'transparent',
                  border: pathname === link.href
                    ? '1px solid rgba(166,20,178,0.25)'
                    : '1px solid transparent',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = '#ffffff'
                    ;(e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={e => {
                  if (pathname !== link.href) {
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.80)'
                    ;(e.target as HTMLElement).style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://hypehouse-client-intake-form.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'white',
                textDecoration: 'none',
                padding: '9px 20px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #A614B2, #0C128D)',
                marginLeft: '8px',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget).style.boxShadow = '0 0 24px rgba(166,20,178,0.5)'
                ;(e.currentTarget).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget).style.boxShadow = 'none'
                ;(e.currentTarget).style.transform = 'translateY(0)'
              }}
            >
              Start a Project →
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'white',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'white',
                transition: 'opacity 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'white',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(2,0,8,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        className="md:hidden"
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 700,
              fontSize: '28px',
              color: pathname === link.href ? '#C084FC' : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              padding: '12px 32px',
              letterSpacing: '-0.01em',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://hypehouse-client-intake-form.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '24px',
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '16px',
            color: 'white',
            textDecoration: 'none',
            padding: '14px 40px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #A614B2, #0C128D)',
            width: '100%',
            maxWidth: '240px',
            textAlign: 'center',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ease ${navLinks.length * 60}ms, transform 0.4s ease ${navLinks.length * 60}ms`,
            display: 'block',
          }}
        >
          Start a Project →
        </a>
      </div>
    </>
  )
}
