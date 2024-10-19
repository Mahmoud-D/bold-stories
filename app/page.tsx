'use client'
import Card from '@/components/Card'
// import Header from '@/components/converted/Header'
import CustomCursor from '@/components/CutomCursor'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { AnimatePresence, motion, stagger, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [])
  const divVariants = {
    hidden: {
      y: -40,
      border: '2px solid transparent'
    },
    visible: {
      opacity: 1,
      border: ['2px solid transparent', '2px solid white'],

      transition: {
        // duration: 1,
        when: 'afterChildren',
        staggerChildren: 0.2
      }
    }
  }
  const h1Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      y: 40,
      top: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }
  const controls = useAnimation() // Animation controls for sequence
  useEffect(() => {
    controls.start('complete')
  }, [controls])
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleCursor = (e: MouseEvent) => {
    // console.log(e.clientX, e.clientY);
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleCursor)

    return () => {
      window.removeEventListener('mousemove', handleCursor)
    }
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-[3000px]">
      <div className="flex">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            {/* <CustomCursor /> */}
            <main className="">
              <h1 className="mt-20 text-center text-4xl">
                Welcome to the App!
              </h1>
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}
