// import HeaderText from "@/components/HeaderText";
// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import SecondaryText from "@/components/SecondaryText";
// import {Metadata} from "next";
// import {serviceAreas} from "../../../../public/service-areas";
// import FAQ from "@/components/FAQ";

// // needed to build static paths
// export async function generateStaticParams() {
//     return Object.keys(serviceAreas).map((slug) => ({slug}))
// }

// export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     return {
//         title: `Roofing Contractor in ${location?.name} `,
//         description:`We are ${location.name}'s select roofing contractor. Paragon Exterior provides quality roofing services near you. From roofing repair, to flat roofs, solar installation, to residential roofing, we have you covered.`,

//     };
// }


// export default async function ServiceAreaPage({params}: {params: Promise<{slug: string}>}) {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     if (!location) return <div>Area not found.</div>;

//     return (
//         <div className="p-6 max-w-5xl mx-auto space-y-16">
//             {/* Hero Section */}
//             <section className="text-center">
//                 <HeaderText as="h1" variant="large">
//                     {location.name}&apos;s Roofing Contractor | Paragon Exterior
//                 </HeaderText>
//                 <SecondaryText className="mt-4">
//                     At Paragon Exterior, we&apos;re your neighborhood roofing contractor, offering
//                     roof repair near me, residential roofing, flat roofing, and emergency roof repair
//                     in {location.name}. Let&apos;s make your home safe, sound, and stunning.
//                 </SecondaryText>

//             </section>

//             {/* Why Choose Us */}
//             <section>
//                 <HeaderText as="h2">
//                     Why {location.name} Chooses Paragon Exterior for Roofing
//                 </HeaderText>
//                 <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
//                     <li>
//                         Fully licensed <strong>roofing contractor</strong> near you for peace of mind
//                     </li>
//                     <li>
//                         Rapid <strong>roof repair near me</strong> response in {location.name}
//                     </li>
//                     <li>
//                         Durable <strong>residential roofing</strong> and <strong>flat roofing</strong>
//                     </li>
//                     <li>
//                         Transparent pricing, free inspections, and financing options available
//                     </li>
//                 </ul>
//             </section>

//             {/* Services Section */}
//             <section>
//                 <HeaderText as="h2">Roof Repair in {location.name}</HeaderText>
//                 <SecondaryText className="mt-2">
// When your home springs a leak or suffers storm damage, you need reliable roof repair near me—and that’s exactly what Paragon Exterior delivers. Our expert roofing contractors respond quickly to patch holes, replace damaged shingles, and perform routine maintenance that lasts. As one of the best roofing companies in the region, we blend durable materials with skilled craftsmanship, ensuring your roof stands up to wind, rain, and whatever comes next.                </SecondaryText>
//             </section>

//             <section>
//                 <HeaderText as="h2">Residential Roofing in {location.name}</HeaderText>
//                 <SecondaryText className="mt-2">
// Your home deserves a roof that looks great and stands the test of time. Paragon Exterior specializes in residential roofing, offering asphalt shingle, metal, and luxury designer roofing systems tailored to your style. As a trusted roofing company, we guide you through color, texture, and energy‑efficient options so your new roof not only protects but enhances curb appeal for years to come.                </SecondaryText>
//             </section>

//             <section>
//                 <HeaderText as="h2">Flat Roofing in {location.name}</HeaderText>
//                 <SecondaryText className="mt-2">
//                     For modern homes, additions, and commercial projects, Paragon Exterior installs high‑performance flat roofing solutions built to last. Our low‑slope roofing membranes resist ponding water, UV damage, and temperature swings—perfect for decks, garages, and contemporary designs. As a full‑service roofing contractor, we ensure seamless installation and rigid quality control, giving you confidence in every square foot of your flat roof.
//                 </SecondaryText>
//             </section>

//             <section>
//                 <HeaderText as="h2">Emergency Roof Repair in {location.name}</HeaderText>
//                 <SecondaryText className="mt-2">

