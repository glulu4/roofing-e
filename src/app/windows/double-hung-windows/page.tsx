import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonDoubleHungWindows} from '@/components/WhyParagon';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Double Hung Windows | Professional Double Hung Window Installation',
    description: 'Double hung windows offer timeless style with top and bottom sash operation. Our double hung windows provide versatile ventilation and easy cleaning. Energy-efficient double hung windows fit any architectural style. Trust Paragon Exterior for professional double hung windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Double Hung Windows | Professional Double Hung Window Installation',
        description: 'Double hung windows offer timeless style with top and bottom sash operation. Our double hung windows provide versatile ventilation and easy cleaning. Energy-efficient double hung windows fit any architectural style. Trust Paragon Exterior for professional double hung windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/double-hung/double-hung-hero.webp'],
    },
};

export default function DoubleHungWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Double Hung Windows: Timeless Style Meets Modern Performance"
                subText="There's a reason double hung windows have been America's favorite for over 200 years — they just work beautifully. With both upper and lower sashes that move independently, you get precise ventilation control that no other window style can match. From colonial charm to contemporary elegance, our professional double hung window installation brings the perfect balance of classic appeal and modern energy efficiency to homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/window/double-hung/hero.webp"
                imgAlt="Professional double hung window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/window/double-hung/double1.webp"
                imgAlt="Double hung windows professionally installed on home"
                titleAs="h1"
                title="Why Double Hung Windows Are Still the Gold Standard"
                mainContent="Here&apos;s what makes double hung windows so brilliant: you get two independently operating sashes that create what we call &apos;stack effect ventilation.&apos; Open the top sash to let warm air escape while opening the bottom sash draws in cool, fresh air — it&apos;s like having a natural air conditioning system built right into your windows. Modern double hung windows also feature tilt-in sashes that make cleaning a breeze; no more dangerous ladder work or hiring window cleaners for second-story windows."
                bottomContent="But here's the real secret to double hung window success: the installation quality makes all the difference. We've seen too many DIY jobs where the sashes bind, the weatherstripping fails, or the balance systems break within a year. When Paragon Exterior installs your double hung windows, we use precision measuring, proper shimming, and commercial-grade weatherstripping that keeps them operating smoothly for decades. That's why homeowners across the Greater Philadelphia region trust us for double hung windows that deliver both beauty and performance."
                imagePosition="right"
            />
            <Row
                title="The Smart Ventilation Science Behind Double Hung Windows"
                description="Let me explain why double hung windows work so well for comfortable living. When hot air rises in your room, you can open the top sash to let it escape naturally. At the same time, opening the bottom sash draws in cooler outside air to replace it. This creates a gentle, continuous airflow that's way more comfortable than just opening one big window and getting blasted with wind. Plus, you can fine-tune the exact amount of ventilation by adjusting each sash independently — maybe just crack the top sash for a subtle breeze, or open both wide when you're cooking and need serious air movement. And here's a practical bonus: double hung windows are perfect for window air conditioners because the weight sits on the sturdy bottom sash."
                imageSrc="/images/window/double-hung/double2.webp"
            />
            <Row
                title="Where Double Hung Windows Really Shine in Your Home"
                description="Double hung windows are the chameleons of the window world — they fit beautifully almost anywhere. Bedrooms are perfect because you can crack just the top sash for fresh air without worrying about security or rain blowing in. In living rooms, they maintain that classic look while giving you complete control over airflow for movie nights or dinner parties. Kitchens benefit from the dual-sash ventilation when you're cooking something aromatic. And here's something most people don't think about: double hung windows work great in bathrooms because you can open the top sash for humidity control while keeping privacy with the bottom sash closed. They're also ideal for any room where you need to fit window treatments — their clean lines work with everything from traditional curtains to modern blinds."
                imageSrc="/images/window/double-hung/double3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Why Double Hung Window Installation Matters More Than You Think"
                description="Here's the truth about double hung windows: they have more moving parts than any other window type, which means there are more things that can go wrong if they're not installed perfectly. Each sash needs its own balance system — those are the spring-loaded mechanisms that keep the sashes from crashing down when you let go. Get those wrong, and you'll be propping windows open with sticks within a year. Then there's the weatherstripping, which has to seal around both sashes while still allowing them to move freely. And don't get me started on the alignment — if the frame isn't perfectly square and plumb, those sashes will bind up and become impossible to operate. That's why we take our time with every installation, checking and double-checking every detail. When we're done, your windows will glide like butter and seal tight against the weather for years to come."
                imageSrc="/images/window/double-hung/double4.webp"
            />

            {/* Double Hung Window Benefits Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Double Hung Windows vs. Other Window Types
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Wondering if double hung windows are right for your home? Let&apos;s compare them to the alternatives. Unlike casement windows that swing out and can block walkways, double hung windows keep all their moving parts inside the frame. Unlike single hung windows where only the bottom sash moves, you get twice the ventilation control. And unlike slider windows that can collect dirt in their tracks, double hung windows have fewer horizontal surfaces where debris can build up.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Superior ventilation control with two operating sashes",
                                    "Classic style that complements any architecture",
                                    "Easy cleaning with tilt-in sashes",
                                    "Better security — you can ventilate while keeping the bottom locked",
                                    "Compatible with most window AC units",
                                    "Minimal maintenance compared to windows with external hardware"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Image
                                width={600}
                                height={400}
                                src="/images/window/double-hung/double1.webp"
                                alt="Double hung window features and benefits"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost and Investment Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Double Hung Window Investment and Energy Savings
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Quality double hung windows are an investment in your home&apos;s comfort, efficiency, and value. Modern double hung windows with Low-E glass and proper installation can reduce your energy bills by 15-25% compared to old, leaky windows. Plus, they&apos;re one of the most cost-effective window styles — you get premium functionality without the higher price tag of specialty windows like bays or bows.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">15-25%</div>
                            <div className="text-gray-600">Energy bill reduction with new double hung windows</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">20+ years</div>
                            <div className="text-gray-600">Expected lifespan with professional installation</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-2">70-80%</div>
                            <div className="text-gray-600">ROI when selling your home</div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyParagonDoubleHungWindows
                title="Why Choose Paragon Exterior for Double Hung Windows?"
                titleAs="h2"
            />
            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}
