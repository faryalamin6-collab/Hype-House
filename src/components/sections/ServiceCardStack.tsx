'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ServiceFlipCard } from '@/components/ui/service-flip-card'

const services = [
  {
    id: 1,
    number: '01',
    icon: '◈',
    title: 'Branding',
    description: "Your brand is more than a logo — it's a system of influence. We build brands that command attention, earn trust, and hold it long after the first impression.",
  },
  {
    id: 2,
    number: '02',
    icon: '✍️',
    title: 'Copywriting',
    description: "We don't write copy. We script conversions. Every word is engineered to move people from attention to action — across every platform and touchpoint.",
  },
  {
    id: 3,
    number: '03',
    icon: '📱',
    title: 'Social Media',
    description: "Scroll-stopping isn't luck. It's strategy. We create content systems that earn attention in crowded feeds and turn followers into brand believers.",
  },
  {
    id: 4,
    number: '04',
    icon: '📣',
    title: 'Digital Advertising',
    description: 'Paid media that performs. We build, run and scale campaigns across Meta, Google, TikTok and LinkedIn — with data driving every decision.',
  },
  {
    id: 5,
    number: '05',
    icon: '🌐',
    title: 'Web & UX/UI',
    description: 'Your website should drive growth, not just traffic. We design experiences that guide users with intent, earn trust, and convert attention into action.',
  },
  {
    id: 6,
    number: '06',
    icon: '🔍',
    title: 'SEO',
    description: "Attention you don't pay for is the best kind. We build organic systems that rank higher, stay there, and compound returns over time.",
  },
]

function wrapIndex(n: number, len: number) {
  return ((n % len) + len) % len
}

function getCardStyle(offset: number) {
  const abs = Math.abs(offset)
  return {
    zIndex: 100 - abs,
    scale: offset === 0 ? 1.03 : 0.94 - abs * 0.03,
    x: offset * 55,
    y: abs * 12,
    rotateZ: offset * 6,
    rotateX: offset === 0 ? 0 : 10,
    opacity: abs > 2 ? 0 : 1,
  }
}

export default function ServiceCardStack() {
  const [active, setActive] = useState(0)
  const dragStartX = useRef(0)
  const len = services.length

  const next = useCallback(() => setActive(a => wrapIndex(a + 1, len)), [len])
  const prev = useCallback(() => setActive(a => wrapIndex(a - 1, len)), [len])

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0]!.clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = dragStartX.current - e.changedTouches[0]!.clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  return (
    <section
      className="w-full py-24 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-poppins)', color: '#049DFF' }}
          >
            ✦ What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Six Pillars.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #C084FC 0%, #818CF8 30%, #049DFF 65%, #34D399 100%)',
              }}
            >
              One Agency.
            </span>
          </h2>
          <p
            className="text-sm mt-4"
            style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(255,255,255,0.4)' }}
          >
            Tap card to explore · Swipe to navigate
          </p>
        </div>

        {/* Card Stack */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: 380, perspective: '1100px' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false}>
            {services.map((service, i) => {
              const raw = i - active
              const alt = raw > 0 ? raw - len : raw + len
              const offset = Math.abs(alt) < Math.abs(raw) ? alt : raw

              if (Math.abs(offset) > 3) return null

              const style = getCardStyle(offset)

              return (
                <motion.div
                  key={service.id}
                  className="absolute group"
                  style={{
                    width: 420,
                    height: 300,
                    zIndex: style.zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x: style.x,
                    y: style.y,
                    scale: style.scale,
                    rotateZ: style.rotateZ,
                    rotateX: style.rotateX,
                    opacity: style.opacity,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  drag={offset === 0 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_e, info) => {
                    if (info.offset.x > 80 || info.velocity.x > 500) prev()
                    else if (info.offset.x < -80 || info.velocity.x < -500) next()
                  }}
                  onClick={() => {
                    if (offset !== 0) setActive(i)
                  }}
                >
                  <ServiceFlipCard
                    {...service}
                    active={offset === 0}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Arrow navigation — desktop only */}
        <div className="hidden md:flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              fontFamily: 'var(--font-poppins)',
              border: '1px solid rgba(4,157,255,0.3)',
              color: '#049DFF',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(4,157,255,0.1)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#049DFF'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(4,157,255,0.3)'
            }}
          >
            ←
          </button>
          <span
            className="text-xs tracking-widest"
            style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(255,255,255,0.3)' }}
          >
            {String(active + 1).padStart(2, '0')} / {String(len).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              fontFamily: 'var(--font-poppins)',
              border: '1px solid rgba(4,157,255,0.3)',
              color: '#049DFF',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(4,157,255,0.1)'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#049DFF'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(4,157,255,0.3)'
            }}
          >
            →
          </button>
        </div>

      </div>
    </section>
  )
}