// When you spot a drip or after a storm, you want fast, reliable roof repair—and that&apos;s exactly what Paragon Exterior provides. Our expert technicians specialize in leak detection, storm damage repair, and preventative maintenance designed to extend your roof&apos;s lifespan. Searching for “roof repair near me”? We respond quickly, diagnose the issue precisely, and perform roof repairs that last, ensuring your home stays watertight and worry‑free.                </SecondaryText>
//             </section>

//             <section>
//                 <HeaderText as="h2">{location.name}&apos;s Trsuted Roofing Contractor</HeaderText>
//                 <SecondaryText className="mt-2">
//                     Paragon Exterior is your trusted roofing contractor in {location.name}, PA—fully licensed, insured, and backed by years of experience. As your local roofing contractor near me, we handle everything from shingle and metal roofing installations to flat roofing systems and solar‑ready prep. Whether you need a full roof replacement or a simple inspection, our team combines top‑quality materials with meticulous craftsmanship to deliver durable, beautiful roofs that protect your home and boost curb appeal.
//                 </SecondaryText>

//             </section>
            

//             {/* Roofing Types */}
//             <section>
//                 <HeaderText as="h2">Shingle & Roofing Options</HeaderText>
//                 <SecondaryText className="mt-2">
//                     Choose from top roofing materials, from cost‑effective architectural asphalt
//                     shingles to high‑end luxury designer shingles and metal roofing.
//                 </SecondaryText>
//                 <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
//                     <li>Architectural Asphalt Shingles</li>
//                     <li>Metal Roofing Systems</li>
//                     <li>Luxury Designer Shingles</li>
//                     <li>Flat Roofing Membranes</li>
//                 </ul>
//                 <a
//                     href="/roofing"
//                     className="mt-4 inline-block text-primaryblue underline font-semibold"
//                 >
//                     Learn more about our roofing styles →
//                 </a>
//             </section>

//             {/* Solar Section */}
//             <section>
//                 <HeaderText as="h2">
//                     Solar‑Ready Roofing & Household Solar Panels
//                 </HeaderText>
//                 <SecondaryText className="mt-2">
//                     Supercharge your savings with <strong>solar panels for home</strong> on a
//                     roof built for solar energy. We prep your roof for seamless
//                     solar integration and partner with top installers for full solar service.
//                 </SecondaryText>
//                 <a
//                     href="/solar"
//                     className="mt-4 inline-block text-primaryblue underline font-semibold"
//                 >
//                     Explore solar roofing →
//                 </a>
//             </section>

//             {/* Siding & More */}
//             <section>
//                 <HeaderText as="h2">Complete Exterior Services</HeaderText>
//                 <SecondaryText className="mt-2">
//                     Paragon Exterior isn&apos;t just a roofing company. We do siding too. Bundle your
//                     roof and siding upgrades to protect, insulate, and beautify your home
//                     in {location.name}.
//                 </SecondaryText>
//             </section>

//             {/* FAQ */}
//             <FAQ locationName={location.name}/>
//             {/* CTA */}
//             <GetEstimate location={location.name} />
//         </div>
//     );
// }

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
import {serviceAreas} from "../../../../public/service-areas";
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

// needed to build static paths
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

