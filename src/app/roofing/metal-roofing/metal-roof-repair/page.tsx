

// import React from 'react';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Benefits from '@/components/solar/Benefits';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import HeaderText from '@/components/HeaderText';
// import SecondaryText from '@/components/SecondaryText';
// import FAQSection from '@/components/FAQSection';

// export const metadata = {
//     title: 'Metal Roof Repair Services in PA, NJ & DE',
//     description: 'Paragon Exterior is the Top-rated metal roof repair experts in Pennsylvania, New Jersey, and Delaware. We fix leaks, replace panels, & treat rust.',
// };

// export default function MetalRoofRepairPage() {
//     const faqs = [
//         {
//             question: "Can you repair a metal roof?",
//             answer:
//                 "Yes! Most metal roof problems can be repaired. Small leaks, minor rust, and loose fasteners can often be fixed quickly. For bigger issues—like large leaks, widespread rust, or storm damage—it's best to call a professional metal roof repair contractor to ensure your roof is restored safely and correctly."
//         },
//         {
//             question: "How much does a metal roof repair cost?",
//             answer:
//                 "Most metal roof repairs range from $5 to $15 per square foot, or about $300 to $1,500 for common repairs. Prices depend on the type of repair, the roof's size and pitch, how easy it is to access, and the local labor rates. Emergency metal roof repairs may cost a bit more."
//         },
//         {
//             question: "Can you replace one panel of a standing seam metal roof?",
//             answer:
//                 "Absolutely! Our team can replace individual standing seam metal roof panels. We carefully remove the damaged panel, prepare the area, and install the new one—matching color and style, and ensuring it's watertight for years to come."
//         },
//         {
//             question: "Will Flex Seal stop leaks on a metal roof?",
//             answer:
//                 "Flex Seal can help as a temporary fix for small metal roof leaks, but it’s not a permanent solution. For a lasting repair and leak protection, contact a trusted metal roof repair company."
//         },
//         {
//             question: "What is the best sealant for metal roof leaks?",
//             answer:
//                 "The best sealant for metal roof leaks is a high-quality silicone made for roofing. It sticks well to metal, handles tough weather, and keeps water out."
//         },
//         {
//             question: "How often should I have my metal roof inspected?",
//             answer:
//                 "You should schedule a professional metal roof inspection once a year. Regular inspections catch small issues—like loose fasteners or early rust—before they turn into costly repairs."
//         }
//     ];

//     return (
//         <div className="min-h-screen">
//             {/* HERO */}
//             <Hero
//                 mainText="Top-Rated Metal Roof Repair Contractors"
//                 subText="Paragon Exterior delivers expert metal roof repair and restoration for homes and businesses across Pennsylvania, New Jersey, and Delaware. From emergency leak repair to full panel replacement, our certified team restores and protects your roof—fast, reliable, and guaranteed."
//                 imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair2.webp"
//                 imgAlt="Metal roof repair contractor sealing a standing seam roof"
//             />

//             {/* WHAT IS */}
//             <InfoSection
//                 titleAs="h1"
//                 imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair1.webp"
//                 imgAlt="Close-up of professional metal roof patch repair work"
//                 title="Expert Metal Roof Repair Services"
//                 mainContent={
//                     <>
//                         Our <strong>metal roofing services</strong> keep your roof strong, watertight, and looking great. We fix metal roof leaks, dents, rust, corrosion, and damaged panels—helping you avoid bigger, more expensive problems down the road.
//                         <br /><br />
//                         Whether you need emergency <strong>metal roof leak repair</strong> after a storm or routine <strong>metal roof maintenance</strong>, our licensed contractors use the best materials and proven techniques for repairs that last.
//                     </>
//                 }
//                 bottomContent={
//                     <>
//                         We service all metal roof types, including standing seam, corrugated, ribbed, and architectural metal roofing. Our local, certified metal roofing contractors serve both homes and businesses across Pennsylvania, New Jersey, and Delaware—offering fast, honest service and strong warranties.
//                     </>
//                 }
//                 imagePosition="right"
//             />

