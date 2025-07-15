// import HeaderText from '@/components/HeaderText';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import SecondaryText from '@/components/SecondaryText';
// import TextImgRow from '@/components/TextImgRow';
// import ThreeImageLayout from '@/components/solar/ThreeImage';
// import FAQ from '@/components/FAQ';
// import {Metadata} from 'next';
// import {serviceAreas} from '../../../../public/service-areas';

// export async function generateStaticParams() {
//     return Object.keys(serviceAreas).map((slug) => ({slug}));
// }

// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{slug: string}>;
// }): Promise<Metadata> {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     return {
//         title: `${location?.name} Roof Replacement Cost `,
//         description: `Wondering what a roof replacement costs in ${location?.name
//             }? Paragon Exterior breaks down average prices and offers fixed, written quotes for every material.`,
//         alternates: { canonical: `https://www.paragonexterior.com/roof-replacement-cost/${slug}` },
//     };
// }

// export default async function Page({
//     params,
// }: {
//     params: Promise<{slug: string}>;
// }) {
//     const {slug} = await params;
//     const location = serviceAreas[slug];
//     if (!location) return <div>Area not found.</div>;

//     const introText = `
//   Curious how much you should budget for a new roof? Paragon Exterior lays out the typical roof replacement cost in ${location.name
//         } and pinpoints the factors that move the needle on price. Use our guide below, then request your free, written quote.
//   `;

//     const costPosts = [
//         {
//             id: 1,
//             title: 'Asphalt Shingle Roof',
//             description: `Installed asphalt shingle roof replacement cost in ${location.name
//                 } averages \$8,000–\$14,000 for a 2,000 sq ft home, depending on shingle grade and roof complexity.`,
//             imageUrl: "/images/replace2.jpeg",
//         },
//         {
//             id: 2,
//             title: 'Metal Roof',
//             description: `Expect \$18,000–\$30,000 for standing-seam or ribbed metal panels on a typical home in ${location.name
//                 }. Higher upfront roof replacement cost, but decades of service and energy savings.`,
//             imageUrl: "/images/replace3.jpeg",
//         },
//         {
//             id: 3,
//             title: 'Tile or Slate Roof',
//             description: `Premium clay tile or natural slate can range from \$30,000–\$60,000+. Material weight, specialty underlayment, and artisan installation all influence your roof replacement cost in ${location.name
//                 }.`,
//             imageUrl: "/images/replace4.jpeg",
//         },
//     ]

//     return (
//         <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
//             {/* Hero Section */}
//             <section className="text-center">
//                 <HeaderText as="h1" variant="large">
//                     {location.name} Roof Replacement Cost
//                 </HeaderText>
//                 <SecondaryText as="h2" className="mt-4">
//                     Transparent pricing for roof replacement cost in {location.name}
//                 </SecondaryText>

//                 <div className="py-12">
//                     <a
//                         href="/estimate"
//                         className="mt-6 bg-primaryblue text-white px-6 py-3 rounded"
//                     >
//                         Get Your Free Estimate
//                     </a>
//                 </div>
//             </section>

//             {/* Introduction */}
//             <section>
//                 <SecondaryText as="p" className="mt-4">
//                     {introText}
//                 </SecondaryText>
//             </section>

//             {/* Cost Factors */}
//             <section>
//                 <TextImgRow
//                     title="What Determines Your Roof Replacement Cost?"
//                     description="Square footage, material choice, roof pitch, tear-off complexity, and local permit fees all influence final pricing. Our estimators measure every plane and itemize each line so you know exactly where each dollar goes."
//                     imageSrc="/images/replace1.jpeg"
//                     imageAlt="Roof replacement cost calculation"
//                 />
//             </section>

//             {/* Typical Price Ranges */}
//             <section className="text-center">
//                 <ThreeImageLayout posts={costPosts} />
//             </section>

//             {/* CTA & FAQ */}
//             <section>
//                 <HeaderText variant="large" as="h2">
//                     Lock in Your Exact Roof Replacement Cost
//                 </HeaderText>
//                 <SecondaryText as="p" className="mt-4">
//                     Ready for precise numbers? Our on-site inspections and satellite
//                     measurements ensure you receive a fixed, written quote—no surprises.
//                 </SecondaryText>
//             </section>

