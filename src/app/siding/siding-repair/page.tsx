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
import WhyParagon, {WhyParagonSiding, WhyParagonSidingRepair} from '@/components/WhyParagon'

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
    "serviceType": "Home Improvement",
    "areaServed": "Mid Atlantic",
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
                    subText="Fast and effective siding repair services by skilled contractors. We handle all types of siding damage with seamless color matching and expert craftsmanship."
                    imgSrc="/images/siding/siding-service/siding-repair/siding-repair-hero.webp"
                    imgAlt="Professional siding repair by Paragon Exterior contractors"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/siding-service/siding-repair/siding-repair1.webp"
                    imgAlt="Siding repair process showing before and after"
                    titleAs="h1"
                    title="Expert Siding Repair Services You Can Trust"
                    mainContent="When your siding is damaged or missing, there's no need for a complete replacement. Our skilled siding repair contractors can restore all types of siding damage, from cracks and missing panels to storm damage and water infiltration. Whether you need vinyl siding repair, fiber cement fixes, or wood restoration, we respond quickly to protect your home."
                    bottomContent="Damaged siding compromises your home's protection, allowing moisture and pests to enter. Our siding repair experts provide fast response times, often within 24 hours, and use seamless color matching techniques to restore both function and curb appeal. Don't wait—damaged siding leads to bigger problems over time."
                    imagePosition="right"
                />

                {/* SIDING REPAIR REASONS COMPONENT */}
                <SidingRepairReasons

                />

                {/* REPAIR PROCESS */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" className="mb-6">
                                Our Detailed Siding Repair Process
                            </HeaderText>
                            <SecondaryText className="max-w-4xl mx-auto">
                                We take pride in delivering quality siding repair work that lasts. Our systematic approach ensures
                                seamless results that blend perfectly with your existing siding.
                            </SecondaryText>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">1</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Assessment & Matching</HeaderText>
                                <SecondaryText className="text-sm">
                                    We inspect damage severity, note your siding's color, texture, and style for perfect matching.
                                </SecondaryText>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">2</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Professional Repair</HeaderText>
                                <SecondaryText className="text-sm">
                                    Our skilled contractors replace damaged sections using quality materials and expert techniques.
                                </SecondaryText>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">3</span>
                                </div>
                                <HeaderText variant="small" className="mb-4">Quality Inspection</HeaderText>
                                <SecondaryText className="text-sm">
                                    Final inspection ensures seamless appearance and proper installation for long-lasting protection.
                                </SecondaryText>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAINTENANCE SECTION */}
                <Row
                    title="Prevent Future Siding Repair with Annual Maintenance"
                    description="While you can't prevent storm damage, regular maintenance helps avoid costly siding repair issues. Annual power washing removes mold, mildew, and insects. Regular inspections catch loose or warped areas before they become major problems requiring extensive siding repair work."
                    imageSrc="/images/siding/siding-service/siding-repair/siding-repair2.webp"
                    className="py-16"
                />

                {/* REPLACEMENT VS REPAIR */}
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
                                    Siding Repair vs. Full Replacement
                                </HeaderText>
                                <SecondaryText className="mb-6">
                                    Not every siding issue requires complete replacement. Our siding repair experts evaluate each situation
                                    to determine the most cost-effective solution. When damage is extensive or repair costs approach
                                    replacement costs, we'll recommend new siding installation.
                                </SecondaryText>
                                <SecondaryText className="mb-6">
                                    We install shake and shingle, vertical, and horizontal vinyl siding that requires minimal maintenance
                                    and lasts for decades. Our team will work with you to discuss all options and help you choose
                                    the best path forward for your home and budget.
                                </SecondaryText>
                                <div className="space-y-3">
                                    {[
                                        "Cost-effective siding repair for minor damage",
                                        "Full siding replacement when repair isn't practical",
                                        "Expert evaluation of repair vs. replacement options",
                                        "Quality materials for lasting results",
                                        "Seamless color and texture matching",
                                        "Professional installation with warranty"
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