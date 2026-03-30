'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCode, FiHeart, FiZap } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

/**
 * About Component
 * Introduces the developer with scroll-triggered animations
 * Features: GSAP ScrollTrigger animations, icon highlights, responsive layout
 */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const cards = cardsRef.current?.children

    if (!section || !content || !cards) return

    // Animate content on scroll
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    )

    // Animate cards with stagger
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  const highlights = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: FiHeart,
      title: 'User-Centric',
      description: 'Designing experiences that users love and enjoy',
    },
    {
      icon: FiZap,
      title: 'Performance',
      description: 'Optimizing for speed and seamless interactions',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container bg-white dark:bg-gray-900"
    >
      <div ref={contentRef}>
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="gradient-text">About Me</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
          Full-Stack JavaScript Engineer
        </p>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I&apos;m a Full-Stack JavaScript Engineer passionate about building scalable, high-performance digital products.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I specialize in React, Next.js, TypeScript, and Node.js — crafting modern web applications with clean architecture 
            and seamless user experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Beyond development, I&apos;m also a professional DJ with hundreds of live performances across major European cities. 
            Performing in front of diverse audiences has sharpened my creativity, adaptability, and ability to deliver under pressure — 
            skills I bring into every project I build.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I believe in continuous learning, shipping quality work, and building technology that makes a real impact.
          </p>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800 dark:text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
