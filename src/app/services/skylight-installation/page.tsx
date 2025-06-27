import GetEstimate from '@/components/landing-ui/GetEstimate'
import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import React from 'react'

export const metadata = {
  title: 'Skylight Installation | Paragon Exterior',
  description: 'Brighten your home with professional skylight installation. Paragon Exterior installs leak-free skylights for natural light and energy savings.'
}

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Hero
        mainText={`Skylight Installation`}
        subText="Let our roofing experts add beautiful natural light with skylight installation that’s sealed and secure."
        imgSrc="/images/roof-service/skylight/skylight.jpg"
        imgAlt="Skylight installed by Paragon Exterior"
      />

      <section className='py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Benefits of <span className='text-amber-500'>Skylights</span></HeaderText>
          <SecondaryText as='p'>Skylights flood your home with daylight, reduce dependence on artificial lighting, and make rooms feel larger and more inviting.</SecondaryText>
          <ul className='mt-8 list-disc space-y-2 pl-5 text-gray-700'>
            <li>Enhanced natural lighting</li>
            <li>Improved ventilation options</li>
            <li>Energy savings from passive solar warmth</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Our Installation Approach</HeaderText>
          <SecondaryText as='p'>We ensure every skylight is properly flashed and insulated to prevent leaks and drafts.</SecondaryText>
          <ol className='mt-8 list-decimal space-y-2 pl-5 text-gray-700'>
            <li>Selection of the right skylight style</li>
            <li>Professional placement and framing</li>
            <li>Waterproof sealing and final inspection</li>
          </ol>
        </div>
      </section>

      <GetEstimate />
    </div>
  )
}
