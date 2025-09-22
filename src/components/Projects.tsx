'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  subtext: string
  image: string
  tech: string[]
  concepts: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load projects')
        return res.json()
      })
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const selectedProject = projects[selectedIndex]

  if (loading) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <p>Loading projects...</p>
      </section>
    )
  }

  if (error || !selectedProject) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <p className="text-red-500">{error || 'No projects found.'}</p>
      </section>
    )
  }

  return (
    <section
      id="work"
      className="scroll-mt-20 w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-2 col-span-1">
          {projects.map((project, idx) => {
            const isSelected = idx === selectedIndex
            return (
              <button
                key={project.id}
                onClick={() => setSelectedIndex(idx)}
                className={`btn justify-start rounded-lg text-left ${
                  isSelected
                    ? 'btn-primary text-white'
                    : 'btn-ghost text-gray-500'
                }`}
              >
                {project.title}
              </button>
            )
          })}
        </div>
        {/* Dropdown */}
        <div className="md:hidden mb-4">
          <select
            className="select select-bordered w-full"
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
          >
            {projects.map((project, idx) => (
              <option key={project.id} value={idx}>
                {project.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-3">
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <h3 className="text-white text-lg font-semibold">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* text */}
            <div className="p-6">
              <p className="mb-6">{selectedProject.subtext}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <ul className="list-disc list-inside">
                    {selectedProject.tech.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Concepts</h4>
                  <ul className="list-disc list-inside">
                    {selectedProject.concepts.map((c, idx) => {
                      const isBold = c.startsWith('**') && c.endsWith('**')
                      const text = isBold ? c.replace(/\*\*/g, '') : c
                      return (
                        <li key={idx} className={isBold ? 'font-bold' : ''}>
                          {text}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
