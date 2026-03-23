'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Skills Component
 * Displays technical skills with subtle animated tags
 * Features: Scroll-triggered animations, categorized skills, hover effects
 */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const skillCards = skillsRef.current?.querySelectorAll('.skill-card')

    if (!section || !title || !skillCards) return

    // Animate title
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

    // Animate skill cards with stagger
    skillCards.forEach((card) => {
      const tags = card.querySelectorAll('.skill-tag')
      
      gsap.fromTo(
        tags,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  const skillCategories = [
    {
      category: 'Technical Skills',
      sections: [
        {
          title: 'Frontend',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS'],
        },
        {
          title: 'Backend',
          skills: ['Node.js', 'Express', 'REST APIs', 'Bash Scripting'],
        },
        {
          title: 'Command Line & OS',
          skills: ['Linux', 'macOS', 'Windows', 'Command Line'],
        },
      ],
    },
    {
      category: 'Tools & Platforms',
      sections: [
        {
          title: 'CMS',
          skills: ['WordPress'],
        },
        {
          title: 'Databases',
          skills: ['MongoDB', 'PostgreSQL'],
        },
        {
          title: 'Cloud & DevOps',
          skills: ['AWS', 'Docker', 'Cloudinary', 'Vercel', 'Hostinger'],
        },
        {
          title: 'AI & Automation',
          skills: ['OpenAI API', 'GitHub Copilot'],
        },
        {
          title: 'Development Tools',
          skills: ['Postman', 'Git', 'GitHub'],
        },
      ],
    },
    {
      category: 'Core Competencies',
      sections: [
        {
          title: '',
          skills: [
            'Debugging',
            'Design thinking',
            'Mobile-first & responsive UI',
            'API integration',
            'Agile methodologies',
            'Component-based architecture',
            
            
          ],
        },
      ],
    },
    {
      category: 'Cybersecurity',
      sections: [
        {
          title: 'IBM Certified Skills',
          skills: [
            'Cryptography',
            'Threat Detection',
            'Cyber Threat Analysis',            
            'Cyber Threat Intelligence',            
            'Vulnerability Management',
            'Incident Response',
            'Information Security',
            'Cybersecurity Risk Management',
          ],
        },
      ],
    },
    {
      category: 'Soft Skills',
      sections: [
        {
          title: '',
          skills: [
            'Clear Communication',
            'Team Collaboration',
            'Problem Solving',
            'Adaptability',
            'Time Management',
            'Continuous Learning',
            'Creative Thinking',
          ],
        },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-container bg-gray-50 dark:bg-gray-800"
    >
      <div ref={titleRef}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Technologies and capabilities I bring to the table
        </p>
      </div>

      <div ref={skillsRef} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-primary/20 pb-3">
                {category.category}
              </h3>
              
              {category.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 last:mb-0">
                  {section.title && (
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                      {section.title}
                    </h4>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
