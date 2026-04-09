'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  /** Skip all animation — render at full opacity immediately */
  skip?: boolean
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  style,
  skip = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || skip) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    async function init() {
      const { gsap, ScrollTrigger, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: delay / 1000,
            ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }

    init()

    return () => {
      ctx?.revert()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: skip ? 1 : 0, ...style }}
    >
      {children}
    </div>
  )
}
