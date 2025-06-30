import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import Info from '@/components/service-page/Info';
import React from 'react'
import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';
import InfoSection from '@/components/service-page/Info';




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

            <InfoSection
                imgSrc="/images/roof-service/roof-repair/roof-repair3.jpg"
                imgAlt="Professional roof repair technician working on damaged roof"
                title="Roof Repair You Can Count On"
                titleAs='h1'
                mainContent="Whether it's storm damage, age-related wear, or unexpected leaks, Paragon Exterior is ready to provide fast, reliable roof repair when you need it most. Our experienced roofing specialists proudly serve Pennsylvania, New Jersey, and Delaware with expert craftsmanship and honest service. We've built a dedicated roof repair team that focuses on diagnosing and fixing all types of roofing problems — from missing shingles and damaged flashing to leaks and structural concerns. Our trained and professional technicians arrive ready to assess the damage and fix it right the first time, ensuring your home stays protected."
                bottomContent="Severe storms can cause sudden damage — torn shingles, damaged gutters, or dangerous leaks. Our emergency roof repair team responds quickly to secure your roof, prevent further damage, and restore your peace of mind. After a storm, don't wait — let our experts inspect your roof and address issues before they escalate."
                imagePosition="right"
            />


            <RoofRepairReasons

            />

                        <div className="py-12 pt-20 sm:pt-0">
                            <GetEstimate />
                        </div>
        </div>

    )
}
  