//             <InfoSection
//                 titleAs="h2"
//                 imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair3.webp"
//                 imgAlt="metal roof repair inspection and maintenance"
//                 title="Comprehensive Metal Roof Repairs & Maintenance"
//                 mainContent={
//                     <>
//                         If your metal roof is leaking, rusting, or showing any signs of damage, don’t wait! Our professional roofing team recommends an annual inspection—both from the ground and on the roof—to catch issues early and protect your investment.
//                         <br /><br />
//                         We handle all types of repairs from fixing scuffs and scratches, removing debris and mildew, treating rust before it spreads, to replacing worn fasteners and flashing. Our team reseals seams and penetrations to stop leaks and extend your roof’s life.
//                     </>
//                 }
//                 bottomContent={
//                     <>
//                         Did your roof take damage from a recent storm? Don’t risk water damage inside—call Paragon Exterior for a fast inspection and repair. We’ll restore your metal roof quickly and prevent bigger, costlier problems.
//                     </>
//                 }
//                 imagePosition="left"
//             />

//             {/* METAL ROOF REPAIR TYPES */}
//             <div className="py-16 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <HeaderText className="text-center mb-12">Common Metal Roof Repair Services</HeaderText>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Leak Repair</h3>
//                             <p className="text-gray-600">Stop leaks fast! We find and fix metal roof leaks at seams, fasteners, or panels to restore full weather protection.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Panel Replacement</h3>
//                             <p className="text-gray-600">We replace damaged, dented, or corroded metal roof panels—using materials that match your current roof for a seamless finish.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Seam Repair</h3>
//                             <p className="text-gray-600">Our team repairs and reseals separated or damaged seams on standing seam metal roofs for strong, watertight protection.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Rust Treatment</h3>
//                             <p className="text-gray-600">We remove rust and apply protective coatings to stop corrosion, extending the life of your metal roof.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Fastener Repair</h3>
//                             <p className="text-gray-600">We replace loose or missing screws with high-quality fasteners designed for metal roofs, preventing leaks and keeping panels secure.</p>
//                         </div>
//                         <div className="bg-white p-6 rounded-lg shadow-sm">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-800">Storm Damage Repair</h3>
//                             <p className="text-gray-600">Emergency service for hail, wind, or falling debris. We fix metal roofs fast to keep your property protected after a storm.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* METAL ROOF REPAIR PROCESS */}
//             <div className="py-16">
//                 <div className="max-w-4xl mx-auto px-4">
//                     <HeaderText className="text-center mb-12">Our Proven Metal Roof Repair Process</HeaderText>
//                     <div className="space-y-8">
//                         <div className="flex items-start space-x-6">
//                             <div className="bg-primaryblue text-white rounded-full aspect-square w-10 h-10 flex items-center justify-center font-semibold">1</div>
//                             <div>
//                                 <h3 className="text-lg font-semibold mb-2">Free Inspection</h3>
//                                 <p className="text-gray-600">Our certified experts inspect your metal roof inside and out—spotting every leak, crack, or area at risk. You get clear answers and honest advice every step of the way.</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start space-x-6">
//                             <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">2</div>
//                             <div>
//                                 <h3 className="text-lg font-semibold">Transparent Estimate</h3>
//                                 <p className="text-gray-600">We give you a written, detailed estimate for all recommended repairs. No surprises or hidden fees—just straightforward, fair pricing.</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start space-x-6">
//                             <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">3</div>
//                             <div>
//                                 <h3 className="text-lg font-semibold">Quality Repair Work</h3>
//                                 <p className="text-gray-600">Our skilled crew handles every repair—from leak fixes to full panel replacement—using the highest quality materials and industry-leading techniques for results that last.</p>
//                             </div>
//                         </div>
//                         <div className="flex items-start space-x-6">
//                             <div className="bg-primaryblue text-white aspect-square rounded-full w-10 h-10 flex items-center justify-center font-semibold">4</div>
//                             <div>
//                                 <h3 className="text-lg font-semibold">Final Inspection & Warranty</h3>
//                                 <p className="text-gray-600">We stand by our work! Every job includes a final walk-through and a strong warranty for your total peace of mind.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* KEY BENEFITS */}
//             <Benefits
//                 title="Why Choose a Professional to Repair Your Metal Roof?"
//                 description="Expert repair keeps your property safe, saves you money, and gives your roof a longer life. Our certified team uses proven repair methods and quality materials for results you can trust."
//                 titleAs="h2"
//                 img1={{
//                     src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair4.avif",
//                     alt: 'Professional metal roof repair with high-quality silicone sealant'
//                 }}
//                 img2={{
//                     src: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair5.avif",
//                     alt: 'Expert metal panel replacement on standing seam roof system'
//                 }}
//                 text1="✔ Adds 10-15 years to your metal roof's lifespan, avoiding the high cost of early roof replacement."
//                 text2="✔ Stops leaks and structural damage before they lead to interior water damage, mold, or costly repairs."
//             />

