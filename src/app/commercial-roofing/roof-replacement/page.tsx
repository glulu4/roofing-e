import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import React from 'react';
import Row from '@/components/Row';
import {WhyParagonRoofReplacement} from '@/components/WhyParagon';
import Reasons from '@/components/service-page/Reasons';
import SecondaryText from '@/components/SecondaryText';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';
import FAQSection from '@/components/FAQSection';

export const metadata = {
    title: 'Commercial Roof Replacement Experts Near Me',
    description:
        'Paragon Exterior delivers best-in-class commercial roof replacement services across Pennsylvania, New Jersey, and Delaware. ',
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
                    <SecondaryText>
                        A full commercial roof replacement is the best way to safeguard your
                        building against leaks, energy loss, and costly down-time. Our
                        licensed roofing professionals start by removing your old system,
                        inspecting the deck, and installing a premium roof—whether it’s a
                        TPO/EPDM flat membrane, standing seam metal, or built-up roofing.
                        Every step is handled with meticulous craftsmanship, clear
                        communication, and strict safety protocols.
                    </SecondaryText>
                }
                bottomContent={
                    <SecondaryText>
                        Looking to extend the life of an existing roof? We also offer
                        targeted commercial roof repair services—patching leaks, replacing
                        damaged flashing, and addressing ponding water—when a full
                        replacement isn’t yet needed. But for roofs over 20 years old or
                        those with widespread membrane failure, replacement delivers the
                        greatest long-term value. <br />
                        <br />
                        Contact us today for a free commercial roof inspection and estimate.
                    </SecondaryText>
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
                        <SecondaryText>
                            If your commercial roof is showing signs of age or damage, it may be
                            time for a full replacement. Look for these warning signs:
                        </SecondaryText>

                        <SecondaryText as='ul' className="list-disc pl-6 mt-4">
                            <li>Roof membrane is more than 20 years old</li>
                            <li>Multiple or recurring leaks despite repairs</li>
                            <li>Extensive ponding water or blistering on the surface</li>
                            <li>Significant seam separations or flashing failure</li>
                            <li>Insulation saturation or sagging deck</li>
                        </SecondaryText>
                    </>
                }
            />
            <Row
                title="Commercial Roof Repair vs. Replacement"
                description={
                    <SecondaryText>
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
                    </SecondaryText>
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

            {/* GOOGLE REVIEWS */}
            <GoogleReviews />

            {/* FAQ SECTION */}
            <FAQSection
                title="People Also Ask About Commercial Roof Replacement"
                faqs={[
                    {
                        question: "What is the average cost to replace a commercial roof?",
                        answer: "Commercial roof replacement typically costs between $5-$15 per square foot, depending on the materials, building size, and complexity. A 10,000 sq ft warehouse might cost $50,000-$150,000 for a complete replacement. We always provide detailed, upfront estimates so you know exactly what to expect — no surprises halfway through the project."
                    },
                    {
                        question: "How much does it cost to replace a 1000 sq ft roof?",
                        answer: "For a 1,000 sq ft commercial roof replacement, you're typically looking at $5,000-$15,000 depending on the material choice. TPO and EPDM are on the lower end, while metal roofing or modified bitumen systems cost more. The final price also depends on roof access, removal complexity, and any structural repairs needed."
                    },
                    {
                        question: "What is commercial roofing called?",
                        answer: "Commercial roofing refers to roofing systems designed for business buildings like offices, warehouses, retail spaces, and industrial facilities. Common types include flat roofing systems (TPO, EPDM, modified bitumen), metal roofing, and built-up roofing. These systems are engineered for durability, energy efficiency, and the ability to support HVAC equipment."
                    },
                    {
                        question: "How to calculate roof replacement cost?",
                        answer: "Calculate your commercial roof replacement cost by measuring the roof area in square feet, then multiply by the material cost per square foot ($5-$15 typically). Add costs for tear-off, disposal, permits, and any structural repairs. We provide free inspections and detailed estimates that break down all costs clearly, so you understand exactly what you're paying for."
                    },
                    {
                        question: "Why is replacing a roof so expensive?",
                        answer: "Commercial roof replacement involves specialized materials designed to last 20-30 years, skilled labor, safety equipment, permits, disposal fees, and often structural repairs discovered during tear-off. While the upfront cost seems high, a quality replacement saves money long-term by eliminating constant repairs and reducing energy costs through better insulation."
                    },
                    {
                        question: "How long does it take to replace a 1000 sq ft roof?",
                        answer: "A 1,000 sq ft commercial roof replacement typically takes 2-4 days, depending on weather, material type, and building access. Simple flat roof membrane replacements are faster, while complex installations with structural work take longer. We always provide realistic timelines upfront and work to minimize disruption to your business operations."
                    },
                    {
                        question: "What is the most expensive part of a new roof?",
                        answer: "The roofing materials themselves are usually the biggest cost, followed by labor. Premium materials like standing seam metal or high-end membrane systems drive up costs, but they also last longer and perform better. Structural repairs discovered during tear-off can also add significant expense, which is why we do thorough inspections before starting work."
                    },
                    {
                        question: "What is the cheapest way to replace a roof?",
                        answer: "The most cost-effective commercial roof replacement usually involves EPDM rubber membrane for flat roofs or basic TPO systems. However, 'cheapest upfront' isn't always cheapest long-term. We help you balance initial cost with long-term performance, energy savings, and maintenance requirements to find the best value for your specific building and budget."
                    }
                ]}
            />

            {/* CTA */}
            <div className="py-16">
                <GetEstimate />
            </div>
        </div>
    );
}
