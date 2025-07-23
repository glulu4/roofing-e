// // import HeaderText from "@/components/HeaderText";
// // import GetEstimate from "@/components/landing-ui/GetEstimate";
// // import SecondaryText from "@/components/SecondaryText";
// // import Hero from "@/components/service-page/Hero";
// // import InfoSection from "@/components/service-page/Info";
// // import IncentivesSection from "@/components/service-page/Incentive";
// // import Row from "@/components/Row";
// // import {WhyParagonSiding} from "@/components/WhyParagon";
// // import {Metadata} from "next";
// // import {serviceAreas, Location} from "../../../../public/service-areas";
// // import SidingMaterial from "@/components/siding/SidingMaterial";
// // import FAQSection from "@/components/FAQSection";
// // import GoogleReviews from "@/components/landing-ui/GoogleReviews";

// // export async function generateStaticParams() {
// //     return Object.keys(serviceAreas).map((slug) => ({slug}));
// // }

// // export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
// //     const {slug} = await params;
// //     const location = serviceAreas[slug];
// //     return {
// //         title: `Vinyl Siding Repair in ${location?.name} | Fast & Local Fixes`,
// //         description: `Need vinyl siding repair in ${location.name}? We fix cracks, storm damage, and loose panels fast. Get affordable, professional siding repair services from Paragon Exterior.`,
// //         keywords: `vinyl siding repair ${location.name}, siding repair near me, storm damage siding repair, siding panel replacement, siding contractors ${location.name}, local siding repair`,
// //         openGraph: {
// //             title: `Vinyl Siding Repair in ${location.name} | Paragon Exterior`,
// //             description: `Top-rated vinyl siding repair in ${location.name}. Fast, affordable fixes for storm damage, cracks, and more. Free quotes from Paragon Exterior.`,
// //             type: "website",
// //             images: ["/images/vinyl-siding-repair-hero.jpg"],
// //         },
// //     };
// // }

// // const generateStructuredData = (location: Location) => ({
// //     "@context": "https://schema.org",
// //     "@type": "HomeAndConstructionBusiness",
// //     name: "Paragon Exterior",
// //     description: `Expert vinyl siding repair in ${location.name}. We fix cracks, storm damage, and loose panels for homes in ${location.name} with fast, reliable service.`,
// //     url: `https://www.paragonexterior.com/vinyl-siding-repair/${location.name}`,
// //     telephone: "(215) 799-7663",
// //     email: "info@paragonexterior.com",
// //     image: "https://www.paragonexterior.com/icon.png",
// //     priceRange: "$$",
// //     address: {
// //         "@type": "PostalAddress",
// //         addressLocality: location.name,
// //         addressRegion: location.name || "PA",
// //         addressCountry: "US",
// //     },
// //     areaServed: {
// //         "@type": "AdministrativeArea",
// //         name: location.name,
// //     },
// // });

// // function VinylSidingRepairFAQ({locationName}: {locationName: string}) {
// //     const faqs = [
// //         {
// //             question: `Do you offer vinyl siding repair in ${locationName}?`,
// //             answer: `You bet! We’re your go-to team for vinyl siding repair all across ${locationName} and nearby areas. Whether it’s storm damage, cracks, or loose panels, we’ve got you covered with fast, reliable fixes.`,
// //         },
// //         {
// //             question: "Can you match the color of my siding?",
// //             answer: `Absolutely! We use fancy color-matching tools to make sure your new siding blends perfectly with the old stuff, even if it’s an older brand. Your home will look seamless!`,
// //         },
// //         {
// //             question: "How long does a typical vinyl siding repair take?",
// //             answer: `Most vinyl siding repair jobs in ${locationName} are done in just one day. Bigger projects, like fixing a whole wall, might take a bit longer, but we’ll give you a clear timeline upfront so you’re never left guessing.`,
// //         },
// //         {
// //             question: "Do you work with insurance claims?",
// //             answer: `Yes, we do! If your siding got wrecked by a storm, we’ll help you document the damage and work with your insurance company to make the repair process smooth and stress-free.`,
// //         },
// //         {
// //             question: "What types of damage do you fix?",
// //             answer: `We handle it all—cracks, holes, missing panels, loose siding, and storm damage. We even fix siding that’s pulling away from your house to keep water out and your home looking sharp.`,
// //         },
// //         {
// //             question: `How much does vinyl siding repair in ${locationName} cost?`,
// //             answer: `Costs depend on the damage and size of the job, but we keep it affordable. We’ll check out your siding, give you a free, no-pressure quote, and explain everything clearly so you know exactly what to expect.`,
// //         },
// //     ];

