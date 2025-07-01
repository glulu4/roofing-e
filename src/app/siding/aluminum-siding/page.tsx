import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Aluminum Siding Installation | Paragon Exterior',
  description: 'Install lightweight and sturdy Aluminum Siding for lasting protection against the elements.',
  keywords: 'aluminum siding, aluminum siding installation, metal siding',
  openGraph: {
    title: 'Aluminum Siding Installation | Paragon Exterior',
    description: 'Professional Aluminum Siding installation services that deliver durability and style.',
    type: 'website',
    images: ['/images/siding/aluminum-siding.jpg'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Aluminum Siding"
        subText="Aluminum Siding provides impressive fire and pest resistance with a sleek finish."
        imgSrc="/images/siding/aluminum-siding.jpg"
        imgAlt="House with aluminum siding installed"
      />
      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Aluminum Siding Installation</HeaderText>
        <SecondaryText>
          Lightweight yet resilient, Aluminum Siding stands up to harsh weather while remaining virtually maintenance free.
        </SecondaryText>
        <HeaderText as="h2" className="mt-12">Advantages of Aluminum Siding</HeaderText>
        <SecondaryText>
          From excellent fire resistance to a clean modern appearance, Aluminum Siding keeps your home protected for years to come.
        </SecondaryText>
      </div>

      <InfoSection
        imgSrc="/images/siding/aluminum-siding.jpg"
        imgAlt="Aluminum siding closeup on residential home"
        title="Modern Protection with Aluminum Siding"
        mainContent="Aluminum siding delivers lightweight durability that resists rust, fire, and pests while giving your home a streamlined appearance."
        bottomContent="Our experienced installers secure each panel tightly to prevent water infiltration and color fading, ensuring decades of worry&#8209;free performance."
        imagePosition="right"
      />
      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}
