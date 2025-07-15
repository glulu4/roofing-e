

import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import ServicesGrid from "@/components/service-page/Services";
import FAQ from "@/components/FAQ";
import {WhyParagonRoofing} from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas, Location} from "../../../../public/service-areas";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";
import {Columns4Icon, HomeIcon, Wind} from "lucide-react";
import {WindowIcon} from "@heroicons/react/24/outline";

// Comprehensive services data targeting key keywords
const comprehensiveServices = [
    {
        id: 1,
        title: 'Emergency Roof Repair',
        href: '/roofing/emergency-roof-repair',
        description: '24/7 emergency roof repair services for storm damage, active leaks, and urgent roofing needs. Immediate response with tarping and permanent repairs across PA, NJ, DE.',
        imageUrl: '/images/roof-service/emergency-roofing/roof-damage.webp',
    },
    {
        id: 2,
        title: 'Roof Repair',
        href: '/roofing/roof-repair',
        description: 'Professional roof repair services for storm damage, missing shingles, leaks, and flashing issues. Licensed roofers serving PA, NJ, and DE with fast, reliable repairs.',
        imageUrl: '/images/roof-service/roof-repair/roof-repair4.jpg',
    },
    {
        id: 3,
        title: 'Roof Replacement',
        href: '/roofing/roof-replacement',
        description: 'Complete roof replacement services using premium asphalt shingles, metal roofing, and architectural materials. Expert installation with warranties for lasting protection.',
        imageUrl: '/images/roof-service/roof-replacement/roof-replacement.avif',
    },
    {
        id: 4,
        title: 'Siding Installation',
        href: '/siding/siding-installation',
        description: "Expert siding installation services to enhance your home's protection and curb appeal.Choose from a variety of materials including fiber cement, vinyl, and engineered wood.",
        imageUrl: '/images/siding/siding-service/siding-installation.webp',
      },
    {
        id: 5,
        title: 'Window Replacement',
        href: '/windows/window-replacement',
        description: 'Complete window replacement services to enhance your home’s energy efficiency and aesthetics. Choose from a variety of styles and materials.',
        imageUrl: '/images/window/window-replacement.webp',
      },
    {
        id: 6,
        title: "Commercial Roof Replacement",
        description: "Comprehensive commercial roof replacement services to upgrade your building’s protection and energy efficiency.",
        imageUrl: "/images/commercial/replacement-commercial.webp",
        href: "/commercial-roofing/roof-replacement"
    },
];

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `${location?.name} Roofing Contractor | Roof Repair, Roof Replacement & More`,
        description: `Professional roofing contractor in ${location.name} offering roof repair, roof replacement, emergency roof repair, siding installation, and window replacement. Licensed and insured with 24/7 emergency service.`,
        keywords: `${location.name} roofing contractor, roof repair ${location.name}, roof replacement ${location.name}, emergency roof repair, siding installation ${location.name}, window replacement ${location.name}`,
        alternates: {canonical: `https://www.paragonexterior.com/roofing-contractor/${slug}`},
        openGraph: {
            title: `${location?.name} Roofing Contractor | Paragon Exterior`,
            description: `Expert roofing contractor serving ${location.name}. Specializing in roof repair, roof replacement, emergency services, siding installation, and window replacement.`,
            type: 'website',
            images: ['/images/roofing-contractor-hero.jpg'],
        },
    };
}

