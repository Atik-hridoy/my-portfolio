"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Detect theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }
    
    checkTheme()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Code characters - programming symbols
    const chars = "01{}[]()<>/\\;:.,|_-+=*&^%$#@!~`\"'?".split("")
    
    const fontSize = isMobile ? 12 : 14
    const columns = Math.floor(canvas.width / fontSize)
    
    // Array to track y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Grid lines
    const gridSize = isMobile ? 40 : 30
    
    let animationFrameId: number
    let frameCount = 0

    // Theme-based colors
    const colors = isDark ? {
      bg: 'rgba(3, 7, 18, 0.08)',
      grid: 'rgba(6, 182, 212, 0.03)',
      code: 'rgba(6, 182, 212, 0.6)',
      codeHead: 'rgba(34, 211, 238, 1)',
    } : {
      bg: 'rgba(255, 255, 255, 0.15)',
      grid: 'rgba(6, 182, 212, 0.08)',
      code: 'rgba(6, 182, 212, 0.4)',
      codeHead: 'rgba(6, 182, 212, 0.8)',
    }

    function drawGrid() {
      if (!ctx || !canvas) return
      
      ctx.strokeStyle = colors.grid
      ctx.lineWidth = 0.5
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      
      // Fade effect for trail
      ctx.fillStyle = colors.bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid periodically
      if (frameCount % 60 === 0) {
        drawGrid()
      }
      
      // Draw code rain
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        // Color gradient - brighter at the head
        const y = drops[i] * fontSize
        const opacity = Math.min(1, (canvas.height - y) / canvas.height + 0.3)
        
        // Cyan color for code
        ctx.fillStyle = colors.code.replace('0.6', String(opacity * 0.6))
        ctx.fillText(char, i * fontSize, y)
        
        // Brighter head
        if (drops[i] * fontSize > fontSize) {
          ctx.fillStyle = colors.codeHead.replace(/[\d.]+\)$/, `${opacity})`)
          ctx.fillText(char, i * fontSize, y)
        }
        
        // Reset drop randomly or when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        // Move drop down
        drops[i]++
      }
      
      frameCount++
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial grid draw
    drawGrid()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize)
      drops.length = newColumns
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.random() * -100
        }
      }
      
      drawGrid()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />
}
