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
                        We service all roof types: <strong>standing seam</strong>, <strong>corrugated</strong>, ribbed, aluminum roof repair, and architectural
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




            {/* COMMON LEAKS */}
            <InfoSection
                titleAs="h2"
                imgSrc="/images/dynamic/metal-roof-repair/img1.webp"
                imgAlt="Close-up of a fastener and flashing leak on a metal roof"
                title="What Is the Most Common Leak on a Metal Roof?"
                mainContent={
                    <SecondaryText>
                        The most frequent leaks happen at <strong>fasteners, seams, and penetrations</strong>. Over time, screws can back out,
                        gaskets wear down, and seams pull apart from thermal expansion. Flashing around vents, skylights, and HVAC curbs is
                        another weak point. These areas open tiny gaps that let water in during heavy rain or snowmelt.
                        <br />
                        <br />
                        Left unchecked, small drips can spread into decking and insulation. Annual inspections are the best way to catch these
                        issues early before they turn into interior damage.
                    </SecondaryText>
                }
                bottomContent={
                    <SecondaryText>
                        Quick tip: stains near skylights, damp spots by HVAC units, or rust around screw heads are the first signs of trouble.
                    </SecondaryText>
                }
                imagePosition="right"
            />

            {/* BEST WAY TO SEAL */}
            <InfoSection
                titleAs="h2"
                imgSrc="/images/dynamic/metal-roof-repair/hero.webp"
                imgAlt="Technician sealing a metal roof seam with silicone"
                title="What Is the Best Way to Seal a Leaking Metal Roof?"
                mainContent={
                    <SecondaryText>
                        The best fix depends on where the leak is coming from. For <strong>seams and fasteners</strong>, pro-grade silicone or
                        urethane sealants paired with reinforcement tape create a watertight bond. For larger problem areas, it’s better to
                        replace damaged panels or apply a full <strong>elastomeric roof coating system</strong> after targeted repairs.
                        <br />
                        <br />
                        DIY caulk or store-bought tape can work as a short-term patch, but they rarely last through seasonal heat and freeze
                        cycles. Professional sealing ensures proper prep, adhesion, and warranty-backed results.
                    </SecondaryText>
                }
                bottomContent={
                    <SecondaryText>
                        In PA, NJ, and DE climates, coatings and pro sealants typically last 10+ years when applied correctly.
                    </SecondaryText>
                }
                imagePosition="left"
            />










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
                        We provide residential and commercial metal roof services across Pennsylvania, New Jersey, and Delaware—with fast
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
