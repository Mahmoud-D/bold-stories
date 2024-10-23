export const menuVariants = {
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

export const itemVariants = {
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

export const desktopMenuVariants = {
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

export const desktopItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 }
}

export const themeSunIconVariants = {
  initial: { opacity: 0, y: -10 }, // Start slightly below
  animate: { opacity: 1, y: 0, transition: { stiffness: 400, duration: 0.05 } }, // Fade in
  exit: { opacity: 0, y: 10, transition: { stiffness: 400, duration: 0.05 } } // Fade out and move up
}
export const themeMoonIconVariants = {
  initial: { opacity: 0, y: 10 }, // Start slightly below
  animate: { opacity: 1, y: 0, transition: { stiffness: 400, duration: 0.05 } }, // Fade in
  exit: { opacity: 0, y: -10, transition: { stiffness: 400, duration: 0.05 } } // Fade out and move up
}
