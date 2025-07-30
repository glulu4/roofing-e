import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import ServicesGrid from "@/components/service-page/Services";
import WhyParagon from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas, Location} from "../../../../public/service-areas";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";
import {
    FaTools,
    FaShieldAlt,
    FaClock,
    FaCheckCircle,
    FaUserTie,
    FaAward
} from "react-icons/fa";


// needed to build static paths
export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Commercial Roof Replacement in ${location?.name} | New Commercial Roofing Systems`,
        description: `Professional commercial roof replacement in ${location.name}. Expert TPO, EPDM, and metal roof installation. New commercial roofing systems with warranties and financing options.`,
        keywords: `commercial roof replacement ${location.name}, commercial roofing contractors, new commercial roof installation, TPO roof replacement, EPDM roof replacement ${location.name}`,
        alternates: {canonical: `https://www.paragonexterior.com/commercial-roof-replacement/${slug}`},
        openGraph: {
            title: `Commercial Roof Replacement in ${location?.name} | Paragon Exterior`,
            description: `Expert commercial roof replacement serving ${location.name}. Professional new commercial roofing systems with TPO, EPDM, and metal options with warranties.`,
            type: 'website',
            images: ['/images/roof-service/commercial/replacement-hero.webp'],
        },
    };
}

// Enhanced structured data for commercial roof replacement services
const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Paragon Exterior",
    "description": `Professional commercial roof replacement in ${location.name} specializing in TPO roof replacement, EPDM roof replacement, metal roofing installation, and complete commercial roofing systems.`,
    "url": `https://www.paragonexterior.com/commercial-roof-replacement/${location.name}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "image": "https://www.paragonexterior.com/icon.png",
    "priceRange": "$$$",
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
        "name": "Commercial Roof Replacement Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "TPO Roof Replacement",
                    "description": "Complete TPO membrane roof replacement systems for commercial buildings"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "EPDM Roof Replacement",
                    "description": "Full EPDM rubber roof replacement and installation services"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Metal Roof Replacement",
                    "description": "Complete commercial metal roofing system installation and replacement"
                }
            }
        ]
    }
});

// Commercial roof replacement FAQ based on business needs
function CommercialRoofReplacementFAQ({locationName}: {locationName: string}) {
    const commercialRoofReplacementFaqData = [
        {
            question: "How much does commercial roof replacement cost?",
            answer: `Commercial roof replacement costs in ${locationName} typically range from $8-15 per square foot for TPO or EPDM systems, $12-20 per square foot for metal roofing, and $15-25 per square foot for premium systems. Total project costs depend on roof size, material choice, structural requirements, and building complexity.`,
        },
        {
            question: "How long does commercial roof replacement take?",
            answer: "Most commercial roof replacement projects take 1-4 weeks depending on building size, weather conditions, and roofing system complexity. We work efficiently to minimize business disruption and often can phase work to maintain operations during replacement.",
        },
        {
            question: "What commercial roofing systems do you install?",
            answer: "We install all major commercial roofing systems including TPO, EPDM, modified bitumen, built-up roofing (BUR), metal roofing, and green roof systems. Our experts help you choose the best system based on your building requirements, budget, and performance needs.",
        },
        {
            question: "Can you replace a commercial roof while business is operating?",
            answer: `Yes, we specialize in occupied building roof replacement in ${locationName}. We coordinate closely with facility managers to schedule work around business operations, minimize noise and disruption, and often phase projects to maintain normal operations.`,
        },
        {
            question: "Do you handle permits and inspections for commercial roof replacement?",
            answer: "Yes, we handle all permit applications, building department coordination, and inspection scheduling for commercial roof replacement projects. We ensure full compliance with local building codes and commercial construction requirements.",
        },
        {
            question: "What warranties come with commercial roof replacement?",
            answer: "Our commercial roof replacement includes comprehensive warranties covering both materials and workmanship. Material warranties typically range from 15-30 years depending on the system, while our installation workmanship is warranted for lasting peace of mind.",
        },
        {
            question: "How do I know if I need roof replacement vs repair?",
            answer: "Consider replacement when your roof is over 20 years old, has recurring leak issues, widespread membrane deterioration, or repair costs exceed 25% of replacement cost. We provide detailed assessments to help you make informed decisions about repair vs replacement.",
        },
        {
            question: "Do you offer financing for commercial roof replacement?",
            answer: "Yes, we offer various financing options for commercial roof replacement including equipment financing, business loans, and flexible payment plans. We work with your budget and cash flow needs to make roof replacement affordable for your business.",
        }
    ];

    return (
        <FAQSection
            faqs={commercialRoofReplacementFaqData}
            title={`Commercial Roof Replacement FAQ for ${locationName}`}
        />
    );
}

export default async function CommercialRoofReplacementPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    // Custom reasons for Why Paragon Commercial Roof Replacement
    const customCommercialReplacementReasons = [
        {
            icon: FaTools,
            title: "Complete Roofing System Experts",
            description: "Specialized expertise in all commercial roofing systems including TPO, EPDM, metal, and built-up roofing with proven installation techniques for lasting performance.",
            keywordPhrase: "expert commercial roof replacement"
        },
        {
            icon: FaShieldAlt,
            title: "Business-First Installation",
            description: "Commercial roof replacement designed to minimize business disruption with phased installation, occupied building expertise, and flexible scheduling options.",
            keywordPhrase: "commercial roof replacement business continuity"
        },
        {
            icon: FaClock,
            title: "Efficient Project Management",
            description: "Streamlined commercial roof replacement process with dedicated project managers, realistic timelines, and proactive communication throughout installation.",
            keywordPhrase: "efficient commercial roof replacement"
        },
        {
            icon: FaCheckCircle,
            title: "Comprehensive Roof Warranties",
            description: "All commercial roof replacement projects backed by extensive material and workmanship warranties providing long-term protection for your investment.",
            keywordPhrase: "warranted commercial roof replacement"
        },
        {
            icon: FaUserTie,
            title: "Licensed Commercial Specialists",
            description: "Fully licensed and insured commercial roofing contractors with extensive experience in commercial building codes, permits, and inspection requirements.",
            keywordPhrase: "licensed commercial roof replacement contractors"
        },
        {
            icon: FaAward,
            title: "Proven Commercial Success",
            description: "Established reputation for excellence in commercial roof replacement with hundreds of successful projects and proven expertise across all building types.",
            keywordPhrase: "trusted commercial roof replacement"
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
                    mainText={`Commercial Roof Replacement in ${location.name}`}
                    subText={`Professional commercial roof replacement in ${location.name} with TPO, EPDM, and metal roofing systems. 
                    Complete new commercial roofing installation with minimal business disruption. Expert commercial roofing contractors 
                    providing energy-efficient systems with comprehensive warranties and financing options.`}
                    imgSrc="/images/commercial/replacement/hero.webp"
                    imgAlt={`Professional commercial roof replacement team in ${location.name}`}
                />

                {/* Main Commercial Roof Replacement Overview */}
                <InfoSection
                    imgSrc="/images/commercial/flat/flat4.webp"
                    imgAlt={`Commercial roof replacement services in ${location.name}`}
                    title={`Expert Commercial Roof Replacement Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <>
                            <SecondaryText>
                                When your business needs reliable <strong>commercial roof replacement in {location.name}</strong>, Paragon Exterior delivers complete new roofing systems that protect your operations and investment. Our comprehensive services include expert <strong>TPO roof replacement</strong>, <strong>EPDM roof replacement</strong>, metal roofing installation, and advanced commercial systems designed for long-term performance and energy efficiency.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you&apos;re managing an office building, retail facility, warehouse, or industrial property, our experienced <strong>commercial roof replacement</strong> team understands the unique requirements of commercial properties. We specialize in minimizing business disruption while installing high-performance roofing systems that provide decades of reliable protection with comprehensive warranties.
                            </SecondaryText>
                        </>
                    }
                    bottomContent={`Trust Paragon Exterior for all your commercial roof replacement needs in ${location.name}. Our reputation is built on quality installation, business-focused service, and roofing systems that deliver lasting value for your commercial investment.`}
                    imagePosition="right"
                />

                {/* When to Consider Commercial Roof Replacement */}
                <Row
                    title="When Your Commercial Building Needs Roof Replacement"
                    description={
                        <div>
                            <SecondaryText>
                                <strong>Commercial roof replacement</strong> becomes necessary when your existing system reaches the end of its useful life or experiences widespread deterioration. <strong>Age</strong> is a primary factor - most commercial roofs require replacement after 15-25 years depending on the system and maintenance. <strong>Recurring repairs</strong> that exceed 25% of replacement cost indicate it&apos;s time for a complete new roof.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Energy inefficiency</strong> from aging insulation or membrane deterioration makes <strong>commercial roof replacement</strong> a smart investment. <strong>Building sale or major renovations</strong> also present ideal opportunities for roof replacement. <strong>Insurance requirements</strong> may mandate replacement for coverage, making new commercial roofing systems essential for business protection and compliance.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/commercial/replacement/replace1.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Comprehensive Commercial Roof Replacement Services */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Commercial Roof Replacement Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From energy-efficient TPO systems to durable metal roofing, our professional commercial roof replacement services include all major roofing systems with expert installation and comprehensive warranties.
                            </SecondaryText>
                        </div>

                        <ServicesGrid
                            services={[
                                {
                                    id: 1,
                                    title: "Commercial Flat Roofing",
                                    description:
                                        "EPDM, TPO, and built-up flat roofs for business buildings. Waterproof, energy-efficient, and built to last.",
                                    imageUrl: "/images/commercial/flat-commerical.webp",
                                    href: "/commercial-roofing/flat-roofing",
                                },
                                {
                                    id: 2,
                                    title: "Commercial Roof Replacement",
                                    description:
                                        "Upgrade your roof with high-performance materials that prevent leaks and save on long-term repairs.",
                                    imageUrl: "/images/commercial/replacement-commercial.webp",
                                    href: "/commercial-roofing/roof-replacement",
                                },
                                {
                                    id: 3,
                                    title: "Commercial Roof Repair",
                                    description:
                                        "Fix leaks and damage fast. We offer emergency repairs and long-term maintenance for all roof types.",
                                    imageUrl: "/images/commercial/repair-commercial-roof.webp",
                                    href: "/commercial-roofing/roof-repair",
                                },
                            ]}
                        />
                    </div>
                </section>

                {/* TPO and EPDM Roof Replacement */}
                <Row
                    title="TPO and EPDM Roof Replacement: Modern Commercial Solutions"
                    description={
                        <div>
                            <SecondaryText>
                                <strong>TPO roof replacement</strong> provides energy-efficient white membrane systems that reflect heat and reduce cooling costs. Our TPO installation includes mechanically-attached or fully-adhered systems designed for superior wind resistance and long-term performance. <strong>TPO roof replacement</strong> offers excellent value with 15-20 year warranties and minimal maintenance requirements.
                            </  SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>EPDM roof replacement</strong> delivers proven rubber membrane technology with exceptional flexibility and weather resistance. Our <strong>EPDM replacement</strong> services include ballasted, mechanically-attached, or fully-adhered systems depending on your building requirements. Both <strong>TPO</strong> and <strong>EPDM roof replacement</strong> provide cost-effective solutions with reliable performance for decades.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/commercial/replacement/replace5.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Metal Roof Replacement Benefits */}
                <Row
                    title="Commercial Metal Roof Replacement: Superior Longevity"
                    description={
                        <div>
                            <SecondaryText>
                                <strong>Commercial metal roof replacement</strong> offers the longest service life of any roofing system with 40-60 year performance expectations. Our metal roofing installation includes standing seam systems, structural panels, and architectural metal designed for commercial applications. <strong>Metal roof replacement</strong> provides excellent energy efficiency, fire resistance, and minimal maintenance requirements.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Metal roofing systems</strong> excel in extreme weather conditions and provide superior wind resistance compared to membrane systems. Our <strong>commercial metal roof replacement</strong> includes proper insulation, vapor barriers, and structural considerations for optimal performance. While initial investment is higher, metal roofing delivers exceptional long-term value and building protection.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/commercial/replacement/replace2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Commercial Roof Replacement Benefits */}
                <IncentivesSection
                    className="py-16"
                    title={`Benefits of Professional Commercial Roof Replacement in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Professional commercial roof replacement provides long-term building protection, energy efficiency, and peace of mind. Discover why expert commercial roof replacement is essential for ${location.name} businesses.`}
                    heroImage={{
                        alt: `Professional commercial roof replacement process in ${location.name}`,
                        src: '/images/commercial/replacement/replace3.webp',
                    }}
                    incentives={[
                        {
                            name: "Enhanced Building Protection",
                            description: "New commercial roofing systems provide superior weather protection, preventing water damage, operational disruption, and costly interior repairs.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Building protection icon"
                        },
                        {
                            name: "Improved Energy Efficiency",
                            description: "Modern commercial roof replacement includes advanced insulation and reflective membranes that significantly reduce HVAC costs year-round.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Energy efficiency icon"
                        },
                        {
                            name: "Increased Property Value",
                            description: "New commercial roofing systems enhance building value, improve tenant satisfaction, and make properties more attractive to buyers and lessees.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Property value icon"
                        },
                        {
                            name: "Long-Term Cost Savings",
                            description: "Commercial roof replacement eliminates ongoing repair costs, reduces maintenance needs, and provides predictable roofing expenses for decades.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Cost savings icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Commercial Roof Replacement Investment */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <HeaderText as="h2" className="text-center mb-8">
                            Commercial Roof Replacement Investment in {location.name}
                        </HeaderText>
                        <SecondaryText className="text-center mb-12">
                            Understanding commercial roof replacement costs helps you budget for this important investment. Our transparent pricing ensures you get exceptional value for your new commercial roofing system.
                        </SecondaryText>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">TPO/EPDM Systems</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$8-15 /sq ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Single-ply membrane systems</li>
                                    <li>• Energy-efficient options</li>
                                    <li>• 15-20 year warranties</li>
                                    <li>• Excellent cost-to-performance ratio</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-primaryblue text-lg">Metal Roofing</h3>
                                    <span className="bg-amber-400 text-primaryblue px-2 py-1 rounded text-xs font-bold">LONGEST LASTING</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$12-20 /sq ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Standing seam systems</li>
                                    <li>• 40-60 year lifespan</li>
                                    <li>• Superior weather resistance</li>
                                    <li>• Minimal maintenance required</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Premium Systems</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$15-25+ /sq ft</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Green roof systems</li>
                                    <li>• Modified bitumen multi-layer</li>
                                    <li>• Specialty applications</li>
                                    <li>• Custom performance requirements</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                            <SecondaryText >
                                <strong>Replacement costs include:</strong> Complete tear-off of existing roof, structural assessment, new roofing system installation, insulation upgrades, permits, inspections, and comprehensive warranties. Financing options available for qualified businesses.
                            </SecondaryText>
                        </div>
                    </div>
                </section>

                <GoogleReviews />

                {/* Why Choose Paragon */}
                <WhyParagon
                    title={`Why ${location.name} Businesses Choose Paragon Exterior for Commercial Roof Replacement`}
                    subTitle={`Our reputation as ${location.name}'s premier commercial roof replacement contractor is built on business-focused solutions, quality installation, and roofing systems that provide lasting protection and value.`}
                    titleAs="h2"
                    customReasons={customCommercialReplacementReasons}
                />

                {/* Enhanced FAQ */}
                <CommercialRoofReplacementFAQ locationName={location.name} />


                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}