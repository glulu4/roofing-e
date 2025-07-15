import Hero from "@/components/service-page/Hero";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import React from "react";
import Timeline from "@/components/Timeline";
import IncentivesSection from "@/components/service-page/Incentive";
import {WhyParagonEmergencyRoofRepair} from "@/components/WhyParagon";

export const metadata = {
    title: "Emergency Roof Repair Services | 24/7 Storm Damage Response",
    description:
        "Need emergency roof repair? Paragon Exterior provides 24/7 emergency roofing services for storm damage, active leaks, and urgent repairs in PA, NJ, DE. Fast response guaranteed.",
    keywords:
        "emergency roof repair, 24/7 roof repair, storm damage repair, emergency roofing services, urgent roof repair, roof leak repair, emergency roofer",
    openGraph: {
        title: "Emergency Roof Repair Services | 24/7 Response | Paragon Exterior",
        description:
            "Emergency roof repair services available 24/7. Fast response for storm damage, leaks, and urgent roofing needs in Pennsylvania, New Jersey, and Delaware.",
        type: "website",
        images: [
            {
                url: "/images/roof-service/emergency-roofing/damaged-roof.webp",
                width: 1200,
                height: 630,
                alt: "Emergency roof repair technician working on storm-damaged roof",
            },
        ],
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Emergency Roof Repair",
        "provider": {
            "@type": "Organization",
            "name": "Paragon Exterior",
        },
        "areaServed": [
            {"@type": "State", "name": "Pennsylvania"},
            {"@type": "State", "name": "New Jersey"},
            {"@type": "State", "name": "Delaware"}
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "availableLanguage": "English",
            "serviceLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": ["PA", "NJ", "DE"],
                },
            },
        },
    },
};

export default function EmergencyRoofRepairPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Emergency Roof Repair Services"
                subText="Storm damage? Active leaks? Get 24/7 emergency roof repair from Paragon Exterior. Fast, professional response across PA, NJ, and DE."
                imgSrc="/images/roof-service/emergency-roofing/damaged-roof.webp"
                imgAlt="Professional emergency roof repair technician securing storm-damaged roof with tarps"
            />

            <section className="mx-auto w-4/6 py-6 lg:pt-24 text-center">
                <HeaderText as="h1">Fast Emergency Roof Repair You Can Count On</HeaderText>
                <SecondaryText>
                    Storms can strike any time — and roof damage needs a fast fix. Paragon Exterior is ready 24/7 to stop leaks, install emergency tarps, and protect your home from water damage. We serve Pennsylvania, New Jersey, and Delaware with experienced crews who act fast and fix it right.
                </SecondaryText>
            </section>

            <IncentivesSection
                className="py-16"
                title="What We Do in a Roofing Emergency"
                subtitle="We respond fast to storm damage, leaks, and urgent roofing problems with secure tarping, leak-stopping, and long-term repair planning."
                titleAs="h2"
                heroImage={{
                    alt: "Emergency roof repair team responding to storm damage",
                    src: "/images/roof-service/emergency-roofing/roof-damage.webp",
                }}
                incentives={[
                    {
                        name: "24/7 Emergency Response",
                        description: "We’re available any time, day or night, to respond to roof leaks, storm damage, or sudden roofing problems.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                        imageAlt: "24 hour emergency roof repair service icon",
                    },
                    {
                        name: "Storm Damage Repair",
                        description: "We fix wind and hail damage, replace missing shingles, and remove debris like fallen branches or trees.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                        imageAlt: "Storm damage emergency roof repair icon",
                    },
                    {
                        name: "Emergency Roof Tarping",
                        description: "We install heavy-duty tarps to prevent further water damage until permanent repairs can be made.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/solar-roof.svg",
                        imageAlt: "Emergency roof tarping service icon",
                    },
                ]}
                imagePosition="right"
            />

            <Timeline
                className="py-16"
                title="Our Emergency Roof Repair Process"
                steps={[
                    {
                        name: "You Call Us",
                        description: "Call our 24/7 line. We’ll ask a few quick questions and dispatch a crew right away.",
                        date: "Now",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Rapid Response",
                        description: "Our emergency team arrives ASAP to inspect your roof and take immediate action.",
                        date: "Within Hours",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Roof Secured",
                        description: "We tarp, patch, or seal your roof to stop the leak and protect your home.",
                        date: "Same Day",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Repairs Scheduled",
                        description: "We’ll schedule full repairs or replacement and help with insurance if needed.",
                        date: "Next Available",
                        dateTime: "2024-01-02",
                    },
                ]}
            />

            <section className="bg-slate-50 py-16 my-16 text-center">
                <HeaderText as="h3" className="mb-8">
                    Areas We Serve
                </HeaderText>
                <SecondaryText>
                    We provide emergency roof repair across Pennsylvania, New Jersey, and Delaware. From Philadelphia and Pittsburgh to Newark and Wilmington, our teams are ready to respond 24/7 to leaks, storm damage, and urgent roofing issues.
                </SecondaryText>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto w-5/6">
                    <HeaderText as="h3" className="text-center mb-12">
                        When to Call for Emergency Roof Repair
                    </HeaderText>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-4 text-red-800">Storm Damage</h4>
                            <SecondaryText>
                                Wind, hail, or fallen trees can tear up your roof. If shingles are missing or flashing is bent, call now to stop water damage.
                            </SecondaryText>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-4 text-blue-800">Leaking Roof</h4>
                            <SecondaryText>
                                If water is dripping, staining ceilings, or entering your attic — it’s an emergency. We’ll stop the leak fast and secure your roof.
                            </SecondaryText>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-16 my-16 text-center">
                <SecondaryText>
                    Roof leaks and storm damage can’t wait. Paragon Exterior is available 24/7 to respond to emergencies, secure your roof, and start repairs. Don’t risk more damage — call us now for fast help.
                </SecondaryText>
            </section>

            <WhyParagonEmergencyRoofRepair
                title="Why Choose Paragon Exterior for Emergency Roof Repair?"
                subTitle="At Paragon Exterior, we understand that emergencies can happen at any time.
                Our dedicated team is available 24/7 to provide fast, reliable emergency roof repair services
                that protect your home and restore your peace of mind. With years of experience in emergency roofing
                situations, we have the expertise to handle any roof emergency, big or small. We use high-quality materials
                and proven techniques to ensure your roof is secure and leak-free. Trust Paragon Exterior for all your emergency roof repair needs. Our commitment to customer satisfaction means we work quickly and
                efficiently to resolve your roofing issues, minimizing damage and disruption to your home. Contact us anytime
                for immediate assistance with emergency roof repairs. Our team is ready to respond to your call and
                provide the expert service you need to protect your home from further damage."
                titleAs="h2"
            />


            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
