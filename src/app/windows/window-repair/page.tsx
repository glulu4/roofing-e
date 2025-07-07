import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import {WhyParagonWindowRepair} from '@/components/WhyParagon';

export const metadata = {
    title: 'Window Repair Services | Professional Window Repair Near Me',
    description: 'Expert window repair services in Pennsylvania, New Jersey, and Delaware. Professional window repair for broken glass, damaged frames, seal failures, and hardware issues. Get your free window repair estimate today.',
    keywords: 'window repair, window repair near me, broken window repair, window glass repair, window frame repair, window seal repair, residential window repair, commercial window repair',
    openGraph: {
        title: 'Professional Window Repair Services | Paragon Exterior',
        description: 'Fast and reliable window repair services for homes and businesses. Expert window repair contractors serving PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/window-repair/window-repair-hero.webp'],
    },
};

export default function WindowRepairPage() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Professional Window Repair Services"
                subText="Expert window repair services for homes and businesses across Pennsylvania, New Jersey, and Delaware. From broken glass to damaged frames, our window repair specialists restore functionality and energy efficiency to your windows."
                imgSrc="/images/window/window-repair/window-repair1.webp"
                imgAlt="Professional window repair technician fixing damaged window"
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/window/window-repair/repair2.webp"
                imgAlt="Window repair specialist replacing broken window glass"
                titleAs="h1"
                title="Window Repair You Can Trust"
                mainContent="When your windows are damaged, cracked, or not functioning properly, Paragon Exterior provides fast, reliable window repair services to restore your home's comfort and security. Our experienced window repair technicians handle all types of window issues, from broken glass and damaged frames to faulty hardware and seal failures. We serve homeowners and businesses throughout the Greater Philadelphia area with professional window repair solutions that last."
                bottomContent="Don't let damaged windows compromise your home's energy efficiency or security. Our window repair experts respond quickly to assess damage, provide honest estimates, and complete repairs using quality materials and proven techniques. Whether you need emergency window repair after storm damage or routine maintenance, we deliver window repair services that restore function and appearance."
                imagePosition="right"
            />

            {/* WINDOW REPAIR REASONS COMPONENT */}
            {/* <WindowRepairReasons /> */}

            {/* MAIN CONTENT ROWS */}
            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText as="h2">Why Choose Paragon Exterior for Window Repair?</HeaderText>
                    <SecondaryText>
                        Our expert window repair technicians ensure precise repairs, quality materials, and long-term performance.
                        Whether you need emergency window repair or scheduled maintenance, we deliver window repair services that protect your home and enhance its value.
                    </SecondaryText>
                </div>

                {/* Window Repair Process Row */}
                <Row
                    title="Our Professional Window Repair Process"
                    description="From initial assessment to final testing, our window repair process ensures quality results. We inspect damage thoroughly, source matching materials, and complete repairs with attention to detail that restores both function and appearance."
                    imageSrc="/images/window/window-repair/repair3.webp"
                />

                {/* Window Repair vs Replacement Row */}
                <Row
                    title="Window Repair vs. Window Replacement"
                    description="Not every window problem requires complete replacement. Our window repair experts evaluate each situation to determine the most cost-effective solution. We recommend window repair when it can restore full functionality, and window replacement only when repair isn't practical or cost-effective."
                    imageSrc="/images/window/window-repair/repair4.jpeg"
                    reverse
                    className="pt-12 lg:pt-24"
                />

                {/* Emergency Window Repair Row */}
                <Row
                    title="Emergency Window Repair Services"
                    description="Storm damage, break-ins, or accidents can require immediate window repair. Our emergency window repair team provides rapid response with temporary boarding and permanent window repair solutions to secure your property and restore protection."
                    imageSrc="/images/window/window-repair/repair5.webp"
                    className="pt-12 lg:pt-24"
                />
            </div>

            {/* WINDOW REPAIR TYPES SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <HeaderText as="h2" className="text-center mb-12">Complete Window Repair Services</HeaderText>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Broken Glass Repair</h3>
                            <p className="text-gray-600">Professional window glass repair and replacement for single-pane, double-pane, and specialty glass windows with precise fitting and sealing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Window Frame Repair</h3>
                            <p className="text-gray-600">Expert repair of damaged window frames including wood rot repair, vinyl crack repair, and aluminum frame restoration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Window Seal Repair</h3>
                            <p className="text-gray-600">Window seal repair and replacement to eliminate fogging, improve energy efficiency, and restore clear visibility.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Window Hardware Repair</h3>
                            <p className="text-gray-600">Repair and replacement of window locks, handles, hinges, and operating mechanisms for smooth window function.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Window Weatherstripping</h3>
                            <p className="text-gray-600">Professional weatherstripping repair and replacement to improve energy efficiency and eliminate drafts.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Storm Window Repair</h3>
                            <p className="text-gray-600">Complete storm window repair including glass replacement, frame repair, and hardware maintenance for year-round protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection
                title="Frequently Asked Questions About Window Repair"
                faqs={[
                    {
                        question: "How much does window repair cost?",
                        answer: "Window repair costs vary depending on the type and extent of damage. Simple repairs like weatherstripping replacement may cost $50-150, while glass replacement can range from $200-600 per window. We provide free estimates for all window repair services."
                    },
                    {
                        question: "Can you repair double-pane windows?",
                        answer: "Yes, we specialize in double-pane window repair including seal replacement, glass replacement, and frame repair. Our window repair technicians have the specialized tools and expertise to restore double-pane window performance."
                    },
                    {
                        question: "How long does window repair take?",
                        answer: "Most window repair projects are completed within 2-4 hours per window, depending on the complexity of the repair. Emergency window repair for security purposes can often be completed the same day."
                    },
                    {
                        question: "Do you offer emergency window repair services?",
                        answer: "Yes, we provide emergency window repair services for storm damage, break-ins, and other urgent situations. Our emergency window repair team can secure your property and complete permanent repairs quickly."
                    },
                    {
                        question: "What types of windows do you repair?",
                        answer: "We repair all types of windows including vinyl, wood, aluminum, fiberglass, single-pane, double-pane, casement, double-hung, sliding, and specialty windows. Our window repair experts work with all major window brands."
                    },
                    {
                        question: "Is window repair better than window replacement?",
                        answer: "Window repair is often more cost-effective than replacement when the window structure is sound. Our window repair specialists assess each situation to recommend the most practical and economical solution for your specific needs."
                    }
                ]}
            />

            {/* WHY PARAGON WINDOW REPAIR */}
            <WhyParagonWindowRepair
                title="Why Choose Paragon Exterior for Window Repair?"
                titleAs="h2"
                subTitle="At Paragon Exterior, we combine years of exterior expertise with specialized window repair knowledge to deliver superior results. Our window repair technicians use quality materials, proven techniques, and attention to detail that ensures lasting repairs and customer satisfaction."
            />

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}