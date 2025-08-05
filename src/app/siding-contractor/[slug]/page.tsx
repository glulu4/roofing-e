import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import ServicesGrid from "@/components/service-page/Services";
import FAQ from "@/components/FAQ";
import {WhyParagonSiding} from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas, Location} from "../../../../public/service-areas";
import SidingMaterial from "@/components/siding/SidingMaterial";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";

// Comprehensive siding services data targeting key keywords
const sidingServices = [
    {
        id: 1,
        title: 'Siding Installation',
        href: '/siding/siding-installation',
        description: "Expert siding installation services to enhance your home's protection and curb appeal.Choose from a variety of materials including fiber cement, vinyl, and engineered wood.",
        imageUrl: '/images/siding/siding-service/siding-installation.webp',
    },
    {
        id: 2,
        title: 'Siding Repair',
        href: '/siding/siding-repair',
        description: 'Expert siding repair services to fix damage from weather, pests, or wear. Ensure your home remains energy-efficient and visually appealing with our expert solutions.',
        imageUrl: '/images/siding/siding-service/siding-repair.webp',
    },
    {
        id: 3,
        title: 'Siding Replacement',
        href: '/siding/siding-replacement',
        description: "Complete siding replacement services to upgrade your home's exterior.We offer a range of durable materials like fiber cement, vinyl, and aluminum to suit your style and budget.",
        imageUrl: '/images/siding/siding-service/siding-replacement.webp',
    },
    {
        id: 4,
        title: 'Board and Batten Siding',
        href: '/siding/board-and-batten-siding',
        description: 'Stylish vertical siding options to add a modern touch to your home. Our team specializes in installing vertical siding that enhances aesthetics and provides superior protection against the elements.',
        imageUrl: '/images/siding/siding-service/vertical-siding.webp',
    },
]
// needed to build static paths
export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Siding Contractors in ${location?.name}`,
        description: `Professional Siding Contractors in ${location.name} offering vinyl siding installation, siding repair, siding replacement, and fiber cement siding.`,
        keywords: `${location.name} Siding Contractors, siding installation ${location.name}, vinyl siding ${location.name}, siding repair ${location.name}, siding replacement ${location.name}, fiber cement siding`,
        openGraph: {
            title: ` Siding Contractors in ${location?.name} | Paragon Exterior`,
            description: `Expert Siding Contractors serving ${location.name}. Specializing in siding installation, vinyl siding, siding repair, and siding replacement services.`,
            type: 'website',
            images: ['/images/siding-contractor-hero.jpg'],
        },
    };
}

// Enhanced structured data for siding services
const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paragon Exterior",
    "description": `Professional siding contractors in ${location.name} specializing in siding installation, vinyl siding, siding repair, siding replacement, and fiber cement siding services.`,
    "url": `https://www.paragonexterior.com/siding-contractor/${location.name}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": location.name
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Siding Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Installation",
                    "description": "Professional siding installation services with premium materials and expert craftsmanship"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Vinyl Siding Installation",
                    "description": "High-quality vinyl siding installation for durability and low maintenance"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Repair",
                    "description": "Expert siding repair services for storm damage and general maintenance"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Siding Replacement",
                    "description": "Complete siding replacement services to transform your home's exterior"
                }
            }
        ]
    }
});


