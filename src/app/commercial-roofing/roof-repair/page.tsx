import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import React from 'react';
import CommercialRoofRepairReasons from '@/components/service-page/commercial/CommercialRoofRepair';
import InfoSection from '@/components/service-page/Info';
import WhyParagon, {WhyParagonRoofRepair} from '@/components/WhyParagon';
import SecondaryText from '@/components/SecondaryText';
import HeaderText from '@/components/HeaderText';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';
import FAQSection from '@/components/FAQSection';

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

            {/* REPAIR COST SECTION */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-6">
                        Commercial Roof Repair Cost: What to Expect
                    </HeaderText>
                    <SecondaryText className="text-center mb-8">
                        We believe in transparent pricing so you can budget properly. Here&apos;s what most commercial roof repairs actually cost based on our years of experience.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Minor Leak Repairs</span>
                                <SecondaryText className="text-sm mt-1">
                                    $500 - $1,500 for simple membrane patches, sealant repairs, or small flashing fixes. Usually completed in half a day.
                                </SecondaryText>
                            </div>
                            
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Moderate Repairs</span>
                                <SecondaryText className="text-sm mt-1">
                                    $1,500 - $5,000 for larger membrane sections, multiple leak points, or drainage improvements. Typically 1-2 days of work.
                                </SecondaryText>
                            </div>
                            
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Major Repairs</span>
                                <SecondaryText className="text-sm mt-1">
                                    $5,000 - $15,000 for extensive damage, structural issues, or large sections requiring replacement. May take several days.
                                </SecondaryText>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="border-l-4 border-green-600 pl-4">
                                <span className="font-bold text-gray-900">Emergency Repairs</span>
                                <SecondaryText className="text-sm mt-1">
                                    $800 - $3,000 for urgent leak sealing and temporary fixes to prevent damage until permanent repairs can be made.
                                </SecondaryText>
                            </div>
                            
                            <div className="border-l-4 border-green-600 pl-4">
                                <span className="font-bold text-gray-900">Preventive Maintenance</span>
                                <SecondaryText className="text-sm mt-1">
                                    $300 - $800 for annual inspections and minor maintenance that prevents bigger problems down the road.
                                </SecondaryText>
                            </div>
                            
                            <div className="border-l-4 border-green-600 pl-4">
                                <span className="font-bold text-gray-900">What Affects Cost</span>
                                <SecondaryText className="text-sm mt-1">
                                    Roof height, accessibility, material type, damage extent, and emergency vs. scheduled work all impact final pricing.
                                </SecondaryText>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
                        <SecondaryText>
                            <strong>Bottom line:</strong> Most commercial roof repairs cost way less than you&apos;d expect, especially when caught early. We always provide free inspections and detailed written estimates, so you know exactly what you&apos;re paying for before any work starts.
                        </SecondaryText>
                    </div>
                </div>
            </section>

            {/* WHY PARAGON - COMPONENT */}
            <WhyParagon
                title="Why Choose Paragon Exterior for Commercial Roof Repair?"
                subTitle="From urgent leak repair to preventive maintenance and full roof restoration, Paragon Exterior combines local expertise with the highest standards of safety, communication, and workmanship. Our commercial roofing team delivers solutions designed to keep your property protected and your operations running—guaranteed."
                titleAs="h2"
            />

            {/* GOOGLE REVIEWS */}
            <GoogleReviews />

            {/* FAQ SECTION */}
            <FAQSection
                title="Commercial Roof Repair FAQ"
                faqs={[
                    {
                        question: "How quickly can you respond to emergency roof repairs?",
                        answer: "We offer 24/7 emergency response for urgent commercial roof leaks. In most cases, we can have a crew on-site within a few hours to stop active leaks and prevent further damage. Our goal is to get your business back to normal operations as quickly as possible."
                    },
                    {
                        question: "Should I repair or replace my commercial roof?",
                        answer: "If your roof is under 15 years old with isolated damage, repair usually makes sense. But widespread issues, multiple leaks, or roofs over 20 years old often benefit more from replacement. We'll give you honest advice about what's most cost-effective for your situation."
                    },
                    {
                        question: "Do you work with insurance companies?",
                        answer: "Absolutely. We're experienced with commercial insurance claims and can help document damage properly for your claim. We work directly with adjusters and provide detailed reports and photos to support your case."
                    },
                    {
                        question: "How long do commercial roof repairs take?",
                        answer: "Simple repairs might take half a day, while complex issues can require several days. We always provide realistic timelines upfront and work to minimize disruption to your business operations. Emergency repairs are prioritized for same-day completion when possible."
                    },
                    {
                        question: "What types of commercial roofs do you repair?",
                        answer: "We repair all major commercial roofing systems: EPDM rubber, TPO membrane, modified bitumen, built-up roofing, metal roofing, and more. Our crews are trained on the specific techniques each material requires for lasting repairs."
                    },
                    {
                        question: "Do you offer maintenance programs?",
                        answer: "Yes, we offer preventive maintenance programs that include annual inspections, minor repairs, and regular upkeep. These programs help catch small issues before they become expensive problems and can significantly extend your roof's lifespan."
                    }
                ]}
            />

            {/* FINAL CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
