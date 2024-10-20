import { motion } from 'framer-motion'

const LineVariants = {
  hidden: { width: 0, height: 0 },
  visible: (custom: { width: string; height: string }) => ({
    width: custom.width,
    height: custom.height,
    transition: { duration: 0.5 }
  })
}

const CardBorder: React.FC = () => {
  return (
    <>
      <motion.span
        className="absolute bottom-0 left-0 bg-gray-300 dark:bg-gray-700"
        variants={LineVariants}
        initial="hidden"
        animate="visible"
        custom={{ width: '1px', height: '100%' }}
      />
      <motion.span
        className="absolute left-0 top-0 bg-gray-300 dark:bg-gray-700"
        variants={LineVariants}
        initial="hidden"
        animate="visible"
        custom={{ width: '100%', height: '1px' }}
      />
      <motion.span
        className="absolute right-0 top-0 bg-gray-300 dark:bg-gray-700"
        variants={LineVariants}
        initial="hidden"
        animate="visible"
        custom={{ width: '1px', height: '100%' }}
      />
      <motion.span
        className="absolute bottom-0 right-0 bg-gray-300 dark:bg-gray-700"
        variants={LineVariants}
        initial="hidden"
        animate="visible"
        custom={{ width: '100%', height: '1px' }}
      />
    </>
  )
}

export default CardBorder