// Custom siding FAQ for local areas
function SidingContractorFAQ({locationName}: {locationName: string}) {
    const sidingFaqData = [
        {
            question: `Do you offer siding installation in ${locationName}?`,
            answer: `Yes, we provide comprehensive siding installation services throughout ${locationName} and surrounding areas. Our professional siding contractors specialize in vinyl siding, fiber cement siding, and other premium materials with expert installation and warranties.`,
        },
        {
            question: "What types of siding do you install?",
            answer: "We install all major siding types including vinyl siding, fiber cement siding, cedar siding, aluminum siding, engineered wood siding, and board & batten siding. Our siding contractors help you choose the best material for your climate, budget, and aesthetic preferences.",
        },
        {
            question: "How much does siding installation cost?",
            answer: "Siding installation costs vary based on material type, home size, and project complexity. Vinyl siding is typically the most affordable option, while fiber cement and cedar siding cost more but offer enhanced durability. We provide free estimates for all siding installation projects.",
        },
        {
            question: "Do you provide siding repair services?",
            answer: "Yes, our siding contractors provide comprehensive siding repair services for storm damage, loose panels, cracks, and general wear. We handle both minor repairs and extensive restoration work with color-matched materials and expert craftsmanship.",
        },
        {
            question: "What is the best siding for this climate?",
            answer: "For our regional climate, vinyl siding and fiber cement siding perform exceptionally well due to their moisture resistance and temperature stability. Our siding contractors assess your specific location and recommend materials that provide optimal performance and longevity.",
        },
        {
            question: "How long does siding installation take?",
            answer: "Siding installation typically takes 5-10 days depending on your home's size and the siding material chosen. Vinyl siding installation is often faster, while fiber cement and cedar siding may require additional time for proper installation and finishing.",
        }
    ];

    return (
        <FAQSection
            faqs={sidingFaqData}
            title={`Siding Contractor FAQ for ${locationName}`}
        />
    );
}