const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Paragon Exterior",
    "description": `Professional roofing contractor in ${location.name} specializing in roof repair, roof replacement, emergency roof repair, siding installation, and window replacement.`,
    "url": `https://www.paragonexterior.com/roofing-contractor/${location.name}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": location.name || "PA",
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": location.name
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Improvement Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Repair",
                    "description": "Expert roof repair for shingle damage, weathering, and general wear."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Replacement",
                    "description": "Complete roof replacement using asphalt, metal, or flat systems."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Metal Roof Repair",
                    "description": "Specialized repairs for metal roofs including seam sealing and panel replacement."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Flat Roofing",
                    "description": "Installation and repair of flat roofing systems including EPDM and TPO."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Velux Skylights",
                    "description": "Professional installation and replacement of Velux skylights for enhanced natural lighting."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Repair",
                    "description": "Efficient repair of vinyl, fiber cement, or wood siding damaged by age or weather."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Installation",
                    "description": "Professional siding installation for new construction and exterior upgrades."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Replacement",
                    "description": "Full siding replacement to restore and modernize your home’s exterior."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Vinyl Siding Installation",
                    "description": "High-quality vinyl siding installation for durability, insulation, and curb appeal."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roof Repair",
                    "description": "Timely repairs for commercial roofing systems including flat and low-slope roofs."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Roof Replacement",
                    "description": "Comprehensive roof replacement for commercial properties with minimal disruption."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Repair",
                    "description": "Repairs for damaged or leaking gutters to protect your roof and foundation."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Replacement",
                    "description": "Full replacement of outdated or damaged gutter systems with high-performance alternatives."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Leak Repair",
                    "description": "Fast and effective leak detection and roof repair to prevent further water damage."
                }
            }
        ]
    }
});

export default async function ServiceAreaPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}}
            />

            <div className="min-h-screen">
                {/* HERO */}
                <Hero
                    mainText={`${location.name} Roofing Contractor | Trusted Local Experts`}
                    subText={`Looking for a reliable roofing contractor in ${location.name}? Paragon Exterior delivers expert roof repair, roof replacement, emergency service, siding, and window installation—all with honest pricing and a satisfaction guarantee.`}
                    imgSrc="/images/dynamic/service-area/hero.webp"
                    imgAlt={`Professional roofing contractor team in ${location.name}`}
                />

                {/* Emergency Banner */}
                <section className="py-8 bg-red-600">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <div className="text-white">
                                <HeaderText variant="small" className="text-white mb-2">
                                    24/7 Emergency Roof Repair in {location.name}
                                </HeaderText>
                                <p className="text-red-100">Storm damage or a roof leak? Call us now for fast, local help!</p>
                            </div>
                            <a
                                href="tel:2157997663"
                                className="bg-white text-red-600 px-8 py-3 font-bold rounded-lg hover:bg-red-50 transition-colors"
                            >
                                Call (215) 799-7663
                            </a>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <InfoSection
                    imgSrc="/images/dynamic/service-area/img1.webp"
                    imgAlt={`Roofing contractor services in ${location.name}`}
                    title={`Your Local Roofing Contractor in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <p>
                                Paragon Exterior is your one-stop source for <strong>roof repair</strong>, <strong>roof replacement</strong>, <strong>emergency roof repair</strong>, <strong>siding installation</strong>, and <strong>window replacement</strong> in {location.name}. We handle every project with care and professionalism—using only the best materials, the latest techniques, and a commitment to your complete satisfaction.
                            </p>
                            <p className="mt-4">
                                Our team is licensed, insured, and highly trained to protect your home from leaks, weather, and energy loss. Whether you need urgent help or a full exterior upgrade, you can trust Paragon Exterior for fast, friendly service.
                            </p>
                        </div>
                    }
                    bottomContent={`Join your neighbors in ${location.name} who choose Paragon Exterior for dependable roof repairs, new roofs, and complete exterior makeovers.`}
                    imagePosition="right"
                />

                {/* Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Our Most Popular Services in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From quick emergency fixes to full home renovations—our roofing contractor team is ready to help you protect, restore, and upgrade your home or business.
                            </SecondaryText>
                        </div>
                        <ServicesGrid services={comprehensiveServices} />
                    </div>
                </section>

                {/* Emergency Roofing */}
                <Row
                    title={`Emergency Roof Repair Services in ${location.name}`}
                    description={
                        <div>
                            <p>
                                Storm damage or leaks? Our <strong>emergency roof repair</strong> team is ready 24/7. We respond fast to stop leaks, prevent water damage, and keep your family safe—any time, day or night.
                            </p>
                            <p className="mt-4">
                                Emergency roof repair includes leak detection, storm assessment, and immediate tarping. Our crews arrive fully equipped to secure your home right away.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img2.webp"
                    headerColor="text-red-600"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Roof Repair & Replacement */}
                <Row
                    title={`Roof Repair & Roof Replacement in ${location.name}`}
                    description={
                        <div>
                            <p>
                                Need roof repair? We fix leaks, missing shingles, and storm damage with quality materials and expert skill. For <strong>roof replacement</strong>, we offer top brands and styles, from asphalt shingles to standing seam metal roofing.
                            </p>
                            <p className="mt-4">
                                Every roof we install in {location.name} is built to last, backed by strong warranties and installed by licensed, insured pros.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />

                {/* Siding & Windows */}
                <Row
                    title={`Siding & Window Replacement`}
                    description={
                        <div>
                            <p>
                                Upgrade your curb appeal and energy savings with our <strong>siding installation</strong> and <strong>window replacement</strong> services. Choose from vinyl, fiber cement, wood siding, and high-performance windows.
                            </p>
                            <p className="mt-4">
                                We handle all exterior renovations for your {location.name} home—saving you time, hassle, and money with one trusted contractor.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Trust and Service Banner */}
                <IncentivesSection
                    className="py-16"
                    title={`Why Homeowners in ${location.name} Choose Paragon Exterior`}
                    titleAs="h2"
                    subtitle={`We're a roofing contractor known for fair prices, honest advice, and great results. Discover why more families in ${location.name} trust Paragon Exterior for every project.`}
                    heroImage={{
                        alt: `Professional roofing contractor team working in ${location.name}`,
                        src: "/images/dynamic/service-area/img5.webp"
                    }}
                    incentives={[
                        {
                            name: "24/7 Emergency Service",
                            description: "Immediate help for roof leaks and storm damage—call anytime!",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "24/7 emergency roof repair icon"
                        },
                        {
                            name: "Licensed & Insured",
                            description: "Fully licensed, fully insured, fully local—so you get total peace of mind.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
                            imageAlt: "Licensed roofing contractor icon"
                        },
                        {
                            name: "All-In-One Service",
                            description: "Roofing, siding, and windows—done right, by one reliable contractor.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Complete home services icon"
                        },
                        {
                            name: "Quality Guaranteed",
                            description: "Workmanship and materials always covered by a strong warranty.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/handshake.svg",
                            imageAlt: "Quality guarantee icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Materials Highlight */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2">Premium Materials for Every Project</HeaderText>
                            <SecondaryText>
                                We use only top-quality materials for every roof repair, roof replacement, siding installation, and window project in {location.name}.
                            </SecondaryText>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HomeIcon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Roofing Materials</h3>
                                <p className="text-gray-700 text-sm">Asphalt, metal, designer shingles—all installed by expert crews</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Columns4Icon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Siding Options</h3>
                                <p className="text-gray-700 text-sm">Vinyl, fiber cement, wood, and composite siding for every style</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <WindowIcon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Window Types</h3>
                                <p className="text-gray-700 text-sm">Vinyl, wood, and fiberglass window replacement for efficiency</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Wind className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Emergency Materials</h3>
                                <p className="text-gray-700 text-sm">Heavy-duty tarps and repair supplies for urgent fixes</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews, FAQ, Service Area, and CTA */}
                <WhyParagonRoofing
                    title={`Why ${location.name} Trusts Paragon Exterior`}
                    subTitle={`Roof repairs, roof replacements, siding, and windows—done right, every time. See why we're rated #1 in ${location.name}.`}
                    titleAs="h2"
                />

                <GoogleReviews />
                <FAQ locationName={location.name} />

                {/* Service Area & CTA */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <HeaderText as="h2" className="mb-8">
                            Serving {location.name} and Nearby Areas
                        </HeaderText>
                        <SecondaryText className="mb-8">
                            Need a trusted roofing contractor in {location.name}? Our services cover roof repair, roof replacement, emergency repairs, siding, and windows for all homes and businesses in the area. Call us for same-day help or your free estimate.
                        </SecondaryText>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a
                                href="tel:2157997663"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                            >
                                Emergency: (215) 799-7663
                            </a>
                            <a
                                href="/estimate"
                                className="bg-primaryblue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                            >
                                Free Estimate
                            </a>
                        </div>
                    </div>
                </section>

                <GetEstimate location={location.name} />
            </div>
        </>
    );
}