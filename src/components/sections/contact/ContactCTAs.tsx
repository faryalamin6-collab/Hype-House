'use client'

const waMessage = encodeURIComponent("Hi HypeHouse, I'd like to discuss a project.")
const waLink = `https://wa.me/971509790412?text=${waMessage}`

export default function ContactCTAs() {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.10)', borderRadius: '20px', padding: '40px',
      }}
    >
      <h3 style={{ fontWeight: 700, fontSize: '22px', color: '#ffffff', marginBottom: '8px' }}>
        Ready to begin?
      </h3>
      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.72)', marginBottom: '32px', lineHeight: 1.65 }}>
        The best way to start is to fill out our intake form. It takes 6 minutes and
        helps us come to you with a plan, not a pitch.
      </p>

      {/* Primary CTA — Netlify intake form */}
      <a
        href="https://hypehouse-client-intake-form.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          width: '100%', padding: '16px 24px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #A614B2, #0C128D)',
          fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '16px',
          color: '#ffffff', textDecoration: 'none', marginBottom: '12px',
          position: 'relative', overflow: 'hidden',
          transition: 'box-shadow 0.25s ease, transform 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget).style.boxShadow = '0 0 36px rgba(166,20,178,0.55)'
          ;(e.currentTarget).style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          (e.currentTarget).style.boxShadow = 'none'
          ;(e.currentTarget).style.transform = 'translateY(0)'
        }}
      >
        <span style={{
          position: 'absolute', top: 0, left: '-100%', width: '60%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
          transform: 'skewX(-20deg)', animation: 'shimmer 2.5s linear infinite', pointerEvents: 'none',
        }} />
        <span style={{ position: 'relative', zIndex: 1 }}>Fill Out Our Intake Form →</span>
      </a>

      <p style={{
        fontFamily: 'var(--font-poppins)', fontSize: '13px', color: 'rgba(255,255,255,0.50)',
        textAlign: 'center', marginBottom: '28px', lineHeight: 1.5,
      }}>
        Takes 6 minutes. Helps us come to you with a plan, not a pitch.
      </p>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>OR</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Secondary CTA — WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          width: '100%', padding: '15px 24px', borderRadius: '10px',
          background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.35)',
          fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '15px',
          color: '#25D366', textDecoration: 'none',
          transition: 'background 0.2s ease, border-color 0.2s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget).style.background = 'rgba(37,211,102,0.18)'
          ;(e.currentTarget).style.borderColor = 'rgba(37,211,102,0.6)'
        }}
        onMouseLeave={e => {
          (e.currentTarget).style.background = 'rgba(37,211,102,0.10)'
          ;(e.currentTarget).style.borderColor = 'rgba(37,211,102,0.35)'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Chat with us on WhatsApp
      </a>
    </div>
  )
}
