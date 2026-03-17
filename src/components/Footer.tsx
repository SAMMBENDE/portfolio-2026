'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

/**
 * Footer Component
 * Contains social links and copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/SAMMBENDE', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sampson-mbende/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/DigicoreP', label: 'X' },
    { icon: FiMail, href: 'mailto:mbende2000@yahoo.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © Sampson Mbende {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
