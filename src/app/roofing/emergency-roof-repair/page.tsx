// import Hero from "@/components/service-page/Hero";
// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import HeaderText from "@/components/HeaderText";
// import SecondaryText from "@/components/SecondaryText";
// import React from "react";
// import Timeline from "@/components/Timeline";
// import IncentivesSection from "@/components/service-page/Incentive";

// /* ─────────────────────────────────────────
//    META
// ───────────────────────────────────────── */
// export const metadata = {
//     title: "Emergency Roof Repair | Paragon Exterior",
//     description:
//         "Storm damage? Active leaks? Paragon Exterior provides 24/7 emergency roof repair across Pennsylvania, New Jersey, and Delaware—fast tarping, leak-stopping, and permanent fixes."
// };



// /* ─────────────────────────────────────────
//    PAGE
// ───────────────────────────────────────── */
// export default function Page() {
//     return (
//         <div className="min-h-screen">
//             {/* HERO */}
//             <Hero
//                 mainText="Emergency Roof Repair"
//                 subText="Active leak? Storm just ripped off shingles? Call Paragon Exterior for 24/7 emergency roof repair and stop damage fast."
//                 imgSrc="/images/roof-service/emergency-roofing/damaged-roof.webp"
//                 imgAlt="Technician providing emergency roof repair at night"
//             />



//             <div className="mx-auto w-4/6 py-6 lg:py-12">

//                 <div className="mb-32 text-center">
//                     <HeaderText>
//                         Why Choose Paragon Exterior for Emergency Roof Repair?
//                     </HeaderText>

//                     <SecondaryText>
//                         When a storm tears off shingles or a sudden leak threatens your home, you need a roofing company that responds fast and delivers lasting solutions. Paragon Exterior’s emergency roof repair team is on call 24/7 to secure your roof, stop water intrusion, and restore your peace of mind.
//                     </SecondaryText>
//                 </div>
//             </div>

//             <IncentivesSection
//                 className="py-16"
//                 title="Emergency Roof Repair Services"
//                 subtitle="From storm damage to active leaks, our emergency roof repair team is ready to respond 24/7. We provide fast tarping, leak-stopping, and permanent fixes to protect your home."
//                 titleAs="h1"
//                 heroImage={{
//                     alt:"Technician performing emergency roof repair",
//                     src:"/images/roof-service/emergency-roofing/roof-damage.webp"
//                 }}
//                 incentives={[
//                     {
//                         name: "24/7 Emergency Response",
//                         description: "Call us anytime—our team is ready to respond to your roof emergency.",
//                         imageSrc:"/images/roof-service/emergency-roofing/icons/clock.svg",
//                         imageAlt: "24/7 emergency response icon"
//                     },
//                     {
//                         name: "Rapid Leak Stopping",
//                         description: "Call us anytime—our team is ready to respond to your roof emergency.",
//                         imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
//                         imageAlt: "Rapid leak stopping icon"
//                     },
//                     {
//                         name: "Temporary Tarping",
//                         description: "We install tarps to protect your home until permanent repairs can be made.",
//                         imageSrc: "/images/roof-service/emergency-roofing/icons/solar-roof.svg",
//                         imageAlt: "Insurance coordination icon"

//                     },

//                 ]}
//                 imagePosition="right"
//             />
                



//             {/* PROCESS */}
//             <Timeline
//             className="py-16"
//             title="How Our Emergency Roof Repair Works"
//                 steps={[
//                     {
//                         name: "Call Our 24/7 Line",
//                         description: "Speak with a live operator who will dispatch our emergency team.",
//                         date: "Day 1",
//                         dateTime: "2023-10-01"
//                     },
//                     {
//                         name: "Rapid Response",
//                         description: "Our team arrives within hours to assess damage and stop leaks.",
//                         date: "Day 1",
//                         dateTime: "2023-10-01"
//                     },
//                     {
//                         name: "Temporary Tarping",
//                         description: "We install tarps to prevent further water intrusion until repairs can be made.",
//                         date: "Day 1",
//                         dateTime: "2023-10-01"
//                     },
//                     {
//                         name: "Permanent Repairs",
//                         description: "We schedule permanent repairs or replacement based on your needs and insurance coverage.",
//                         date: "Day 2+",
//                         dateTime: "2023-10-02"
//                     }
//                 ]}
//             />

