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
    body: "Creative freedom is not optional. It is the condition under which great work becomes possible. We don't do templates. We don't do safe. We chase the ideas that scare us.",
  },
  {
    title: 'True Partnership',
    body: "When we work with a brand we treat it like our own. We listen. We challenge. We stay up. We are not a vendor you brief and forget — we are the partner who tells you when you're wrong.",
  },
  {
    title: 'Exceptional Quality',
    body: 'If it is not exceptional it does not leave the room. This is not a standard. It is a filter. Average work from HypeHouse is not possible because average work is not HypeHouse.',
  },
  {
    title: 'Unmatched Hype',
    body: 'Hype is not noise. Hype is not likes. Hype is momentum — the kind that compounds, that makes markets move, that builds brands people remember long after the campaign ends.',
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
      <section style={{ position: 'relative', zIndex: 10, padding: '64px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(4,0,18,0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '48px 52px',
            textAlign: 'center',
          }}>
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, textWrap: 'balance' } as React.CSSProperties}>
                  We believe creativity is a living thing.<br />
                  It breathes. It evolves. It breaks rules.<br />
                  And we exist to keep it alive.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, textWrap: 'balance' } as React.CSSProperties}>
                  At HypeHouse, we don&apos;t play it safe.<br />
                  We chase the ideas that scare us.<br />
                  The ones that keep us up at night.<br />
                  The ones that make people stop, stare, and feel something real.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, textWrap: 'balance' } as React.CSSProperties}>
                  We believe in partnership, not transactions.<br />
                  When we work with a brand, we treat it like our own.<br />
                  We listen. We challenge. We collaborate until it feels right — never until the deadline.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, textWrap: 'balance' } as React.CSSProperties}>
                  We believe in quality.<br />
                  If it&apos;s not exceptional, it doesn&apos;t leave the room.<br />
                  We don&apos;t ship average. We only ship what we&apos;re proud of.
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, textWrap: 'balance' } as React.CSSProperties}>
                  And above all, we believe in Hype.<br />
                  Not as noise, but as energy.<br />
                  The current that runs through culture, the spark that starts movements,<br />
                  and the electricity that turns great ideas into something unforgettable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES CARDS ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', zIndex: 10, padding: '64px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <SectionLabel>The Principles</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-poppins)', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 52px)', color: 'white',
                marginTop: '20px', letterSpacing: '-0.02em', lineHeight: 1.15,
              }}>
                Here is what we truly believe.
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
      <section style={{ position: 'relative', zIndex: 10, padding: '64px 48px', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote style={{
              fontFamily: 'var(--font-poppins)', fontWeight: 800,
              fontSize: 'clamp(22px, 4vw, 48px)', lineHeight: 1.2,
              letterSpacing: '-0.02em', marginBottom: '32px',
              color: 'rgba(255,255,255,0.90)',
            }}>
              This is our code.<br />
              <span className="gradient-text">Freedom. Partnership. Quality. Hype.</span>
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
