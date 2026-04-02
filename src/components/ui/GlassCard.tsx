import { ReactNode, CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  style,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        ...style,
        ...(hover
          ? {
              transition:
                'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
            }
          : {}),
      }}
    >
      {children}
    </div>
  )
}
