import React, { useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import StoryCard from './StoryCard'

interface Story {
  name: string
  imgLink: string
  date: string
  link: string
}

const Stories = () => {
  const staticData: Story[] = [
    {
      name: 'The AI Revolution: A New Era Beckons',
      imgLink:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D',
      date: '2023-12-28',
      link: 'https://www.riangle.com/stories/the-ai-revolution-a-new-era-beckons'
    },
    {
      name: 'The Future of Web Development',
      imgLink:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
      date: '2023-12-29',
      link: 'https://www.riangle.com/stories/the-future-of-web-development'
    },
    {
      name: 'Blockchain: Beyond Cryptocurrency',
      imgLink:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D',
      date: '2023-12-30',
      link: 'https://www.riangle.com/stories/blockchain-beyond-cryptocurrency'
    },
    {
      name: 'The Rise of No-Code Platforms',
      imgLink:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm8lMjBjb2RlfGVufDB8fDB8fHww',
      date: '2023-12-31',
      link: 'https://www.riangle.com/stories/the-rise-of-no-code-platforms'
    }
  ]

  const [stories] = useState<Story[]>(staticData)
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, {
    once: true
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="w-full px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex max-w-7xl flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20"
      >
        {/* First row */}
        <motion.div variants={itemVariants} className="w-[90%] sm:w-full">
          <StoryCard {...stories[0]} />
        </motion.div>

        {/* Second row */}
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16">
          <motion.div variants={itemVariants} className="">
            <StoryCard {...stories[1]} />
          </motion.div>
          <motion.div variants={itemVariants} className="">
            <StoryCard {...stories[2]} />
          </motion.div>
        </div>

        {/* Third row */}
        <motion.div variants={itemVariants} className="">
          <StoryCard {...stories[3]} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Stories
