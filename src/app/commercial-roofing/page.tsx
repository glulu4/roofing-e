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
            "We specialize in commercial flat roofing solutions for warehouses, retail buildings, schools, and office complexes. Our commercial flat roofs are engineered for long-term durability, water resistance, and energy efficiency—even on the largest structures.",
        imageUrl: "/images/commercial/commerical-roof2.webp"
    },
    {
        id: 2,
        title: "Metal Roofing for Commercial Buildings",
        description:
            "Protect your business with premium commercial metal roofing designed for unmatched strength, wind resistance, fire protection, and minimal maintenance. Get a long-lasting investment with standing seam, ribbed panels, or architectural metal systems tailored to your building.",
        imageUrl: "/images/commercial/commercial-roof-metal.webp"
    },
    {
        id: 3,
        title: "Commercial Roof Replacement & Repairs",
        description:
            "From aging or leaking commercial roofs to urgent storm damage, our experienced crews provide complete commercial roof replacement and repairs. We use industry-leading materials to restore full weather protection and value to your property with minimal disruption.",
        imageUrl: "/images/commercial/repair-commercial-roof.webp"
    },
];

export type ThreeImageArrayType = typeof posts[number];

export const metadata = {
    title: "Local Commercial Roofing Services",
    description:
        "Paragon Exterior offers comprehensive commercial roofing services including commercial flat roofing, metal roofing, commercial roof replacement, and commercial roof repair. Serving Pennsylvania, New Jersey, and Delaware with quality craftsmanship and durable solutions."
};

