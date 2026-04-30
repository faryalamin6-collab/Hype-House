'use client'

import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [opacity, setOpacity] = useState(1)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    setOpacity(0)
    const t = setTimeout(() => setOpacity(1), 30)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div
      style={{
        minHeight: '100vh',
        opacity,
        transition: 'opacity 0.18s ease-in-out',
      }}
    >
      {children}
    </div>
  )
}
