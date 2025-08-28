

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
import Link from "next/link";

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
        title: `${location?.name}'s Roofing, Siding & Window Company`,
        description: `Trusted roofing, siding, and window company in ${location.name} offering full replacements, repairs, and great service. Free estimated available.`,
        openGraph: {
            title: `${location?.name} Roofing Contractor | Paragon Exterior`,
            description: `Expert roofing contractor serving ${location.name}. Specializing in roof repair, roof replacement, emergency services, siding installation, and window replacement.`,
            type: 'website',
            images: ["/images/dynamic/service-area/hero.webp"],
        },
    };
}

const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "name": "Paragon Exterior",
    "description": `Professional roofing contractor in ${location.name} specializing in roof repair, roof replacement, emergency roof repair, siding installation, and window replacement.`,

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
                    mainText={`${location.name}'s Roofing, Siding, and Window Company`}
                    subText={`Looking for a reliable exterior contractor in ${location.name}? Paragon Exterior delivers expert roof repair, roof replacement, emergency service, siding, and window installation; all with honest pricing and a satisfaction guarantee.`}
                    imgSrc="/images/dynamic/service-area/hero.webp"
                    imgAlt={`Professional roofing contractor team in ${location.name}`}
                />


                {/* Overview Section */}
                <InfoSection
                    imgSrc="/images/dynamic/service-area/img1.webp"
                    imgAlt={`Roofing contractor services in ${location.name}`}
                    title={`Best Roofing, Siding, and Window Replacement Company in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <SecondaryText>
                                Paragon Exterior is your one-stop shop for exterior home improvements. We serve the greater {location.name} area and pride ourselves on the quality of our work.
                                We offer expert roofing, siding, and window services that not only make your home look amazing, but also ensure its built to last. 
                                We are equipped for full replacements and repairs. We handle every project with professionalism, using only the best materials, the latest techniques, and a commitment to your home.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our team is licensed, insured, and highly trained to protect your home from leaks, weather, and energy loss. Whether you need urgent help or a full exterior upgrade, you can trust Paragon Exterior for fast, friendly service.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Join your neighbors in ${location.name} who choose Paragon Exterior for dependable roof repairs, new roofs, and complete exterior makeovers.`}
                    imagePosition="right"
                />

                {/* Services Grid */}
                <section className="py-16 bg-gray-50">
                    {/* <div className="max-w-7xl mx-auto px-6"> */}
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Popular Services in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From quick emergency fixes to full home renovations—our roofing contractor team is ready to help you protect, restore, and upgrade your home or business.
                            </SecondaryText>
                        </div>
                        <ServicesGrid services={comprehensiveServices} />
                    {/* </div> */}
                </section>

                {/* Emergency Roofing */}
                <Row
                    title={`Emergency Roof Repair Services in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                If your home as been damaged in a storm damage, call Paragon Exterior. Since we operate out of {location.name}, we have local experts that specialize in <strong>emergency roof repair and replacements</strong>. 
                                We respond fast to stop leaks, prevent water damage, and keep your family safe—any time, day or night.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Emergency roof repair includes leak detection, storm assessment, and immediate tarping. Our crews arrive fully equipped to secure your home right away.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img2.webp"
                   
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Roof Repair & Replacement */}
                <Row
                    title={`Roof Repair & Roof Replacement in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                Looking to just repair your roof. Our team knows what to look for and if a repair is all you need. We follow a comprehensive process to ensure that your roof gets exactly what it needs. 
                                We fix leaks and missing shingles with quality materials and expert skill. 
                                For <strong>roof replacement</strong>, we install full GAF roofing systems to ensure your roof is built to last and looks amazing. We also install metal roofing systems, such as standing seam metal roofs.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Every roof we install in {location.name} is built to last, backed by strong warranties and installed by licensed, insured professionals.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />

                {/* Siding & Windows */}
                {/* Siding – Repair & Replacement */}
                <Row
                    title={`Siding Repair & Replacement in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                Got loose panels, cracks, or warping? We handle <strong>siding repair</strong> in {location.name}—fast.
                                We’ll color-match where possible, resecure panels, fix trim and flashing, and stop water from sneaking behind your walls.
                                If the damage is bigger than a patch job, we’ll tell you straight and show the options side-by-side.
                            </SecondaryText>

                            <SecondaryText className="mt-4">
                                When it’s time for a full <strong>siding replacement</strong>, we install vinyl, fiber cement, and engineered wood.
                                Our process is clean and tight: remove old siding, inspect sheathing, add house wrap and flashing, then install siding with proper clearances and sealed trim.
                                You get better curb appeal, lower drafts, and a warranty that actually means something.
                            </SecondaryText>

                        </div>
                    }
                    imageSrc="/images/siding/siding-service/siding-installation.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Window Replacement */}
                <Row
                    title={`Window Replacement in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                Our team provides honest window inspections in {location.name}. 
                                Whether you have drafty windows or cracks, Paragon Exterior offers expert window replacement and repair services.
                                
                                When replacement is the smarter move, we’ll guide you through styles like double-hung, casement, sliding, and picture windows that fit both your home’s look and your budget.
                                Learn more about or window services <Link className="text-blue-600" href="/windows">here</Link>.
                            </SecondaryText>

                            <SecondaryText className="mt-4">
                                Every window we install is built for energy efficiency, weather protection, and everyday durability.
                                Homeowners in the {location.name} area trust Paragon Exterior because we treat your home like our own. From careful installation, clean job sites, and top-notch warranties, we make window replacement easy.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/window/window-replace/replacement3.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                    reverse
                />



                <InfoSection
                    imgSrc="/images/dynamic/gutter-installation/img1.webp"
                    imgAlt={`Seamless gutter installation in ${location.name}`}
                    title={`Premier Gutter Installation Services in ${location.name}`}
                    
                    mainContent={
                        <div>
                            <SecondaryText>
                                When you need reliable <strong>gutter installation in {location.name}</strong>, Paragon Exterior delivers professional gutter solutions that protect your home from water damage. 
                                Our gutter services include <strong>seamless gutter installation</strong>, expert <strong>gutter repair</strong>, complete <strong>gutter replacement</strong>, and preventive maintenance that keeps your drainage system functioning perfectly year-round.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We specialize in <strong>seamless gutters</strong> that provide superior leak protection compared to traditional sectional systems. Our team ensures perfect fit and clean aesthetics, while our <strong>gutter installation</strong> expertise guarantees proper slope, secure mounting, and optimal drainage performance for {location.name}&apos;s climate conditions.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Choose Paragon Exterior for your gutter installation needs and experience the difference professional installation makes. Our reputation in ${location.name} is built on quality workmanship, premium materials, and customer satisfaction that protects your home investment.`}
                    imagePosition="right"
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

                <GetEstimate location={location.name} />
            </div>
        </>
    );
}