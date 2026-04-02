'use client'

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import type { LenisInstance } from '@/lib/lenis'

const LenisContext = createContext<LenisInstance | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export default function LenisWrapper({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null)

  useEffect(() => {
    let lenis: LenisInstance
    let gsapModule: typeof import('gsap')['gsap']
    let scrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger']
    let rafId: number = 0

    async function init() {
      const { default: Lenis } = await import('lenis')
      const { gsap, ScrollTrigger, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      gsapModule = gsap
      scrollTrigger = ScrollTrigger

      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.8,
        infinite: false,
      })

      lenisRef.current = lenis

      // Connect Lenis to GSAP ticker
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      // Update ScrollTrigger on Lenis scroll
      lenis.on('scroll', () => {
        ScrollTrigger.update()
      })
    }

    init()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}