// //     return <FAQSection faqs={faqs} title={`Vinyl Siding Repair FAQ for ${locationName}`} />;
// // }

// // export default async function VinylSidingRepairPage({params}: {params: Promise<{slug: string}>}) {
// //     const {slug} = await params;
// //     const location = serviceAreas[slug];
// //     if (!location) return <div>Area not found.</div>;

// //     return (
// //         <>
// //             <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}} />

// //             <div className="min-h-screen">
// //                 <Hero
// //                     mainText={`Top Vinyl Siding Repair in ${location.name}`}
// //                     subText={`Got cracked, loose, or storm-damaged siding? Paragon Exterior is your local ${location.name} expert for fast, affordable vinyl siding repair. Get your home looking great again with our top-notch service!`}
// //                     imgSrc="/images/siding/vinyl/hero.jpg"
// //                     imgAlt={`Vinyl siding repair services in ${location.name}`}
// //                 />

// //                 <InfoSection
// //                     imgSrc="/images/siding/vinyl/vinyl1.webp"
// //                     imgAlt={`Expert siding repair technician in ${location.name}`}
// //                     title={`Professional Vinyl Siding Repair Services in ${location.name}`}
// //                     titleAs="h1"
// //                     mainContent={<SecondaryText>
// //                         Is your home’s vinyl siding looking rough? Whether it’s cracked from a storm, loose from age, or damaged by an accident, our team at Paragon Exterior in ${location.name} can fix it fast. We specialize in vinyl siding repair, tackling everything from small cracks to missing panels or entire walls. Our goal? Make your home look as good as new while protecting it from water damage and boosting its curb appeal. We use high-quality materials and expert techniques to ensure your siding is sturdy and matches perfectly. Plus, we’re local to ${location.name}, so we know the weather challenges your home faces and how to fix them right.
// //                     </SecondaryText>}
// //                     bottomContent={`Ready to fix your siding? Call us for vinyl siding repair in ${location.name}. We offer free quotes, honest pricing, and same-day service for most jobs. Let’s get your home back in top shape!`}
// //                     imagePosition="right"
// //                 />

// //                 <Row
// //                     title="Storm & Wind Damage Siding Repairs"
// //                     description={<SecondaryText>
// //                         Storms in ${location.name} can be brutal on your home’s siding. High winds, hail, or flying debris can rip off panels, crack your siding, or leave ugly holes. Don’t worry—our team at Paragon Exterior is here to help! We specialize in storm damage siding repair, quickly fixing or replacing damaged vinyl siding to protect your home from leaks and further damage. We’ll even check for hidden issues, like water sneaking behind your siding, and help with insurance claims if your damage is covered. Our repairs are built to last, so your home stays safe and looks great no matter what the weather throws at it. Get your free quote today and let’s restore your siding!
// //                     </SecondaryText>}
// //                     imageSrc="/images/siding/vinyl/vinyl2.webp"
// //                     headerColor="text-primaryblue"
// //                     className="py-16"
// //                 />

// //                 <Row
// //                     title="Fixing Cracks, Holes, and Loose Siding"
// //                     description={<SecondaryText>
// //                         Got a crack in your siding or a panel that’s pulling away from your house? Maybe there’s a hole from a rogue baseball or loose siding flapping in the wind. Whatever the issue, our ${location.name} vinyl siding repair pros can handle it. We patch cracks, secure loose panels, and replace broken or missing pieces to make your home look seamless again. Our repairs don’t just fix the look—they stop water from sneaking in, which can cause mold or rot. We use color-matching tech to ensure your new siding blends perfectly, so no one will know there was ever a problem. Call us for siding repair near you and see the Paragon difference!
// //                     </SecondaryText>}
// //                     imageSrc="/images/siding/vinyl/vinyl3.webp"
// //                     reverse={true}
// //                     headerColor="text-primaryblue"
// //                     className="py-16"
// //                 />

