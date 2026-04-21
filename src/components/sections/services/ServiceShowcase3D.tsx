'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

const GRADIENT = 'linear-gradient(135deg, #C084FC 0%, #818CF8 30%, #049DFF 65%, #34D399 100%)'

interface Service {
  id: string
  svgPath: string
  label: string
  title: string
  description: string
  inclusions: { item: string }[]
}

function getTransforms(offset: number) {
  const abs = Math.abs(offset)
  const sign = Math.sign(offset)
  if (abs === 0) return { x: 0,        z: 80,   rotateY: 0,          scale: 1,    opacity: 1,    zIndex: 30 }
  if (abs === 1) return { x: sign*295,  z: -80,  rotateY: sign * -56, scale: 0.76, opacity: 0.52, zIndex: 20 }
  if (abs === 2) return { x: sign*510,  z: -180, rotateY: sign * -68, scale: 0.58, opacity: 0.18, zIndex: 10 }
  return               { x: sign*700,  z: -260, rotateY: sign * -75, scale: 0.45, opacity: 0,    zIndex: 1  }
}

export default function ServiceShowcase3D({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 48)  setActive(i => Math.max(0, i - 1))
    if (dx < -48) setActive(i => Math.min(services.length - 1, i + 1))
  }

  return (
    <section
      aria-label="Services showcase"
      style={{ padding: '60px 0 80px', position: 'relative', overflow: 'hidden' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient electric blue glow */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 900px 520px at 50% 42%, rgba(4,157,255,0.09) 0%, transparent 70%)',
      }} />

      {/* 3D Coverflow container */}
      <div style={{
        position: 'relative',
        height: 'clamp(460px, 52vw, 560px)',
        perspective: 1200,
        perspectiveOrigin: '50% 38%',
        overflow: 'visible',
      }}>
        {services.map((service, i) => {
          const offset   = i - active
          const isActive = offset === 0
          const isSide   = Math.abs(offset) === 1
          const { x, z, rotateY, scale, opacity, zIndex } = getTransforms(offset)

          return (
            <motion.div
              key={service.id}
              onClick={() => isSide && setActive(i)}
              animate={{ x, z, rotateY, scale, opacity, zIndex }}
              transition={{ type: 'spring', stiffness: 230, damping: 26, mass: 1.05 }}
              style={{
                position: 'absolute',
                left: 0, right: 0,
                width: 'min(540px, calc(100vw - 48px))',
                margin: '0 auto',
                top: 0, height: '100%',
                cursor: isSide ? 'pointer' : 'default',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gentle float on active card */}
              <motion.div
                animate={isActive ? { y: [0, -8, 0] } : { y: 0 }}
                transition={isActive
                  ? { repeat: Infinity, duration: 3.8, ease: 'easeInOut', repeatType: 'loop' }
                  : { duration: 0.4 }}
                style={{ height: '100%' }}
              >
                {/* Card shell */}
                <div style={{
                  height: '100%',
                  background: isActive
                    ? 'rgba(4,0,20,0.42)'
                    : 'rgba(2,0,8,0.32)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  borderRadius: 24,
                  border: `1px solid ${isActive ? 'rgba(4,157,255,0.32)' : 'rgba(255,255,255,0.07)'}`,
                  padding: isActive ? '36px 32px 32px' : '28px 24px',
                  boxShadow: isActive
                    ? '0 0 100px rgba(4,157,255,0.14), 0 0 320px rgba(4,157,255,0.04), 0 24px 72px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)'
                    : '0 16px 56px rgba(0,0,0,0.55)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  {/* Top gradient accent */}
                  {isActive && (
                    <div aria-hidden style={{
                      position: 'absolute', top: 0, left: '10%', right: '10%',
                      height: 1, background: GRADIENT, opacity: 0.62,
                    }} />
                  )}

                  {/* Inner top glow */}
                  {isActive && (
                    <div aria-hidden style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                      background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(4,157,255,0.07) 0%, transparent 100%)',
                      pointerEvents: 'none', borderRadius: '24px 24px 0 0',
                    }} />
                  )}

                  {/* ── SERVICE NAME — BIG PROMINENT HEADING ── */}
                  <h2 style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 800,
                    fontSize: isActive ? 'clamp(30px, 4vw, 52px)' : 'clamp(22px, 3vw, 36px)',
                    ...(isActive
                      ? {
                          background: GRADIENT,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }
                      : { color: 'rgba(255,255,255,0.55)' }
                    ),
                    letterSpacing: '-0.025em',
                    lineHeight: 1.08,
                    margin: 0,
                    marginBottom: isActive ? 10 : 8,
                  }}>
                    {service.label}
                  </h2>

                  {/* Blue accent bar under name */}
                  <div style={{
                    width: isActive ? 44 : 28,
                    height: 2,
                    background: isActive ? '#049DFF' : 'rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    marginBottom: isActive ? 18 : 12,
                    boxShadow: isActive ? '0 0 10px rgba(4,157,255,0.55)' : 'none',
                    transition: 'all 0.4s ease',
                  }} />

                  {/* ── ACTIVE: full content ── */}
                  {isActive && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                      >
                        <p style={{
                          fontFamily: 'var(--font-poppins)', fontWeight: 600,
                          fontSize: 'clamp(13px, 1.4vw, 16px)',
                          color: 'rgba(255,255,255,0.82)', lineHeight: 1.4,
                          marginBottom: 14, fontStyle: 'italic',
                        }}>
                          {service.title}
                        </p>

                        <p style={{
                          fontFamily: 'var(--font-poppins)', fontSize: 13,
                          color: 'rgba(255,255,255,0.62)', lineHeight: 1.72,
                          marginBottom: 18,
                        }}>
                          {service.description}
                        </p>

                        <div style={{ height: 1, background: GRADIENT, opacity: 0.14, marginBottom: 16 }} />

                        <div style={{
                          display: 'grid', gridTemplateColumns: '1fr 1fr',
                          gap: '8px 16px', marginBottom: 24, flex: 1,
                        }}>
                          {service.inclusions.slice(0, 4).map(({ item }) => {
                            const [label] = item.split(' — ')
                            return (
                              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{
                                  width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                                  background: '#049DFF', boxShadow: '0 0 6px rgba(4,157,255,0.6)',
                                }} />
                                <span style={{
                                  fontFamily: 'var(--font-poppins)', fontSize: 12,
                                  fontWeight: 600, color: 'rgba(255,255,255,0.84)',
                                }}>
                                  {label}
                                </span>
                              </div>
                            )
                          })}
                        </div>

                        <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
                          Get Started →
                        </Button>
                      </motion.div>
                    </AnimatePresence>
                  )}

                  {/* ── INACTIVE: icon + truncated description ── */}
                  {!isActive && (
                    <div style={{ flex: 1 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="rgba(4,157,255,0.38)" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        style={{ marginBottom: 10 }}
                      >
                        <path d={service.svgPath} />
                      </svg>
                      <p style={{
                        fontFamily: 'var(--font-poppins)', fontSize: 12,
                        color: 'rgba(255,255,255,0.26)', lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      } as React.CSSProperties}>
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 20,
        marginTop: 44,
      }}>
        <button
          onClick={() => setActive(i => Math.max(0, i - 1))}
          disabled={active === 0}
          aria-label="Previous service"
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            color: active === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: active === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, lineHeight: 1, transition: 'all 0.2s ease',
          }}
        >‹</button>

        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {services.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(i)}
              aria-label={`View ${s.label}`}
              animate={{
                width: i === active ? 26 : 6,
                backgroundColor: i === active ? '#049DFF' : 'rgba(255,255,255,0.18)',
              }}
              transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              style={{ height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', padding: 0 }}
            />
          ))}
        </div>

        <button
          onClick={() => setActive(i => Math.min(services.length - 1, i + 1))}
          disabled={active === services.length - 1}
          aria-label="Next service"
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            color: active === services.length - 1 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
            cursor: active === services.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, lineHeight: 1, transition: 'all 0.2s ease',
          }}
        >›</button>
      </div>

      {/* Service name tabs */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', gap: '2px 2px',
        marginTop: 18, padding: '0 24px',
      }}>
        {services.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: i === active ? 600 : 400,
              fontSize: 12, letterSpacing: '0.06em',
              color: i === active ? '#049DFF' : 'rgba(255,255,255,0.3)',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '6px 12px',
              borderRadius: 20, transition: 'color 0.2s ease',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    </section>
  )
}
