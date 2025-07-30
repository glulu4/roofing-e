import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import Row from "@/components/Row";
import {WhyParagonSiding} from "@/components/WhyParagon";
import {Metadata} from "next";
import {serviceAreas, Location} from "../../../../public/service-areas";
import SidingMaterial from "@/components/siding/SidingMaterial";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/landing-ui/GoogleReviews";
import HeaderText from "@/components/HeaderText";

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Vinyl Siding Repair in ${location?.name}`,
        description: `Professional vinyl siding repair in ${location.name}. We fix storm damage, cracks, loose panels, and color matching. Fast service with guaranteed results.`,
        keywords: `vinyl siding repair ${location.name}, storm damage repair, siding crack repair, panel replacement, color matching, exterior repair ${location.name}`,
        openGraph: {
            title: `Vinyl Siding Repair in ${location.name} | Paragon Exterior`,
            description: `Expert vinyl siding repair services in ${location.name}. Storm damage, cracks, and panel replacement with perfect color matching. Get your free estimate today.`,
            type: "website",
            images: ["/images/vinyl-siding-repair-hero.jpg"],
        },
    };
}

const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Paragon Exterior",
    description: `Professional vinyl siding repair services in ${location.name}. Specializing in storm damage repair, crack fixes, panel replacement, and color matching for lasting results.`,
    url: `https://www.paragonexterior.com/vinyl-siding-repair/${location.name}`,
    telephone: "(215) 799-7663",
    email: "info@paragonexterior.com",
    image: "https://www.paragonexterior.com/icon.png",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        addressLocality: location.name,
        addressRegion: location.name || "PA",
        addressCountry: "US",
    },
    areaServed: {
        "@type": "AdministrativeArea",
        name: location.name,
    },
});

function VinylSidingRepairFAQ({locationName}: {locationName: string}) {
    const faqs = [
        {
            question: `Do you provide vinyl siding repair services in ${locationName}?`,
            answer: `Yes, we offer complete vinyl siding repair throughout ${locationName} and surrounding areas. Our experienced team handles everything from minor crack repairs to major storm damage restoration with professional results.`,
        },
        {
            question: "Can you match the color of my existing siding?",
            answer: `Absolutely. We use advanced color matching technology to ensure perfect blends with your current siding, even for older or discontinued colors. Your repairs will be virtually invisible when complete.`,
        },
        {
            question: "How long does vinyl siding repair typically take?",
            answer: `Most repair projects in ${locationName} are completed within 1-2 days, depending on the extent of damage. We provide clear timelines upfront so you know exactly what to expect throughout the process.`,
        },
        {
            question: "Do you work with insurance companies for storm damage?",
            answer: `Yes, we regularly work with insurance providers to document storm damage and facilitate claims. We provide detailed assessments and work directly with adjusters to streamline the repair process.`,
        },
        {
            question: "What types of siding damage can you repair?",
            answer: `We repair cracks, holes, loose panels, storm damage, impact damage, and warping. We also address issues like water damage behind siding and can replace individual panels when repairs aren't sufficient.`,
        },
        {
            question: `When should I repair versus replace my vinyl siding?`,
            answer: `Minor damage like small cracks or isolated panel issues are perfect for repair. However, extensive damage, multiple problem areas, or signs of water infiltration typically require replacement for long-term protection.`,
        },
    ];

    return <FAQSection faqs={faqs} title={`Vinyl Siding Repair FAQ for ${locationName}`} />;
}