//             {/* REASSURANCE */}
//             <section className="bg-slate-100 py-16 my-16">
//                 <div className="mx-auto w-5/6 text-center">
//                     <SecondaryText>
//                         Don’t let a sudden roof leak ruin your home. Our emergency roof repair
//                         team is on call day and night—ready with the tools, materials, and
//                         experience to protect your property until a full repair or replacement can
//                         be completed.
//                     </SecondaryText>
//                 </div>
//             </section>

//             {/* CTA */}
//             <GetEstimate />
//         </div>
//     );
// }


import Hero from "@/components/service-page/Hero";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import React from "react";
import Timeline from "@/components/Timeline";
import IncentivesSection from "@/components/service-page/Incentive";
import {WhyParagonEmergencyRoofRepair} from "@/components/WhyParagon";

/* ─────────────────────────────────────────
   META - Enhanced for SEO
───────────────────────────────────────── */
export const metadata = {
    title: "Emergency Roof Repair Services | 24/7 Storm Damage Response | Paragon Exterior",
    description: "Need emergency roof repair? Paragon Exterior provides 24/7 emergency roofing services for storm damage, active leaks, and urgent repairs in PA, NJ, DE. Fast response guaranteed.",
    keywords: "emergency roof repair, 24/7 roof repair, storm damage repair, emergency roofing services, urgent roof repair, roof leak repair, emergency roofer",
    openGraph: {
        title: "Emergency Roof Repair Services | 24/7 Response | Paragon Exterior",
        description: "Emergency roof repair services available 24/7. Fast response for storm damage, leaks, and urgent roofing needs in Pennsylvania, New Jersey, and Delaware.",
        type: "website",
        images: [
            {
                url: "/images/roof-service/emergency-roofing/damaged-roof.webp",
                width: 1200,
                height: 630,
                alt: "Emergency roof repair technician working on storm-damaged roof"
            }
        ]
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Emergency Roof Repair",
        "provider": {
            "@type": "Organization",
            "name": "Paragon Exterior"
        },
        "areaServed": ["Pennsylvania", "New Jersey", "Delaware"],
        "availableChannel": {
            "@type": "ServiceChannel",
            "availableLanguage": "English",
            "serviceLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": ["PA", "NJ", "DE"]
                }
            }
        }
    }
};