//             <FAQ locationName={location.name} />
//             <GetEstimate location={location.name} />
//         </div>
//     );
// }

import HeaderText from '@/components/HeaderText';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import SecondaryText from '@/components/SecondaryText';
import TextImgRow from '@/components/TextImgRow';
import ThreeImageLayout from '@/components/solar/ThreeImage';
import FAQ from '@/components/FAQ';
import Row from '@/components/Row';
import InfoSection from '@/components/service-page/Info';
import IncentivesSection from '@/components/service-page/Incentive';
import {Metadata} from 'next';
import {serviceAreas} from '../../../../public/service-areas';

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{slug: string}>;
}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `${location?.name} Roof Replacement Cost 2025 | Average Prices & Estimates`,
        description: `Complete roof replacement cost guide for ${location?.name}. Average prices: $8,000-$60,000+ depending on materials. Get detailed cost breakdowns, free estimates from licensed contractors.`,
        keywords: `roof replacement cost ${location?.name}, roof replacement price ${location?.name}, new roof cost ${location?.name}, roof installation cost, roofing contractor ${location?.name}, roof replacement estimate, asphalt shingle cost, metal roof cost, tile roof cost, roof replacement calculator, average roof replacement cost, roof replacement financing, roof replacement quotes ${location?.name}`,
        openGraph: {
            title: `${location?.name} Roof Replacement Cost Guide 2025`,
            description: `Complete roof replacement cost breakdown for ${location?.name}. Free estimates from licensed contractors. Average costs $8,000-$60,000+.`,
            url: `https://www.paragonexterior.com/roof-replacement-cost/${slug}`,
            images: ['/images/replace1.jpeg'],
        },
    };
}