export default async function VinylSidingRepairPage({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}} />

            <div className="min-h-screen">
                <Hero
                    mainText={`Professional Vinyl Siding Repair in ${location.name}`}
                    subText={`Expert vinyl siding repair services for storm damage, cracks, loose panels, and wear. Our skilled team restores your home's protection and beauty with guaranteed results. Serving ${location.name} homeowners with fast, reliable repairs and perfect color matching.`}
                    imgSrc="/images/siding/vinyl/hero.jpg"
                    imgAlt={`Professional vinyl siding repair services in ${location.name}`}
                />

                <InfoSection
                    imgSrc="/images/siding/vinyl/vinyl1.webp"
                    imgAlt={`Expert vinyl siding repair technician working in ${location.name}`}
                    title={`Expert Vinyl Siding Repair Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={
                        <div>
                            <SecondaryText>
                                When your vinyl siding shows signs of damage, professional repair is essential to protect your home&apos;s structure and maintain its curb appeal. Paragon Exterior provides comprehensive <strong>vinyl siding repair</strong> services throughout {location.name}, addressing everything from minor cracks to major storm damage with precision and care.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our process begins with a thorough inspection to identify all damage, including hidden issues that might not be visible at first glance. We then develop a customized repair plan that addresses both immediate concerns and potential future problems. Whether you need crack sealing, panel replacement, or storm damage restoration, our team uses premium materials and proven techniques to ensure lasting results.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Trust Paragon Exterior for professional vinyl siding repair that protects your investment and enhances your home's value in ${location.name}. Every repair comes with our quality guarantee.`}
                    imagePosition="right"
                />

                <Row
                    title="Storm Damage and Emergency Repairs"
                    description={
                        <div>
                            <SecondaryText>
                                Severe weather in {location.name} can cause significant damage to vinyl siding, from hail impacts to wind-driven debris. When storm damage occurs, quick action is essential to prevent water infiltration and further structural problems. Our emergency repair team responds rapidly to assess damage and implement protective measures.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We document all storm damage thoroughly for insurance purposes and work directly with adjusters to ensure proper coverage. Our repairs not only restore your siding&apos;s appearance but also strengthen its resistance to future weather events. From minor dents to major panel replacement, we handle all levels of storm damage with professional expertise.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/siding/vinyl/vinyl2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                <Row
                    title="Crack Repair and Panel Replacement"
                    description={
                        <div>
                            <SecondaryText>
                                Cracks in vinyl siding may seem minor, but they can lead to serious problems if left untreated. Water can seep behind damaged panels, causing insulation damage, mold growth, and structural issues. Our crack repair process involves cleaning the damaged area, applying professional-grade sealants, and ensuring a watertight seal.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                When cracks are too extensive or panels are severely damaged, replacement becomes necessary. We carefully remove damaged sections and install new panels with perfect color matching. Our installation techniques ensure proper overlap, secure fastening, and optimal weather resistance for long-term performance.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/siding/vinyl/vinyl3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />

                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <HeaderText as="h2" className="text-center mb-12">
                            Complete Repair Solutions for {location.name} Homes
                        </HeaderText>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <HeaderText as="h3" className="mb-6">Professional Repair Methods</HeaderText>
                                <SecondaryText>
                                    Our repair process starts with a detailed damage assessment to identify all problem areas. For minor issues, we use advanced patching compounds and sealants that create lasting, weather-resistant repairs. Larger damage requires panel replacement using proper installation techniques that ensure seamless integration with existing siding.
                                </SecondaryText>
                            </div>
                            <div>
                                <HeaderText as="h3" className="mb-6">Color Matching Excellence</HeaderText>
                                <SecondaryText>
                                    Perfect color matching is crucial for invisible repairs. We maintain an extensive inventory of vinyl siding materials and use professional color matching tools to ensure new panels blend seamlessly with existing siding, even when dealing with older or discontinued colors.
                                </SecondaryText>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <HeaderText as="h3" className="mb-6">When to Repair vs. Replace</HeaderText>
                                <SecondaryText>
                                    Small cracks, minor holes, and isolated damage are ideal candidates for repair. However, extensive damage, multiple problem areas, or signs of water infiltration behind the siding typically indicate the need for replacement. We provide honest assessments to help you make the most cost-effective decision.
                                </SecondaryText>
                            </div>
                            <div>
                                <HeaderText as="h3" className="mb-6">Preventing Future Damage</HeaderText>
                                <SecondaryText>
                                    Regular maintenance and prompt attention to minor issues can prevent major problems. We provide guidance on identifying early warning signs and offer maintenance services to keep your siding in optimal condition throughout {location.name}&apos;s varying weather conditions.
                                </SecondaryText>
                            </div>
                        </div>
                    </div>
                </section>

                <IncentivesSection
                    className="py-16"
                    title={`Why Choose Paragon for Vinyl Siding Repair in ${location.name}?`}
                    titleAs="h2"
                    subtitle="Professional expertise, quality materials, and guaranteed results for all your siding repair needs."
                    heroImage={{src: "/images/siding/siding3.webp", alt: `Professional vinyl siding repair completion in ${location.name}`}}
                    incentives={[
                        {
                            name: "Expert Craftsmanship",
                            description: "Skilled technicians with years of experience in vinyl siding repair, ensuring quality work that lasts for years to come.",
                            imageSrc: "/images/siding/engineered/icons/hammer.svg",
                            imageAlt: "Expert craftsmanship icon"
                        },
                        {
                            name: "Perfect Color Matching",
                            description: "Advanced color matching technology ensures repairs blend seamlessly with your existing siding for invisible results.",
                            imageSrc: "/images/siding/engineered/icons/log.svg",
                            imageAlt: "Color matching icon"
                        },
                        {
                            name: `Local ${location.name} Knowledge`,
                            description: `Deep understanding of local weather patterns and building codes ensures repairs that withstand ${location.name}'s climate challenges.`,
                            imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
                            imageAlt: "Local expertise icon"
                        },
                        {
                            name: "Fast Response Times",
                            description: "Quick assessment and repair scheduling to minimize damage and restore your home's protection as soon as possible.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Fast response icon"
                        },
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />
                <SidingMaterial />

                <GoogleReviews />

                <WhyParagonSiding
                    title={`Why ${location.name} Homeowners Choose Paragon Exterior`}
                    subTitle={`Our commitment to quality craftsmanship, transparent pricing, and customer satisfaction has made us the trusted choice for vinyl siding repair in ${location.name}. We combine professional expertise with personalized service to deliver results that protect your investment and enhance your home's value.`}
                    titleAs="h2"
                />

                <VinylSidingRepairFAQ locationName={location.name} />


                <GetEstimate location={location.name} />

                
            </div>
        </>
    );
}