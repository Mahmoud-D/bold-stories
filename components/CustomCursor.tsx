'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const cursorX = useMotionValue(-100) // Start off-screen to prevent flashing at (0, 0)
  const cursorY = useMotionValue(-100)
  const [isHovered, setIsHovered] = useState(false) // Track hover state
  const [isCursorVisible, setCursorVisible] = useState(false) // Control visibility
  const [isMobile, setIsMobile] = useState(false) // Detect mobile devices

  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isCursorVisible) setCursorVisible(true) // Show cursor only after movement
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY, isCursorVisible])

  // Detect if the user is on a mobile device
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsMobile(/mobile|tablet|ip(ad|hone|od)|android/i.test(userAgent))
  }, [])

  // Add hover event listeners for interactive elements
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

  // Don't render the cursor on mobile devices
  if (isMobile) return null

  return (
    isCursorVisible && (
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          position: 'fixed',
          top: -10,
          left: -17,
          zIndex: 9999,
          pointerEvents: 'none',
          borderRadius: '50%',
          transition: 'border 0.3s ease, background-color 0.3s ease'
        }}
        className={`h-10 w-10 border-2 border-[#F43333] ${
          isHovered ? 'border-none bg-[#F43333] opacity-[.5]' : '#F43333'
        }`}
        animate={{
          scale: isHovered ? 2 : 1 // Scale the cursor on hover
        }}
      />
    )
  )
}

export default CustomCursor
