'use client'

export default function ApplePinSection() {
  return (
    <section className="scroll-pin w-full overflow-hidden" style={{ height: '100vh', background: '#020008' }}>
      <div className="scroll-pin-inner flex h-full" style={{ width: '300vw' }}>

        <div className="w-screen h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#049DFF',
            marginBottom: '24px',
          }}>
            ✦ Strategy
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            We think before<br />
            <span style={{
              background: 'linear-gradient(135deg, #C084FC, #049DFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              we create.
            </span>
          </h2>
        </div>

        <div className="w-screen h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#A614B2',
            marginBottom: '24px',
          }}>
            ✦ Systems
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            We build before<br />
            <span style={{
              background: 'linear-gradient(135deg, #A614B2, #049DFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              we launch.
            </span>
          </h2>
        </div>

        <div className="w-screen h-full flex flex-col items-center justify-center px-8 md:px-20">
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#049DFF',
            marginBottom: '24px',
          }}>
            ✦ Results
          </p>
          <h2 style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            We measure before<br />
            <span style={{
              background: 'linear-gradient(135deg, #C084FC, #34D399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              we scale.
            </span>
          </h2>
        </div>

      </div>
    </section>
  )
}
