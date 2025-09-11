import {Metadata} from 'next';
import {Calculator, Home, Clock, TrendingUp} from 'lucide-react';
import RoofLifespanCalculatorClient from '@/components/RoofLifespanCalc';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import FAQSection from '@/components/FAQSection';

// Export metadata for SEO
export const metadata: Metadata = {
    title: 'Roof Lifespan Calculator | How Long Will My Roof Last?',
    description: 'Calculate your roof\'s expected lifespan based on material type, age, and local climate. Get instant results for roof maintenance and replacement.',
    keywords: [
        'roof lifespan calculator',
        'roof life expectancy',
        'how long does roof last',
        'roof replacement calculator',
        'roof age calculator',
        'roofing material lifespan',
        'climate roof impact',
        'Philadelphia roofer',
        'roof maintenance schedule',
        'roofing contractor'
    ],
    openGraph: {
        title: 'Roof Lifespan Calculator - Paragon Exterior',
        description: 'Calculate your roof\'s expected lifespan based on material type, climate, and age. Professional roofing tool by Paragon Exterior contractors.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Paragon Exterior',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roof Lifespan Calculator - Paragon Exterior',
        description: 'Calculate your roof\'s expected lifespan and get professional recommendations for maintenance and replacement timing.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// Static page component (server-side)
export default function RoofLifespanCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Server-side rendered */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Clock className="w-16 h-16 text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Roof Lifespan Calculator
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Discover how long your roof will last based on material type, climate, and current age
                        </p>
                        <div className="mt-6 inline-flex items-center bg-blue-800 rounded-full px-6 py-2">
                            <Home className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Professional Assessment Tool</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client-side interactive component */}
            <RoofLifespanCalculatorClient />

            <div className='mx-auto w-11/12 bg-white rounded-2xl shadow-lg my-16 py-12 px-8'>
                <HeaderText>
                    Understanding Roof Lifespan
                </HeaderText>

                <SecondaryText>
                    Your roof&apos;s lifespan depends on several critical factors: the material used, your local climate conditions, installation quality, and maintenance practices. Different roofing materials have vastly different expected lifespans - from 15-25 years for basic asphalt shingles to over 100 years for premium slate tiles.<br/>
                    <br />
                    Climate plays a major role in determining actual roof life. Hot, humid climates with frequent storms can reduce a roof&apos;s lifespan by 15-20%, while temperate climates allow materials to reach their full potential. Understanding these factors helps you plan maintenance, budget for replacement, and make informed decisions about repairs versus replacement.
                </SecondaryText>

                <HeaderText className='mt-12'>
                    Climate Impact on Roof Materials
                </HeaderText>

                <SecondaryText>
                    <strong>Hot & Humid Climates (Southeast US)</strong><br />
                    High heat, humidity, and frequent storms create the most challenging conditions for roofing materials. UV radiation breaks down asphalt shingles faster, while moisture promotes algae growth and can lead to premature deterioration. Hurricane-force winds also accelerate wear.<br /><br />

                    <strong>Hot & Dry Climates (Southwest US)</strong><br />
                    Extreme heat and intense UV radiation are the primary concerns in desert climates. While the lack of moisture prevents some types of damage, the constant thermal expansion and contraction can cause materials to become brittle over time.<br /><br />

                    <strong>Cold & Wet Climates (Pacific Northwest, Great Lakes)</strong><br />
                    Freeze-thaw cycles, heavy snow loads, and persistent moisture create unique challenges. Ice dams can cause water backup, while constant moisture exposure can lead to rot in organic materials like wood shingles.<br /><br />

                    <strong>Coastal Areas</strong><br />
                    Salt air is highly corrosive to metal components and can accelerate the deterioration of many roofing materials. High winds from ocean storms also create additional stress on roofing systems.<br /><br />

                    <strong>Temperate Zones</strong><br />
                    Moderate climates with balanced temperature and moisture provide the best conditions for most roofing materials to achieve their maximum expected lifespan.
                </SecondaryText>

                <HeaderText className='mt-12'>
                    When Should You Replace Your Roof?
                </HeaderText>

                <SecondaryText>
                    The decision to replace your roof shouldn&apos;t be based solely on age. Here are key indicators that it&apos;s time for replacement:<br /><br />

                    <strong>Age-Based Guidelines:</strong><br />
                    • <strong>75%+ of expected lifespan:</strong> Start planning and getting quotes<br />
                    • <strong>90%+ of expected lifespan:</strong> Schedule professional inspection<br />
                    • <strong>100%+ of expected lifespan:</strong> Prioritize replacement to prevent damage<br /><br />

                    <strong>Physical Signs Requiring Immediate Attention:</strong><br />
                    • Multiple missing, cracked, or curling shingles<br />
                    • Granule loss creating bald spots on asphalt shingles<br />
                    • Water stains on interior ceilings or walls<br />
                    • Sagging roofline or visible structural issues<br />
                    • Daylight visible through the roof decking<br />
                    • Moss or algae growth (indicates moisture retention)<br /><br />

                    Remember, replacing a roof before complete failure is always more cost-effective than dealing with water damage to your home&apos;s interior and structure.
                </SecondaryText>

                <FAQSection
                    title='Roof Lifespan Calculator - FAQs'
                    faqs={[
                        {
                            question: "How accurate are roof lifespan estimates?",
                            answer: "Roof lifespan estimates are based on industry averages and typical climate conditions. Actual lifespan can vary based on installation quality, maintenance, specific weather events, and individual material batches. Professional inspections provide the most accurate assessment of your specific roof's condition."
                        },
                        {
                            question: "Which roofing material lasts the longest?",
                            answer: "Slate roofs have the longest lifespan, often lasting 100-150 years with proper maintenance. Clay tiles are second at 75-100 years, followed by metal roofing at 40-70 years. However, the 'best' material depends on your budget, climate, and architectural style."
                        },
                        {
                            question: "Does regular maintenance really extend roof life?",
                            answer: "Yes, significantly. Regular maintenance can extend a roof's life by 20-40%. This includes annual inspections, prompt repair of minor issues, gutter cleaning, debris removal, and addressing moss or algae growth. Prevention is always more cost-effective than replacement."
                        },
                        {
                            question: "How does climate change affect roof lifespan calculations?",
                            answer: "Climate change is increasing the frequency of extreme weather events, which can shorten roof lifespans. More intense storms, higher temperatures, and changing precipitation patterns may reduce expected lifespans by 5-10% in some regions. This is already factored into our climate adjustments."
                        },
                        {
                            question: "Should I replace my roof before it fails completely?",
                            answer: "Absolutely. Replacing a roof at 85-90% of its expected lifespan prevents costly water damage to your home's interior, insulation, and structure. It also allows you to plan the project timing and budget rather than facing an emergency replacement."
                        },
                        {
                            question: "How much does roof replacement cost per square foot?",
                            answer: "Costs vary significantly by material and region. Asphalt shingles typically cost $3-7 per sq ft installed, metal roofing $7-15 per sq ft, and premium materials like slate can exceed $20 per sq ft. Get multiple quotes for accurate local pricing."
                        },
                        {
                            question: "Can I install a new roof over the existing one?",
                            answer: "In some cases, yes, but it's not always recommended. Overlaying is cheaper initially but adds weight, hides underlying problems, and may void warranties. Most building codes limit overlays to one additional layer. A complete tear-off is often the better long-term investment."
                        },
                        {
                            question: "What's the best time of year for roof replacement?",
                            answer: "Late spring through early fall typically offers the best weather conditions. However, roofing contractors are busiest (and most expensive) during these peak seasons. Winter replacement is possible in moderate climates and may offer cost savings due to lower demand."
                        },
                        {
                            question: "How do I choose between repair and replacement?",
                            answer: "Generally, if repair costs exceed 25% of replacement cost, or if your roof is over 75% of its expected lifespan, replacement is more economical. Multiple repairs needed simultaneously also indicate it's time to replace rather than continue patching."
                        },
                        {
                            question: "Do energy-efficient roofs really last longer?",
                            answer: "Cool roofs and energy-efficient materials often do last longer because they experience less thermal stress. Reflective coatings and lighter colors reduce heat absorption, while proper ventilation prevents moisture buildup. These factors can add 10-20% to a roof's lifespan in hot climates."
                        }
                    ]}
                />
            </div>
        </div>
    );
}