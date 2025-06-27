import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import Info from '@/components/service-page/Info';
import React from 'react'
import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';




export const metadata = {
    title: 'Roof Repair | Paragon Exterior',
    description: 'Professional roof repair services for homes and businesses. Our expert team specializes in roof leak repair, shingle replacement, and long-lasting roofing solutions. Restore your roof’s integrity and protect your property with Paragon Exterior.'
}

export default async function page() {

    return (

        <div className='min-h-screen'>
            <Hero
                mainText={`Roof Repair`}
                subText="Explore our expert roofing services, including roof repair, roof leak repair, residential roofing, and flat roofing solutions. Trust Paragon Exterior for quality craftsmanship and durable materials."
                imgSrc="/images/roof-service/roof-repair/roof-repair.jpg"
                imgAlt="Paragon Exterior roofing company"
            />

            <Info 
                imgSrc="/images/roof-service/roof-repair/roof-repair3.jpg"
                imgAlt="Roof repair demonstration"
            />



            <RoofRepairReasons

            />

            <GetEstimate/>
        </div>

    )
}
  
