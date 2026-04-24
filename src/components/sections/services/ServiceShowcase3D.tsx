'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const GRADIENT = 'linear-gradient(135deg, #C084FC 0%, #818CF8 30%, #049DFF 65%, #34D399 100%)'

interface Service {
  id: string
  svgPath?: string
  label: string
  title: string
  description: string
  inclusions: { item: string }[]
}

function getTransforms(offset: number) {
  const abs = Math.abs(offset)
  const sign = Math.sign(offset)
  if (abs === 0) return { x: 0,        z: 80,   rotateY: 0,           scale: 1,    opacity: 1,    zIndex: 30 }
  if (abs === 1) return { x: sign*295,  z: -80,  rotateY: sign * -56,  scale: 0.76, opacity: 0.52, zIndex: 20 }
  if (abs === 2) return { x: sign*510,  z: -180, rotateY: sign * -68,  scale: 0.58, opacity: 0.18, zIndex: 10 }
  return               { x: sign*700,  z: -260, rotateY: sign * -75,  scale: 0.45, opacity: 0,    zIndex: 1  }
}

const SPRING = { type: 'spring' as const, stiffness: 230, damping: 26, mass: 1.05 }
const FLIP_SPRING = { type: 'spring' as const, stiffness: 260, damping: 28 }
const FLOAT = {
  animate: { y: [0, -8, 0] as number[] },
  transition: { repeat: Infinity, duration: 3.8, ease: 'easeInOut' as const, repeatType: 'loop' as const },
}

export default function ServiceShowcase3D({ services }: { services: Service[] }) {
  const [active, setActive]   = useState(0)
  const [flipped, setFlipped] = useState(false)
  const touchStartX = useRef(0)

  const go = (i: number) => {
    setActive(i)
    setFlipped(false)
  }

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx >  48) go(Math.max(0, active - 1))
    if (dx < -48) go(Math.min(services.length - 1, active + 1))
  }

  return (
    <section
      aria-label="Services showcase"
      style={{ padding: '60px 0 80px', position: 'relative', overflow: 'hidden' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Ambient blue glow */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 900px 520px at 50% 42%, rgba(4,157,255,0.09) 0%, transparent 70%)',
      }} />

      {/* ── SCROLL-TRIGGERED ENTRANCE ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 3D Coverflow */}
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
                onClick={() => isSide && go(i)}
                animate={{ x, z, rotateY, scale, opacity, zIndex }}
                transition={SPRING}
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
                {/* Floating lift on active */}
                <motion.div
                  animate={isActive ? FLOAT.animate : { y: 0 }}
                  transition={isActive ? FLOAT.transition : { duration: 0.4 }}
                  style={{ height: '100%', transformStyle: 'preserve-3d' }}
                >
                  {/* ── 3D FLIP CONTAINER ── */}
                  <motion.div
                    animate={{ rotateY: isActive && flipped ? 180 : 0 }}
                    transition={FLIP_SPRING}
                    onClick={isActive ? () => setFlipped(f => !f) : undefined}
                    style={{
                      height: '100%',
                      cursor: isActive ? 'pointer' : 'default',
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                    }}
                  >

                    {/* ════ FRONT FACE ════ */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      background: isActive ? 'rgba(4,0,20,0.42)' : 'rgba(2,0,8,0.32)',
                      backdropFilter: 'blur(32px)',
                      WebkitBackdropFilter: 'blur(32px)',
                      borderRadius: 24,
                      border: `1px solid ${isActive ? 'rgba(4,157,255,0.32)' : 'rgba(255,255,255,0.07)'}`,
                      padding: isActive ? '36px 32px 32px' : '28px 24px',
                      boxShadow: isActive
                        ? '0 0 100px rgba(4,157,255,0.14), 0 0 320px rgba(4,157,255,0.04), 0 24px 72px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)'
                        : '0 16px 56px rgba(0,0,0,0.55)',
                      display: 'flex', flexDirection: 'column',
                      overflow: 'hidden',
                    }}>
                      {isActive && <>
                        {/* Top gradient line */}
                        <div aria-hidden style={{
                          position: 'absolute', top: 0, left: '10%', right: '10%',
                          height: 1, background: GRADIENT, opacity: 0.62,
                        }} />
                        {/* Inner glow */}
                        <div aria-hidden style={{
                          position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(4,157,255,0.07) 0%, transparent 100%)',
                          pointerEvents: 'none', borderRadius: '24px 24px 0 0',
                        }} />
                      </>}

                      {/* Service name */}
                      <h2 style={{
                        fontFamily: 'var(--font-poppins)', fontWeight: 800, margin: 0,
                        fontSize: isActive ? 'clamp(30px, 4vw, 52px)' : 'clamp(22px, 3vw, 36px)',
                        letterSpacing: '-0.025em', lineHeight: 1.08,
                        marginBottom: isActive ? 10 : 8,
                        ...(isActive
                          ? { background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                          : { color: 'rgba(255,255,255,0.55)' }),
                      }}>
                        {service.label}
                      </h2>

                      {/* Accent bar */}
                      <div style={{
                        width: isActive ? 44 : 28, height: 2, borderRadius: 1,
                        background: isActive ? '#049DFF' : 'rgba(255,255,255,0.1)',
                        boxShadow: isActive ? '0 0 10px rgba(4,157,255,0.55)' : 'none',
                        marginBottom: isActive ? 18 : 12,
                        transition: 'all 0.4s ease',
                      }} />

                      {isActive && <>
                        <p style={{
                          fontFamily: 'var(--font-poppins)', fontWeight: 600,
                          fontSize: 'clamp(13px, 1.4vw, 16px)',
                          color: 'rgba(255,255,255,0.82)', lineHeight: 1.4,
                          fontStyle: 'italic', marginBottom: 'auto',
                        }}>
                          {service.title}
                        </p>
                        <p style={{
                          fontFamily: 'var(--font-poppins)', fontSize: 11,
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                          color: 'rgba(4,157,255,0.6)', marginTop: 24,
                        }}>
                          Tap to reveal →
                        </p>
                      </>}

                      {!isActive && (
                        <p style={{
                          fontFamily: 'var(--font-poppins)', fontSize: 12,
                          color: 'rgba(255,255,255,0.26)', lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        } as React.CSSProperties}>
                          {service.description}
                        </p>
                      )}
                    </div>

                    {/* ════ BACK FACE ════ */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: 'absolute', inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: 'linear-gradient(145deg, rgba(12,18,141,0.88) 0%, rgba(34,0,65,0.92) 100%)',
                        backdropFilter: 'blur(32px)',
                        WebkitBackdropFilter: 'blur(32px)',
                        borderRadius: 24,
                        border: '1px solid rgba(4,157,255,0.35)',
                        padding: '28px 30px',
                        boxShadow: '0 0 100px rgba(4,157,255,0.12), 0 24px 72px rgba(0,0,0,0.55)',
                        display: 'flex', flexDirection: 'column',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Top accent */}
                      <div aria-hidden style={{
                        position: 'absolute', top: 0, left: '10%', right: '10%',
                        height: 1, background: GRADIENT, opacity: 0.55,
                      }} />
                      {/* Corner glow */}
                      <div aria-hidden style={{
                        position: 'absolute', top: 0, right: 0,
                        width: 100, height: 100,
                        background: 'radial-gradient(circle, rgba(4,157,255,0.14), transparent 70%)',
                        borderRadius: '0 24px 0 100%', pointerEvents: 'none',
                      }} />

                      {/* Label */}
                      <span style={{
                        fontFamily: 'var(--font-poppins)', fontWeight: 700,
                        fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                        color: 'rgba(192,132,252,0.72)', marginBottom: 10,
                      }}>
                        ✦ {service.label}
                      </span>

                      {/* Description */}
                      <p style={{
                        fontFamily: 'var(--font-poppins)', fontSize: 13,
                        color: 'rgba(255,255,255,0.72)', lineHeight: 1.75,
                        marginBottom: 16,
                      }}>
                        {service.description}
                      </p>

                      <div style={{ height: 1, background: GRADIENT, opacity: 0.15, marginBottom: 14 }} />

                      {/* Inclusions */}
                      <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '7px 14px', marginBottom: 22, flex: 1,
                      }}>
                        {service.inclusions.slice(0, 4).map(({ item }) => {
                          const [label] = item.split(' — ')
                          return (
                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                              <span style={{
                                width: 4, height: 4, borderRadius: '50%', flexShrink: 0,
                                background: '#049DFF', boxShadow: '0 0 5px rgba(4,157,255,0.6)',
                              }} />
                              <span style={{
                                fontFamily: 'var(--font-poppins)', fontSize: 11,
                                fontWeight: 600, color: 'rgba(255,255,255,0.82)',
                              }}>{label}</span>
                            </div>
                          )
                        })}
                      </div>

                      {/* CTA + back */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <Button href="https://hypehouse-client-intake-form.netlify.app" variant="primary" external>
                          Get Started
                        </Button>
                        <button
                          onClick={() => setFlipped(false)}
                          style={{
                            fontFamily: 'var(--font-poppins)', fontSize: 12,
                            color: 'rgba(255,255,255,0.40)', background: 'none',
                            border: 'none', cursor: 'pointer', transition: 'color 0.2s ease',
                          }}
                        >
                          ← Back
                        </button>
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* ── NAVIGATION ─────────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 20, marginTop: 44,
        }}>
          <button
            onClick={() => go(Math.max(0, active - 1))}
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
                onClick={() => go(i)}
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
            onClick={() => go(Math.min(services.length - 1, active + 1))}
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
              onClick={() => go(i)}
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
      </motion.div>
    </section>
  )
}
