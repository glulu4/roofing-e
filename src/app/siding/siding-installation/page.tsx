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
    description: 'Expert siding installation services in the PA, NJ, and DE. Expert vinyl, fiber cement, and wood siding installation with 100% satisfaction guarantee.',
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
    "areaServed": [
        {"@type": "State", "name": "Pennsylvania"},
        {"@type": "State", "name": "New Jersey"},
        {"@type": "State", "name": "Delaware"}
    ],
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
                    subText="Upgrade your home's curb appeal and protection with expert siding installation from Paragon Exterior. Our team specializes in vinyl, fiber cement, engineered wood, and cedar siding—delivering beautiful results built to last for decades."
                    imgSrc="/images/siding/siding-service/siding-installation-page/siding-installation-hero.webp"
                    imgAlt="Expert siding installation by Paragon Exterior"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/siding-service/siding-installation-page/siding-install1.webp"
                    imgAlt="Before and after siding installation"
                    titleAs="h1"
                    title="Expert Siding Installation Services"
                    mainContent={
                        <>
                            <SecondaryText>
                                Worn or outdated siding does more than hurt your curb appeal—it leaves your home vulnerable to water, pests, and energy loss. With professional siding installation from Paragon Exterior, you get more than a facelift: you get lasting protection, increased energy efficiency, and greater property value.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our certified siding installers use advanced techniques and premium materials to handle the toughest weather in the Mid Atlantic. Whether you choose classic vinyl, durable fiber cement, engineered wood, or natural cedar, we’ll help you select the perfect style and color to match your vision—and we guarantee every job is done right, from prep to clean-up.
                            </SecondaryText>
                        </>
                    }
                    bottomContent={
                        <SecondaryText>
                            Every project includes thorough site prep, expert installation, and a complete walk-through to ensure your total satisfaction. Backed by leading manufacturer warranties and our own workmanship guarantee, you can trust Paragon Exterior for siding installation that stands the test of time—and turns heads for years to come.
                        </SecondaryText>
                    }
                    imagePosition="right"
                />

                {/* SIDING INSTALLATION ADVANTAGES */}
                <IncentivesSection
                    className="py-16"
                    title="Expert Siding Installation: Beauty, Protection, and Value"
                    titleAs="h2"
                    subtitle="Transform your home with a range of siding styles, installed for maximum beauty, weather resistance, and long-term value."
                    heroImage={{
                        alt: "Professional siding installation team working on home exterior",
                        src: "/images/siding/siding-service/siding-installation-page/siding-install2.webp"
                    }}
                    incentives={[
                        {
                            name: "Versatile Siding Styles",
                            description: "Choose from traditional horizontal lap, board & batten, shake, and shingle siding—or mix and match for a custom look. Our team can recommend options that boost curb appeal and fit your budget.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/hammer.svg",
                            imageAlt: "Various siding installation styles icon"
                        },
                        {
                            name: "Weather & Energy Protection",
                            description: "We install siding systems built to resist wind, hail, rain, and UV exposure. Many options include insulation that can reduce energy bills and keep your home comfortable year-round.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/cloud-snow.svg",
                            imageAlt: "Weather protection siding installation icon"
                        },
                        {
                            name: "Transparent Pricing & Guarantees",
                            description: "Get upfront, detailed quotes with no surprises. Every project is backed by a 100% satisfaction guarantee and leading manufacturer warranties for complete peace of mind.",
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
                                    New siding is a powerful upgrade. With Paragon Exterior, you enjoy low-maintenance beauty, modern color choices, and years of reliable protection—plus major boosts to comfort and energy savings.
                                </SecondaryText>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Virtually maintenance-free finishes",
                                        "Resistant to mold, mildew, and insects",
                                        "Improved fire and wind protection",
                                        "Cost-efficient—no painting required",
                                        "Vibrant, fade-resistant color selection",
                                        "Superior insulation for lower energy bills"
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
                        <HeaderText>Why Homeowners Choose Paragon Exterior</HeaderText>
                        <SecondaryText>
                            From start to finish, our process is designed for your confidence and comfort. We keep you informed, respect your home, and treat every project like our own.
                            Choose Paragon for flawless seams, lasting weatherproofing, and stunning style—on your schedule, within your budget.
                        </SecondaryText>
                    </div>

                    {/* Siding Installation Process Row */}
                    <Row
                        title="How Our Siding Installation Process Works"
                        description="It starts with a no-obligation consultation and ends with your total satisfaction. We guide you through material selection, color design, scheduling, and every detail of the installation. Old siding is removed, the structure is inspected and protected, and your new siding is installed with precision. We clean up thoroughly and do a full walkthrough before you sign off."
                        imageSrc="/images/siding/siding-service/siding-installation-page/siding-install4.webp"
                    />

                    {/* Materials Row */}
                    <Row
                        title="Premium Siding Materials—Expertly Installed"
                        description="Our team installs vinyl, fiber cement, engineered wood, and cedar siding, always with expert craftsmanship. Not sure what’s best for your home? We help you weigh the pros and cons of each, and always recommend what fits your goals, style, and budget."
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
                                    Complete Siding Services—Installation & Repair
                                </HeaderText>
                                <SecondaryText className="mb-6">
                                    Need a few panels fixed or your whole home redone? We offer partial replacements, repairs, and seamless blending of new siding with existing sections—always with color-matching, weatherproofing, and expert finishing.
                                </SecondaryText>
                                <SecondaryText className="mb-6">
                                    Insulation upgrades, trim work, and flashing are included. Our crews are meticulous, so you get a beautiful finish that lasts for years—and adds true value to your property.
                                </SecondaryText>
                                <div className="space-y-3">
                                    {[
                                        "Full-home siding installation",
                                        "Partial siding replacement & repairs",
                                        "Seamless color and texture blending",
                                        "Moisture barriers and weather sealing",
                                        "Insulation upgrades for better efficiency",
                                        "Expert trim, fascia, and finishing work"
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
                    subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch siding installation that combines beauty with durability. Our experienced team understands the intricacies of siding installation, ensuring your home not only looks stunning but is also protected against the elements for years to come.'
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
