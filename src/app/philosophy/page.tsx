import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HoverCard from '@/components/ui/HoverCard'
import ImageReveal from '@/components/ui/ImageReveal'

export const metadata: Metadata = {
  title: 'Our Philosophy — The HypeHouse Code | HypeHouse Digital',
  description:
    'The HypeHouse code: Freedom. Precision. Partnership. Quality. Hype. We don\'t follow the formula — we write the blueprint for what modern creative agencies should be.',
  alternates: { canonical: 'https://hypehouse.digital/philosophy' },
}

const principles = [
  {
    title: 'Creative Freedom',
    body: 'The kind that isn\'t limited by templates, trends, or fear. Every project starts with a blank page and an open mind. Every idea earns its place by being impossible to ignore.',
  },
  {
    title: 'Precision',
    body: 'Chaos only becomes art when it\'s shaped with purpose. We think fast, but we never rush. Every frame, every word, every beat is built to perform.',
  },
  {
    title: 'Partnership',
    body: 'When we work with a brand, we treat it like our own. We listen. We challenge. We collaborate until the work feels right, not until the deadline hits.',
  },
  {
    title: 'Quality',
    body: 'If it\'s not exceptional, it doesn\'t leave the room. We don\'t ship average. We ship what we\'re proud of.',
  },
]

export default function PhilosophyPage() {
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
            <SectionLabel>Our Philosophy · The HypeHouse Code</SectionLabel>
            <h1 style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 76px)', color: 'white',
              marginTop: '24px', marginBottom: '32px',
              letterSpacing: '-0.02em', lineHeight: 1.05,
            }}>
              We Don&apos;t Follow The<br />
              Formula.<br />
              <span className="gradient-text">We Write The Blueprint</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHILOSOPHY IMAGE — edge to edge ──────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, paddingBottom: '80px' }}>
        <ImageReveal src="/images/our-philosophy-header.png" alt="Our Philosophy" />
      </section>

      {/* ── BODY COPY ────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '56px 48px',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
                We believe creativity is a living thing.<br />
                It breathes. It evolves. It breaks rules.<br />
                And we exist to keep it alive.
              </p>

              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
                At HypeHouse, we don&apos;t play it safe.<br />
                We chase the ideas that scare us.<br />
                The ones that keep us up at night.<br />
                The ones that make people stop, stare, and feel something real.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRINCIPLES CARDS ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '56px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel>The Principles</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
                marginTop: '20px', letterSpacing: '-0.02em', lineHeight: 1.15,
              }}>
                We believe in four things.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <HoverCard style={{ padding: '40px 32px', height: '100%' }}>
                  <div style={{
                    fontFamily: 'var(--font-poppins)', fontWeight: 800,
                    fontSize: '22px', color: 'white', marginBottom: '16px',
                  }}>
                    <span className="gradient-text">{p.title}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
                    {p.body}
                  </p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTENDED PHILOSOPHY ──────────────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '56px 48px',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
                We believe in partnership, not transactions.<br />
                When we work with a brand, we treat it like our own.<br />
                We listen. We challenge. We collaborate until the work feels right,
                not until the deadline hits.
              </p>

              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
                We believe in quality.<br />
                If it&apos;s not exceptional, it doesn&apos;t leave the room.<br />
                We don&apos;t ship average. We ship what we&apos;re proud of.
              </p>

              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85 }}>
                And above all, we believe in Hype.<br />
                Not as noise, but as energy.<br />
                The current that runs through culture.<br />
                The spark that starts movements.<br />
                The electricity that turns great ideas into something unforgettable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '60px 48px', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 48px)', lineHeight: 1.2,
              letterSpacing: '-0.02em', marginBottom: '32px',
              color: 'rgba(255,255,255,0.90)',
            }}>
              This is our code.<br />
              <span className="gradient-text">Freedom. Precision. Partnership. Quality. Hype.</span>
            </blockquote>
            <p style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8, marginBottom: '8px',
            }}>
              This is how we build.<br />
              This is how we care.<br />
              This is HypeHouse.
            </p>
            <div style={{ marginTop: '48px' }}>
              <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
                Start a Project →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
