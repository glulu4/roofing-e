// import HeaderText from "@/components/HeaderText";
// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import SecondaryText from "@/components/SecondaryText";
// import {Metadata} from "next";
// import {serviceAreas} from "../../../../public/service-areas";
// import TextImgRow from "@/components/TextImgRow";
// import ThreeImageLayout from "@/components/solar/ThreeImage";
// import FAQ from "@/components/FAQ";


// const posts = [
//     {
//         id: 1,
//         title: 'Roof Repair',
//         description:`
//         Our roofing company specializes in roof repairs, such as leak fixes, storm damage repair, and routine maintenance. 
//         Our roofing contractors offer the best, fast, and reliable roof repair.`,
//         imageUrl: "/images/slug-images/roof-contractor.jpg"
//     },
//     {
//         id: 2,
//         title: 'Residential Roofing',
//         description:
//             `Our roofing company offers all sorts of residential roofing solutions. 
//             Paragon Exterior uses quality materials to ensure you're home is stylish and durable.
//             Trust Paragon Exterior, your local roofing company, to boost curb appeal and protect your home.`,
//         imageUrl: "/images/slug-images/roofing-contractors-near-you.jpg"
//     },
//     {
//         id: 3,
//         title: 'Flat Roofs',
//         description:
//             `At Paragon Exterior, we also offer flat roofs. Our roofing company specializes in low-slope solutions, such as flat roofs, for modern homes.
//             We’re the roofing contractor near you with a fast response time.`,
//         imageUrl: "/images/slug-images/roofing-contractors.jpg"
//     },
// ];



// export async function generateStaticParams() {
//     return Object.keys(serviceAreas).map((slug) => ({slug}));
// }

// export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     return {
//         title: `${location?.name}'s Roofing Contractor`,
//         description:`We are ${location.name}'s select roofing contractor. Paragon Exterior provides quality roofing services near you. From roofing repair, to flat roofs, solar installation, to residential roofing, we have you covered.`,
//         alternates: { canonical: `https://www.paragonexterior.com/roofing-contractor/${slug}` },
//     };
// }




// interface PageProps {
//     params: Promise<{slug: string}>;
// }

// export default async function ServiceAreaPage({params}: PageProps) {
//     const {slug} = await params;

//     const location = serviceAreas[slug];
//     if (!location) return <div>Area not found.</div>;


//     const sectiontext = `
// We know that choosing a roofing contractor can feel overwhelming. That’s why at Paragon Exterior, we’ve made it our mission to keep the process simple, transparent, and stress-free—so you’re 100% thrilled with the finished result.

// From rapid estimate turnarounds to clear, proactive communication before, during, and after your project, plus our industry-leading workmanship, premium materials, and unbeatable warranties, we stand firmly behind every promise we make.

// Experience what makes Paragon Exterior the select roofing contractor of ${location.name}. See why homeowners in ${location.name} trust us as the area’s Top Rated Roofing Contractor!
// `

//     return (
//         <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
//             {/* Hero Section */}
//             <section className="text-center">
//                 <HeaderText as="h1" variant="large">
//                     {location.name}&apos;s Trusted Roofing Contractor
//                 </HeaderText>
//                 <SecondaryText as="h2" className="mt-4">
//                     Paragon Exterior is {location.name}&apos;s select roofing contractor, offering
//                     roof repairs, flexible pricing, residential roofing, flat roofing, and even solar panels. 
//                     <a href="/solar" className="text-blue-700">
//                         &nbsp;Learn more about solar.&nbsp;
//                         </a>
//                     As one of the top roofing companies in {location.name}, we&apos;d love to make your home safe, sound, and stunning.
//                 </SecondaryText>
//                 <div className="py-12">
//                     <a href="/estimate" className="mt-6 bg-primaryblue text-white px-6 py-3 my-6 rounded">
//                         Get Your Free Estimate
//                     </a>
//                 </div>

//             </section>
//             <section>
//                 <SecondaryText className="mt-4">
//                     {sectiontext}
//                 </SecondaryText>
                
//             </section>