//             {/* SERVICE AREAS */}
//             <div className="py-16 bg-blue-50">
//                 <div className="max-w-4xl mx-auto px-4 text-center">
//                     <HeaderText className="mb-6">Metal Roof Repair Service Areas</HeaderText>
//                     <SecondaryText className="mb-8">
//                         Paragon Exterior offers trusted metal roof repair in Pennsylvania, New Jersey, and Delaware. We handle emergency calls, routine maintenance, and full metal roof restoration—all with fast response times and guaranteed results.
//                     </SecondaryText>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         <div>
//                             <h3 className="text-lg font-semibold mb-3">Pennsylvania</h3>
//                             <p className="text-gray-600">
//                                 Metal roof repair and restoration across the Greater Philadelphia Area, including Feasterville-Trevose, Germantown, Collegeville, and King of Prussia.
//                             </p>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-3">New Jersey</h3>
//                             <p className="text-gray-600">Full-service metal roof repair for homes and businesses throughout NJ, including Newark, Jersey City, Paterson, and beyond.</p>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-3">Delaware</h3>
//                             <p className="text-gray-600">Reliable metal roof repair and leak service in Wilmington, Dover, Newark, and all parts of the First State.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* FAQ */}
//             <FAQSection
//                 title="Frequently Asked Questions About Metal Roof Repair"
//                 faqs={faqs}
//             />

//             {/* CTA */}
//             <div className="py-16 text-center">
//                 <GetEstimate />
//             </div>
//         </div>
//     );
// }
import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import FAQSection from '@/components/FAQSection';
import Script from 'next/script';

export const metadata = {
    title: 'Metal Roof Repair (Standing Seam & Corrugated) | PA, NJ & DE',
    description:
        "Fast, professional metal roof repair for leaks, seams & panels. Residential & commercial across PA, NJ & DE. Free inspection & same-day emergency help.",
};

