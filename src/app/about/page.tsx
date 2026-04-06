import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'

export const metadata: Metadata = {
  title: 'About HypeHouse Digital — AI Creative Agency Karachi',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency in Karachi. Strategy, creative, automation — one partner who owns the outcome.',
  alternates: { canonical: 'https://hypehouse.digital/about' },
}

const codeValues = [
  {
    title: 'Freedom',
    body: 'Creative freedom is not optional. It is the condition under which great work becomes possible. We don\'t do templates. We don\'t do safe. We chase the ideas that scare us.',
  },
  {
    title: 'Partnership',
    body: 'When we work with a brand we treat it like our own. We listen. We challenge. We stay up. We are not a vendor you brief and forget — we are the partner who tells you when you\'re wrong.',
  },
  {
    title: 'Quality',
    body: 'If it is not exceptional it does not leave the room. This is not a standard. It is a filter. Average work from HypeHouse is not possible because average work is not HypeHouse.',
  },
  {
    title: 'Hype',
    body: 'Hype is not noise. Hype is not likes. Hype is momentum — the kind that compounds, that makes markets move, that builds brands people remember long after the campaign ends.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '180px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 76px)', color: 'white',
              marginTop: '24px', marginBottom: '24px',
              letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              Not an agency.{' '}
              <span className="gradient-text">A creative intelligence partner.</span>
            </h1>
            <p style={{
              fontSize: '20px', color: 'rgba(255,255,255,0.80)',
              lineHeight: 1.7, maxWidth: '580px', margin: '0 auto',
            }}>
              HypeHouse was built because the market deserved better. Better thinking. Better creative. Better results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRAND STORY — two column ─────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 48px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '64px', alignItems: 'center',
        }}>
          {/* Left: text */}
          <ScrollReveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)', color: 'white',
              marginTop: '20px', marginBottom: '28px',
              letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              Built in Karachi.{' '}
              <span className="gradient-text">Built for ambition.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
                HypeHouse Digital is a full-service AI-powered creative agency based in Karachi. We were built on a simple belief — that brands in Pakistan deserve the same quality of strategic and creative thinking that global brands receive from world-class agencies.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
                We combine strategy, creative, technology, and automation into one unified system. Not six disconnected vendors. One partner who owns the outcome.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
                Every service we offer exists inside a connected architecture. Branding informs copy. Copy informs content. Content informs campaigns. Campaigns inform SEO. And automation makes the whole system run without burning your team out.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, fontStyle: 'italic' }}>
                This is not how most agencies work. This is how HypeHouse works.
              </p>
            </div>
            <div style={{ marginTop: '40px' }}>
              <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>Work With Us →</Button>
            </div>
          </ScrollReveal>

          {/* Right: image */}
          <ScrollReveal delay={150}>
            <div style={{ position: 'relative', width: '100%', minHeight: '500px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(4,157,255,0.18)' }}>
              <Image src="/images/additional-1.png" alt="HypeHouse Digital Agency" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THE CODE — dark panel ─────────────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '120px 48px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <SectionLabel>The Code</SectionLabel>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
              textAlign: 'center', letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Freedom. Partnership. Quality. Hype.
            </h2>
            <p style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.72)',
              textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px', lineHeight: 1.75,
            }}>
              These are not values on a wall. They are operating principles. Every decision we make runs through this filter.
            </p>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {codeValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <HoverCard style={{ padding: '40px 32px', height: '100%' }}>
                  <div style={{
                    fontFamily: 'var(--font-poppins)', fontWeight: 800,
                    fontSize: '22px', color: 'white', marginBottom: '16px',
                  }}>
                    <span className="gradient-text">{v.title}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                    {v.body}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TACHYON MENTION ──────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{
              background: 'rgba(4,157,255,0.05)',
              border: '1px solid rgba(4,157,255,0.2)',
              borderRadius: '16px', padding: '48px 40px',
            }}>
              <div style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: '28px', color: '#049DFF', letterSpacing: '-0.01em', marginBottom: '16px',
              }}>
                TACHYON
              </div>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.75, marginBottom: '28px' }}>
                We also built Tachyon — our automation and AI intelligence sub-brand. Because great creative deserves intelligent systems behind it.
              </p>
              <Link href="/tachyon" style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 600,
                fontSize: '15px', color: '#049DFF', textDecoration: 'none',
                borderBottom: '1px solid rgba(4,157,255,0.4)',
                paddingBottom: '2px',
              }}>
                Explore Tachyon →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '80px 48px 140px', textAlign: 'center' }}>
        <ScrollReveal>
          <blockquote style={{
            fontFamily: 'var(--font-poppins)', fontWeight: 800,
            fontSize: 'clamp(22px, 4vw, 48px)', lineHeight: 1.2,
            letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto',
            color: 'rgba(255,255,255,0.90)',
          }}>
            &ldquo;We don&apos;t build brands. We engineer hype. And we don&apos;t stop until the market feels it.&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>
    </>
  )
}
