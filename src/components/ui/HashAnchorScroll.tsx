'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Handles hash-anchor scrolling for client-side navigation.
 *
 * Problem: Next.js + Lenis conflict when Links navigate to /page#section.
 * Service tile Links use scroll={false} so neither Next.js nor the browser
 * fires its own scroll. This component handles the scroll instead.
 *
 * With AnimatePresence mode="popLayout" the new page mounts simultaneously with
 * the old page exiting, so getElementById succeeds on the first immediate try.
 * The 80ms retry is a safety net for slower mounts (e.g. lazy components).
 *
 * Nav offset: the fixed nav bar would overlap the top of the section without a
 * correction. We query the nav's actual height and subtract it.
 */
export default function HashAnchorScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)

    function scrollToHash(): boolean {
      const target = document.getElementById(id)
      if (!target) return false

      const nav = document.querySelector('nav') as HTMLElement | null
      const navOffset = nav ? nav.offsetHeight : 76
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' as ScrollBehavior })
      return true
    }

    // Immediate attempt — works for same-page anchor links
    if (scrollToHash()) return

    // Safety net: retry quickly in case the element wasn't in DOM yet
    const timer = setTimeout(scrollToHash, 80)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
