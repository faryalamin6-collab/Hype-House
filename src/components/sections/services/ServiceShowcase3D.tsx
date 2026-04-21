'use client'

import { useState } from 'react'
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
  if (abs === 0) return { x: 0, rotateY: 0, scale: 1, opacity: 1, zIndex: 30 }
  if (abs === 1) return { x: sign * 330, rotateY: sign * -52, scale: 0.76, opacity: 0.58, zIndex: 20 }
  if (abs === 2) return { x: sign * 570, rotateY: sign * -65, scale: 0.58, opacity: 0.22, zIndex: 10 }
  return { x: sign * 760, rotateY: sign * -72, scale: 0.45, opacity: 0, zIndex: 1 }
}

export default function ServiceShowcase3D({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0)

  return (
    <section
      aria-label="Services showcase"
      style={{ padding: '60px 0 80px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 900px 520px at 50% 42%, rgba(4,157,255,0.07) 0%, transparent 70%)',
        }}
      />

      {/* 3D Coverflow */}
      <div
        style={{
          position: 'relative',
          height: 520,
          perspective: 1400,
          perspectiveOrigin: '50% 50%',
          overflow: 'visible',
        }}
      >
        {services.map((service, i) => {
          const offset = i - active
          const isActive = offset === 0
          const isClickable = Math.abs(offset) === 1
          const { x, rotateY, scale, opacity, zIndex } = getTransforms(offset)

          return (
            <motion.div
              key={service.id}
              onClick={() => isClickable && setActive(i)}
              animate={{ x, rotateY, scale, opacity, zIndex }}
              transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 0.95 }}
              style={{
                position: 'absolute',
                left: 0, right: 0,
                width: 560,
                margin: '0 auto',
                top: 0,
                height: '100%',
                cursor: isClickable ? 'pointer' : isActive ? 'default' : 'default',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card shell */}
              <div
                style={{
                  height: '100%',
                  background: isActive
                    ? 'linear-gradient(145deg, rgba(6,0,28,0.97) 0%, rgba(2,0,8,0.99) 100%)'
                    : 'rgba(4,0,20,0.72)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: 24,
                  border: `1px solid ${isActive ? 'rgba(4,157,255,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  padding: isActive ? '40px 36px' : '32px 28px',
                  boxShadow: isActive
                    ? '0 0 80px rgba(4,157,255,0.11), 0 0 240px rgba(4,157,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)'
                    : '0 8px 40px rgba(0,0,0,0.45)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'border 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* Top gradient accent line */}
                {isActive && (
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute', top: 0, left: '12%', right: '12%',
                      height: 1, background: GRADIENT, opacity: 0.55,
                    }}
                  />
                )}

                {/* Icon + label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isActive ? 22 : 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: `rgba(4,157,255,${isActive ? '0.12' : '0.06'})`,
                    border: `1px solid rgba(4,157,255,${isActive ? '0.24' : '0.1'})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke={isActive ? '#049DFF' : 'rgba(4,157,255,0.4)'}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d={service.svgPath} />
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-poppins)', fontWeight: 500,
                    fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: isActive ? 'rgba(192,132,252,0.82)' : 'rgba(192,132,252,0.3)',
                  }}>
                    ✦ {service.label}
                  </span>
                </div>

                {/* Active card: full content */}
                {isActive && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.32, delay: 0.1 }}
                      style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                      <h2 style={{
                        fontFamily: 'var(--font-poppins)', fontWeight: 800,
                        fontSize: 'clamp(18px, 2.2vw, 30px)', color: '#fff',
                        letterSpacing: '-0.02em', lineHeight: 1.14,
                        marginBottom: 14,
                      }}>
                        {service.title}
                      </h2>

                      <p style={{
                        fontFamily: 'var(--font-poppins)', fontSize: 14,
                        color: 'rgba(255,255,255,0.72)', lineHeight: 1.75,
                        marginBottom: 20,
                      }}>
                        {service.description}
                      </p>

                      {/* Gradient divider */}
                      <div style={{ height: 1, background: GRADIENT, opacity: 0.18, marginBottom: 18 }} />

                      {/* Key inclusions — first 4 */}
                      <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '8px 16px', marginBottom: 28, flex: 1,
                      }}>
                        {service.inclusions.slice(0, 4).map(({ item }) => {
                          const [label] = item.split(' — ')
                          return (
                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{
                                width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                                background: '#049DFF', boxShadow: '0 0 6px rgba(4,157,255,0.55)',
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

                {/* Inactive card: label + truncated description */}
                {!isActive && (
                  <p style={{
                    fontFamily: 'var(--font-poppins)', fontSize: 13,
                    color: 'rgba(255,255,255,0.32)', lineHeight: 1.65,
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  } as React.CSSProperties}>
                    {service.description}
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation controls */}
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
        >
          ‹
        </button>

        {/* Animated pill dots */}
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
              style={{
                height: 6, borderRadius: 3,
                border: 'none', cursor: 'pointer', padding: 0,
              }}
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
        >
          ›
        </button>
      </div>

      {/* Clickable service name tabs */}
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
