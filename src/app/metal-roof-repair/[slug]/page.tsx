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

// Metal roof repair services targeting key keywords
const metalRoofingServices = [
    {
        id: 1,
        title: "Standing Seam Metal Roofing",
        href: "/roofing/metal-roofing/standing-seam-metal-roof",
        description: "Premium standing seam metal roofing systems with concealed fasteners for superior weather protection and modern aesthetics.",
        imageUrl: "/images/roof-service/metal/standing-seam/seam4.webp"
    },
    {
        id: 2,
        title: "Corrugated Metal Roofing",
        href: "/roofing/metal-roofing/corrugated-metal-roofing",
        description: "Cost-effective corrugated metal roofing solutions offering excellent durability and weather resistance for residential and commercial properties.",
        imageUrl: "/images/roof-service/metal/corrugated/corrugated-metal-roof-card.webp"
    },
    {
        id: 3,
        title: "Metal Roof Repair",
        href: "/roofing/metal-roofing/metal-roof-repair",
        description: "Expert metal roof repair services including leak repair, panel replacement, and fastener maintenance to extend your roof's lifespan.",
        imageUrl: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair-card.webp"
    }
];

// needed to build static paths
export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Metal Roof Repair in ${location?.name}`,
        description: `Professional metal roof repair in ${location.name}. Expert repair of metal roof leaks, panel damage, and storm repairs.`,
        keywords: `metal roof repair ${location.name}, how to repair metal roof, metal roof leak repair, how to repair leaking metal roof, metal roof contractors ${location.name}`,
        openGraph: {
            title: `Metal Roof Repair in ${location?.name} | Paragon Exterior`,
            description: `Expert metal roof repair serving ${location.name}. Professional repair of metal roof leaks, panel damage, and storm repairs with warranties.`,
            type: 'website',
            images: ['/images/dynamic/metal-roof-repair/hero.webp'],
        },
    };
}

// Metal roof repair FAQ based on search data
function MetalRoofRepairFAQ({locationName}: {locationName: string}) {
    const metalRoofFaqData = [
        {
            question: "Can metal roofs be repaired?",
            answer: `Yes, metal roofs can absolutely be repaired! Most metal roof damage including leaks, loose panels, damaged fasteners, and minor corrosion can be effectively repaired by professional contractors. Metal roof repair is often more cost-effective than replacement and can extend your roof's lifespan by decades when done properly.`,
        },
        {
            question: "How much does a metal roof repair cost?",
            answer: `Metal roof repair costs in ${locationName} typically range from $300-1,500 for minor repairs like fastener replacement or small leak fixes, and $1,500-5,000 for major repairs involving panel replacement or extensive flashing work. Emergency repairs may cost 20-30% more due to urgency. We provide free estimates for all metal roof repair projects.`,
        },
        {
            question: "How to fix a metal roof that leaks?",
            answer: "To fix a leaking metal roof, first identify the leak source (usually around fasteners, seams, or penetrations). Professional repair involves cleaning the area, applying appropriate sealants or patches, replacing damaged fasteners, and ensuring proper water flow. Complex leaks require professional assessment to prevent water damage and ensure permanent solutions.",
        },
        {
            question: "What is the biggest problem with metal roofs?",
            answer: "The most common metal roof problems include: 1) Fastener deterioration leading to leaks, 2) Thermal expansion causing panel movement and gaps, 3) Corrosion at cut edges or scratches, 4) Improper installation creating water penetration points. Most issues are preventable with proper installation and regular maintenance by qualified contractors.",
        },
        {
            question: `How long do metal roof repairs last in ${locationName}?`,
            answer: `Professional metal roof repairs in ${locationName} typically last 10-20 years when done correctly with quality materials. Fastener replacements last 15+ years, panel repairs 20+ years, and coating applications 10-15 years. Proper repair techniques and regular maintenance maximize repair longevity and roof performance.`,
        },
        {
            question: "When should I repair vs replace my metal roof?",
            answer: "Repair your metal roof when damage affects less than 25% of the surface, the roof is under 20 years old, or you have isolated issues like loose fasteners or small leaks. Consider replacement if you have widespread corrosion, multiple panel failures, or the roof is over 30 years old with recurring problems.",
        },
        {
            question: "Can I repair my metal roof myself?",
            answer: "While minor metal roof repairs like fastener tightening might seem DIY-friendly, professional repair is recommended for safety and warranty reasons. Metal roofs are slippery when wet, require specific tools and materials, and improper repairs can void manufacturer warranties or create bigger problems.",
        },
        {
            question: "What causes metal roof damage?",
            answer: "Common causes of metal roof damage include: severe weather (hail, high winds), thermal expansion and contraction, corrosion from salt air or chemicals, foot traffic damage, debris impact, poor installation, and aging fasteners. Regular inspections help identify issues before they become major problems.",
        }
    ];

    return (
        <FAQSection
            faqs={metalRoofFaqData}
            title={`Metal Roof Repair FAQ for ${locationName}`}
        />
    );
}

