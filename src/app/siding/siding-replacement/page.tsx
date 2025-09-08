import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import FAQSection from "@/components/FAQSection";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import React from "react";
import IncentivesSection from "@/components/service-page/Incentive";
import {WhyParagonSidingReplacement} from "@/components/WhyParagon";

/* ─────────────────────────────────────────
   SEO META
───────────────────────────────────────── */
export const metadata = {
    title: "Siding Replacement & Installation Professionals",
    description:
        "Paragon Exterior provides professional siding replacement services that boost curb appeal & protect your home from the elements across PA, NJ, and DE."
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Page() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Trusted Siding Replacement Services with 100% Satisfaction Guarantee"
                subText="Safeguard your home from the elements with expert siding replacement from Paragon Exterior. We combine the finest materials with exceptional workmanship to wrap your home in its new protective layer—built to last through every season."
                imgSrc="/images/siding/siding-service/siding-replace/hero.jpeg"
                imgAlt="Crew installing new siding during siding replacement"
            />

            <IncentivesSection
                title="Lasting Siding Replacement, Built For Our Climate"
                titleAs="h1"
                subtitle="Tired of peeling paint, warping panels, or rising energy bills? Our team removes failing siding, fixes any hidden damage, and installs premium new siding—built to stand up to Pennsylvania, New Jersey, and Delaware weather year after year."
                heroImage={{
                    src: "/images/siding/siding-service/siding-replace/siding-replacement.webp",
                    alt: "Professional Siding Replacement in progress"
                }}
                incentives={[
                    {
                        name: "Energy-Efficient Panels",
                        description:
                            "Insulated siding can lower your heating and cooling costs by up to 15%—keeping your home comfortable and efficient.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/toolbox.svg",
                        imageAlt: "Energy-efficient siding icon"
                    },
                    {
                        name: "Endless Style Choices",
                        description:
                            "Choose from dozens of modern, fade-resistant colors and textures for a look that truly fits your home.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/swatches.svg",
                        imageAlt: "Siding color swatch icon"
                    },
                    {
                        name: "Weather-Tight Installation",
                        description:
                            "Our factory-trained crews use the best flashing and sealing techniques for leak-free, long-lasting results.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/sun.svg",
                        imageAlt: "Weatherproof siding icon"
                    }
                ]}
                imagePosition="right"
                backgroundColor="bg-slate-50"
                incentiveColumns={3}
            />

            {/* SIDING STYLES SECTION */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-4">
                        High-Quality Vinyl Siding in an Array of Styles, Colors, and Textures
                    </HeaderText>
                    <SecondaryText className="text-center mb-12 max-w-4xl mx-auto">
                        We&apos;ll collaborate with you to select the ideal siding style and material that safeguards your home while enhancing its curb appeal. Every installation includes a comprehensive assessment and 100% satisfaction guarantee.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Horizontal Vinyl Siding",
                                description: "The classic choice for traditional and modern homes. Clean lines and easy maintenance with superior weather protection.",
                                benefits: ["Traditional appeal", "Easy maintenance", "Weather-resistant"]
                            },
                            {
                                title: "Vertical Vinyl Siding",
                                description: "Add visual height and modern sophistication to your home's exterior with durable vertical panels.",
                                benefits: ["Modern appearance", "Visual height", "Architectural interest"]
                            },
                            {
                                title: "Vinyl Shake Siding",
                                description: "Get the natural beauty of cedar shake without the maintenance. Perfect for adding texture and charm.",
                                benefits: ["Natural wood look", "Low maintenance", "Textured appeal"]
                            },
                            {
                                title: "Vinyl Shingle Siding",
                                description: "Capture the coastal charm of traditional shingles with the durability of modern vinyl technology.",
                                benefits: ["Coastal charm", "Durable materials", "Classic styling"]
                            },
                            {
                                title: "Board & Batten Siding",
                                description: "Create bold vertical lines and farmhouse appeal with this distinctive architectural style.",
                                benefits: ["Farmhouse style", "Bold vertical lines", "Distinctive look"]
                            },
                            {
                                title: "Insulated Vinyl Siding",
                                description: "Maximize energy efficiency with insulated panels that can lower heating and cooling costs by up to 15%.",
                                benefits: ["Energy efficient", "Lower utility bills", "Year-round comfort"]
                            }
                        ].map((style, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-lg">
                                <HeaderText as="h3" className="text-xl mb-3 text-primaryblue">
                                    {style.title}
                                </HeaderText>
                                <SecondaryText className="mb-4">
                                    {style.description}
                                </SecondaryText>
                                <ul className="space-y-2">
                                    {style.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <span className="text-primaryblue font-bold">✓</span>
                                            <span className="text-gray-700 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mx-auto w-5/6 py-12">
                <HeaderText className="text-center" as="h2">
                    Why Homeowners Trust Paragon Exterior for Siding Replacement
                </HeaderText>
                <SecondaryText className="mt-6 text-center">
                    Our siding replacement crews go the extra mile—handling everything from safe removal and structural repairs to precise installation and debris-free cleanup. We don&apos;t just cover your walls—we safeguard your home from the elements. Every Paragon Exterior project includes a comprehensive assessment before installation, clear communication, <strong>100% satisfaction guarantee</strong>, and expert craftsmanship trusted across Pennsylvania, New Jersey, and Delaware.
                </SecondaryText>

                <SecondaryText className="mt-4 text-center">
                    Whether you&apos;re upgrading faded vinyl, replacing damaged fiber cement, or giving your home a modern refresh, we deliver trusted siding replacement services that combine the finest materials with exceptional workmanship. We&apos;re committed to meeting the needs of all our clients with unmatched customer service and results that improve energy efficiency, resist harsh weather, and increase your property&apos;s value.
                </SecondaryText>

            </section>

            {/* WARNING SIGNS ROW */}
            <Row
                title="Is It Time for Siding Replacement?"
                description={
                    <SecondaryText>
                        Do you see cracked panels, warped spots, bubbling paint, mold, or higher utility bills? These are signs your siding may be failing.{" "}
                        <a href="/blog/when-to-replace-siding" className="text-primaryBlue underline">
                            Learn more about when to replace siding
                        </a>{" "}
                        and how new siding can protect your investment.
                    </SecondaryText>
                }
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement2.webp"
            />

            {/* BENEFITS ROW */}
            <Row
                title="The Benefits of New Siding"
                description={
                    <SecondaryText>
                        New siding does more than change your home&apos;s look—it boosts your home&apos;s thermal efficiency, improves protection against wind and moisture, and adds long-term value. With the right installation and materials, new siding can reduce energy bills, prevent mold growth, and give your home a like-new appearance.{" "}
                        <strong>Most homeowners recoup 70–80% of siding costs</strong> in resale value, making it one of the smartest exterior upgrades you can make.
                    </SecondaryText>
                }
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            {/* COMPREHENSIVE INSTALLATION PROCESS */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <HeaderText as="h2" className="text-center mb-4">
                        Our Comprehensive Siding Replacement Process
                    </HeaderText>
                    <SecondaryText className="text-center mb-12 max-w-4xl mx-auto">
                        From initial assessment to final cleanup, we handle every detail with precision and care. Our process safeguards your home while delivering exceptional results.
                    </SecondaryText>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Comprehensive Assessment",
                                description: "We inspect your existing siding, check for structural issues, and assess your home's unique needs before recommending the ideal materials and approach."
                            },
                            {
                                step: "2", 
                                title: "Eliminate & Replace Deteriorating Materials",
                                description: "Safe removal of old siding, identification and repair of any water damage or rot, plus preparation of the underlying structure for optimal installation."
                            },
                            {
                                step: "3",
                                title: "Install Flashing on Leak-Prone Areas", 
                                description: "Professional installation with weather-tight flashing around windows, doors, and corners to prevent moisture infiltration and ensure long-lasting protection."
                            },
                            {
                                step: "4",
                                title: "Final Inspection & Cleanup",
                                description: "Thorough walkthrough to ensure quality, complete debris removal, and your 100% satisfaction before project completion."
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primaryblue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {process.step}
                                </div>
                                <HeaderText as="h3" className="text-lg mb-3">
                                    {process.title}
                                </HeaderText>
                                <SecondaryText className="text-sm">
                                    {process.description}
                                </SecondaryText>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <SecondaryText className="max-w-3xl mx-auto">
                            Every step is performed by skilled and certified installers who combine decades of experience with the latest techniques. We protect your landscaping, maintain clear communication throughout the project, and leave your property cleaner than we found it.
                        </SecondaryText>
                    </div>
                </div>
            </section>

            <FAQSection
                title="Frequently Asked Questions About Siding Replacement"
                faqs={[
                    {
                        question: "How much does siding replacement cost?",
                        answer:
                            "Most siding replacement projects fall between $8–$14 per square foot, depending on the material, home size, and prep work. Every estimate is clear, detailed, and free."
                    },
                    {
                        question: "How long does a siding replacement take?",
                        answer:
                            "We can complete most single-family homes in 3–5 days, weather permitting. Our team keeps you updated every step of the way."
                    },
                    {
                        question: "What siding materials do you offer?",
                        answer:
                            "We install vinyl, fiber cement, aluminum, cedar, and engineered wood siding—always from leading brands and in dozens of colors and textures."
                    },
                    {
                        question: "Do you remove old siding?",
                        answer:
                            "Yes. We safely eliminate and replace all deteriorating siding, then perform a comprehensive assessment for water damage, rot, or structural issues underneath. If we find problems, we'll fix them before wrapping your home in its new protective layer—no surprises."
                    },
                    {
                        question: "Can you match the style of my current home?",
                        answer:
                            "Absolutely. We offer horizontal lap siding, vertical board and batten, and shake-style panels in a wide variety of finishes. We’ll help you find the perfect match—or something even better."
                    },
                    {
                        question: "Is new siding energy efficient?",
                        answer:
                            "Yes! Especially when paired with insulation wrap or insulated vinyl panels. Our energy-efficient siding installation safeguards your home from temperature extremes, improves your home's R-value, lowers heating/cooling costs by up to 15%, and improves year-round comfort."
                    }
                ]}
            />

            <section className="max-w-5xl mx-auto py-16 px-6">
                <HeaderText as="h2" className="text-3xl font-bold text-primaryblue text-center mb-6">
                    What to Expect During Your Siding Replacement
                </HeaderText>
                <SecondaryText className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    At Paragon Exterior, we make siding replacement easy. From your free estimate to final cleanup, our team walks you through each step of the process. We handle material selection, scheduling, and permitting—and always communicate clearly before, during, and after the job. Most homes are completed within a few days, and we leave your property spotless.
                </SecondaryText>
            </section>



            <WhyParagonSidingReplacement
                title="Why Homeowners Trust Paragon Exterior for Siding Replacement"
                titleAs="h2"
            />

            {/* CTA */}
            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    );
}
