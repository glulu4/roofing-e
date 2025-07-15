

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
                "Yes! Most metal roof problems can be repaired. Small leaks, minor rust, and loose fasteners can often be fixed quickly. For bigger issues—like large leaks, widespread rust, or storm damage—it's best to call a professional metal roof repair contractor to ensure your roof is restored safely and correctly."
        },
        {
            question: "How much does a metal roof repair cost?",
            answer:
                "Most metal roof repairs range from $5 to $15 per square foot, or about $300 to $1,500 for common repairs. Prices depend on the type of repair, the roof's size and pitch, how easy it is to access, and the local labor rates. Emergency metal roof repairs may cost a bit more."
        },
        {
            question: "Can you replace one panel of a standing seam metal roof?",
            answer:
                "Absolutely! Our team can replace individual standing seam metal roof panels. We carefully remove the damaged panel, prepare the area, and install the new one—matching color and style, and ensuring it's watertight for years to come."
        },
        {
            question: "Will Flex Seal stop leaks on a metal roof?",
            answer:
                "Flex Seal can help as a temporary fix for small metal roof leaks, but it’s not a permanent solution. For a lasting repair and leak protection, contact a trusted metal roof repair company."
        },
        {
            question: "What is the best sealant for metal roof leaks?",
            answer:
                "The best sealant for metal roof leaks is a high-quality silicone made for roofing. It sticks well to metal, handles tough weather, and keeps water out."
        },
        {
            question: "How often should I have my metal roof inspected?",
            answer:
                "You should schedule a professional metal roof inspection once a year. Regular inspections catch small issues—like loose fasteners or early rust—before they turn into costly repairs."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Top-Rated Metal Roof Repair Contractors"
                subText="Paragon Exterior delivers expert metal roof repair and restoration for homes and businesses across Pennsylvania, New Jersey, and Delaware. From emergency leak repair to full panel replacement, our certified team restores and protects your roof—fast, reliable, and guaranteed."
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
                        Our <strong>metal roof repair services</strong> keep your roof strong, watertight, and looking great. We fix metal roof leaks, dents, rust, corrosion, and damaged panels—helping you avoid bigger, more expensive problems down the road.
                        <br /><br />
                        Whether you need emergency <strong>metal roof leak repair</strong> after a storm or routine <strong>metal roof maintenance</strong>, our licensed contractors use the best materials and proven techniques for repairs that last.
                    </>
                }
                bottomContent={
                    <>
                        We service all metal roof types, including standing seam, corrugated, ribbed, and architectural metal roofing. Our local, certified metal roof repair contractors serve both homes and businesses across Pennsylvania, New Jersey, and Delaware—offering fast, honest service and strong warranties.
                    </>
                }
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair3.webp"
                imgAlt="metal roof repair inspection and maintenance"
                title="Comprehensive Metal Roof Repairs & Maintenance"
                mainContent={
                    <>
                        If your metal roof is leaking, rusting, or showing any signs of damage, don’t wait! Our professional roofing team recommends an annual inspection—both from the ground and on the roof—to catch issues early and protect your investment.
                        <br /><br />
                        We handle all types of metal roof repairs: fixing scuffs and scratches, removing debris and mildew, treating rust before it spreads, and replacing worn fasteners and flashing. Our team reseals seams and penetrations to stop leaks and extend your roof’s life.
                    </>
                }
                bottomContent={
                    <>
                        Did your roof take damage from a recent storm? Don’t risk water damage inside—call Paragon Exterior for a fast inspection and repair. We’ll restore your metal roof quickly and prevent bigger, costlier problems.
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
                            <p className="text-gray-600">Stop leaks fast! We find and fix metal roof leaks at seams, fasteners, or panels to restore full weather protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Panel Replacement</h3>
                            <p className="text-gray-600">We replace damaged, dented, or corroded metal roof panels—using materials that match your current roof for a seamless finish.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Seam Repair</h3>
                            <p className="text-gray-600">Our team repairs and reseals separated or damaged seams on standing seam metal roofs for strong, watertight protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Rust Treatment</h3>
                            <p className="text-gray-600">We remove rust and apply protective coatings to stop corrosion, extending the life of your metal roof.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fastener Repair</h3>
                            <p className="text-gray-600">We replace loose or missing screws with high-quality fasteners designed for metal roofs, preventing leaks and keeping panels secure.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Storm Damage Repair</h3>
                            <p className="text-gray-600">Emergency service for hail, wind, or falling debris. We fix metal roofs fast to keep your property protected after a storm.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* METAL ROOF REPAIR PROCESS */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <HeaderText className="text-center mb-12">Our Proven Metal Roof Repair Process</HeaderText>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white rounded-full aspect-square w-10 h-10 flex items-center justify-center font-semibold">1</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Free Inspection</h3>
                                <p className="text-gray-600">Our certified experts inspect your metal roof inside and out—spotting every leak, crack, or area at risk. You get clear answers and honest advice every step of the way.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">2</div>
                            <div>
                                <h3 className="text-lg font-semibold">Transparent Estimate</h3>
                                <p className="text-gray-600">We give you a written, detailed estimate for all recommended metal roof repairs. No surprises or hidden fees—just straightforward, fair pricing.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">3</div>
                            <div>
                                <h3 className="text-lg font-semibold">Quality Repair Work</h3>
                                <p className="text-gray-600">Our skilled crew handles every repair—from leak fixes to full panel replacement—using the highest quality materials and industry-leading techniques for results that last.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">4</div>
                            <div>
                                <h3 className="text-lg font-semibold">Final Inspection & Warranty</h3>
                                <p className="text-gray-600">We stand by our work! Every job includes a final walk-through and a strong warranty for your total peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KEY BENEFITS */}
            <Benefits
                title="Why Choose Professional Metal Roof Repair?"
                description="Expert metal roof repair keeps your property safe, saves you money, and gives your roof a longer life. Our certified team uses proven repair methods and quality materials for results you can trust."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair4.avif",
                    alt: 'Professional metal roof repair with high-quality silicone sealant'
                }}
                img2={{
                    src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair5.avif",
                    alt: 'Expert metal panel replacement on standing seam roof system'
                }}
                text1="✔ Adds 10-15 years to your metal roof's lifespan, avoiding the high cost of early roof replacement."
                text2="✔ Stops leaks and structural damage before they lead to interior water damage, mold, or costly repairs."
            />

            {/* SERVICE AREAS */}
            <div className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <HeaderText className="mb-6">Metal Roof Repair Service Areas</HeaderText>
                    <SecondaryText className="mb-8">
                        Paragon Exterior offers trusted metal roof repair in Pennsylvania, New Jersey, and Delaware. We handle emergency calls, routine maintenance, and full metal roof restoration—all with fast response times and guaranteed results.
                    </SecondaryText>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Pennsylvania</h3>
                            <p className="text-gray-600">
                                Metal roof repair and restoration across the Greater Philadelphia Area, including Feasterville-Trevose, Germantown, Collegeville, and King of Prussia.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">New Jersey</h3>
                            <p className="text-gray-600">Full-service metal roof repair for homes and businesses throughout NJ, including Newark, Jersey City, Paterson, and beyond.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delaware</h3>
                            <p className="text-gray-600">Reliable metal roof repair and leak service in Wilmington, Dover, Newark, and all parts of the First State.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <FAQSection
                title="Frequently Asked Questions About Metal Roof Repair"
                faqs={faqs}
            />

            {/* CTA */}
            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}
