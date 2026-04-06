interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '100px',
        border: '1px solid rgba(4,157,255,0.35)',
        background: 'rgba(4,157,255,0.08)',
        backdropFilter: 'blur(8px)',
        fontFamily: 'var(--font-poppins)',
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: '#049DFF',
      }}
    >
      <span style={{ color: '#049DFF', fontSize: '10px' }}>✦</span>
      {children}
    </div>
  )
}
