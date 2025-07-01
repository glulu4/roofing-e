import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Vinyl Siding Installation | Paragon Exterior',
  description: 'Enhance your home with durable Vinyl Siding. We offer traditional and vertical vinyl siding installation for low-maintenance curb appeal.',
  keywords: 'vinyl siding, vertical vinyl siding, vinyl siding installation, siding contractors',
  openGraph: {
    title: 'Vinyl Siding Installation | Paragon Exterior',
    description: 'Professional vinyl siding installation including vertical vinyl siding options.',
    type: 'website',
    images: ['/images/siding/vinyl-siding.jpg'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Vinyl Siding"
        subText="Durable and versatile vinyl siding installed by experts. Ask about our vertical vinyl siding options."
        imgSrc="/images/siding/vinyl-siding.jpg"
        imgAlt="Home with vinyl siding installed"
      />
      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Vinyl Siding Installation Experts</HeaderText>
        <SecondaryText>
          Vinyl siding offers lasting color and minimal upkeep. Our team installs both horizontal and vertical vinyl siding profiles to match your vision and protect your home.
        </SecondaryText>
        <HeaderText as="h2" className="mt-12">Benefits of Vinyl Siding</HeaderText>
        <SecondaryText>
          With excellent resistance to rot and insects, Vinyl Siding keeps maintenance low while boosting energy efficiency and curb appeal.
        </SecondaryText>
      </div>
      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}
