import FAQSection from "@/components/FAQSection";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import Row from "@/components/Row";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import WhyParagon from "@/components/WhyParagon";
import React from "react";

/**
 * Page: /roofing-contractor/bensalem
 * Keyword focus: "Bensalem roofing company"
 * Notes:
 * - Copy is written at ~8th-grade reading level
 * - Language, examples, and landmarks are unique to Bensalem to avoid duplicate-content penalties
 * - Primary keyword appears in title tag, meta description, H1, H2s, and body
 */

export const metadata = {
    title: "Bensalem Roofing Company | Roof Repair & Replacement",
    description:
        "Paragon Exterior is the top-rated roofing company in Bensalem. We provide roof repair, full roof replacement, and exterior upgrades.",
    openGraph: {
        title: "Top-Rated Roofing Company in Bensalem, PA",
        description:
            "Need a reliable roofing company in Bensalem? Paragon Exterior delivers expert roof repair, installation, and replacement backed by Bucks County trust and experience.",
        images: [
            {
                url: "/images/locations/bensalem/hero.webp",
                width: 1200,
                height: 630,
                alt: "Bensalem roofing company – roof installation and repair",
            },
        ],
    },
    twitter: {
        title: "Bensalem Roofing Company | Paragon Exterior",
        description:
            "Looking for a trusted roofing company in Bensalem, PA? Paragon Exterior offers expert service, lasting results, and clear guidance for your roof.",
        images: [
            {
                url: "/images/locations/bensalem/hero.webp",
                width: 1200,
                height: 630,
                alt: "Reliable roofing company in Bensalem – residential roof work",
            },
        ],
        card: "summary_large_image",
    },
    keywords: [
        "Bensalem roofing company",
        "roof repair Bensalem",
        "roof replacement Bensalem",
        "licensed roofer Bensalem PA",
        "metal roofing Bensalem",
        "commercial roofing Bensalem",
        "Paragon Exterior roofing",
    ],
};

