import GetEstimate from "@/components/landing-ui/GetEstimate";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import React from "react";

/* ——— META ——— */
export const metadata = {
    title: "Flat Roofing Company | Paragon Exterior",
    description:
        "Paragon Exterior is the flat roofing company homeowners and businesses trust for flat roof repair, flat roof replacement, and energy-efficient flat-roof installations across Pennsylvania, New Jersey, and Delaware."
};

/* ——— Inline Highlights ——— */
function FlatRoofHighlights() {
    const items = [
        {title: "Flat Roof Repair", body: "Patching, seam welding, flashing repair, and leak detection for EPDM, TPO, and modified bitumen systems."},
        {title: "Flat Roof Replacement", body: "Complete tear-offs and new membranes installed for decades of leak-free performance."},
        {title: "Cool-Roof Coatings", body: "Reflective coatings that lower roof temperature and cut HVAC costs."},
        {title: "Commercial & Residential", body: "From warehouses to rowhomes, our factory-trained crews tackle flat roofs of any size."}
    ];
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto w-5/6">
                <HeaderText className="text-center mb-12">Flat-Roof Advantages</HeaderText>
                <div className="grid md:grid-cols-2 gap-10">
                    {items.map((i) => (
                        <div key={i.title} className="bg-white shadow-lg rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-3 text-primaryBlue">{i.title}</h3>
                            <p className="text-slate-700 leading-relaxed">{i.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ——— PAGE ——— */
export default async function Page() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Flat Roofing Experts"
                subText="Need flat roof repair, flat roof replacement, or a new energy-efficient membrane? Paragon Exterior is the flat roofing company trusted across PA, NJ, and DE for durable, leak-free results."
                imgSrc="/images/roof-service/flat-roofing/flat-roof-hero.webp"
                imgAlt="Flat roof replacement on a commercial building"
            />

            {/* INFO SECTION – NEW COPY */}
            <InfoSection
                imgSrc="/images/roof-service/flat-roofing/flat-roof-info.webp"
                imgAlt="Technician performing flat roof repair"
                titleAs="h1"
                title="Flat Roof Repair & Replacement Done Right"
                mainContent="Flat roofs require specialized materials and skill. Our team repairs and replaces EPDM, TPO, and modified-bitumen systems, welding seams, replacing flashing, and eliminating ponding water to stop leaks for good. If repairs are no longer cost-effective, we’ll install a brand-new flat roof designed to handle Mid-Atlantic weather and save energy year-round."
                bottomContent="From emergency flat roof repair after storm damage to full flat roof replacement on aging commercial roofs, Paragon Exterior delivers honest assessments, clear pricing, and industry-leading warranties—so you can protect your building with confidence."
                imagePosition="right"
            />

            {/* HIGHLIGHTS */}
            <FlatRoofHighlights />

            {/* MAIN CONTENT ROWS */}
            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText>Why Choose Paragon Exterior for Flat Roofing?</HeaderText>
                    <SecondaryText>
                        Our factory-trained crews ensure flawless seams, proper drainage, and long-term performance.
                        Whether you need rapid flat roof repair or a complete flat roof replacement, we deliver workmanship that stands up to Mid-Atlantic weather.
                    </SecondaryText>
                </div>

                {/* Warning-signs Row */}
                <Row
                    title="Signs Your Flat Roof Needs Attention"
                    description={
                        <>
                            Ponding water, membrane blisters, cracked seams, or interior leaks all mean it’s time for professional flat roof service.{" "}
                            <a href="/blog/flat-roof-warning-signs" className="text-primaryBlue">Learn more</a> and prevent costly damage.
                        </>
                    }
                    imageSrc="/images/roof-service/flat-roofing/flat-roof1.webp"
                />

                {/* Repair vs Replacement Row */}
                <Row
                    title="Flat Roof Repair vs. Replacement—We’ll Guide You"
                    description="Not every flat roof leak requires a new roof. We start with a detailed inspection, outline repair options, and only recommend full replacement when it’s the smartest long-term choice. Honest advice, transparent pricing, and strong warranties—that’s the Paragon promise."
                    imageSrc="/images/roof-service/flat-roofing/flat-roof-2.webp"
                    reverse
                    className="pt-12 lg:pt-24"
                />
            </div>

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
