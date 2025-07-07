import Link from 'next/link'
import React from 'react'

export default function FreeEstimate() {
  return (
    <Link href="estimate" className="bg-amber-500 hover:bg-amber-600 text-primaryblue px-6 py-4 text-2xl  font-normal shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
    >
      Get Free Estimate
    </Link>

  )
}