// //                 <IncentivesSection
// //                     className="py-16"
// //                     title={`Why Choose Paragon for Vinyl Siding Repair in ${location.name}?`}
// //                     subtitle="Fast, friendly, and local siding repair experts you can trust."
// //                     heroImage={{src: "/images/siding/siding3.webp", alt: `Professional vinyl siding repair in ${location.name}`}}
// //                     incentives={[
// //                         {name: "Lightning-Fast Quotes", description: "We get back to you quick with clear, no-nonsense pricing for your siding repair.", imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg"},
// //                         {name: "Local ${location.name} Experts", description: `We’re based right here in ${location.name}, so we know the area and its weather challenges inside out.`, imageSrc: "/images/roof-service/metal/icons/seal-check.svg"},
// //                         {name: "Spotless Cleanup", description: "We leave your property cleaner than we found it, treating your home like our own.", imageSrc: "/images/siding/engineered/icons/hammer.svg"},
// //                         {name: "Perfect Color Matching", description: "Our repairs blend in seamlessly, making your siding look brand new.", imageSrc: "/images/siding/engineered/icons/log.svg"},
// //                     ]}
// //                     imagePosition="left"
// //                     incentiveColumns={2}
// //                 />

// //                 <SidingMaterial />

// //                 <GoogleReviews />

// //                 <WhyParagonSiding
// //                     title={`Why ${location.name} Homeowners Trust Paragon Exterior`}
// //                     subTitle="We’ve built a reputation in ${location.name} for honest work, fair prices, and siding repairs that last. Your home deserves the best—let us deliver it!"
// //                     titleAs="h2"
// //                 />

// //                 <VinylSidingRepairFAQ locationName={location.name} />

// //                 <GetEstimate location={location.name} />


// //             </div>
// //         </>
// //     );
// // }

// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import SecondaryText from "@/components/SecondaryText";
// import Hero from "@/components/service-page/Hero";
// import InfoSection from "@/components/service-page/Info";
// import IncentivesSection from "@/components/service-page/Incentive";
// import Row from "@/components/Row";
// import {WhyParagonSiding} from "@/components/WhyParagon";
// import {Metadata} from "next";
// import {serviceAreas, Location} from "../../../../public/service-areas";
// import SidingMaterial from "@/components/siding/SidingMaterial";
// import FAQSection from "@/components/FAQSection";
// import GoogleReviews from "@/components/landing-ui/GoogleReviews";
// import HeaderText from "@/components/HeaderText";

// export async function generateStaticParams() {
//     return Object.keys(serviceAreas).map((slug) => ({slug}));
// }

// export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     return {
//         title: `Vinyl Siding Repair in ${location?.name} | Fast & Local Fixes`,
//         description: `Need vinyl siding repair in ${location.name}? Learn repair methods, DIY tips, and signs of damage.`,
//         keywords: `vinyl siding repair ${location.name}, siding repair near me, storm damage siding repair, DIY siding repair, vinyl siding replacement, siding damage signs ${location.name}`,
//         openGraph: {
//             title: `Vinyl Siding Repair in ${location.name} | Paragon Exterior`,
//             description: `Expert vinyl siding repair in ${location.name}. Get tips on DIY repairs, spot damage signs, and book a free quote with Paragon Exterior today!`,
//             type: "website",
//             images: ["/images/vinyl-siding-repair-hero.jpg"],
//         },
//     };
// }

