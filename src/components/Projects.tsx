'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

/**
 * Projects Component
 * Showcases portfolio projects with filterable categories
 * Features: Animated project cards, filter functionality, hover effects
 */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('all')

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Afrobizz',
      description: 'Full-stack Business & listing solution with payment integration, tier system, and admin dashboard.',
      category: 'fullstack',
      image: 'https://res.cloudinary.com/dkd3k6eau/image/upload/v1772235398/Screenshot_2026-02-28_at_00.36.01_zqopky.png',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      github: 'https://github.com/SBMBENDE/mixxfactory',
      demo: 'https://afrobizz.com/',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and insights.',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'TailwindCSS', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, authorization, and real-time updates.',
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      github: 'https://github.com',
      demo: null,
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tags: ['React', 'OpenWeatherAPI', 'Mapbox', 'CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Esona',
      description: 'Premium Vacation Rentals platform with markdown support and SEO optimization.',
      category: 'fullstack',
      image: 'https://res.cloudinary.com/dkd3k6eau/image/upload/v1772236804/Screenshot_2026-02-28_at_00.59.01_me7b1w.png',
      tags: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/SAMMBENDE/esona',
      demo: 'https://sammbende.github.io/esona/',
    },
    {
      id: 6,
      title: 'Real-time Chat App',
      description: 'WebSocket-based chat application with rooms, direct messaging, and file sharing.',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      tags: ['Socket.io', 'React', 'Node.js', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current

    if (!section || !title) return

    gsap.fromTo(
      title,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    )
  }, [])

  // Animate projects when filter changes
  useEffect(() => {
    const cards = gridRef.current?.children

    if (!cards) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      }
    )
  }, [filteredProjects])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-container bg-white dark:bg-gray-900"
    >
      <div ref={titleRef}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          A selection of my recent work
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === cat.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
