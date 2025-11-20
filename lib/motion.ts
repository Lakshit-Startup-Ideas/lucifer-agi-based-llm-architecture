// Reusable Framer Motion animation variants and presets
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const fadeInUpDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", damping: 15 },
}

export const slideInFromRight = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
  transition: { type: "spring", damping: 25, stiffness: 300 },
}

export const headerFade = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const buttonHover = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: { type: "spring", damping: 20 },
}
