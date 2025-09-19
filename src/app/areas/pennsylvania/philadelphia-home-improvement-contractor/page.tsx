import FAQSection from "@/components/FAQSection";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import Row from "@/components/Row";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import WhyParagon from "@/components/WhyParagon";
import React from "react";

export const metadata = {
    title: "Philadelphia Home Improvement Contractor",
    description: "Paragon Exterior is Philadelphia's trusted home improvement contractor. We specialize in roofing, siding, windows, and complete exterior renovations.",
    openGraph: {
        title: "Philadelphia Home Improvement Contractor | Paragon Exterior",
        description: "Need a reliable home improvement contractor in Philadelphia? Paragon Exterior delivers expert roofing, siding, and exterior services backed by local trust and experience.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Philadelphia home improvement contractor - exterior renovation services",
            },
        ],
    },
    twitter: {
        title: "Philadelphia Home Improvement Contractor | Paragon Exterior",
        description: "Looking for a trusted home improvement contractor in Philadelphia? Paragon Exterior offers expert exterior services and honest guidance for your home.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Philadelphia home improvement contractor - exterior renovation services",
            },
        ],
        card: "summary_large_image",
    },
    keywords: [
        "Philadelphia home improvement contractor",
        "home improvement Philadelphia",
        "exterior contractor Philadelphia",
        "roofing contractor Philadelphia",
        "siding contractor Philadelphia",
        "window installation Philadelphia",
        "home renovation Philadelphia",
        "Paragon Exterior Philadelphia",
    ],
};

