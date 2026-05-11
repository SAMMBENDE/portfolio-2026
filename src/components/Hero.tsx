'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

/**
 * Hero Component
 * Landing section with GSAP animated headline and call-to-action buttons
 * Features: Smooth fade-in animations, gradient text, animated icons
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP Timeline for sequential animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5' // Overlap with previous animation
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
        '-=0.4'
      )

    // Infinite bounce animation for arrow
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Profile Image - Animated */}
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dkd3k6eau/image/upload/v1773726894/sam-portfolio_aivstv.jpg"
                alt="Sampson Mbende - Full-Stack Developer"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-bounce">
                Available for Work
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            {/* Main Heading */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Hi, I&apos;m Sam MBENDE</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Your Full-Stack JavaScript Developer
              <br />
              <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                I build scalable, high-performance web applications and digital products.
              </span>
            </p>

            {/* Call-to-Action Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
              <button
                onClick={handleScrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary text-primary dark:text-primary-light rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/SAMMBENDE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sampson-mbende/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div ref={arrowRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <FiArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  )
}
