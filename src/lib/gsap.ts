'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGSAP() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  gsap.ticker.lagSmoothing(0)
  registered = true
}

export { gsap, ScrollTrigger }
