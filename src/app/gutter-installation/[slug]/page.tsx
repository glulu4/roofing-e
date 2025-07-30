import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import ServicesGrid from "@/components/service-page/Services";
import FAQ from "@/components/FAQ";
import WhyParagon from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas, Location} from "../../../../public/service-areas";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";
import {
    FaShieldAlt,
    FaTools,
    FaClock,
    FaLeaf,
    FaDollarSign,
    FaHome
} from "react-icons/fa";

// Comprehensive gutter services data targeting key keywords
const gutterServices = [
    {
        id: 1,
        title: 'Gutter Repair',
        href: '/gutters/gutter-repair',
        description:
            'Fixing leaks, sagging gutters, clogs, and pitch issues so water flows properly.',
        imageUrl:
            '/images/gutters/gutter-replace-card.webp',
    },
    {
        id: 2,
        title: 'Gutter Replacement',
        href: '/gutters/gutter-replacement',
        description:
            'Full system upgrades with modern materials for lasting protection.',
        imageUrl:
            '/images/gutters/gutter-repair-card.webp',
    },
    {
        id: 3,
        title: 'Gutter Downspout Services',
        href: '/gutters/downspout-services',
        description:
            'Repair and install downspouts to redirect water away from foundations.',
        imageUrl:
            '/images/gutters/downspout-card.avif',
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
        title: `Gutter Installation in ${location?.name}`,
        description: `Professional gutter installation in ${location.name} with seamless gutters, gutter repair, and gutter replacement.`,
        keywords: `gutter installation ${location.name}, seamless gutters ${location.name}, gutter repair ${location.name}, gutter replacement ${location.name}, gutter contractors ${location.name}`,
        openGraph: {
            title: `Gutter Installation in ${location?.name} | Paragon Exterior`,
            description: `Expert gutter installation serving ${location.name}. Specializing in seamless gutters, gutter repair, and complete gutter replacement services.`,
            type: 'website',
            images: ['/images/dynamic/gutter-installation/hero.webp'],
        },
    };
}

// Enhanced structured data for gutter services
const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "Contractor",
    "name": "Paragon Exterior",
    "description": `Professional gutter installation in ${location.name} specializing in seamless gutters, gutter repair, gutter replacement, and gutter guard installation services.`,
    "url": `https://www.paragonexterior.com/gutter-installation/${location.name}`,
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
        "name": "Gutter Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Installation",
                    "description": "Professional gutter installation services with seamless gutters and expert craftsmanship"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Seamless Gutters",
                    "description": "Custom seamless gutter installation with on-site fabrication for superior protection"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Repair",
                    "description": "Expert gutter repair services for leaks, clogs, and storm damage"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Replacement",
                    "description": "Complete gutter replacement services with modern drainage solutions"
                }
            }
        ]
    }
});

// Custom gutter FAQ for local areas
function GutterInstallationFAQ({locationName}: {locationName: string}) {
    const gutterFaqData = [
        {
            question: `How much does gutter installation cost in ${locationName}?`,
            answer: `Gutter installation costs in ${locationName} typically range from $6-12 per linear foot depending on material choice. Aluminum gutters are most affordable at $6-8 per foot, while copper gutters cost $12-15 per foot. Seamless gutter installation adds value through superior leak protection and custom fit.`,
        },
        {
            question: "What are seamless gutters and are they worth it?",
            answer: "Seamless gutters are custom-fabricated on-site to fit your home perfectly with no joints except at corners and downspouts. This dramatically reduces leak potential and provides a cleaner appearance. Most homeowners find seamless gutters worth the investment for their durability and low maintenance.",
        },
        {
            question: "How often do gutters need to be replaced?",
            answer: "Quality gutters typically last 15-30 years depending on material and maintenance. Aluminum gutters last 20+ years, while copper gutters can last 50+ years. Signs you need gutter replacement include frequent leaks, rust, separation at joints, and water damage around your foundation.",
        },
        {
            question: "Do you install gutter guards during gutter installation?",
            answer: "Yes, we offer gutter guard installation with new gutter systems or as an add-on service. Gutter guards significantly reduce maintenance by preventing leaves and debris from clogging your gutters while maintaining proper water flow and drainage.",
        },
        {
            question: "What gutter materials do you install?",
            answer: "We install aluminum gutters (most popular), copper gutters (premium option), steel gutters (maximum durability), and vinyl gutters (budget-friendly). Our experts help you choose the best material based on your climate, budget, and home's architectural style.",
        },
        {
            question: "How long does gutter installation take?",
            answer: "Most gutter installation projects take 1-2 days for an average home. Seamless gutter installation may take slightly longer due to on-site fabrication. Complex rooflines or multi-story homes may require additional time for proper installation and safety.",
        },
        {
            question: "Do new gutters come with warranties?",
            answer: "Yes, our gutter installation includes comprehensive warranties covering both materials and workmanship. Aluminum and steel gutters typically include 15-20 year material warranties, while our installation workmanship is warrantied for superior peace of mind.",
        },
        {
            question: "Can you match my existing gutters for partial replacement?",
            answer: "We can often match existing gutter colors and styles for seamless additions or partial replacements. However, seamless gutter installation for the entire system provides better long-term performance and appearance than piecemeal repairs.",
        }
    ];

    return (
        <FAQSection
            faqs={gutterFaqData}
            title={`Gutter Installation FAQ for ${locationName}`}
        />
    );
}

