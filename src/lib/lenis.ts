'use client'

import type Lenis from 'lenis'

export type LenisInstance = InstanceType<typeof Lenis>

export const lenisConfig = {
  duration: 1.4,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.8,
  infinite: false,
}
