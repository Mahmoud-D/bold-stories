import { useEffect, useState, useCallback, useRef } from 'react'
import { animate } from 'framer-motion'

export const useLoaderAnimation = (setCounter: (value: number) => void) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const scopeRef = useRef<HTMLDivElement>(null)

  const animateLoader = useCallback(async () => {
    if (!scopeRef.current) return

    const getElement = (selector: string): Element | null => {
      return scopeRef.current?.querySelector(selector) || null
    }

    try {
      const coverElement = getElement('.cover')
      const imgElement = getElement('.img')
      const counterElement = getElement('.counter')

      if (!coverElement || !imgElement || !counterElement) {
        console.error('Required elements not found')
        return
      }

      // Initial animations
      await Promise.all([
        animate(coverElement, { height: '3px', top: '50%' }, { duration: 0.5 }),
        animate(imgElement, { scale: 1, opacity: 1 }, { duration: 0.5 }),
        animate(counterElement, { scale: 1, opacity: 1 }, { duration: 0.5 })
      ])

      // Counter increment animation (value: 0 to 100)
      const counterAnimation = animate(0, 100, {
        duration: 0.5,
        onUpdate: (latest) => setCounter(Math.round(latest))
      })

      // Simultaneous animations
      await Promise.all([
        animate(imgElement, { top: '22px', width: '20px' }, { duration: 0.5 }),
        animate(coverElement, { top: '58px' }, { duration: 0.5 }),
        animate(counterElement, { top: '25%' }, { duration: 0.5 }),
        counterAnimation
      ])

      // Fade out animations
      await Promise.all([
        animate(imgElement, { left: '0rem', opacity: 0 }, { duration: 1 }),
        animate(counterElement, { opacity: 0, scale: 0 }, { duration: 1 })
      ])

      // Final cover animation
      await animate(coverElement, { width: 0 }, { duration: 1.5, delay: 0.5 })

      // Hide the loader
      setIsVisible(false)
    } catch (error) {
      console.error('Animation error:', error)
      setIsVisible(false)
    }
  }, [setCounter])

  useEffect(() => {
    if (isReady && scopeRef.current) {
      // Start animation after a short delay to ensure the component is mounted
      const timeoutId = setTimeout(() => {
        animateLoader()
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [animateLoader, isReady])

  return { scopeRef, isVisible, setIsReady }
}
