'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    let animFrameId: number
    let renderer: import('three').WebGLRenderer
    let scene: import('three').Scene
    let camera: import('three').PerspectiveCamera

    // Detect mobile for reduced effects
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isTablet = window.matchMedia('(max-width: 1023px)').matches

    const W = () => window.innerWidth
    const H = () => window.innerHeight

    async function init() {
      const THREE = await import('three')

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W(), H())
      renderer.setClearColor(0x000000, 0)
      mountRef.current!.appendChild(renderer.domElement)

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, W() / H(), 0.1, 1000)
      camera.position.z = 5

      // ── ORBS ────────────────────────────────────────────────────────────
      const orbCount = isMobile ? 5 : 8
      const orbsGroup = new THREE.Group()
      scene.add(orbsGroup)

      const orbData: {
        mesh: import('three').Mesh
        driftSpeed: number
        driftAngle: number
        pulseSpeed: number
        pulsePhase: number
        baseSize: number
        hueBase: number
        hueSpeed: number
        hueRange: [number, number]
      }[] = []

      for (let i = 0; i < orbCount; i++) {
        const size = 1.2 + Math.random() * 1.6 // 1.2–2.8
        const isBlue = i >= Math.floor(orbCount / 2)
        const hueBase = isBlue
          ? 205 + Math.random() * 20  // 205–225
          : 255 + Math.random() * 30  // 255–285
        const hue = hueBase / 360
        const color = new THREE.Color().setHSL(hue, 1, 0.55)

        const geo = new THREE.SphereGeometry(size, 32, 32)
        const mat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.35 + Math.random() * 0.3,
        })
        const mesh = new THREE.Mesh(geo, mat)

        // Spread across screen
        mesh.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          -2 - Math.random() * 3
        )

        orbsGroup.add(mesh)
        orbData.push({
          mesh,
          driftSpeed: 0.0003 + Math.random() * 0.0005,
          driftAngle: Math.random() * Math.PI * 2,
          pulseSpeed: 0.004 + Math.random() * 0.005,
          pulsePhase: Math.random() * Math.PI * 2,
          baseSize: size,
          hueBase,
          hueSpeed: 0.0002,
          hueRange: isBlue ? [205, 225] : [255, 285],
        })
      }

      // ── STARS ────────────────────────────────────────────────────────────
      const starCount = isMobile ? 150 : isTablet ? 200 : 300

      // Build star data
      const starData: {
        x: number
        y: number
        size: number
        opacity: number
        twinkleSpeed: number
        twinklePhase: number
        driftX: number
      }[] = []

      for (let i = 0; i < starCount; i++) {
        starData.push({
          x: Math.random(),
          y: Math.random(),
          size: 0.5 + Math.random() * 2.7, // 0.5–3.2px
          opacity: 0.3 + Math.random() * 0.7,
          twinkleSpeed: 0.004 + Math.random() * 0.018,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: 0.000015 + Math.random() * 0.000025,
        })
      }

      // Sort by size to find top 7%
      const sortedBySizeStar = [...starData].sort((a, b) => b.size - a.size)
      const sparkleThreshold = sortedBySizeStar[Math.floor(starCount * 0.07)].size

      // ── DIAMOND SPARKLES ─────────────────────────────────────────────────
      const sparkleCount = 35
      const sparkleData: {
        x: number
        y: number
        size: number
        pulseSpeed: number
        pulsePhase: number
        opacity: number
        isPurple: boolean
      }[] = []

      for (let i = 0; i < sparkleCount; i++) {
        sparkleData.push({
          x: Math.random(),
          y: Math.random(),
          size: 3 + Math.random() * 6, // 3–9px
          pulseSpeed: 0.008 + Math.random() * 0.012,
          pulsePhase: Math.random() * Math.PI * 2,
          opacity: 0.2 + Math.random() * 0.6,
          isPurple: Math.random() < 0.6,
        })
      }

      // ── ENERGY NODES ─────────────────────────────────────────────────────
      const nodeCount = isMobile ? 0 : 7
      const nodeData: {
        x: number
        y: number
        vx: number
        vy: number
        color: string
        isPurple: boolean
      }[] = []

      for (let i = 0; i < nodeCount; i++) {
        const speed = 0.0004 + Math.random() * 0.0008
        const angle = Math.random() * Math.PI * 2
        nodeData.push({
          x: Math.random(),
          y: Math.random(),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: i < 4 ? '#9f01f6' : '#021FC3',
          isPurple: i < 4,
        })
      }

      // ── FLOW LINES ───────────────────────────────────────────────────────
      const flowLineCount = isMobile ? 0 : 14
      const flowLines: {
        amplitude: number
        frequency: number
        phase: number
        y: number
        speed: number
        opacity: number
        isPurple: boolean
      }[] = []

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

      // ── WAVE GRID ────────────────────────────────────────────────────────
      const gridCols = 10
      const gridRows = 7
      type GridPoint = { baseX: number; baseY: number; amplitude: number; speed: number; phase: number }
      const gridPoints: GridPoint[][] = []

      for (let r = 0; r < gridRows; r++) {
        gridPoints[r] = []
        for (let c = 0; c < gridCols; c++) {
          gridPoints[r][c] = {
            baseX: c / (gridCols - 1),
            baseY: r / (gridRows - 1),
            amplitude: 0.04 + Math.random() * 0.08,
            speed: 0.005 + Math.random() * 0.007,
            phase: Math.random() * Math.PI * 2,
          }
        }
      }

      // ── SHOOTING STARS ───────────────────────────────────────────────────
      const maxShootingStars = 7
      type ShootingStar = {
        x: number; y: number
        vx: number; vy: number
        tailLength: number
        headGlow: number
        speed: number
        life: number
        maxLife: number
        isPurple: boolean
      }
      const shootingStars: ShootingStar[] = []
      let lastShootingStarTime = 0
      let nextShootingStarDelay = 1500 + Math.random() * 2000

      function spawnShootingStar() {
        const angle = (35 + Math.random() * 20) * Math.PI / 180
        const isPurple = shootingStars.length % 2 === 0
        const speed = 0.003 + Math.random() * 0.003
        const tailFraction = 0.06 + Math.random() * 0.08

        shootingStars.push({
          x: Math.random() * 0.7,
          y: Math.random() * 0.6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          tailLength: tailFraction,
          headGlow: 5,
          speed,
          life: 0,
          maxLife: 1,
          isPurple,
        })
      }

      // ── OVERLAY CANVAS ───────────────────────────────────────────────────
      // Use an extra 2D canvas overlaid on the Three.js canvas for 2D effects
      const canvas2d = document.createElement('canvas')
      canvas2d.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        pointer-events: none; z-index: 1;
      `
      canvas2d.width = W()
      canvas2d.height = H()
      mountRef.current!.appendChild(canvas2d)
      const ctx = canvas2d.getContext('2d')!

      let t = 0

      function draw() {
        t += 1
        const w = canvas2d.width
        const h = canvas2d.height

        ctx.clearRect(0, 0, w, h)

        // ── Stars ───────────────────────────────────────────────
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

          // Cross sparkle for top 7% by size
          if (s.size >= sparkleThreshold) {
            const crossLen = s.size * 1.5 // 3× radius = 3× (size/2)
            const crossAlpha = alpha * 0.45
            ctx.strokeStyle = `rgba(255,255,255,${crossAlpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(px - crossLen, py)
            ctx.lineTo(px + crossLen, py)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(px, py - crossLen)
            ctx.lineTo(px, py + crossLen)
            ctx.stroke()
          }
        }

        // ── Diamond sparkles ─────────────────────────────────────
        for (const sp of sparkleData) {
          const pulse = Math.sin(t * sp.pulseSpeed + sp.pulsePhase)
          const alpha = sp.opacity * (0.5 + 0.5 * pulse)
          const size = sp.size * (0.85 + 0.15 * pulse)
          const px = sp.x * w
          const py = sp.y * h
          const color = sp.isPurple ? '159,1,246' : '2,31,195'

          ctx.save()
          ctx.translate(px, py)
          ctx.rotate(Math.PI / 4)
          ctx.fillStyle = `rgba(${color},${alpha})`
          ctx.fillRect(-size * 0.5, -size * 0.5, size, size)
          ctx.restore()
        }

        // ── Energy nodes + connections ────────────────────────────
        if (!isMobile) {
          for (const node of nodeData) {
            node.x += node.vx
            node.y += node.vy
            if (node.x < 0 || node.x > 1) node.vx *= -1
            if (node.y < 0 || node.y > 1) node.vy *= -1

            // Draw connections
            for (const other of nodeData) {
              if (node === other) continue
              const dx = (node.x - other.x) * w
              const dy = (node.y - other.y) * h
              const dist = Math.sqrt(dx * dx + dy * dy)
              const threshold = 2.2 * (w / 10) // approximate unit to px
              if (dist < threshold) {
                const alpha = (1 - dist / threshold) * 0.6
                const grad = ctx.createLinearGradient(
                  node.x * w, node.y * h,
                  other.x * w, other.y * h
                )
                grad.addColorStop(0, `rgba(${node.isPurple ? '159,1,246' : '2,31,195'},${alpha})`)
                grad.addColorStop(1, `rgba(${other.isPurple ? '159,1,246' : '2,31,195'},${alpha})`)
                ctx.beginPath()
                ctx.moveTo(node.x * w, node.y * h)
                ctx.lineTo(other.x * w, other.y * h)
                ctx.strokeStyle = grad
                ctx.lineWidth = 1
                ctx.stroke()
              }
            }

            // Draw node dot
            ctx.beginPath()
            ctx.arc(node.x * w, node.y * h, 2.5, 0, Math.PI * 2)
            ctx.fillStyle = node.color
            ctx.fill()
          }
        }

        // ── Flow lines ──────────────────────────────────────────
        if (!isMobile) {
          for (const line of flowLines) {
            line.y -= line.speed
            if (line.y < -0.1) line.y = 1.1

            line.phase += 0.01

            ctx.beginPath()
            ctx.lineWidth = 0.6
            const color = line.isPurple ? '159,1,246' : '2,31,195'
            ctx.strokeStyle = `rgba(${color},${line.opacity})`

            for (let x = 0; x <= w; x += 3) {
              const frac = x / w
              const yOff = Math.sin(frac * Math.PI * 2 * line.frequency + line.phase) * line.amplitude * h
              const py = line.y * h + yOff
              if (x === 0) ctx.moveTo(x, py)
              else ctx.lineTo(x, py)
            }
            ctx.stroke()
          }
        }

        // ── Wave grid ────────────────────────────────────────────
        // Horizontal lines (purple)
        for (let r = 0; r < gridRows; r++) {
          ctx.beginPath()
          ctx.lineWidth = 0.6
          ctx.strokeStyle = `rgba(159,1,246,0.05)`
          for (let c = 0; c < gridCols; c++) {
            const gp = gridPoints[r][c]
            const osc = Math.sin(t * gp.speed + gp.phase) * gp.amplitude
            const px = gp.baseX * w
            const py = (gp.baseY + osc) * h
            if (c === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }
          ctx.stroke()
        }

        // Vertical lines (blue)
        for (let c = 0; c < gridCols; c++) {
          ctx.beginPath()
          ctx.lineWidth = 0.6
          ctx.strokeStyle = `rgba(2,31,195,0.035)`
          for (let r = 0; r < gridRows; r++) {
            const gp = gridPoints[r][c]
            const osc = Math.sin(t * gp.speed + gp.phase) * gp.amplitude
            const px = gp.baseX * w
            const py = (gp.baseY + osc) * h
            if (r === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }
          ctx.stroke()
        }

        // ── Shooting stars ──────────────────────────────────────
        const now = performance.now()
        if (
          now - lastShootingStarTime > nextShootingStarDelay &&
          shootingStars.length < maxShootingStars
        ) {
          spawnShootingStar()
          lastShootingStarTime = now
          nextShootingStarDelay = 1500 + Math.random() * 2000
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const ss = shootingStars[i]
          ss.x += ss.vx
          ss.y += ss.vy
          ss.life += ss.speed * 0.5

          if (ss.life >= ss.maxLife || ss.x > 1.2 || ss.y > 1.2) {
            shootingStars.splice(i, 1)
            continue
          }

          // Fade in first 12%, fade out last 35%
          let alpha = 1
          if (ss.life < 0.12) alpha = ss.life / 0.12
          else if (ss.life > 0.65) alpha = 1 - (ss.life - 0.65) / 0.35

          const tailColor = ss.isPurple ? '159,1,246' : '2,31,195'
          const tx = ss.x * w
          const ty = ss.y * h
          const tailLen = ss.tailLength * w
          const angle = Math.atan2(ss.vy, ss.vx)

          // Tail
          const tailGrad = ctx.createLinearGradient(
            tx - Math.cos(angle) * tailLen,
            ty - Math.sin(angle) * tailLen,
            tx, ty
          )
          tailGrad.addColorStop(0, `rgba(${tailColor},0)`)
          tailGrad.addColorStop(1, `rgba(${tailColor},${alpha * 0.8})`)

          ctx.beginPath()
          ctx.moveTo(tx - Math.cos(angle) * tailLen, ty - Math.sin(angle) * tailLen)
          ctx.lineTo(tx, ty)
          ctx.strokeStyle = tailGrad
          ctx.lineWidth = 1.5
          ctx.stroke()

          // Head glow
          const headGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, ss.headGlow)
          headGrad.addColorStop(0, `rgba(255,255,255,${alpha})`)
          headGrad.addColorStop(1, `rgba(255,255,255,0)`)
          ctx.beginPath()
          ctx.arc(tx, ty, ss.headGlow, 0, Math.PI * 2)
          ctx.fillStyle = headGrad
          ctx.fill()
        }
      }

      // Three.js orbs animation
      function animate() {
        animFrameId = requestAnimationFrame(animate)

        t += 1

        // Animate orbs
        for (const orb of orbData) {
          orb.driftAngle += orb.driftSpeed
          const pulse = Math.sin(t * orb.pulseSpeed + orb.pulsePhase)
          const scale = 1 + pulse * 0.12

          orb.mesh.position.x += Math.cos(orb.driftAngle) * 0.002
          orb.mesh.position.y += Math.sin(orb.driftAngle * 0.7) * 0.001
          orb.mesh.scale.setScalar(scale)

          // Hue cycling
          const currentHue = (orb.hueBase + t * orb.hueSpeed * 360) / 360
          ;(orb.mesh.material as import('three').MeshBasicMaterial).color.setHSL(
            currentHue % 1, 1, 0.55
          )
        }

        renderer.render(scene, camera)
        draw()
      }

      // Handle resize
      function onResize() {
        renderer.setSize(W(), H())
        camera.aspect = W() / H()
        camera.updateProjectionMatrix()
        canvas2d.width = W()
        canvas2d.height = H()
      }

      window.addEventListener('resize', onResize)
      animate()

      // Cleanup
      return () => {
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(animFrameId)

        // Dispose Three.js resources
        for (const orb of orbData) {
          orb.mesh.geometry.dispose()
          ;(orb.mesh.material as import('three').MeshBasicMaterial).dispose()
        }
        renderer.dispose()
        if (mountRef.current) {
          const canvases = mountRef.current.querySelectorAll('canvas')
          canvases.forEach(c => c.remove())
        }
      }
    }

    const cleanup = init()

    return () => {
      cleanup.then(fn => fn?.())
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
