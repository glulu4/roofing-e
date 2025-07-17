import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import IncentivesSection from '@/components/service-page/Incentive';
import Benefits from '@/components/solar/Benefits';
import {WhyParagonWindowInstallation} from '@/components/WhyParagon';
import WindowInstallationProcess from '@/components/service-page/window/WindowInstallationProcess';

export const metadata = {
    title: 'Window Installation Services ',
    description: 'Paragon Exterior offers expert window installation services in PA, NJ, and DE. Get a free estimate for new construction or replacement windows.',
    keywords: 'window installation, window installation near me, new window installation, professional window installation, window installation contractors, residential window installation, commercial window installation, window installers',
    openGraph: {
        title: 'Professional Window Installation Services | Paragon Exterior',
        description: 'Expert window installation contractors providing quality installation for new construction and replacement windows with guaranteed results.',
        type: 'website',
        images: ['/images/windows/window-installation/window-installation-hero.webp'],
    },
};

export default function WindowInstallationPage() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Professional Window Installation Services"
                subText="Expert window installation contractors serving Pennsylvania, New Jersey, and Delaware. From new construction window installation to replacement window installation, our certified installers deliver precision, quality, and guaranteed results for every project."
                imgSrc="/images/window/window-install/hero.webp"
                imgAlt="Professional window installation team installing new windows with precision tools"
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/window/window-install/window-install1.webp"
                imgAlt="Window installation contractor precisely measuring and installing new window"
                titleAs="h1"
                title="Window Installation Excellence You Can Trust"
                mainContent="Professional window installation is critical to ensuring optimal performance, energy efficiency, and longevity of your windows. Paragon Exterior's certified window installation contractors bring years of experience and precision to every project throughout the Greater Philadelphia area. Whether you're building new construction or upgrading existing windows, our window installation experts handle every detail from precise measurements to weatherproofing and final testing."
                bottomContent="Proper window installation requires specialized knowledge of building codes, energy efficiency standards, and manufacturer specifications. Our window installation team uses professional-grade tools and proven techniques to ensure perfect fit, proper sealing, and long-lasting performance. We guarantee our window installation workmanship and stand behind every project with comprehensive warranties."
                imagePosition="right"
            />

            {/* WINDOW INSTALLATION PROCESS COMPONENT */}
            <WindowInstallationProcess />

            {/* WINDOW INSTALLATION BENEFITS */}
            <Benefits
                title="Why Professional Window Installation Matters"
                description="Professional window installation ensures optimal performance, energy efficiency, and longevity. Expert installation prevents common problems that can compromise your investment."
                titleAs="h2"
                img1={{
                    src: "/images/window/window-install/window-install2.webp",
                    alt: 'Professional window installation ensuring proper fit and sealing'
                }}
                img2={{
                    src: "/images/window/window-install/window-install3.webp",
                    alt: 'Window installation contractor using precision tools for accurate installation'
                }}
                text1="Proper window installation ensures airtight seals, correct drainage, and optimal energy efficiency that can save hundreds of dollars annually on utility costs."
                text2="Professional window installation includes proper flashing, insulation, and weatherproofing techniques that prevent moisture infiltration and extend window life."
            />

            {/* WINDOW INSTALLATION TYPES */}
            <IncentivesSection
                className="py-16"
                title="Comprehensive Window Installation Services"
                titleAs="h2"
                subtitle="Our window installation experts handle all types of projects from new construction to replacement installations, ensuring quality results regardless of project scope or complexity."
                heroImage={{
                    alt: "Professional window installation services for all project types",
                    src: "/images/window/window-install/window-install4.webp"
                }}
                incentives={[
                    {
                        name: "New Construction Window Installation",
                        description: "Complete window installation for new homes and buildings with coordination of framing, rough openings, and building code compliance.",
                        imageSrc: "/images/windows/icons/new-construction.svg",
                        imageAlt: "New construction window installation services"
                    },
                    {
                        name: "Replacement Window Installation",
                        description: "Expert installation of replacement windows with precise fitting, weatherproofing, and minimal disruption to your daily routine.",
                        imageSrc: "/images/windows/icons/replacement-install.svg",
                        imageAlt: "Replacement window installation expertise"
                    },
                    {
                        name: "Custom Window Installation",
                        description: "Specialized installation of custom windows, specialty shapes, and architectural windows requiring precise craftsmanship and attention to detail.",
                        imageSrc: "/images/windows/icons/custom-install.svg",
                        imageAlt: "Custom window installation services"
                    },
                ]}
                imagePosition="left"
                incentiveColumns={3}
            />

            {/* MAIN CONTENT ROWS */}
            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText as="h2">Why Choose Paragon Exterior for Window Installation?</HeaderText>
                    <SecondaryText>
                        Our certified window installation contractors ensure precise installation, quality materials, and long-term performance.
                        Whether you need new construction window installation or replacement window installation, we deliver results that exceed expectations.
                    </SecondaryText>
                </div>

                {/* Window Installation Quality Row */}
                <Row
                    title="Precision Window Installation Techniques"
                    description="Our window installation process follows manufacturer specifications and building codes to ensure optimal performance. We use professional-grade tools, proper flashing techniques, and quality sealants to create weathertight installations that last for decades."
                    imageSrc="/images/window/window-install/window-install5.webp"
                />

                {/* Window Installation Materials Row */}
                <Row
                    title="Quality Window Installation Materials"
                    description="Professional window installation requires quality materials beyond just the windows themselves. We use premium flashing, sealants, insulation, and fasteners that meet or exceed building code requirements for lasting performance and energy efficiency."
                    imageSrc="/images/window/window-install/window-install-quality.webp"
                    reverse
                    className="pt-12 lg:pt-24"
                />

  
            </div>

            {/* WINDOW INSTALLATION COST SECTION */}
            {/* <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <HeaderText as="h2" className="mb-6">
                            Window Installation Cost and Value
                        </HeaderText>
                        <SecondaryText className="max-w-4xl mx-auto">
                            Professional window installation cost varies based on project type, window size, and installation complexity.
                            Our transparent pricing ensures you understand all costs involved in your window installation project.
                        </SecondaryText>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Standard Installation</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$150-300</div>
                            <div className="text-gray-600 mb-4">per window</div>
                            <SecondaryText className="text-sm">
                                Basic window installation for standard sizes in typical applications. Includes installation, basic trim, and cleanup.
                            </SecondaryText>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primaryblue">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Complex Installation</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$300-500</div>
                            <div className="text-gray-600 mb-4">per window</div>
                            <SecondaryText className="text-sm">
                                Advanced window installation for large windows, structural modifications, or challenging installations requiring specialized techniques.
                            </SecondaryText>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <HeaderText variant="small" className="mb-4 text-primaryblue">Custom Installation</HeaderText>
                            <div className="text-3xl font-bold text-amber-500 mb-2">$500-800</div>
                            <div className="text-gray-600 mb-4">per window</div>
                            <SecondaryText className="text-sm">
                                Specialty window installation for custom windows, architectural features, or installations requiring structural work and custom solutions.
                            </SecondaryText>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <SecondaryText className="text-gray-600">
                            *Window installation costs are separate from window materials. Final pricing depends on project scope,
                            access difficulty, and any structural modifications required.
                        </SecondaryText>
                    </div>
                </div>
            </section> */}

            {/* WINDOW INSTALLATION MISTAKES SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <HeaderText as="h2" className="text-center mb-12">Common Window Installation Mistakes to Avoid</HeaderText>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Improper Measurements</h3>
                            <p className="text-red-700">Incorrect measurements lead to poor fit, air leaks, and structural problems. Professional window installation ensures precise measurements.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Poor Flashing Installation</h3>
                            <p className="text-red-700">Inadequate flashing causes water infiltration and structural damage. Proper window installation includes comprehensive weatherproofing.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Insufficient Insulation</h3>
                            <p className="text-red-700">Poor insulation around windows reduces energy efficiency. Professional window installation includes proper insulation techniques.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Incorrect Fastening</h3>
                            <p className="text-red-700">Improper fastening can cause window failure and safety hazards. Expert window installation uses appropriate fasteners and techniques.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Poor Drainage</h3>
                            <p className="text-red-700">Inadequate drainage causes water accumulation and damage. Professional window installation ensures proper water management.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-semibold mb-4 text-red-800">Code Violations</h3>
                            <p className="text-red-700">Non-compliant installation creates safety and legal issues. Certified window installation follows all building codes and regulations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection
                title="Frequently Asked Questions About Window Installation"
                faqs={[
                    {
                        question: "How long does window installation take?",
                        answer: "Most window installation projects take 1-2 hours per window for standard installations. Complex installations or structural modifications may require additional time. We provide accurate timeframes during consultation."
                    },
                    {
                        question: "What's included in professional window installation?",
                        answer: "Our window installation services include precise measurement, professional installation, weatherproofing, insulation, basic trim work, cleanup, and testing to ensure proper operation and energy efficiency."
                    },
                    {
                        question: "Do I need permits for window installation?",
                        answer: "Permit requirements vary by location and project scope. We handle permit applications when required and ensure all window installation work meets local building codes and regulations."
                    },
                    {
                        question: "Can you install windows in existing openings?",
                        answer: "Yes, we specialize in replacement window installation in existing openings. Our window installation experts ensure proper fit and weatherproofing regardless of the existing opening condition."
                    },
                    {
                        question: "What makes professional window installation worth the cost?",
                        answer: "Professional window installation ensures proper fit, energy efficiency, building code compliance, and warranty protection. Poor installation can void warranties and cause expensive problems later."
                    },
                    {
                        question: "Do you provide window installation warranties?",
                        answer: "Yes, we provide comprehensive warranties on our window installation workmanship in addition to manufacturer warranties on the windows themselves. We stand behind every installation project."
                    }
                ]}
            />

            {/* WHY PARAGON WINDOW INSTALLATION */}
            <WhyParagonWindowInstallation
                title="Why Choose Paragon Exterior for Window Installation?"
                titleAs="h2"
                subTitle="At Paragon Exterior, we combine certified installation expertise with quality materials and proven techniques to deliver superior window installation results. Our experienced installers follow manufacturer specifications and building codes to ensure optimal performance and longevity."
            />

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}