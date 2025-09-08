import GetEstimate from "@/components/landing-ui/GetEstimate";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import AboutSection from "@/components/service-page/roof/AboutSection";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import FAQSection from "@/components/FAQSection";
import React from "react";
import Image from "next/image";

/* ─────────────────────────────────────────
   SEO META
───────────────────────────────────────── */
export const metadata = {
    title: "Roof Leak Repair Near Me",
    description:
        "Paragon Exterior provides fast roof leak repair across PA, NJ, and DE. Stop water damage with our roof-leak specialists—honest estimates & permanent fixes"
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default async function Page() {
    return (
        <div className="min-h-screen">

            {/* HERO */}
            <Hero
                mainText="Roof Leak Repair Experts"
                subText="Water dripping from the ceiling? We deliver same-day roof leak repair to stop damage fast and protect your home."
                imgSrc="/images/roof-service/roof-leak/roof-leak-hero.jpg"
                imgAlt="Technician performing roof leak repair"
            />

            {/* MAIN INFO SECTION */}
            <InfoSection
                imgSrc="/images/roof-service/roof-leak/leak1.webp"
                imgAlt="Professional roof leak detection and repair"
                titleAs="h1"
                title="Fast, Permanent Roof Leak Repair That Actually Works"
                mainContent="Here&apos;s the truth about roof leaks: what you see dripping into your bucket isn&apos;t where the actual leak is happening. Water can travel along rafters, down walls, and through insulation before it finally shows up as a stain on your ceiling. That&apos;s why most DIY repairs fail — they&apos;re fixing the wrong spot. Our roof leak specialists use moisture detection technology and decades of experience to find the real source and fix it permanently the first time."
                bottomContent="We&apos;ve repaired thousands of roof leaks across Pennsylvania, New Jersey, and Delaware, from simple missing shingles to complex flashing failures around chimneys and dormers. When you call Paragon Exterior, you get rapid response, honest diagnosis, and repairs that actually stop the water for good. No temporary patches, no repeat visits — just professional roof leak repair that protects your home and your peace of mind."
                imagePosition="right"
            />

            {/* INFO SECTION */}
            <InfoSection
            className="bg-blue-50"
                imgSrc="/images/roof-service/roof-leak/infra-red.webp"
                imgAlt="Infrared moisture scan of leaking roof"
                titleAs="h2"
                title="Roof Leak Repair You Can Count On"
                mainContent="Our dedicated roof-leak team handles asphalt, metal, and flat roofs. We quickly diagnose the issue—whether it’s deteriorated pipe flashing, torn underlayment, or ice-dam damage—and restore your roof’s watertight seal."
                bottomContent="Left unchecked, roof leaks lead to mold, insulation damage, and costly structural repairs. Call Paragon Exterior at the first sign of trouble for fast, dependable leak repair backed by industry-leading warranties."
                imagePosition="right"
            />

            {/* COMMON ROOF LEAK CAUSES */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-6">
                        Common Roof Leak Sources We Fix Every Day
                    </HeaderText>
                    <SecondaryText className="text-center mb-12 max-w-4xl mx-auto">
                        Most homeowners are surprised to learn where roof leaks actually start. Here are the most common culprits we encounter and how we fix them permanently.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Damaged Flashing",
                                description: "Flashing around chimneys, vents, and roof intersections is the #1 source of leaks. Metal flashing expands and contracts with temperature changes, eventually cracking or pulling away from surfaces.",
                                solution: "Complete flashing replacement with proper sealants and overlap techniques"
                            },
                            {
                                title: "Missing or Damaged Shingles",
                                description: "High winds, hail, and age can crack, curl, or completely remove shingles, exposing the underlayment to water infiltration.",
                                solution: "Strategic shingle replacement with matching materials and proper sealing"
                            },
                            {
                                title: "Clogged Gutters",
                                description: "When gutters overflow, water backs up under shingles and finds ways into your home through the smallest gaps in your roof system.",
                                solution: "Gutter cleaning, repair, and installation of leaf guards to prevent future clogs"
                            },
                            {
                                title: "Ice Dam Formation",
                                description: "In winter, ice dams form when warm attic air melts snow that refreezes at roof edges, creating barriers that force water under shingles.",
                                solution: "Improved attic ventilation and insulation, plus ice dam removal services"
                            },
                            {
                                title: "Aging Roof Membrane",
                                description: "On flat or low-slope roofs, membrane materials eventually crack, blister, or shrink, creating entry points for water.",
                                solution: "Membrane patching, coating, or complete replacement depending on damage extent"
                            },
                            {
                                title: "Penetration Failures",
                                description: "Roof penetrations for plumbing vents, exhaust fans, and skylights are common leak points when sealing fails or hardware loosens.",
                                solution: "Professional resealing with commercial-grade materials and hardware inspection"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                                <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                    {item.title}
                                </HeaderText>
                                <SecondaryText className="mb-4 text-sm">
                                    {item.description}
                                </SecondaryText>
                                <div className="border-t pt-3">
                                    <span className="text-xs font-semibold text-green-600 uppercase">Our Solution:</span>
                                    <SecondaryText className="text-xs mt-1">
                                        {item.solution}
                                    </SecondaryText>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMERGENCY VS PLANNED REPAIRS */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <HeaderText as="h2" className="mb-6">
                                Emergency Roof Leak Repair. When Every Minute Counts
                            </HeaderText>
                            <SecondaryText className="mb-6">
                                Storm damage doesn&apos;t wait for business hours. When your roof is actively leaking and water is pouring into your home, you need immediate response. Our emergency roof leak repair service operates 24/7 because we know water damage gets exponentially worse with every hour of delay.
                            </SecondaryText>
                            <SecondaryText className="mb-6">
                                Our emergency response includes immediate tarping to stop active water intrusion, temporary sealing of leak points, and damage assessment with photo documentation for insurance purposes. We&apos;ll secure your home first, then schedule permanent repairs as soon as weather permits.
                            </SecondaryText>
                            <div className="space-y-3">
                                {[
                                    "24/7 emergency response team",
                                    "Same-day temporary leak sealing",
                                    "Insurance documentation assistance",
                                    "Immediate damage prevention measures",
                                    "Scheduled permanent repair follow-up"
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <span className="text-red-600 font-bold">🚨</span>
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Image
                                width={600}
                                height={400}
                                src="/images/roof-service/roof-leak/leak2.webp"
                                alt="Emergency roof leak repair in progress"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection
                title="People Also Ask About Roof Leak Repair"
                faqs={[
                    {
                        question: "What is the best way to repair roof leaks?",
                        answer: "The best approach depends on the leak source, but proper diagnosis is always the first step. Professional roof leak repair involves using moisture detection technology to locate the actual source (which is often different from where water appears inside), then addressing the root cause with appropriate materials and techniques. DIY repairs typically fail because they treat symptoms rather than causes, and often use inadequate materials that don't provide lasting solutions."
                    },
                    {
                        question: "How much does it cost to repair a roof leak?",
                        answer: "Roof leak repair costs vary widely based on the source and severity. Simple repairs like replacing a few shingles might cost $300-$600, while complex flashing repairs around chimneys can range from $800-$1,500. Major repairs involving structural damage from long-term leaks can cost $2,000-$5,000 or more. The key is addressing leaks quickly - a $500 repair today often prevents thousands in water damage later. We provide detailed, upfront estimates so you know exactly what to expect."
                    },
                    {
                        question: "Is a roof leak covered by insurance?",
                        answer: "Insurance coverage for roof leaks depends on the cause. Sudden damage from storms, hail, or falling trees is typically covered, while gradual deterioration from age or lack of maintenance usually isn't. The key is documenting the cause and acting quickly. We help homeowners with insurance claims by providing detailed damage assessments, photos, and professional documentation of storm damage versus wear-and-tear issues."
                    },
                    {
                        question: "Who is the best person to fix a leaking roof?",
                        answer: "A licensed, experienced roofing contractor with specific expertise in leak detection and repair is your best bet. Look for contractors who use moisture detection technology, offer written warranties on their work, and have a track record of permanent leak solutions. Avoid handymen for complex leaks - roof repair requires specialized knowledge of how water moves through roofing systems, proper flashing techniques, and understanding of different roofing materials."
                    }
                ]}
            />

            {/* PREVENTION TIPS */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <HeaderText as="h2" className="mb-6">
                        Preventing Roof Leaks: What Every Homeowner Should Know
                    </HeaderText>
                    <SecondaryText className="mb-8">
                        While we&apos;re always here for emergency repairs, preventing leaks in the first place saves you money, stress, and potential water damage. Here are the most effective strategies we recommend to our clients.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Annual Roof Inspections</span>
                                <SecondaryText className="text-sm mt-1">
                                    Catch small problems before they become leaks. We recommend professional inspections every fall.
                                </SecondaryText>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Keep Gutters Clean</span>
                                <SecondaryText className="text-sm mt-1">
                                    Clean gutters twice yearly and after major storms to prevent water backup under shingles.
                                </SecondaryText>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Trim Overhanging Branches</span>
                                <SecondaryText className="text-sm mt-1">
                                    Remove branches that could fall on your roof during storms or constantly scrape against shingles.
                                </SecondaryText>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Address Issues Quickly</span>
                                <SecondaryText className="text-sm mt-1">
                                    Don&apos;t wait on loose shingles, damaged flashing, or other visible problems. Small fixes prevent big leaks.
                                </SecondaryText>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Proper Attic Ventilation</span>
                                <SecondaryText className="text-sm mt-1">
                                    Good ventilation prevents ice dams in winter and reduces heat buildup that ages roofing materials.
                                </SecondaryText>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                                <span className="font-bold text-gray-900">Professional Storm Damage Assessment</span>
                                <SecondaryText className="text-sm mt-1">
                                    After severe weather, have a professional check for hidden damage that could lead to future leaks.
                                </SecondaryText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
                        <div className="py-12 pt-20 sm:pt-0">
                            <GetEstimate />
                        </div>
        </div>
    );
}
