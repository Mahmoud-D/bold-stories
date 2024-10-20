import React from 'react'
import { motion } from 'framer-motion'
import CardBorder from './CardBorder'
import ArrowIcon from './ArrowIcon'

interface StoryCardProps {
  name: string
  imgLink: string
  date: string
  link: string
}

const StoryCard: React.FC<StoryCardProps> = ({ name, imgLink, date, link }) => {
  return (
    <motion.div
      className="relative ml-20 w-full py-10 first:w-full sm:w-[calc(50%-1.5rem)] sm:py-5"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <CardBorder />
      <a href={link} target="_blank" rel="noreferrer" className="block">
        <motion.div
          className="relative ml-10 w-full overflow-hidden sm:ml-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 z-10 bg-red-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.img
            src={imgLink}
            alt=""
            className="z-0 w-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        <motion.div
          className="px-10 pt-9 sm:px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.h3 className="mb-7 text-4xl transition-colors duration-300 hover:text-red-500 sm:text-2xl">
            {name}
          </motion.h3>
          <p className="text-base text-gray-400">{date}</p>
          <div className="mt-4 flex items-center justify-end text-right">
            <motion.span
              className="mr-2 text-sm font-semibold"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              READ ARTICLE
            </motion.span>
            <ArrowIcon />
          </div>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default StoryCard
