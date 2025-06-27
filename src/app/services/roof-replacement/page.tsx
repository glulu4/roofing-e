import GetEstimate from '@/components/landing-ui/GetEstimate'
import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import React from 'react'

export const metadata = {
  title: 'Roof Replacement | Paragon Exterior',
  description: 'Professional roof replacement services for long-lasting protection. Trust Paragon Exterior for expert installation and durable materials.'
}

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Hero
        mainText={`Roof Replacement`}
        subText="Rely on our experienced roofers for complete roof replacement, from tear-off to final inspection. We install durable systems that stand up to the elements."
        imgSrc="/images/roof-service/roof-replacement/roof-replacement.avif"
        imgAlt="Roof replacement project by Paragon Exterior"
      />

      <section className='py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Why <span className='text-amber-500'>Choose</span> Us</HeaderText>
          <SecondaryText as='p'>Our licensed team focuses on quality craftsmanship and honest service. From roof installation to cleanup, we handle every detail so you can enjoy years of worry-free protection.</SecondaryText>
          <ul className='mt-8 list-disc space-y-2 pl-5 text-gray-700'>
            <li>High-performance shingles and metal options</li>
            <li>Clear pricing and industry-leading warranties</li>
            <li>Respectful crews who treat your property like their own</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Our Roof Replacement Process</HeaderText>
          <SecondaryText as='p'>We make roof replacement simple. Here’s how we ensure a smooth project from start to finish.</SecondaryText>
          <ol className='mt-8 list-decimal space-y-2 pl-5 text-gray-700'>
            <li>Free inspection and written estimate</li>
            <li>Old roof removal and decking assessment</li>
            <li>Precise installation and thorough cleanup</li>
          </ol>
        </div>
      </section>

      <GetEstimate />
    </div>
  )
}