//             {/* Why Choose Us */}
//             <section>


//                 <TextImgRow
//                     title={`Why ${location.name} Chooses Paragon Exterior for Roofing`}
//                     description="We’re a local roofing contractor with a reputation for quality and reliability. Our licensed roofing contractors are experts in roof repair, residential roofing, and flat roofing systems. We offer transparent pricing, free inspections, and financing options to make your roofing project easy and affordable."
//                     imageSrc="/images/slug-images/roofing-contractor.jpg"
//                     imageAlt={`Roofing Contractor in ${location.name}`}
//                 />
//             </section>

//             {/* Services Section */}
//             <section className="text-center">

//                 <ThreeImageLayout posts={posts} />

//             </section>


//             <section>
//                 <HeaderText variant="large" as="h2">We Are Experienced Roofing Experts</HeaderText>
//                 <div className="mt-6 space-y-4">
//                     <details>
//                         <summary className="text-lg font-semibold cursor-pointer">Why Work With Local Roofers?</summary>
//                         <SecondaryText as="p" className="mt-2">
//                             Working with a local roofing company means you get faster response times, personalized service, and peace of mind. 
//                             At Paragon Exterior, you&apos;re not just another customer — you&apos;re our neighbor.
//                         </SecondaryText>
//                     </details>

//                     <details>
//                         <summary className="text-lg font-semibold cursor-pointer">Roof Repair and Installation in the {location.name}</summary>
//                         <SecondaryText as="p" className="mt-2">
//                             From minor leaks to full replacements, our expert roofing company handle every project with precision. We install residential roofs that are beautiful, durable, and solar ready.
//                             Our roofing company guarantees top-quality roof repairs and installations near you.
//                         </SecondaryText>
//                     </details>

//                     <details open>
//                         <summary className="text-lg font-semibold text-primaryGreenDark cursor-pointer">
//                             Advantages of Choosing Paragon Exterior
//                         </summary>
//                         <SecondaryText as="p" className="mt-2">
//                             We provide free estimates, transparent pricing, and all our work is backed by warranty. Having served the {location.name} area years on end, we’re your trusted roofing company for repairs, and installation.
//                         </SecondaryText>
//                     </details>
//                 </div>
//             </section>

//             <FAQ locationName={location.name} />
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
import Image from "next/image";
import {CheckIcon, HomeIcon, StarIcon} from "lucide-react";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";

// Enhanced services data for local area
const localServices = [
    {
        id: 1,
        title: 'Roof Repair',
        href: '/roofing/roof-repair',
        description: 'Professional roof repair services for storm damage, missing shingles, leaks, and flashing issues. Licensed roofers serving PA, NJ, and DE with fast, reliable repairs.',
        imageUrl: '/images/roof-service/roof-repair/roof-repair4.jpg',
    },
    {
        id: 2,
        title: 'Roof Replacement',
        href: '/roofing/roof-replacement',
        description: 'Complete roof replacement services using premium asphalt shingles, metal roofing, and architectural materials. Expert installation with warranties for lasting protection.',
        imageUrl: '/images/roof-service/roof-replacement/roof-replacement.avif',
    },
    {
        id: 3,
        title: 'Velux Skylights',
        href: '/roofing/velux-skylights',
        description: 'Professional Velux skylight installation and repair services. Add natural light and ventilation to your home with energy-efficient, leak-proof skylight solutions.',
        imageUrl: '/images/roof-service/skylight/skylight.jpg',
    },
    {
        id: 4,
        title: 'Flat Roofing',
        href: '/roofing/flat-roofing',
        description: 'Specialized flat roof installation, repair, and maintenance using EPDM, TPO, and modified bitumen systems. Commercial and residential flat roofing experts.',
        imageUrl: '/images/roof-service/flat-roofing/flat-roof.jpg',
    },
    {
        id: 5,
        title: 'Roof Leak Repair',
        href: '/roofing/roof-leak-repair',
        description: 'Fast roof leak detection and repair services. Stop water damage with expert leak repairs for all roof types. Emergency leak repair available 24/7 in PA, NJ, DE.',
        imageUrl: '/images/roof-service/roof-leak/roof-leak.jpg',
    },
    {
        id: 6,
        title: 'Emergency Roof Repair',
        href: '/roofing/emergency-roof-repair',
        description: '24/7 emergency roof repair services for storm damage, active leaks, and urgent roofing needs. Immediate response with tarping and permanent repairs across PA, NJ, DE.',
        imageUrl: '/images/roof-service/emergency-roofing/roof-damage.webp',
    },
    {
        id: 7,
        title: 'Metal Roofing',
        href: '/roofing/metal-roofing',
        description: 'Durable metal roofing installation and repair services. Choose from standing seam, corrugated, and architectural metal roofing systems for long-lasting protection.',
        imageUrl: '/images/roof-service/metal/metal-roof-card.webp',
    },
];

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `${location?.name} Roofing Contractor | Expert Roof Repair & Installation`,
        description: `Professional roofing contractor serving ${location.name}. Expert roof repair, residential roofing, and emergency services. Licensed, insured, and locally trusted roofing company.`,
        keywords: `${location.name} roofing contractor, roof repair ${location.name}, roofing company ${location.name}, residential roofing, emergency roof repair`,
        alternates: {canonical: `https://www.paragonexterior.com/roofing-contractor/${slug}`},
        openGraph: {
            title: `${location?.name} Roofing Contractor | Paragon Exterior`,
            description: `Professional roofing services in ${location.name}. Expert roof repair, installation, and emergency services from your trusted local roofing contractor.`,
            type: 'website',
            images: ['/images/slug-images/roofing-contractor.jpg'],
        },
    };
}