// Enhanced structured data for comprehensive services
const generateStructuredData = (location: any) => ({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Paragon Exterior",
    "description": `Professional roofing contractor in ${location.name} specializing in roof repair, roof replacement, emergency roof repair, siding installation, and window replacement.`,
    "url": `https://www.paragonexterior.com/roofing-contractor/${location.slug}`,
    "telephone": "(215) 799-7663",
    "email": "sales@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": location.state || "PA",
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "City",
        "name": location.name
    },
    "serviceType": [
        "Emergency Roof Repair",
        "Roof Repair",
        "Roof Replacement",
        "Siding Installation",
        "Window Replacement",
        "Commercial Roofing"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Improvement Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Roof Repair",
                    "description": "24/7 emergency roof repair services for immediate roofing issues"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Replacement",
                    "description": "Complete roof replacement with premium materials and expert installation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Installation",
                    "description": "Professional siding installation services for enhanced home protection"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Window Replacement",
                    "description": "Energy-efficient window replacement services for improved comfort"
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
                {/* Enhanced Hero Section */}
                <Hero
                    mainText={`${location.name} Roofing Contractor | Expert Home Services`}
                    subText={`Professional roofing contractor in ${location.name} specializing in roof repair, roof replacement, emergency roof repair, siding installation, and window replacement. Licensed, insured, and trusted by homeowners for over a decade.`}
                    imgSrc="/images/dynamic/service-area/hero.webp"
                    imgAlt={`Professional roofing contractor team in ${location.name}`}
                />

                {/* Emergency Services Banner */}
                <section className="py-8 bg-red-600">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <div className="text-white">
                                <HeaderText variant="small" className="text-white mb-2">
                                    24/7 Emergency Roof Repair in {location.name}
                                </HeaderText>
                                <p className="text-red-100">Storm damage? Active leak? Call now for immediate response!</p>
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

                {/* Main Services Overview */}
                <InfoSection
                    imgSrc="/images/dynamic/service-area/img1.webp"
                    imgAlt={`Roofing contractor services in ${location.name}`}
                    title={`Comprehensive Home Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <p>
                                As {location.name}&apos;s premier roofing contractor, Paragon Exterior provides complete home exterior services including expert <strong>roof repair</strong>, professional <strong>roof replacement</strong>, quality <strong>siding installation</strong>, and energy-efficient <strong>window replacement</strong>. Our comprehensive approach ensures your home receives coordinated, high-quality improvements.
                            </p>
                            <p className="mt-4">
                                From urgent <strong>emergency roof repair</strong> services available 24/7 to planned <strong>roof replacement</strong> projects, our licensed contractors deliver exceptional results. We also specialize in <strong>siding installation</strong> and <strong>window replacement</strong> services that enhance your home&apos;s protection, energy efficiency, and curb appeal.
                            </p>
                        </div>
                    }
                    bottomContent={`Trust Paragon Exterior as your local roofing contractor for all home improvement needs. Our reputation in ${location.name} is built on quality workmanship, transparent pricing, and complete customer satisfaction.`}
                    imagePosition="right"
                />

                {/* Comprehensive Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Home Improvement Services in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From emergency roof repair to complete exterior renovations, our roofing contractor team provides comprehensive services that protect and enhance your {location.name} home.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={comprehensiveServices} />
                    </div>
                </section>

                {/* Emergency Roof Repair Focus */}
                <Row
                    title={`Emergency Roof Repair Services in ${location.name}`}
                    description={
                        <div>
                            <p>
                                When disaster strikes, our <strong>emergency roof repair</strong> team responds immediately to protect your {location.name} home. Available 24/7 for storm damage, active leaks, and urgent roofing emergencies, we provide rapid assessment and temporary repairs to prevent further damage.
                            </p>
                            <p className="mt-4">
                                Our <strong>emergency roof repair</strong> services include leak detection, storm damage assessment, emergency tarping, and immediate repairs. As your trusted roofing contractor, we maintain emergency crews ready to respond to urgent situations throughout {location.name} and surrounding areas.
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
                    title={`Expert Roof Repair and Roof Replacement in ${location.name}`}
                    description={
                        <div>
                            <p>
                                Our comprehensive <strong>roof repair</strong> services address leaks, missing shingles, flashing issues, and storm damage with precision and quality materials. When <strong>roof replacement</strong> becomes necessary, we guide {location.name} homeowners through material selection and provide expert installation that enhances both protection and curb appeal.
                            </p>
                            <p className="mt-4">
                                Whether you need minor <strong>roof repair</strong> or complete <strong>roof replacement</strong>, our roofing contractor team ensures lasting results. We use premium materials and proven techniques that withstand {location.name}&apos;s weather conditions while providing exceptional value and performance.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />

                {/* Siding & Windows Services */}
                <Row
                    title={`Professional Siding Installation and Window Replacement`}
                    description={
                        <div>
                            <p>
                                Beyond roofing, our <strong>siding installation</strong> services transform your home&apos;s exterior with durable, beautiful materials including vinyl, fiber cement, and wood siding. Our expert <strong>window replacement</strong> services improve energy efficiency, comfort, and curb appeal with high-performance windows designed for {location.name}&apos;s climate.
                            </p>
                            <p className="mt-4">
                                Professional <strong>siding installation</strong> and <strong>window replacement</strong> work together to create a complete exterior renovation. Our roofing contractor expertise extends to these complementary services, ensuring coordinated improvements that maximize your home&apos;s protection and value.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/service-area/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Service Areas & Coverage */}
                <IncentivesSection
                    className="py-16"
                    title={`Why Choose Our Roofing Contractor Services in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Local expertise meets professional excellence. Discover why ${location.name} homeowners trust Paragon Exterior for roof repair, roof replacement, siding installation, and window replacement.`}
                    heroImage={{
                        alt: `Professional roofing contractor team working in ${location.name}`,
                        src: "/images/dynamic/service-area/img5.webp"
                    }}
                    incentives={[
                        {
                            name: "24/7 Emergency Service",
                            description: "Immediate emergency roof repair response for storm damage, leaks, and urgent roofing issues throughout the area.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "24/7 emergency roof repair icon"
                        },
                        {
                            name: "Licensed & Insured",
                            description: "Fully licensed roofing contractor with comprehensive insurance coverage for your peace of mind and protection.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
                            imageAlt: "Licensed roofing contractor icon"
                        },
                        {
                            name: "Complete Services",
                            description: "From roof repair to siding installation and window replacement - your one-stop solution for all exterior needs.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Complete home services icon"
                        },
                        {
                            name: "Quality Guarantee",
                            description: "All work backed by comprehensive warranties and our commitment to 100% customer satisfaction.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/handshake.svg",
                            imageAlt: "Quality guarantee icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Material Options */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2">Premium Materials for Every Project</HeaderText>
                            <SecondaryText>
                                Our roofing contractor services include the finest materials for roof repair, roof replacement, siding installation, and window replacement projects in {location.name}.
                            </SecondaryText>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HomeIcon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Roofing Materials</h3>
                                <p className="text-gray-700 text-sm">Asphalt shingles, metal roofing, luxury designer options for roof repair and roof replacement</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Columns4Icon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Siding Options</h3>
                                <p className="text-gray-700 text-sm">Vinyl, fiber cement, wood, and composite siding installation materials</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <WindowIcon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Window Types</h3>
                                <p className="text-gray-700 text-sm">Energy-efficient window replacement options including vinyl, fiberglass, and wood</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Wind className="text-white w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-3">Emergency Supplies</h3>
                                <p className="text-gray-700 text-sm">Emergency roof repair materials and temporary protection systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Paragon */}
                <WhyParagonRoofing
                    title={`Why ${location.name} Trusts Paragon Exterior`}
                    subTitle={`Our reputation as ${location.name}'s premier roofing contractor is built on exceptional roof repair, roof replacement, siding installation, and window replacement services that exceed expectations.`}
                    titleAs="h2"
                />

                <GoogleReviews/>


                {/* Enhanced FAQ */}
                <FAQ locationName={location.name} />

                {/* Service Area Coverage */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <HeaderText as="h2" className="mb-8">
                            Serving {location.name} and Surrounding Areas
                        </HeaderText>
                        <SecondaryText className="mb-8">
                            Our roofing contractor services including emergency roof repair, roof repair, roof replacement, siding installation, and window replacement are available throughout {location.name} and the surrounding communities. Contact us today for immediate service or to schedule your free estimate.
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

                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}