import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';
import {WhyParagonRoofRepair} from '@/components/WhyParagon';
import React from 'react';

export const metadata = {
    title: 'Local Roof Repair Contractors',
    description: 'Reliable roof repair for homes and businesses in PA, NJ, and DE. Our experts fix leaks, replace shingles, and provide long-lasting solutions. Trust Paragon Exterior to protect your property.'
};

export default async function page() {
    return (
        <div className='min-h-screen'>
            <Hero
                mainText="Roof Repair"
                subText="Paragon Exterior provides reliable roof repairs, including leak fixes, shingle replacement, flat roofing, and storm damage solutions. Protect your home with experienced professionals."
                imgSrc="/images/roof-service/roof-repair/roof-repair.jpg"
                imgAlt="Paragon Exterior roofing company"
            />

            <InfoSection
                imgSrc="/images/roof-service/roof-repair/roof-repair3.jpg"
                imgAlt="Professional roof repair technician working on damaged roof"
                title="Dependable Roof Repair Services"
                titleAs='h1'
                mainContent="When your roof faces damage from storms, aging materials, or leaks, Paragon Exterior delivers fast, reliable solutions. Serving homeowners and businesses across Pennsylvania, New Jersey, and Delaware, our skilled roofers quickly identify problems and perform repairs that last. We fix all common roof issues, including leaks, missing or broken shingles, damaged flashing, and flat-roof deterioration. With detailed inspections and straightforward advice, our technicians ensure your roof repair is done right, protecting your home or business from further damage."
                bottomContent="Storm damage can strike suddenly, leading to urgent roofing issues like torn shingles, gutter problems, and leaks. Paragon Exterior's emergency repair team provides immediate assistance to secure your roof, prevent additional damage, and keep your property safe. Don’t wait for minor issues to turn major—schedule a free inspection today."
                imagePosition="right"
            />

            <RoofRepairReasons />

            <WhyParagonRoofRepair
                title='Why Choose Paragon Exterior for Roof Repairs?'
                titleAs='h2'
            />

            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
