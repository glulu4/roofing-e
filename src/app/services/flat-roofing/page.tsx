import GetEstimate from '@/components/landing-ui/GetEstimate'
import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import React from 'react'

export const metadata = {
  title: 'Flat Roofing | Paragon Exterior',
  description: 'Specialized flat roofing solutions for homes and businesses. Paragon Exterior installs durable membranes and performs flat roof repair.'
}

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Hero
        mainText={`Flat Roofing`}
        subText="Need a dependable flat roof? Our team installs and maintains low-slope systems designed to last."
        imgSrc="/images/roof-service/flat-roofing/flat-roof.jpg"
        imgAlt="Flat roofing installation by Paragon Exterior"
      />

      <section className='py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Why <span className='text-amber-500'>Flat Roofing</span>?</HeaderText>
          <SecondaryText as='p'>Flat roofs offer sleek looks and usable space, but they require the right materials to prevent ponding water and leaks.</SecondaryText>
          <ul className='mt-8 list-disc space-y-2 pl-5 text-gray-700'>
            <li>Energy-efficient membranes</li>
            <li>Versatile design for additions and decks</li>
            <li>Professional maintenance and repair services</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Our Materials and Expertise</HeaderText>
          <SecondaryText as='p'>We install high-quality single-ply membranes and coatings that withstand harsh weather and foot traffic.</SecondaryText>
          <ol className='mt-8 list-decimal space-y-2 pl-5 text-gray-700'>
            <li>Comprehensive roof inspection</li>
            <li>Custom-tailored installation plan</li>
            <li>Ongoing support for flat roof repair</li>
          </ol>
        </div>
      </section>

      <GetEstimate />
    </div>
  )
}
