import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import ServicesGrid from "@/components/service-page/Services";
import FAQ from "@/components/FAQ";
import {WhyParagonEmergencyRoofRepair} from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas} from "../../../../public/service-areas";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";

// Emergency roof repair services data
const emergencyServices = [
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
        title: 'Roof Leak Repair',
        href: '/roofing/roof-leak-repair',
        description: 'Fast roof leak detection and repair services. Stop water damage with expert leak repairs for all roof types. Emergency leak repair available 24/7 in PA, NJ, DE.',
        imageUrl: '/images/roof-service/roof-leak/roof-leak.jpg',
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
        title: `Emergency Roof Repair ${location?.name} | 24/7 Roofing Emergency Service`,
        description: `24/7 emergency roof repair in ${location.name}. Immediate response for storm damage, roof leaks, and urgent roofing emergencies. Licensed contractors available now - call for instant help!`,
        keywords: `emergency roof repair ${location.name}, 24/7 roof repair, emergency roofing ${location.name}, storm damage repair, roof leak repair, emergency roofer ${location.name}`,
        alternates: {canonical: `https://www.paragonexterior.com/emergency-roof-repair/${slug}`},
        openGraph: {
            title: `Emergency Roof Repair ${location?.name} | 24/7 Response`,
            description: `Immediate emergency roof repair in ${location.name}. 24/7 response for storm damage, leaks, and urgent roofing emergencies. Call now for instant help!`,
            type: 'website',
            images: ['/images/emergency-roof-repair-hero.jpg'],
        },
    };
}

