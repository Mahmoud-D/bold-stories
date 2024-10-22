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
    <header className="dark:dark-bb light-bb fixed z-30 h-[60px] w-full backdrop-blur-[10px]">
      <div className="flex items-center justify-between w-full h-full light-bl bl dark:dark-bl max-w-7xl">
        {/* Logo Section */}
        <div
          className={` ${theme === 'dark' ? 'text-white' : 'text-black'} flex items-center gap-2`}
        >
          <a href="/" className="light-br br dark:dark:br p-[22px]">
            <Icon />
          </a>
          <a href="/" className="ml-3">
            <Logo />
          </a>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial="closed"
          animate="open"
          variants={desktopMenuVariants}
          className="items-center hidden sm:flex"
        >
          {navLinks.map((item) => (
            <motion.li key={item} variants={itemVariants} className="br bl p-4">
              <a href="#" className="text-sm font-medium uppercase">
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
        <div className="block pr-2 my-auto sm:hidden">
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
        {navLinks.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="w-full text-center uppercase bb py-7"
          >
            <a href="#" className="block text-5xl font-magnita">
              {item}
            </a>
          </motion.li>
        ))}

        <motion.li
          variants={itemVariants}
          className="flex items-center justify-center w-full py-6 text-center cursor-pointer"
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
