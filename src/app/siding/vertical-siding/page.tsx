import React from 'react'
import Hero from '@/components/service-page/Hero'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import InfoSection from '@/components/service-page/Info'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'

import {Metadata} from 'next'
import VerticalSidingShowcase from '@/components/service-page/siding/Showcase'
import WhyParagon from '@/components/WhyParagon'

// SEO Metadata export
export const metadata: Metadata = {
    title: 'Vertical Siding Installation | Modern Architectural Design',
    description: 'Transform your home with stunning vertical siding installation. Modern, eye-catching vertical siding designs that enhance curb appeal and architectural style. Expert installation services.',
    keywords: 'vertical siding, vertical siding installation, modern siding, architectural siding, contemporary siding, vertical wood siding, vertical vinyl siding, board and batten siding',
    openGraph: {
        title: 'Vertical Siding Installation | Paragon Exterior',
        description: 'Create dramatic curb appeal with professional vertical siding installation. Modern designs that make your home stand out.',
        type: 'website',
        images: ['/images/siding/vertical-siding/vertical-siding-hero.webp'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vertical Siding Installation | Paragon Exterior',
        description: 'Transform your home with stunning vertical siding installation.',
    },
    alternates: {
        canonical: 'https://www.paragonexterior.com/services/vertical-siding'
    }
}

// Structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vertical Siding Installation",
    "description": "Professional vertical siding installation services for modern, architectural home designs with dramatic visual impact.",
    "provider": {
        "@type": "Organization",
        "name": "Paragon Exterior",
        "url": "https://paragonexterior.com"
    },
    "serviceType": "Home Improvement",
    "areaServed": "Mid Atlantic",
    "offers": {
        "@type": "Offer",
        "description": "Free vertical siding design consultation and installation estimates"
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
                    mainText="Vertical Siding Installation"
                    subText="Break away from ordinary with stunning vertical siding that transforms your home into a modern architectural masterpiece. Bold, contemporary, and undeniably striking."
                    imgSrc="/images/siding/siding-service/vertical-siding/vertical-siding3.webp"
                    imgAlt="Modern home with dramatic vertical siding installation"
                />

                {/* INFO SECTION */}
                <InfoSection
                    imgSrc="/images/siding/siding-service/vertical-siding/vertical-siding4.webp"
                    imgAlt="vertical siding installation"
                    titleAs="h1"
                    title="Vertical Siding: Where Architecture Meets Art"
                    mainContent="Vertical siding isn't just a design choice—it's a statement. This bold architectural approach creates dramatic visual lines that draw the eye upward, making your home appear taller, more modern, and undeniably distinctive. From sleek contemporary designs to rustic board-and-batten charm, vertical siding transforms ordinary homes into neighborhood showstoppers."
                    bottomContent="Our vertical siding experts understand the unique installation requirements and design considerations that make vertical applications successful. Whether you're building new or updating existing siding, we'll help you choose the perfect vertical siding solution that complements your home's architecture while creating the dramatic impact you're seeking."
                    imagePosition="left"
                />

                {/* VERTICAL SIDING SHOWCASE COMPONENT */}
                <VerticalSidingShowcase />

                {/* WHY CHOOSE VERTICAL SIDING */}
                <InfoSection
                    className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
                    title="Why Vertical Siding Creates Extraordinary Homes"
                    titleAs="h2"
                    mainContent="Vertical siding is more than just a trend—it's a transformative design choice that elevates your home's architecture. By drawing the eye upward, vertical siding creates a sense of height and modernity that horizontal siding simply can't match. Whether you prefer the rustic charm of board-and-batten or the sleek lines of modern metal panels, vertical siding adds a unique character that sets your home apart."
                    bottomContent="Our team specializes in vertical siding installation, ensuring proper water management, structural integrity, and aesthetic appeal. With a wide range of materials and styles available, we can help you achieve the perfect vertical siding look that enhances your home's curb appeal and architectural style."
                    imgSrc="/images/siding/siding-service/vertical-siding/vertical-siding2.webp"
                    imgAlt="Vertical siding installation on modern home"
                    imagePosition="right"
                />


                <div className='mx-auto w-5/6 flex flex-col justify-center items-center sm:text-center text-left px-6'>
                    <HeaderText as="h2" className="text-center my-20">
                        Vertical Siding Installation Requires Expert Precision
                    </HeaderText>
                    <SecondaryText className="text-center max-w-3xl mx-auto mb-12">
                        Installing vertical siding demands specialized knowledge of water management, proper fastening techniques, and structural considerations.
                        Our vertical siding experts understand the unique challenges and ensure proper installation that protects your home while delivering the stunning visual impact you&apos;re seeking.
                    </SecondaryText>
 
                </div>

                <WhyParagon
                title='Why Choose Paragon Exterior as your Vertical Siding Expert?'
                subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch vertical siding installation that combines beauty with durability. Our experienced team understands the intricacies of vertical siding, ensuring your home not only looks stunning but is also protected against the elements.'
                
                />

                {/* VERTICAL SIDING STYLES */}
                {/* <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <HeaderText as="h2" className="mb-6 text-primaryblue">
                                Vertical Siding Styles That Make a Statement
                            </HeaderText>
                            <SecondaryText className="max-w-4xl mx-auto">
                                From rustic charm to ultra-modern minimalism, vertical siding comes in styles that suit every
                                architectural vision. Explore the possibilities and find your perfect vertical siding aesthetic.
                            </SecondaryText>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Board & Batten Vertical Siding",
                                    description: "Classic farmhouse charm with wide boards and narrow battens creating rustic vertical lines.",
                                    image: "/images/siding/vertical-styles/board-batten.webp"
                                },
                                {
                                    title: "Modern Metal Vertical Siding",
                                    description: "Sleek steel or aluminum panels for ultra-contemporary homes with clean, minimalist lines.",
                                    image: "/images/siding/vertical-styles/metal-vertical.webp"
                                },
                                {
                                    title: "Vertical Wood Siding",
                                    description: "Natural cedar or pine planks installed vertically for timeless beauty and organic appeal.",
                                    image: "/images/siding/vertical-styles/wood-vertical.webp"
                                },
                                {
                                    title: "Vertical Vinyl Siding",
                                    description: "Low-maintenance vinyl panels that mimic wood grain with vertical installation for modern flair.",
                                    image: "/images/siding/vertical-styles/vinyl-vertical.webp"
                                },
                                {
                                    title: "Mixed Orientation Design",
                                    description: "Combine vertical and horizontal siding for dynamic architectural contrast and visual interest.",
                                    image: "/images/siding/vertical-styles/mixed-orientation.webp"
                                },
                                {
                                    title: "Vertical Fiber Cement",
                                    description: "Durable cement panels with wood-like texture installed vertically for lasting beauty.",
                                    image: "/images/siding/vertical-styles/fiber-cement-vertical.webp"
                                }
                            ].map((style, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                                        <img
                                            src={style.image}
                                            alt={style.title}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <HeaderText variant="small" className="mb-2 text-white">
                                                {style.title}
                                            </HeaderText>
                                            <p className="text-sm text-gray-200">
                                                {style.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* INSTALLATION EXPERTISE */}
                {/* <Row
                    title="Vertical Siding Installation Requires Expert Precision"
                    description="Installing vertical siding demands specialized knowledge of water management, proper fastening techniques, and structural considerations. Our vertical siding experts understand the unique challenges and ensure proper installation that protects your home while delivering the stunning visual impact you're seeking."
                    imageSrc="/images/siding/vertical-installation-process.webp"
                    className="py-16"
                    reverse
                /> */}




                {/* GET ESTIMATE */}
                            <div className="py-12 pt-20 sm:pt-0">
                                <GetEstimate />
                            </div>
            </div>
        </>
    )
}