// Enhanced structured data for emergency services
const generateStructuredData = (location: any) => ({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EmergencyService"],
    "name": "Paragon Exterior Emergency Roof Repair",
    "description": `24/7 emergency roof repair service in ${location.name} providing immediate response for storm damage, roof leaks, and urgent roofing emergencies.`,
    "url": `https://www.paragonexterior.com/emergency-roof-repair/${location.slug}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "availableLanguage": "English",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Insurance"],
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
    "availabilityStarts": "00:00",
    "availabilityEnds": "23:59",
    "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Emergency Roofing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 Emergency Roof Repair",
                    "description": "Immediate emergency roof repair response available around the clock"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Storm Damage Repair",
                    "description": "Expert storm damage assessment and emergency roof repair services"
                }
            }
        ]
    }
});

// Custom emergency FAQ for local areas
function EmergencyRoofRepairFAQ({locationName}: {locationName: string}) {
    const emergencyFaqData = [
        {
            question: `Do you provide 24/7 emergency roof repair in ${locationName}?`,
            answer: `Yes, we provide 24/7 emergency roof repair services throughout ${locationName} and surrounding areas. Our emergency response team is available around the clock for urgent roofing situations including active leaks, storm damage, and emergency situations that require immediate attention.`,
        },
        {
            question: "How quickly can you respond to a roofing emergency?",
            answer: "We typically respond to emergency roof repair calls within 1-2 hours during business hours and within 2-4 hours during nights, weekends, and holidays. For life-threatening situations or severe active leaks, we prioritize immediate response and can often arrive within the hour.",
        },
        {
            question: "What constitutes a roofing emergency?",
            answer: "Roofing emergencies include active leaks causing interior damage, storm damage exposing your home to the elements, missing or severely damaged shingles, collapsed roof sections, damaged flashing causing water infiltration, and any roofing issue that poses immediate danger to occupants or property.",
        },
        {
            question: "Do you provide emergency tarping services?",
            answer: "Yes, emergency tarping is one of our core emergency roof repair services. We provide immediate roof protection with professional-grade tarps and securing systems to prevent further damage until permanent repairs can be completed. This service is available 24/7.",
        },
        {
            question: "Will insurance cover emergency roof repair?",
            answer: "Most homeowner's insurance policies cover emergency roof repair when damage is caused by covered perils like storms, hail, or wind. We work directly with insurance companies, provide detailed documentation, and can help expedite your claim process to ensure you get the coverage you deserve.",
        },
        {
            question: "What should I do while waiting for emergency roof repair?",
            answer: "If safe to do so, place buckets under active leaks, move valuables away from the damaged area, take photos for insurance documentation, and avoid going on the roof yourself. If there's immediate danger, evacuate the area and call emergency services first, then call us for emergency roof repair.",
        },
        {
            question: "Do you handle emergency roof repair for commercial properties?",
            answer: "Yes, we provide emergency roof repair services for both residential and commercial properties. Our commercial emergency response includes flat roof repairs, membrane damage, drainage issues, and structural concerns that require immediate professional attention.",
        },
        {
            question: "How much does emergency roof repair cost?",
            answer: "Emergency roof repair costs vary based on the extent of damage, time of service, and materials needed. We provide upfront pricing and work with insurance companies when applicable. Our priority is stopping further damage quickly and cost-effectively, with permanent repair options discussed once the emergency is stabilized."
        }
    ];

    return (
        <FAQSection
        title={`Frequently Asked Questions About Emergency Roof Repair in ${locationName}`}
        faqs={emergencyFaqData}
        />
    );
}

export default async function EmergencyRoofRepairPage({params}: {params: Promise<{slug: string}>}) {
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
                    mainText={`Emergency Roof Repair ${location.name} | 24/7 Response`}
                    subText={`Immediate emergency roof repair services in ${location.name}. Available 24/7 for storm damage, roof leaks, and urgent roofing emergencies. Licensed contractors respond within hours - don't wait, call now for instant help!`}
                    imgSrc="/images/dynamic/emergency/hero.webp"
                    imgAlt={`Emergency roof repair team responding in ${location.name}`}
                />

                {/* URGENT Emergency Contact Banner */}
                <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="relative max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold text-lg">EMERGENCY ACTIVE</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    Roof Emergency in {location.name}?
                                </h2>
                                <p className="text-red-100 text-lg">
                                    Don&apos;t wait! Active leaks cause thousands in damage every hour.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:2157997663"
                                    className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 font-bold text-xl rounded-lg transition-colors shadow-lg text-center"
                                >
                                    📞 CALL NOW: (215) 799-7663
                                </a>
                                <div className="text-center text-white">
                                    <div className="text-sm opacity-90">Response Time</div>
                                    <div className="text-2xl font-bold">1-2 Hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Services Overview */}
                <InfoSection
                    imgSrc="/images/dynamic/emergency/img1.webp"
                    imgAlt={`Emergency roof repair response in ${location.name}`}
                    title={`24/7 Emergency Roof Repair Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <p>
                                When roofing emergencies strike {location.name}, every minute counts. Our <strong>emergency roof repair</strong> team provides immediate response for storm damage, active leaks, and urgent roofing situations that threaten your home and family. Available 24/7, 365 days a year, we&apos;re the <strong>emergency roof repair</strong> specialists {location.name} residents trust most.
                            </p>
                            <p className="mt-4">
                                From severe storm damage to sudden roof collapse, our <strong>emergency roof repair</strong> experts respond rapidly with professional equipment and materials to stop further damage. We provide immediate temporary protection followed by permanent <strong>emergency roof repair</strong> solutions that restore your home&apos;s safety and security.
                            </p>
                        </div>
                    }
                    bottomContent={`Don't let a roofing emergency become a disaster. Our emergency roof repair team is standing by 24/7 to protect your ${location.name} home with immediate response and professional expertise you can trust.`}
                    imagePosition="right"
                />

                {/* Emergency Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large" className="text-red-600">
                                Emergency Roof Repair Services in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                Comprehensive emergency roof repair services available 24/7 throughout {location.name}. From immediate response to permanent solutions, we handle every type of roofing emergency.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={emergencyServices} />
                    </div>
                </section>

                {/* Immediate Response Process */}
                <Row
                    title={`Our Emergency Roof Repair Response Process in ${location.name}`}
                    description={
                        <div>
                            <p>
                                When you call for <strong>emergency roof repair</strong> in {location.name}, our response is immediate and systematic. We dispatch the nearest certified emergency crew within minutes, arriving with professional equipment and materials to assess damage and provide immediate protection for your home.
                            </p>
                            <p className="mt-4">
                                Our <strong>emergency roof repair</strong> process includes rapid damage assessment, immediate temporary protection (emergency tarping when needed), documentation for insurance purposes, and coordination of permanent repair services. We keep you informed every step of the way while prioritizing your family&apos;s safety and property protection.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/emergency/img2.webp"
                    headerColor="text-red-600"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                {/* Storm Damage Expertise */}
                <Row
                    title={`Storm Damage Emergency Roof Repair Specialists`}
                    description={
                        <div>
                            <p>
                                {location.name} weather can be unpredictable and severe. Our <strong>emergency roof repair</strong> team specializes in storm damage including hail damage, wind damage, tree impact, and severe weather destruction. We understand how quickly storm damage can escalate and respond accordingly with rapid assessment and immediate protection.
                            </p>
                            <p className="mt-4">
                                From emergency tarping and temporary repairs to comprehensive storm damage restoration, our <strong>emergency roof repair</strong> specialists work directly with insurance companies to streamline claims and ensure you receive the coverage you deserve. We document everything thoroughly and provide detailed reports for seamless insurance processing.
                            </p>
                        </div>
                    }
                    imageSrc="/images/dynamic/emergency/img3.webp"
                    reverse={true}
                    headerColor="text-red-600"
                    className="py-16"
                />

                {/* Emergency Response Advantages */}
                <IncentivesSection
                    className="py-16"
                    title={`Why Choose Our Emergency Roof Repair in ${location.name}`}
                    titleAs="h2"
                    subtitle={`When roofing emergencies strike, you need immediate professional response. Discover why ${location.name} residents trust our emergency roof repair team for rapid, reliable, and professional emergency services.`}
                    heroImage={{
                        alt: `Emergency roof repair team arriving in ${location.name}`,
                        src: "/images/dynamic/emergency/img4.webp"
                    }}
                    incentives={[
                        {
                            name: "Immediate Response",
                            description: "24/7 emergency roof repair response with typical arrival times of 1-2 hours for urgent situations throughout the service area.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "Immediate emergency response icon"
                        },
                        {
                            name: "Professional Equipment",
                            description: "Fully equipped emergency vehicles with professional-grade tarps, tools, and materials for immediate roof protection and repair.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Professional emergency equipment icon"
                        },
                        {
                            name: "Insurance Expertise",
                            description: "Direct insurance company coordination with detailed documentation and streamlined claims processing for emergency roof repair coverage.",
                            imageSrc: "/images/siding/siding-service/siding-installation-page/icons/handshake.svg",
                            imageAlt: "Insurance coordination icon"
                        },
                        {
                            name: "Licensed & Insured",
                            description: "Fully licensed emergency roof repair contractors with comprehensive insurance coverage for your complete protection and peace of mind.",
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Licensed and insured contractors icon"
                        }
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                {/* Emergency Preparation Tips */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2">Emergency Roof Repair Preparation</HeaderText>
                            <SecondaryText>
                                While waiting for our emergency roof repair team to arrive in {location.name}, here&apos;s what you should do to minimize damage and ensure safety.
                            </SecondaryText>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-red-600 font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold text-red-600 mb-3">Ensure Safety First</h3>
                                <p className="text-gray-700 text-sm">Move family members away from the damaged area. If there&apos;s immediate danger, evacuate and call emergency services before calling for roof repair.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-orange-600 font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold text-orange-600 mb-3">Minimize Water Damage</h3>
                                <p className="text-gray-700 text-sm">Place buckets under active leaks and move valuables away from the damaged area. Cover items with plastic if possible.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-yellow-600 font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold text-yellow-600 mb-3">Document Everything</h3>
                                <p className="text-gray-700 text-sm">Take photos and videos of all damage for insurance purposes. Document both exterior and interior damage thoroughly.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold text-blue-600 mb-3">Contact Insurance</h3>
                                <p className="text-gray-700 text-sm">Call your insurance company to report the damage and start the claims process. We can assist with this process.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-green-600 font-bold text-xl">5</span>
                                </div>
                                <h3 className="font-bold text-green-600 mb-3">Call Emergency Repair</h3>
                                <p className="text-gray-700 text-sm">Call our 24/7 emergency roof repair hotline immediately. The sooner we respond, the less damage your home will sustain.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-purple-600 font-bold text-xl">6</span>
                                </div>
                                <h3 className="font-bold text-purple-600 mb-3">Stay Off the Roof</h3>
                                <p className="text-gray-700 text-sm">Never attempt to repair emergency roof damage yourself. Wait for our professional emergency roof repair team to arrive safely.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Paragon */}
                <WhyParagonEmergencyRoofRepair
                    title={`Why ${location.name} Trusts Our Emergency Roof Repair`}
                    subTitle={`When roofing emergencies threaten your home, you need immediate professional response. Our emergency roof repair team combines rapid response with expert craftsmanship to protect your ${location.name} home when it matters most.`}
                    titleAs="h2"
                />



                {/* Enhanced FAQ */}
                <EmergencyRoofRepairFAQ locationName={location.name} />

            <GoogleReviews/>


                {/* Final CTA */}
                <GetEstimate location={location.name} />
            </div>
        </>
    );
}