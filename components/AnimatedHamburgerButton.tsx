import React from 'react'
import { MotionConfig, motion } from 'framer-motion'

interface AnimatedHamburgerButtonProps {
  active: boolean
  toggle: () => void
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  active,
  toggle
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={toggle}
        className="relative w-10 h-10 transition-colors rounded-full bg-white/0"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute w-10 h-1 bg-black dark:bg-white"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />

        <motion.span
          variants={VARIANTS.middle}
          className="absolute w-10 h-1 bg-black dark:bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        {/* <motion.span
          variants={VARIANTS.bottom}
          className="absolute w-5 h-1 bg-white"
          style={{ left: '50%', x: '-50%', top: '65%', y: '-50%' }}
        /> */}
      </motion.button>
    </MotionConfig>
  )
}

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%']
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%']
    }
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg']
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg']
    }
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%'
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: '50%'
    }
  }
}

export default AnimatedHamburgerButton
