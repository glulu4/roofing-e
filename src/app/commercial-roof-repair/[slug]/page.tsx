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
        title: `Commercial Roof Repair in ${location?.name} | Expert Commercial Roofing Services`,
        description: `Professional commercial roof repair in ${location.name}. Expert TPO, EPDM, and flat roof repair services. Emergency commercial roof repair with fast response times and warranties.`,
        keywords: `commercial roof repair ${location.name}, commercial roofing contractors, TPO roof repair, EPDM roof repair, flat roof repair ${location.name}, emergency commercial roof repair`,
        alternates: {canonical: `https://www.paragonexterior.com/commercial-roof-repair/${slug}`},
        openGraph: {
            title: `Commercial Roof Repair in ${location?.name} | Paragon Exterior`,
            description: `Expert commercial roof repair serving ${location.name}. Professional TPO, EPDM, and flat roof repair services with emergency response and warranties.`,
            type: 'website',
            images: ['/images/roof-service/commercial/hero.webp'],
        },
    };
}


// Commercial roof repair FAQ based on business needs
function CommercialRoofRepairFAQ({locationName}: {locationName: string}) {
    const commercialRoofFaqData = [
        {
            question: "How much does commercial roof repair cost?",
            answer: `Commercial roof repair costs in ${locationName} vary by roof type and damage extent. Minor TPO or EPDM repairs range from $500-2,000, while major repairs can cost $3,000-10,000. Emergency repairs may include premium charges. We provide detailed estimates that help you budget and plan for necessary commercial roof repairs.`,
        },
        {
            question: "How long does commercial roof repair take?",
            answer: "Most commercial roof repairs take 1-3 days depending on the scope of work and weather conditions. Minor leak repairs can often be completed in one day, while extensive repairs involving multiple areas may take several days. We work efficiently to minimize business disruption while ensuring quality results.",
        },
        {
            question: "Do you offer emergency commercial roof repair services?",
            answer: `Yes, we provide 24/7 emergency commercial roof repair services in ${locationName}. Our emergency response team can provide temporary repairs to prevent further damage and schedule permanent repairs quickly. Emergency services help protect your business operations and prevent costly interior damage.`,
        },
        {
            question: "What types of commercial roofs can you repair?",
            answer: "We repair all commercial roof types including TPO, EPDM, modified bitumen, built-up roofing (BUR), metal roofing, and spray foam systems. Our technicians are trained in the specific repair techniques required for each roofing material and system type.",
        },
        {
            question: "How do I know if my commercial roof needs repair or replacement?",
            answer: "Consider repair when damage is localized and your roof is under 15 years old. Signs include minor leaks, small membrane punctures, or isolated problem areas. Consider replacement if you have widespread damage, multiple leak sources, the roof is over 20 years old, or repair costs exceed 25% of replacement cost.",
        },
        {
            question: "Can commercial roof repairs be done during business hours?",
            answer: "Yes, many commercial roof repairs can be performed during business hours with minimal disruption. We coordinate with facility managers to schedule work around business operations. For noise-sensitive businesses, we can often arrange after-hours or weekend repair work.",
        },
        {
            question: "Do commercial roof repairs come with warranties?",
            answer: "Yes, all our commercial roof repairs include warranties covering both materials and workmanship. Warranty terms vary by repair type but typically range from 2-10 years. We stand behind our work and provide ongoing support for all warranty-covered repairs.",
        },
        {
            question: "How can I prevent future commercial roof problems?",
            answer: "Regular professional inspections (twice yearly), prompt repair of minor issues, keeping drains clear, removing debris, and maintaining HVAC equipment properly all help prevent major roof problems. We offer preventive maintenance programs to help extend your commercial roof's lifespan and avoid costly emergency repairs.",
        }
    ];

    return (
        <FAQSection
            faqs={commercialRoofFaqData}
            title={`Commercial Roof Repair FAQ for ${locationName}`}
        />
    );
}

