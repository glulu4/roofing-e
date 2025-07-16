import GetEstimate from "@/components/landing-ui/GetEstimate";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import React from "react";
import {WhyParagonFlatRoofing} from "@/components/WhyParagon";

/* ——— META ——— */
export const metadata = {
    title: "Commercial Flat Roofing Contractor",
    description:
        "Trusted commercial flat roofing contractor serving Pennsylvania, New Jersey, and Delaware. Expert EPDM, TPO, and modified bitumen commercial flat roof installation, repair, and replacement for businesses."
};

/* ——— Inline Highlights ——— */
function CommercialFlatRoofHighlights() {
    const items = [
        {title: "Commercial Flat Roof Repair", body: "Expert repair of EPDM, TPO, and modified bitumen commercial roofing systems. Emergency commercial flat roof leak detection and seam welding services."},
        {title: "Commercial Flat Roof Replacement", body: "Complete commercial flat roof replacement with premium membranes designed for decades of leak-free performance on commercial buildings."},
        {title: "Energy-Efficient Commercial Roofing", body: "Cool-roof coatings and reflective commercial flat roofing systems that reduce HVAC costs and improve building energy efficiency."},
        {title: "Commercial & Industrial", body: "From warehouses to office buildings, our certified crews specialize in commercial flat roofing projects of any scale."}
    ];
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto w-5/6">
                <HeaderText className="text-center mb-12">Commercial Flat Roofing Advantages</HeaderText>
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
                mainText="Commercial Flat Roofing Experts"
                subText="Need commercial flat roof repair, replacement, or installation? Paragon Exterior is the trusted commercial flat roofing contractor across PA, NJ, and DE, delivering durable EPDM, TPO, and modified bitumen solutions for businesses."
                imgSrc="/images/commercial/flat/commercial-flat-hero.jpeg"
                imgAlt="Commercial flat roof installation on office building"
            />

            {/* INFO SECTION – COMMERCIAL FOCUS */}
            <InfoSection
                imgSrc="/images/commercial/flat/flat1.webp"
                imgAlt="Commercial flat roofing contractor performing repair"
                titleAs="h1"
                title="Commercial Flat Roofing Installation & Repair"
                mainContent="Commercial flat roofing requires specialized expertise and premium materials. Our certified commercial roofing team installs and repairs EPDM, TPO, and modified-bitumen systems on commercial buildings throughout the Mid-Atlantic. We handle everything from emergency commercial flat roof repairs to complete roof replacement, ensuring proper drainage and eliminating ponding water that threatens your business operations."
                bottomContent="Whether your commercial property needs urgent flat roof repair after storm damage or a planned commercial flat roof replacement, Paragon Exterior provides honest assessments, competitive pricing, and industry-leading warranties to protect your commercial investment."
                imagePosition="right"
            />

            {/* HIGHLIGHTS */}
            {/* <CommercialFlatRoofHighlights /> */}

            {/* MAIN CONTENT ROWS */}
            <div >
                <div className="mb-32 text-center">
                    <HeaderText as="h2">Why Choose Paragon Exterior for Commercial Flat Roofing?</HeaderText>
                    <SecondaryText>
                        Our factory-trained commercial roofing crews ensure flawless installation, proper drainage, and long-term performance.
                        From emergency commercial flat roof repair to complete commercial roof replacement, we deliver workmanship that protects your business investment.
                    </SecondaryText>
                </div>

                <Row
                    title="Signs Your Commercial Flat Roof Needs Professional Attention"
                    description={
                        <SecondaryText>
                            Ponding water, membrane blisters, cracked seams, or interior leaks in your commercial building signal it&apos;s time for professional commercial flat roofing service.{" "}
                            <a href="/blog/commercial-flat-roof-warning-signs" className="text-primaryBlue">Learn more</a> about protecting your commercial property from costly damage.
                        </SecondaryText>
                    }
                    imageSrc="/images/commercial/flat/flat2.webp"
                />

                <Row
                    title="Commercial Flat Roof Repair vs. Replacement—Expert Guidance"
                    description="Not every commercial flat roof leak requires complete replacement. Our commercial roofing experts start with a comprehensive inspection, evaluate repair options, and only recommend full commercial flat roof replacement when it's the most cost-effective long-term solution for your business. Honest advice, transparent commercial roofing pricing, and strong warranties—that's the Paragon promise."
                    imageSrc="/images/commercial/flat/flat3.png"
                    reverse
                    className="pt-12 lg:pt-24"
                />

                <Row
                    title="Reliable Commercial Flat Roofing Materials"
                    description="We specialize in EPDM synthetic rubber roofing, TPO thermoplastic systems, and modified bitumen commercial flat roofing. These durable materials are designed specifically for commercial applications, offering superior weather resistance, energy efficiency, and longevity that commercial property owners demand. Our commercial flat roofing systems can last 20-30 years when properly installed and maintained."
                    imageSrc="/images/commercial/flat/flat4.webp"
                    className="pt-12 lg:pt-24"
                />
            </div>

            <WhyParagonFlatRoofing
                title="Why Choose Paragon Exterior for Commercial Flat Roofing?"
                subTitle="At Paragon Exterior, we specialize in commercial flat roofing solutions that combine durability with energy efficiency. Our experienced commercial roofing team understands the unique challenges of commercial flat roofs, ensuring your business property is protected against leaks and weather damage. We use only premium commercial-grade materials and proven installation techniques to provide commercial flat roofing systems built to last decades."
                titleAs="h2"
            />

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}