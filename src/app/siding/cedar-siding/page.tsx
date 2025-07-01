import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Cedar Siding Installation | Paragon Exterior',
  description: 'Cedar Siding brings timeless beauty and natural insulation to your home. Trust our team for expert cedar siding installation.',
  keywords: 'cedar siding, cedar siding installation, wood siding',
  openGraph: {
    title: 'Cedar Siding Installation | Paragon Exterior',
    description: 'Professional Cedar Siding installation services for classic warmth and durability.',
    type: 'website',
    images: ['/images/siding/cedar-siding.png'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Cedar Siding"
        subText="Cedar Siding offers a rich, natural look while resisting decay and insects."
        imgSrc="/images/siding/cedar-siding.png"
        imgAlt="Home featuring cedar siding"
      />
      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Cedar Siding Installation</HeaderText>
        <SecondaryText>
          Known for its rustic charm, Cedar Siding naturally insulates your home and can be stained or painted to match any style.
        </SecondaryText>
        <HeaderText as="h2" className="mt-12">Benefits of Cedar Siding</HeaderText>
        <SecondaryText>
          Cedar Siding is eco-friendly and offers superior resistance to moisture and pests, ensuring long-lasting curb appeal.
        </SecondaryText>
      </div>
      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}
