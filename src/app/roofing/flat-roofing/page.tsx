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
    title: "Flat Roofing Company | EPDM, TPO, and Flat Roof Repair",
    description:
        "Looking for a flat roofing company you can trust? Paragon Exterior provides expert flat roof repair, replacement, and energy-efficient flat roofing systems in PA, NJ, and DE.",
    keywords:
        "flat roof repair, flat roofing company, flat roof contractor, EPDM repair, TPO roofing, modified bitumen, flat roof company near me",
};

/* ——— Flat Roof Highlights ——— */
function FlatRoofHighlights() {
    const items = [
        {
            title: "Flat Roof Repair",
            body: "We patch leaks, reseal seams, and fix flashing for EPDM, TPO, and modified bitumen systems.",
        },
        {
            title: "Flat Roof Replacement",
            body: "We remove failing roofs and install new, watertight membranes built to last for decades.",
        },
        {
            title: "Cool Roof Coatings",
            body: "Reflective coatings that reduce heat buildup and lower your energy bills.",
        },
        {
            title: "For Homes & Businesses",
            body: "From warehouses to rowhomes, we handle flat roofs of any size with expert care.",
        },
    ];
    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto w-5/6">
                <HeaderText className="text-center mb-12">Flat Roof Services</HeaderText>
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
            <Hero
                mainText="Flat Roofing Experts"
                subText="Need flat roof repair or replacement? We fix leaks, install new flat roofing systems, and keep your building protected year-round."
                imgSrc="/images/roof-service/flat-roofing/flat-roof-hero.webp"
                imgAlt="Flat roof replacement on a commercial building"
            />

            <InfoSection
                imgSrc="/images/roof-service/flat-roofing/flat-roof-info.webp"
                imgAlt="Technician performing flat roof repair"
                titleAs="h1"
                title="Flat Roof Repair and Replacement"
                mainContent="Flat roofs need expert installation and the right materials to prevent leaks and ponding water. We repair and replace EPDM, TPO, and modified bitumen roofing systems using trusted techniques and durable products."
                bottomContent="Whether you need a quick patch, a full roof replacement, or help after storm damage, Paragon Exterior delivers honest advice, fair pricing, and long-lasting results. We’re your flat roof experts in PA, NJ, and DE."
                imagePosition="right"
            />

            <FlatRoofHighlights />

            <div className="mx-auto w-5/6 py-10 lg:py-20">
                <div className="mb-32 text-center">
                    <HeaderText>Why Choose Paragon for Flat Roofing?</HeaderText>
                    <SecondaryText>
                        Our trained crews install flat roofs that drain properly, seal tight, and hold up to the toughest weather. We don’t cut corners — just clean, professional work that protects your building and budget.
                    </SecondaryText>
                </div>

                <Row
                    title="Signs Your Flat Roof Needs Attention"
                    description={
                        <>
                            Is your roof holding water, leaking inside, or showing cracked seams? These are signs it’s time for service.{" "}
                            <a href="/blog/flat-roof-warning-signs" className="text-primaryBlue">Learn more</a> and avoid bigger problems down the road.
                        </>
                    }
                    imageSrc="/images/roof-service/flat-roofing/flat-roof1.webp"
                />

                <Row
                    title="Repair or Replace? We’ll Help You Decide"
                    description="Not every flat roof problem means a full replacement. We start with a full inspection, offer clear repair options, and only recommend replacement if it's the best long-term solution for your home or business."
                    imageSrc="/images/roof-service/flat-roofing/flat-roof-2.webp"
                    reverse
                    className="pt-12 lg:pt-24"
                />
            </div>

            <WhyParagonFlatRoofing
                title="Why Paragon Exterior?"
                subTitle="We specialize in flat roofing that lasts. Whether you're dealing with leaks, age, or energy loss, we provide expert solutions that keep your home or business protected. With premium materials, skilled crews, and strong warranties, we're the flat roofing company you can count on."
                titleAs="h2"
            />

            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
