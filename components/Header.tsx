'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import AnimatedHamburgerButton from './AnimatedHamburgerButton'

import { BsMoon } from 'react-icons/bs'
import logo from '../assets/logo.svg'

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

  return (
    <header className="container fixed z-30 h-[70px] w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="flex h-full w-full max-w-7xl justify-between px-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="w-16">
            <Image
              src={logo}
              alt="Logo"
              className="w-5 border-solid border-[#ffffff1a]"
            />
          </a>
          <a href="/" className="w-[162px] capitalize">
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
              className="br bl p-6"
            >
              <a href="#" className="text-lg font-medium">
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} className="p-6">
            <a>
              <BsMoon />
            </a>
          </motion.li>
        </motion.ul>

        {/* Animated Burger Button for Mobile */}
        <div className="my-auto block sm:hidden">
          <AnimatedHamburgerButton active={openDrawer} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <motion.ul
        ref={drawerRef}
        initial="closed"
        animate={openDrawer ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed right-0 top-[70px] h-[calc(100vh-70px)] w-full bg-black text-white sm:hidden"
      >
        {['Work', 'About', 'Stories', 'Contact'].map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="w-full border-b border-white/10 py-6 text-center"
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
          <BsMoon size={24} />
        </motion.li>
      </motion.ul>
    </header>
  )
}

export default Header
