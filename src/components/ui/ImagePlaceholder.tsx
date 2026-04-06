interface ImagePlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
  label?: string
}

export default function ImagePlaceholder({
  width = '100%',
  height = 360,
  className = '',
  label = 'Brand imagery coming soon',
}: ImagePlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: 'linear-gradient(135deg, rgba(166,20,178,0.15) 0%, rgba(12,18,141,0.15) 100%)',
        border: '1px solid rgba(166,20,178,0.3)',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        userSelect: 'none',
      }}
    >
      {/* HypeHouse wordmark */}
      <div
        style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 800,
          fontSize: '20px',
          background: 'linear-gradient(90deg, #C084FC, #049DFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.01em',
        }}
      >
        HypeHouse
      </div>
      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.40)',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </div>
    </div>
  )
}
