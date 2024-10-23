import { motion } from 'framer-motion'
import ToggleThemeButton from './toggleThemeButton'

import { itemVariants, menuVariants } from '@/animations/header-variants'
import { navLinks } from '@/data'

type MobileNavProps = {
  openDrawer: boolean
  drawerRef: React.RefObject<HTMLUListElement>
}
const MobileNav = ({ openDrawer, drawerRef }: MobileNavProps) => {
  return (
    <motion.ul
      ref={drawerRef}
      initial="closed"
      animate={openDrawer ? 'open' : 'closed'}
      variants={menuVariants}
      className="fixed right-0 top-[70px] h-[calc(100vh-70px)] w-full bg-white dark:bg-darkBackground sm:hidden"
    >
      {navLinks.map((item) => (
        <motion.li
          key={item}
          variants={itemVariants}
          className="bb w-full py-7 text-center uppercase"
        >
          <a href="#" className="block font-magnita text-5xl">
            {item}
          </a>
        </motion.li>
      ))}

      <motion.li
        variants={itemVariants}
        className="flex w-full cursor-pointer items-center justify-center py-6 text-center"
      >
        <ToggleThemeButton />
      </motion.li>
    </motion.ul>
  )
}

export default MobileNav
