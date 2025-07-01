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
                mainText="Siding Replacement Experts"
                subText="Upgrade your home’s exterior with durable, energy-efficient siding replacement from Paragon Exterior. Enjoy fresh curb appeal and year-round protection."
                imgSrc="/images/siding/siding-service/siding-replace/hero.jpeg"
                imgAlt="Crew installing new siding during siding replacement"
            />

            <IncentivesSection
                title="Professional Siding Replacement That Lasts"
                titleAs="h1"
                subtitle="Old, cracked, or faded siding can allow moisture in and drag curb appeal down. Our siding replacement specialists remove failing panels, fix structural issues, and install beautiful new vinyl or fiber-cement siding built to handle Mid-Atlantic weather."
                heroImage={{
                    src: "/images/siding/siding-service/siding-replace/siding-replacement.webp",
                    alt: "Professional Siding Replacement That Lasts"
                }}
                incentives={[
                    {
                        name: "Energy-Efficient Panels",
                        description:
                            "Insulated siding options can cut heating and cooling costs by up to 15 %.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/toolbox.svg",
                        imageAlt: "Energy-efficient siding icon for siding replacement"
                    },
                    {
                        name: "Endless Color Choices",
                        description:
                            "Dozens of fade-resistant colors and textures to match your style.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/swatches.svg",
                        imageAlt: "Color palette icon for siding replacement"
                    },
                    {
                        name: "Weather-Tight Installation",
                        description:
                            "Factory-trained crews flash, seal, and vent correctly for leak-free results.",
                        imageSrc: "/images/siding/siding-service/siding-replace/icons/sun.svg",
                        imageAlt: "sun icon for siding replacement"
                    }
                ]}
                imagePosition="right"
                backgroundColor="bg-slate-50"
                incentiveColumns={3}
            />

            {/* <InfoSection
                imgSrc="/images/siding-service/replacement/siding-info.webp"
                imgAlt="Old siding being replaced"
                title="Professional Siding Replacement That Lasts"
                mainContent="Faded panels, warping, or moisture damage can leave your home vulnerable to the elements. Our siding replacement specialists remove failing materials, repair any underlying issues, and install new vinyl or fiber-cement siding built to withstand Mid-Atlantic weather."
                bottomContent="With modern color options and insulated backing, a siding replacement not only transforms curb appeal but can also lower energy bills."
                imagePosition="right"
            />  */}

            {/* WHY CHOOSE US */}
            <section className="mx-auto w-5/6 py-12">
                <HeaderText className="text-center">
                    Why Choose Paragon Exterior for Siding Replacement?
                </HeaderText>
                <SecondaryText className="mt-6 text-center">
                    From precise installation and color-matched trim to debris-free cleanup, we deliver siding replacement that looks great and performs for decades—backed by manufacturer and workmanship warranties.
                </SecondaryText>
            </section>

            {/* WARNING SIGNS ROW */}
            <Row
                title="Signs You Need Siding Replacement"
                description={
                    <>
                        Cracked panels, bubbling paint, mold growth, or skyrocketing heating
                        bills are common indicators that your siding is past its prime.{" "}
                        <a href="/blog/when-to-replace-siding" className="text-primaryBlue">
                            Learn more
                        </a>{" "}
                        about when it’s time to invest in new siding.
                    </>
                }
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement2.webp"
            />

            {/* BENEFITS ROW */}
            <Row
                title="Benefits of New Siding"
                description="New siding improves insulation, blocks moisture, and gives your home a fresh, modern look that can increase resale value by up to 80 % of the project cost."
                imageSrc="/images/siding/siding-service/siding-replace/siding-replacement3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            {/* FAQ */}
            <section className="mx-auto w-5/6 py-12">
                <HeaderText className="text-center my-20">Siding Replacement FAQ</HeaderText>
                <FAQSection
                    faqs={[
                        {
                            question: "How much does siding replacement cost?",
                            answer:
                                "Cost depends on material, home size, and prep work. Most projects range from $8–$14 per square foot. We provide a detailed, written estimate."
                        },
                        {
                            question: "How long does a siding replacement take?",
                            answer:
                                "An average single-family home can be completed in 3–5 days, weather permitting."
                        },
                        {
                            question: "What siding materials do you offer?",
                            answer:
                                "Vinyl, aluminum, fiber cement, cedar, and engineered wood siding from leading manufacturers—available in dozens of colors and profiles."
                        }
                    ]}
                />
            </section>

            
            <WhyParagonSidingReplacement
            title="Why Choose Paragon Exterior for Siding Replacement?"
            titleAs="h2"
            />

            {/* CTA */}
                        <div className="py-12 pt-20 sm:pt-0">
                            <GetEstimate />
                        </div>
        </div>
    );
}
