import React from 'react'
import Hero from '@/components/service-page/Hero'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import InfoSection from '@/components/service-page/Info'
import IncentivesSection from '@/components/service-page/Incentive'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import Row from '@/components/Row'
import {Metadata} from 'next'
import Image from 'next/image'
import {WhyParagonSidingInstallation} from '@/components/WhyParagon'

// SEO Metadata export
export const metadata: Metadata = {
    title: 'Expert Siding Installation Services',
    description: 'Expert siding installation services in the Mid Atlantic. Expert vinyl, fiber cement, and wood siding installation with 100% satisfaction guarantee. Get your free siding installation estimate today.',
    keywords: 'siding installation, vinyl siding installation, siding replacement, home siding, exterior siding installation, siding contractors, Mid Atlantic siding installation, Expert siding installation',
    openGraph: {
        title: 'Expert Siding Installation Services | Paragon Exterior',
        description: 'Transform your home with expert siding installation. Energy-efficient, durable, and beautiful siding installation solutions with 100% satisfaction guarantee.',
        type: 'website',
        images: ['/images/siding/siding-service/siding-installation-page/siding-installation-hero.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Expert Siding Installation Services | Paragon Exterior',
        description: 'Transform your home with expert siding installation. Energy-efficient, durable, and beautiful siding installation solutions.',
    },

}

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Siding Installation Services",
    "description": "Expert siding installation services to upgrade and protect your home with energy-efficient, durable siding solutions.",
    "provider": {
        "@type": "Organization",
        "name": "Paragon Exterior",
        "url": "https://paragonexterior.com"
    },
    "serviceType": "Home Improvement",
    "areaServed": "Mid Atlantic",
    "offers": {
        "@type": "Offer",
        "description": "Free siding installation estimates with 100% satisfaction guarantee"
    }
}

