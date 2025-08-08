import {Metadata} from 'next';
import {Calculator, Home} from 'lucide-react';
import RoofPitchCalculatorClient from '@/components/PitchCalc';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import FAQSection from '@/components/FAQSection';
import Image from 'next/image';

// Export metadata for SEO
export const metadata: Metadata = {
    title: 'Roof Pitch Calculator | Calculate Roof Slope & Angle',
    description: 'Calculate your roof pitch, angle, and slope with our professional roofing calculator. Get instant results for rise/run, degrees, and percentage.',
    keywords: [
        'roof pitch calculator',
        'roof slope calculator',
        'roof angle calculator',
        'roofing calculator',
        'rise over run calculator',
        'roof pitch chart',
        'roofing tools',
        'Philadelphia roofer',
        'roof measurement',
        'roofing contractor'
    ],
    openGraph: {
        title: 'Roof Pitch Calculator - Paragon Exterior',
        description: 'Professional roof pitch calculator. Calculate roof slope, angle, and pitch notation instantly. Tool by Paragon Exterior roofing contractors.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Paragon Exterior',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roof Pitch Calculator - Paragon Exterior',
        description: 'Calculate your roof pitch, angle, and slope with our professional roofing calculator. Get instant results and expert advice.',
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
export default function RoofPitchCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Server-side rendered */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Calculator className="w-16 h-16 text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Roof Pitch Calculator
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Calculate your roof pitch, angle, and slope with our professional roofing calculator
                        </p>
                        <div className="mt-6 inline-flex items-center bg-blue-800 rounded-full px-6 py-2">
                            <Home className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Tool by Paragon Exterior</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client-side interactive component */}
            <RoofPitchCalculatorClient />



            <div className='mx-auto w-11/12 bg-white rounded-2xl shadow-lg my-16 py-12 px-8'>
                <HeaderText>
                    What is a Roof Pitch?
                </HeaderText>

                <SecondaryText>
                    A Roof&apos;s pitch is the slope created by the rafter. It can be measured in two ways <br/>
                    1) As the angle the rafter makes with the horizontal <br/>
                    2) The proportion between the rise and the run of the roof.<br />
                    <br />
                    Roof pitch is usually expressed as a ratio between rise and run in the form of rise / 12. For example, a pitch of 1:12 means that for every twelve yards of building length, the rise will be equal to one yard.
                </SecondaryText>



                <Image
                    src="/images/pitch-calculator/pitch-diagram.webp"
                    alt="Roof Pitch Calculator"
                    width={800}
                    height={450}
                    className="mx-auto my-8 rounded-lg shadow-lg"
                />



                <HeaderText className='mt-12'>
                    Types of Roof Pitch
                </HeaderText>

                <SecondaryText>
                    Roofs are classified by their pitch—or steepness. Here&apos;s a breakdown of the most common categories:<br /><br />

                    <strong>Flat Roofs</strong><br />
                    These aren&apos;t completely flat—they have a slight slope to allow water to drain off. Flat roofs typically range from 0.5:12 to 2:12 in pitch (about 4%–17%).<br /><br />

                    <strong>Low-Pitched Roofs</strong><br />
                    Any roof with a pitch under 4:12 (or 33%) is considered low-pitched. These require special waterproof materials and are harder to maintain.<br /><br />

                    <strong>Standard/Moderate Pitched Roofs</strong><br />
                    The most common roof pitch falls between 4:12 and 9:12 (33%–75%). These are easy to build, safe to walk on, and work well with most roofing materials.<br /><br />

                    <strong>Steep or High-Pitched Roofs</strong><br />
                    Roofs with a pitch greater than 9:12 are considered steep. Some go as high as 21:12 (about 175%). These roofs need extra fasteners and safety precautions during installation.
                </SecondaryText>




                <HeaderText className='mt-12'>
                    How to Calculate Roof Pitch
                </HeaderText>

                <SecondaryText>
                    You can figure out your roof pitch using basic math from right triangles. It only takes a couple of measurements—rise and run—to calculate everything you need.<br /><br />

                    Use these formulas to get started:<br /><br />

                    <code className='bg-blue-300/50'>rafter² = rise² + run²</code> &nbsp;&nbsp;{/* Pythagorean Theorem for rafter length */}<br />
                    <code className='bg-orange-300/50'>pitch = rise / run</code> &nbsp;&nbsp;{/* This gives the slope as a percentage */}<br />
                    <code className='bg-yellow-300/50'>pitch = tan(angle)</code> &nbsp;&nbsp;{/* Use this to find pitch from an angle in degrees */}<br /><br />

                    If you want to convert pitch into the standard <code>x:12</code> format, just multiply your slope (rise/run) by 12. For example, a pitch of 0.25 turns into <code>3:12</code>.<br /><br />

                    You can enter any of these values—rise, run, pitch percentage, or angle—into the calculator, and it will fill in the rest for you automatically.
                </SecondaryText>







                <HeaderText className='mt-12'>
                    Roof Slope Calculator – Example of Use
                </HeaderText>

                <SecondaryText>
                    Before jumping into your roof pitch calculations, it&apos;s a good idea to have an angle converter on hand in case you need to switch between degrees and radians. Once that&apos;s ready, here&apos;s how to calculate your roof pitch step-by-step:<br /><br />

                    First, measure the <strong>run</strong>—this is the horizontal distance from the outer wall to the center ridge of your roof. Let&apos;s say the run is <code>6 meters</code>.<br /><br />

                    Next, measure the <strong>rise</strong>—this is how tall the roof rises vertically over that same span. In this case, we&apos;ll use <code>1.5 meters</code>.<br /><br />

                    To figure out the length of the rafter, plug these numbers into the Pythagorean theorem:<br />
                    <br />
                    <label className='bg-primaryblue text-white p-2 my-4 rounded-md'>Step 1</label> <br/>
                    <br />
                    <code className=''>rafter² = rise² + run²</code><br />
                    <code>1.5² + 6² = 2.25 + 36 = 38.25</code><br />
                    <code><span className='bg-yellow-300/50'>rafter</span> = √38.25 = 6.18 meters</code><br /><br />

                    Now calculate the roof slope by dividing rise by run:<br />
                    <br />
                    <label className='bg-primaryblue text-white p-2 my-4 rounded-md'>Step 2</label> <br />
                    <br />
                    <code><span className='bg-yellow-300/50'>pitch</span> = rise / run = 1.5 / 6 = 0.25</code> or <code>25%</code><br /><br />

                    To convert that slope into an angle, take the arctangent of the pitch:<br />
                    <br />
                    <label className='bg-primaryblue text-white p-2 my-4 rounded-md'>Step 3</label> <br />
                    <br />
                    <code><span className='bg-yellow-300/50'>angle</span> = arctan(0.25) = 14°</code><br /><br />

                    Finally, to express the pitch as a ratio (x:12), multiply the slope by 12:<br />
                    <br />
                    <label className='bg-primaryblue text-white p-2 my-4 rounded-md'>Step 4</label> <br />
                    <br />
                    <code><span className='bg-yellow-300/50 px-1'>x</span> = 0.25 × 12 = 3</code><br />
                    So the roof pitch is <code>3:12</code>. That&apos;s the same as <code>25%</code> or <code>14 degrees</code>.<br /><br />

                    If you&apos;ve figured out your pitch and you&apos;re ready to move on, you may want to check out our <a href="/roofing/roof-shingle-calculator" className="text-blue-600 underline">Roof Shingle Calculator</a> to estimate how much material you&apos;ll need.
                </SecondaryText>

                
                <FAQSection
                    title='Roof Pitch Calculator - FAQs'
                    faqs={[
                        {
                            question: "What is the standard roof pitch?",
                            answer: "There’s no single standard for roof pitch—it depends on local climate, building styles, and materials. In the U.S., most roofs fall between 4/12 and 9/12 pitch. In the U.K., roofs tend to range from 40° to 50°, though 45° should be avoided for structural reasons. In warmer climates like Italy, common roof angles are between 16° and 25°."
                        },
                        {
                            question: "How much does it cost to pitch a roof?",
                            answer: "The cost of adding or changing a roof’s pitch depends on the roof’s size, design, access, labor, and materials. In the U.S., asphalt shingles range from $3.19–$4.43 per sq. ft., while wood and metal roofs can range from $7.35–$10.73 per sq. ft. In the U.K., roof fitting averages £72–£75 per square meter. Always get a quote based on your home’s specific conditions."
                        },
                        {
                            question: "What is the minimum roof pitch for snow?",
                            answer: "For snow to slide effectively, a roof should have a pitch of around 6/12 or 7/12 (roughly 30°). However, this isn’t guaranteed—factors like material type, snow direction, and wind also matter. Some roofs with pitches as low as 10° have shed snow, but in snow-heavy areas, a steeper pitch is a safer bet."
                        },
                        {
                            question: "What does a 4/12 roof pitch mean?",
                            answer: "A 4/12 pitch means the roof rises 4 inches for every 12 inches of horizontal run. That’s about an 18.5° angle. It’s a gentle slope that allows for decent water runoff but may not be ideal in heavy snow areas. Asphalt shingles are great for this pitch—rubber or wood shingles are not recommended."
                        },
                        {
                            question: "What is the best roof pitch?",
                            answer: "The best pitch depends on the design and location of your home. Flat modern roofs often use a 1:40 pitch. Gothic-style roofs are very steep—around 60°. In snowy climates, a pitch of 10/12 (40°) or more helps shed snow. In high-wind areas, safer pitches fall between 4/12 and 6/12."
                        },
                        {
                            question: "What is the smallest roof pitch?",
                            answer: "The lowest practical pitch is 0.5/12. Fully flat roofs aren't truly flat—they still need a slight slope to drain water. EPDM rubber is commonly used for flat roofs due to its waterproof durability. Flat roofs cost less and require less maintenance but may not last as long as steeper options."
                        },
                        {
                            question: "What pitch equals 30 degrees?",
                            answer: "A roof pitch of 30° is about the same as a 7/12 pitch. To convert degrees to x:12 format: take the tangent of the angle, then multiply that value by 12. For 30°, tan(30°) ≈ 0.577, so 0.577 × 12 ≈ 7—making it 7:12."
                        },
                        {
                            question: "What is a roof pitch multiplier?",
                            answer: "A roof pitch multiplier, or pitch factor, helps you calculate the actual area of a sloped roof. It’s based on the formula: √((rise/run)² + 1). Multiply your flat roof area by this number to get the true surface area needed for roofing materials. It’s a useful shortcut when estimating supply needs."
                        },
                        {
                            question: "What angle is a 12/12 pitch roof?",
                            answer: "A 12/12 pitch means the roof rises 12 inches for every 12 inches across—a perfect 45° angle. To find this, divide the rise by the run (12 ÷ 12 = 1), then calculate the arctangent of 1, which equals 45°."
                        },
                        {
                            question: "What roof pitch is considered walkable?",
                            answer: "Roofs with a pitch of 6/12 (about 26.5°) or less are usually safe to walk on without special gear. At 7/12 (30°), walking is possible but requires caution. Slopes between 8/12 and 10/12 are riskier and should be approached with safety equipment. Anything steeper than that isn’t walkable without scaffolding or harnesses."
                        },
                        {
                            question: "Can you shingle a 3/12 pitch roof?",
                            answer: "Yes, but extra steps are needed. A 3/12 pitch roof doesn’t drain water quickly, so it’s more prone to leaks. You’ll need an underlayment or waterproof membrane beneath the shingles. Only use shingles that are rated by the manufacturer for low-slope applications—check the packaging to be sure."
                        }
                    ]}
                />



            </div>



        </div>
    );
}