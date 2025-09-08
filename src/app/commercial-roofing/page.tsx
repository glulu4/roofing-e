import Hero from "@/components/service-page/Hero";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import ThreeImage from "@/components/solar/ThreeImage";
import Benefits from "@/components/solar/Benefits";
import QualitySection from "@/components/Quality";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import ServicesGrid from "@/components/service-page/Services";
import FAQSection from "@/components/FAQSection";

const posts = [
    {
        id: 1,
        title: "Durable Flat Roofing Systems",
        description:
            "We install and repair commercial flat roofs built to handle tough weather and reduce energy costs. Perfect for warehouses, offices, schools, and retail spaces.",
        imageUrl: "/images/commercial/commerical-roof2.webp",
    },
    {
        id: 2,
        title: "Metal Roofing for Commercial Buildings",
        description:
            "Our commercial metal roofs offer unbeatable durability, low maintenance, and protection from wind, fire, and leaks. Choose from standing seam, ribbed panels, and more.",
        imageUrl: "/images/commercial/commercial-roof-metal.webp",
    },
    {
        id: 3,
        title: "Commercial Roof Replacement & Repairs",
        description:
            "If your roof is leaking or aging, we provide fast, expert replacement and repairs. We use top materials and minimize disruption to your business.",
        imageUrl: "/images/commercial/repair-commercial-roof.webp",
    },
];

export const metadata = {
    title: "Local Commercial Roofing Services",
    description:
        "Paragon Exterior provides expert commercial roofing in PA, NJ, and DE. We install and repair flat roofs, metal roofs, and commercial roof systems.",
};

