'use client'

import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    let ctx: any

    async function init() {
      const { gsap, ScrollTrigger, registerGSAP } = await import('@/lib/gsap')
      registerGSAP()

      ctx = gsap.context(() => {

        // Fade + slide up
        gsap.utils.toArray('.scroll-reveal').forEach((el: any) => {
          gsap.fromTo(el,
            { opacity: 0, y: 60 },
            {
              opacity: 1, y: 0, duration: 1, ease: 'power3.out',
              scrollTrigger: {
                trigger: el, start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })

        // Staggered children
        gsap.utils.toArray('.scroll-stagger').forEach((el: any) => {
          gsap.fromTo(Array.from(el.children),
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
              scrollTrigger: {
                trigger: el, start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })

        // Parallax
        gsap.utils.toArray('[data-parallax]').forEach((el: any) => {
          const speed = parseFloat(el.dataset.parallax) || 0.3
          gsap.to(el, {
            yPercent: -20 * speed, ease: 'none',
            scrollTrigger: {
              trigger: el, start: 'top bottom', end: 'bottom top', scrub: true,
            },
          })
        })

        // Scale reveal
        gsap.utils.toArray('.scroll-scale').forEach((el: any) => {
          gsap.fromTo(el,
            { scale: 0.92, opacity: 0 },
            {
              scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
              scrollTrigger: {
                trigger: el, start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })

        // Line reveal with skew
        gsap.utils.toArray('.scroll-line').forEach((el: any) => {
          gsap.fromTo(el,
            { opacity: 0, y: 30, skewY: 2 },
            {
              opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power4.out',
              scrollTrigger: {
                trigger: el, start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })

        // Pinned horizontal scroll — Apple style
        gsap.utils.toArray('.scroll-pin').forEach((el: any) => {
          const inner = el.querySelector('.scroll-pin-inner')
          if (!inner) return
          gsap.to(inner, {
            xPercent: -100 * (inner.children.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${inner.scrollWidth - window.innerWidth}`,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
        })

      })
    }

    init()

    return () => ctx?.revert()
  }, [])
}
