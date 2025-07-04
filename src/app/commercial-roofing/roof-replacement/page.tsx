import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import React from 'react';
import Row from '@/components/Row';
import {WhyParagonRoofReplacement} from '@/components/WhyParagon';
import Reasons from '@/components/service-page/Reasons';

export const metadata = {
    title: 'Commercial Roof Replacement Experts',
    description:
        'Paragon Exterior delivers best-in-class commercial roof replacement services across Pennsylvania, New Jersey, and Delaware. From flat roof tear-offs to metal roof installations, our team ensures a durable, energy-efficient system backed by industry-leading warranties.',
};

export default function CommercialRoofReplacementPage() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Commercial Roof Replacement"
                subText="When your commercial roof reaches the end of its lifespan—or storm damage and chronic leaks make repairs impractical—Paragon Exterior steps in with full-service roof replacement. From flat roofing tear-offs on warehouses to metal roof installations on office complexes, we build a system that lasts."
                imgSrc="/images/commercial/replacement/hero.webp"
                imgAlt="Commercial roof replacement in progress"
            />

            {/* INTRO + INFO */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/commercial/replacement/replace1.webp"
                imgAlt="Crew replacing commercial roof with new membrane"
                title="Commercial Roof Replacement You Can Trust"
                mainContent={
                    <>
                        A full commercial roof replacement is the best way to safeguard your
                        building against leaks, energy loss, and costly down-time. Our
                        licensed roofing professionals start by removing your old system,
                        inspecting the deck, and installing a premium roof—whether it’s a
                        TPO/EPDM flat membrane, standing seam metal, or built-up roofing.
                        Every step is handled with meticulous craftsmanship, clear
                        communication, and strict safety protocols.
                    </>
                }
                bottomContent={
                    <>
                        Looking to extend the life of an existing roof? We also offer
                        targeted commercial roof repair services—patching leaks, replacing
                        damaged flashing, and addressing ponding water—when a full
                        replacement isn’t yet needed. But for roofs over 20 years old or
                        those with widespread membrane failure, replacement delivers the
                        greatest long-term value. <br />
                        <br />
                        Contact us today for a free commercial roof inspection and estimate.
                    </>
                }
                imagePosition="right"
            />

            {/* SIGNS YOU NEED REPLACEMENT */}

            <Row

                title="Signs You Need Commercial Roof Replacement"
                imageSrc="/images/commercial/replacement/replace5.webp"
                className="pt-12 lg:pt-24"
                description={
                    <>
                        If your commercial roof is showing signs of age or damage, it may be
                        time for a full replacement. Look for these warning signs:
                        <ul className="list-disc pl-6 mt-4">
                            <li>Roof membrane is more than 20 years old</li>
                            <li>Multiple or recurring leaks despite repairs</li>
                            <li>Extensive ponding water or blistering on the surface</li>
                            <li>Significant seam separations or flashing failure</li>
                            <li>Insulation saturation or sagging deck</li>
                        </ul>
                    </>
                }
            />

            {/* <div className="mx-auto w-5/6 py-12 lg:py-20">
                <HeaderText as='h2' className=''>Signs You Need Commercial Roof Replacement</HeaderText>
                <SecondaryText>
                    • Roof membrane is more than 20 years old<br />
                    • Multiple or recurring leaks despite repairs<br />
                    • Extensive ponding water or blistering on the surface<br />
                    • Significant seam separations or flashing failure<br />
                    • Insulation saturation or sagging deck
                </SecondaryText>
            </div> */}

            {/* REPAIR VS REPLACEMENT */}
            <Row
                title="Commercial Roof Repair vs. Replacement"
                description={
                    <>
                        <strong>Commercial Roof Repair</strong> is ideal for isolated issues:
                        patching small leaks, replacing damaged flashing, resealing seams,
                        or applying a restorative coating. Repairs can extend your roof’s
                        life by a few years at a lower upfront cost. <br />
                        <br />
                        <strong>Commercial Roof Replacement</strong> becomes the smarter
                        choice when damage is widespread, your roof is past its service
                        life, or energy loss is driving up operating costs. A new system
                        restores full warranty coverage, maximizes insulation performance,
                        and eliminates the need for constant patch jobs.
                    </>
                }
                imageSrc="/images/commercial/replacement/replace2.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Reasons
                title="6 Key Reasons to Invest in Commercial Roof Replacement"
                description="A full roof replacement is more than just fixing leaks—it’s an investment in energy savings, building longevity, and property value. Here’s why businesses across Pennsylvania, New Jersey, and Delaware choose Paragon Exterior for their commercial roof upgrade."
                titleAs="h2"
                reasons={[
                    {
                        name: 'Extended Roof Lifespan',
                        description:
                            'Replacing an aging or damaged roof ensures 25+ years of reliable protection against water intrusion, UV damage, and structural wear.',
                    },
                    {
                        name: 'Maximized Energy Efficiency',
                        description:
                            'Modern roofing systems like TPO, EPDM, and insulated metal panels improve reflectivity and insulation, cutting your HVAC costs year after year.',
                    },
                    {
                        name: 'Comprehensive Warranties',
                        description:
                            'Our commercial roof replacements come with industry-leading manufacturer and workmanship warranties, giving you long-term peace of mind.',
                    },
                    {
                        name: 'Enhanced Curb Appeal & Value',
                        description:
                            'A brand-new roof instantly elevates the appearance of your facility, boosting tenant satisfaction and property resale value.',
                    },
                    {
                        name: 'Lower Maintenance Costs',
                        description:
                            'Avoid the cycle of frequent patch-up repairs. A full replacement reduces emergency service calls and prolongs maintenance intervals.',
                    },
                    {
                        name: 'Certified Expert Installation',
                        description:
                            'Our OSHA-compliant crews follow strict safety protocols and industry best practices to deliver a flawless commercial roof replacement.',
                    },
                ]}
                img={{
                    src: '/images/commercial/replacement/replace3.webp',
                    alt: 'Diagram showing six reasons to replace a commercial roof',
                }}
            />
            {/* WHY PARAGON */}
            <WhyParagonRoofReplacement
                title="Why Choose Paragon Exterior for Commercial Roof Replacement?"
                titleAs="h2"
                subTitle="With decades of experience in commercial roofing, Paragon Exterior combines premium materials, OSHA-compliant safety, and industry-leading warranties to deliver a replacement roof that stands up to weather, reduces your energy bills, and protects your bottom line."
            />

            {/* CTA */}
            <div className="py-16">
                <GetEstimate />
            </div>
        </div>
    );
}
