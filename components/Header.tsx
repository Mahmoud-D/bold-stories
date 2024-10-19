'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import AnimatedHamburgerButton from './AnimatedHamburgerButton'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    duration: 2,
    transition: {
      staggerChildren: 0.2, // Staggering the children animation by 0.1s
      stiffness: 100,
      damping: 15
    }
  },
  closed: {
    opacity: 0,
    // duration: 2,

    x: '100%',
    transition: { stiffness: 100, damping: 15 }
  }
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7 }
  },
  closed: {
    opacity: 0,
    y: 50, // Start from 20px below
    x: 50,
    transition: { duration: 0.7 }
  }
}

const desktopMenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Each child animates with 0.2s delay
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  closed: {
    opacity: 0,
    y: -20, // Items start 20px above
    transition: { duration: 0.3, ease: 'easeIn' }
  }
}

const descitemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 }
}

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const drawerRef = useRef<HTMLUListElement>(null)

  const toggleMenu = () => setOpenDrawer((prev) => !prev)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="dark:bb bb fixed z-30 h-[60px] w-full backdrop-blur-[10px]">
      <div className="bl flex h-full w-full max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <a href="/" className="br p-[22px]">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0L15 7.999H5L10 0Z" fill="#F43333"></path>
              <path d="M5 7.99902L10 15.998H0L5 7.99902Z" fill="#F43333"></path>
              <path
                d="M15 7.99902L20 15.998H10L15 7.99902Z"
                fill="#F43333"
              ></path>
            </svg>
          </a>
          <a href="/" className="capitalize">
            riangle
          </a>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial="closed"
          animate="open"
          variants={desktopMenuVariants}
          className="hidden items-center sm:flex"
        >
          {['Work', 'About', 'Stories', 'Contact'].map((item) => (
            <motion.li
              key={item}
              variants={descitemVariants}
              className="br bl p-4"
            >
              <a href="#" className="text-lg font-medium">
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} className="p-6">
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </button>
          </motion.li>
        </motion.ul>

        {/* Animated Burger Button for Mobile */}
        <div className="my-auto block pr-2 sm:hidden">
          <AnimatedHamburgerButton active={openDrawer} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <motion.ul
        ref={drawerRef}
        initial="closed"
        animate={openDrawer ? 'open' : 'closed'}
        variants={menuVariants}
        className="dark:bg-darkBackground fixed right-0 top-[70px] h-[calc(100vh-70px)] w-full bg-white sm:hidden"
      >
        {['Work', 'About', 'Stories', 'Contact'].map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="w-full border-b border-white/10 py-7 text-center"
          >
            <a href="#" className="block text-3xl font-semibold">
              {item}
            </a>
          </motion.li>
        ))}

        <motion.li
          variants={itemVariants}
          className="flex w-full cursor-pointer items-center justify-center py-6 text-center"
        >
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <BsSun /> : <BsMoon />}
          </button>
        </motion.li>
      </motion.ul>
    </header>
  )
}

export default Header
