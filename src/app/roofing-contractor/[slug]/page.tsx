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
        title: `${location?.name}'s Roofing Contractor`,
        description: `We are ${location.name} Professional roofing contractor. We specialize in roof repair, roof replacement, and roof leak repairs.`,
        keywords: `${location.name} roofing contractor, roof repair ${location.name}, roofing company ${location.name}, residential roofing, emergency roof repair`,
        openGraph: {
            title: `${location?.name} Roofing Contractor | Paragon Exterior`,
            description: `Professional roofing services in ${location.name}. Expert roof repair, installation, and emergency services from your trusted local roofing contractor.`,
            type: 'website',
            images: ['/images/slug-images/roofing-contractor.jpg'],
        },
    };
}

const generateStructuredData = (location: any) => ({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Paragon Exterior",
    "description": `Professional roofing contractor serving ${location.name} with expert roof repair, installation, and emergency services.`,
    "url": `https://www.paragonexterior.com/roofing-contractor/${location.slug}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": location.state || "PA",
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": location.name
    },
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
                    "name": "Roof Replacement",
                    "description": "Complete roof replacement with high-quality materials and expert installation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Skylight Installation",
                    "description": "Professional skylight installation to enhance natural light in your home"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Flat Roofing",
                    "description": "Specialized flat roofing services for commercial and residential properties"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Installation",
                    "description": "Complete roof installation with premium materials and expert craftsmanship"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Roofing",
                    "description": "24/7 emergency roof repair for storm damage, leaks, and urgent issues"
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
                <Hero
                    mainText={`${location.name}'s Trusted Roofing Contractor`}
                    subText={`Need roofing help in ${location.name}? Paragon Exterior provides expert roof repairs, full roof replacements, and fast emergency service for homes and businesses. Our local roofing company is licensed, insured, and trusted for over 10 years.`}
                    imgSrc="/images/dynamic/roofing-contractor/hero.webp"
                    imgAlt={`Professional roofing contractor working in ${location.name}`}
                />


                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h1" variant="large">
                                Why {location.name} Homeowners Choose Paragon Exterior
                            </HeaderText>
                            <SecondaryText className="mt-6">
                                We’re more than just a contractor—we’re part of the {location.name} community. From minor repairs to full roof replacements, our mission is to make your project smooth, affordable, and built to last. As a locally rooted company, we understand the unique roofing challenges in {location.name}—from older homes with complex structures to newer builds requiring energy-efficient materials.
                            </SecondaryText>

                            <SecondaryText className="mt-6">
                                Our team lives and works in the same neighborhoods we serve, which means we take pride in every roof we install or repair. When you choose Paragon Exterior, you’re getting more than great craftsmanship—you’re getting a trusted partner who cares about your home, your timeline, and your peace of mind.
                            </SecondaryText>


                        </div>
                        {/* Trust Indicators */}
                        <div className="grid md:grid-cols-4 gap-6 mb-16">
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Licensed & Insured</h3>
                                <p className="text-gray-600 text-sm">Your project is safe with a fully licensed, insured roofing contractor.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">24/7</span>
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Emergency Service</h3>
                                <p className="text-gray-600 text-sm">Call anytime for emergency roof repairs or storm damage help.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <StarIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">5-Star Reviews</h3>
                                <p className="text-gray-600 text-sm">Homeowners in {location.name} love our work and recommend us.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HomeIcon className="text-white font-bold text-xl" />
                                </div>
                                <h3 className="font-bold text-primaryblue mb-2">Local Roofing Experts</h3>
                                <p className="text-gray-600 text-sm">Based right here—serving {location.name} and nearby for over 10 years.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <InfoSection
                    imgSrc="/images/dynamic/roofing-contractor/img1.webp"
                    imgAlt={`Paragon Exterior roofing team in ${location.name}`}
                    title={`${location.name}'s Premier Roofing Contractor`}
                    titleAs="h2"
                    mainContent={
                        <div>
                            <SecondaryText>
                                Looking for a reliable roofer in {location.name}? Paragon Exterior brings years of local experience, high-quality materials, and a commitment to craftsmanship. Our roofing specialists know the unique weather and roofing needs in {location.name}, so your roof will stand strong in every season.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We believe in fast estimates, honest communication, and top-notch workmanship—backed by industry-leading warranties. When you choose Paragon Exterior, you get a roofing partner you can trust for the long haul.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Join your neighbors who choose Paragon Exterior as their #1 roofing company in ${location.name}. Let us show you the difference true local service makes.`}
                    imagePosition="right"
                />


                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Full-Service Roofing in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                We handle everything from roof repairs to new installations—serving homes and businesses across {location.name}. No job too big or small! Explore our most popular services below:
                            </SecondaryText>
                        </div>
                        <ServicesGrid services={localServices} />
                    </div>
                </section>


                <IncentivesSection
                    className="py-16"
                    title={`The Paragon Exterior Advantage in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Get more for your money! Our local expertise, fast service, and quality materials make us the first choice for roofing in ${location.name}.`}
                    heroImage={{
                        alt: `Happy homeowner in ${location.name} with new roof installation`,
                        src: "/images/dynamic/roofing-contractor/img2.webp"
                    }}
                    incentives={[
                        {
                            name: "Local Knowledge",
                            description: `We understand ${location.name} weather, codes, and building styles—so your roof is built to last.`,
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Local roofing expertise icon"
                        },
                        {
                            name: "Rapid Response",
                            description: "Get emergency roofing help 24/7—plus flexible scheduling for all projects.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "Fast emergency response icon"
                        },
                        {
                            name: "Guaranteed Quality",
                            description: "Every job comes with a full warranty and our personal commitment to quality.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
                            imageAlt: "Quality guarantee icon"
                        }
                    ]}
                    imagePosition="left"
                />

                <Row
                    title={`Our Proven Roofing Process in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                From your first call to final inspection, our team makes roofing easy. We offer free inspections, clear estimates, and flexible scheduling. Our crews keep the work area clean and treat your property like it’s our own.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our attention to detail and honest advice have made us the top roofing contractor in {location.name}. See for yourself why so many homeowners recommend Paragon Exterior!
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/roofing-contractor/img3.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                />


                <Row
                    title={`Proudly Serving ${location.name} and Nearby Areas`}
                    description={
                        <div>
                            <SecondaryText>
                                As a local roofing company, we’re proud to serve {location.name} and the surrounding area. We respond quickly to emergencies, offer same-day estimates, and know your neighborhood inside and out.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you need storm repairs, a routine roof inspection, or a full replacement, our {location.name} roofing experts are ready to help. Get your free estimate today—let’s make your home safer and more beautiful.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/roofing-contractor/img4.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />


                <WhyParagonRoofing
                    title={`Why ${location.name} Chooses Paragon Exterior`}
                    subTitle={`Discover why more homeowners in ${location.name} recommend us for roof repair, installation, and peace of mind. Honest advice, expert crews, and local experience—every time.`}
                    titleAs="h2"
                />


                <section className="max-w-5xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-primaryblue mb-4">
                        Your Local Roofing Company in {location.name}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Paragon Exterior has proudly served the {location.name} area for years. We’ve worked on homes and businesses throughout the region—from historic neighborhoods to newer developments—helping homeowners stay protected through Pennsylvania’s unpredictable weather.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Our local crews understand the building codes, weather patterns, and architectural styles that make {location.name} unique. Whether you&apos;re dealing with storm damage, replacing an aging roof, or starting fresh with new siding, we’re here to guide you through the process.
                    </p>
                    <p className="text-lg text-gray-700">
                        Looking for a reliable roofing contractor in {location.name}? Paragon Exterior offers honest advice, fast scheduling, and a commitment to quality that’s earned us 5-star reviews across the region.
                    </p>
                </section>


                {/* Enhanced FAQ */}
                <FAQ locationName={location.name} />

                <GoogleReviews/>

                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}