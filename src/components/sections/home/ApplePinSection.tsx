'use client'

const panels = [
  {
    label: '✦ Strategy',
    labelColor: '#049DFF',
    line1: 'We think before',
    line2: 'we create.',
    gradient: 'linear-gradient(135deg, #C084FC, #049DFF)',
  },
  {
    label: '✦ Systems',
    labelColor: '#A614B2',
    line1: 'We build before',
    line2: 'we launch.',
    gradient: 'linear-gradient(135deg, #A614B2, #049DFF)',
  },
  {
    label: '✦ Results',
    labelColor: '#049DFF',
    line1: 'We measure before',
    line2: 'we scale.',
    gradient: 'linear-gradient(135deg, #C084FC, #34D399)',
  },
]

function Panel({ label, labelColor, line1, line2, gradient }: typeof panels[0]) {
  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-center px-8 md:px-20"
      style={{ flexShrink: 0 }}
    >
      {/* panel-text wrapper: children are animated by useScrollAnimations */}
      <div className="panel-text flex flex-col items-center gap-6">
        <p style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: labelColor,
          margin: 0,
          opacity: 0,
        }}>
          {label}
        </p>
        <h2 style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 800,
          fontSize: 'clamp(36px, 6vw, 80px)',
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
          opacity: 0,
        }}>
          {line1}<br />
          <span style={{
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {line2}
          </span>
        </h2>
      </div>
    </div>
  )
}

export default function ApplePinSection() {
  return (
    <>
      {/* Desktop: horizontal pin scroll (controlled by useScrollAnimations) */}
      <section
        className="scroll-pin hidden md:block w-full"
        style={{ height: '100vh', background: '#020008', overflow: 'clip' }}
      >
        <div className="scroll-pin-inner flex h-full" style={{ width: '300vw' }}>
          {panels.map((p) => <Panel key={p.line2} {...p} />)}
        </div>
      </section>

      {/* Mobile: stacked panels, no pin */}
      <section className="md:hidden flex flex-col" style={{ background: '#020008' }}>
        {panels.map((p) => (
          <div
            key={p.line2}
            className="w-full flex flex-col items-center justify-center px-8 py-24"
          >
            <p style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: p.labelColor,
              marginBottom: '20px',
            }}>
              {p.label}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 8vw, 52px)',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              {p.line1}<br />
              <span style={{
                background: p.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {p.line2}
              </span>
            </h2>
          </div>
        ))}
      </section>
    </>
  )
}
