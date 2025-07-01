import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Fiber Cement Siding Installation | Paragon Exterior',
  description: 'Protect your home with long-lasting Fiber Cement Siding. Our team installs durable fiber cement siding for superior weather resistance.',
  keywords: 'fiber cement siding, fiber cement siding installation, durable siding',
  openGraph: {
    title: 'Fiber Cement Siding Installation | Paragon Exterior',
    description: 'Expert installation of Fiber Cement Siding for lasting curb appeal and protection.',
    type: 'website',
    images: ['/images/siding/fiber-cement-siding.jpg'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Fiber Cement Siding"
        subText="Choose Fiber Cement Siding for unmatched durability and a beautiful wood-like finish."
        imgSrc="/images/siding/fiber-cement-siding.jpg"
        imgAlt="Home with fiber cement siding"
      />
      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Fiber Cement Siding Installation</HeaderText>
        <SecondaryText>
          Fiber Cement Siding resists fire, insects, and rot while delivering the timeless look of painted wood. Our experts ensure proper installation for decades of reliable performance.
        </SecondaryText>
        <HeaderText as="h2" className="mt-12">Why Fiber Cement Siding?</HeaderText>
        <SecondaryText>
          This premium material stands up to harsh weather and holds paint longer than traditional wood, making Fiber Cement Siding a smart investment for your home.
        </SecondaryText>
      </div>
      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}