// Structured data for local SEO
const generateStructuredData = (location: any) => ({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Paragon Exterior",
    "description": `Professional roofing contractor serving ${location.name} with expert roof repair, installation, and emergency services.`,
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
        "Roof Repair",
        "Roof Replacement",
        "Emergency Roofing",
        "Residential Roofing",
        "Commercial Roofing"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Repair",
                    "description": "Professional roof repair services for residential and commercial properties"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Installation",
                    "description": "Complete roof installation with premium materials and expert craftsmanship"
                }
            }
        ]
    }
});

interface PageProps {
    params: Promise<{slug: string}>;
}

export default async function ServiceAreaPage({params}: PageProps) {
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
                    mainText={`${location.name}'s Trusted Roofing Contractor`}
                    subText={`Professional roofing services in ${location.name} including emergency roof repair, residential roofing installation, and commercial roofing solutions. Licensed, insured, and locally trusted for over a decade.`}
                    imgSrc="/images/dynamic/roofing-contractor/hero.webp"
                    imgAlt={`Professional roofing contractor working in ${location.name}`}
                />

                {/* Local Trust Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h1" variant="large">
                                Why {location.name} Homeowners Choose Paragon Exterior
                            </HeaderText>
                            <SecondaryText className="max-w-4xl mx-auto">
                                We know that choosing a roofing contractor can feel overwhelming. That&apos;s why at Paragon Exterior, we&apos;ve made it our mission to keep the process simple, transparent, and stress-free—so you&apos;re 100% thrilled with the finished result. Experience what makes us {location.name}&apos;s select roofing contractor.
                            </SecondaryText>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid md:grid-cols-4 gap-6 mb-16">
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Licensed & Insured</h3>
                                <p className="text-gray-600 text-sm">Fully licensed roofing contractor in {location.name}</p>
                            </div>

                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">24/7</span>
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Emergency Service</h3>
                                <p className="text-gray-600 text-sm">Fast response for urgent roofing needs</p>
                            </div>

                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <StarIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">5-Star Rated</h3>
                                <p className="text-gray-600 text-sm">Top-rated roofing company in {location.name}</p>
                            </div>

                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HomeIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Local Experts</h3>
                                <p className="text-gray-600 text-sm">Serving {location.name} for over 10 years</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Info Section */}
                <InfoSection
                    imgSrc="/images/dynamic/roofing-contractor/img1.webp"
                    imgAlt={`Paragon Exterior roofing team in ${location.name}`}
                    title={`${location.name}'s Premier Roofing Contractor`}
                    titleAs="h2"
                    mainContent={
                        <div>
                            <p>
                                As {location.name}&apos;s select roofing contractor, Paragon Exterior combines local expertise with industry-leading techniques to deliver exceptional roofing solutions. Our team understands the unique weather challenges facing {location.name} homes and provides tailored roofing services that stand the test of time.
                            </p>
                            <p className="mt-4">
                                From rapid estimate turnarounds to clear, proactive communication before, during, and after your project, plus our industry-leading workmanship, premium materials, and unbeatable warranties, we stand firmly behind every promise we make to {location.name} homeowners.
                            </p>
                        </div>
                    }
                    bottomContent={`Experience what makes Paragon Exterior the premier roofing contractor in ${location.name}. See why homeowners throughout the area trust us as their go-to roofing company for all residential and commercial roofing needs.`}
                    imagePosition="right"
                />

                {/* Local Services Showcase */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Comprehensive Roofing Services in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                Our full-service roofing company provides complete roofing solutions for {location.name} residents and businesses. From emergency repairs to complete roof replacements, we handle every project with expertise and care.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={localServices} />
                    </div>
                </section>

                {/* Local Advantages */}
                <IncentivesSection
                    className="py-16"
                    title={`The Paragon Exterior Advantage in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Local expertise meets professional excellence. Discover why ${location.name} homeowners consistently choose Paragon Exterior for their roofing needs.`}
                    heroImage={{
                        alt: `Satisfied homeowner in ${location.name} with new roof installation`,
                        src: "/images/dynamic/roofing-contractor/img2.webp"
                    }}
                    incentives={[
                        {
                            name: "Local Knowledge",
                            description: `Deep understanding of ${location.name} weather patterns, building codes, and architectural styles ensures optimal roofing solutions.`,
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Local roofing expertise icon"
                        },
                        {
                            name: "Fast Response",
                            description: "Emergency roofing services available 24/7 with rapid response times throughout the local area.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "Fast emergency response icon"
                        },
                        {
                            name: "Quality Guarantee",
                            description: "All roofing work backed by comprehensive warranties and our commitment to 100% customer satisfaction.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
                            imageAlt: "Quality guarantee icon"
                        }
                    ]}
                    imagePosition="left"
                />

                {/* Process Overview */}
                <Row
                    title={`Our Proven Roofing Process in ${location.name}`}
                    description={
                        <div>
                            <p>
                                Our systematic approach ensures every roofing project in {location.name} exceeds expectations. From initial consultation to final cleanup, we maintain clear communication and professional standards throughout the entire process.
                            </p>
                            <p className="mt-4">
                                As your local roofing contractor, we provide free inspections, detailed estimates, and flexible scheduling that works with your timeline. Our commitment to quality and customer satisfaction has made us the most trusted roofing company in {location.name}.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/roofing-contractor/img3.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                />

                {/* Local Coverage Area */}
                <Row
                    title={`Proudly Serving ${location.name} and Surrounding Areas`}
                    description={
                        <div>
                            <p>
                                As a locally-owned roofing contractor, we&apos;re proud to serve {location.name} and the surrounding communities. Our team knows the local area intimately and can respond quickly to emergency roofing situations anywhere in our service area.
                            </p>
                            <p className="mt-4">
                                Whether you&apos;re dealing with storm damage, need a routine roof inspection, or planning a complete roof replacement, our {location.name} roofing experts are ready to help. Contact us today for your free estimate and experience the difference local expertise makes.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/roofing-contractor/img4.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />

                {/* Why Choose Paragon */}
                <WhyParagonRoofing
                    title={`Why ${location.name} Chooses Paragon Exterior`}
                    subTitle={`Our reputation as ${location.name}'s premier roofing contractor is built on years of exceptional service, quality workmanship, and unwavering commitment to customer satisfaction.`}
                    titleAs="h2"
                />

                {/* Enhanced FAQ */}
                <FAQ locationName={location.name} />

                <GoogleReviews/>

                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}