export default function MetalRoofRepairPage() {
    const faqs = [
        {
            question: 'Can metal roofs be repaired?',
            answer:
                "Yes. Most issues—leaks at seams, loose fasteners, minor rust, and damaged flashings—can be repaired without replacing the whole roof. We inspect, target the failure point, and restore watertight protection.",
        },
        {
            question: 'How much does a metal roof repair cost?',
            answer:
                "Typical repairs run $300–$1,500 for small fixes or $5–$15 per sq ft for larger work. Price depends on access, pitch, panel type (standing seam vs corrugated), and how far the damage has spread.",
        },
        {
            question: 'What is the best way to patch a metal roof?',
            answer:
                "Short-term patches use pro-grade silicone and reinforcement tape on a clean, dry surface. For a lasting fix, we address the cause—reseal seams, replace failed fasteners or panels, and repair flashing.",
        },
        {
            question: 'What is the most common leak on a metal roof?',
            answer:
                "The usual suspects are fastener back-out, end-laps, penetrations (vents, skylights), and faulty flashing. UV and thermal movement open small gaps that become leaks during storms.",
        },
        {
            question: 'Do repair kits, tape, or store-bought sealants work?',
            answer:
                "DIY kits and tapes can stop a drip briefly, but they often fail within a season. Pro-grade sealants, correct fasteners, and proper prep deliver a durable repair and preserve warranties.",
        },
        {
            question: 'Can you replace a single panel on a standing seam roof?',
            answer:
                "Yes. We remove the damaged panel, prep the substrate, and install a matching panel—then check seams and clips for a uniform, watertight finish.",
        },
        {
            question: 'Will a roof coating stop leaks on metal?',
            answer:
                "Elastomeric coatings extend life and improve energy performance. They are not a bandaid—leak points must be repaired first, then the coating is applied as a system per manufacturer spec.",
        },
        {
            question: 'Do you offer residential and commercial metal roof repair?',
            answer:
                "We do both. Homes often need seam reseals and fastener work; commercial roofs add HVAC curb flashing, long panel runs, and maintenance plans for large facilities.",
        },
        {
            question: 'Can you repair a metal roof in winter?',
            answer:
                "Yes, with weather windows. We provide same-day temporary dry-ins in freezing conditions and schedule permanent repairs when temperatures and surface conditions allow proper adhesion.",
        },
        {
            question: 'How often should I schedule a metal roof inspection?',
            answer:
                "Once a year, plus after major storms. Early checks catch fastener back-out, oxidation, and sealant wear before they become leaks and interior damage.",
        },
        {
            question: 'Do you handle emergency repairs and “near me” service?',
            answer:
                "Yes. Our local crews cover PA, NJ, and DE with same-day emergency metal roof repair. Call for fast triage, temporary dry-in, and a written plan for permanent fixes.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* HERO (Assumes H1 renders inside Hero) */}
            <Hero
                mainText="Top-Rated Metal Roof Repair Contractors"
                subText="Expert leak detection, seam resealing, panel replacement, and storm-damage restoration for homes and businesses across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair2.webp"
                imgAlt="Technician resealing a standing seam metal roof"
            />

            {/* WHAT WE DO */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair1.webp"
                imgAlt="Close-up of professional metal roof seam repair"
                title="Expert Metal Roof Repair Services"
                mainContent={
                    <SecondaryText>
                        Our team restores metal roofs to a clean, watertight condition. We fix leaks, replace damaged panels, correct
                        fasteners, and repair flashings—so small problems don’t turn into costly interior damage.
                        <br />
                        <br />
                        Need help now? We offer emergency leak repair and routine maintenance using proven methods and
                        manufacturer-approved materials.
                    </SecondaryText>
                }
                bottomContent={
                    <SecondaryText>
                        We service all roof types: <strong>standing seam</strong>, <strong>corrugated</strong>, ribbed, and architectural
                        panels—residential and commercial.
                        {/* TODO: add internal links to your standing seam / corrugated pages */}
                    </SecondaryText>
                }
                imagePosition="right"
            />

            {/* SIGNS & COMMON FAILURES */}
            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-repair/metal-roof-repair3.webp"
                imgAlt="Metal roof inspection and maintenance"
                title="Signs You Need a Repair (Before It Leaks Inside)"
                mainContent={
                    <SecondaryText as='div'>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Stains on ceilings or around skylights/vents</li>
                            <li>Loose or missing fasteners / exposed gaskets</li>
                            <li>Separated end-laps or open seams</li>
                            <li>Rust/oxidation spots around screws or panel edges</li>
                            <li>Wind or hail dents, punctures, or bent flashings</li>
                        </ul>
                        <br />
                        <p className="text-gray-700">
                            The most common leak points on metal roofs are fasteners, penetrations, and end-laps. We locate the source, fix
                            it, and verify with a final water test.
                        </p>
                    </SecondaryText>
                }
                bottomContent={
                    <SecondaryText>
                        Took storm damage? Don’t wait—moisture spreads fast under panels. Call for a same-day inspection and temporary
                        dry-in.
                    </SecondaryText>
                }
                imagePosition="left"
            />

            {/* COSTS */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <HeaderText className="text-center mb-6">Metal Roof Repair Cost (PA • NJ • DE)</HeaderText>
                    <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Pricing depends on access, pitch, panel type, and how far the issue has spread. Here are typical ranges:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border border-gray-200 rounded-lg">
                            <thead className="bg-white">
                                <tr>
                                    <th className="p-3 border-b">Repair Type</th>
                                    <th className="p-3 border-b">Typical Range</th>
                                    <th className="p-3 border-b">What’s Included</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="p-3 border-b">Leak diagnosis & small sealant repair</td>
                                    <td className="p-3 border-b">$300–$750</td>
                                    <td className="p-3 border-b">Surface prep, pro-grade silicone, reinforcement tape if needed</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b">Seam reseal / end-lap repair</td>
                                    <td className="p-3 border-b">$6–$12 per sq ft</td>
                                    <td className="p-3 border-b">Clean, prime, seal; address movement joints</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b">Fastener replacement (back-out)</td>
                                    <td className="p-3 border-b">$3–$6 per sq ft</td>
                                    <td className="p-3 border-b">New gasketed fasteners, torque check, leak test</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b">Panel replacement (standing seam/corrugated)</td>
                                    <td className="p-3 border-b">$500–$1,800 per panel</td>
                                    <td className="p-3 border-b">Remove/replace panel, match profile/color, flash & seal</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b">Metal roof coating system</td>
                                    <td className="p-3 border-b">$2–$5 per sq ft</td>
                                    <td className="p-3 border-b">Prep, seam treatment, primer, elastomeric topcoat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <SecondaryText className="text-sm text-gray-600 mt-4">
                        Looking up “metal roof repair cost” or “near me”? Book a free inspection for a written, no-surprise estimate.
                    </SecondaryText>
                </div>
            </div>

            {/* DIY VS PRO / PASEF KEYWORDS */}
            <div className="py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <HeaderText className="text-center mb-6">DIY Kits, Tape & Sealants vs Professional Repair</HeaderText>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-3">DIY products (kit, tape, store sealant)</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Quick patch for a drip, but often fails after heat/cold cycles</li>
                                <li>May trap moisture or void warranties if misapplied</li>
                                <li>Good for temporary stop-gap only</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-3">Professional repair (recommended)</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Fixes the cause: fasteners, seams, flashing, or panel damage</li>
                                <li>Uses pro-grade sealants/coatings with proper prep and cure</li>
                                <li>Backed by workmanship and manufacturer warranties</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* REPAIR VS COATING VS REPLACEMENT */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <HeaderText className="text-center mb-6">Repair vs Coating vs Replacement</HeaderText>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-2">Repair</h3>
                            <p className="text-gray-700">
                                Best for specific leaks, localized rust, or damaged flashings. Extends life quickly at a low cost.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-2">Coating</h3>
                            <p className="text-gray-700">
                                Ideal when the roof is mostly sound. After point repairs, an elastomeric coating seals seams and boosts energy
                                performance.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-2">Replacement</h3>
                            <p className="text-gray-700">
                                Chosen for widespread corrosion or end-of-life panels. We’ll price both repair and replacement so you can
                                compare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* KEY BENEFITS */}
            <Benefits
                title="Why Choose a Professional to Repair Your Metal Roof?"
                description="Expert repair keeps your property safe, saves money, and adds years of service life. Our certified team uses proven methods and quality materials."
                titleAs="h2"
                img1={{
                    src: '/images/roof-service/metal/metal-roof-repair/metal-roof-repair4.avif',
                    alt: 'Applying pro-grade silicone to a metal roof seam',
                }}
                img2={{
                    src: '/images/roof-service/metal/metal-roof-repair/metal-roof-repair5.avif',
                    alt: 'Standing seam metal panel replacement in progress',
                }}
                text1="✔ Adds 10–15 years when issues are addressed early"
                text2="✔ Prevents interior water damage, mold, and costly repairs"
            />

            {/* SERVICE AREAS (include “residential” variant naturally) */}
            <div className="py-16 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <HeaderText className="mb-6">Residential & Commercial Service Areas</HeaderText>
                    <SecondaryText className="mb-8">
                        We provide residential and commercial metal roof repair across Pennsylvania, New Jersey, and Delaware—with fast
                        response for emergency calls and scheduled maintenance plans.
                    </SecondaryText>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Pennsylvania</h3>
                            <p className="text-gray-700">Greater Philadelphia, Feasterville-Trevose, Collegeville, King of Prussia.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">New Jersey</h3>
                            <p className="text-gray-700">Camden County, Cherry Hill, Trenton, and surrounding areas.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delaware</h3>
                            <p className="text-gray-700">Wilmington, Newark, Dover, and nearby communities.</p>
                        </div>
                    </div>
                    {/* TODO: link to your city pages for local SEO */}
                </div>
            </div>

            {/* FAQ (includes PAA + PASF terms) */}
            <FAQSection title="Metal Roof Repair FAQs" faqs={faqs} />

            {/* CTA */}
            <div className="py-16 text-center">
                {/* TODO: add internal links to Standing Seam page, Coatings page, Gallery */}
                <GetEstimate />
            </div>

            {/* Optional: Service + Breadcrumb JSON-LD (remove if you already output similar schema elsewhere) */}
            <Script id="service-jsonld" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: 'Metal Roof Repair',
                    areaServed: ['Pennsylvania', 'New Jersey', 'Delaware'],
                    provider: {
                        '@type': 'LocalBusiness',
                        name: 'Paragon Exterior',
                        url: 'https://www.paragonexterior.com',
                    },
                    serviceType: 'Metal roof leak repair, seam reseal, fastener replacement, panel replacement, roof coating',
                    offers: {
                        '@type': 'Offer',
                        category: 'HomeAndConstructionBusiness',
                        url: 'https://www.paragonexterior.com/estimate',
                    },
                })}
            </Script>
            <Script id="breadcrumbs-jsonld" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: 'Home',
                            item: 'https://www.paragonexterior.com',
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: 'Roofing',
                            item: 'https://www.paragonexterior.com/roofing',
                        },
                        {
                            '@type': 'ListItem',
                            position: 3,
                            name: 'Metal Roof Repair',
                            item: 'https://www.paragonexterior.com/roofing/metal/metal-roof-repair',
                        },
                    ],
                })}
            </Script>
        </div>
    );
}
