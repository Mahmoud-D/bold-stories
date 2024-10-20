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
          <a href="/" className="ml-3">
            <svg
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.91837 15.3958L2.59196 9.17898H1.83191V15.3958H0V0.701545H2.22168C3.5274 0.701545 4.93056 0.721039 6.09986 1.38364C7.32763 2.10471 8.02921 3.48839 8.02921 4.89155C8.02921 6.9963 6.62605 8.75024 4.50182 9.00359L9.14004 15.3958H6.91837ZM1.83191 7.6589H2.41656C4.28744 7.6589 6.31423 7.3081 6.31423 4.9695C6.31423 2.66987 4.13154 2.33858 2.31912 2.33858H1.83191V7.6589ZM14.8545 15.3958V0.701545H16.6864V15.3958H14.8545ZM24.1742 15.3958H22.2059L29.2217 0.0779297L36.2375 15.3958H34.2692L32.5932 11.7125H25.8502L24.1742 15.3958ZM26.6103 10.0365H31.8332L29.2217 4.09252L26.6103 10.0365ZM52.6511 11.5566V0.701545H54.483V15.9999L43.4526 4.44332V15.3958H41.6206V-3.05176e-05L52.6511 11.5566ZM74.8137 7.9902V8.57485C74.8137 12.6089 71.9684 15.7076 67.8563 15.7076C63.7443 15.7076 60.4312 12.1607 60.4312 8.08764C60.4312 3.85867 63.8222 0.389737 68.0512 0.389737C70.3313 0.389737 72.592 1.42263 74.0341 3.23504L72.7479 4.4628C71.6955 3.02066 69.9221 2.06574 68.1292 2.06574C64.8356 2.06574 62.2632 4.73564 62.2632 8.02917C62.2632 11.1083 64.7966 14.0316 67.9732 14.0316C70.2534 14.0316 72.7089 12.0633 72.7869 9.66619H68.9866V7.9902H74.8137ZM87.2516 13.7198V15.3958H80.9568V0.701545H82.7887V13.7198H87.2516ZM100.683 0.701545V2.37755H94.6225V6.4896H100.508V8.1656H94.6225V13.7198H100.683V15.3958H92.7906V0.701545H100.683Z"
                fill="#fff"
              ></path>
            </svg>
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
        className="fixed right-0 top-[70px] h-[calc(100vh-70px)] w-full bg-white dark:bg-darkBackground sm:hidden"
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