// const generateStructuredData = (location: Location) => ({
//     "@context": "https://schema.org",
//     "@type": "HomeAndConstructionBusiness",
//     name: "Paragon Exterior",
//     description: `Top vinyl siding repair in ${location.name}. We offer DIY tips, fix storm damage, and replace siding when needed. Serving ${location.name} with expert service.`,
//     url: `https://www.paragonexterior.com/vinyl-siding-repair/${location.name}`,
//     telephone: "(215) 799-7663",
//     email: "info@paragonexterior.com",
//     image: "https://www.paragonexterior.com/icon.png",
//     priceRange: "$$",
//     address: {
//         "@type": "PostalAddress",
//         addressLocality: location.name,
//         addressRegion: location.name || "PA",
//         addressCountry: "US",
//     },
//     areaServed: {
//         "@type": "AdministrativeArea",
//         name: location.name,
//     },
// });

// function VinylSidingRepairFAQ({locationName}: {locationName: string}) {
//     const faqs = [
//         {
//             question: `Do you offer vinyl siding repair in ${locationName}?`,
//             answer: `You bet! We’re your go-to team for vinyl siding repair all across ${locationName} and nearby areas. Whether it’s storm damage, cracks, or loose panels, we’ve got you covered with fast, reliable fixes.`,
//         },
//         {
//             question: "Can you match the color of my siding?",
//             answer: `Absolutely! We use cool color-matching tools to make your new siding blend perfectly with the old stuff, even if it’s an older brand. Your home will look seamless!`,
//         },
//         {
//             question: "How long does a vinyl siding repair take?",
//             answer: `Most vinyl siding repair jobs in ${locationName} are done in one day. Bigger fixes, like a whole wall, might take a bit longer, but we’ll give you a clear timeline so you’re in the loop.`,
//         },
//         {
//             question: "Do you work with insurance claims?",
//             answer: `Yes, we do! If a storm wrecked your siding, we’ll help document the damage and team up with your insurance to make repairs smooth and easy.`,
//         },
//         {
//             question: "What types of damage do you fix?",
//             answer: `We handle cracks, holes, missing panels, loose siding, and storm damage. We even fix siding pulling away from your house to keep water out and your home looking sharp.`,
//         },
//         {
//             question: `How do I know if my siding needs repair or replacement?`,
//             answer: `If it’s just small cracks or holes, a repair might do. But if you see big damage, water leaks, or mold, it might be time for replacement. We’ll check it out and let you know what’s best for your home.`,
//         },
//     ];

//     return <FAQSection faqs={faqs} title={`Vinyl Siding Repair FAQ for ${locationName}`} />;
// }

// export default async function VinylSidingRepairPage({params}: {params: Promise<{slug: string}>}) {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     if (!location) return <div>Area not found.</div>;

//     return (
//         <>
//             <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}} />

//             <div className="min-h-screen">
//                 <Hero
//                     mainText={`Top Vinyl Siding Repair in ${location.name}`}
//                     subText={`Struggling with damaged vinyl siding? Whether you're dealing with cracks, fading, or storm-worn panels, Paragon Exterior offers expert vinyl siding repair in ${location.name}. Discover comprehensive solutions, DIY repair tips, and professional services—all designed to restore your home’s curb appeal and improve durability. Get your free quote today!`}
//                     imgSrc="/images/siding/vinyl/hero.jpg"
//                     imgAlt={`Expert vinyl siding repair and maintenance in ${location.name}`}
//                 />

//                 <InfoSection
//                     imgSrc="/images/siding/vinyl/vinyl1.webp"
//                     imgAlt={`Skilled siding repair technician at work in ${location.name}`}
//                     title={`Professional Vinyl Siding Repair Services in ${location.name}`}
//                     titleAs="h1"
//                     mainContent={
//                         <SecondaryText>
//                             Is your home's vinyl siding showing signs of wear in {location.name}? Whether it's due to severe weather, age-related deterioration, or unexpected accidents, Paragon Exterior is committed to restoring your siding to its original beauty. Our process begins with a thorough inspection to identify everything from minor cracks and discoloration to more significant structural damage. We offer both patching techniques and full panel replacements, ensuring that every repair not only improves the look of your home but also enhances its protection from water damage, mold, and energy loss.
//                             <br /><br />
//                             In addition to our expert repair solutions, we provide valuable DIY tips for small-scale fixes and routine maintenance advice. With a focus on sustainability and quality, our team uses top-grade materials and innovative methods to ensure a long-lasting, seamless finish. Trust Paragon Exterior for reliable vinyl siding repair that improves your home's energy efficiency and overall market value in {location.name}.
//                         </SecondaryText>
//                     }
//                     bottomContent={`Ready to transform your home’s exterior? Call us for comprehensive vinyl siding repair in ${location.name} and take the first step towards lasting quality and beauty!`}
//                     imagePosition="right"
//                 />

