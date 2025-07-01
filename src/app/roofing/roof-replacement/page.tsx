import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import Info from '@/components/service-page/Info';
import React from 'react'
import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';
import Row from '@/components/Row';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import InfoSection from '@/components/service-page/Info';
import {WhyParagonRoofReplacement} from '@/components/WhyParagon';




export const metadata = {
  title: 'Roof Replacement | Paragon Exterior',
  description: 'Expert roof replacement services for homes and businesses in Pennsylvania, New Jersey, and Delaware. Our team provides durable, energy-efficient roofing solutions designed to protect your property and enhance curb appeal. Trust Paragon Exterior for professional roof installation and replacement.'
}


export default async function page() {

  return (

    <div className='min-h-screen'>
      <Hero
        mainText="Roof Replacement"
        subText="Paragon Exterior specializes in professional roof replacement services, delivering durable, energy-efficient roofing solutions that protect your home and enhance curb appeal. From shingle roofs to flat roofing, our experts handle it all."
        imgSrc="/images/roof-service/roof-replacement/roof-replacement-hero.webp"
        imgAlt="Roof replacement hero image"
      />


      <InfoSection
        titleAs='h1'
        imgSrc="/images/roof-service/roof-replacement/roof-replacement-info.webp"
        imgAlt="Crew performing a roof replacement with new shingles"
        title="Roof Replacement You Can Trust"
        mainContent="When your roof has reached the end of its life—or storm damage, sagging decking, and chronic leaks have made repairs impractical—Paragon Exterior delivers the roof replacement you can count on. Our licensed roofing specialists remove your aging roof, inspect the decking, and install a brand-new, high-performance system using premium shingles and flashing. From flat roof replacement on commercial buildings to complete tear-offs for single-family homes, we handle every step with expert craftsmanship and clear communication."
        bottomContent="A new roof is a major investment, but it’s also the best way to safeguard your home from water intrusion, mold, and rising energy bills. We offer honest estimates, fast turnaround, and industry-leading warranties to give you total peace of mind. If you suspect your roof is beyond repair, schedule a free roof replacement inspection today and discover how Paragon Exterior can protect your property for decades to come."
        imagePosition="right"
      />





      <div className='mx-auto w-5/6 py-6 lg:py-12'>

        <div className='mb-32 text-center'>
          <HeaderText>
            Why Trust Paragon Exterior for Your Roof Replacement?
          </HeaderText>

          <SecondaryText>
            A roof replacement is one of the most important investments you can make for your home or business. At Paragon Exterior, we combine high-quality materials with expert craftsmanship to ensure your new roof is built to last. Whether you’re dealing with an aging roof, storm damage, or severe leaks, our team provides reliable solutions that restore the integrity of your property.
          </SecondaryText>

        </div>

        <Row
          title="Signs You Need a Roof Replacement"
          description={
            <>
              Is your roof over 20 years old, missing shingles, or showing signs of sagging or water damage? These are common indicators that it may be time for a new roof. <a href="/blog/7-ways-to-know-you-need-a-new-roof" className="text-blue-600"> Learn more</a> about the signs that signal it’s time to replace your roof.
            </>
          }
          imageSrc="/images/roof-service/roof-replacement/roof-replacement2.webp"
        />

        <Row
          title="Why Choose Paragon Exterior for Your Roof Replacement?"
          description="At Paragon Exterior, we understand that a roof replacement is a significant investment. We offer honest estimates, top-rated materials, and precise installation to ensure your new roof provides superior protection, energy efficiency, and lasting value. From asphalt shingles to flat roof systems, we handle replacements for all roof types."
          imageSrc="/images/roof-service/roof-replacement/roof-replacement3.webp"
          reverse
          className="pt-12 lg:pt-24"
        />

      </div>


      <WhyParagonRoofReplacement
        title='Why Choose Paragon Exterior for Your Roof Replacement?'
        titleAs='h2'
        subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch roof replacement services that combine beauty with durability. Our experienced team understands the intricacies of roof replacement, ensuring your home not only looks stunning but is also protected against the elements.'
      />


      <div className="py-12 pt-20 sm:pt-0">
        <GetEstimate />
      </div>
    </div>

  )
}

