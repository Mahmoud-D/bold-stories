import { useState } from 'react'
import { motion } from 'framer-motion'

import CardBorder from './CardBorder'
import ArrowIcon from './ArrowIcon'

interface StoryCardProps {
  name: string
  imgLink: string
  date: string
  link: string
}

const StoryCard = ({ name, imgLink, date, link }: StoryCardProps) => {
  // State to track if the card is hovered
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full pb-8 sm:pb-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBorder />

      <a href={link} target="_blank" rel="noreferrer" className="block">
        {/* Image Wrapper */}
        <motion.div
          className="relative pt-8 pl-4 -mr-4 overflow-hidden sm:-mr-6 sm:pl-6 md:-mr-8 md:pl-8 lg:-mr-10 lg:pl-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image scaling internally without layout shift */}
          <div className="overflow-hidden rounded-sm">
            <motion.img
              src={imgLink}
              alt=""
              className="object-cover w-full h-auto transition-transform duration-700 ease-in-out"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.h3
            className="mb-2 text-lg transition-colors duration-300 sm:mb-3 sm:text-xl md:mb-4 md:text-2xl lg:text-3xl"
            style={{ color: isHovered ? '#F43333' : 'inherit' }}
          >
            {name}
          </motion.h3>
          <p className="text-xs text-gray-400 sm:text-sm">{date}</p>
          <div className="flex items-center justify-end mt-3 text-right sm:mt-4">
            <motion.span
              className="mr-2 text-xs font-semibold hover:text-primary sm:text-sm"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              READ ARTICLE
            </motion.span>
            <ArrowIcon />
          </div>
        </motion.div>
      </a>
    </div>
  )
}

export default StoryCard
