import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import React from 'react';
import CommercialRoofRepairReasons from '@/components/service-page/commercial/CommercialRoofRepair';
import InfoSection from '@/components/service-page/Info';
import WhyParagon, {WhyParagonRoofRepair} from '@/components/WhyParagon';
import SecondaryText from '@/components/SecondaryText';
import HeaderText from '@/components/HeaderText';

export const metadata = {
    title: 'Commercial Roof Repair Contractor',
    description: 'Professional commercial roof repair services for businesses throughout PA, NJ, and DE. We specialize in commercial roof leak repair, & flat roof repair.',
};

export default function Page() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Commercial Roof Repair"
                subText="Protect your business investment with expert commercial roof repair by Paragon Exterior. Serving Pennsylvania, New Jersey, and Delaware with rapid emergency roof repair, flat roofing solutions, and long-term maintenance for every commercial property."
                imgSrc="/images/commercial/repair/hero.webp"
                imgAlt="Commercial roof repair contractor working on business building"
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/commercial/repair/repair3.jpg"
                imgAlt="Professional commercial roof repair technician working on damaged commercial building"
                title="Commercial Roof Repair You Can Trust"
                titleAs="h1"
                mainContent={
                    <>
                        <SecondaryText>
                            When your commercial property faces roof damage—whether from severe storms, age-related wear, or unexpected leaks—Paragon Exterior is the trusted partner businesses across Pennsylvania, New Jersey, and Delaware rely on for urgent, reliable commercial roof repair services. Our certified commercial roofing specialists are trained to handle every roofing challenge, from sudden leaks and storm damage to chronic flat roof issues and preventive maintenance.
                        </SecondaryText>
                        <SecondaryText className="mt-4">
                            We understand that <strong>roof problems disrupt business</strong>. That’s why our dedicated commercial roof repair team provides fast response times, detailed inspections, and honest solutions that get your building watertight and back to business. We repair all major commercial roofing systems: EPDM, TPO, modified bitumen, metal, and more. Our goal? To extend the life of your commercial roof, minimize costly downtime, and protect your investment with workmanship you can count on.
                        </SecondaryText>
                    </>
                }
                bottomContent={
                    <>
                        <SecondaryText>
                            <strong>Don’t let a leaking or damaged commercial roof threaten your business operations, inventory, or reputation.</strong> Our emergency commercial roof repair crews are available 24/7 to secure your property, prevent further damage, and restore safety fast. After a major storm or any sign of a roof issue, contact Paragon Exterior for a no-obligation inspection—our experts will pinpoint the source of the problem and provide a detailed repair plan and clear pricing, every time.
                        </SecondaryText>
                        <SecondaryText className="mt-4">
                            With decades of experience and a proven record of successful repairs for warehouses, retail, medical, manufacturing, and office buildings, Paragon Exterior is the commercial roofing contractor that local businesses trust most.
                        </SecondaryText>
                    </>
                }
                imagePosition="right"
            />

            {/* COMMON COMMERCIAL ROOF ISSUES */}
            <CommercialRoofRepairReasons />

            {/* TRUST & EXPERIENCE */}
            <section className="w-5/6 mx-auto py-16 text-center">
                <HeaderText as="h2" className="font-bold text-primaryblue mb-6">
                    Why Businesses Choose Paragon Exterior for Commercial Roof Repair
                </HeaderText>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    <strong>• 20+ years of experience</strong> in commercial roof repair and restoration across PA, NJ, and DE
                    <br />
                    <strong>• Fully licensed & insured</strong> commercial roofing contractor
                    <br />
                    <strong>• Rapid emergency leak repair & 24/7 response</strong>
                    <br />
                    <strong>• Specialists in flat roofs, metal roofing, membrane systems, and commercial building restoration</strong>
                    <br />
                    <strong>• Transparent written estimates and ironclad workmanship warranties</strong>
                    <br />
                    <strong>• Dozens of 5-star Google Reviews from satisfied local business owners</strong>
                </p>
            </section>

            {/* WHY PARAGON - COMPONENT */}
            <WhyParagon
                title="Why Choose Paragon Exterior for Commercial Roof Repair?"
                subTitle="From urgent leak repair to preventive maintenance and full roof restoration, Paragon Exterior combines local expertise with the highest standards of safety, communication, and workmanship. Our commercial roofing team delivers solutions designed to keep your property protected and your operations running—guaranteed."
                titleAs="h2"
            />

            {/* FINAL CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate 
               
                />
            </div>
        </div>
    );
}
