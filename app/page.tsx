'use client'

import { useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Stories from '@/components/Stories'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CutomCursor'

export default function Home() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [])

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col">
            <Header />
            {/* <CustomCursor /> */}
            <main className="mt-20">
              <Heading />
              <Stories />
            </main>

            <Footer />
          </div>
        </>
      )}
    </div>
  )
}
