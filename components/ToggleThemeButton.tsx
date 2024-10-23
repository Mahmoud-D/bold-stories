import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

import {
  themeMoonIconVariants,
  themeSunIconVariants
} from '@/animations/header-variants'

import { BsMoon, BsSun } from 'react-icons/bs'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      key={theme} // Re-render and trigger animation on theme change
      initial="initial"
      animate="animate"
      exit="exit"
      variants={theme === 'dark' ? themeSunIconVariants : themeMoonIconVariants}
    >
      {theme === 'dark' ? <BsSun /> : <BsMoon />}
    </motion.button>
  )
}

export default ToggleThemeButton
