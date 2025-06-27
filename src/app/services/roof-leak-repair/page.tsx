import GetEstimate from '@/components/landing-ui/GetEstimate'
import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import React from 'react'

export const metadata = {
  title: 'Roof Leak Repair | Paragon Exterior',
  description: 'Stop roof leaks fast with Paragon Exterior. We provide thorough leak detection and effective roof leak repair services.'
}

export default function Page() {
  return (
    <div className='min-h-screen'>
      <Hero
        mainText={`Roof Leak Repair`}
        subText="When a leak appears, our certified roofers find the source and fix it for good."
        imgSrc="/images/roof-service/roof-leak/roof-leak.jpg"
        imgAlt="Roof leak repair by Paragon Exterior"
      />

      <section className='py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>Signs You Need <span className='text-amber-500'>Leak Repair</span></HeaderText>
          <SecondaryText as='p'>Ignoring a small drip can lead to costly structural damage. Watch for these common warning signs.</SecondaryText>
          <ul className='mt-8 list-disc space-y-2 pl-5 text-gray-700'>
            <li>Water stains on ceilings or walls</li>
            <li>Missing or cracked shingles</li>
            <li>Mold or mildew smells in the attic</li>
          </ul>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <div className='mx-auto w-5/6 px-6 lg:px-8'>
          <HeaderText as='h2' className='text-primaryblue'>How We Fix Leaks</HeaderText>
          <SecondaryText as='p'>Our crew pinpoints the entry point, repairs damaged materials, and ensures your roof is watertight again.</SecondaryText>
          <ol className='mt-8 list-decimal space-y-2 pl-5 text-gray-700'>
            <li>Comprehensive roof inspection</li>
            <li>Targeted repair of flashing and shingles</li>
            <li>Final evaluation to confirm the leak is gone</li>
          </ol>
        </div>
      </section>

      <GetEstimate />
    </div>
  )
}