const Page = () => {
    return (
        <div>
            <Hero
                mainText="Commercial Roofing Services"
                subText="Protect your building with expert commercial roofing. We install flat, metal, and energy-efficient roofs for businesses across PA, NJ, and DE."
                imgSrc="/images/commercial/commercial-roof.webp"
                imgAlt="Paragon Exterior commercial roofing project"
            />

            <div className="text-center mx-auto w-5/6 py-20">
                <HeaderText as="h1">Commercial Roofing That Actually Works for Your Business</HeaderText>
                <SecondaryText>
                    Let&apos;s be honest — when your commercial roof starts leaking, it&apos;s not just about water damage. It&apos;s about shutting down operations, dealing with insurance, and potentially losing money every day the problem isn&apos;t fixed. We get that. That&apos;s why we focus on getting your roof done right the first time, on schedule, and without disrupting your business any more than necessary.
                </SecondaryText>
                <SecondaryText>
                    We&apos;ve worked on everything from small office buildings to massive warehouses, and we know that every business has different needs. Some need energy-efficient roofs to cut utility costs. Others need quick emergency repairs to stay operational. Whatever your situation, we&apos;re licensed, insured, and experienced with the commercial brands that actually hold up — GAF, Firestone, Carlisle, and others that we trust to protect your investment.
                </SecondaryText>
            </div>

            <ServicesGrid
                services={[
                    {
                        id: 1,
                        title: "Commercial Flat Roofing",
                        description:
                            "EPDM, TPO, and built-up flat roofs for business buildings. Waterproof, energy-efficient, and built to last.",
                        imageUrl: "/images/commercial/flat-commerical.webp",
                        href: "/commercial-roofing/flat-roofing",
                    },
                    {
                        id: 2,
                        title: "Commercial Roof Replacement",
                        description:
                            "Upgrade your roof with high-performance materials that prevent leaks and save on long-term repairs.",
                        imageUrl: "/images/commercial/replacement-commercial.webp",
                        href: "/commercial-roofing/roof-replacement",
                    },
                    {
                        id: 3,
                        title: "Commercial Roof Repair",
                        description:
                            "Fix leaks and damage fast. We offer emergency repairs and long-term maintenance for all roof types.",
                        imageUrl: "/images/commercial/repair-commercial-roof.webp",
                        href: "/commercial-roofing/roof-repair",
                    },
                ]}
            />

            {/* BUSINESS-FOCUSED SECTION */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-6">
                        What Business Owners Really Care About
                    </HeaderText>
                    <SecondaryText className="text-center mb-12 max-w-4xl mx-auto">
                        We&apos;ve been doing commercial roofing long enough to know what keeps business owners up at night. Here&apos;s how we handle the stuff that actually matters to you.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Minimal Business Disruption
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                We schedule around your busy times, work in sections when possible, and always clean up daily. Most repairs happen without you having to close or move operations.
                            </SecondaryText>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Emergency Response
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                When your roof starts leaking during business hours, we prioritize getting there fast to stop the damage and get you back to normal operations.
                            </SecondaryText>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Energy Savings That Actually Show Up
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                Modern commercial roofing can seriously cut your heating and cooling costs. We&apos;ll show you the options that make sense for your building size and usage.
                            </SecondaryText>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Insurance & Documentation
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                We&apos;re fully insured and know how to work with your insurance company. We document everything properly so claims go smoothly.
                            </SecondaryText>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Transparent Pricing
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                No surprises in the middle of the job. We give you detailed estimates upfront and stick to them. You&apos;ll know exactly what you&apos;re paying for and why.
                            </SecondaryText>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <HeaderText as="h3" className="text-lg mb-3 text-blue-600">
                                Long-Term Maintenance Plans
                            </HeaderText>
                            <SecondaryText className="text-sm">
                                Regular maintenance prevents expensive surprises. We offer annual inspection and maintenance programs to keep your roof in good shape.
                            </SecondaryText>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Built to Withstand the Elements"
                    description="Our commercial roofing systems are made to last. We use quality materials, expert techniques, and back our work with warranties. Whether it's flat roofing or metal, we build roofs that protect your property and reduce costly repairs."
                    image="/images/commercial/commerical-roofing1.webp"
                />
            </div>

            <ThreeImage posts={posts} />

            <Benefits
                title="Why Choose Paragon Exterior?"
                description="We help businesses get reliable, cost-effective roofing that holds up to the weather and works with your building. Our experienced team handles every detail from inspection to installation—and we do it on time, on budget, and with safety first."
                titleAs="h2"
                img1={{
                    src: "/images/commercial/commerial-roof-4.webp",
                    alt: "Durable commercial roofing installed by Paragon Exterior",
                }}
                img2={{
                    src: "/images/commercial/commerical-roof5.webp",
                    alt: "Energy-efficient commercial roof system on office building",
                }}
                text1="Our roofs are designed to handle storms, temperature swings, and daily wear. They save energy and lower your long-term costs."
                text2="We work with all types of commercial roofs—from metal and TPO to modified bitumen. Count on us for clean installs, clear communication, and long-term warranties."
            />

            {/* MATERIALS EXPLANATION */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-6">
                        Commercial Roofing Materials That Make Sense
                    </HeaderText>
                    <SecondaryText className="text-center mb-8">
                        Not sure which roofing material is right for your building? Here&apos;s our honest take on the most popular options for commercial properties.
                    </SecondaryText>
                    
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-600 pl-6">
                            <HeaderText as="h3" className="text-lg mb-2">TPO (Single-Ply Membrane)</HeaderText>
                            <SecondaryText className="text-sm">
                                Great all-around choice for most flat commercial roofs. Energy-efficient white surface reflects heat, decent lifespan, and reasonable cost. Works well for office buildings and retail spaces.
                            </SecondaryText>
                        </div>
                        
                        <div className="border-l-4 border-blue-600 pl-6">
                            <HeaderText as="h3" className="text-lg mb-2">EPDM (Rubber Membrane)</HeaderText>
                            <SecondaryText className="text-sm">
                                The workhorse of commercial roofing. Black rubber that&apos;s been around forever and proven reliable. More affordable than TPO but doesn&apos;t reflect heat as well. Perfect for warehouses and industrial buildings.
                            </SecondaryText>
                        </div>
                        
                        <div className="border-l-4 border-blue-600 pl-6">
                            <HeaderText as="h3" className="text-lg mb-2">Metal Roofing</HeaderText>
                            <SecondaryText className="text-sm">
                                Lasts the longest but costs more upfront. Standing seam metal is virtually maintenance-free and handles wind and fire better than anything else. Great for buildings where long-term value matters more than initial cost.
                            </SecondaryText>
                        </div>
                        
                        <div className="border-l-4 border-blue-600 pl-6">
                            <HeaderText as="h3" className="text-lg mb-2">Modified Bitumen</HeaderText>
                            <SecondaryText className="text-sm">
                                The tough guy option. Multi-layer system that handles foot traffic and harsh weather well. More expensive and complex to install, but great for buildings that need extra durability.
                            </SecondaryText>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <SecondaryText>
                            Bottom line: we&apos;ll look at your building, your budget, and how you use the space, then recommend what makes the most sense. No upselling, just practical advice.
                        </SecondaryText>
                    </div>
                </div>
            </section>

            <FAQSection
                title="Commercial Roofing FAQ"
                faqs={[
                    {
                        question: "What is commercial roofing?",
                        answer:
                            "It’s roofing designed for business properties—like warehouses, offices, and retail spaces. These systems are made for durability, energy savings, and easy maintenance.",
                    },
                    {
                        question: "Why do most commercial roofs look flat?",
                        answer:
                            "Flat roofs are cost-effective and practical. They support HVAC units, solar panels, and drain water efficiently when installed properly.",
                    },
                    {
                        question: "What type of roof is best for my building?",
                        answer:
                            "It depends on your budget, climate, and building type. TPO and EPDM work well on flat roofs. Metal roofs last the longest. We’ll help you choose the best fit.",
                    },
                    {
                        question: "How much does a commercial roof cost?",
                        answer:
                            "Costs range from $5 to $12 per square foot. After inspecting your building, we’ll give you a clear estimate with no surprises.",
                    },
                    {
                        question: "How do I hire the right commercial roofer?",
                        answer:
                            "Look for experience, local reviews, proper licenses, and solid warranties. Paragon Exterior is trusted by businesses across PA, NJ, and DE for reliable work and great service.",
                    },
                ]}
            />

            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>
        </div>
    );
};

export default Page;
