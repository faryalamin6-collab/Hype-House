'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let animFrameId: number

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isTablet = window.matchMedia('(max-width: 1023px)').matches

    const W = () => window.innerWidth
    const H = () => window.innerHeight

    // ── CANVAS SETUP ─────────────────────────────────────────────────────────
    const canvas = document.createElement('canvas')
    canvas.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 0;
    `
    canvas.width = W()
    canvas.height = H()
    mountRef.current.appendChild(canvas)
    const ctx = canvas.getContext('2d')!

    // ── ORB DATA ─────────────────────────────────────────────────────────────
    // Orbs rendered as soft radial gradients (luminous nebula glow)
    const orbCount = isMobile ? 3 : 5
    interface OrbDatum {
      x: number; y: number
      radius: number
      driftSpeed: number; driftAngle: number
      pulseSpeed: number; pulsePhase: number
      hueBase: number; hueRange: [number, number]
      huePhase: number; hueSpeed: number
      baseOpacity: number
    }
    const orbData: OrbDatum[] = []
    for (let i = 0; i < orbCount; i++) {
      const isBlue = i >= Math.floor(orbCount / 3)  // 2/3 blue, 1/3 indigo
      // Indigo orbs: HSL 258–272 (true indigo/violet, not pink) | Blue orbs: HSL 198–214 (#049DFF)
      const hueMin = isBlue ? 198 : 258
      const hueMax = isBlue ? 214 : 272
      const hueBase = hueMin + Math.random() * (hueMax - hueMin)
      orbData.push({
        x: Math.random(),
        y: Math.random(),
        radius: (W() * (0.18 + Math.random() * 0.22)), // 18–40% of viewport width
        driftSpeed: 0.0003 + Math.random() * 0.0005,
        driftAngle: Math.random() * Math.PI * 2,
        pulseSpeed: 0.004 + Math.random() * 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        hueBase,
        hueRange: [hueMin, hueMax],
        huePhase: Math.random() * Math.PI * 2,
        hueSpeed: 0.0008 + Math.random() * 0.0006,
        baseOpacity: 0.22 + Math.random() * 0.08, // 0.22–0.30 at centre — subtle, not pink
      })
    }

    // ── STAR DATA ────────────────────────────────────────────────────────────
    const starCount = isMobile ? 50 : isTablet ? 65 : 80
    interface StarDatum {
      x: number; y: number; size: number; opacity: number
      twinkleSpeed: number; twinklePhase: number; driftX: number
    }
    const starData: StarDatum[] = []
    for (let i = 0; i < starCount; i++) {
      starData.push({
        x: Math.random(), y: Math.random(),
        size: 0.5 + Math.random() * 2.7,
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.004 + Math.random() * 0.018,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: 0.000015 + Math.random() * 0.000025,
      })
    }
    const sortedBySizeStar = [...starData].sort((a, b) => b.size - a.size)
    const sparkleThreshold = sortedBySizeStar[Math.floor(starCount * 0.07)].size

    // ── DIAMOND SPARKLES ─────────────────────────────────────────────────────
    const sparkleCount = 12
    interface SparkleDatum {
      x: number; y: number; size: number
      pulseSpeed: number; pulsePhase: number
      opacity: number; isPurple: boolean
    }
    const sparkleData: SparkleDatum[] = []
    for (let i = 0; i < sparkleCount; i++) {
      sparkleData.push({
        x: Math.random(), y: Math.random(),
        size: 3 + Math.random() * 6,
        pulseSpeed: 0.008 + Math.random() * 0.012,
        pulsePhase: Math.random() * Math.PI * 2,
        opacity: 0.2 + Math.random() * 0.6,
        isPurple: Math.random() < 0.6,
      })
    }

    // ── ENERGY NODES ─────────────────────────────────────────────────────────
    const nodeCount = isMobile ? 0 : 4
    interface NodeDatum {
      x: number; y: number; vx: number; vy: number
      isPurple: boolean
    }
    const nodeData: NodeDatum[] = []
    for (let i = 0; i < nodeCount; i++) {
      const speed = 0.0004 + Math.random() * 0.0008
      const angle = Math.random() * Math.PI * 2
      nodeData.push({
        x: Math.random(), y: Math.random(),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        isPurple: i < 4,
      })
    }

    // ── FLOW LINES ───────────────────────────────────────────────────────────
    const flowLineCount = 0
    interface FlowLine {
      amplitude: number; frequency: number; phase: number
      y: number; speed: number; opacity: number; isPurple: boolean
    }
    const flowLines: FlowLine[] = []
    for (let i = 0; i < flowLineCount; i++) {
      flowLines.push({
        amplitude: 0.15 + Math.random() * 0.3,
        frequency: 0.6 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        y: Math.random(),
        speed: 0.0002 + Math.random() * 0.0004,
        opacity: 0.04 + Math.random() * 0.05,
        isPurple: i < 7,
      })
    }

    // ── WAVE GRID ────────────────────────────────────────────────────────────
    const gridCols = 10, gridRows = 7
    interface GridPoint { baseX: number; baseY: number; amplitude: number; speed: number; phase: number }
    const gridPoints: GridPoint[][] = []
    for (let r = 0; r < gridRows; r++) {
      gridPoints[r] = []
      for (let c = 0; c < gridCols; c++) {
        gridPoints[r][c] = {
          baseX: c / (gridCols - 1), baseY: r / (gridRows - 1),
          amplitude: 0.04 + Math.random() * 0.08,
          speed: 0.005 + Math.random() * 0.007,
          phase: Math.random() * Math.PI * 2,
        }
      }
    }

    // ── SHOOTING STARS ───────────────────────────────────────────────────────
    const maxShootingStars = 7
    interface ShootingStar {
      x: number; y: number; vx: number; vy: number
      tailLength: number; headGlow: number; speed: number
      life: number; maxLife: number; isPurple: boolean
    }
    const shootingStars: ShootingStar[] = []
    let lastShootingStarTime = 0
    let nextShootingStarDelay = 1500 + Math.random() * 2000

    function spawnShootingStar() {
      const angle = (35 + Math.random() * 20) * Math.PI / 180
      const speed = 0.003 + Math.random() * 0.003
      shootingStars.push({
        x: Math.random() * 0.7, y: Math.random() * 0.6,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        tailLength: 0.06 + Math.random() * 0.08,
        headGlow: 5, speed, life: 0, maxLife: 1,
        isPurple: shootingStars.length % 2 === 0,
      })
    }

    // HSL (0–1 range) to RGB 0–255
    function hslToRgb(h: number, s: number, l: number): [number, number, number] {
      const a = s * Math.min(l, 1 - l)
      const f = (n: number) => {
        const k = (n + h * 12) % 12
        return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
      }
      return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
    }

    let t = 0

    function draw() {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // ── ORBS (soft radial gradient glow) ─────────────────────────────────
      for (const orb of orbData) {
        // Drift
        orb.driftAngle += orb.driftSpeed
        orb.x += Math.cos(orb.driftAngle) * 0.00015
        orb.y += Math.sin(orb.driftAngle * 0.7) * 0.0001
        // Wrap
        if (orb.x < -0.3) orb.x = 1.2
        if (orb.x > 1.3) orb.x = -0.2
        if (orb.y < -0.3) orb.y = 1.2
        if (orb.y > 1.3) orb.y = -0.2

        // Pulse radius
        const pulse = Math.sin(t * orb.pulseSpeed + orb.pulsePhase)
        const radius = orb.radius * (1 + pulse * 0.12)

        // Constrained hue oscillation — never leaves the valid range
        const hueOsc = Math.sin(t * orb.hueSpeed + orb.huePhase) * 0.5 + 0.5 // 0–1
        const hueRange = orb.hueRange[1] - orb.hueRange[0]
        const hueDeg = orb.hueRange[0] + hueOsc * hueRange // stays within [hueMin, hueMax]
        const h360 = hueDeg / 360

        const [r, g, b] = hslToRgb(h360, 1, 0.55)
        const px = orb.x * w
        const py = orb.y * h

        // Radial gradient: full color + opacity 0.60 at centre → transparent at edge
        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius)
        grad.addColorStop(0,    `rgba(${r},${g},${b},${orb.baseOpacity})`)
        grad.addColorStop(0.35, `rgba(${r},${g},${b},${orb.baseOpacity * 0.5})`)
        grad.addColorStop(0.65, `rgba(${r},${g},${b},0.10)`)
        grad.addColorStop(1,    `rgba(${r},${g},${b},0)`)

        ctx.beginPath()
        ctx.arc(px, py, radius, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      // ── STARS ────────────────────────────────────────────────────────────
      for (const s of starData) {
        s.x += s.driftX
        if (s.x > 1) s.x = 0

        const twinkle = Math.sin(t * s.twinkleSpeed + s.twinklePhase)
        const alpha = s.opacity * (0.5 + 0.5 * twinkle)
        const px = s.x * w
        const py = s.y * h

        ctx.beginPath()
        ctx.arc(px, py, s.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()

        if (s.size >= sparkleThreshold) {
          const crossLen = s.size * 1.5
          const crossAlpha = alpha * 0.45
          ctx.strokeStyle = `rgba(255,255,255,${crossAlpha})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(px - crossLen, py); ctx.lineTo(px + crossLen, py); ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(px, py - crossLen); ctx.lineTo(px, py + crossLen); ctx.stroke()
        }
      }

      // ── DIAMOND SPARKLES ─────────────────────────────────────────────────
      for (const sp of sparkleData) {
        const pulse = Math.sin(t * sp.pulseSpeed + sp.pulsePhase)
        const alpha = sp.opacity * (0.5 + 0.5 * pulse)
        const size = sp.size * (0.85 + 0.15 * pulse)
        const px = sp.x * w
        const py = sp.y * h
        const color = sp.isPurple ? '90,60,200' : '4,157,255'

        ctx.save()
        ctx.translate(px, py)
        ctx.rotate(Math.PI / 4)
        ctx.fillStyle = `rgba(${color},${alpha})`
        ctx.fillRect(-size * 0.5, -size * 0.5, size, size)
        ctx.restore()
      }

      // ── ENERGY NODES ─────────────────────────────────────────────────────
      if (!isMobile) {
        for (const node of nodeData) {
          node.x += node.vx; node.y += node.vy
          if (node.x < 0 || node.x > 1) node.vx *= -1
          if (node.y < 0 || node.y > 1) node.vy *= -1

          for (const other of nodeData) {
            if (node === other) continue
            const dx = (node.x - other.x) * w
            const dy = (node.y - other.y) * h
            const dist = Math.sqrt(dx * dx + dy * dy)
            const threshold = 2.2 * (w / 10)
            if (dist < threshold) {
              const alpha = (1 - dist / threshold) * 0.6
              const grad = ctx.createLinearGradient(node.x * w, node.y * h, other.x * w, other.y * h)
              grad.addColorStop(0, `rgba(${node.isPurple ? '80,50,190' : '4,157,255'},${alpha})`)
              grad.addColorStop(1, `rgba(${other.isPurple ? '80,50,190' : '4,157,255'},${alpha})`)
              ctx.beginPath()
              ctx.moveTo(node.x * w, node.y * h); ctx.lineTo(other.x * w, other.y * h)
              ctx.strokeStyle = grad; ctx.lineWidth = 1; ctx.stroke()
            }
          }
          ctx.beginPath()
          ctx.arc(node.x * w, node.y * h, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = node.isPurple ? '#4A30C8' : '#0C128D'
          ctx.fill()
        }
      }

      // ── FLOW LINES ───────────────────────────────────────────────────────
      if (!isMobile) {
        for (const line of flowLines) {
          line.y -= line.speed
          if (line.y < -0.1) line.y = 1.1
          line.phase += 0.01
          ctx.beginPath()
          ctx.lineWidth = 0.6
          ctx.strokeStyle = `rgba(${line.isPurple ? '80,50,190' : '4,157,255'},${line.opacity})`
          for (let x = 0; x <= w; x += 3) {
            const frac = x / w
            const yOff = Math.sin(frac * Math.PI * 2 * line.frequency + line.phase) * line.amplitude * h
            const py = line.y * h + yOff
            if (x === 0) ctx.moveTo(x, py); else ctx.lineTo(x, py)
          }
          ctx.stroke()
        }
      }

      // ── WAVE GRID ────────────────────────────────────────────────────────
      for (let r = 0; r < gridRows; r++) {
        ctx.beginPath(); ctx.lineWidth = 0.6; ctx.strokeStyle = 'rgba(70,40,180,0.04)'
        for (let c = 0; c < gridCols; c++) {
          const gp = gridPoints[r][c]
          const osc = Math.sin(t * gp.speed + gp.phase) * gp.amplitude
          const px = gp.baseX * w; const py = (gp.baseY + osc) * h
          if (c === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
      for (let c = 0; c < gridCols; c++) {
        ctx.beginPath(); ctx.lineWidth = 0.6; ctx.strokeStyle = 'rgba(12,18,141,0.035)'
        for (let r = 0; r < gridRows; r++) {
          const gp = gridPoints[r][c]
          const osc = Math.sin(t * gp.speed + gp.phase) * gp.amplitude
          const px = gp.baseX * w; const py = (gp.baseY + osc) * h
          if (r === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // ── SHOOTING STARS ───────────────────────────────────────────────────
      const now = performance.now()
      if (now - lastShootingStarTime > nextShootingStarDelay && shootingStars.length < maxShootingStars) {
        spawnShootingStar()
        lastShootingStarTime = now
        nextShootingStarDelay = 1500 + Math.random() * 2000
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        ss.x += ss.vx; ss.y += ss.vy; ss.life += ss.speed * 0.5
        if (ss.life >= ss.maxLife || ss.x > 1.2 || ss.y > 1.2) { shootingStars.splice(i, 1); continue }

        let alpha = 1
        if (ss.life < 0.12) alpha = ss.life / 0.12
        else if (ss.life > 0.65) alpha = 1 - (ss.life - 0.65) / 0.35

        const tailColor = ss.isPurple ? '80,50,190' : '4,157,255'
        const tx = ss.x * w; const ty = ss.y * h
        const tailLen = ss.tailLength * w
        const angle = Math.atan2(ss.vy, ss.vx)

        const tailGrad = ctx.createLinearGradient(
          tx - Math.cos(angle) * tailLen, ty - Math.sin(angle) * tailLen, tx, ty
        )
        tailGrad.addColorStop(0, `rgba(${tailColor},0)`)
        tailGrad.addColorStop(1, `rgba(${tailColor},${alpha * 0.8})`)
        ctx.beginPath()
        ctx.moveTo(tx - Math.cos(angle) * tailLen, ty - Math.sin(angle) * tailLen)
        ctx.lineTo(tx, ty); ctx.strokeStyle = tailGrad; ctx.lineWidth = 1.5; ctx.stroke()

        const headGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, ss.headGlow)
        headGrad.addColorStop(0, `rgba(255,255,255,${alpha})`)
        headGrad.addColorStop(1, `rgba(255,255,255,0)`)
        ctx.beginPath(); ctx.arc(tx, ty, ss.headGlow, 0, Math.PI * 2)
        ctx.fillStyle = headGrad; ctx.fill()
      }

      t += 1
    }

    let lastDraw = 0
    const FRAME_MS = 1000 / 30

    function loop(ts: number) {
      animFrameId = requestAnimationFrame(loop)
      if (ts - lastDraw < FRAME_MS) return
      lastDraw = ts
      draw()
    }

    // Defer start — let hydration + JS parse finish first
    const startTimer = setTimeout(() => {
      animFrameId = requestAnimationFrame(loop)
    }, 500)

    function onResize() {
      canvas.width = W()
      canvas.height = H()
      // Recalculate orb radii on resize
      for (const orb of orbData) {
        orb.radius = W() * (0.18 + Math.random() * 0.22)
      }
    }
    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(startTimer)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animFrameId)
      canvas.remove()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
