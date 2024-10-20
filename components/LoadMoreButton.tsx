import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LoadMoreButton = () => {
  const spanRef = useRef(null)
  const isInView = useInView(spanRef, { once: true })

  return (
    <motion.div
      className="my-40 text-center sm:mt-40"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative inline-block">
        <motion.button className="relative pb-2 text-5xl transition-colors duration-300 font-magnita hover:text-red-500 sm:text-4xl">
          Load more
        </motion.button>

        <motion.span
          ref={spanRef}
          className="absolute bottom-0 left-1/2 h-0.5 bg-red-500"
          initial={{ width: 0 }}
          animate={
            isInView ? { width: '100%', left: '0%' } : { width: 0, left: '50%' }
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}

export default LoadMoreButton
