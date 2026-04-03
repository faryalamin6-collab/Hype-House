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
        border: '1px solid rgba(159,1,246,0.35)',
        background: 'rgba(159,1,246,0.08)',
        backdropFilter: 'blur(8px)',
        fontFamily: 'var(--font-poppins)',
        fontWeight: 500,
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(192,132,252,0.9)',
      }}
    >
      <span style={{ color: '#C084FC' }}>✦</span>
      {children}
    </div>
  )
}
