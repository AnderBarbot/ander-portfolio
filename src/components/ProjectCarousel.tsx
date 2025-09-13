'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Project = {
    id: number
    title: string
    subtext: string
    image: string
}

export default function ProjectCarousel() {
    const [projects, setProjects] = useState<Project[]>([])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)
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
            <section id="work" className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Projects</h2>
                <p>Loading projects...</p>
            </section>
        )
    }

    if (error || !selectedProject) {
        return (
            <section id="work" className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
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

            <div
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => setModalOpen(true)}
            >
                <div className="relative w-full aspect-video">
                    <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-[85%] z-10 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="flex items-center space-x-2">
                        <h3 className="text-white text-lg font-semibold">{selectedProject.title}</h3>
                        <p className="text-white text-sm opacity-0 group-hover:scale-1.05 transition-opacity duration-500">
                            {selectedProject.subtext}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full overflow-x-auto">
                <div className="flex flex-wrap justify-center gap-4 px-1 sm:px-4">
                    {projects.map((project, idx) => {
                        const isSelected = idx === selectedIndex
                        return (
                            <button
                                key={project.id}
                                onClick={() => setSelectedIndex(idx)}
                                className={`
            relative rounded-lg overflow-hidden cursor-pointer flex-shrink-0
            transition-all duration-300 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28
            ${isSelected ? 'opacity-100 blur-0 scale-110 z-10' : 'opacity-50 blur-[1px]'}
            hover:opacity-100 hover:blur-0 hover:scale-110 hover:z-20
          `}
                                aria-label={`Select project ${project.title}`}
                            >
                                <Image
                                    title={project.title}
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority={isSelected}
                                />
                            </button>
                        )
                    })}
                </div>
            </div>

            {modalOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-lg max-w-3xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 btn btn-sm btn-circle"
                            aria-label="Close modal"
                        >
                        </button>
                        <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                        <p className="mb-4">{selectedProject.subtext}</p>
                        <div className="relative w-full h-64 rounded-md overflow-hidden">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
