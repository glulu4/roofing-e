import HeaderText from '@/components/HeaderText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import SecondaryText from '@/components/SecondaryText'
import HowItWorks from '@/components/siding/HowItWorks'
import SidingHeader from '@/components/siding/SidingHeader'
import SidingMaterial from '@/components/siding/SidingMaterial'
import StepsSection from '@/components/siding/StepsSection'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.paragonexterior.com/siding' },
}

export default function page() {
  return (
    <div>

      <SidingHeader />


      <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-left px-6 py-32">


        <HeaderText variant='large'>
          We Find Solutions For You
        </HeaderText>

        {/* <div className='my-12'>
          <SecondaryText>

            Choosing the right siding for your home is a
             vital decision that impacts more than just the 
             exterior appearance. Siding serves as a protective 
             shield against the elements, enhances your home&apos;s 
             energy efficiency by reducing utility bills, and 
             elevates the overall comfort and aesthetic appeal 
             of your living space. With an extensive variety of
             materials—ranging from natural to engineered options—each 
             offering unique advantages, selecting the ideal siding can 
             feel like a daunting task. Let us simplify the process and 
             help you make a choice you&apos;ll love for years to come.
          </SecondaryText>

          <SecondaryText>
            At Paragon Exterior®, we take pride in assisting 
            our clients in discovering the ideal siding solution 
            for their homes, which has a 
            humid continental climate, characterized by hot summers 
            and cold winters with year-round precipitation.
          </SecondaryText>
        </div> */}

        <div className='my-12'>
          <SecondaryText>
            Choosing the right siding for your home is a vital decision that impacts more than just exterior appearance. Quality siding works hand-in-hand with residential roofing to create a protective shield against the elements. It boosts energy efficiency, reduces utility bills, and improves your home&apos;s overall comfort and curb appeal. Whether you&apos;re upgrading siding or working with one of the best roofing companies near you, we’ll guide you through selecting the perfect solution that lasts.
          </SecondaryText>

            <SecondaryText>
            At Paragon Exterior&reg;, we&rsquo;re more than a siding and roofing company &mdash; we&rsquo;re your trusted partner in exterior transformation. From roof repair to siding installations, we help homeowners in humid continental climates like Pennsylvania find long-lasting materials that withstand hot summers, harsh winters, and year-round weather. Let our expert roofing contractors and siding specialists simplify the process and deliver results you&rsquo;ll love.
            </SecondaryText>
        </div>


      </div>

      <div>
        <SidingMaterial />
      </div>

      <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-left px-6 py-32">


        <HeaderText variant='large' className='text-left'>
          The Steps we take
        </HeaderText>

        <div className='my-12'>
          {/* <SecondaryText>
            Replacing siding is a structured process that ensures
             your home is well-protected, energy-efficient, and 
             visually appealing. Each step in the siding 
             replacement journey is carefully designed to 
             safeguard your property, enhance its curb 
             appeal, and improve insulation. From 
             removing old siding and inspecting for 
             damage to precise installation and thorough
              clean-up, we follow a detailed process to 
              deliver results that last. By breaking down 
              each phase, we make it simple and stress-free 
              for you to understand how we transform your 
              home with durable and attractive siding.
          </SecondaryText> */}
          <SecondaryText>
            Replacing siding is a structured process that ensures your home remains protected, energy-efficient, and visually appealing. At Paragon Exterior®, our approach combines expert siding installation with the knowledge and precision of a trusted roofing contractor. Each phase — from removing old materials and inspecting for damage to precise installation and cleanup — is handled by our experienced team. Whether you&apos;re updating siding or working with one of the best roofing companies near you for roof repair or residential roofing, we make the process simple, stress-free, and built to last.
          </SecondaryText>


        </div>

      </div>

      <div>
        {/* <StepsSection/> */}
        <HowItWorks/>
      </div>

      <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
        <GetEstimate />
      </div>
    </div>
  )
}
