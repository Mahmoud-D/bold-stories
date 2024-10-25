import { motion } from 'framer-motion'
import {
  firstSmallArrowVariants,
  mainArrowVariants,
  secondSmallArrowVariants
} from '@/animations/arrow-icon-variants'

const ArrowIcon = () => {
  return (
    <motion.em className="flex items-center justify-center">
      {/* Main Arrow */}
      <motion.svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={mainArrowVariants}
        animate="animate"
      >
        <path
          d="M13.0859 5.46875L20.1172 12.5L13.0859 19.5312M19.1406 12.5H4.88281"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* First Small Arrow */}
      <motion.svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={firstSmallArrowVariants}
        animate="animate"
      >
        <path
          d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Second Small Arrow */}
      <motion.svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={secondSmallArrowVariants}
        animate="animate"
      >
        <path
          d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.em>
  )
}

export default ArrowIcon
