import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import StandingSeamTabs from '@/components/service-page/roof/StandingSeamTabs';

export const metadata = {
    title: 'Standing Seam Metal Roof Installation',
    description:
        'Paragon Exterior delivers premium standing seam metal roof installation and repair across PA, NJ, and DE. ',
};

export default function StandingSeamMetalRoofPage() {
    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Standing Seam Metal Roofing"
                subText="Paragon Exterior specializes in standing seam metal roof installation and repair. Our concealed-fastener systems provide unmatched weather resistance, energy efficiency, and a sleek, modern aesthetic for commercial and residential properties."
                imgSrc="/images/roof-service/metal/standing-seam/hero.webp"
                imgAlt="Crew installing standing seam metal roof panels"
            />

            {/* WHAT IS */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/standing-seam/seam1.webp"
                imgAlt="Close-up of standing seam interlocking panels"
                title="What Is a Standing Seam Metal Roof?"
                mainContent={
                    <>
                        A standing seam metal roof uses long panels that run from top to bottom. Each panel has raised seams that
                        lock together, creating a watertight barrier. All the screws and fasteners are hidden under the seams—so
                        you don’t have to worry about exposed hardware or leaks. You can choose from galvanized steel, aluminum, or
                        copper panels, all with special finishes that protect against rust and fading.
                    </>
                }
                bottomContent={
                    <>
Standing seam roofs work great for both homes and businesses. They’re tough enough to handle high winds and easily shed snow or debris. With the right care, these roofs can last 40 to 70 years. Want better energy savings? Pair your new roof with our insulation upgrades for even more comfort.                    </>
                }
                imagePosition="right"
            />

            <StandingSeamTabs

                className="w-5/6 mx-auto mt-12 mb-16 sm:mb-24 lg:mb-32"
            />

            {/* KEY BENEFITS */}
            <Benefits
                title="Benefits of Standing Seam Metal Roofing"
                description="From superior leak protection to industry-leading longevity, standing seam metal roofs outperform traditional roofing options in every category."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/standing-seam/seam2.webp",
                    alt: 'Standing seam metal roof under stormy sky',
                }}
                img2={{
                    src: "/images/roof-service/metal/standing-seam/seam3.webp",
                    alt: 'Close-up of metal roof seam interlock',
                }}
                text1="No Leaks or Rust: With hidden fasteners, there are no exposed screws to cause leaks or rust. Your roof stays watertight and easy to maintain."
                text2="Saves Energy: The metal finish reflects sunlight, which helps keep your building cooler and lowers your air conditioning bills."
            />

            <div className="mt-16 mx-auto w-5/6">
                <HeaderText className="text-center mb-8">
                    Fascinating Facts About Standing Seam Metal Roofs
                </HeaderText>
                <SecondaryText>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Lasts Decades:</strong> With proper care, these roofs can last **40–70 years**—much longer than regular shingles.
                        </li>
                        <li>
                            <strong>No Exposed Screws:</strong> All fasteners are hidden, so there’s less chance of leaks or rust.
                        </li>
                        <li>
                            <strong>Strong in Storms:</strong> Built to stand up to winds over **140 mph**—great for tough weather.
                        </li>
                        <li>
                            <strong>Cuts Cooling Costs:</strong> Reflective metal can lower your roof’s temperature by up to **50°F**, which means you’ll pay less for air conditioning.
                        </li>
                        <li>
                            <strong>Low Maintenance:</strong> Metal panels shed debris and snow, so you spend less time cleaning or repairing your roof.
                        </li>
                        <li>
                            <strong>Eco-Friendly:</strong> Made from mostly recycled metal, and fully recyclable when it’s time to replace.
                        </li>
                        <li>
                            <strong>Lots of Choices:</strong> Available in different metals and many colors to match your style.
                        </li>
                    </ul>

                </SecondaryText>
            </div>



            {/* CTA */}
            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}
