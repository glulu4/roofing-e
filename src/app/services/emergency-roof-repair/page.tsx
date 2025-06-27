import GetEstimate from '@/components/landing-ui/GetEstimate'
import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import React from 'react'

export const metadata = {
  title: 'Emergency Roof Repair | Paragon Exterior',
  description: 'Call Paragon Exterior for fast emergency roof repair. We secure storm-damaged roofs and protect your home when minutes count.'
}

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Hero
        mainText={`Emergency Roof Repair`}
        subText="Storm damage? We respond quickly to stabilize your roof and prevent further harm."
        imgSrc="/images/roof-service/emergency-roofing/roof-damage.jpg"
        imgAlt="Emergency roof repair by Paragon Exterior"
      />

      <section className='py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>When to Call for <span className='text-amber-500'>Emergency Service</span></HeaderText>
          <SecondaryText as='p'>After severe storms or sudden leaks, immediate action can save thousands in repairs.</SecondaryText>
          <ul className='mt-8 list-disc space-y-2 pl-5 text-gray-700'>
            <li>Tree or wind damage to your roof</li>
            <li>Water pouring into the attic or living space</li>
            <li>Loose shingles exposing the decking</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Our Rapid Response Plan</HeaderText>
          <SecondaryText as='p'>We arrive ready to secure your home and start the roof repair process right away.</SecondaryText>
          <ol className='mt-8 list-decimal space-y-2 pl-5 text-gray-700'>
            <li>Temporary tarping and structural stabilization</li>
            <li>Detailed inspection of storm damage</li>
            <li>Fast, permanent repairs to restore protection</li>
          </ol>
        </div>
      </section>

      <GetEstimate />
    </div>
  )
}
