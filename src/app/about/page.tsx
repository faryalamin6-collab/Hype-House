import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'
import ImageReveal from '@/components/ui/ImageReveal'

export const metadata: Metadata = {
  title: 'About HypeHouse Digital — AI Creative Agency',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. Strategy, creative, automation — one partner who owns the outcome. Serving the Middle East, South Asia, and Europe.',
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
      <section
        className="page-top"
        style={{
          position: 'relative', zIndex: 10,
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '80px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>About Us · Nice To Meet You</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(24px, 4vw, 54px)', color: 'white',
              marginTop: '24px', marginBottom: '28px',
              letterSpacing: '-0.02em', lineHeight: 1.05,
            }}>
              We Don&apos;t Build<br />
              Brands.<br />
              <span className="gradient-text">We Engineer Hype.</span>
            </h1>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '20px',
              textAlign: 'left', maxWidth: '720px', margin: '0 auto',
            }}>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                We&apos;re not your typical agency.<br />
                We&apos;re architects of velocity, where design, storytelling, and AI collide to create
                ecosystems that move at lightspeed and perform with precision.<br />
                Where bold creative ignites movements.<br />
                Where every visual, every line, and every campaign is built to inspire and
                engineered to perform.
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                HypeHouse is a collective of digital natives, AI visionaries, and creative
                architects who know that modern brands need more than marketing. They
                need systems that evolve. Stories that spread like wildfire. Visuals that rewire
                perception.
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                Powered by Tachyon, our AI backbone, we launch brands, scale performance,
                and turn attention into revenue.
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                We exist for brands that want to feel alive.<br />
                The ones that want more than visibility.<br />
                The ones that want to matter.
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontStyle: 'italic' }}>
                Where hype isn&apos;t noise. It&apos;s momentum.
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontWeight: 600 }}>
                This is the future of creative. And it starts here.<br />
                Welcome to HypeHouse.
              </p>
            </div>

            <div style={{ marginTop: '48px' }}>
              <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
                Work With Us →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BRAND IMAGE — edge to edge ───────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, paddingBottom: '80px' }}>
        <ImageReveal src="/images/additional-1.png" alt="HypeHouse Digital Agency" />
      </section>

      {/* ── THE CODE ─────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '56px 48px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <SectionLabel>The Code</SectionLabel>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(22px, 3vw, 40px)', color: 'white',
              textAlign: 'center', letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Freedom. Partnership. Quality. Hype.
            </h2>
            <p style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.60)',
              textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.75,
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
      <section style={{ position: 'relative', zIndex: 10, padding: '48px 48px' }}>
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
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '28px' }}>
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

      {/* ── CLOSING QUOTE ────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '48px 48px 64px', textAlign: 'center' }}>
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
