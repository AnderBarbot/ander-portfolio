'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type TimelineNode = {
  id: string
  label: string
  images: string[]
  text: string
}

const timeline: TimelineNode[] = [
  {
    id: 'Adventure',
    label: 'Adventure',
    images: ['/profile/home1.jpg'],
    text: 'One of many adventures along the way...'
  },
  {
    id: 'Hawaii',
    label: 'Hawaii, December 2024',
    images: [
      '/profile/hawaii20241.jpg', '/profile/hawaii20242.jpg',
      '/profile/hawaii20243.jpg', '/profile/hawaii20245.jpg',
      '/profile/hawaii20245.jpg', '/profile/hawaii20246.jpg',
      '/profile/hawaii20247.jpg', '/profile/hawaii20248.jpg',
      '/profile/hawaii20249.jpg'
    ],
    text: 'My aunt and uncle were wintering near Kailua Kona, HI. I got free housing, they got free childcare :)'
  },
  {
    id: 'College',
    label: 'College',
    images: ['/profile/climbing1.jpg'],
    text: 'Short descriptor about college...'
  },
  {
    id: 'Europe',
    label: 'Europe',
    images: ['/profile/europe1.jpg', '/profile/europe2.jpg', '/profile/europe3.jpg'],
    text: 'Another fun stop on the journey...'
  },
  {
    id: 'Blue',
    label: 'Blue',
    images: [
      '/profile/blue0.jpg', '/profile/blue1.jpg', '/profile/blue2.jpg',
      '/profile/blue3.jpg', '/profile/blue4.jpg', '/profile/blue5.jpg',
      '/profile/blue6.jpg', '/profile/blue7.jpg', '/profile/blue8.jpg',
      '/profile/blue9.jpg'
    ],
    text: 'Short descriptor about career...'
  }
]

export default function About() {

  //set initial node.
  const [selected, setSelected] = useState<TimelineNode>(
    timeline.find(node => node.id === 'Blue')!
  )

  const [imageIndex, setImageIndex] = useState(0)

  const handleImageChange = (dir: 'prev' | 'next') => {
    const total = selected.images.length
    setImageIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % total
        : (prev - 1 + total) % total
    )
  }

  const isSelected = (node: TimelineNode) => selected.id === node.id

  return (
    <section id="about" className="w-full min-h-screen flex flex-col">
      {/* Slideshow */}
      <div className="relative h-[50vh] w-full overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected.images[imageIndex]}
            src={selected.images[imageIndex]}
            alt={selected.label}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {selected.images.length > 1 && ['prev', 'next'].map((dir) => {
          const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
          const positionClass = dir === 'prev' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'
          return (
            <button
              key={dir}
              onClick={() => handleImageChange(dir as 'prev' | 'next')}
              className={`absolute top-0 h-full px-4 hidden group-hover:flex items-center justify-center ${positionClass} from-black/40 to-transparent`}
            >
              <Icon className="text-white w-8 h-8" />
            </button>
          )
        })}
      </div>

      <div className="flex flex-col items-center p-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={selected.id}
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {selected.text}
          </motion.p>
        </AnimatePresence>

        {/* Timeline */}
        <div className="relative flex items-center h-45 w-full overflow-x-auto justify-center gap-8">
          {timeline.map((node, index) => (
            <button
              key={node.id}
              onClick={() => {
                setSelected(node)
                setImageIndex(0)
              }}
              className="flex flex-col items-center relative"
            >
              <span className={`absolute ${index % 2 === 0 ? '-top-8' : 'top-10'} text-sm`}>
                {node.label}
              </span>
              <motion.div
                className={`w-6 h-6 rounded-full ${isSelected(node) ? 'bg-primary' : 'bg-base-300'}`}
                animate={{ scale: isSelected(node) ? 1.3 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
