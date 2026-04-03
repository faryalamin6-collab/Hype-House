import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
  style?: React.CSSProperties
}

export default function GradientText({
  children,
  className = '',
  as: Tag = 'span',
  style,
}: GradientTextProps) {
  return (
    <Tag
      className={`gradient-text ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
