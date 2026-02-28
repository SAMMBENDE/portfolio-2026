import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio 2026 | Professional Developer',
  description: 'Modern portfolio website showcasing projects, skills, and experience',
  keywords: ['portfolio', 'web developer', 'next.js', 'react', 'projects'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio 2026',
    description: 'Modern portfolio website showcasing projects and skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
