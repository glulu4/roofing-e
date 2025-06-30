import GetEstimate from "@/components/landing-ui/GetEstimate";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import AboutSection from "@/components/service-page/roof/AboutSection";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import FAQSection from "@/components/FAQSection";
import React from "react";

/* ─────────────────────────────────────────
   SEO META
───────────────────────────────────────── */
export const metadata = {
    title: "Roof Leak Repair | Paragon Exterior",
    description:
        "Paragon Exterior provides fast roof leak repair across Pennsylvania, New Jersey, and Delaware. Stop water damage with our emergency roof-leak specialists—honest estimates, permanent fixes, and industry-leading warranties."
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default async function Page() {
    return (
        <div className="min-h-screen">

            {/* HERO */}
            <Hero
                mainText="Roof Leak Repair Experts"
                subText="Water dripping from the ceiling? We deliver same-day roof leak repair to stop damage fast and protect your home."
                imgSrc="/images/roof-service/roof-leak/roof-leak-hero.jpg"
                imgAlt="Technician performing roof leak repair"
            />

            {/* ABOUT SECTION */}
            <AboutSection
            className="py-20"
            titleAs="h1"
                title="Why Roof Leaks Happen—and How We Fix Them"
                subtitle="From missing shingles and cracked flashing to punctured flat-roof membranes, small roof leaks become big problems fast. Paragon Exterior pinpoints the source and delivers permanent roof leak repair that keeps your home safe and dry."
                images={[
                    {src: "/images/roof-service/roof-leak/leak1.webp", alt: "Water stain from roof leak"},
                    {src: "/images/roof-service/roof-leak/leak2.jpg", alt: "Replacing damaged flashing"},
                    {src: "/images/roof-service/roof-leak/leak3.webp", alt: "Sealing shingle roof leak"},
                    {src: "/images/roof-service/roof-leak/leak4.jpg", alt: "Repairing flat-roof membrane"}
                ]}
                secondHeader="Our Proven Roof Leak Repair Process"
                secondContent={[
                    "• Thorough inspection with moisture-finding tech to locate hidden leaks.",
                    "• Immediate temporary seal if water intrusion is active.",
                    "• Permanent repair—replacing shingles, flashing, or membrane as needed.",
                    "• Final water-test and photo documentation so you know the leak is fixed."
                ]}
                thirdHeader="Emergency Roof Leak Response—24/7"
                thirdContent={[
                    "Storm just tore off shingles? We answer the phone around the clock and dispatch crews for emergency roof leak repair. Our priority: secure your roof, stop water penetration, and schedule a full fix ASAP."
                ]}
            />

            {/* INFO SECTION */}
            <InfoSection
                imgSrc="/images/roof-service/roof-leak/infra-red.webp"
                imgAlt="Infrared moisture scan of leaking roof"
                titleAs="h2"
                title="Roof Leak Repair You Can Count On"
                mainContent="Our dedicated roof-leak team handles asphalt, metal, and flat roofs. We quickly diagnose the issue—whether it’s deteriorated pipe flashing, torn underlayment, or ice-dam damage—and restore your roof’s watertight seal."
                bottomContent="Left unchecked, roof leaks lead to mold, insulation damage, and costly structural repairs. Call Paragon Exterior at the first sign of trouble for fast, dependable leak repair backed by industry-leading warranties."
                imagePosition="right"
            />


            {/* CTA */}
            <GetEstimate />
        </div>
    );
}
