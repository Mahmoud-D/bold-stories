import { VARIANTS } from '@/animations/hamburger-button-variants'
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
        className="relative h-10 w-10 rounded-full bg-white/0 transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-black dark:bg-white"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />

        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-black dark:bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
      </motion.button>
    </MotionConfig>
  )
}

export default AnimatedHamburgerButton
