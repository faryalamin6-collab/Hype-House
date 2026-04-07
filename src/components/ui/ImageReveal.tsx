'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

export default function ImageReveal({
  src,
  alt,
  width = 1400,
  height = 560,
  priority = false,
  className = '',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in viewport (e.g. direct anchor link), skip animation entirely
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.88) {
      el.style.opacity = '1'
      const img = el.querySelector('img') as HTMLImageElement | null
      if (img) img.style.transform = 'scale(1)'
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    async function init() {
      const { gsap, ScrollTrigger, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      const elSafe = el as HTMLDivElement
      ctx = gsap.context(() => {
        // Outer wrapper: fade + slight lift
        gsap.fromTo(
          elSafe,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elSafe,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )

        // Inner image: subtle scale-down from slightly zoomed in (Ken Burns reveal)
        const img = elSafe.querySelector('img')
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.06 },
            {
              scale: 1,
              duration: 1.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: elSafe,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, width: '100%', overflow: 'hidden' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  )
}
