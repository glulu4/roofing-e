// import React from 'react';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Benefits from '@/components/solar/Benefits';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import HeaderText from '@/components/HeaderText';
// import SecondaryText from '@/components/SecondaryText';
// import StandingSeamTabs from '@/components/service-page/roof/StandingSeamTabs';
// import FAQSection from '@/components/FAQSection';
// import ProCon from '@/components/service-page/ProCon';

// export const metadata = {
//     title: 'Standing Seam Metal Roof Installation',
//     description:
//         'Paragon Exterior delivers premium standing seam metal roof installation and repair across PA, NJ, and DE. ',
// };

// const standingSeamFaqs = [
//     {
//         question: "What is a standing seam metal roof?",
//         answer:
//             "It’s a metal roof with long panels that run from the top to the bottom of your roof. The seams where the panels meet are raised (or 'standing') and lock together to keep out water. All the screws are hidden, so there’s less chance of leaks or rust."
//     },
//     {
//         question: "How long does a standing seam metal roof last?",
//         answer:
//             "These roofs can last 40 to 70 years with proper care—way longer than traditional shingles. The metal is durable and doesn’t crack, rot, or attract mold."
//     },
//     {
//         question: "How do you install a standing seam metal roof?",
//         answer:
//             "We install panels from the eave up to the ridge. Each panel locks into the one before it, and hidden fasteners secure it to the roof deck. It takes skill and precision, so it’s best left to pros like us."
//     },
//     {
//         question: "Are standing seam roofs good for homes?",
//         answer:
//             "Absolutely. They look sleek and modern, hold up in storms, reflect sunlight to save on cooling, and require very little maintenance."
//     },
//     {
//         question: "Is a standing seam roof worth the cost?",
//         answer:
//             "Yes—especially if you want something long-lasting and low-maintenance. You’ll save on repairs and energy over time, making it a smart investment."
//     }
// ];


// export default function StandingSeamMetalRoofPage() {
//     return (
//         <div className="min-h-screen">
//             {/* HERO */}
//             <Hero
//                 mainText="Standing Seam Metal Roofing"
//                 subText="Paragon Exterior specializes in standing seam metal roof installation and repair. Our concealed-fastener systems provide unmatched weather resistance, energy efficiency, and a sleek, modern aesthetic for commercial and residential properties."
//                 imgSrc="/images/roof-service/metal/standing-seam/hero.webp"
//                 imgAlt="Crew installing standing seam metal roof panels"
//             />

//             {/* WHAT IS */}
//             <InfoSection
//                 titleAs="h1"
//                 imgSrc="/images/roof-service/metal/standing-seam/seam1.webp"
//                 imgAlt="Close-up of standing seam interlocking panels"
//                 title="What Is a Standing Seam Metal Roof?"
//                 mainContent={
//                     <SecondaryText>
//                         A standing seam metal roof uses long panels that run from top to bottom. Each panel has raised seams that
//                         lock together, creating a watertight barrier. All the screws and fasteners are hidden under the seams—so
//                         you don’t have to worry about exposed hardware or leaks. You can choose from galvanized steel, aluminum, or
//                         copper panels, all with special finishes that protect against rust and fading.
//                     </SecondaryText>
//                 }
//                 bottomContent={
//                     <>
// Standing seam roofs work great for both homes and businesses. They’re tough enough to handle high winds and easily shed snow or debris. With the right care, these roofs can last 40 to 70 years. Want better energy savings? Pair your new roof with our insulation upgrades for even more comfort.                    </>
//                 }
//                 imagePosition="right"
//             />

//             <StandingSeamTabs

//                 className="w-5/6 mx-auto mt-12 mb-16 sm:mb-24 lg:mb-32"
//             />
//             <TechnicalSpecs/>

