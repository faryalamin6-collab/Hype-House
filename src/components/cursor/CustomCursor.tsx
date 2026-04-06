'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    dot.style.opacity = '1'
    ring.style.opacity = '1'

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(3)'
      dot.style.backgroundColor = 'white'
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)'
    }

    const onMouseLeaveInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.style.backgroundColor = '#A614B2'
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    function loop() {
      // Dot follows exactly
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'

      // Ring lerps at 0.12
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'

      rafId = requestAnimationFrame(loop)
    }
    loop()

    // Attach to all interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label'

    function attachListeners() {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
    attachListeners()

    // Re-attach on DOM changes (for dynamically added elements)
    const observer = new MutationObserver(() => attachListeners())
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          background: '#A614B2',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease, background-color 0.15s ease',
          mixBlendMode: 'normal',
        }}
        aria-hidden="true"
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          border: '1px solid #A614B2',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease',
        }}
        aria-hidden="true"
      />
    </>
  )
}
