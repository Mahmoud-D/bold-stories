'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false) // Track hover state

  const springX = useSpring(cursorX, { stiffness: 120, damping: 15 })
  const springY = useSpring(cursorY, { stiffness: 120, damping: 15 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  // Add global hover event listeners to detect element hover.
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const hoverableElements = document.querySelectorAll('a, button, .hoverable')
    hoverableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        borderRadius: '50%',
        transition: 'border 0.3s ease, background-color 0.3s ease'
      }}
      className={`h-10 w-10 border-2 border-[#F43333] ${
        isHovered ? 'border-none bg-[#F43333] opacity-[.5]' : '#F43333'
      }`}
      animate={{
        scale: isHovered ? 1.5 : 1 // Scale the cursor on hover
      }}
    />
  )
}

export default CustomCursor