//              <div className='py-12 sm:py-16 lg:py-20'>
//                 <ProCon
//                     title="Is a Standing Seam Metal Roof Right for You?"
//                     benefits={[
//                         {
//                             title: "Exceptional Durability",
//                             content: "With a lifespan of 40–70 years, these roofs outlast asphalt shingles and resist wind, snow, and fire."
//                         },
//                         {
//                             title: "No Exposed Fasteners",
//                             content: "Hidden clips and seams prevent leaks and rust, reducing maintenance over time."
//                         },
//                         {
//                             title: "Energy Efficient",
//                             content: "Reflective coatings keep your home cooler and lower your utility bills during hot summers."
//                         },
//                         {
//                             title: "Modern Appearance",
//                             content: "The clean, sleek look fits both modern homes and high-end commercial properties."
//                         },
//                         {
//                             title: "Low Maintenance",
//                             content: "Panels shed debris and snow easily, and don’t require frequent repairs like shingles."
//                         }
//                     ]}
//                     drawbacks={[
//                         {
//                             title: "Higher Upfront Cost",
//                             content: "Standing seam roofs can cost 2–3 times more than asphalt shingles to install."
//                         },
//                         {
//                             title: "Professional Installation Needed",
//                             content: "Improper installation can ruin the watertight seal—this isn’t a DIY project."
//                         },
//                         {
//                             title: "Oil Canning",
//                             content: "Metal panels may show visible waviness in the flat areas, especially with lighter gauge metal."
//                         },
//                         {
//                             title: "Limited Roof Styles",
//                             content: "These systems work best on roofs with a minimum 3:12 pitch—not ideal for flat or very steep roofs."
//                         }
//                     ]}
//                 />

//                 </div>   

//             {/* KEY BENEFITS */}
//             <Benefits
//                 title="Benefits of Standing Seam Metal Roofing"
//                 description="From superior leak protection to industry-leading longevity, standing seam metal roofs outperform traditional roofing options in every category."
//                 titleAs="h2"
//                 img1={{
//                     src: "/images/roof-service/metal/standing-seam/seam2.webp",
//                     alt: 'Standing seam metal roof under stormy sky',
//                 }}
//                 img2={{
//                     src: "/images/roof-service/metal/standing-seam/seam3.webp",
//                     alt: 'Close-up of metal roof seam interlock',
//                 }}
//                 text1="No Leaks or Rust: With hidden fasteners, there are no exposed screws to cause leaks or rust. Your roof stays watertight and easy to maintain."
//                 text2="Saves Energy: The metal finish reflects sunlight, which helps keep your building cooler and lowers your air conditioning bills."
//             />
//             <FAQSection
//                 title="Standing Seam Metal Roof FAQs"
//                 faqs={standingSeamFaqs}
//             />

//             {/* CTA */}
//             <div className="py-16 text-center">
//                 <GetEstimate />
//             </div>
//         </div>
//     );
// }



// const data = [
//     {label: 'Panel Widths', value: '12” to 24”'},
//     {label: 'Seam Height', value: '1” to 2” (typical)'},
//     {label: 'Metal Types', value: 'Galvanized Steel, Aluminum, Copper, Zinc'},
//     {label: 'Finish Options', value: 'Kynar 500® / PVDF, SMP, Acrylic Coated Galvalume®'},
//     {label: 'Panel Thickness', value: '22 to 26 gauge'},
//     {label: 'Fastener Type', value: 'Concealed Clips or Nail Strip'},
//     {label: 'Slope Compatibility', value: 'Minimum 3:12 pitch'},
//     {label: 'Fire Rating', value: 'Class A'},
//     {label: 'Wind Resistance', value: 'Tested up to 140+ mph'},
//     {label: 'Warranty', value: 'Up to 40 years (material & finish)'}
// ];

// function TechnicalSpecs() {
//     return (
//         <div className="w-5/6 mx-auto my-16">
//             <HeaderText className="text-center mb-6">
//                 Technical Specifications
//             </HeaderText>
//             <SecondaryText className="text-center mb-12">
//                 Detailed specs for Paragon Exterior's standing seam systems. All materials meet or exceed industry standards.
//             </SecondaryText>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {data.map((item, index) => (
//                     <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
//                         <h3 className="font-semibold text-gray-700 mb-1">{item.label}</h3>
//                         <p className="text-sm text-gray-600">{item.value}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// const systemTypes = [
//     {
//         name: 'Snap-Lock Panels',
//         description:
//             'Panels snap together without the need for seaming tools. Ideal for residential use with slopes 3:12 and above.',
//         pros: ['Easy installation', 'No seamer needed', 'Cost-effective'],
//         cons: ['Not suitable for very low slopes', 'Less robust in extreme conditions']
//     },
//     {
//         name: 'Mechanical Lock (Seamed)',
//         description:
//             'Double-locked seams provide maximum resistance to weather. Commonly used in commercial and high-performance applications.',
//         pros: ['Best weather resistance', 'Ideal for low-slope roofs', 'Longer lifespan'],
//         cons: ['Requires special tools', 'Higher labor cost']
//     },
//     {
//         name: 'Nail Strip (Fastener Flange)',
//         description:
//             'Fastens directly through the flange into the deck. Popular for its ease of installation, especially for residential projects.',
//         pros: ['No clips required', 'Fast installation', 'Lower upfront cost'],
//         cons: ['Slightly less thermal movement flexibility', 'More prone to panel oil-canning']
//     }
// ];

