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
    title: 'Unlimited Creativity',
    body: "At HypeHouse, creativity isn't a service: it's how we exist. The fuel behind every idea, the spark that ignites every campaign, and the engine that moves your business forward.",
  },
  {
    title: 'True Partnership',
    body: "When we work with a brand we treat it like our own. We listen. We challenge. We stay up. We are not a vendor you brief and forget, we are the partner who tells you when you're wrong.",
  },
  {
    title: 'Exceptional Quality',
    body: 'If it is not exceptional it does not leave the room. This is not a standard. It is a filter. Average work from HypeHouse is not possible because average work is not HypeHouse.',
  },
  {
    title: 'Unmatched Hype',
    body: 'Hype is not noise. Hype is not likes. Hype is momentum, the kind that compounds, that makes markets move, that builds brands people remember long after the campaign ends.',
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
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '48px',
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
      <section style={{ position: 'relative', zIndex: 10, paddingBottom: '40px' }}>
        <ImageReveal src="/images/our-philosophy-header.png" alt="Our Philosophy" />
      </section>

      {/* ── BODY COPY ────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '36px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '20px',
            padding: '40px 36px',
            textAlign: 'center',
          }}>
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  We believe creativity is a living thing, one that breathes, evolves, and refuses to follow rules. At HypeHouse, we build everything around it.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  We don&apos;t play it safe. We chase the ideas that scare us, the ones that keep people up at night and make them stop mid-scroll, stare, and feel something they didn&apos;t expect.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  We believe in partnership, not transactions. When we take on a brand, we treat it like our own, listening deeply, challenging boldly, and collaborating until the work is right, not just delivered.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  We believe quality isn&apos;t a benchmark: it&apos;s a filter. If it isn&apos;t exceptional, it doesn&apos;t leave the room. We don&apos;t ship work we&apos;re comfortable with. We ship work we&apos;re proud of.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  And above all, we believe in Hype: not as noise, but as momentum. The current that moves through culture, the spark that ignites movements, the electricity that turns ideas into something the world can&apos;t ignore.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES CARDS ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '36px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <SectionLabel>Our Principles</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
                marginTop: '20px', letterSpacing: '-0.02em', lineHeight: 1.15,
              }}>
                Here is what we truly believe in.
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

      {/* ── CLOSING ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '36px 24px', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 48px)', lineHeight: 1.2,
              letterSpacing: '-0.02em', marginBottom: '32px',
              color: 'rgba(255,255,255,0.90)',
            }}>
              This is our code.<br />
              <span className="gradient-text" style={{ fontSize: 'clamp(16px, 2.8vw, 32px)' }}>
                Unlimited Creativity. True Partnership.<br />Exceptional Quality. Unmatched Hype.
              </span>
            </blockquote>
            <p style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.60)',
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