export default function Page() {
    return (
        <div>
            <Hero
                mainText="Philadelphia Home Improvement Contractor"
                subText="Paragon Exterior is the home improvement contractor Philadelphia homeowners trust. We provide comprehensive exterior services including roofing, siding, windows, and complete home renovations with expert craftsmanship."
                imgSrc="/images/locations/philadelphia/hero.webp"
                imgAlt="Philadelphia home improvement contractor - exterior renovation services"
            />

            <InfoSection
                title="Philadelphia's Premier Home Improvement Contractor"
                titleAs="h1"
                mainContent={
                    <>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            Paragon Exterior has established itself as Philadelphia's leading home improvement contractor, bringing decades of expertise to every project. From historic rowhomes in Center City to modern builds in the suburbs, we understand what it takes to enhance and protect Philadelphia homes.
                        </SecondaryText>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            As a locally owned and operated company, we've completed thousands of projects across every Philadelphia neighborhood—from Fishtown to Fairmount, Northern Liberties to South Philadelphia. Our comprehensive approach covers all your exterior improvement needs.
                        </SecondaryText>
                    </>
                }
                bottomContent="Whether you need a new roof, siding replacement, window installation, or complete exterior renovation, Paragon Exterior is the Philadelphia home improvement contractor that delivers results you can trust."
                imgSrc="/images/locations/philadelphia/philly2.webp"
                imgAlt="Philadelphia home improvement contractor working on residential project"
                imagePosition="left"
            />

            <InfoSection
                title="Complete Roofing Services in Philadelphia"
                mainContent="As your trusted Philadelphia home improvement contractor, we provide comprehensive roofing solutions from emergency repairs to complete replacements. Our team installs asphalt shingles, metal roofing, and flat roof systems designed to withstand Philadelphia's weather extremes. Every project includes proper permits, quality materials, and workmanship warranties."
                bottomContent="From traditional rowhomes to contemporary designs, we match roofing solutions to your home's architecture while ensuring long-lasting protection. Our roofing experts handle everything from storm damage repairs to energy-efficient upgrades."
                imgSrc="/images/locations/philadelphia/philly6.avif"
                imgAlt="Philadelphia home improvement contractor installing new roof"
                imagePosition="right"
            />

            <InfoSection
                title="Professional Siding Installation & Replacement"
                mainContent="Transform your Philadelphia home's exterior with professional siding services. We install vinyl, fiber cement, board and batten, and specialty siding materials that enhance curb appeal while providing superior weather protection. Our installation process includes proper insulation and moisture barriers for optimal performance."
                bottomContent="Whether you're updating a historic property or modernizing your home's look, our siding expertise ensures a flawless installation that complements Philadelphia's diverse architectural styles."
                imgSrc="/images/siding/vinyl/vinyl1.webp"
                imgAlt="Professional siding installation by Philadelphia home improvement contractor"
                imagePosition="left"
            />

            <InfoSection
                title="Window Installation & Replacement Services"
                mainContent="Upgrade your home's energy efficiency and appearance with professional window installation. As your Philadelphia home improvement contractor, we install energy-efficient windows that reduce heating and cooling costs while enhancing your home's comfort and value."
                bottomContent="From single replacements to whole-house window projects, we work with leading manufacturers to provide windows that suit your style and budget while meeting Philadelphia's energy efficiency standards."
                imgSrc="/images/locations/philadelphia/philly7.webp"
                imgAlt="Window installation services by Philadelphia home improvement contractor"
                imagePosition="right"
            />

            <InfoSection
                title="Complete Exterior Renovations"
                mainContent={
                    <>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            Planning a comprehensive exterior makeover? As Philadelphia's premier home improvement contractor, we coordinate complete exterior renovations that transform your property. Our services include roofing, siding, windows, doors, gutters, and trim work—all managed by a single, trusted team.
                        </SecondaryText>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            We understand the unique challenges of Philadelphia homes, from narrow lot access to historic preservation requirements. Our project management ensures seamless coordination and quality results.
                        </SecondaryText>
                    </>
                }
                bottomContent="From design consultation to final cleanup, we handle every aspect of your exterior renovation, ensuring your Philadelphia home looks stunning and performs efficiently for decades to come."
                imgSrc="/images/locations/philadelphia/philly4.webp"
                imgAlt="Complete exterior renovation by Philadelphia home improvement contractor"
                imagePosition="left"
            />

            <Row
                title="Commercial Building Improvements in Philadelphia"
                imageSrc="/images/commercial/commerical-roof-hero.webp"
                description="Paragon Exterior extends our home improvement expertise to commercial properties throughout Philadelphia. We provide comprehensive exterior solutions for businesses, including roofing, siding, and building envelope improvements that enhance professional appearance while providing lasting protection."
            />

            <InfoSection
                title="Emergency Repair Services"
                mainContent="When Philadelphia weather strikes, you need a reliable home improvement contractor who responds fast. Our emergency repair services address storm damage, roof leaks, siding damage, and window issues. We provide temporary protection and permanent solutions to keep your property secure."
                bottomContent="Available for urgent repairs throughout Philadelphia, our emergency team assesses damage quickly and provides honest recommendations for immediate and long-term solutions."
                imgSrc="/images/locations/philadelphia/philly3.webp"
                imgAlt="Emergency repair services by Philadelphia home improvement contractor"
                imagePosition="right"
            />

            <InfoSection
                title="Why Philadelphia Chooses Paragon Exterior"
                mainContent="As a local Philadelphia home improvement contractor, we've built our reputation on quality work, transparent communication, and reliable service. Our team is fully licensed, insured, and committed to treating every project with the care and attention it deserves."
                bottomContent="With hundreds of satisfied customers across Philadelphia and comprehensive warranties on all our work, Paragon Exterior is the home improvement contractor you can trust for results that last."
                imgSrc="/images/roof-service/roof-replacement/roof-replacement-hero.webp"
                imgAlt="Satisfied Philadelphia homeowners with completed home improvement project"
                imagePosition="left"
            />

            <FAQSection
                title="Philadelphia Home Improvement Contractor FAQ"
                faqs={[
                    {
                        question: "What home improvement services do you provide in Philadelphia?",
                        answer:
                            "We provide comprehensive exterior home improvement services including roofing, siding, windows, doors, gutters, and complete exterior renovations. As a full-service contractor, we handle everything from emergency repairs to complete home transformations.",
                    },
                    {
                        question: "Do you offer free estimates for home improvement projects?",
                        answer:
                            "Yes, we provide free, detailed estimates for all home improvement projects in Philadelphia. Our team will assess your needs, discuss options, and provide transparent pricing with no hidden costs.",
                    },
                    {
                        question: "How long do home improvement projects typically take?",
                        answer:
                            "Project timelines vary based on scope and weather. Roofing projects typically take 1-3 days, siding installations 3-7 days, and complete exterior renovations 1-3 weeks. We provide detailed timelines during the estimate process.",
                    },
                    {
                        question: "Are you licensed and insured for home improvement work?",
                        answer:
                            "Absolutely. Paragon Exterior is fully licensed and insured for all home improvement services in Philadelphia and throughout Pennsylvania. We carry comprehensive liability and workers' compensation coverage.",
                    },
                    {
                        question: "Do you work on historic Philadelphia homes?",
                        answer:
                            "Yes, we have extensive experience working on historic Philadelphia properties. We understand preservation requirements and work with appropriate materials and methods to maintain historic character while improving performance.",
                    },
                    {
                        question: "What financing options are available?",
                        answer:
                            "We offer flexible financing options for Philadelphia homeowners, including low-interest and no-interest plans for qualified applicants. Ask about financing options during your free consultation.",
                    },
                ]}
            />

            <section className="max-w-5xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-primaryblue mb-4">
                    Serving All Philadelphia Neighborhoods
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    As Philadelphia's trusted home improvement contractor, we serve homeowners throughout the entire metropolitan area. From Center City condos to suburban homes in the Northeast, our team understands the unique needs of each neighborhood and architectural style.
                </p>
                <p className="text-lg text-gray-700">
                    Whether you're in South Philly, West Philadelphia, Kensington, Fishtown, or any surrounding area, our home improvement experts are ready to enhance your property's beauty, efficiency, and value with quality craftsmanship and reliable service.
                </p>
            </section>

            <WhyParagon title="Why Choose Paragon for Your Philadelphia Home Improvement Project?" />

            <GetEstimate location="Philadelphia" />
        </div>
    );
}