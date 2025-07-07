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
            "We specialize in flat roofing solutions for warehouses, retail buildings, and office complexes. Our commercial flat roofs are engineered for long-term durability and energy efficiency.",
        imageUrl: "/images/commercial/commerical-roof2.webp"
    },
    {
        id: 2,
        title: "Metal Roofing for Commercial Buildings",
        description:
            "Protect your business with commercial metal roofing designed for unmatched strength, fire resistance, and minimal maintenance. A smart, long-lasting investment.",
        imageUrl: "/images/commercial/commercial-roof-metal.webp"
    },
    {
        id: 3,
        title: "Commercial Roof Replacement & Repairs",
        description:
            "From aging roofs to storm-damaged systems, we provide expert commercial roof replacement with premium materials to ensure your building stays protected.",
        imageUrl: "/images/commercial/repair-commercial-roof.webp"
    },
];

export type ThreeImageArrayType = typeof posts[number];

export const metadata = {
    title: "Local Commercial Roofing Experts",
    description:
        "Paragon Exterior offers comprehensive commercial roofing services including commercial flat roofing, metal roofing, commercial roof replacement, and commercial roof repair. Serving Pennsylvania, New Jersey, and Delaware with quality craftsmanship and durable solutions."
};

const Page = () => {
    return (
        <div>
            {/* HERO */}
            <Hero
                mainText="Commercial Roofing Solutions"
                subText="Paragon Exterior provides professional commercial roofing services to protect your business. From commercial flat roofing to commercial roof installation to metal roof replacement, we deliver durable, energy-efficient solutions customized to your property."
                imgSrc="/images/commercial/commercial-roof.webp"
                imgAlt="Paragon Exterior commercial roofing project"
            />

            <div className="text-center mx-auto w-5/6 py-20">
                <HeaderText>
                    Commercial Roofing Services You Can Trust
                </HeaderText>
                <SecondaryText>
                    As a leading commercial roofing contractor in Pennsylvania, New Jersey, and Delaware, Paragon Exterior understands the challenges that businesses face when it comes to protecting their properties. Whether you own a retail building, warehouse, or office complex, our team delivers commercial roofing solutions that are tailored to your needs — with a focus on durability, energy efficiency, and cost savings. From new roof installations to emergency commercial roof repairs, we handle it all.
                </SecondaryText>
                <SecondaryText>
                    Paragon Exterior is fully licensed and insured to provide commercial roofing services across Pennsylvania, New Jersey, and Delaware. Our team has over 20 years of experience delivering reliable, high-quality roofing solutions for businesses of all sizes.
                </SecondaryText>

            </div>

            <ServicesGrid
                services={[
                    {
                        id: 1,
                        title: "Commercial Flat Roofing",
                        description: "Expert installation and repair of flat roofing systems for commercial buildings, ensuring durability and energy efficiency.",
                        imageUrl: "/images/commercial/flat-commerical.webp",
                        href: "/commercial-roofing/flat-roofing"
                    },

                    {
                        id: 3,
                        title: "Commercial Roof Replacement",
                        description: "Comprehensive commercial roof replacement services to upgrade your building’s protection and energy efficiency.",
                        imageUrl: "/images/commercial/replacement-commercial.webp",
                        href: "/commercial-roofing/roof-replacement"
                    },
                    {
                        id: 4,
                        title: "Commercial Roof Repair",
                        description: "Comprehensive commercial roof replacement services to upgrade your building’s protection and energy efficiency.",
                        imageUrl: "/images/commercial/repair-commercial-roof.webp",
                        href: "/commercial-roofing/roof-repair"
                    }
                ]}
            />

            {/* QUALITY SECTION */}
            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Superior Commercial Roofing Craftsmanship"
                    description="Our commercial roofing systems are built to withstand harsh weather, reduce maintenance costs, and extend your roof’s lifespan. Whether your project involves flat roofing, metal panels, or full commercial roof replacement, we ensure precision installation and long-term performance backed by warranty."
                    image="/images/commercial/commerical-roofing1.webp"
                />
            </div>

            {/* FEATURES / PROJECT TYPES */}
            <ThreeImage posts={posts} />

            {/* BENEFITS SECTION */}
            <Benefits
                title="Why Choose Paragon Exterior for Your Commercial Roofing?"
                description="Paragon Exterior delivers more than just a roof — we deliver peace of mind. With decades of experience in commercial flat roofing, metal roofing, and complete roof replacement, we’re the trusted choice for businesses across Pennsylvania, New Jersey, and Delaware. Our team uses premium materials, advanced installation techniques, and industry-best warranties to protect your property and your bottom line."
                titleAs="h2"
                img1={{
                    src: "/images/commercial/commerial-roof-4.webp",
                    alt: "Durable commercial roofing installed by Paragon Exterior"
                }}
                img2={{
                    src: "/images/commercial/commerical-roof5.webp",
                    alt: "Energy-efficient commercial roof system on office building"
                }}
                text1="Our durable, energy-efficient commercial roofing systems are engineered to stand up to extreme weather, minimize maintenance needs, and reduce long-term operational costs — helping your business save money year after year."
                text2="From precision installation of standing seam metal roofs to expert flat roof repair and replacement, our certified team ensures your commercial roof performs at its best for decades. We back our work with strong warranties and responsive service you can count on."
            />





                <FAQSection
                    title="Frequently Asked Questions About Commercial Roofing"
                    faqs={[
                        {
                            question: "What is commercial roofing?",
                            answer: "Commercial roofing refers to the materials, techniques, and services used to protect commercial buildings such as warehouses, offices, and retail centers. These systems are designed for durability, energy efficiency, and to withstand the elements over large surface areas."
                        },
                        {
                            question: "Why do commercial buildings have flat roofs?",
                            answer: "Flat roofs are common on commercial buildings because they are cost-effective to install and maintain, provide usable space for HVAC units or solar panels, and simplify drainage across wide roof spans."
                        },
                        {
                            question: "What is the best commercial roofing material?",
                            answer: "The best commercial roofing material depends on your building's needs. Popular options include TPO and EPDM for flat roofs due to energy efficiency and cost, and metal roofing for strength and longevity. Our team can help you choose the right solution."
                        },
                        {
                            question: "How much does it cost to replace a commercial roof?",
                            answer: "Commercial roof replacement costs vary based on size, material, and complexity. On average, you can expect between $5 to $12 per square foot. We provide free estimates to give you a precise quote for your project."
                        },
                        {
                            question: "How do I choose a good commercial roofing contractor?",
                            answer: "Look for a contractor with commercial experience, proper licensing and insurance, strong warranties, and positive client reviews. At Paragon Exterior, we pride ourselves on quality craftsmanship and trusted service across Pennsylvania, New Jersey, and Delaware."
                        }
                    ]}
                />




            {/* CTA */}
            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>
        </div>
    );
};


export default Page;