//                 <Row
//                     title="Storm & Wind Damage Siding Repairs"
//                     description={
//                         <SecondaryText>
//                             Severe weather in {location.name} can lead to extensive damage to your vinyl siding. High winds, hail storms, and even falling debris can cause cracks, holes, and loose panels that expose your home to further risks such as water intrusion and mold formation. Our experienced team at Paragon Exterior specializes in storm damage vinyl siding repairs, using advanced techniques to secure and restore your siding quickly. We meticulously inspect your property for hidden damage, ensuring that every repair is done to the highest standard. With our expert repair services, we make sure that your siding not only looks renewed but also performs optimally through future weather challenges.
//                             <br /><br />
//                             Enhance the longevity and safety of your home with our trusted repair methods, ideal for mitigating storm-related damages. Whether it’s a minor touch-up or a major overhaul, we deliver services designed to stand up to even the harshest weather conditions.
//                         </SecondaryText>
//                     }
//                     imageSrc="/images/siding/vinyl/vinyl2.webp"
//                     headerColor="text-primaryblue"
//                     className="py-16"
//                 />

//                 <Row
//                     title="Fixing Cracks, Holes, and Loose Siding"
//                     description={
//                         <SecondaryText>
//                             When your vinyl siding starts showing cracks, holes, or loose sections, it’s a clear sign that immediate attention is needed in {location.name}. These issues can compromise the integrity of your home's exterior, leading to water damage, energy inefficiency, and further structural problems. Our vinyl siding repair experts specialize in addressing these challenges head-on—sealing cracks with premium caulks, replacing damaged panels, and reinforcing weak sections to restore your siding's protective barrier.
//                             <br /><br />
//                             We believe in a proactive approach to siding maintenance. For minor damages, we recommend DIY repair kits coupled with our expert advice, ensuring you have all the information to make informed decisions. For more severe damage or signs of mold and water infiltration, our professional repair services are the safe choice. Let us help you safeguard your investment and enhance your home’s aesthetic and functional appeal.
//                         </SecondaryText>
//                     }
//                     imageSrc="/images/siding/vinyl/vinyl3.webp"
//                     reverse={true}
//                     headerColor="text-primaryblue" 
//                     className="py-16"
//                 />

//                 <div className="px-8 sm:w-5/6 mx-auto text-center py-12">
//                     <HeaderText className="my-12 pb-4">Repair Methods for Vinyl Siding in {location.name}</HeaderText>
//                     <SecondaryText>
//                         Wondering how to fix your siding? At Paragon Exterior, we start by checking how bad the damage is on your {location.name} home. For small holes or cracks, we use a patching compound or caulk to seal them up tight—always cleaning the area first for a smooth finish. Bigger holes or damaged sections might need a full panel replacement to keep your home safe. We match the siding color perfectly so it looks seamless, and our pros use top-notch techniques to handle everything from storm dents to wear-and-tear cracks. Let us show you how to get your siding back in shape!
//                     </SecondaryText>

//                     <HeaderText className="my-12 pb-4">DIY Repair Tips for {location.name} Homeowners</HeaderText>
//                     <SecondaryText>
//                         Want to tackle a quick fix yourself? For minor siding damage like small holes, cracks, or dents in {location.name}, DIY repairs can work! Grab a vinyl repair kit, some exterior filler, and paint, or just use caulk to patch small spots. It’s easy—just clean the area and follow the steps. But if you spot bigger damage, water leaks, or mold, skip the DIY and call us. Professional replacement might be the way to go, and our team can guide you to avoid costly mistakes. Try a patch job for fun, but leave the tough stuff to Paragon Exterior!
//                     </SecondaryText>

