'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-white/10"
      style={{ background: '#020008' }}
    >
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start">

        {/* Column 1 — Logo + Info */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="HypeHouse Digital"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
            Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-2" style={{ fontFamily: 'var(--font-poppins)' }}>
            📍 Karachi · Operating globally
          </p>
        </div>

        {/* Column 2 — Services */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-poppins)' }}
          >
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Branding', href: '/services#branding' },
              { label: 'Copywriting', href: '/services#copywriting' },
              { label: 'Social Media', href: '/services#social-media' },
              { label: 'Digital Advertising', href: '/services#advertising' },
              { label: 'Web & UX/UI', href: '/services#web' },
              { label: 'SEO', href: '/services#seo' },
              { label: 'AI Automation', href: '/tachyon' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-poppins)' }}
          >
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'About', href: '/about' },
              { label: 'Philosophy', href: '/philosophy' },
              { label: 'Tachyon AI', href: '/tachyon' },
              { label: 'Rate Card', href: '/rate-card' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Start Today */}
        <div className="flex flex-col gap-4">
          <h3
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-poppins)' }}
          >
            Start Today
          </h3>
          <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
            Ready to build something unforgettable? Let&apos;s talk strategy.
          </p>
          <a
            href="https://hypehouse-client-intake-form.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80 w-fit"
            style={{
              background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)',
              fontFamily: 'var(--font-poppins)',
            }}
          >
            Start a Project
          </a>

          {/* Social links */}
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="https://wa.me/923272777237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: '#049DFF' }} />
              WhatsApp us
            </a>
            <a
              href="https://instagram.com/hypehouse.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A614B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/hypehouse-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#049DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-poppins)' }}>
          © {new Date().getFullYear()} HypeHouse Digital. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-white/30 text-xs hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-white/30 text-xs hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
