import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import React from 'react'
import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';
import InfoSection from '@/components/service-page/Info';
import WhyParagon, {WhyParagonRoofRepair} from '@/components/WhyParagon';
import CommercialRoofRepairReasons from '@/components/service-page/commercial/CommercialRoofRepair';

export const metadata = {
    title: 'Commercial Roof Repair Contractor | Paragon Exterior',
    description: 'Professional commercial roof repair services for businesses throughout PA, NJ, and DE. Expert commercial roofing contractors specializing in emergency commercial roof leak repair, flat roof repair, and building restoration.'
}

export default async function page() {
    return (
        <div className='min-h-screen'>
            <Hero
                mainText={`Commercial Roof Repair`}
                subText="Expert commercial roof repair services for businesses across Pennsylvania, New Jersey, and Delaware. From emergency commercial roof leak repair to preventive maintenance, Paragon Exterior delivers reliable commercial roofing solutions that protect your business investment."
                imgSrc="/images/commercial/repair/hero.webp"
                imgAlt="Commercial roof repair contractor working on business building"
            />

            <InfoSection
                imgSrc="/images/commercial/repair/repair3.jpg"
                imgAlt="Professional commercial roof repair technician working on damaged commercial building"
                title="Commercial Roof Repair You Can Trust"
                titleAs='h1'
                mainContent="When your commercial property faces roof damage from storms, age-related wear, or unexpected leaks, Paragon Exterior provides fast, reliable commercial roof repair services to keep your business operations running smoothly. Our certified commercial roofing specialists serve businesses throughout Pennsylvania, New Jersey, and Delaware with expert craftsmanship and honest commercial roofing solutions. We've assembled a dedicated commercial roof repair team that specializes in diagnosing and fixing all types of commercial roofing problems — from damaged membrane systems and compromised flashing to ponding water issues and structural concerns on commercial buildings."
                bottomContent="Severe weather can cause sudden damage to your commercial roof — torn membrane systems, damaged drainage, or dangerous leaks that threaten your business operations. Our emergency commercial roof repair team responds quickly to secure your commercial property, prevent further damage to inventory and equipment, and restore your business continuity. After storm damage, don't risk your commercial investment — let our commercial roofing experts inspect your roof and address issues before they escalate into costly business interruptions."
                imagePosition="right"
            />

            <CommercialRoofRepairReasons />

            <WhyParagon
                title='Why Choose Paragon Exterior for Commercial Roof Repair?'
                titleAs='h2'
            />

            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    )
}