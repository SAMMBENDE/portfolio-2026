'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Page not found
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-transform inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
