'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">We apologize for the inconvenience.</p>
        <button
          onClick={() => reset()}
          className="bg-[#4B1D92] text-white px-6 py-2 rounded-md hover:bg-[#3A1573] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
