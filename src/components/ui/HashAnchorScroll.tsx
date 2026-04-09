'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Handles hash-anchor scrolling for client-side navigation.
 *
 * Next.js + Lenis can conflict when a Link navigates to /page#section —
 * the browser fires a native instant-scroll, then Lenis tries to re-scroll,
 * creating a visible double-jump. Instead, service tile Links use scroll={false}
 * so neither fires. This component then positions the page at the anchor
 * synchronously on mount (before the PageTransition fade-in completes), so the
 * content is already at the right position when it becomes fully visible.
 */
export default function HashAnchorScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const target = document.getElementById(hash.slice(1))
    if (!target) return

    // Instant (no animation) — positions page before first visible paint.
    // By the time the 0.22s PageTransition fade completes, content is already
    // at the correct scroll position with no visible jump.
    target.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
  }, [pathname])

  return null
}
