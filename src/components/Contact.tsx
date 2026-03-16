'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

/**
 * Contact Component
 * Contact form with validation and scroll-triggered animations
 * Features: Form handling, animated inputs, contact information display
 */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const form = formRef.current
    const info = infoRef.current

    if (!section || !title || !form || !info) return

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

    // Animate form and info cards
    gsap.fromTo(
      [form, info],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    )
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mbende2000@yahoo.com',
      href: 'mailto:mbende2000@yahoo.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+33 (0) 617-489-170',
      href: 'tel:+33617489170',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Paris, 75, France',
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-container bg-gray-50 dark:bg-gray-800"
    >
      <div ref={titleRef}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Let&apos;s work together on your next project
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Send a Message
          </h3>

          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg animate-fade-in">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg animate-fade-in">
                ❌ Oops! Something went wrong. Please try again or email me directly.
              </div>
            )}
          </div>
        </form>

        {/* Contact Information */}
        <div ref={infoRef} className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="mb-6 opacity-90">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="flex-1 text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm opacity-90">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
