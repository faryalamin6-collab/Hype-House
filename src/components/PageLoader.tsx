'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px]"
      style={{
        background: 'linear-gradient(90deg, #A614B2, #049DFF)',
        animation: 'pageLoad 0.6s ease forwards',
      }}
    />
  )
}
