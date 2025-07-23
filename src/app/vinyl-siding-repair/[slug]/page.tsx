// import HeaderText from "@/components/HeaderText";
// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import SecondaryText from "@/components/SecondaryText";
// import Hero from "@/components/service-page/Hero";
// import InfoSection from "@/components/service-page/Info";
// import IncentivesSection from "@/components/service-page/Incentive";
// import Row from "@/components/Row";
// import ServicesGrid from "@/components/service-page/Services";
// import FAQ from "@/components/FAQ";
// import {WhyParagonSiding} from "@/components/WhyParagon";
// import {Metadata} from "next";
// import {serviceAreas, Location} from "../../../../public/service-areas";
// import SidingMaterial from "@/components/siding/SidingMaterial";
// import FAQSection from "@/components/FAQSection";
// import GoogleReviews from "@/components/landing-ui/GoogleReviews";

// // needed to build static paths
// export async function generateStaticParams() {
//     return Object.keys(serviceAreas).map((slug) => ({slug}))
// }

// export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     return {
//         title: `Vinyl Siding Repair in ${location?.name} | Expert Repair Services`,
//         description: `Professional vinyl siding repair in ${location.name}. We fix storm damage, cracks, loose panels, and all vinyl siding problems.`,
//         keywords: `vinyl siding repair ${location.name}, siding repair, vinyl siding fix, storm damage repair, siding crack repair, vinyl panel replacement`,
//         openGraph: {
//             title: `Vinyl Siding Repair in ${location?.name} | Paragon Exterior`,
//             description: `Expert vinyl siding repair serving ${location.name}. Storm damage repair, crack fixes, panel replacement, and all vinyl siding repair needs.`,
//             type: 'website',
//             images: ['/images/vinyl-siding-repair-hero.jpg'],
//         },
//     };
// }

// // Enhanced structured data for vinyl siding repair services
// const generateStructuredData = (location: Location) => ({
//     "@context": "https://schema.org",
//     "@type": "HomeAndConstructionBusiness",
//     "name": "Paragon Exterior",
//     "description": `Professional vinyl siding repair in ${location.name} specializing in storm damage repair, crack fixes, panel replacement, and all vinyl siding repair services.`,
//     "url": `https://www.paragonexterior.com/vinyl-siding-repair/${location.name}`,
//     "telephone": "(215) 799-7663",
//     "email": "info@paragonexterior.com",
//     "image": "https://www.paragonexterior.com/icon.png",
//     "priceRange": "$$",
//     "address": {
//         "@type": "PostalAddress",
//         "addressLocality": location.name,
//         "addressRegion": location.name || "PA",
//         "addressCountry": "US"
//     },
//     "areaServed": {
//         "@type": "AdministrativeArea",
//         "name": location.name
//     },
// });

// // Custom vinyl siding repair FAQ for local areas
// function VinylSidingRepairFAQ({locationName}: {locationName: string}) {
//     const vinylRepairFaqData = [
//         {
//             question: `Do you provide vinyl siding repair in ${locationName}?`,
//             answer: `Yes, we offer complete vinyl siding repair services throughout ${locationName} and nearby areas. Our team fixes storm damage, cracks, loose panels, and all vinyl siding problems with expert techniques and perfect color matching.`,
//         },
//         {
//             question: "How much does vinyl siding repair cost?",
//             answer: "Vinyl siding repair costs depend on the damage type and size. Small crack repairs start around $150-300, while panel replacement runs $200-500 per panel. We provide free estimates for all vinyl siding repair work.",
//         },
//         {
//             question: "Can you match old vinyl siding colors?",
//             answer: "Yes, our vinyl siding repair experts can match most vinyl siding colors, even older or discontinued ones. We use advanced color matching techniques to ensure your repairs blend perfectly with existing siding.",
//         },
//         {
//             question: "How long does vinyl siding repair take?",
//             answer: "Most vinyl siding repair jobs take 1-2 days depending on the damage extent. Small repairs like crack fixes can be completed in a few hours, while larger panel replacements may take longer.",
//         },
//         {
//             question: "Do you fix storm damage to vinyl siding?",
//             answer: "Absolutely! We specialize in vinyl siding repair for storm damage including hail damage, wind damage, and impact damage. We work with insurance companies and provide detailed damage assessments for claims.",
//         },
//         {
//             question: "Is it better to repair or replace damaged vinyl siding?",
//             answer: "This depends on the damage extent and siding age. Minor damage like small cracks or loose panels are perfect for vinyl siding repair. Extensive damage or very old siding may need replacement, which we'll discuss during your free estimate.",
//         }
//     ];