export default async function CommercialRoofRepairPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    // Custom reasons for Why Paragon Commercial Roof Repair
    const customCommercialRoofReasons = [
        {
            icon: FaTools,
            title: "Commercial Roofing Specialists",
            description: "Specialized expertise in all commercial roof types including TPO, EPDM, modified bitumen, and built-up roofing systems with proven repair techniques.",
            keywordPhrase: "expert commercial roof repair"
        },
        {
            icon: FaShieldAlt,
            title: "Business Continuity Focus",
            description: "Commercial roof repairs designed to minimize business disruption while providing permanent solutions that protect your operations and assets.",
            keywordPhrase: "commercial roof repair business continuity"
        },
        {
            icon: FaClock,
            title: "Emergency Response Team",
            description: "24/7 emergency commercial roof repair services with rapid response times to protect your business from water damage and operational interruption.",
            keywordPhrase: "emergency commercial roof repair"
        },
        {
            icon: FaCheckCircle,
            title: "Comprehensive Warranties",
            description: "All commercial roof repairs backed by extensive warranties covering materials and workmanship, providing long-term protection for your investment.",
            keywordPhrase: "warranted commercial roof repair"
        },
        {
            icon: FaUserTie,
            title: "Licensed Commercial Contractors",
            description: "Fully licensed and insured commercial roofing contractors with extensive experience in commercial building codes and insurance requirements.",
            keywordPhrase: "licensed commercial roof contractors"
        },
        {
            icon: FaAward,
            title: "Proven Commercial Track Record",
            description: "Established reputation for excellence in commercial roof repair with hundreds of satisfied business clients and proven commercial expertise.",
            keywordPhrase: "trusted commercial roof repair"
        }
    ];

    return (
        <>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}}
            /> */}

            <div className="min-h-screen">
                {/* Enhanced Hero Section */}
                <Hero
                    mainText={`Commercial Roof Repair in ${location.name}`}
                    subText={`Professional commercial roof repair in ${location.name} for TPO, EPDM, and flat roof systems. 
                    Emergency commercial roof repair services with fast response times to protect your business operations. 
                    Expert commercial roofing contractors providing lasting solutions with comprehensive warranties.`}
                    imgSrc="/images/commercial/repair/hero.webp"
                    imgAlt={`Professional commercial roof repair team in ${location.name}`}
                />

                {/* Main Commercial Roof Repair Overview */}
                <InfoSection
                    imgSrc="/images/commercial/repair/repair3.jpg"
                    imgAlt={`Commercial roof repair services in ${location.name}`}
                    title={`Expert Commercial Roof Repair Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <>
                            <SecondaryText>
                                Paragon Exterior is the most reputable commercial roofing contractor in {location.name}. We offer solutions that protect your operations and assets. Our comprehensive commercial roofing services include expert <strong>TPO roof repair</strong>, <strong>EPDM roof repair</strong>, emergency leak repairs, and preventive maintenance that keeps your commercial roof performing optimally year-round.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you&apos;re managing a retail facility, office building, warehouse, or industrial property, our experienced <strong>commercial roof repair</strong> team understands the unique challenges of commercial roofing systems. We specialize in flat roof repairs, membrane restoration, and emergency services that minimize business disruption while providing lasting solutions with comprehensive warranties.
                            </SecondaryText>
                        </>
                    }
                    bottomContent={`Trust Paragon Exterior for all your commercial roof repair needs in ${location.name}. Our reputation is built on fast response times, quality workmanship, and permanent solutions that protect your business investment for years to come.`}
                    imagePosition="right"
                />

                {/* Common Commercial Roof Problems */}
                <Row
                    title="Common Commercial Roof Problems Requiring Repair"
                    description={
                        <>
                            <SecondaryText>
                                <strong>Commercial roofs</strong> face unique challenges that require professional repair expertise. <strong>Membrane damage</strong> from foot traffic, HVAC equipment, and weather exposure creates punctures and tears in TPO and EPDM systems. <strong>Seam failures</strong> allow water penetration and can lead to extensive interior damage if not addressed promptly by qualified <strong>commercial roof repair</strong> specialists.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Drainage issues</strong> are critical on flat commercial roofs where ponding water can cause membrane deterioration and structural problems. <strong>Flashing failures</strong> around rooftop equipment, drains, and penetrations create common leak points requiring immediate <strong>commercial roof repair</strong>. <strong>Age-related deterioration</strong> affects all commercial roofing materials over time, making regular maintenance and timely repairs essential for protecting your business investment.
                            </SecondaryText>
                        </>
                    }
                    imageSrc="/images/dynamic/commercial-roof-repair/img4.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                    reverse
                />

                {/* Comprehensive Commercial Roof Repair Services */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Commercial Roof Repair Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                From emergency leak repairs to comprehensive membrane restoration, our professional commercial roof repair services address all types of damage with minimal business disruption and lasting results.
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

                {/* TPO and EPDM Roof Repair Expertise */}
                <Row
                    title="TPO and EPDM Roof Repair: Specialized Commercial Solutions"
                    description={
                        <>
                            <SecondaryText>
                                Professional <strong>TPO roof repair</strong> requires specialized knowledge of thermoplastic membrane systems and heat-welding techniques. Our experts address common TPO issues including seam failures, punctures, and shrinkage problems using manufacturer-approved methods. <strong>TPO roof repair</strong> often involves membrane patches, seam re-welding, and proper adhesion techniques that restore system integrity.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>EPDM roof repair</strong> focuses on rubber membrane restoration using compatible adhesives and patches. Our <strong>EPDM repair</strong> expertise includes addressing common issues like membrane shrinkage, seam separation, and puncture damage. Both <strong>TPO</strong> and <strong>EPDM roof repair</strong> services include thorough inspection to identify all problem areas and prevent future issues through proper maintenance planning.
                            </SecondaryText>
                        </>
                    }
                    imageSrc="/images/dynamic/commercial-roof-repair/img1.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Emergency Commercial Roof Repair */}
                <Row
                    title="Emergency Commercial Roof Repair: Protecting Your Business 24/7"
                    description={
                        <>
                            <SecondaryText>
                                <strong>Emergency commercial roof repair</strong> provides critical protection when severe weather, equipment damage, or sudden leaks threaten your business operations. Our 24/7 emergency response team quickly assesses damage, provides temporary protection, and develops permanent repair solutions that minimize business interruption and prevent costly interior damage.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                <strong>Emergency repairs</strong> often involve tarping, temporary patches, and water diversion while permanent <strong>commercial roof repair</strong> is planned and executed. Our emergency team carries specialized equipment and materials to handle urgent situations effectively. We coordinate with facility managers and insurance providers to ensure smooth emergency response and proper documentation for claims processing.
                            </SecondaryText>
                        </>
                    }
                    imageSrc="/images/dynamic/commercial-roof-repair/img2.jpg"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Commercial Roof Repair Benefits */}
                <IncentivesSection
                    className="py-16"
                    title={`Benefits of Professional Commercial Roof Repair in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Professional commercial roof repair protects your business assets, maintains operations, and extends roof lifespan. Discover why expert commercial roof repair is essential for ${location.name} businesses.`}
                    heroImage={{
                        alt: `Professional commercial roof repair process in ${location.name}`,
                        src: "/images/dynamic/commercial-roof-repair/img3.webp"
                    }}
                    incentives={[
                        {
                            name: "Protects Business Operations",
                            description: "Professional commercial roof repair prevents water damage, inventory loss, and operational disruption that can cost thousands in lost revenue.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Business protection icon"
                        },
                        {
                            name: "Extends Roof Lifespan",
                            description: "Quality commercial roof repair can add 5-15 years to your roof's life, maximizing ROI and delaying costly replacement expenses.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Extended roof life icon"
                        },
                        {
                            name: "Maintains Energy Efficiency",
                            description: "Proper commercial roof repair restores insulation performance and reflective properties, reducing HVAC costs and improving comfort.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Energy efficiency icon"
                        },
                        {
                            name: "Preserves Property Value",
                            description: "Professional commercial roof repair maintains building value and prevents the need for premature roof replacement that disrupts business.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Property value preservation icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Commercial Roof Repair Costs */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <HeaderText as="h2" className="text-center mb-8">
                            Commercial Roof Repair Investment in {location.name}
                        </HeaderText>
                        <SecondaryText className="text-center mb-12">
                            Understanding commercial roof repair costs helps you budget for necessary repairs and avoid costly business disruption. Our transparent pricing ensures fair value for professional commercial roofing services.
                        </SecondaryText>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Minor Repairs</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$500-2,000</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Small membrane patches</li>
                                    <li>• Drain cleaning/repair</li>
                                    <li>• Minor flashing work</li>
                                    <li>• Sealant applications</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-primaryblue text-lg">Moderate Repairs</h3>
                                    <span className="bg-amber-400 text-primaryblue px-2 py-1 rounded text-xs font-bold">MOST COMMON</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$2,000-6,000</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Membrane section replacement</li>
                                    <li>• Multiple leak repairs</li>
                                    <li>• Flashing system repair</li>
                                    <li>• Storm damage restoration</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-bold text-primaryblue mb-3 text-lg">Major Repairs</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">$6,000-15,000+</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Extensive membrane replacement</li>
                                    <li>• Structural repairs</li>
                                    <li>• Complete drainage systems</li>
                                    <li>• Emergency response work</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-sm text-gray-700">
                                <strong>Commercial repair costs include:</strong> Professional assessment, materials, skilled labor, equipment, cleanup, and warranty coverage. Emergency services may include premium charges. Free detailed estimates provided for all commercial roof repair projects.
                            </p>
                        </div>
                    </div>
                </section>

                <GoogleReviews />

                {/* Why Choose Paragon */}
                <WhyParagon
                    title={`Why ${location.name} Businesses Trust Paragon Exterior for Commercial Roof Repair`}
                    subTitle={`Our reputation as ${location.name}'s premier commercial roof repair contractor is built on business-focused solutions, minimal disruption, and permanent repairs that protect your operations and investment.`}
                    titleAs="h2"
                    customReasons={customCommercialRoofReasons}
                />

                {/* Enhanced FAQ */}
                <CommercialRoofRepairFAQ locationName={location.name} />

                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}