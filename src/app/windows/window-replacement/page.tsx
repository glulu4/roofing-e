import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import IncentivesSection from '@/components/service-page/Incentive';
import Reasons from '@/components/service-page/Reasons';
import {WhyParagonWindowReplacement} from '@/components/WhyParagon';

export const metadata = {
    title: 'Window Replacement Services Near Me',
    description: 
    'Paragon Exterior is your expert window replacement company in PA, NJ, and DE. We offer complete window replacement & installation.',
    keywords: 'window replacement, window replacement near me, new windows, energy efficient windows, vinyl window replacement, residential window replacement, window installation, window replacement contractors',
    openGraph: {
        title: 'Professional Window Replacement Services | Paragon Exterior',
        description: 'Transform your home with professional window replacement services. Energy-efficient window replacement that enhances comfort and reduces energy costs.',
        type: 'website',
        images: ['/images/windows/window-replacement/window-replacement-hero.webp'],
    },
};

export default function WindowReplacementPage() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Professional Window Replacement Services"
                subText="Upgrade your home’s comfort, efficiency, and value with energy-efficient window replacement from Paragon Exterior. Our certified window replacement contractors serve Pennsylvania, New Jersey, and Delaware with the region’s best products and installation practices—guaranteed to deliver results that last."
                imgSrc="/images/window/window-replace/hero.webp"
                imgAlt="Professional window replacement installation team installing new energy-efficient windows"
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/window/window-replace/replacement1.webp"
                imgAlt="Window replacement contractor installing new vinyl windows"
                titleAs="h1"
                title="Window Replacement That Transforms Your Home"
                mainContent={
                    <>
                        <SecondaryText>
                            Old, drafty, or broken windows aren’t just an eyesore—they can drain your wallet through higher energy bills and allow costly weather damage to your home. Paragon Exterior offers full-service window replacement that goes beyond “just new glass.” Our expert team guides you through every step, from window selection to custom measurement, precision installation, and final walkthrough. We install energy-efficient windows that <strong>reduce utility costs, eliminate drafts, block noise, and boost your curb appeal</strong>.
                        </SecondaryText>
                        <SecondaryText className="mt-4">
                            Whether you’re replacing one window or upgrading your entire home, our window replacement process is built for <strong>maximum performance and long-term value</strong>. We carry all major brands and window types, including <strong>vinyl, fiberglass, wood, and composite</strong>. Let us help you select the perfect style, finish, and features to match your needs and your budget.
                        </SecondaryText>
                    </>
                }
                bottomContent={
                        <SecondaryText>
                            Every project is backed by our industry-leading warranties and meticulous attention to detail. From insulated glass to custom trim, Paragon Exterior delivers a seamless, stress-free window replacement experience for homeowners throughout the Greater Philadelphia region, South Jersey, and Delaware.
                        </SecondaryText>
                }
                imagePosition="right"
            />

            {/* WINDOW REPLACEMENT BENEFITS */}
            <IncentivesSection
                className="py-16"
                title="Benefits of Professional Window Replacement"
                titleAs="h2"
                subtitle="Enjoy immediate and long-term rewards when you invest in new, energy-efficient windows. Discover why thousands of homeowners throughout PA, NJ, and DE trust Paragon Exterior for window replacement."
                heroImage={{
                    alt: "Benefits of professional window replacement installation",
                    src: "/images/window/window-replace/replacement2.webp"
                }}
                incentives={[
                    {
                        name: "Lower Utility Bills",
                        description: "Energy-efficient windows can reduce heating and cooling costs by up to 30%, thanks to advanced glass, insulated frames, and precision installation that stops drafts and leaks.",
                        imageSrc: "/images/window/window-replace/icons/windmill.svg",
                        imageAlt: "Energy-efficient window replacement benefits"
                    },
                    {
                        name: "Enhanced Home Value",
                        description: "Window replacement is one of the highest-ROI home improvements, returning 70-80% of your investment and making your home more attractive to buyers.",
                        imageSrc: "/images/window/window-replace/icons/house-line.svg",
                        imageAlt: "Window replacement home value increase"
                    },
                    {
                        name: "Greater Comfort & Security",
                        description: "Say goodbye to cold spots, hot rooms, and outside noise. Our new windows are built for year-round comfort and come standard with secure locking systems for peace of mind.",
                        imageSrc: "/images/window/window-replace/icons/shield-check.svg",
                        imageAlt: "Window replacement comfort and security benefits"
                    },
                ]}
                imagePosition="left"
            />

            {/* COST AND VALUE SECTION */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <HeaderText as="h2" className="mb-6">
                            Window Replacement Cost and Investment Value
                        </HeaderText>
                        <SecondaryText className="max-w-4xl mx-auto">
                            <strong>How much does window replacement cost?</strong> Most homeowners invest $300-1,500 per window, depending on size, style, and material. Our transparent pricing ensures you know exactly what you’re getting with no surprises—and every quote includes installation, removal, cleanup, and warranty.
                        </SecondaryText>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Standard Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$300-600</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                High-quality vinyl or fiberglass windows. Perfect for homeowners who want modern energy savings and reliability at a reasonable price.
                            </SecondaryText>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primaryblue">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Premium Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$600-900</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                Advanced glass, composite or premium vinyl, enhanced warranties, and more custom options for beauty, durability, and maximum performance.
                            </SecondaryText>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Luxury Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$900-1500</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                Custom wood, high-end fiberglass, or specialty architectural windows for luxury homes. Top-tier energy ratings and curb appeal.
                            </SecondaryText>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <SecondaryText className="text-gray-600">
                            Window replacement cost includes professional installation, removal of old windows, and basic trim. Price can vary based on unique installation needs, custom sizes, or specialty finishes. Ask for a free, no-pressure estimate!
                        </SecondaryText>
                    </div>
                </div>
            </section>

            {/* PROCESS & SELECTION */}
            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText as="h2">Why Choose Paragon Exterior for Window Replacement?</HeaderText>
                    <SecondaryText>
                        From first call to final walkthrough, our certified window replacement contractors deliver professional service, exceptional products, and a satisfaction guarantee on every window we install. Our clients enjoy industry-best warranties and responsive support—even after the job is done.
                    </SecondaryText>
                </div>
                <Row
                    title="Our Proven Window Replacement Process"
                    description="Every project starts with a thorough consultation and measurement. We help you select the best windows for your needs, secure any necessary permits, and install your new windows with careful attention to detail—leaving your home spotless and more comfortable than ever."
                    imageSrc="/images/window/window-replace/replacement3.webp"
                />
                <Row
                    title="Find the Perfect Windows for Your Home"
                    description="We offer a full selection of window styles and materials: double-hung, casement, sliding, picture, bay and bow, as well as specialty and custom shapes. Choose from leading brands in vinyl, fiberglass, wood, and composite for a look that’s uniquely yours."
                    imageSrc="/images/window/window-replace/replacement4.webp"
                    reverse
                    className="pt-12 lg:pt-24"
                />
                <Row
                    title="Energy-Efficient Window Technology"
                    description="Today’s windows use advanced glazing, Low-E coatings, argon or krypton gas fills, and insulated frames to deliver unmatched energy savings and comfort. Ask about ENERGY STAR® rated options for maximum rebates and year-round efficiency."
                    imageSrc="/images/window/window-replace/replacement5.webp"
                    className="pt-12 lg:pt-24"
                />
            </div>

            {/* REASONS SECTION */}
            <Reasons
                title="6 Reasons Homeowners Choose Window Replacement"
                description="Professional window replacement is about more than appearance—it’s an investment in comfort, efficiency, and long-term value. Here’s why so many local homeowners trust Paragon Exterior."
                titleAs="h2"
                reasons={[
                    {
                        name: 'Dramatic Energy Savings',
                        description:
                            'ENERGY STAR® certified window replacement can cut heating and cooling costs by 20-30% or more.',
                    },
                    {
                        name: 'All-Season Comfort',
                        description:
                            'Say goodbye to cold drafts in winter and stifling rooms in summer with tight-sealing new windows.',
                    },
                    {
                        name: 'Real Estate Value',
                        description:
                            'Window replacement remains one of the most cost-effective upgrades for resale value and buyer appeal.',
                    },
                    {
                        name: 'Improved Security',
                        description:
                            'New windows offer enhanced locks, shatter-resistant glass, and safer emergency exits.',
                    },
                    {
                        name: 'Low Maintenance',
                        description:
                            'Modern windows require little upkeep, resist rot and corrosion, and look great for decades.',
                    },
                    {
                        name: 'Warranty Peace of Mind',
                        description:
                            'Comprehensive warranties on both products and installation are included with every window replacement job.',
                    },
                ]}
                img={{
                    src: '/images/window/window-replace/replace6.webp',
                    alt: 'Benefits of professional window replacement services',
                }}
            />

            {/* WINDOW TYPES */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <HeaderText as="h2" className="text-center mb-12">Types of Windows We Replace & Install</HeaderText>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Vinyl Windows</h3>
                            <p className="text-gray-600">Vinyl windows are America’s #1 choice for energy efficiency, value, and maintenance-free performance. Available in dozens of colors and styles to suit any home.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fiberglass Windows</h3>
                            <p className="text-gray-600">Our fiberglass windows offer premium strength, energy savings, and design flexibility. They resist warping and last for decades, even in harsh weather.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Wood Windows</h3>
                            <p className="text-gray-600">Classic wood windows add timeless beauty and warmth. With today’s treatments, wood windows deliver impressive insulation and longevity.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Composite Windows</h3>
                            <p className="text-gray-600">Composite windows offer the natural look of wood with the toughness of modern materials, giving you the best of both worlds for performance and aesthetics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection
                title="Window Replacement FAQ"
                faqs={[
                    {
                        question: "How much does window replacement cost?",
                        answer: "Window replacement costs range from $300 to $1,500 per window, installed. Pricing varies by size, style, material, and features. All Paragon Exterior estimates include installation, old window removal, cleanup, and warranty.",
                    },
                    {
                        question: "How long does window replacement take?",
                        answer: "Most window replacement projects are completed in 1-2 days. We strive to minimize disruption and leave your home spotless.",
                    },
                    {
                        question: "What are the most energy-efficient replacement windows?",
                        answer: "We install ENERGY STAR® rated vinyl, fiberglass, and composite windows with Low-E glass and gas fills for best-in-class efficiency. We’ll help you compare options for your home and budget.",
                    },
                    {
                        question: "Is financing available for window replacement?",
                        answer: "Yes! We offer flexible financing options and accept all major credit cards, making it easy to invest in energy-saving new windows.",
                    },
                    {
                        question: "Do I need a permit for window replacement?",
                        answer: "Most like-for-like window replacement projects do not require permits, but we handle any paperwork or inspection needs for you.",
                    },
                    {
                        question: "Do you handle whole-home window replacement?",
                        answer: "Absolutely. We specialize in both single window upgrades and complete home window replacement projects.",
                    }
                ]}
            />

            {/* WHY PARAGON WINDOW REPLACEMENT */}
            <WhyParagonWindowReplacement
                title="Why Homeowners Trust Paragon Exterior for Window Replacement"
                titleAs="h2"
                subTitle="With decades of exterior expertise, factory-certified installers, and a true commitment to your satisfaction, Paragon Exterior is the window replacement contractor that local homeowners recommend to family and friends. We’re not finished until you’re delighted with your new windows."
            />

            {/* FINAL CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