//     return (
//         <FAQSection
//             faqs={vinylRepairFaqData}
//             title={`Vinyl Siding Repair FAQ for ${locationName}`}
//         />
//     );
// }

// export default async function VinylSidingRepairPage({params}: {params: Promise<{slug: string}>}) {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     if (!location) return <div>Area not found.</div>;

//     return (
//         <>
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}}
//             />

//             <div className="min-h-screen">
//                 {/* Enhanced Hero Section */}
//                 <Hero
//                     mainText={`Vinyl Siding Repair in ${location.name} | Fast & Affordable Fixes`}
//                     subText={`Expert vinyl siding repair in ${location.name} for storm damage, cracks, loose panels, and all vinyl siding problems. Professional repairs that look perfect and last for years. Get your free vinyl siding repair estimate today.`}
//                     imgSrc="/images/siding/vinyl/hero.jpg"
//                     imgAlt={`Professional vinyl siding repair team in ${location.name}`}
//                 />

//                 {/* Main Vinyl Siding Repair Overview */}
//                 <InfoSection
//                     imgSrc="/images/siding/vinyl/vinyl1.webp"
//                     imgAlt={`Vinyl siding repair work in ${location.name}`}
//                     title={`Professional Vinyl Siding Repair Services in ${location.name}`}
//                     titleAs="h1"
//                     mainContent={
//                         <div>
//                             <SecondaryText>
//                                 When your vinyl siding gets damaged, you can trust Paragon Exterior for fast and reliable <strong>vinyl siding repair</strong> services. We provide expert <strong>vinyl siding repair</strong> services throughout the {location.name} area, fixing everything from storm damage to everyday wear and tear. Our skilled team makes your vinyl siding look like new again.
//                             </SecondaryText>
//                             <SecondaryText className="mt-4">
//                                 We handle all types of vinyl siding damage, including crack fixes, panel replacement, storm damage repair, and color matching. Don't let damaged vinyl siding hurt your home's protection or appearance. Our professional <strong>vinyl siding repair</strong> services restore your home's beauty and keep it safe from weather damage.
//                             </SecondaryText>
//                         </div>
//                     }
//                     bottomContent={`Trust Paragon Exterior for all your vinyl siding repair needs in ${location.name}. We use quality materials and proven techniques to make repairs that last. Your satisfaction is guaranteed on every vinyl siding repair job.`}
//                     imagePosition="right"
//                 />

//                 {/* Comprehensive Vinyl Siding Repair Services Grid */}
//                 <section className="py-16 bg-gray-50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <div className="text-center mb-12">
//                             <HeaderText as="h2" variant="large">
//                                 Complete Vinyl Siding Repair Solutions in {location.name}
//                             </HeaderText>
//                             <SecondaryText>
//                                 Our vinyl siding repair experts fix all types of damage quickly and affordably. From small cracks to major storm damage, we handle every vinyl siding repair need in {location.name}.
//                             </SecondaryText>
//                         </div>

//                         {/* <ServicesGrid services={vinylSidingRepairServices} /> */}
//                     </div>
//                 </section>

//                 {/* Storm Damage Vinyl Siding Repair Focus */}
//                 <Row
//                     title={`Storm Damage Vinyl Siding Repair in ${location.name}`}
//                     description={
//                         <div>
//                             <SecondaryText>
//                                 Storms and string winds can cause serious damage to your vinyl siding, but our expert <strong>vinyl siding repair</strong> team can fix it all. We repair hail damage, wind damage, and impact damage from fallen branches or debris. Our <strong>vinyl siding repair</strong> specialists work with insurance companies to make the process easy for you.
//                             </SecondaryText>
//                             <SecondaryText className="mt-4">
//                                 After storm damage, it&apos;s important to quickly repair any damage to prevent water damage inside your home. We provide emergency vinyl siding repair services and can often start repairs within 24-48 hours. Don&apos;t wait - storm-damaged vinyl siding needs professional repair right away.
//                             </SecondaryText>
//                         </div>
//                     }
//                     imageSrc="/images/siding/vinyl/vinyl2.webp"
//                     headerColor="text-primaryblue"
//                     bodyColor="text-gray-700"
//                     className="py-16"
//                 />

