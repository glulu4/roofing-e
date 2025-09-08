import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonCasementWindows} from '@/components/WhyParagon';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Casement Windows | Professional Casement Window Installation',
    description: 'Casement windows deliver excellent ventilation and unobstructed views. Our casement windows swing open for full airflow and easy cleaning. Energy-efficient casement windows keep drafts out. Choose Paragon Exterior for professional casement windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Casement Windows | Professional Casement Window Installation',
        description: 'Casement windows deliver excellent ventilation and unobstructed views. Our casement windows swing open for full airflow and easy cleaning. Energy-efficient casement windows keep drafts out. Choose Paragon Exterior for professional casement windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/casement/casement-hero.webp'],
    },
};

export default function CasementWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Casement Windows: Maximum Views, Maximum Ventilation"
                subText="If you want windows that open completely out of your way and catch every breeze, casement windows are your answer. These side-hinged beauties swing open like doors, giving you 100% unobstructed views and ventilation that no sliding window can match. From modern homes to classic cottages, our professional casement window installation brings both style and superior performance to homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/window/casement/hero.webp"
                imgAlt="Professional casement window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/window/casement/case1.webp"
                imgAlt="Casement windows professionally installed on home"
                titleAs="h1"
                title="Why Casement Windows Are the Ventilation Champions"
                mainContent="Think of casement windows as the sports cars of the window world — everything about them is designed for performance. When you crank a casement window open, the entire glass area becomes your opening, not just half like with double-hung windows. This means you can catch cross-breezes that would barely register with other window types. And here&apos;s the really clever part: casement windows act like funnels, actually pulling air into your home when positioned correctly. The way they swing outward creates a pressure differential that draws fresh air inside."
                bottomContent="But the real magic happens when you close them. Casement windows use compression sealing, which means the more wind pressure hits them, the tighter they seal against the frame. That&apos;s why casement windows consistently outperform other window types in energy efficiency tests. When Paragon Exterior installs your casement windows, we make sure the crank mechanism operates smoothly and the weatherstripping creates that perfect compression seal that keeps your home comfortable year-round."
                imagePosition="right"
            />
            <Row
                title="The Casement Window Advantage: What Makes Them Special"
                description="Let me tell you what makes casement windows so popular with architects and homeowners who really understand windows. First, that full opening gives you ventilation control that's just not possible with other styles — you can catch side winds, create cross-breezes, and actually direct airflow into your room. Second, cleaning is a dream because both sides of the glass are accessible from inside your home when you open the window. Third, the unobstructed glass area means maximum natural light and clearer views of your garden or landscape. And here's something that might surprise you: casement windows are actually more secure than most people think because the lock hardware engages at multiple points around the frame, not just at one latch like sliding windows."
                imageSrc="/images/window/casement/case2.webp"
            />
            <Row
                title="Perfect Spots for Casement Windows in Your Home"
                description="Casement windows have a few favorite spots where they really shine. Kitchens are probably the most popular location, especially over sinks, because you can easily crank them open with one hand while doing dishes, and they provide great ventilation for cooking odors. Bathrooms love casement windows because you can open them wide for humidity control, then close them tight for privacy and weather sealing. Home offices and studies benefit from the unobstructed views and the ability to control airflow precisely. And here's a secret: casement windows are fantastic in bedrooms because you can open them just a crack for fresh air while sleeping, or wide open for quick morning ventilation. They're also perfect anywhere you want to maximize views — since there's no center bar or sash, you get an uninterrupted vista of your landscape."
                imageSrc="/images/window/casement/case3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="The Art of Casement Window Installation"
                description="Installing casement windows properly is like setting up a precision instrument — everything has to be perfectly aligned or the performance suffers. The crank mechanism needs to be calibrated so the window opens effortlessly and closes with just the right amount of compression against the weatherstripping. The hinges have to be positioned exactly right so the window swings freely without binding or sagging. And here's the critical part: the frame has to be perfectly plumb and square, because unlike sliding windows that can compensate for slight irregularities, casement windows will bind up if the frame is even slightly out of true. That's why we take extra time during installation to measure, level, and adjust every component. When we're done, your casement windows will operate smoothly for decades and maintain that tight seal that makes them so energy efficient."
                imageSrc="/images/window/casement/case4.webp"
            />

            {/* Casement Window Considerations Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Casement Windows: What You Should Know Before You Buy
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Casement windows are fantastic, but they&apos;re not right for every situation. Let&apos;s talk honestly about when they work best and when you might want to consider alternatives. The biggest consideration is clearance — casement windows need space to swing open, so they won&apos;t work where they&apos;d hit a deck railing, walkway, or landscaping. They also require sturdy screens on the inside, which some people find less convenient than exterior screens.
                            </p>
                            <p className="text-gray-700 mb-6">
                                But when the conditions are right, casement windows are hard to beat. They&apos;re particularly excellent for modern and contemporary homes, coastal properties where you want to catch ocean breezes, and anywhere you prioritize energy efficiency and ventilation control over traditional aesthetics.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Best energy efficiency of any operable window type",
                                    "Maximum ventilation with 100% opening area",
                                    "Superior weather resistance with compression seals",
                                    "Easy cleaning from inside your home",
                                    "Excellent security with multi-point locking",
                                    "Unobstructed views with no center rails"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <span className="text-blue-600 font-bold">✓</span>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Image
                                width={600}
                                height={400}
                                src="/images/window/casement/case1.webp"
                                alt="Casement window functionality and features"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Efficiency and Value Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Casement Windows: Superior Performance and Value
                    </h2>
                    <p className="text-gray-700 mb-8">
                        When it comes to energy performance, casement windows consistently outrank other operable window types. The compression seal technology means tighter weatherstripping, better insulation, and lower energy bills. Plus, because they operate so smoothly and seal so well, casement windows tend to last longer with less maintenance than windows with sliding mechanisms.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">30%</div>
                            <div className="text-gray-600">Better air sealing than double-hung windows</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-600">Ventilation opening compared to 50% with sliding windows</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">25+ years</div>
                            <div className="text-gray-600">Expected lifespan with minimal maintenance</div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyParagonCasementWindows
                title="Why Choose Paragon Exterior for Casement Windows?"
                titleAs="h2"
            />
            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}
