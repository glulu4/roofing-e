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
                mainText="Upgrade Your Home With Professional Siding Replacement"
                subText="Give your home a fresh, durable exterior with expert siding replacement from Paragon Exterior. Boost curb appeal, improve insulation, and enjoy protection that lasts through every season."
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

            {/* WHY CHOOSE US */}
            <section className="mx-auto w-5/6 py-12">
                <HeaderText className="text-center" as="h2">
                    Why Paragon Exterior for Siding Replacement?
                </HeaderText>
                <SecondaryText className="mt-6 text-center">
                    Our siding replacement crews go the extra mile—handling everything from safe removal and structural repairs to precise installation and debris-free cleanup. We don’t just cover your walls—we protect your home. Every Paragon Exterior project includes clear communication, strong manufacturer warranties, and expert craftsmanship trusted across Pennsylvania, New Jersey, and Delaware.
                </SecondaryText>

                <SecondaryText className="mt-4 text-center">
                    Whether you&apos;re upgrading faded vinyl, replacing damaged fiber cement, or giving your home a modern refresh, we deliver siding solutions that improve energy efficiency, resist harsh weather, and increase your property’s value. It’s why homeowners continue to choose Paragon Exterior for professional, stress-free siding replacement.
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
                            "Yes. We remove all old siding and check for water damage, rot, or structural issues underneath. If we find problems, we’ll fix them before installing your new siding—no surprises."
                    },
                    {
                        question: "Can you match the style of my current home?",
                        answer:
                            "Absolutely. We offer horizontal lap siding, vertical board and batten, and shake-style panels in a wide variety of finishes. We’ll help you find the perfect match—or something even better."
                    },
                    {
                        question: "Is new siding energy efficient?",
                        answer:
                            "Yes! Especially when paired with insulation wrap or insulated vinyl panels. Upgrading your siding improves your home’s R-value, lowers heating/cooling costs, and improves year-round comfort."
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