//                 {/* Crack and Panel Vinyl Siding Repair */}
//                 <Row
//                     title={`Crack Repair and Panel Replacement Services`}
//                     description={
//                         <div>
//                             <SecondaryText>
//                                 Cracked or split vinyl siding needs immediate attention to prevent bigger problems. These usually come about from wear and tear over the years. Our <strong>vinyl siding repair</strong> experts fix cracks of all sizes using proven techniques that stop the damage from spreading. For panels that can't be repaired, we provide perfect panel replacement services.
//                             </SecondaryText>
//                             <SecondaryText className="mt-4">
//                                 Every <strong>vinyl siding repair</strong> job includes careful color matching to ensure that your home looks amazing. We keep a large inventory of vinyl siding and can match even older or discontinued colors. The repair job will blend perfectly with your existing siding.
//                             </SecondaryText>
//                         </div>
//                     }
//                     imageSrc="/images/siding/vinyl/vinyl3.webp"
//                     reverse={true}
//                     headerColor="text-primaryblue"
//                     bodyColor="text-gray-700"
//                     className="py-16"
//                 />

//                 {/* Why Repair Instead of Replace */}
//                 <Row
//                     title={`Why Choose Vinyl Siding Repair Over Full Replacement`}
//                     description={
//                         <div>
//                             <SecondaryText>
//                                 <strong>Vinyl siding repair</strong> is often the smart choice when damage is limited to specific areas. Professional <strong>vinyl siding repair</strong> costs much less than full replacement and can be completed in just 1-2 days. When done correctly, vinyl siding repairs can last for many years.
//                             </SecondaryText>
//                             <SecondaryText className="mt-4">
//                                 Our <strong>vinyl siding repair</strong> services can fix most problems including loose panels, small holes, cracks, and fading. We only recommend replacement when the damage is too extensive or the siding is very old. Most homeowners in {location.name} are surprised how good their home looks after professional <strong>vinyl siding repair</strong>.
//                             </SecondaryText>
//                         </div>
//                     }
//                     imageSrc="/images/siding/vinyl/vinyl4.avif"
//                     headerColor="text-primaryblue"
//                     bodyColor="text-gray-700"
//                     className="py-16"
//                 />

//                 {/* Vinyl Siding Repair Advantages */}
//                 <IncentivesSection
//                     className="py-16"
//                     title={`Why Choose Our Vinyl Siding Repair Services in ${location.name}`}
//                     titleAs="h2"
//                     subtitle={`Professional expertise meets affordable pricing. Discover why ${location.name} homeowners trust Paragon Exterior for all their vinyl siding repair needs.`}
//                     heroImage={{
//                         alt: `Professional vinyl siding repair work in ${location.name}`,
//                         src: '/images/siding/siding3.webp'
//                     }}
//                     incentives={[
//                         {
//                             name: "Expert Repairs",
//                             description: "Professional vinyl siding repair using the right tools and techniques for long-lasting results that look perfect.",
//                             imageSrc: "/images/siding/engineered/icons/hammer.svg",
//                             imageAlt: "Expert vinyl siding repair icon"
//                         },
//                         {
//                             name: "Color Matching",
//                             description: "Perfect color matching for vinyl siding repair so your fixes blend seamlessly with existing siding.",
//                             imageSrc: "/images/siding/engineered/icons/log.svg",
//                             imageAlt: "Vinyl siding color matching icon"
//                         },
//                         {
//                             name: "Fast Service",
//                             description: "Quick vinyl siding repair services that get your home protected and looking great again in 1-2 days.",
//                             imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
//                             imageAlt: "Fast vinyl siding repair icon"
//                         },
//                         {
//                             name: "Fair Pricing",
//                             description: "Affordable vinyl siding repair costs with upfront pricing and no hidden fees. Quality repairs that fit your budget.",
//                             imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
//                             imageAlt: "Affordable vinyl siding repair icon"
//                         }
//                     ]}
//                     imagePosition="left"
//                     incentiveColumns={2}
//                 />

