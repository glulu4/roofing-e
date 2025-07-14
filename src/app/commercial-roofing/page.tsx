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
        "Paragon Exterior provides expert commercial roofing in PA, NJ, and DE. We install and repair flat roofs, metal roofs, and commercial roof systems that last.",
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
                <HeaderText as="h1">Commercial Roofing You Can Count On</HeaderText>
                <SecondaryText>
                    When your business needs a roof repair or replacement, you can’t afford delays or poor work. At Paragon Exterior, we install durable, low-maintenance commercial roofing that keeps your building safe and dry year-round.
                </SecondaryText>
                <SecondaryText>
                    We work on flat roofs, metal roofs, and specialty commercial systems for offices, warehouses, schools, and more. Our team is fully licensed, insured, and certified to install top brands like GAF, Firestone, and Carlisle. Whether it’s a new build or an urgent repair, we’ll get the job done right.
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
                    src: "/images/commercial/commerial-roof5.webp",
                    alt: "Energy-efficient commercial roof system on office building",
                }}
                text1="Our roofs are designed to handle storms, temperature swings, and daily wear. They save energy and lower your long-term costs."
                text2="We work with all types of commercial roofs—from metal and TPO to modified bitumen. Count on us for clean installs, clear communication, and long-term warranties."
            />

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
