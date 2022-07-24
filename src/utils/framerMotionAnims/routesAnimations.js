/**
 * FRAMER MOTION ANIMATION VARIANT FOR ROUTES
 */

export const defaultVariant = {
  hidden: {
    opacity: 0,
    filter: 'blur(5px)'
  },
  visible: {
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      delay: 0.5, 
      duration: 0.8
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeInOut'}
  }
}

export const noDelayVariant = {
  hidden: {
    opacity: 0,
    filter: 'blur(5px)'
  },
  visible: {
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8
    }
  },
  exit: {
    opacity: 0,
    transition: {ease: 'easeInOut'}
  } 
}