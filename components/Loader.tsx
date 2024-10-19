import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoaderAnimation } from '../hooks/useLoaderAnimation'
import Image from 'next/image'
import logo from '../assets/logo.svg' // Adjust the path if necessary

const Loader = () => {
  const [counter, setCounter] = useState(0)
  const { scopeRef, isVisible, setIsReady } = useLoaderAnimation(setCounter)

  useEffect(() => {
    // Set isReady to true after the component has mounted and the ref is set
    if (scopeRef.current) {
      setIsReady(true)
    }
  }, [scopeRef, setIsReady])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={scopeRef}
          className="fixed inset-0 z-30 flex flex-col items-center justify-evenly"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="cover fixed inset-0 z-[31] bg-red-500"
            initial={{ height: '100%' }}
          />
          <motion.div
            className="img absolute top-[20%] z-[32]"
            initial={{ scale: 0, opacity: 0 }}
          >
            <Image src={logo} alt="Logo" width={200} height={200} />
          </motion.div>
          <motion.div
            className="counter absolute top-[60%] z-[32] font-serif text-7xl font-bold text-red-500"
            initial={{ scale: 0, opacity: 0 }}
          >
            {counter.toFixed()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
