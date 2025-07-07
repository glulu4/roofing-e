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
    title: 'Window Replacement Services | Professional Window Replacement Near Me',
    description: 'Expert window replacement services in Pennsylvania, New Jersey, and Delaware. Professional window replacement contractors offering energy-efficient windows, vinyl windows, and complete window replacement installation. Get your free window replacement estimate today.',
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
                subText="Transform your home with energy-efficient window replacement from Paragon Exterior. Our expert window replacement contractors serve Pennsylvania, New Jersey, and Delaware with quality windows and professional installation that enhances comfort and reduces energy costs."
                imgSrc="/images/window/window-replace/hero.webp"
                imgAlt="Professional window replacement installation team installing new energy-efficient windows"
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/window/window-replace/replacement1.webp"
                imgAlt="Window replacement contractor installing new vinyl windows"
                titleAs="h1"
                title="Window Replacement That Transforms Your Home"
                mainContent="When your windows are outdated, inefficient, or beyond repair, professional window replacement delivers immediate benefits in comfort, energy savings, and home value. Paragon Exterior specializes in complete window replacement services throughout the Greater Philadelphia area, installing energy-efficient windows that reduce utility costs and enhance your home's appearance. Our experienced window replacement contractors handle every aspect of your project, from helping you select the perfect windows to professional installation and cleanup."
                bottomContent="Whether you're planning a single window replacement or whole-house window replacement, our team ensures proper sizing, weatherproofing, and installation techniques that maximize performance and longevity. We work with leading window manufacturers to offer a wide selection of styles, materials, and energy ratings to meet your specific needs and budget."
                imagePosition="right"
            />

            {/* WINDOW REPLACEMENT BENEFITS */}
            <IncentivesSection
                className="py-16"
                title="Benefits of Professional Window Replacement"
                titleAs="h2"
                subtitle="Window replacement offers immediate and long-term benefits that enhance your home's comfort, efficiency, and value. Discover why homeowners throughout PA, NJ, and DE choose professional window replacement services."
                heroImage={{
                    alt: "Benefits of professional window replacement installation",
                    src: "/images/window/window-replace/replacement2.webp"
                }}
                incentives={[
                    {
                        name: "Energy Efficiency Savings",
                        description: "New energy-efficient windows can reduce heating and cooling costs by up to 30% through improved insulation and reduced air infiltration.",
                        imageSrc: "/images/windows/icons/energy-efficient.svg",
                        imageAlt: "Energy-efficient window replacement benefits"
                    },
                    {
                        name: "Enhanced Home Value",
                        description: "Window replacement typically returns 70-80% of investment in increased home value while improving curb appeal and marketability.",
                        imageSrc: "/images/windows/icons/home-value.svg",
                        imageAlt: "Window replacement home value increase"
                    },
                    {
                        name: "Improved Comfort & Security",
                        description: "New windows eliminate drafts, reduce noise transmission, and provide enhanced security features for better home protection.",
                        imageSrc: "/images/windows/icons/comfort-security.svg",
                        imageAlt: "Window replacement comfort and security benefits"
                    },
                ]}
                imagePosition="left"
            />

            {/* WINDOW REPLACEMENT COST AND VALUE */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <HeaderText as="h2" className="mb-6">
                            Window Replacement Cost and Investment Value
                        </HeaderText>
                        <SecondaryText className="max-w-4xl mx-auto">
                            Understanding window replacement cost helps you make informed decisions about your home improvement investment.
                            Our transparent pricing ensures you get the best value for your window replacement project.
                        </SecondaryText>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Standard Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$300-600</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                Quality vinyl and fiberglass windows with standard energy efficiency features. Perfect for budget-conscious homeowners seeking reliable window replacement.
                            </SecondaryText>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primaryblue">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Premium Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$600-900</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                High-performance windows with advanced energy features, superior materials, and enhanced warranties for maximum value and comfort.
                            </SecondaryText>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Luxury Windows</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$900-1500</div>
                            <div className="text-gray-600 mb-4">per window installed</div>
                            <SecondaryText className="text-sm">
                                Premium wood, fiberglass, or specialty windows with custom features, superior energy ratings, and architectural design elements.
                            </SecondaryText>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <SecondaryText className="text-gray-600">
                            *Window replacement cost includes professional installation, disposal of old windows, and basic trim work.
                            Final pricing depends on window size, style, and installation complexity.
                        </SecondaryText>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT ROWS */}
            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText as="h2">Why Choose Paragon Exterior for Window Replacement?</HeaderText>
                    <SecondaryText>
                        Our expert window replacement contractors ensure precise installation, quality materials, and long-term performance.
                        Whether you need single window replacement or whole-house window replacement, we deliver results that enhance your home&apos;s value and efficiency.
                    </SecondaryText>
                </div>

                {/* Window Replacement Process Row */}
                <Row
                    title="Our Professional Window Replacement Process"
                    description="From initial consultation to final inspection, our window replacement process ensures quality results. We handle measurements, permits, professional installation, and cleanup with attention to detail that guarantees proper fit and performance."
                    imageSrc="/images/window/window-replace/replacement3.webp"
                />

                {/* Window Selection Row */}
                <Row
                    title="Choosing the Right Windows for Replacement"
                    description="Our window replacement experts help you select windows that match your home's style, energy goals, and budget. We offer vinyl, fiberglass, wood, and composite windows with various energy ratings and features to optimize comfort and efficiency."
                    imageSrc="/images/window/window-replace/replacement4.webp"
                    reverse
                    className="pt-12 lg:pt-24"
                />

                {/* Energy Efficiency Row */}
                <Row
                    title="Energy-Efficient Window Replacement Benefits"
                    description="Modern window replacement can dramatically improve your home's energy efficiency. New windows with low-E coatings, gas fills, and advanced frames reduce heat transfer, eliminate drafts, and lower utility bills year-round."
                    imageSrc="/images/window/window-replace/replacement5.webp"
                    className="pt-12 lg:pt-24"
                />
            </div>

            {/* WINDOW REPLACEMENT REASONS */}
            <Reasons
                title="6 Key Reasons to Invest in Window Replacement"
                description="Window replacement is more than just improving appearance—it's an investment in comfort, efficiency, and home value. Here's why homeowners across Pennsylvania, New Jersey, and Delaware choose professional window replacement services."
                titleAs="h2"
                reasons={[
                    {
                        name: 'Dramatic Energy Savings',
                        description:
                            'Energy-efficient window replacement can reduce heating and cooling costs by 20-30% through improved insulation and reduced air leakage.',
                    },
                    {
                        name: 'Enhanced Home Comfort',
                        description:
                            'New windows eliminate drafts, reduce hot spots and cold zones, and maintain consistent indoor temperatures throughout your home.',
                    },
                    {
                        name: 'Increased Property Value',
                        description:
                            'Window replacement typically returns 70-80% of investment in home value while improving curb appeal and buyer attraction.',
                    },
                    {
                        name: 'Better Security & Safety',
                        description:
                            'Modern windows feature advanced locking mechanisms, impact-resistant glass options, and easier emergency egress capabilities.',
                    },
                    {
                        name: 'Reduced Maintenance',
                        description:
                            'New windows require minimal maintenance compared to older windows that may need frequent painting, caulking, or hardware repairs.',
                    },
                    {
                        name: 'Professional Installation Warranty',
                        description:
                            'Our window replacement services include comprehensive warranties on both materials and installation for long-term peace of mind.',
                    },
                ]}
                img={{
                    src: '/images/window/window-replace/replacement6.webp',
                    alt: 'Benefits of professional window replacement services',
                }}
            />

            {/* WINDOW TYPES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <HeaderText as="h2" className="text-center mb-12">Window Replacement Options</HeaderText>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Vinyl Window Replacement</h3>
                            <p className="text-gray-600">Energy-efficient vinyl windows offer excellent value, low maintenance, and superior insulation for long-lasting performance.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fiberglass Window Replacement</h3>
                            <p className="text-gray-600">Premium fiberglass windows provide superior durability, energy efficiency, and can be painted to match any home style.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Wood Window Replacement</h3>
                            <p className="text-gray-600">Classic wood windows offer timeless beauty and excellent insulation with proper maintenance and care.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Composite Window Replacement</h3>
                            <p className="text-gray-600">Advanced composite windows combine the beauty of wood with the durability of modern materials for optimal performance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection
                title="Frequently Asked Questions About Window Replacement"
                faqs={[
                    {
                        question: "How much does window replacement cost?",
                        answer: "Window replacement costs typically range from $300-1500 per window installed, depending on window type, size, and features. We provide free estimates that include all installation costs and material options."
                    },
                    {
                        question: "How long does window replacement take?",
                        answer: "Most window replacement projects are completed in 1-2 days for an average home. Each window typically takes 1-2 hours to install, depending on size and complexity. We work efficiently to minimize disruption."
                    },
                    {
                        question: "What are the best windows for replacement?",
                        answer: "The best replacement windows depend on your budget, style preferences, and energy goals. We offer vinyl, fiberglass, wood, and composite windows with various energy ratings to meet your specific needs."
                    },
                    {
                        question: "Do I need permits for window replacement?",
                        answer: "Most window replacement projects don't require permits when replacing existing windows with similar sizes. We handle any necessary permits and ensure all work meets local building codes."
                    },
                    {
                        question: "Will window replacement improve energy efficiency?",
                        answer: "Yes, modern window replacement can significantly improve energy efficiency. New windows with low-E coatings, gas fills, and advanced frames can reduce energy costs by 20-30% compared to older windows."
                    },
                    {
                        question: "What's included in window replacement services?",
                        answer: "Our window replacement services include measurement, professional installation, disposal of old windows, basic trim work, cleanup, and warranties on both materials and installation."
                    }
                ]}
            />

            {/* WHY PARAGON WINDOW REPLACEMENT */}
            <WhyParagonWindowReplacement
                title="Why Choose Paragon Exterior for Window Replacement?"
                titleAs="h2"
                subTitle="At Paragon Exterior, we combine years of exterior expertise with specialized window replacement knowledge to deliver superior results. Our window replacement contractors use quality materials, proven installation techniques, and attention to detail that ensures optimal performance and customer satisfaction."
            />

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}