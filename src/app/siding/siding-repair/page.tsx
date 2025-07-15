import React from 'react'
import Hero from '@/components/service-page/Hero'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import InfoSection from '@/components/service-page/Info'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import Row from '@/components/Row'
import {Metadata} from 'next'
import SidingRepairReasons from '@/components/service-page/siding/SidingRepairReasons'
import Image from 'next/image'
import {WhyParagonSidingRepair} from '@/components/WhyParagon'

// SEO Metadata export
export const metadata: Metadata = {
    title: 'Professional Siding Repair Services | Fast & Effective Repairs',
    description: 'Expert siding repair services for damaged, cracked, or missing siding. Fast response, seamless color matching, and quality workmanship. Get your free siding repair estimate today.',
    keywords: 'siding repair, vinyl siding repair, siding contractors, damaged siding repair, siding replacement, home siding repair, exterior siding repair, professional siding repair',
    openGraph: {
        title: 'Professional Siding Repair Services | Paragon Exterior',
        description: 'Fast and effective siding repair services. Expert contractors handle all types of siding damage with seamless color matching and quality workmanship.',
        type: 'website',
        images: ['/images/siding/siding-repair/siding-repair-hero.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Professional Siding Repair Services | Paragon Exterior',
        description: 'Expert siding repair services for all types of damage. Fast response and seamless repairs.',
    },
    alternates: {
        canonical: 'https://www.paragonexterior.com/services/siding-repair'
    }
}

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Siding Repair Services",
    "description": "Professional siding repair services for damaged, cracked, or missing siding with expert color matching and quality workmanship.",
    "provider": {
        "@type": "Organization",
        "name": "Paragon Exterior",
        "url": "https://paragonexterior.com"
    },
    "areaServed": [
        {"@type": "State", "name": "Pennsylvania"},
        {"@type": "State", "name": "New Jersey"},
        {"@type": "State", "name": "Delaware"}
    ],
    "offers": {
        "@type": "Offer",
        "description": "Free siding repair estimates with seamless color matching"
    }
}

export default function SidingRepairPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            />

            <div className="min-h-screen">
                {/* HERO */}
                <Hero
                    mainText="Professional Siding Repair"
                    subText="Fast and effective siding repair from skilled contractors. We restore damaged siding, match colors seamlessly, and get your home protected—quickly."
                    imgSrc="/images/siding/siding-service/siding-repair/siding-repair-hero.webp"
                    imgAlt="Professional siding repair by Paragon Exterior contractors"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/siding-service/siding-repair/siding-repair1.webp"
                    imgAlt="Siding repair process showing before and after"
                    titleAs="h1"
                    title="Expert Siding Repair Services You Can Trust"
                    mainContent={
                        <>
                            <SecondaryText>
                                If your siding is cracked, loose, or missing, you don’t always need a full replacement. Our professional siding repair contractors quickly restore vinyl, fiber cement, or wood siding to keep your home protected from weather, pests, and water damage.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We offer fast response times, seamless color matching, and repairs that blend perfectly with your existing siding. Don’t let damaged siding lead to bigger problems—call us for a free inspection and reliable repairs.
                            </SecondaryText>
                        </>
                    }
                    imagePosition="right"
                />

                {/* WHY SIDING REPAIR MATTERS */}
                <SidingRepairReasons />

                {/* REPAIR PROCESS */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" className="mb-6">
                                Our Step-by-Step Siding Repair Process
                            </HeaderText>
                            <SecondaryText className="max-w-4xl mx-auto">
                                We follow a detailed process to deliver repairs that last—so your home stays beautiful and protected for years to come.
                            </SecondaryText>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">1</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Thorough Assessment</HeaderText>
                                <SecondaryText className="text-sm">
                                    We inspect your siding, assess the damage, and find a perfect match for color and style.
                                </SecondaryText>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">2</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Precision Repairs</HeaderText>
                                <SecondaryText className="text-sm">
                                    Our trained contractors repair or replace damaged panels using top-quality materials and proven techniques.
                                </SecondaryText>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">3</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Final Quality Check</HeaderText>
                                <SecondaryText className="text-sm">
                                    We inspect the repair for durability, weather-tightness, and seamless appearance—guaranteed.
                                </SecondaryText>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAINTENANCE SECTION */}
                <Row
                    title="Prevent Siding Damage With Routine Maintenance"
                    description="Annual inspections and power washing help catch minor siding problems before they turn into major repairs. Preventative care saves you money and keeps your home looking its best year-round."
                    imageSrc="/images/siding/siding-service/siding-repair/siding-repair2.webp"
                    className="py-16"
                />

                {/* REPAIR VS REPLACEMENT */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Image
                                    width={500}
                                    height={500}
                                    src="/images/siding/siding-service/siding-repair/siding-repair3.webp"
                                    alt="Siding repair versus full replacement comparison"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <HeaderText as="h2" className="mb-6">
                                    Siding Repair vs. Siding Replacement
                                </HeaderText>
                                <SecondaryText className="mb-6">
                                    Not every siding problem requires a full replacement. We help you decide when a simple repair is enough, and when it’s smarter to upgrade to new siding.
                                </SecondaryText>
                                <SecondaryText className="mb-6">
                                    If damage is isolated, we save you money with targeted repairs. If issues are widespread, or repairs become costly, we’ll recommend the right replacement options for long-term value.
                                </SecondaryText>
                                <div className="space-y-3">
                                    {[
                                        "Affordable repairs for minor or moderate damage",
                                        "Replacement only when truly needed",
                                        "Expert evaluation for every project",
                                        "Seamless color and style matching",
                                        "Quality materials and craftsmanship",
                                        "Workmanship warranty included"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <span className="text-primaryblue font-bold">✓</span>
                                            <span className="text-gray-700">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY PARAGON */}
                <WhyParagonSidingRepair
                    title="Why Choose Paragon Exterior for Siding Repair?"
                    titleAs='h2'
                />

                {/* GET ESTIMATE */}
                <div className="py-12 pt-20 sm:pt-0">
                    <GetEstimate />
                </div>
            </div>
        </>
    )
}