export default async function MetalRoofRepairPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    // Custom reasons for Why Paragon Metal Roof Repair
    const customMetalRoofReasons = [
        {
            icon: FaTools,
            title: "Expert Metal Roof Specialists",
            description: "Specialized expertise in all metal roof types including steel, aluminum, copper, and standing seam systems with proven repair techniques.",
            keywordPhrase: "expert metal roof repair"
        },
        {
            icon: FaShieldAlt,
            title: "Permanent Leak Solutions",
            description: "Advanced leak detection and permanent repair methods that address root causes, not just symptoms, preventing future problems.",
            keywordPhrase: "permanent metal roof leak repair"
        },
        {
            icon: FaClock,
            title: "Fast Emergency Response",
            description: "24/7 emergency metal roof repair services with rapid response times to minimize water damage and protect your property.",
            keywordPhrase: "emergency metal roof repair"
        },
        {
            icon: FaCheckCircle,
            title: "Quality Guaranteed",
            description: "All metal roof repairs backed by comprehensive warranties covering both materials and workmanship for your peace of mind.",
            keywordPhrase: "guaranteed metal roof repair"
        },
        {
            icon: FaUserTie,
            title: "Licensed & Insured",
            description: "Fully licensed and insured metal roof repair contractors with extensive experience in local building codes and requirements.",
            keywordPhrase: "licensed metal roof contractors"
        },
        {
            icon: FaAward,
            title: "Local Reputation",
            description: "Established reputation for excellence in metal roof repair with hundreds of satisfied customers and proven track record.",
            keywordPhrase: "trusted metal roof repair"
        }
    ];

    return (
            <div className="min-h-screen">
                {/* Enhanced Hero Section */}
                <Hero
                    mainText={`Metal Roof Repair in ${location.name}`}
                    subText={`Professional metal roof repair in ${location.name} for leaks, panel damage, and storm repairs. 
                    Learn how to repair metal roofs properly with expert contractors who understand metal roofing 
                    systems and provide lasting solutions with warranties.`}
                    imgSrc="/images/dynamic/metal-roof-repair/hero.webp"
                    imgAlt={`Professional metal roof repair team in ${location.name}`}
                />

                {/* Main Metal Roof Repair Overview */}
                <InfoSection
                    imgSrc="/images/dynamic/metal-roof-repair/img1.webp"
                    imgAlt={`Metal roof leak repair in ${location.name}`}
                    title={`Expert Metal Roof Repair Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <SecondaryText>
                                Do you need your metal roof repaired? When you need reliable <strong>metal roof repair in {location.name}</strong>, Paragon Exterior provides expert solutions for all types of metal roofing damage. Our comprehensive services include professional <strong>metal roof leak repair</strong>, panel replacement, fastener repairs, and emergency storm damage restoration. We understand how to repair metal roofs properly using proven techniques that deliver lasting results.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you&apos;re dealing with a <strong>leaking metal roof</strong>, damaged panels, or aging fasteners, our experienced team knows how to repair metal roof problems efficiently and effectively. We specialize in all metal roofing systems including standing seam, corrugated, and metal shingles, providing targeted <strong>metal roof repair</strong> solutions that restore your roof&apos;s integrity and performance.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Trust Paragon Exterior for all your metal roof repair needs in ${location.name}. Our reputation is built on quality workmanship, fast response times, and permanent solutions that protect your investment for years to come.`}
                    imagePosition="right"
                />

                {/* How Metal Roofs Get Damaged */}
                <Row
                    title="Common Causes of Metal Roof Damage"
                    description={
                        <div>
                            <SecondaryText>
                                Understanding how metal roofs get damaged helps homeowners recognize when <strong>metal roof repair</strong> is needed. <strong>Weather damage</strong> from hail, high winds, and thermal expansion creates the most common issues. Hail can dent panels and damage protective coatings, while extreme temperature changes cause metal to expand and contract, loosening fasteners over time.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Fastener failure</strong> is another leading cause requiring <strong>metal roof repair</strong>. As screws and nails age, they can work loose, creating entry points for water. <strong>Corrosion</strong> at cut edges, scratches, or areas where protective coatings have worn away also compromises metal roof integrity. <strong>Poor installation</strong> or maintenance issues can accelerate these problems, making professional <strong>metal roof repair</strong> essential.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/metal-roof-repair/img2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Comprehensive Metal Roof Repair Services */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Metal Roof Repair Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From emergency leak repairs to comprehensive panel replacement, our professional metal roof repair services address all types of damage with lasting solutions and warranties.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={metalRoofingServices} />
                    </div>
                </section>

                {/* How to Repair Metal Roof Leaks */}
                <Row
                    title="How to Repair Metal Roof Leaks: Professional Process"
                    description={
                        <div>
                            <SecondaryText>
                                Professional <strong>metal roof leak repair</strong> begins with thorough leak detection to identify all problem areas, not just obvious ones. Our experts examine fasteners, seams, flashing, and penetrations where most <strong>metal roof leaks</strong> originate. We use advanced techniques to trace water paths since leaks often appear far from their actual source.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Once identified, <strong>metal roof leak repair</strong> involves cleaning affected areas, replacing damaged fasteners with proper gaskets, sealing seams with compatible materials, and ensuring proper drainage. For significant leaks, we may replace entire panels or sections. Our <strong>metal roof repair</strong> process always includes testing to verify complete leak elimination before considering the job complete.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/metal-roof-repair/img3.jpg"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Metal Roof Repair Process & What You Can Do */}
                <Row
                    title="What Homeowners Can Do About Metal Roof Problems"
                    description={
                        <div>
                            <SecondaryText>
                                While professional <strong>metal roof repair</strong> is recommended for safety and warranty reasons, homeowners can take preventive steps to minimize damage. <strong>Regular inspections</strong> help identify loose fasteners, damaged panels, or debris accumulation early. Look for rust spots, gaps around penetrations, or interior water stains that indicate potential <strong>metal roof</strong> issues.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Emergency temporary repairs</strong> like applying roofing tape or tarps can prevent immediate water damage while waiting for professional <strong>metal roof repair</strong>. However, permanent repairs require proper materials, tools, and expertise. Attempting DIY <strong>metal roof repair</strong> can void warranties, create safety hazards, and often costs more when professionals must fix improper repairs.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/metal-roof-repair/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Metal Roof Repair Benefits & Process */}
                <IncentivesSection
                    className="py-16"
                    title={`Benefits of Professional Metal Roof Repair in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Professional metal roof repair extends roof life, prevents costly water damage, and maintains your home's protection. Discover why expert metal roof repair is the smart choice for ${location.name} homeowners.`}
                    heroImage={{
                        alt: `Professional metal roof repair process in ${location.name}`,
                        src: "/images/dynamic/metal-roof-repair/img5.webp"
                    }}
                    incentives={[
                        {
                            name: "Prevents Water Damage",
                            description: "Professional metal roof repair stops leaks permanently, preventing costly interior damage, mold growth, and structural problems.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Water damage prevention icon"
                        },
                        {
                            name: "Extends Roof Life",
                            description: "Quality metal roof repair can add 10-20 years to your roof's lifespan, maximizing your investment and delaying replacement costs.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Extended roof life icon"
                        },
                        {
                            name: "Maintains Energy Efficiency",
                            description: "Proper metal roof repair restores reflective properties and insulation performance, keeping energy costs low year-round.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Energy efficiency icon"
                        },
                        {
                            name: "Preserves Home Value",
                            description: "Professional metal roof repair maintains your home's value and prevents the need for premature roof replacement.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Home value preservation icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Metal Roof Repair Costs */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <HeaderText as="h2" className="text-center mb-8">
                            Metal Roof Repair Costs in {location.name}
                        </HeaderText>
                        <SecondaryText className="text-center mb-12">
                            Understanding metal roof repair costs helps you budget for necessary repairs and avoid costly water damage. Our transparent pricing ensures fair value for professional repair services.
                        </SecondaryText>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Minor Repairs</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$300-800</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Fastener replacement</li>
                                    <li>• Small leak sealing</li>
                                    <li>• Minor flashing repair</li>
                                    <li>• Sealant application</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-primaryblue text-lg">Moderate Repairs</h3>
                                    <span className="bg-amber-400 text-primaryblue px-2 py-1 rounded text-xs font-bold">MOST COMMON</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$800-2,500</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Panel replacement</li>
                                    <li>• Multiple leak repairs</li>
                                    <li>• Flashing replacement</li>
                                    <li>• Storm damage repair</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Major Repairs</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$2,500-5,000+</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Extensive panel replacement</li>
                                    <li>• Structural repairs</li>
                                    <li>• Complete flashing systems</li>
                                    <li>• Emergency repairs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-sm text-gray-700">
                                <strong>Repair costs include:</strong> Professional assessment, materials, labor, cleanup, and warranty coverage. Emergency repairs may incur additional charges. Free estimates provided for all metal roof repair projects.
                            </p>
                        </div>
                    </div>
                </section>

                <GoogleReviews />

                {/* Why Choose Paragon */}
                <WhyParagon
                    title={`Why ${location.name} Trusts Paragon Exterior for Metal Roof Repair`}
                    subTitle={`Our reputation as ${location.name}'s premier metal roof repair contractor is built on expert leak solutions, quality materials, and permanent repairs that protect your home investment.`}
                    titleAs="h2"
                    customReasons={customMetalRoofReasons}
                />

                {/* Enhanced FAQ */}
                <MetalRoofRepairFAQ locationName={location.name} />

                {/* Service Area Coverage */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <HeaderText as="h2" className="mb-8">
                            Professional Metal Roof Repair Serving {location.name}
                        </HeaderText>
                        <SecondaryText className="mb-8">
                            Our metal roof repair services including leak repair, panel replacement, and emergency repairs are available throughout {location.name} and surrounding communities. Contact Paragon Exterior today for your free estimate and learn how to repair your metal roof properly.
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
                                Free Metal Roof Repair Estimate
                            </a>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
    );
}