export default function Page() {
    return (
        <div>
            {/* HERO */}
            <Hero
                mainText="Reliable Roofing Company in Bensalem, PA"
                subText="Paragon Exterior keeps Bensalem homes safe and dry. From fast roof repair to full replacement, our local team delivers expert work you can trust."
                imgSrc="/images/home/roof-service.webp"
                imgAlt="Roofers working on a house in Bensalem, PA"
            />

            {/* LOCAL TRUST SECTION */}
            <InfoSection
                title="Bensalem's Roofing Company"
                titleAs="h1"
                mainContent="Living near Neshaminy Creek and the Delaware River means heavy winds and sudden storms. Paragon Exterior understands the challenges Bensalem roofs face. Our crew is local, licensed, and ready to tackle anything from small leaks to total roof replacement—always using materials that stand up to Bucks County weather."
                bottomContent="Whether your home is in Belmont Hills, Nottingham, or Cornwells Heights, you’ll see our trucks in your neighborhood. We show up on time, provide straight answers, and back every job with solid warranties."
                imgSrc="/images/house8.jpeg"
                imgAlt="Local roofing company in Bensalem discussing project with homeowner"
                imagePosition="left"
            />

            {/* ROOF REPLACEMENT */}
            <InfoSection
                title="Complete Roof Replacement in Bensalem"
                mainContent="When repairs won’t cut it, we handle full roof replacement from start to finish. Our team removes old shingles, replaces damaged decking, installs modern underlayment, and fits new shingles or metal panels built to last 30+ years. We pull Bensalem Township permits and follow PA building codes, so you never have to worry."
                bottomContent="From Cape Cods off Bristol Pike to split-levels near Parx Casino, we install roofs that match your style and budget while boosting curb appeal."
                imgSrc="/images/roof-service/roof-replacement/roof-replacement.avif"
                imgAlt="Roof replacement project in Bensalem, PA"
                imagePosition="right"
            />

            {/* ROOF REPAIR */}
            <InfoSection
                title="Fast Roof Repair Near You"
                mainContent="Leaky flashing, missing shingles, or hail damage? We answer emergency calls fast—often the same day. Our repair techs locate the problem, make lasting fixes, and photograph every step so you see exactly what we did."
                bottomContent="Don’t wait until a small drip becomes a big headache. Call our Bensalem roof repair team for a free inspection and straight-forward quote."
                imgSrc="/images/roof-service/roof-repair/roof-repair3.jpg"
                imgAlt="Technician performing roof repair in Bensalem"
                imagePosition="left"
            />

            {/* METAL ROOFING */}
            <InfoSection
                title="Standing Seam Metal Roofing for Bucks County Weather"
                mainContent="Metal roofing is growing fast in Bensalem thanks to its sleek style and 50-year lifespan. We install premium standing seam and ribbed panels in steel, aluminum, and copper. Each system is custom-bent on-site for a watertight fit, perfect for shedding snow off Pennsylvania winters."
                bottomContent="Ask about our energy-saving paint finishes that reflect summer heat and may reduce cooling bills by up to 25%."
                imgSrc="/images/roof-service/metal/metal-roof-card.webp"
                imgAlt="New standing seam metal roof on Bensalem home"
                imagePosition="right"
            />

            {/* VINYL SIDING */}
            <InfoSection
                title="Energy-Efficient Vinyl Siding for Bensalem Homes"
                mainContent="Boost curb appeal and cut maintenance with insulated vinyl siding. Available in dozens of colors, vinyl resists fading, denting, and moisture—perfect for humid Delaware Valley summers."
                bottomContent="We wrap your home with a breathable house wrap, add foam backing, and secure panels with hidden fasteners for a clean, lasting finish."
                imgSrc="/images/siding/vinyl/vinyl2.webp"
                imgAlt="Vinyl siding installation on Bensalem two-story"
                imagePosition="left"
            />

            {/* COMMERCIAL ROW */}
            <Row
                title="Commercial & Industrial Roofing in Bensalem"
                imageSrc="/images/commercial/commercial-roof-metal.webp"
                description="Paragon Exterior services warehouses, retail centers, and offices along Street Road and Route 1. We install TPO, EPDM, and metal systems that lower energy costs and minimize downtime for your business."
            />

            {/* WHY PARAGON */}
            <InfoSection
                title="Why Bensalem Homeowners Choose Paragon Exterior"
                mainContent="We’re more than contractors—we’re neighbors. Our team supports local schools, sponsors Little League, and treats every roof like it’s over our own heads. Expect clear communication, respectful crews, and results that withstand the test of time."
                bottomContent="Hundreds of 5-star reviews prove why Paragon is the roofing company Bensalem trusts."
                imgSrc="/images/roof-service/roof-replacement/roof-replacement-hero.webp"
                imgAlt="Satisfied homeowners with new roof in Bensalem"
                imagePosition="left"
            />

            <FAQSection
                title="Bensalem Roofing Company FAQ"
                faqs={[
                    {
                        question: "Do you offer free roof inspections in Bensalem?",
                        answer:
                            "Yes, we offer complimentary roof inspections for Bensalem homeowners. Our team will assess your roof's condition, provide photos, and give you an honest recommendation—no pressure, just facts.",
                    },
                    {
                        question: "How quickly can you respond to emergency roof repairs?",
                        answer:
                            "We prioritize urgent roof repair calls in Bensalem and can often respond the same day. Our local team is ready to fix leaks, storm damage, or structural issues fast.",
                    },
                    {
                        question: "What types of roofing do you install?",
                        answer:
                            "We install asphalt shingles, standing seam metal, flat roofing (TPO, EPDM), and specialty systems. We'll help you choose the best option for your Bensalem home and budget.",
                    },
                    {
                        question: "Is your roofing work covered by a warranty?",
                        answer:
                            "Yes, all of our roof installations in Bensalem come with material and workmanship warranties. We stand behind our work and will walk you through the full coverage details.",
                    },
                    {
                        question: "Are you licensed and insured in Pennsylvania?",
                        answer:
                            "Absolutely. Paragon Exterior is fully licensed and insured for residential and commercial roofing work in Bensalem and across Bucks County.",
                    },
                    {
                        question: "Do you offer financing options?",
                        answer:
                            "Yes, we offer flexible financing plans for Bensalem homeowners, including low-interest and no-interest options for qualified applicants. Ask us about financing during your free estimate.",
                    },
                ]}
            />

            {/* VALUE PROPS COMPONENT */}
            <WhyParagon title="Why Choose Paragon for Your Bensalem Roofing Project?" />

            {/* CTA */}
            <GetEstimate location="Bensalem" />
        </div>
    );
}
