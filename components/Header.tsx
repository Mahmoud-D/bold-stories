'use client'
import { useState, useRef } from 'react'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import AnimatedHamburgerButton from './AnimatedHamburgerButton'
import Icon from './Icon'
import Logo from './Logo'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const drawerRef = useRef<HTMLUListElement>(null)

  const toggleMenu = () => setOpenDrawer((prev) => !prev)

  return (
    <header className="dark:dark-bb light-bb fixed z-30 h-[60px] w-full backdrop-blur-[10px]">
      <div className="light-bl bl dark:dark-bl flex h-full w-full max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-black dark:text-white">
          <a href="/" className="light-br br dark:dark:br p-[22px]">
            <Icon />
          </a>
          <a href="/" className="ml-3">
            <Logo />
          </a>
        </div>

        {/* Desktop Menu */}
        <DesktopNav />

        {/* Animated Burger Button for Mobile */}
        <div className="my-auto block pr-2 sm:hidden">
          <AnimatedHamburgerButton active={openDrawer} toggle={toggleMenu} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <MobileNav openDrawer={openDrawer} drawerRef={drawerRef} />
    </header>
  )
}
export default Header
