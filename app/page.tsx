'use client'

import { useEffect, useState } from 'react'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Stories from '@/components/Stories'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Hide loader after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CustomCursor /> {/* Render CustomCursor at the top level */}
          <div className="flex flex-col">
            <Header />
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
