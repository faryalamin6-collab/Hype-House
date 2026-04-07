import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HoverCard from '@/components/ui/HoverCard'

const values = [
  { label: 'Strategy First', desc: 'Every decision is rooted in data and insight before a single pixel is touched.' },
  { label: 'AI-Augmented', desc: 'We use AI to move faster, think deeper, and deliver more — without sacrificing quality.' },
  { label: 'Radical Ownership', desc: 'We treat your brand like it\'s ours. Your wins are our wins.' },
  { label: 'Ruthless Quality', desc: 'Average is our enemy. If it doesn\'t meet the standard, it doesn\'t ship.' },
]

export default function Philosophy() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '80px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <SectionLabel>Our Philosophy</SectionLabel>
          </div>
        </ScrollReveal>

        {/* Philosophy header image */}
        <ScrollReveal delay={60}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto 48px', minHeight: '420px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(4,157,255,0.18)' }}>
            <Image src="/images/our-philosophy-header.png" alt="Our Philosophy" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </ScrollReveal>

        {/* Large pull quote */}
        <ScrollReveal delay={100}>
          <blockquote
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 56px)',
              textAlign: 'center',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '64px',
            }}
          >
            <span style={{ color: 'white' }}>We chase the ideas that scare us.</span>
            <br />
            <span className="gradient-text">We treat every brand like it is our own.</span>
            <br />
            <span style={{ color: 'white' }}>And if the work is not exceptional,</span>
            <span style={{ color: '#C084FC' }}> it does not leave the room.</span>
          </blockquote>
        </ScrollReveal>

        {/* Value pills */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {values.map((v, i) => (
            <ScrollReveal key={v.label} delay={i * 80}>
              <HoverCard style={{ padding: '24px', borderRadius: '12px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                  }}
                >
                  <span style={{ color: '#A614B2', fontSize: '12px' }}>✦</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: 'white',
                    }}
                  >
                    {v.label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.65,
                  }}
                >
                  {v.desc}
                </p>
              </HoverCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