export type ThreeImageArrayType = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export default async function Page({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    const introText = `
Understanding roof replacement costs in ${location.name} helps you budget effectively and make informed decisions about this major home investment. Multiple factors influence your final roof replacement cost, from material selection to labor rates, home size, and local building requirements. This comprehensive guide breaks down everything you need to know about roof replacement costs in ${location.name}, including detailed price ranges, cost factors, financing options, and money-saving tips from experienced roofing contractors.
`;

    const costPosts: ThreeImageArrayType[] = [
        {
            id: 1,
            title: 'Asphalt Shingle Roofs',
            description: `Most popular choice in ${location.name}. Basic 3-tab shingles: $8,000-$12,000. Architectural shingles: $12,000-$18,000. Premium designer shingles: $18,000-$25,000 for a 2,000 sq ft home.`,
            imageUrl: "/images/roof-service/roof-replacement/roof-replacement-hero.webp",
        },
        {
            id: 2,
            title: 'Metal Roofing Systems',
            description: `Standing seam metal roofs in ${location.name}: $18,000-$35,000. Corrugated metal: $12,000-$20,000. Premium copper or zinc: $25,000-$45,000. Higher upfront cost but 50+ year lifespan.`,
            imageUrl: "/images/roof-service/metal/metal-roof-hero.webp",
        },
        {
            id: 3,
            title: 'Premium Tile & Slate',
            description: `Clay tile roofs in ${location.name}: $20,000-$40,000. Concrete tile: $15,000-$25,000. Natural slate: $30,000-$80,000+. Premium materials require specialized installation and structural support.`,
            imageUrl: "/images/dynamic/roof-replacement/roofing-replacement4.webp",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": `${location.name} Roof Replacement Cost Guide 2025`,
                        "description": `Complete guide to roof replacement costs in ${location.name} with detailed price breakdowns and estimates`,
                        "author": {
                            "@type": "Organization",
                            "name": "Paragon Exterior"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Paragon Exterior",
                            "logo": "https://www.paragonexterior.com/logo.png"
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": `What does roof replacement cost in ${location.name}?`,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": `Roof replacement costs in ${location.name} typically range from $8,000-$60,000+ depending on materials, home size, and complexity. Asphalt shingles average $8,000-$18,000, while premium materials can exceed $40,000.`
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <HeaderText as="h1" variant="large" className="text-primaryblue">
                        {location.name} Roof Replacement Cost Guide 2025
                    </HeaderText>
                    <SecondaryText as="h2" className="mt-6 max-w-4xl mx-auto">
                        Complete cost breakdown for roof replacement in {location.name}. Get accurate estimates, understand pricing factors, and make informed decisions with expert guidance from licensed roofing contractors.
                    </SecondaryText>

                    <div className="mt-12">
                        <a
                            href="/estimate"
                            className="bg-primaryblue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                        >
                            Get Free Roof Replacement Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <InfoSection
                imgSrc="/images/replace1.jpeg"
                imgAlt={`Roof replacement cost factors in ${location.name}`}
                title={`Understanding Roof Replacement Costs in ${location.name}`}
                titleAs="h2"
                mainContent={introText}
                bottomContent={`Our experienced roofing contractors serving ${location.name} provide transparent pricing with detailed estimates that break down every cost component. From materials and labor to permits and disposal, we ensure you understand exactly what you're paying for and why. Request your free, no-obligation estimate to get accurate pricing specific to your home and needs.`}
                imagePosition="right"
                className="py-16"
            />

            {/* Cost Factors */}
            <IncentivesSection
                title="Key Factors Affecting Your Roof Replacement Cost"
                titleAs="h2"
                subtitle={`Multiple variables influence roof replacement costs in ${location.name}. Understanding these factors helps you budget accurately and make informed decisions about your roofing investment.`}
                heroImage={{
                    src: "/images/dynamic/roof-replacement/roofing-replacement1.webp",
                    alt: "Roof replacement cost calculation factors"
                }}
                incentives={[
                    {
                        name: "Home Size & Roof Area",
                        imageSrc: "/images/window/window-replace/icons/house-line.svg",
                        imageAlt: "Home size roof area icon",
                        description: `Roof area measured in squares (100 sq ft each) is the primary cost driver. Average homes in ${location.name} range from 15-30 squares, directly impacting material and labor costs.`
                    },
                    {
                        name: "Material Selection",
                        imageSrc: "/images/window/window-replace/icons/shield-check.svg",
                        imageAlt: "Roofing materials icon",
                        description: "Material choice dramatically affects cost. Asphalt shingles are most affordable, while metal, tile, and slate command premium prices but offer superior longevity."
                    },
                    {
                        name: "Roof Complexity & Pitch",
                        imageSrc: "/images/siding/engineered/icons/ruler.svg",
                        imageAlt: "Roof complexity icon",
                        description: "Steep slopes, multiple dormers, valleys, and complex designs increase labor time and safety requirements, affecting your total roof replacement cost."
                    }
                ]}
                imagePosition="right"
                backgroundColor="bg-white"
                className="py-16"
            />

            {/* Detailed Cost Breakdown by Material */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <HeaderText as="h2" className="text-primaryblue mb-4">
                            Detailed Roof Replacement Costs by Material
                        </HeaderText>
                        <SecondaryText className="max-w-3xl mx-auto">
                            Comprehensive cost breakdown for different roofing materials in {location.name}, including installation, materials, and additional components.
                        </SecondaryText>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <HeaderText variant="small" className="text-primaryblue mb-4">Asphalt Shingle Costs</HeaderText>
                            <div className="space-y-4">
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">3-Tab Shingles</span>
                                        <span className="font-semibold">$8,000 - $12,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Basic option, 15-20 year lifespan</SecondaryText>
                                </div>
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Architectural Shingles</span>
                                        <span className="font-semibold">$12,000 - $18,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Most popular choice, 25-30 year lifespan</SecondaryText>
                                </div>
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Premium Designer Shingles</span>
                                        <span className="font-semibold">$18,000 - $25,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Luxury appearance, 30-40 year lifespan</SecondaryText>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <HeaderText variant="small" className="text-primaryblue mb-4">Metal Roofing Costs</HeaderText>
                            <div className="space-y-4">
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Corrugated Metal</span>
                                        <span className="font-semibold">$12,000 - $20,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Cost-effective metal option</SecondaryText>
                                </div>
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Standing Seam</span>
                                        <span className="font-semibold">$18,000 - $35,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Premium metal, 50+ year lifespan</SecondaryText>
                                </div>
                                <div className="border-b pb-2">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Copper/Zinc Premium</span>
                                        <span className="font-semibold">$25,000 - $45,000</span>
                                    </div>
                                    <SecondaryText className="text-sm text-gray-600">Luxury metals, 75+ year lifespan</SecondaryText>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <HeaderText variant="small" className="text-primaryblue mb-3">
                            Cost Per Square Foot in {location.name}
                        </HeaderText>
                        <SecondaryText className="mb-4">
                            These ranges reflect total installed costs including materials, labor, permits, and disposal:
                        </SecondaryText>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="font-bold text-2xl text-primaryblue">$4-12</div>
                                <div className="text-sm">per sq ft - Asphalt Shingles</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl text-primaryblue">$9-18</div>
                                <div className="text-sm">per sq ft - Metal Roofing</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl text-primaryblue">$12-40+</div>
                                <div className="text-sm">per sq ft - Tile/Slate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Material Cost Comparison */}
            <section className="py-16 bg-white">
                <ThreeImageLayout posts={costPosts} />
            </section>

            {/* Additional Cost Factors */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <HeaderText as="h2" className="text-center text-primaryblue mb-12">
                        Additional Roof Replacement Cost Factors in {location.name}
                    </HeaderText>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-primaryblue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">🏠</span>
                            </div>
                            <HeaderText variant="small" className="text-primaryblue mb-2">Tear-Off & Disposal</HeaderText>
                            <SecondaryText className="text-gray-600">
                                $2-4 per sq ft for removing old materials and disposal fees. Multiple layers increase costs.
                            </SecondaryText>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-primaryblue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">📋</span>
                            </div>
                            <HeaderText variant="small" className="text-primaryblue mb-2">Permits & Inspections</HeaderText>
                            <SecondaryText className="text-gray-600">
                                $100-500 for building permits and inspections required in {location.name}.
                            </SecondaryText>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-primaryblue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">🔧</span>
                            </div>
                            <HeaderText variant="small" className="text-primaryblue mb-2">Structural Repairs</HeaderText>
                            <SecondaryText className="text-gray-600">
                                $500-3,000+ for deck repairs, rafter reinforcement, or structural modifications.
                            </SecondaryText>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="bg-primaryblue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">⚡</span>
                            </div>
                            <HeaderText variant="small" className="text-primaryblue mb-2">Upgrades & Accessories</HeaderText>
                            <SecondaryText className="text-gray-600">
                                $500-2,000+ for gutters, skylights, ventilation improvements, or insulation upgrades.
                            </SecondaryText>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI and Value Section */}
            <Row
                title={`Roof Replacement ROI in ${location.name}`}
                description={`A new roof replacement in ${location.name} typically recoups 60-70% of its cost in increased home value. Beyond immediate value, new roofs provide energy savings, reduced maintenance costs, and enhanced curb appeal. Quality materials like metal roofing can provide even higher returns through energy efficiency and longevity. Insurance companies often offer discounts for impact-resistant materials, further improving your investment return.`}
                imageSrc="/images/dynamic/roof-replacement/roofing-replacement3.webp"
                className="py-16"
                headerColor="text-primaryblue"
                bodyColor="text-gray-600"
            />

            {/* Financing Options */}
            <Row
                title="Roof Replacement Financing Options"
                description={`Don't let upfront costs delay necessary roof replacement in ${location.name}. We offer multiple financing solutions including 0% APR options, extended payment plans, and home improvement loans. Many homeowners qualify for insurance coverage for storm damage. We also work with major financing partners to provide competitive rates and terms that fit your budget. Contact us to discuss financing options that make roof replacement affordable.`}
                imageSrc="/images/roof-service/roof-repair/roof-repair4.jpg"
                reverse
                className="py-16"
                headerColor="text-primaryblue"
                bodyColor="text-gray-600"
            />

            {/* Money-Saving Tips */}
            <section className="py-16 bg-primaryblue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <HeaderText as="h2" className="text-center text-white mb-12">
                        Money-Saving Tips for Roof Replacement in {location.name}
                    </HeaderText>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Get Multiple Quotes</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Compare detailed estimates from 3-4 licensed contractors. Look for itemized pricing and warranty details, not just the lowest bid.
                            </SecondaryText>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Time Your Project</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Late fall and winter often offer better pricing as demand decreases. Avoid peak storm seasons when contractors are busiest.
                            </SecondaryText>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Check Insurance Coverage</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Storm damage may be covered by homeowner&apos;s insurance. Have your roof inspected after severe weather events.
                            </SecondaryText>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Choose Value Materials</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Architectural shingles offer the best balance of cost, durability, and appearance for most {location.name} homes.
                            </SecondaryText>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Bundle Related Work</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Combine roof replacement with gutter installation or siding repairs to save on mobilization and setup costs.
                            </SecondaryText>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <HeaderText variant="small" className="text-white mb-3">Maintain Your Investment</HeaderText>
                            <SecondaryText className="text-blue-100">
                                Regular maintenance and prompt repairs extend roof life, maximizing your roof replacement investment value.
                            </SecondaryText>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Calculator Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <HeaderText as="h2" className="text-primaryblue mb-6">
                        Estimate Your Roof Replacement Cost
                    </HeaderText>
                    <SecondaryText className="mb-8">
                        Use this rough calculator to estimate your roof replacement cost in {location.name}. For accurate pricing, schedule a free professional estimate.
                    </SecondaryText>

                    <div className="bg-gray-50 rounded-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div>
                                <HeaderText variant="small" className="text-primaryblue mb-4">Quick Calculation Formula:</HeaderText>
                                <SecondaryText className="space-y-2">
                                    <div>1. Measure roof area (length × width)</div>
                                    <div>2. Divide by 100 to get &apos;squares&apos;</div>
                                    <div>3. Multiply by material cost per square:</div>
                                    <div className="ml-4">• Asphalt: $400-$1,200 per square</div>
                                    <div className="ml-4">• Metal: $900-$1,800 per square</div>
                                    <div className="ml-4">• Tile: $1,200-$4,000 per square</div>
                                    <div>4. Add $200-$400 per square for labor</div>
                                    <div>5. Add 10-20% for permits, disposal, extras</div>
                                </SecondaryText>
                            </div>

                            <div className="bg-white rounded-lg p-6">
                                <HeaderText variant="small" className="text-primaryblue mb-4">Example: 2,000 sq ft home</HeaderText>
                                <SecondaryText className="space-y-2">
                                    <div>• Roof area: ~2,400 sq ft (24 squares)</div>
                                    <div>• Architectural shingles: $800/square</div>
                                    <div>• Materials: 24 × $800 = $19,200</div>
                                    <div>• Labor: 24 × $300 = $7,200</div>
                                    <div>• Additional costs: $2,640</div>
                                    <div className="font-bold border-t pt-2">Total: ~$29,040</div>
                                </SecondaryText>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/estimate"
                                className="bg-primaryblue hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                            >
                                Get Accurate Free Estimate
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Replace Section */}
            <TextImgRow
                title="When Does Roof Replacement Make Sense?"
                description={`Knowing when to replace versus repair your roof in ${location.name} saves money and prevents damage. Replace when: your roof is 20+ years old, has multiple leaks or extensive damage, repair costs exceed 50% of replacement cost, or you're planning to sell your home. New roofs provide peace of mind, energy savings, and enhanced protection that repairs can't match.`}
                imageSrc="/images/roof-service/roof-replacement/roof-replacement.avif"
                imageAlt="When to replace your roof decision factors"
            />

            {/* FAQ Section */}
            <FAQ locationName={location.name} />

            {/* Final CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <HeaderText as="h2" className="text-primaryblue mb-6">
                        Ready for Your Exact Roof Replacement Cost?
                    </HeaderText>
                    <SecondaryText className="mb-8">
                        Get a detailed, itemized estimate for your roof replacement in {location.name}. Our licensed contractors provide transparent pricing with no hidden fees or surprises.
                    </SecondaryText>
                    <div className="space-y-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">✓ Free Estimates</span>
                            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">✓ Licensed & Insured</span>
                            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">✓ Financing Available</span>
                            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">✓ Warranty Included</span>
                        </div>
                    </div>
                </div>
            </section>

            <GetEstimate location={location.name} />
        </div>
    );
}