export default function SidingInstallationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            />

            <div className="min-h-screen">
                {/* HERO */}
                <Hero
                    mainText="Siding Installation"
                    subText="Expert siding installation services to enhance your home's protection and curb appeal. Expert installation of vinyl, fiber cement, and engineered wood siding with guaranteed quality."
                    imgSrc="/images/siding/siding-service/siding-installation-page/siding-installation-hero.webp"
                    imgAlt="Expert siding installation by Paragon Exterior"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/siding-service/siding-installation-page/siding-install1.webp"
                    imgAlt="Before and after siding installation"
                    titleAs="h1"
                    title="Expert Siding Installation Services"
                    mainContent="Don't let old, dull, damaged, or missing siding compromise the look or the integrity of your home. With expert siding installation services from Paragon Exterior, you can not only improve your home's protection, but you can also increase its energy efficiency, add curb appeal, and boost its overall value. Our skilled siding contractors use the latest techniques and premium materials to ensure your siding stands the test of time, even in the toughest weather conditions."
                    bottomContent="Our expert siding contractors offer a variety of quality siding products that are perfect for any home and come with a 100% satisfaction guarantee. We're confident you'll love your new siding installation and the workmanship that's done to install it. From the initial consultation to the final walkthrough, we prioritize your satisfaction and peace of mind every step of the way."
                    imagePosition="right"
                />

                {/* SIDING INSTALLATION ADVANTAGES */}
                <IncentivesSection
                    className="py-16"
                    title="Expert Siding Installation: Beauty, Protection and Affordability"
                    titleAs="h2"
                    subtitle="From traditional horizontal siding to board & batten siding to shake & shingle siding, our siding installation experts install a variety of beautiful siding styles to fit any home. "
                    heroImage={{
                        alt: "Professional siding installation team working on home exterior",
                        src: "/images/siding/siding-service/siding-installation-page/siding-install2.webp"
                    }}
                    incentives={[
                        {
                            name: "Siding Installation Styles",
                            description: "Traditional horizontal siding, board & batten siding, shake & shingle siding, and custom mix and match options for unique designs.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/hammer.svg",
                            imageAlt: "Various siding installation styles icon"
                        },
                        {
                            name: "Weather Protection",
                            description: "Excellent R-value insulation, wind resistant installation, hail protection, and heat and cold resistance for lasting durability.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/cloud-snow.svg",
                            imageAlt: "Weather protection siding installation icon"
                        },
                        {
                            name: "Value & Guarantee",
                            description: "Upfront pricing, 100% satisfaction guarantee, increases home value, and expert siding installation with professional workmanship.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/handshake.svg",
                            imageAlt: "Siding installation value and guarantee icon"
                        },
                    ]}
                    imagePosition="right"
                />

                {/* SIDING INSTALLATION BENEFITS */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <HeaderText as="h2" className="mb-6">
                                    Benefits of Professional Siding Installation
                                </HeaderText>
                                <SecondaryText className="mb-6">
                                    Vinyl siding is the most popular siding material in the country. With professional siding installation
                                    from Paragon Exterior, you can enjoy numerous benefits that make it the smart choice for homeowners
                                    seeking quality vinyl siding installation services.
                                </SecondaryText>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Low maintenance siding installation",
                                        "Mold and mildew resistance",
                                        "Fire resistance",
                                        "Cost efficient installation",
                                        "Bold, lasting colors",
                                        "Energy efficient siding installation"
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-primaryblue rounded-full flex items-center justify-center mt-1">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Image
                                    width={500}
                                    height={500}
                                    src="/images/siding/siding-service/siding-installation-page/siding-install3.webp"
                                    alt="Benefits of professional siding installation"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAIN CONTENT ROWS */}
                <div className="mx-auto w-5/6 py-10 lg:py-20">
                    <div className="mb-32 text-center">
                        <HeaderText>Why Choose Paragon Exterior for Siding Installation?</HeaderText>
                        <SecondaryText>
                            Our expert siding installation crews ensure flawless seams, proper insulation, and long-term performance.
                            Whether you need rapid siding installation or a complete home transformation, we deliver workmanship that enhances your home&apos;s beauty and protection.
                        </SecondaryText>
                    </div>

                    {/* Siding Installation Process Row */}
                    <Row
                        title="Our Proven Siding Installation Process"
                        description="From initial consultation to final cleanup, our siding installation process is designed for efficiency and quality. We handle material selection, old siding removal, weather protection, and precise installation with attention to every detail."
                        imageSrc="/images/siding/siding-service/siding-installation-page/siding-install4.webp"
                    />

                    {/* Materials Row */}
                    <Row
                        title="Premium Siding Installation Materials"
                        description="We install vinyl, fiber cement, engineered wood, and cedar siding with expert craftsmanship. Our siding installation team helps you choose the perfect material and color to complement your home's architecture and your personal style."
                        imageSrc="/images/siding/siding-service/siding-installation-page/siding-install5.webp"
                        reverse
                        className="pt-12 lg:pt-24"
                    />
                </div>

                {/* SIDING INSTALLATION & REPAIR */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Image
                                    width={500}
                                    height={500}
                                    src="/images/siding/siding-service/siding-installation-page/siding-install6.webp"
                                    alt="Professional siding installation and repair services"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <HeaderText as="h2" className="mb-6">
                                    Complete Siding Installation & Repair Services
                                </HeaderText>
                                <SecondaryText className="mb-6">
                                    Beyond new siding installation, we also provide comprehensive siding repair services.
                                    Our siding installation experts can seamlessly blend new sections with existing siding
                                    for partial replacements and repairs.
                                </SecondaryText>
                                <SecondaryText className="mb-6">
                                    Whether you need full home siding installation or targeted repairs, our team ensures
                                    color matching, proper weatherproofing, and a flawless finish that enhances your home&apos;s
                                    curb appeal and protection.
                                </SecondaryText>
                                <div className="space-y-3">
                                    {[
                                        "Complete home siding installation",
                                        "Partial siding replacement and repair",
                                        "Seamless color and style matching",
                                        "Weather barrier installation and protection",
                                        "Insulation upgrades during installation",
                                        "Trim and finishing work included"
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

                <WhyParagonSidingInstallation
                title='Why Choose Paragon Exterior for Siding Installation?'
                subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch siding installation that combines beauty with durability. Our experienced team understands the intricacies of siding installation, ensuring your home not only looks stunning but is also protected against the elements.'
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