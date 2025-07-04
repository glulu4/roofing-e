import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Engineered Wood Siding Installation | Paragon Exterior',
  description: 'Enjoy the natural look of wood with the strength of modern materials. Engineered Wood Siding offers beauty and durability.',
  keywords: 'engineered wood siding, engineered wood siding installation, wood siding alternatives',
  openGraph: {
    title: 'Engineered Wood Siding Installation | Paragon Exterior',
    description: 'Professional Engineered Wood Siding installation that mimics real wood with less upkeep.',
    type: 'website',
    images: ['/images/siding/engineered-wood-siding.webp'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Engineered Wood Siding"
        subText="Engineered Wood Siding delivers authentic wood style in a low-maintenance, long-lasting product."
        imgSrc="/images/siding/engineered-wood-siding.webp"
        imgAlt="Engineered wood siding on a home"
      />
      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Engineered Wood Siding Installation</HeaderText>
        <SecondaryText>
          Engineered Wood Siding is crafted for superior resistance to moisture and impact while providing the warmth of real wood grain.
        </SecondaryText>
        <HeaderText as="h2" className="mt-12">Benefits of Engineered Wood Siding</HeaderText>
        <SecondaryText>
          It offers the charm of traditional wood siding without frequent painting or costly upkeep, making Engineered Wood Siding a smart upgrade for any home.
        </SecondaryText>
      </div>

      <InfoSection
        imgSrc="/images/siding/engineered-wood-siding.webp"
        imgAlt="Engineered wood siding panels on home"
        title="Strength of Engineered Wood"
        mainContent="Engineered wood siding bonds real wood fibers with durable resins, creating boards that resist warping, cracking, and pests."
        bottomContent="Factory treatments shield each panel from moisture and impact, providing the warmth of wood with far less maintenance."
        imagePosition="right"
      />
      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}
