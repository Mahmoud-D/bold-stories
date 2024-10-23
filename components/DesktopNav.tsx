import { motion } from 'framer-motion'
import ToggleThemeButton from './toggleThemeButton'

import {
  desktopItemVariants,
  desktopMenuVariants
} from '@/animations/header-variants'
import { navLinks } from '@/data'


const DesktopNav = () => {
  return (
    <motion.ul
      initial="closed"
      animate="open"
      variants={desktopMenuVariants}
      className="hidden items-center sm:flex"
    >
      {navLinks.map((item) => (
        <motion.li
          key={item}
          variants={desktopItemVariants}
          className="br bl p-4"
        >
          <a href="#" className="text-sm font-medium uppercase">
            {item}
          </a>
        </motion.li>
      ))}

      <motion.li variants={desktopItemVariants} className="p-6">
        {/* Theme Toggle with Fade-Out-Up Animation */}
        <ToggleThemeButton />
      </motion.li>
    </motion.ul>
  )
}

export default DesktopNav