/* ─────────────────────────────────────────
   PAGE - SEO Optimized
───────────────────────────────────────── */
export default function EmergencyRoofRepairPage() {
    return (
        <div className="min-h-screen">
            {/* HERO - Primary H1 for SEO */}
            <Hero
                mainText="Emergency Roof Repair Services"
                subText="Storm damage causing active leaks? Get immediate emergency roof repair from Paragon Exterior's 24/7 response team. Serving PA, NJ, and DE with fast tarping and permanent fixes."
                imgSrc="/images/roof-service/emergency-roofing/damaged-roof.webp"
                imgAlt="Professional emergency roof repair technician securing storm-damaged roof with tarps"
            />

            {/* INTRODUCTION SECTION */}
            <section className="mx-auto w-4/6 py-6 lg:pt-24">
                <div className="mb-32 text-center">
                    <HeaderText as="h1">
                        Emergency Roof Repair When You Need It Most
                    </HeaderText>
                    <SecondaryText>
                        When severe weather strikes and damages your roof, every minute counts. Paragon Exterior&apos;s emergency roof repair specialists provide immediate response for storm damage, active leaks, and urgent roofing emergencies throughout Pennsylvania, New Jersey, and Delaware. Our certified emergency roofers are equipped for rapid leak stopping, temporary tarping, and permanent emergency roof repairs to protect your home and family.
                    </SecondaryText>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <IncentivesSection
                className="py-16"
                title="Comprehensive Emergency Roof Repair Services"
                subtitle="From storm damage assessment to emergency leak repairs, our 24/7 emergency roofing team provides complete solutions. We respond immediately to roof emergencies with professional tarping, leak stopping, and permanent emergency roof repair services."
                titleAs="h2"
                heroImage={{
                    alt: "Emergency roof repair team responding to storm damage with professional equipment",
                    src: "/images/roof-service/emergency-roofing/roof-damage.webp"
                }}
                incentives={[
                    {
                        name: "24/7 Emergency Response",
                        description: "Immediate emergency roof repair response available around the clock. Our emergency roofers are on standby for urgent roof repairs, storm damage, and active leak situations.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                        imageAlt: "24 hour emergency roof repair service icon"
                    },
                    {
                        name: "Storm Damage Repair",
                        description: "Specialized emergency roof repair for storm damage including wind damage, hail damage, and fallen tree removal. Complete storm damage assessment and emergency repairs.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                        imageAlt: "Storm damage emergency roof repair icon"
                    },
                    {
                        name: "Emergency Roof Tarping",
                        description: "Professional emergency tarping services to prevent water damage until permanent emergency roof repairs can be completed. Secure, weatherproof temporary protection.",
                        imageSrc: "/images/roof-service/emergency-roofing/icons/solar-roof.svg",
                        imageAlt: "Emergency roof tarping service icon"
                    },
                ]}
                imagePosition="right"
            />

            {/* EMERGENCY PROCESS */}
            <Timeline
                className="py-16"
                title="Our Emergency Roof Repair Process"
                steps={[
                    {
                        name: "Emergency Call Received",
                        description:
                            "Call our 24/7 emergency roof repair hotline. Our team will prioritize your situation and coordinate a prompt response for urgent roof repair needs.",
                        date: "Immediate",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Emergency Response Initiated",
                        description:
                            "A qualified emergency roof repair crew is dispatched as quickly as possible to assess damage, identify leaks, and begin stabilizing your roof.",
                        date: "As Soon As Possible",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Roof Stabilization",
                        description:
                            "We take immediate action to protect your property, including tarping and leak prevention, using durable, professional-grade materials.",
                        date: "Promptly",
                        dateTime: "2024-01-01",
                    },
                    {
                        name: "Permanent Repairs Scheduled",
                        description:
                            "We work with you to schedule permanent repairs or roof replacement, assist with insurance claims, and provide a long-term solution.",
                        date: "Next Available",
                        dateTime: "2024-01-02",
                    },
                ]}
            />


            {/* COVERAGE AREAS - Important for Local SEO */}
            <section className="bg-slate-50 py-16 my-16">
                <div className="mx-auto w-5/6 text-center">
                    <HeaderText as="h3" className="mb-8">
                        Emergency Roof Repair Coverage Areas
                    </HeaderText>
                    <SecondaryText>
                        Paragon Exterior provides emergency roof repair services throughout Pennsylvania, New Jersey, and Delaware. Our emergency roofing teams respond to storm damage, active leaks, and urgent roof repairs in Philadelphia, Pittsburgh, Allentown, Newark, Wilmington, and surrounding areas. When you need emergency roof repair, we&apos;re your local emergency roofers ready to respond 24/7.
                    </SecondaryText>
                </div>
            </section>

            {/* EMERGENCY SITUATIONS - FAQ Style Content */}
            <section className="py-16 bg-white">
                <div className="mx-auto w-5/6">
                    <HeaderText as="h3" className="text-center mb-12">
                        When to Call for Emergency Roof Repair
                    </HeaderText>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-4 text-red-800">Storm Damage Emergency Repairs</h4>
                            <SecondaryText>
                                Missing shingles, damaged flashing, fallen trees, or visible roof damage from storms require immediate emergency roof repair to prevent water damage and structural issues.
                            </SecondaryText>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg mb-4 text-blue-800">Active Leak Emergency Repairs</h4>
                            <SecondaryText>
                                Water dripping inside your home, water stains on ceilings, or visible leaks during rain require emergency roof repair services to stop water intrusion immediately.
                            </SecondaryText>
                        </div>
                    </div>
                </div>
            </section>

            {/* REASSURANCE - Enhanced with Keywords */}
            <section className="bg-slate-100 py-16 my-16">
                <div className="mx-auto w-5/6 text-center">
                    <SecondaryText>
                        Don&apos;t wait when you need emergency roof repair. Paragon Exterior&apos;s certified emergency roofers are available 24/7 for immediate response to storm damage, active leaks, and urgent roofing emergencies. Our emergency roof repair team has the experience, equipment, and materials to protect your home until permanent repairs can be completed. Call now for emergency roof repair services in PA, NJ, and DE.
                    </SecondaryText>
                </div>
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