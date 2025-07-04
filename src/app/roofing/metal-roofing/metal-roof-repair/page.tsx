import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import FAQSection from '@/components/FAQSection';

export const metadata = {
    title: 'Metal Roof Repair Services | Fast Leak & Panel Repair in PA, NJ & DE',
    description: 'Top-rated metal roof repair services in Pennsylvania, New Jersey, and Delaware. We fix leaks, replace panels, treat rust, and restore standing seam and corrugated metal roofs. Free estimates for metal roof repair — call now!',
};
  

export default function MetalRoofRepairPage() {
    const faqs = [
        {
            question: "Can you repair a metal roof?",
            answer:
                "Yes, metal roofs can be repaired in many cases. Minor metal roof repairs like patching small holes, fixing leaks, or addressing rust can often be handled by homeowners with some experience. However, more extensive metal roof damage, such as widespread rust, buckling, or structural issues, requires professional metal roof repair services for proper restoration."
        },
        {
            question: "How much does a metal roof repair cost?",
            answer:
                "Metal roof repair costs typically range from $5 to $15 per square foot, or about $300 to $1,500 on average. The cost of metal roof repair depends on factors like the type of repair needed, roof size, accessibility, and regional labor rates. Emergency metal roof repairs may cost more than scheduled maintenance."
        },
        {
            question: "Can you replace one panel of a standing seam metal roof?",
            answer:
                "Yes, individual standing seam metal roof panels can be replaced. Our metal roof repair process involves three basic steps: carefully removing the damaged panel, preparing the area for the replacement panel, and installing the new panel using specialized tools and techniques to ensure proper sealing and alignment."
        },
        {
            question: "Will Flex Seal stop leaks on a metal roof?",
            answer:
                "Flex Seal can be used as a temporary solution for sealing small leaks or cracks on a metal roof. However, it is not a permanent metal roof repair solution and may require periodic reapplication. For long-term metal roof leak repairs, consult a professional roofing contractor."
        },
        {
            question: "What is the best sealant for metal roof leaks?",
            answer:
                "High-quality silicone sealants are the best choice for metal roof repair. These sealants are versatile, adhere well to metal surfaces, effectively fill gaps, and help prevent leaks. They're specifically designed for metal roofs exposed to heavy rain, snow, and temperature fluctuations."
        },
        {
            question: "How often should I have my metal roof inspected?",
            answer:
                "Metal roofs should be professionally inspected annually to identify potential issues before they require major metal roof repairs. Regular inspections help catch problems like loose fasteners, damaged seams, or early signs of corrosion that can be addressed with minor repairs."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Top-Rated Metal Roof Repair Contractors"
                subText="Paragon Exterior provides expert metal roof repair for homes and businesses across PA, NJ, and DE. From emergency leak repair to full panel replacement, we restore and protect your metal roof — fast, reliable, guaranteed."
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair2.webp"
                imgAlt="Metal roof repair contractor sealing a standing seam roof"
            />


            {/* WHAT IS */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair1.webp"
                imgAlt="Close-up of professional metal roof patch repair work"
                title="Expert Metal Roof Repair Services"
                mainContent={
                    <>
                        Our **metal roof repair services** fix leaks, dents, rust, corrosion, and damaged panels to protect your home or building from the elements. We handle everything from sealing small holes and replacing fasteners to resealing seams and installing new panels when needed.

                        <br /><br />

                        Whether it’s emergency **metal roof leak repair** after a storm or proactive **metal roof maintenance**, our licensed contractors deliver long-lasting solutions using top-quality materials.
                    </>
                }
                  
                bottomContent={
                    <>
                        We specialize in all types of metal roof repair, including standing seam metal roofs, corrugated metal panels, ribbed metal roofing, and architectural metal systems. Our licensed metal roof repair contractors serve residential and commercial properties throughout Pennsylvania, New Jersey, and Delaware with fast, reliable service and comprehensive warranties.
                    </>
                }
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair3.webp"
                imgAlt="metal roof repair inspection and maintenance"
                title="Metal Roof Repair Services"
                mainContent={
                    <>
                        If your metal roof is leaking or shows signs of damage, our professional roofing company recommends annual metal roof inspections from both ground level and on-roof assessments. Regular metal roof maintenance helps prevent major repair issues and extends your roof's lifespan significantly.

                        <br /><br />

                        Our comprehensive metal roof repair services include fixing surface scuffs, removing debris accumulation, cleaning dirt and mildew, addressing stains, and treating corrosion before it spreads. We also repair damaged flashing, replace worn fasteners, and reseal penetrations to maintain your roof's weather resistance.
                    </>
                }
                bottomContent={
                    <>
                        If you've experienced recent storm damage that has you concerned about your metal roof's condition, schedule a professional roof inspection today. When damage is visible or suspected, contact us immediately so we can quickly restore the integrity of your metal roofing system and prevent further deterioration or interior damage.
                    </>
                }
                imagePosition="left"
            />

            {/* METAL ROOF REPAIR TYPES */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <HeaderText className="text-center mb-12">Common Metal Roof Repair Services</HeaderText>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Leak Repair</h3>
                            <p className="text-gray-600">Expert metal roof leak repair addressing seam failures, fastener issues, and panel damage to restore complete weather protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Panel Replacement</h3>
                            <p className="text-gray-600">Complete metal roof panel replacement for severely damaged, dented, or corroded sections using matching materials and professional installation.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Seam Repair</h3>
                            <p className="text-gray-600">Specialized standing seam metal roof repair services to fix separated or damaged seams and restore structural integrity.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Rust Treatment</h3>
                            <p className="text-gray-600">Professional rust removal and treatment to prevent corrosion spread, followed by protective coatings to extend roof life.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fastener Repair</h3>
                            <p className="text-gray-600">Replacement of loose, missing, or damaged fasteners with high-quality screws and washers designed for metal roofing systems.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Storm Damage Repair</h3>
                            <p className="text-gray-600">Emergency metal roof repair services for hail damage, wind damage, and debris impact to quickly restore your roof's protection.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* METAL ROOF REPAIR PROCESS */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <HeaderText className="text-center mb-12">Our Metal Roof Repair Process</HeaderText>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white rounded-full aspect-square w-10 h-10 flex items-center justify-center font-semibold">1</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Professional Inspection</h3>
                                <p className="text-gray-600">Our certified metal roof repair specialists conduct a thorough inspection to identify all issues, assess damage severity, and determine the most effective repair approach.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">2</div>
                            <div>
                                <h3 className="text-lg font-semibold">Detailed Estimate</h3>
                                <p className="text-gray-600">We provide a comprehensive metal roof repair estimate detailing all necessary work, materials, and costs with transparent pricing and no hidden fees.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">3</div>
                            <div>
                                <h3 className="text-lg font-semibold">Expert Repair Work</h3>
                                <p className="text-gray-600">Our skilled technicians perform all metal roof repairs using high-quality materials and proven techniques to ensure lasting results and optimal performance.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">4</div>
                            <div>
                                <h3 className="text-lg font-semibold">Quality Assurance</h3>
                                <p className="text-gray-600">We conduct final inspections and provide warranties on all metal roof repair work to guarantee your satisfaction and peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KEY BENEFITS */}
            <Benefits
                title="Why Choose Professional Metal Roof Repair?"
                description="Professional metal roof repair services extend your roof's lifespan, enhance energy efficiency, and prevent costly damage to your property while maintaining manufacturer warranties."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair4.avif",
                    alt: 'Professional metal roof repair with high-quality silicone sealant'
                }}
                img2={{
                    src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair5.avif",
                    alt: 'Expert metal panel replacement on standing seam roof system'
                }}
                text1="✔ Extends metal roof lifespan by 10-15 years and defers expensive replacement costs through proper maintenance and timely repairs."
                text2="✔ Fixes leaks and structural damage before they lead to costly interior damage, mold growth, or compromise to your building's integrity."
            />

            {/* SERVICE AREAS */}
            <div className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <HeaderText className="mb-6">Metal Roof Repair Service Areas</HeaderText>
                    <SecondaryText className="mb-8">
                        Paragon Exterior provides expert metal roof repair services throughout Pennsylvania, New Jersey, and Delaware. Our certified contractors are available for emergency repairs, scheduled maintenance, and comprehensive metal roof restoration projects.
                    </SecondaryText>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Pennsylvania</h3>
                            <p className="text-gray-600">Comprehensive metal roof repair services across PA including Philadelphia, Pittsburgh, Allentown, and surrounding communities.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">New Jersey</h3>
                            <p className="text-gray-600">Professional metal roof repair throughout NJ including Newark, Jersey City, Paterson, and the entire Garden State region.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delaware</h3>
                            <p className="text-gray-600">Expert metal roof repair services in DE including Wilmington, Dover, Newark, and all areas of the First State.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="my-24 w-5/6 mx-auto">
                <HeaderText className="text-center mb-6">Metal Roof Repair FAQs</HeaderText>
                <FAQSection faqs={faqs} />
            </div>

            {/* CTA */}
            <div className="py-16 text-center">

                <GetEstimate />
            </div>
        </div>
    );
}