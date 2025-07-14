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
    title: "Siding Replacement Professionals",
    description:
        "Need siding replacement? Paragon Exterior provides professional siding replacement services that boost curb appeal, improve energy efficiency, and protect your home from the elements across Pennsylvania, New Jersey, and Delaware."
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
                    Our siding replacement crews go the extra mile—handling everything from safe removal and repairs to precise installation and debris-free cleanup. All backed by strong warranties and local reputation.
                </SecondaryText>
            </section>

            {/* WARNING SIGNS ROW */}
            <Row
                title="Is It Time for Siding Replacement?"
                description={
                    <>
                        Do you see cracked panels, warped spots, bubbling paint, mold, or higher utility bills? These are signs your siding may be failing.{" "}
                        <a href="/blog/when-to-replace-siding" className="text-primaryBlue underline">
                            Learn more about when to replace siding
                        </a>{" "}
                        and how new siding can protect your investment.
                    </>
                }
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement2.webp"
            />

            {/* BENEFITS ROW */}
            <Row
                title="The Benefits of New Siding"
                description="New siding improves your home's insulation, blocks moisture, and gives your exterior a crisp, updated look. Most homeowners see up to 80% of their project cost added to resale value."
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            {/* FAQ */}
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
                    }
                ]}
            />

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