// function SystemTypesComparison() {
//     return (
//         <div className="w-5/6 mx-auto my-20">
//             <HeaderText className="text-center mb-6">
//                 Compare Metal Roof Panel Systems
//             </HeaderText>
//             <SecondaryText className="text-center mb-12">
//                 Understand the differences between snap-lock, mechanical seam, and nail strip systems to find the best fit for your project.
//             </SecondaryText>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {systemTypes.map((system, index) => (
//                     <div
//                         key={index}
//                         className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <h3 className="text-lg font-semibold text-primaryblue mb-2">
//                             {system.name}
//                         </h3>
//                         <p className="text-gray-600 text-sm mb-4">
//                             {system.description}
//                         </p>
//                         <div className="text-sm text-gray-700">
//                             <strong>Pros:</strong>
//                             <ul className="list-disc list-inside mb-2">
//                                 {system.pros.map((item, i) => (
//                                     <li key={i}>{item}</li>
//                                 ))}
//                             </ul>
//                             <strong>Cons:</strong>
//                             <ul className="list-disc list-inside text-red-500">
//                                 {system.cons.map((item, i) => (
//                                     <li key={i}>{item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import StandingSeamTabs from '@/components/service-page/roof/StandingSeamTabs';
import FAQSection from '@/components/FAQSection';
import ProCon from '@/components/service-page/ProCon';

