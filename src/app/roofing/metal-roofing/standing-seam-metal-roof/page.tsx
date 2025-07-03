import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

export const metadata = {
    title: 'Standing Seam Metal Roof Installation',
    description:
        'Paragon Exterior delivers premium standing seam metal roof installation and repair across Pennsylvania, New Jersey, and Delaware. Discover the durability, weather resistance, and low-maintenance performance of standing seam metal roofing systems.',
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
                        A standing seam metal roof features long, vertical panels with raised seams that interlock to form a continuous, watertight surface. The hidden fasteners beneath each seam eliminate exposed screws, reducing leak potential and ensuring sleek lines. Available in galvanized steel, aluminum, and copper, these panels come with factory-applied finishes that resist corrosion, UV degradation, and fading.
                    </>
                }
                bottomContent={
                    <>
                        Ideal for both commercial and high-end residential applications, standing seam systems withstand high winds, shed snow and debris, and deliver a service life of 40–70 years. Pair it with our insulation upgrades to maximize energy savings and indoor comfort.
                    </>
                }
                imagePosition="right"
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
                text1="Concealed fasteners eliminate corrosion points and leaks, ensuring a watertight, low-maintenance roof."
                text2="Reflective metal finishes reduce solar heat gain, cutting HVAC costs and boosting energy efficiency."
            />

            <div className="mt-16 mx-auto w-5/6">
                <HeaderText className="text-center mb-8">
                    Fascinating Facts About Standing Seam Metal Roofs
                </HeaderText>
                <SecondaryText>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Exceptionally Long Lifespan:</strong> Properly installed standing seam metal roofs can last <em>40–70 years</em>, far longer than most shingle systems.
                        </li>
                        <li>
                            <strong>Hidden Fasteners:</strong> The interlocking seams conceal all screws and nails underneath the panels, eliminating corrosion points and dramatically reducing leak potential.
                        </li>
                        <li>
                            <strong>High Wind Resistance:</strong> Engineered to withstand gusts over <em>140 mph</em>, these roofs are a top choice in hurricane- and tornado-prone regions.
                        </li>
                        <li>
                            <strong>Outstanding Energy Efficiency:</strong> Reflective metal finishes can lower roof surface temperatures by up to <em>50°F</em>, reducing cooling loads and cutting HVAC costs.
                        </li>
                        <li>
                            <strong>Near-Zero Maintenance:</strong> Smooth, durable metal panels shed debris and snow naturally, so you avoid frequent cleaning or patch repairs.
                        </li>
                        <li>
                            <strong>Sustainable & Recyclable:</strong> Most standing seam systems are made of <em>85–100% recycled metal</em> and are fully recyclable at end of life—an eco-friendly roofing solution.
                        </li>
                        <li>
                            <strong>Versatile Material Options:</strong> Available in aluminum, galvanized steel, and copper, with dozens of factory-applied colors and low-VOC finishes.
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
