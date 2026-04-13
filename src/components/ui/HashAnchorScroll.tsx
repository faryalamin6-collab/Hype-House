'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Handles hash-anchor scrolling for client-side navigation.
 *
 * Uses useLayoutEffect so the scroll happens synchronously before the first
 * paint. The new page is at opacity:0 during this scroll (PageTransition), so
 * the jump is invisible. The page then fades in already at the correct position.
 *
 * Nav offset: the fixed nav bar would overlap the top of the section without a
 * correction. We query the nav's actual height and subtract it.
 */
export default function HashAnchorScroll() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    const target = document.getElementById(id)
    if (!target) return

    const nav = document.querySelector('nav') as HTMLElement | null
    const navOffset = nav ? nav.offsetHeight : 76
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top: Math.max(0, top), behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
