'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type ServiceFlipCardProps = {
  title: string
  description: string
  icon: string
  number: string
  active: boolean
}

export function ServiceFlipCard({ title, description, icon, number, active }: ServiceFlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full h-full cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-4 p-8"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, rgba(4,157,255,0.08) 0%, rgba(166,20,178,0.08) 100%)',
            border: '1px solid rgba(4,157,255,0.25)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(4,157,255,0.15), transparent 70%)',
            }}
          />

          {/* Number watermark */}
          <span
            className="absolute top-4 right-6 text-7xl font-bold select-none"
            style={{
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(135deg, #C084FC, #049DFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.1,
            }}
          >
            {number}
          </span>

          <div className="text-5xl">{icon}</div>
          <h3
            className="text-2xl font-bold text-center"
            style={{
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(135deg, #ffffff 0%, #C084FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </h3>
          <p
            className="text-xs tracking-widest uppercase opacity-60"
            style={{ fontFamily: 'var(--font-poppins)', color: '#049DFF' }}
          >
            tap to explore →
          </p>

          {/* Bottom glow line */}
          <div
            className="absolute bottom-0 left-8 right-8 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #049DFF, transparent)',
            }}
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-center gap-6 p-8"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #0C128D 0%, #220041 100%)',
            border: '1px solid rgba(4,157,255,0.4)',
          }}
        >
          <div className="text-3xl">{icon}</div>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins)', color: 'rgba(255,255,255,0.70)' }}
          >
            {description}
          </p>

          <button
            className="mt-2 px-5 py-2 rounded-full text-xs font-semibold text-white w-fit"
            style={{
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)',
            }}
            onClick={(e) => {
              e.stopPropagation()
              setFlipped(false)
            }}
          >
            ← Back
          </button>

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20"
            style={{ background: 'radial-gradient(circle, #049DFF, transparent)' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
