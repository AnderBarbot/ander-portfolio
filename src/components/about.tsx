'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Head from 'next/head'

type TimelineNode = {
  id: string
  label: string
  images: string[]
  text: string
}

const timeline: TimelineNode[] = [
  {
    id: 'Travelling',
    label: 'Travelling',
    images: [
      '/profile/hawaii20241.jpg',
      '/profile/hawaii20242.jpg',
      '/profile/hawaii20243.jpg',
      '/profile/hawaii20245.jpg',
      '/profile/hawaii20246.jpg',
      '/profile/hawaii20247.jpg',
      '/profile/hawaii20248.jpg',
      '/profile/hawaii20249.jpg',
      '/profile/europe1.jpg',
      '/profile/europe2.jpg',
      '/profile/europe3.jpg',
    ],
    text: "I love the freedom of travel. Discovered at 16, when I went to visit a foreign exchange student in Spain, and continuing every summer since then. Still, there's something to be said for stability, for home."
  },
  {
    id: 'Education',
    label: 'Education',
    images: ['/profile/climbing1.jpg', '/profile/profile1.jpg'],
    text: "I graduated Highschool in 2020, with an associates of liberal arts. I chose to double major in computer science and business, because I wanted to bridge the two worlds. I graduated with a degree in Business from U of I in 2023, and a degree in Computer Science from BSU in 2025."
  },
  {
    id: 'Family',
    label: 'Family',
    images: [
      '/profile/blue0.jpg', '/profile/blue1.jpg', '/profile/blue2.jpg',
      '/profile/blue3.jpg', '/profile/blue4.jpg', '/profile/blue5.jpg',
      '/profile/blue6.jpg', '/profile/blue7.jpg', '/profile/blue8.jpg',
      '/profile/blue9.jpg', '/profile/home1.jpg',
    ],
    text: `I love my family.
    I grew up in a big italian/portuguese/basque family. 25 of us lived within a mile of each other, and family dinners were biweekly affairs.
    My family has expanded to include my close friends and my cat Blu. I look forward to the day that it includes kids of my own.
    `
  }
]

export default function About() {
  const [selected, setSelected] = useState<TimelineNode>(timeline.find((n) => n.id === 'Family')!)
  const [imageIndex, setImageIndex] = useState(0)

  const handleImageChange = (dir: 'prev' | 'next') => {
    const total = selected.images.length
    setImageIndex((prev) => (dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total))
  }

  const isSelected = (node: TimelineNode) => selected.id === node.id

  return (
    <>
      <Head>
        {/* Preload first image of each timeline node */}
        {timeline.map((node) => (
          <link key={node.id} rel="preload" href={node.images[0]} as="image" />
        ))}
      </Head>

      <section id="about" className="w-full min-h-screen flex flex-col">
        {/* Slideshow */}
        <div className="relative h-[50vh] w-full overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.images[imageIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={selected.images[imageIndex]}
                alt={selected.label}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {selected.images.length > 1 &&
            (['prev', 'next'] as const).map((dir) => {
              const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
              const positionClass =
                dir === 'prev' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'
              return (
                <button
                  key={dir}
                  onClick={() => handleImageChange(dir)}
                  className={`absolute top-0 h-full px-4 hidden group-hover:flex items-center justify-center ${positionClass} from-black/40 to-transparent`}
                >
                  <Icon className="text-white w-8 h-8" />
                </button>
              )
            })}
        </div>

        {/* Hidden preload for prev and next images */}
        <div style={{ display: 'none' }}>
          <Image
            src={selected.images[(imageIndex - 1 + selected.images.length) % selected.images.length]}
            alt="Preload previous"
            width={1}
            height={1}
            priority={false}
            loading="lazy"
          />
          <Image
            src={selected.images[(imageIndex + 1) % selected.images.length]}
            alt="Preload next"
            width={1}
            height={1}
            priority={false}
            loading="lazy"
          />
        </div>

        {/* Text + Timeline */}
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
    </>
  )
}