const Page = () => {
    return (
        <div>
            {/* HERO */}
            <Hero
                mainText="Commercial Roofing Services Near You"
                subText="Paragon Exterior delivers expert commercial roofing services that protect your business investment. From energy-efficient commercial flat roofing to metal roof replacement, we provide customized solutions with guaranteed quality and long-term performance."
                imgSrc="/images/commercial/commercial-roof.webp"
                imgAlt="Paragon Exterior commercial roofing project"
            />

            <div className="text-center mx-auto w-5/6 py-20">
                <HeaderText as="h1">
                    Commercial Roofing Services You Can Trust
                </HeaderText>
                <SecondaryText>
                    As the region’s leading commercial roofing contractor, Paragon Exterior understands what’s at stake when you need a new roof or urgent repairs for your business, warehouse, or investment property.
                    <br /><br />
                    We specialize in commercial roof installation, roof replacement, and flat roof repair for retail buildings, schools, manufacturing plants, and office complexes across Pennsylvania, New Jersey, and Delaware. Our expert team assesses your property, recommends the ideal system for your needs and budget, and delivers high-quality commercial roofing with a focus on durability, energy efficiency, and cost savings.
                </SecondaryText>
                <SecondaryText>
                    Paragon Exterior is fully licensed, insured, and committed to safety on every job site. Our commercial roofing professionals have decades of hands-on experience and are certified to install leading brands such as Firestone, Carlisle, GAF, and more. From new construction to emergency leak repairs, we handle projects of any size with precision and pride.
                </SecondaryText>
            </div>

            {/* SERVICES GRID */}
            <ServicesGrid
                services={[
                    {
                        id: 1,
                        title: "Commercial Flat Roofing",
                        description: "Expert installation and repair of single-ply, modified bitumen, and built-up flat roofing systems for commercial buildings. We ensure long-term waterproofing, energy savings, and low maintenance costs.",
                        imageUrl: "/images/commercial/flat-commerical.webp",
                        href: "/commercial-roofing/flat-roofing"
                    },
                    {
                        id: 3,
                        title: "Commercial Roof Replacement",
                        description: "Full commercial roof replacement services to upgrade your building’s protection, enhance energy efficiency, and eliminate leaks or costly repairs. We use premium materials and proven installation methods.",
                        imageUrl: "/images/commercial/replacement-commercial.webp",
                        href: "/commercial-roofing/roof-replacement"
                    },
                    {
                        id: 4,
                        title: "Commercial Roof Repair",
                        description: "Fast, reliable commercial roof repair services for all roof types—EPDM, TPO, PVC, metal, and more. Emergency leak response and preventative maintenance available to keep your business safe and dry.",
                        imageUrl: "/images/commercial/repair-commercial-roof.webp",
                        href: "/commercial-roofing/roof-repair"
                    }
                ]}
            />

            {/* QUALITY SECTION */}
            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Superior Commercial Roofing Solutions"
                    description="Every Paragon Exterior commercial roofing system is built to outlast the elements and stand up to the demands of business. We use only top-tier products and advanced installation techniques to maximize weather resistance, minimize downtime, and extend your roof’s lifespan. From seamless TPO and EPDM membranes to robust metal panels, we guarantee long-term performance—backed by industry-leading warranties and responsive service."
                    image="/images/commercial/commerical-roofing1.webp"
                />
            </div>

            {/* PROJECT TYPES / FEATURES */}
            <ThreeImage posts={posts} />

            {/* BENEFITS SECTION */}
            <Benefits
                title="Why Choose Paragon Exterior for Your Commercial Roofing?"
                description="Your commercial property deserves the best protection and value. Paragon Exterior delivers more than just a new roof—we provide peace of mind. Our extensive experience with flat roofing, metal roofing, commercial roof replacements, and repairs means you get a partner who understands local building codes, project timelines, and your business priorities."
                titleAs="h2"
                img1={{
                    src: "/images/commercial/commerial-roof-4.webp",
                    alt: "Durable commercial roofing installed by Paragon Exterior"
                }}
                img2={{
                    src: "/images/commercial/commerial-roof5.webp",
                    alt: "Energy-efficient commercial roof system on office building"
                }}
                text1="Our durable, energy-efficient commercial roofing systems are engineered to withstand the harshest weather, reduce operating costs, and require minimal upkeep—helping your business stay protected and profitable year after year."
                text2="From precision installation of standing seam metal and single-ply membranes to emergency flat roof repairs, our certified team delivers flawless results on every project. We offer competitive pricing, clear communication, and warranties you can count on."
            />

            {/* FAQ SECTION */}
            <FAQSection
                title="Frequently Asked Questions About Commercial Roofing"
                faqs={[
                    {
                        question: "What is commercial roofing?",
                        answer: "Commercial roofing covers all roofing materials and installation methods designed for business properties—such as warehouses, offices, retail centers, and factories. These systems are engineered for larger spans, long-term durability, and energy efficiency."
                    },
                    {
                        question: "Why do commercial buildings have flat roofs?",
                        answer: "Flat roofs are standard for commercial buildings because they are cost-effective to install and maintain, allow for HVAC units or solar panels, and simplify drainage over wide areas. Modern flat roof materials deliver exceptional waterproofing and reflectivity."
                    },
                    {
                        question: "What is the best commercial roofing material?",
                        answer: "The best material depends on your building’s needs, budget, and climate. TPO and EPDM are popular for flat roofs, while standing seam metal roofing is chosen for durability and longevity. We’ll recommend the right system for your property after a thorough assessment."
                    },
                    {
                        question: "How much does it cost to replace a commercial roof?",
                        answer: "Commercial roof replacement costs typically range from $5 to $12 per square foot, depending on the material, size, and complexity. We provide detailed, written estimates after inspecting your property so there are no surprises."
                    },
                    {
                        question: "How do I choose the best commercial roofing contractor?",
                        answer: "Choose a contractor with proven experience, local references, proper licensing and insurance, and strong manufacturer warranties. Paragon Exterior is trusted by businesses throughout Pennsylvania, New Jersey, and Delaware for quality, safety, and value."
                    }
                ]}
            />

            {/* FINAL CTA */}
            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>
        </div>
    );
};

export default Page;