//                     <HeaderText className="my-12 pb-4">Replacement vs. Repair: What’s Best for Your {location.name} Home?</HeaderText>
//                     <SecondaryText>
//                         Should you repair or replace your siding in {location.name}? It depends! If it’s just small cracks or a few holes, a repair with caulk or a patch can save the day and your wallet. But if you see large damaged areas, water seeping in, or mold growing, replacement is the smarter move to protect your home. Our Paragon Exterior team will inspect your siding, spot the signs, and let you know what’s best. We’ll fix what we can and replace what we must—keeping your {location.name} home strong and stylish!
//                     </SecondaryText>

//                     <HeaderText className="my-12 pb-4">Signs of Damage to Watch for in {location.name}</HeaderText>
//                     <SecondaryText>
//                         Keep an eye out for siding damage on your {location.name} home! Look for cracks, holes, or loose panels that flap in the wind—those are big signs something’s wrong. Fading colors or warping from heat can also mean trouble, and if you see water stains or mold inside, it’s time to act fast. These issues can let water in, raise your energy bills, or even hurt your home’s value. Don’t wait—call Paragon Exterior to catch these signs early and keep your siding in top shape!
//                     </SecondaryText>

//                     <HeaderText className="my-12 pb-4">Common Causes of Siding Damage in {location.name}</HeaderText>
//                     <SecondaryText>
//                         What’s wrecking your siding in {location.name}? Storms with strong winds and hail are a top culprit, often leaving cracks or missing panels. Heat from summer sun can warp siding, while flying debris—like a stray branch—can punch holes. Even age can wear it down over time. In {location.name}, our wild weather adds extra stress, so your siding takes a beating. Luckily, Paragon Exterior knows these causes inside out and can fix the damage fast to protect your home!
//                     </SecondaryText>
//                 </div>


//                 <IncentivesSection
//                     className="py-16"
//                     title={`Why Choose Paragon for Vinyl Siding Repair in ${location.name}?`}
//                     subtitle="Fast, friendly, and expert siding repair solutions tailored for your home."
//                     heroImage={{src: "/images/siding/siding3.webp", alt: `Professional vinyl siding repair work showcased in ${location.name}`}}
//                     incentives={[
//                         {
//                             name: "Lightning-Fast Quotes",
//                             description: "Receive speedy responses and transparent pricing, ensuring you’re never left waiting for essential repairs.",
//                             imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg"
//                         },
//                         {
//                             name: `Local ${location.name} Experts`,
//                             description: `Our deep-rooted experience in ${location.name} makes us experts in handling local weather challenges and siding issues.`,
//                             imageSrc: "/images/roof-service/metal/icons/seal-check.svg"
//                         },
//                         {
//                             name: "Spotless Cleanup",
//                             description: "We treat your home with respect, leaving the property cleaner than we found it after every repair.",
//                             imageSrc: "/images/siding/engineered/icons/hammer.svg"
//                         },
//                         {
//                             name: "Perfect Color Matching",
//                             description: "Benefit from our advanced color matching technology that ensures repairs blend seamlessly with your existing siding.",
//                             imageSrc: "/images/siding/engineered/icons/log.svg"
//                         },
//                     ]}
//                     imagePosition="left"
//                     incentiveColumns={2}
//                 />

//                 <GoogleReviews />

//                 <WhyParagonSiding
//                     title={`Why ${location.name} Homeowners Trust Paragon Exterior`}
//                     subTitle={`With a legacy of unmatched quality and reliable service, we’ve become the leading choice for vinyl siding repair and maintenance in ${location.name}. Our commitment to excellence, transparent pricing, and customer-first approach ensures that your home stands out in both performance and appearance. Discover the benefits of choosing a trusted local partner for long-lasting repairs today!`}
//                     titleAs="h2"
//                 />

//                 <VinylSidingRepairFAQ locationName={location.name} />

//                 <GetEstimate location={location.name} />

//                 <SidingMaterial />
//             </div>
//         </>
//     );
// }

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