export const metadata = {
    title: 'Standing Seam Metal Roof Systems',
    description: 'Professional standing seam metal roof installation with concealed fasteners. 40-70 year lifespan, energy efficient.',
    keywords: 'standing seam metal roof, metal roof installation, concealed fastener roofing, steel roofing contractors, aluminum roofing, copper roofing, metal roof repair, Pennsylvania roofing, New Jersey roofing, Delaware roofing',
    openGraph: {
        title: 'Standing Seam Metal Roof Installation | Expert Contractors',
        description: 'Premium standing seam metal roofing with hidden fasteners. Energy-efficient systems lasting 40-70 years. Serving PA, NJ, DE.',
        images: ['/images/roof-service/metal/standing-seam/hero.webp'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Standing Seam Metal Roof Installation | Paragon Exterior',
        description: 'Professional metal roofing with concealed fasteners. Energy-efficient systems with exceptional durability.',
        images: ['/images/roof-service/metal/standing-seam/hero.webp'],
    },

};

// Enhanced FAQ data with more comprehensive answers and keywords
const standingSeamFaqs = [
    {
        question: "What is a standing seam metal roof and how does it work?",
        answer: "A standing seam metal roof is a premium roofing system featuring long metal panels with raised, interlocking seams that run vertically from ridge to eave. The 'standing' seams where panels connect are raised above the roof surface and lock together using concealed fasteners, creating a completely watertight barrier. Unlike exposed fastener systems, all screws and clips are hidden beneath the seams, eliminating potential leak points and extending roof life to 40-70 years."
    },
    {
        question: "How long does a standing seam metal roof last compared to other roofing materials?",
        answer: "Standing seam metal roofs last 40 to 70 years with proper installation and maintenance—significantly longer than asphalt shingles (15-25 years) or wood shakes (20-30 years). The concealed fastener system and premium metal materials resist cracking, rotting, mold, and weather damage. Galvanized steel and aluminum standing seam roofs typically last 40-50 years, while copper and zinc systems can exceed 70 years of service life."
    },
    {
        question: "How much does standing seam metal roof installation cost?",
        answer: "Standing seam metal roof installation costs typically range from $12-$18 per square foot installed, or $24,000-$54,000 for an average 3,000 sq ft home. While the upfront investment is 2-3 times higher than asphalt shingles, the 40-70 year lifespan and energy savings provide excellent long-term value. Material costs vary: steel ($8-$12/sq ft), aluminum ($10-$15/sq ft), and copper ($18-$25/sq ft). Professional installation ensures proper concealed fastener placement and weatherproofing."
    },
    {
        question: "What are the energy efficiency benefits of standing seam metal roofing?",
        answer: "Standing seam metal roofs offer exceptional energy efficiency through reflective coatings that can reflect up to 70% of solar heat, reducing cooling costs by 10-25%. ENERGY STAR qualified metal roofing systems help maintain consistent indoor temperatures year-round. The concealed fastener design also allows for superior insulation installation, improving thermal performance. Many standing seam metal roofs qualify for energy tax credits and can lower homeowner's insurance premiums."
    },
    {
        question: "Is professional installation required for standing seam metal roofing?",
        answer: "Yes, professional installation is essential for standing seam metal roofs. The concealed fastener system requires specialized tools, precise panel alignment, and expert knowledge of thermal expansion joints. Improper installation can void manufacturer warranties and create leak points. Licensed roofing contractors have the experience to properly install standing seam panels, flashing, and trim while ensuring code compliance and optimal performance for decades."
    },
    {
        question: "What metal types are available for standing seam roofing systems?",
        answer: "Standing seam metal roofs are available in several premium materials: Galvanized steel (most popular, cost-effective with 40-50 year life), Aluminum (lightweight, corrosion-resistant, ideal for coastal areas), Copper (premium option lasting 70+ years with natural patina), Zinc (eco-friendly with self-healing properties), and Galvalume steel (enhanced corrosion resistance). Each material offers different benefits for climate, aesthetics, and budget considerations."
    }
];



export default function StandingSeamMetalRoofPage() {
    return (
        <div className="min-h-screen">
            

            {/* HERO - Enhanced with more keywords */}
            <Hero
                mainText="Standing Seam Metal Roof Systems"
                subText="Paragon Exterior specializes in professional standing seam metal roof installation across Pennsylvania, New Jersey, and Delaware. Our concealed-fastener metal roofing systems deliver unmatched weather resistance, energy efficiency, and modern aesthetics for residential and commercial properties. Get your free estimate from certified metal roofing contractors today."
                imgSrc="/images/roof-service/metal/standing-seam/hero.webp"
                imgAlt="Professional crew installing standing seam metal roof panels with concealed fasteners in Pennsylvania"
            />

            {/* WHAT IS - Enhanced with more keywords and semantic content */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/standing-seam/seam1.webp"
                imgAlt="Close-up view of standing seam metal roof interlocking panels showing concealed fastener system"
                title="What Is a Standing Seam Metal Roof System?"
                mainContent={
                    <SecondaryText>
                        A standing seam metal roof is a premium roofing system featuring long metal panels with raised, interlocking seams that run vertically from ridge to eave. Each standing seam metal roof panel connects using concealed fasteners hidden beneath the seams, eliminating exposed screws and creating a completely watertight barrier. Our standing seam metal roofing materials include galvanized steel, aluminum, copper, and zinc panels with advanced protective finishes like Kynar 500® PVDF that resist fading, corrosion, and weathering for decades.
                    </SecondaryText>
                }
                bottomContent={
                    <>
                        Standing seam metal roofs excel in both residential and commercial applications throughout Pennsylvania, New Jersey, and Delaware, delivering exceptional wind resistance up to 140+ mph and easily shedding snow, ice, and debris. With professional installation and proper maintenance, these premium metal roofing systems last 40 to 70 years—significantly longer than traditional asphalt shingles. For maximum energy efficiency and cost savings, consider pairing your new standing seam metal roof with our professional insulation upgrades to reduce heating and cooling costs year-round.
                    </>
                }
                imagePosition="right"
            />

            <StandingSeamTabs className="w-5/6 mx-auto mt-12 mb-16 sm:mb-24 lg:mb-32" />

            <TechnicalSpecs />

            {/* Cost Information Section - New addition for SEO */}
            <CostInformation />

            <div className='py-12 sm:py-16 lg:py-20'>
                <ProCon
                    title="Is a Standing Seam Metal Roof Right for Your Property?"
                    benefits={[
                        {
                            title: "Exceptional Durability & Longevity",
                            content: "Standing seam metal roofs last 40–70 years, outlasting asphalt shingles by 2-3x while resisting wind up to 140+ mph, snow loads, hail damage, and fire."
                        },
                        {
                            title: "Concealed Fastener System",
                            content: "Hidden clips and seams prevent water infiltration and fastener deterioration, eliminating common leak points and reducing maintenance requirements over decades."
                        },
                        {
                            title: "Superior Energy Efficiency",
                            content: "Reflective PVDF coatings can reduce cooling costs by 10-25% while ENERGY STAR qualified systems may qualify for tax credits and insurance discounts."
                        },
                        {
                            title: "Modern Architectural Appeal",
                            content: "Clean, vertical lines and sleek profiles complement both contemporary homes and high-end commercial buildings with customizable colors and finishes."
                        },
                        {
                            title: "Low Maintenance Requirements",
                            content: "Standing seam panels shed debris and snow naturally, resist algae and mold growth, and require minimal upkeep compared to shingle roofing systems."
                        }
                    ]}
                    drawbacks={[
                        {
                            title: "Higher Initial Investment",
                            content: "Standing seam metal roof installation costs $12-$18 per sq ft, typically 2–3 times more than asphalt shingles upfront."
                        },
                        {
                            title: "Professional Installation Required",
                            content: "Concealed fastener systems require specialized tools and expertise—improper installation can void warranties and compromise performance."
                        },
                        {
                            title: "Potential Oil Canning",
                            content: "Thin gauge metal panels may show visible waviness in flat areas, though heavier gauges and proper installation minimize this effect."
                        },
                        {
                            title: "Slope Requirements",
                            content: "Standing seam systems work best on roofs with minimum 3:12 pitch—not suitable for completely flat or extremely steep applications."
                        }
                    ]}
                />
            </div>

            {/* Material Types Section - Enhanced for SEO */}
            <MaterialTypes />

            {/* KEY BENEFITS - Enhanced descriptions */}
            <Benefits
                title="Benefits of Standing Seam Metal Roofing Systems"
                description="From superior leak protection to industry-leading longevity, standing seam metal roofs outperform traditional roofing materials in every category. The concealed fastener design and premium metal construction deliver unmatched value for Pennsylvania, New Jersey, and Delaware properties."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/standing-seam/seam2.webp",
                    alt: 'Standing seam metal roof withstanding severe storm conditions in Pennsylvania',
                }}
                img2={{
                    src: "/images/roof-service/metal/standing-seam/seam3.webp",
                    alt: 'Close-up of standing seam metal roof interlock showing weatherproof seal',
                }}
                text1="Leak-Proof Protection: Concealed fastener systems eliminate exposed screws that can deteriorate over time. Hidden clips and raised seams create multiple barriers against water infiltration, keeping your property dry for decades."
                text2="Energy Cost Savings: Reflective metal finishes can reduce cooling costs by 10-25% while thermal breaks minimize heat transfer. Many standing seam metal roofs qualify for ENERGY STAR tax credits and insurance discounts."
            />

            <FAQSection
                title="Standing Seam Metal Roof FAQ - Expert Answers"
                faqs={standingSeamFaqs}
            />

            {/* Installation Process Section - New for SEO */}
            <InstallationProcess />

            {/* CTA */}
            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}

// Enhanced Technical Specs with more detail
const data = [
    {label: 'Panel Widths Available', value: '12", 16", 18", 20", 24" standard'},
    {label: 'Seam Height Options', value: '1" to 2.75" (depends on system)'},
    {label: 'Metal Material Types', value: 'Galvanized Steel, Aluminum, Copper, Zinc, Galvalume'},
    {label: 'Premium Finish Options', value: 'Kynar 500® PVDF, SMP, Acrylic Coated Galvalume®'},
    {label: 'Panel Thickness Range', value: '22 to 26 gauge (24 gauge most common)'},
    {label: 'Fastener System Type', value: 'Concealed Clips, Snap-Lock, Mechanical Seam'},
    {label: 'Minimum Slope Required', value: '3:12 pitch (some systems 1/4:12)'},
    {label: 'Fire Safety Rating', value: 'Class A (highest rating)'},
    {label: 'Wind Resistance Tested', value: 'Up to 140+ mph wind speeds'},
    {label: 'Material Warranty', value: 'Up to 40 years material & finish'}
];

function TechnicalSpecs() {
    return (
        <div className="w-5/6 mx-auto my-16">
            <HeaderText className="text-center mb-6">
                Standing Seam Metal Roof Technical Specifications
            </HeaderText>
            <SecondaryText className="text-center mb-12">
                Comprehensive specifications for Paragon Exterior&apos;s standing seam metal roofing systems. All materials meet or exceed industry standards for Pennsylvania, New Jersey, and Delaware building codes.
            </SecondaryText>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div key={index} className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-gray-700 mb-1">{item.label}</h3>
                        <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// New Cost Information Section for SEO
function CostInformation() {
    return (
        <div className="w-5/6 mx-auto my-20 bg-gray-50 p-8 rounded-xl">
            <HeaderText className="text-center mb-6">
                Standing Seam Metal Roof Cost Guide 2025
            </HeaderText>
            <SecondaryText className="text-center mb-8">
                Professional standing seam metal roof installation pricing varies by material type, roof complexity, and project size. Here&apos;s what to expect for your investment.
            </SecondaryText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-primaryblue mb-2">Galvanized Steel</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-1">$12-$15</p>
                    <p className="text-sm text-gray-600">per sq ft installed</p>
                    <p className="text-xs text-gray-500 mt-2">Most popular choice</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-primaryblue mb-2">Aluminum</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-1">$14-$17</p>
                    <p className="text-sm text-gray-600">per sq ft installed</p>
                    <p className="text-xs text-gray-500 mt-2">Coastal applications</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-primaryblue mb-2">Galvalume Steel</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-1">$13-$16</p>
                    <p className="text-sm text-gray-600">per sq ft installed</p>
                    <p className="text-xs text-gray-500 mt-2">Enhanced protection</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-primaryblue mb-2">Copper</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-1">$18-$25</p>
                    <p className="text-sm text-gray-600">per sq ft installed</p>
                    <p className="text-xs text-gray-500 mt-2">Premium option</p>
                </div>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                    *Prices include professional installation, materials, and basic trim. Additional costs may apply for complex roof designs,
                    tear-off, or structural modifications.
                </p>
                <p className="text-xs text-gray-500">
                    Average 3,000 sq ft home: $36,000 - $54,000 total project cost
                </p>
            </div>
        </div>
    );
}

// New Material Types Section for SEO
function MaterialTypes() {
    const materials = [
        {
            name: 'Galvanized Steel Standing Seam',
            description: 'Most popular choice offering excellent durability and value. Zinc coating provides corrosion resistance.',
            lifespan: '40-50 years',
            benefits: ['Cost-effective', 'Strong and durable', 'Recyclable'],
            bestFor: 'Most residential and commercial applications'
        },
        {
            name: 'Aluminum Standing Seam',
            description: 'Lightweight and naturally corrosion-resistant, ideal for coastal environments and salt air exposure.',
            lifespan: '40-60 years',
            benefits: ['Rust-resistant', 'Lightweight', 'Coastal-friendly'],
            bestFor: 'Ocean proximity, saltwater environments'
        },
        {
            name: 'Copper Standing Seam',
            description: 'Premium material that develops natural patina over time. Superior longevity and distinctive appearance.',
            lifespan: '70+ years',
            benefits: ['Natural patina', 'Extremely durable', 'Low maintenance'],
            bestFor: 'Historic buildings, luxury homes'
        },
        {
            name: 'Galvalume Steel Standing Seam',
            description: 'Aluminum-zinc alloy coating provides enhanced corrosion resistance compared to standard galvanized steel.',
            lifespan: '45-55 years',
            benefits: ['Superior protection', 'Heat reflective', 'Long warranty'],
            bestFor: 'High-performance applications'
        }
    ];

    return (
        <div className="w-5/6 mx-auto my-20">
            <HeaderText className="text-center mb-6">
                Standing Seam Metal Roof Material Options
            </HeaderText>
            <SecondaryText className="text-center mb-12">
                Choose the right metal type for your standing seam roof based on performance requirements, budget, and aesthetic preferences.
            </SecondaryText>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {materials.map((material, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-primaryblue mb-3">{material.name}</h3>
                        <p className="text-gray-600 mb-4">{material.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong className="text-gray-700">Expected Lifespan:</strong>
                                <p className="text-gray-600">{material.lifespan}</p>
                            </div>
                            <div>
                                <strong className="text-gray-700">Best For:</strong>
                                <p className="text-gray-600">{material.bestFor}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <strong className="text-gray-700 text-sm">Key Benefits:</strong>
                            <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                                {material.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// New Installation Process Section for SEO
function InstallationProcess() {
    const steps = [
        {
            step: '1',
            title: 'Roof Inspection & Measurement',
            description: 'Our certified contractors assess your existing roof condition, take precise measurements, and determine the best standing seam metal roof system for your property.'
        },
        {
            step: '2',
            title: 'Material Selection & Ordering',
            description: 'Choose your metal type (steel, aluminum, copper), gauge, color, and finish options. We order panels cut to exact specifications to minimize waste and joints.'
        },
        {
            step: '3',
            title: 'Roof Deck Preparation',
            description: 'Remove old roofing materials if needed, inspect and repair decking, install proper underlayment and ice & water shield for optimal weather protection.'
        },
        {
            step: '4',
            title: 'Panel Installation',
            description: 'Install standing seam panels from eave to ridge using concealed fasteners. Each panel interlocks with the previous one, creating continuous weather barriers.'
        },
        {
            step: '5',
            title: 'Flashing & Trim Installation',
            description: 'Install custom-formed flashing around chimneys, vents, and roof penetrations. Add ridge caps, eave trim, and gutter systems as needed.'
        },
        {
            step: '6',
            title: 'Final Inspection & Cleanup',
            description: 'Conduct thorough quality inspection, test all seams and fasteners, clean up job site completely, and provide warranty documentation.'
        }
    ];

    return (
        <div className="w-5/6 mx-auto my-20 bg-blue-50 p-8 rounded-xl">
            <HeaderText className="text-center mb-6">
                Professional Standing Seam Metal Roof Installation Process
            </HeaderText>
            <SecondaryText className="text-center mb-12">
                Our experienced metal roofing contractors follow proven installation procedures to ensure your standing seam roof delivers decades of reliable performance.
            </SecondaryText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-primaryblue text-white rounded-full flex items-center justify-center font-bold mr-3">
                                {item.step}
                            </div>
                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <p className="text-sm text-gray-600">
                    Professional installation ensures proper concealed fastener placement, thermal expansion accommodation,
                    and manufacturer warranty compliance for maximum standing seam metal roof performance.
                </p>
            </div>
        </div>
    );
}

const systemTypes = [
    {
        name: 'Snap-Lock Standing Seam Panels',
        description: 'Panels snap together without seaming tools. Most cost-effective option ideal for residential use with slopes 3:12 and above.',
        pros: ['Fastest installation', 'No special tools needed', 'Most economical', 'Good for DIY-friendly contractors'],
        cons: ['Not suitable for low slopes under 3:12', 'Less weather resistance than mechanical seam']
    },
    {
        name: 'Mechanical Lock (Double-Seamed)',
        description: 'Double-locked seams provide maximum weather resistance. Industry standard for commercial and high-performance residential applications.',
        pros: ['Superior weather protection', 'Works on slopes as low as 1/4:12', 'Longest lifespan', 'Best for extreme climates'],
        cons: ['Requires specialized seaming tools', 'Higher labor costs', 'Longer installation time']
    },
    {
        name: 'Nail Strip (Fastener Flange)',
        description: 'Fastens through pre-punched flanges directly to roof deck. Popular for residential projects due to installation speed.',
        pros: ['No clips required', 'Fast installation process', 'Lower material costs', 'Good thermal performance'],
        cons: ['Less thermal movement flexibility', 'More prone to oil-canning', 'Requires solid deck substrate']
    }
];

function SystemTypesComparison() {
    return (
        <div className="w-5/6 mx-auto my-20">
            <HeaderText className="text-center mb-6">
                Compare Standing Seam Metal Roof Panel Systems
            </HeaderText>
            <SecondaryText className="text-center mb-12">
                Understand the differences between snap-lock, mechanical seam, and nail strip systems to choose the best standing seam metal roof for your project requirements and budget.
            </SecondaryText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {systemTypes.map((system, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-lg font-semibold text-primaryblue mb-2">
                            {system.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {system.description}
                        </p>
                        <div className="text-sm text-gray-700">
                            <strong className="text-green-600">Advantages:</strong>
                            <ul className="list-disc list-inside mb-3 text-green-700">
                                {system.pros.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <strong className="text-red-600">Considerations:</strong>
                            <ul className="list-disc list-inside text-red-600">
                                {system.cons.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}