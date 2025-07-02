import HeaderText from '@/components/HeaderText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import SecondaryText from '@/components/SecondaryText'
import HowItWorks from '@/components/siding/HowItWorks'
import SidingHeader from '@/components/siding/SidingHeader'
import SidingMaterial from '@/components/siding/SidingMaterial'
import StepsSection from '@/components/siding/StepsSection'
import React from 'react'
import type {Metadata} from 'next'
import ServicesGrid from '@/components/service-page/Services'


const services = [
  {
    id: 1,
    title: 'Siding Installation',
    href: '/siding/siding-installation',
    description: 'Expert siding installation services to enhance your home’s protection and curb appeal. Choose from a variety of materials including fiber cement, vinyl, and engineered wood.',
    imageUrl: '/images/siding/siding-service/siding-installation.webp',
  },
  {
    id: 2,
    title: 'Siding Repair',
    href: '/siding/siding-repair',
    description: 'Professional siding repair services to fix damage from weather, pests, or wear. Ensure your home remains energy-efficient and visually appealing with our expert solutions.',
    imageUrl: '/images/siding/siding-service/siding-repair.webp',
  },
  {
    id: 3,
    title: 'Siding Replacement',
    href: '/siding/siding-replacement',
    description: 'Complete siding replacement services to upgrade your home’s exterior. We offer a range of durable materials like fiber cement, vinyl, and aluminum to suit your style and budget.',
    imageUrl: '/images/siding/siding-service/siding-replacement.webp',
  },
  {
    id: 4,
    title: 'Board and Batten Siding',
    href: '/siding/board-and-batten-siding',
    description: 'Stylish vertical siding options to add a modern touch to your home. Our team specializes in installing vertical siding that enhances aesthetics and provides superior protection against the elements.',
    imageUrl: '/images/siding/siding-service/vertical-siding.webp',
  },
]

export const metadata: Metadata = {
  title: 'Professional Siding Contractors',
  description: 'Learn why Paragon Exterior are the trusted Professional Siding Contractors near you. Explore our siding solutions that enhance your home’s protection, energy efficiency, and curb appeal. From installation to repair, we have you covered.',
}

export default function page() {
  return (
    <div>

      <SidingHeader />


      <div className="flex flex-col justify-center items-center w-5/6 mx-auto sm:text-center text-left px-6 py-32">


        <HeaderText as="h1" variant='large'>
          Siding Contractors You Can Trust
        </HeaderText>
        <div className='my-12'>
          <SecondaryText>
            Choosing the right siding for your home is a vital decision that impacts more than just exterior appearance.
            Quality siding works hand-in-hand with residential roofing to create a protective shield against the elements.
            It boosts energy efficiency, reduces utility bills, and enhances your home&apos;s overall comfort and curb appeal.
            Whether you&apos;re planning new <strong>siding installation</strong>, tackling <strong>siding repair</strong>, or considering <strong>siding replacement</strong>,
            you can trust Paragon Exterior to be you siding contractors. We’ll guide you through selecting durable materials like <strong>fiber cement</strong>, <strong>vinyl</strong>, <strong>aluminum</strong>, <strong>cedar</strong>, and <strong>engineered wood</strong> for lasting performance.
          </SecondaryText>

          <SecondaryText>
            At Paragon Exterior&reg;, we&rsquo;re more than a siding and roofing company — we&rsquo;re your trusted partner in exterior transformation.
            From roof repair to expert <strong>siding installations</strong> and <strong>vertical siding</strong> solutions, we help homeowners in humid continental climates like Pennsylvania
            choose materials that withstand hot summers, harsh winters, and year-round weather.
            Let our skilled roofing and siding contractors simplify the process and deliver results you&rsquo;ll love.
          </SecondaryText>
        </div>



      </div>


      <div>
        <ServicesGrid services={services}/>
      </div>


      <div>
        <SidingMaterial />
      </div>

      <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-left px-6 py-32">


        <HeaderText as='h2' variant='large' className='text-left'>
          The Steps we take as your Siding Contractors
        </HeaderText>

        <div className='my-12'>

          <SecondaryText>
            Replacing siding is a structured process that ensures your home remains protected, energy-efficient, and visually appealing. At Paragon Exterior®, our approach combines expert siding installation with the knowledge and precision of a trusted roofing contractor. Each phase — from removing old materials and inspecting for damage to precise installation and cleanup — is handled by our experienced team. Whether you&apos;re updating siding or working with one of the best roofing companies near you for roof repair or residential roofing, we make the process simple, stress-free, and built to last.
          </SecondaryText>


        </div>

      </div>

      <div>
        {/* <StepsSection/> */}
        <HowItWorks />
      </div>

      <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
        <GetEstimate />
      </div>
    </div>
  )
}
