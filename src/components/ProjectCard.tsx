'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { gsap } from 'gsap'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    category: string
    image: string
    tags: string[]
    github: string
    demo: string | null
  }
}

/**
 * ProjectCard Component
 * Reusable card component for project display with hover animations
 * Features: GSAP hover effects, image overlay, tag display, external links
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      duration: 0.3,
      ease: 'power2.out',
    })
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.3,
      ease: 'power2.in',
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Hover Overlay with Links */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub className="w-6 h-6" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