export default async function GutterInstallationPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    // Custom reasons for Why Paragon Gutters
    const customGutterReasons = [
        {
            icon: FaShieldAlt,
            title: "Expert Installation",
            description: "Professional gutter installation with precise slope calculations, secure mounting, and seamless integration with your roofing system.",
            keywordPhrase: "expert gutter installation"
        },
        {
            icon: FaTools,
            title: "Seamless Gutter Specialists",
            description: "On-site fabrication of seamless gutters for perfect fit, superior leak protection, and enhanced curb appeal with clean lines.",
            keywordPhrase: "seamless gutter specialists"
        },
        {
            icon: FaClock,
            title: "Fast, Reliable Service",
            description: "Efficient gutter installation and repair services that minimize disruption while ensuring quality results and customer satisfaction.",
            keywordPhrase: "fast gutter installation"
        },
        {
            icon: FaLeaf,
            title: "Comprehensive Solutions",
            description: "Complete gutter services including installation, repair, replacement, cleaning, and gutter guard systems for total home protection.",
            keywordPhrase: "comprehensive gutter solutions"
        },
        {
            icon: FaDollarSign,
            title: "Competitive Pricing",
            description: "Transparent, competitive pricing for all gutter services with detailed estimates and no hidden costs for your peace of mind.",
            keywordPhrase: "competitive gutter pricing"
        },
        {
            icon: FaHome,
            title: "Local Weather Expertise",
            description: "Deep understanding of local climate challenges ensures gutter systems designed to handle regional weather patterns effectively.",
            keywordPhrase: "local gutter expertise"
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}}
            />

            <div className="min-h-screen">
                {/* Enhanced Hero Section */}
                <Hero
                    mainText={`Gutter Installation in ${location.name}`}
                    subText={`Professional gutter installation in ${location.name} with seamless gutters, expert gutter repair, and complete gutter replacement services. Protect your home with quality gutters installed by licensed contractors who understand local weather challenges.`}
                    imgSrc="/images/dynamic/gutter-installation/hero.webp"
                    imgAlt={`Professional gutter installation team in ${location.name}`}
                />

                {/* Main Gutter Installation Overview */}
                <InfoSection
                    imgSrc="/images/dynamic/gutter-installation/img1.webp"
                    imgAlt={`Seamless gutter installation in ${location.name}`}
                    title={`Premier Gutter Installation Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <SecondaryText>
                                When you need reliable <strong>gutter installation in {location.name}</strong>, Paragon Exterior delivers professional solutions that protect your home from water damage. Our comprehensive gutter services include <strong>seamless gutter installation</strong>, expert <strong>gutter repair</strong>, complete <strong>gutter replacement</strong>, and preventive maintenance that keeps your drainage system functioning perfectly year-round.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We specialize in <strong>seamless gutters</strong> that provide superior leak protection compared to traditional sectional systems. Our on-site fabrication ensures perfect fit and clean aesthetics, while our <strong>gutter installation</strong> expertise guarantees proper slope, secure mounting, and optimal drainage performance for {location.name}&apos;s climate conditions.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Choose Paragon Exterior for your gutter installation needs and experience the difference professional installation makes. Our reputation in ${location.name} is built on quality workmanship, premium materials, and customer satisfaction that protects your home investment.`}
                    imagePosition="right"
                />

                {/* Comprehensive Gutter Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Gutter Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From seamless gutter installation to comprehensive repair and maintenance, our professional gutter services protect your {location.name} home with reliable, long-lasting drainage solutions.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={gutterServices} />
                    </div>
                </section>

                {/* Seamless Gutters Focus */}
                <Row
                    title={`Seamless Gutter Installation: Superior Protection for ${location.name} Homes`}
                    description={
                        <div>
                            <SecondaryText>
                                <strong>Seamless gutters</strong> represent the gold standard in gutter installation, offering superior leak protection and enhanced aesthetics for {location.name} homes. Unlike sectional gutters with multiple joints, our <strong>seamless gutter installation</strong> creates custom-fitted drainage systems with joints only at corners and downspouts, dramatically reducing potential failure points.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our on-site fabrication process ensures each <strong>seamless gutter</strong> section fits your home perfectly. This precision approach eliminates gaps, reduces maintenance requirements, and provides the clean, professional appearance that enhances your home&apos;s curb appeal while delivering decades of reliable water management.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/gutter-installation/img2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Gutter Materials & Options */}
                <Row
                    title={`Premium Gutter Materials and Installation Options`}
                    description={
                        <div>
                            <SecondaryText>
                                Our <strong>gutter installation</strong> services include a complete range of premium materials designed for {location.name}&apos;s climate. <strong>Aluminum gutters</strong> offer excellent value with 20+ year lifespan and variety of colors. <strong>Copper gutters</strong> provide premium aesthetics and 50+ year durability. <strong>Steel gutters</strong> deliver maximum strength for challenging conditions.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Each <strong>gutter installation</strong> includes professional assessment to determine optimal size, slope, and downspout placement for your specific property. We consider roof pitch, rainfall patterns, and architectural features to design drainage systems that perform reliably while complementing your home&apos;s appearance.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/gutter-installation/img3.avif"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Gutter Repair & Replacement */}
                <Row
                    title={`Professional Gutter Repair and Replacement Services`}
                    description={
                        <div>
                            <SecondaryText>
                                Beyond new <strong>gutter installation</strong>, we provide comprehensive <strong>gutter repair</strong> services for leaks, clogs, sagging, and storm damage. When <strong>gutter replacement</strong> becomes necessary, our experts guide {location.name} homeowners through material selection and system design for optimal long-term performance.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our <strong>gutter repair</strong> expertise addresses common issues like loose fasteners, damaged sections, and improper drainage quickly and effectively. For complete <strong>gutter replacement</strong>, we remove old systems safely and install modern drainage solutions that enhance both protection and property value.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/gutter-installation/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Gutter Installation Process & Benefits */}
                <IncentivesSection
                    className="py-16"
                    title={`Why Professional Gutter Installation Matters in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Proper gutter installation protects your foundation, prevents water damage, and enhances your home's value. Discover the benefits of professional gutter services from ${location.name}'s trusted experts.`}
                    heroImage={{
                        alt: `Professional gutter installation process in ${location.name}`,
                        src: "/images/dynamic/gutter-installation/img5.webp"
                    }}
                    incentives={[
                        {
                            name: "Foundation Protection",
                            description: "Proper gutter installation directs water away from your foundation, preventing costly water damage, basement flooding, and structural issues.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Foundation protection icon"
                        },
                        {
                            name: "Seamless Fabrication",
                            description: "On-site seamless gutter fabrication ensures perfect fit, superior leak protection, and professional appearance that enhances curb appeal.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Seamless fabrication icon"
                        },
                        {
                            name: "Weather Resistance",
                            description: "Professional installation with quality materials provides reliable protection against local weather challenges including heavy rain and snow.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Weather resistance icon"
                        },
                        {
                            name: "Long-term Value",
                            description: "Quality gutter installation increases home value, reduces maintenance costs, and provides decades of reliable drainage performance.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Long-term value icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Gutter Costs & Investment Information */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <HeaderText as="h2" className="text-center mb-8">
                            Gutter Installation Investment in {location.name}
                        </HeaderText>
                        <SecondaryText className="text-center mb-12">
                            Understanding gutter installation costs helps you make informed decisions about protecting your home. Our transparent pricing ensures you get exceptional value for professional gutter services.
                        </SecondaryText>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Aluminum Gutters</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$6-8 per ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Most popular choice</li>
                                    <li>• 20+ year lifespan</li>
                                    <li>• Multiple color options</li>
                                    <li>• Lightweight and durable</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-primaryblue text-lg">Seamless Gutters</h3>
                                    <span className="bg-amber-400 text-primaryblue px-2 py-1 rounded text-xs font-bold">RECOMMENDED</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$8-12 per ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Custom on-site fabrication</li>
                                    <li>• Superior leak protection</li>
                                    <li>• Professional appearance</li>
                                    <li>• Minimal maintenance</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Copper Gutters</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$12-15 per ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Premium appearance</li>
                                    <li>• 50+ year lifespan</li>
                                    <li>• Natural patina development</li>
                                    <li>• Maximum property value</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-sm text-gray-700">
                                <strong>Installation includes:</strong> Complete removal of old gutters (if needed), professional installation with proper slope, secure mounting, downspouts, end caps, and cleanup. Gutter guard installation available as add-on service.
                            </p>
                        </div>
                    </div>
                </section>

                <GoogleReviews />

                {/* Why Choose Paragon */}
                <WhyParagon
                    title={`Why ${location.name} Chooses Paragon Exterior for Gutter Installation`}
                    subTitle={`Our reputation as ${location.name}'s premier gutter installation contractor is built on exceptional seamless gutter installation, reliable gutter repair, and professional service that protects your home investment.`}
                    titleAs="h2"
                    customReasons={customGutterReasons}
                />

                {/* Enhanced FAQ */}
                <GutterInstallationFAQ locationName={location.name} />



                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}