//                 <div>
//                     <SidingMaterial />
//                 </div>

//                 <GoogleReviews />

//                 {/* Why Choose Paragon */}
//                 <WhyParagonSiding
//                     title={`Why ${location.name} Chooses Paragon Exterior for Vinyl Siding Repair`}
//                     subTitle={`Our reputation as ${location.name}'s top vinyl siding repair company is built on quality work, fair prices, and customer satisfaction. We make vinyl siding repair easy and stress-free.`}
//                     titleAs="h2"
//                 />

//                 {/* Enhanced FAQ */}
//                 <VinylSidingRepairFAQ locationName={location.name} />


//                 {/* Final CTA */}
//                 <GetEstimate location={location.name} />
//             </div>
//         </>
//     );
// }


import HeaderText from "@/components/HeaderText";
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

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Vinyl Siding Repair in ${location?.name} | Fast & Local Fixes`,
        description: `Need vinyl siding repair in ${location.name}? We fix cracks, storm damage, and loose panels fast. Get affordable, professional siding repair services from Paragon Exterior.`,
        keywords: `vinyl siding repair ${location.name}, siding repair near me, storm damage siding repair, siding panel replacement, siding contractors ${location.name}, local siding repair`,
        openGraph: {
            title: `Vinyl Siding Repair in ${location.name} | Paragon Exterior`,
            description: `Top-rated vinyl siding repair in ${location.name}. Fast, affordable fixes for storm damage, cracks, and more. Free quotes from Paragon Exterior.`,
            type: "website",
            images: ["/images/vinyl-siding-repair-hero.jpg"],
        },
    };
}

const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Paragon Exterior",
    description: `Expert vinyl siding repair in ${location.name}. We fix cracks, storm damage, and loose panels for homes in ${location.name} with fast, reliable service.`,
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
            question: `Do you offer vinyl siding repair in ${locationName}?`,
            answer: `You bet! We’re your go-to team for vinyl siding repair all across ${locationName} and nearby areas. Whether it’s storm damage, cracks, or loose panels, we’ve got you covered with fast, reliable fixes.`,
        },
        {
            question: "Can you match the color of my siding?",
            answer: `Absolutely! We use fancy color-matching tools to make sure your new siding blends perfectly with the old stuff, even if it’s an older brand. Your home will look seamless!`,
        },
        {
            question: "How long does a typical vinyl siding repair take?",
            answer: `Most vinyl siding repair jobs in ${locationName} are done in just one day. Bigger projects, like fixing a whole wall, might take a bit longer, but we’ll give you a clear timeline upfront so you’re never left guessing.`,
        },
        {
            question: "Do you work with insurance claims?",
            answer: `Yes, we do! If your siding got wrecked by a storm, we’ll help you document the damage and work with your insurance company to make the repair process smooth and stress-free.`,
        },
        {
            question: "What types of damage do you fix?",
            answer: `We handle it all—cracks, holes, missing panels, loose siding, and storm damage. We even fix siding that’s pulling away from your house to keep water out and your home looking sharp.`,
        },
        {
            question: `How much does vinyl siding repair in ${locationName} cost?`,
            answer: `Costs depend on the damage and size of the job, but we keep it affordable. We’ll check out your siding, give you a free, no-pressure quote, and explain everything clearly so you know exactly what to expect.`,
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
                    mainText={`Top Vinyl Siding Repair in ${location.name}`}
                    subText={`Got cracked, loose, or storm-damaged siding? Paragon Exterior is your local ${location.name} expert for fast, affordable vinyl siding repair. Get your home looking great again with our top-notch service!`}
                    imgSrc="/images/siding/vinyl/hero.jpg"
                    imgAlt={`Vinyl siding repair services in ${location.name}`}
                />

                <InfoSection
                    imgSrc="/images/siding/vinyl/vinyl1.webp"
                    imgAlt={`Expert siding repair technician in ${location.name}`}
                    title={`Professional Vinyl Siding Repair Services in ${location.name}`}
                    titleAs="h1"
                    mainContent={<SecondaryText>
                        Is your home’s vinyl siding looking rough? Whether it’s cracked from a storm, loose from age, or damaged by an accident, our team at Paragon Exterior in ${location.name} can fix it fast. We specialize in vinyl siding repair, tackling everything from small cracks to missing panels or entire walls. Our goal? Make your home look as good as new while protecting it from water damage and boosting its curb appeal. We use high-quality materials and expert techniques to ensure your siding is sturdy and matches perfectly. Plus, we’re local to ${location.name}, so we know the weather challenges your home faces and how to fix them right.
                    </SecondaryText>}
                    bottomContent={`Ready to fix your siding? Call us for vinyl siding repair in ${location.name}. We offer free quotes, honest pricing, and same-day service for most jobs. Let’s get your home back in top shape!`}
                    imagePosition="right"
                />

                <Row
                    title="Storm & Wind Damage Siding Repairs"
                    description={<SecondaryText>
                        Storms in ${location.name} can be brutal on your home’s siding. High winds, hail, or flying debris can rip off panels, crack your siding, or leave ugly holes. Don’t worry—our team at Paragon Exterior is here to help! We specialize in storm damage siding repair, quickly fixing or replacing damaged vinyl siding to protect your home from leaks and further damage. We’ll even check for hidden issues, like water sneaking behind your siding, and help with insurance claims if your damage is covered. Our repairs are built to last, so your home stays safe and looks great no matter what the weather throws at it. Get your free quote today and let’s restore your siding!
                    </SecondaryText>}
                    imageSrc="/images/siding/vinyl/vinyl2.webp"
                    headerColor="text-primaryblue"
                    className="py-16"
                />

                <Row
                    title="Fixing Cracks, Holes, and Loose Siding"
                    description={<SecondaryText>
                        Got a crack in your siding or a panel that’s pulling away from your house? Maybe there’s a hole from a rogue baseball or loose siding flapping in the wind. Whatever the issue, our ${location.name} vinyl siding repair pros can handle it. We patch cracks, secure loose panels, and replace broken or missing pieces to make your home look seamless again. Our repairs don’t just fix the look—they stop water from sneaking in, which can cause mold or rot. We use color-matching tech to ensure your new siding blends perfectly, so no one will know there was ever a problem. Call us for siding repair near you and see the Paragon difference!
                    </SecondaryText>}
                    imageSrc="/images/siding/vinyl/vinyl3.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    className="py-16"
                />

                <IncentivesSection
                    className="py-16"
                    title={`Why Choose Paragon for Vinyl Siding Repair in ${location.name}?`}
                    subtitle="Fast, friendly, and local siding repair experts you can trust."
                    heroImage={{src: "/images/siding/siding3.webp", alt: `Professional vinyl siding repair in ${location.name}`}}
                    incentives={[
                        {name: "Lightning-Fast Quotes", description: "We get back to you quick with clear, no-nonsense pricing for your siding repair.", imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg"},
                        {name: "Local ${location.name} Experts", description: `We’re based right here in ${location.name}, so we know the area and its weather challenges inside out.`, imageSrc: "/images/roof-service/metal/icons/seal-check.svg"},
                        {name: "Spotless Cleanup", description: "We leave your property cleaner than we found it, treating your home like our own.", imageSrc: "/images/siding/engineered/icons/hammer.svg"},
                        {name: "Perfect Color Matching", description: "Our repairs blend in seamlessly, making your siding look brand new.", imageSrc: "/images/siding/engineered/icons/log.svg"},
                    ]}
                    imagePosition="left"
                    incentiveColumns={2}
                />

                <SidingMaterial />

                <GoogleReviews />

                <WhyParagonSiding
                    title={`Why ${location.name} Homeowners Trust Paragon Exterior`}
                    subTitle="We’ve built a reputation in ${location.name} for honest work, fair prices, and siding repairs that last. Your home deserves the best—let us deliver it!"
                    titleAs="h2"
                />

                <VinylSidingRepairFAQ locationName={location.name} />

                <GetEstimate location={location.name} />


            </div>
        </>
    );
}