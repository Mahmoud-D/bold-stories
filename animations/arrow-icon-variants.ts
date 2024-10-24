// Main Arrow: Pushes the first small arrow
export const mainArrowVariants = {
  animate: {
    x: [0, 10, 0], // Move forward and reset
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
}

// First Small Arrow: Moved by the main arrow
export const firstSmallArrowVariants = {
  animate: {
    x: [0, 8, 0], // Moves slightly later than the main arrow
    opacity: [0.3, 1, 0.3], // Fade in when moving, fade out when idle
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.2, // Starts after the main arrow
      repeat: Infinity
    }
  }
}

// Second Small Arrow: Moved by the first small arrow
export const secondSmallArrowVariants = {
  animate: {
    x: [0, 6, 0], // Moves slightly later than the first small arrow
    opacity: [0.3, 1, 0.3], // Same fading effect
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.4, // Starts after the first small arrow
      repeat: Infinity
    }
  }
}