export default async function SidingContractorPage({params}: {params: Promise<{slug: string}>}) {
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
                    mainText={`${location.name} Siding Contractors | Expert Siding Installation`}
                    subText={`Professional Siding Contractors in ${location.name} specializing in vinyl siding installation, siding repair, siding replacement, and fiber cement siding. Transform your home with expert siding installation services from licensed, insured contractors.`}
                    imgSrc="/images/dynamic/siding-contractor/hero.webp"
                    imgAlt={`Professional Siding Contractors team in ${location.name}`}
                />

                {/* Main Siding Services Overview */}
                <InfoSection
                    imgSrc="/images/dynamic/siding-contractor/img1.webp"
                    imgAlt={`Siding installation in ${location.name}`}
                    title={`Premier Siding Installation Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <SecondaryText>
                                As {location.name}&apos;s trusted siding contractors, Paragon Exterior provides comprehensive exterior solutions including expert <strong>siding installation</strong>, professional <strong>vinyl siding</strong> services, quality <strong>siding repair</strong>, and complete <strong>siding replacement</strong>. Our experienced team transforms homes throughout {location.name} with durable, beautiful siding that enhances both protection and curb appeal.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                From popular <strong>vinyl siding installation</strong> to premium fiber cement and natural cedar options, our siding contractors deliver exceptional results. We specialize in <strong>siding repair</strong> services that address storm damage, wear, and maintenance needs, plus complete <strong>siding replacement</strong> projects that modernize and protect your home investment.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Choose Paragon Exterior as your local siding contractor for superior craftsmanship, premium materials, and complete customer satisfaction. Our reputation in ${location.name} is built on quality siding installation and reliable service that homeowners trust.`}
                    imagePosition="right"
                />

                {/* Comprehensive Siding Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Siding Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                Our professional siding contractors services include everything from vinyl siding installation to comprehensive siding repair and replacement. Discover the perfect siding solution for your {location.name} home.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={sidingServices} />
                    </div>
                </section>

                {/* Vinyl Siding Focus */}
                <Row
                    title={`Expert Vinyl Siding Installation in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                <strong>Vinyl siding installation</strong> remains the most popular choice for {location.name} homeowners seeking durable, low-maintenance exterior solutions. Our professional <strong>vinyl siding</strong> services include comprehensive material selection, expert installation, and ongoing support that ensures decades of beautiful, worry-free performance.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                As experienced siding contractors, we understand that proper <strong>vinyl siding installation</strong> requires attention to moisture management, thermal expansion, and precise fastening techniques. Our <strong>vinyl siding</strong> expertise ensures optimal performance while providing the aesthetic flexibility that makes vinyl the preferred choice for discerning homeowners.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/siding-contractor/img2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Siding Repair & Replacement */}
                <Row
                    title={`Professional Siding Repair and Siding Replacement Services`}
                    description={
                        <div>
                            <SecondaryText>
                                Our comprehensive <strong>siding repair</strong> services address storm damage, loose panels, cracks, and general wear with precision and quality materials. When <strong>siding replacement</strong> becomes necessary, our siding contractors guide {location.name} homeowners through material selection and provide expert installation that transforms your home&apos;s exterior.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you need minor <strong>siding repair</strong> or complete <strong>siding replacement</strong>, our team ensures lasting results using premium materials and proven techniques. We specialize in seamless repairs that blend perfectly with existing siding and comprehensive replacements that enhance both protection and property value.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/siding-contractor/img3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Siding Material Options */}
                <Row
                    title={`Premium Siding Materials and Installation Options`}
                    description={
                        <div>
                            <SecondaryText>
                                Beyond <strong>vinyl siding installation</strong>, our siding contractor services include fiber cement siding for superior fire resistance, natural cedar siding for authentic beauty, and engineered wood siding for enhanced durability. Each material offers unique benefits suited to different architectural styles and performance requirements in {location.name}.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our siding contractors help you choose the perfect material based on your budget, maintenance preferences, and aesthetic goals. From traditional horizontal <strong>siding installation</strong> to modern vertical and board & batten styles, we provide expert guidance and professional installation that maximizes both beauty and performance.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/siding-contractor/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Siding Contractor Advantages */}
                <IncentivesSection
                    className="py-16"
                    title={`Why Choose Our Siding Contractor Services in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Local expertise meets professional excellence. Discover why ${location.name} homeowners trust Paragon Exterior for siding installation, vinyl siding, siding repair, and siding replacement services.`}
                    heroImage={{
                        alt: `Professional siding contractor team working in ${location.name}`,
                        src: "/images/dynamic/siding-contractor/img5.webp"
                    }}
                    incentives={[
                        {
                            name: "Expert Installation",
                            description: "Professional siding installation with precise techniques, quality materials, and attention to detail that ensures lasting performance.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Expert siding installation icon"
                        },
                        {
                            name: "Material Variety",
                            description: "Complete selection of siding materials including vinyl siding, fiber cement, cedar, and engineered wood options for every style and budget.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Siding material variety icon"
                        },
                        {
                            name: "Local Knowledge",
                            description: "Deep understanding of local climate, building codes, and architectural styles ensures optimal siding solutions for the area.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Local siding knowledge icon"
                        },
                        {
                            name: "Warranty Protection",
                            description: "Comprehensive warranties on all siding installation, repair, and replacement work for complete peace of mind and protection.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Siding warranty protection icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                <div>
                <SidingMaterial />
                </div>

                <GoogleReviews/>

                {/* Why Choose Paragon */}
                <WhyParagonSiding
                    title={`Why ${location.name} Chooses Paragon Exterior as Their Siding Contractor`}
                    subTitle={`Our reputation as ${location.name}'s premier siding contractor is built on exceptional siding installation, vinyl siding expertise, reliable siding repair, and professional siding replacement services that exceed expectations.`}
                    titleAs="h2"
                />


                {/* Enhanced FAQ */}
                <SidingContractorFAQ locationName={location.name} />

                {/* Service Area Coverage */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <HeaderText as="h2" className="mb-8">
                            Professional Siding Contractor Serving {location.name}
                        </HeaderText>
                        <SecondaryText className="mb-8">
                            Our siding contractor services including siding installation, vinyl siding, siding repair, and siding replacement are available throughout {location.name} and surrounding communities. Contact Paragon Exterior today for your free estimate and discover why we&apos;re the area&apos;s most trusted siding contractor.
                        </SecondaryText>

                        <div className="grid md:grid-cols-2 gap-6">
                            <a
                                href="tel:2157997663"
                                className="bg-primaryblue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                            >
                                Call: (215) 799-7663
                            </a>
                            <a
                                href="/estimate"
                                className="bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                            >
                                Free Siding Estimate
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