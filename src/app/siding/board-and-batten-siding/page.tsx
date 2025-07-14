import React from 'react'
import Hero from '@/components/service-page/Hero'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import InfoSection from '@/components/service-page/Info'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'

import {Metadata} from 'next'
import VerticalSidingShowcase from '@/components/service-page/siding/Showcase'
import WhyParagon, {WhyParagonBoardAndBattenSiding} from '@/components/WhyParagon'

// SEO Metadata export
export const metadata: Metadata = {
    title: 'Board and Batten Siding Installation | Modern Architectural Design',
    description: 'Transform your home with stunning board and batten siding installation. Modern, eye-catching board and batten siding designs that enhance curb appeal and architectural style. Expert installation services.',
    keywords: 'board and batten siding, board and batten siding installation, modern siding, architectural siding, contemporary siding, vertical wood siding, vertical vinyl siding, board and batten siding',
    openGraph: {
        title: 'Board and Batten Siding Installation | Paragon Exterior',
        description: 'Create dramatic curb appeal with professional board and batten siding installation. Modern designs that make your home stand out.',
        type: 'website',
        images: ['/images/siding/vertical-siding/vertical-siding-hero.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Board and Batten Siding Installation | Paragon Exterior',
        description: 'Transform your home with stunning board and batten siding installation.',
    },
    alternates: {
        canonical: 'https://www.paragonexterior.com/services/vertical-siding'
    }
}

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Board and Batten Siding Installation",
    "description": "Professional board and batten siding installation services for modern, architectural home designs with dramatic visual impact.",
    "provider": {
        "@type": "Organization",
        "name": "Paragon Exterior",
        "url": "https://paragonexterior.com"
    },
    "serviceType": "Home Improvement",
    "areaServed": "Mid Atlantic",
    "offers": {
        "@type": "Offer",
        "description": "Free board and batten siding design consultation and installation estimates"
    }
}

export default function VerticalSidingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            />

            <div className="min-h-screen">
                {/* HERO */}
                <Hero
                    mainText="Board and Batten Siding Installation"
                    subText="Break away from ordinary with stunning board and batten siding that transforms your home into a modern architectural masterpiece. Bold, contemporary, and undeniably striking."
                    imgSrc="/images/siding/engineered/hero.webp"
                    imgAlt="Modern home with dramatic board and batten siding installation"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/engineered/eng1.webp"
                    imgAlt="board and batten siding installation"
                    titleAs="h1"
                    title="Board and Batten Siding: Where Architecture Meets Art"
                    mainContent={`Vertical siding serves as more than a mere design option; it’s a declaration of style. This striking architectural technique establishes impressive visual lines that lead the gaze upward, giving your residence a taller, more contemporary, and truly unique look. Ranging from chic modern aesthetics to charming rustic board-and-batten, this siding elevates typical homes into standout attractions in the community.`}
                    bottomContent="Our board and batten siding experts understand the unique installation requirements and design considerations that make vertical applications successful. Whether you're building new or updating existing siding, we'll help you choose the perfect board and batten siding solution that complements your home's architecture while creating the dramatic impact you're seeking."
                    imagePosition="left"
                />

                {/* VERTICAL SIDING SHOWCASE COMPONENT */}
                <VerticalSidingShowcase />

                {/* WHY CHOOSE VERTICAL SIDING */}
                <InfoSection
                    className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
                    title="Why Board and Batten Siding Creates Extraordinary Homes"
                    titleAs="h2"
                    mainContent="
                    Vertical siding goes beyond being a mere trend—it's a design decision that can significantly enhance your home's architectural appeal. By directing the gaze upward, board and batten siding imparts a feeling of height and contemporary style that horizontal siding cannot achieve. Whether you are drawn to the rustic allure of board-and-batten or the clean lines of modern metal panels, this siding option infuses your home with a distinctive character that makes it stand out.
                    "
                    bottomContent="Our team specializes in board and batten siding installation, ensuring proper water management, structural integrity, and aesthetic appeal. With a wide range of materials and styles available, we can help you achieve the perfect board and batten siding look that enhances your home's curb appeal and architectural style."
                    imgSrc="/images/siding/engineered/eng2.webp"
                    imgAlt="Vertical siding installation on modern home"
                    imagePosition="right"
                />


                <div className='mx-auto w-5/6 flex flex-col justify-center items-center sm:text-center text-left px-6'>
                    <HeaderText as="h2" className="text-center my-20">
                        Board and Batten Siding Installation Requires Expert Precision
                    </HeaderText>
                    <SecondaryText className="text-center max-w-3xl mx-auto mb-12">
                        Installing board and batten siding demands specialized knowledge of water management, proper fastening techniques, and structural considerations.
                        Our board and batten siding experts understand the unique challenges and ensure proper installation that protects your home while delivering the stunning visual impact you&apos;re seeking.
                    </SecondaryText>

                </div>

                <WhyParagonBoardAndBattenSiding
                    title='Why Choose Paragon Exterior as your Board and Batten Siding Expert?'
                    subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch Board and Batten Siding installation that combines beauty with durability. Our experienced team understands the intricacies of Board and Batten Siding, which ensures that your home not only looks stunning but also stays protected against the elements.'

                />


                <div className="py-12 pt-20 sm:pt-0">
                    <GetEstimate />
                </div>
            </div>
        </>
    )
}