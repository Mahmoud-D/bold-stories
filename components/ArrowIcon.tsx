import React from 'react'
import { motion } from 'framer-motion'

const ArrowIcon: React.FC = () => {
  const arrowVariants = {
    animate: {
      x: [0, 6, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  const opacityVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  return (
    <motion.em className="flex items-center justify-center">
      <motion.svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={arrowVariants}
        animate="animate"
      >
        <path
          d="M13.0859 5.46875L20.1172 12.5L13.0859 19.5312M19.1406 12.5H4.88281"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      {[1, 2].map((_, index) => (
        <motion.svg
          key={index}
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={opacityVariants}
          animate="animate"
        >
          <path
            d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
            stroke="#F43333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </motion.em>
  )
}

export default ArrowIcon
