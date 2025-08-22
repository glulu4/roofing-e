import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import GetEstimate from '@/components/landing-ui/GetEstimate';

export const metadata = {
    title: 'Metal Roof Colors',
    description: 'Explore popular metal roof colors and learn which shades stay vibrant, hide dirt, and boost resale value.'
};

export default function MetalRoofColorsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Metal Roof Color Options"
                subText="Find the perfect metal roof color for your home and learn which shades perform best over time."
                imgSrc="/images/roof-service/metal/metal1.webp"
                imgAlt="Home with colorful metal roof"
            />

            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/metal2.webp"
                imgAlt="Metal roof color samples"
                title="Explore Metal Roof Colors"
                mainContent={<>
                    Metal roofing is available in dozens of factory-applied finishes ranging from classic charcoal and earthy browns to bold reds and greens. Understanding your options helps you select a roof that complements your siding, trim, and neighborhood style.
                </>}
                bottomContent={<>
                    Modern paint systems with reflective pigments keep colors looking fresh for decades while improving energy efficiency.
                </>}
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/steel.webp"
                imgAlt="Charcoal gray metal roof on a house"
                title="What is the most popular color for a metal roof?"
                mainContent="Neutral shades like charcoal gray and black are the most popular choices because they pair well with most exterior colors and offer timeless curb appeal."
                imagePosition="left"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/aluminum.jpg"
                imgAlt="Light gray metal roof resisting fading"
                title="Which color metal roof fades the least?"
                mainContent="Lighter colors such as white, beige, and light gray fade the least since they reflect more sunlight. Premium Kynar® coatings further protect against UV damage."
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal3.avif"
                imgAlt="Tan metal roof that hides dirt"
                title="What color metal roof shows the least dirt?"
                mainContent="Medium tones like matte tan, bronze, and gray hide dust and pollen better than bright or very dark finishes, keeping the roof looking clean longer."
                imagePosition="left"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal2.webp"
                imgAlt="Home with neutral metal roof color"
                title="What color metal roof is best for resale?"
                mainContent="For resale value, stick with classic neutrals—charcoal, black, or dark brown—that appeal to a wide range of buyers and complement many architectural styles."
                imagePosition="right"
            />

            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}
