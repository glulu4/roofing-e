import React, {useState} from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import ColorSelector from '@/components/service-page/roof/ColorSelector';
import SecondaryText from '@/components/SecondaryText';



export const metadata = {
    title: 'Metal Roof Colors - Popular Options & Color Guide',
    description: 'Explore popular metal roof colors with our color visualizer. See modern metal roof colors, standing seam options, and find the best colors for your home.'
};

export default function MetalRoofColorsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Metal Roof Color Options"
                subText="Find the perfect metal roof color for your home with our color guide. Explore popular colors, modern options, and see which shades perform best over time."
                imgSrc="/images/roof-service/metal/metal-roof-color/color5.webp"
                imgAlt="Home with colorful metal roof showing various color options"
            />

            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/metal-roof-color/color2.webp"
                imgAlt="Metal roof color samples and swatches"
                title="Popular Metal Roof Colors & Styles"
                mainContent={<SecondaryText>
                    Metal roofing comes in dozens of factory-applied colors 
                    ranging from classic charcoal and earthy browns to bold reds 
                    and greens. <strong>Popular metal roof colors</strong> include 
                    charcoal gray, black, white, bronze, and forest green. Modern metal 
                    roof colors also feature contemporary options like matte finishes and 
                    ool-tone grays.
                    <br /><br />
                    Whether you choose <strong>standing seam metal roof colors</strong> or
                     other metal roof styles, understanding your color options helps
                      you select a roof that complements your siding, trim, and neighborhood style. 
                      Each color performs differently in terms of fading, dirt visibility, and 
                      energy efficiency.
                </SecondaryText>}
                bottomContent={<>
                    Modern paint systems with reflective pigments keep colors looking fresh for decades while improving energy efficiency. Premium coatings resist fading, chalking, and weather damage.
                </>}
                imagePosition="right"
            />

            {/* Color Visualizer Section */}
            <div className="container mx-auto px-4 py-12">
                <ColorSelector />
            </div>

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-color/color3.avif"
                imgAlt="Charcoal gray standing seam metal roof on modern house"
                title="What is the most popular color for a metal roof?"
                mainContent={<SecondaryText >
                    <strong>Charcoal gray and black are the most popular metal roof colors</strong> because they pair well with most exterior colors and offer timeless curb appeal. These neutral shades work with both traditional and modern home styles.
                    <br /><br />
                    Other popular choices include:
                    <br />• Bronze - complements brick and stone exteriors
                    <br />• Forest green - blends naturally with landscapes
                    <br />• White - maximizes energy efficiency
                    <br />• Copper - provides premium appearance
                    <br /><br />
                </SecondaryText>}
                bottomContent="Standing seam metal roof colors in these popular shades offer clean lines and lasting beauty that enhance any home's architecture."
                imagePosition="left"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-color/color.webp"
                imgAlt="Light gray metal roof showing fade resistance over time"
                title="Which color metal roof fades the least?"
                mainContent={<SecondaryText>
                    <strong>Light colors like white, beige, and light gray fade the least</strong> since they reflect more sunlight and absorb less UV radiation. These colors stay vibrant longer and maintain their original appearance for decades.
                    <br /><br />
                    Premium Kynar® and PVDF coatings provide additional fade protection for all metal roof colors. Modern metal roof colors with these advanced coatings can maintain their color integrity for 30+ years with proper maintenance.
                    <br /><br />
                    Dark colors like black and charcoal may show slight fading over time but remain popular due to their classic appearance and ability to hide dirt and debris.
                </SecondaryText>}
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal3.avif"
                imgAlt="Tan bronze metal roof that hides dirt and debris"
                title="What color metal roof shows the least dirt?"
                mainContent={<SecondaryText >
                    <strong>Medium tones like bronze, tan, and gray hide dirt and debris best</strong>, keeping your roof looking clean between maintenance. These colors camouflage dust, pollen, leaves, and other natural debris.
                    <br /><br />
                    Colors that hide dirt well:
                    <br />• Bronze and copper tones
                    <br />• Medium gray shades
                    <br />• Earth tones like brown and tan
                    <br />• Matte finishes in any color
                    <br /><br />
                </SecondaryText>}
                bottomContent={"                    Very light colors (white, cream) and very dark colors (black, dark green) tend to show dirt more easily. However, metal roofs are easy to clean and maintain regardless of color choice."}
                imagePosition="left"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal2.webp"
                imgAlt="Home with neutral metal roof color for maximum resale value"
                title="What color metal roof is best for resale value?"
                mainContent={<SecondaryText>
                    <strong>Classic neutral colors like charcoal, black, and dark brown offer the best resale value</strong> because they appeal to the widest range of buyers and complement many architectural styles.
                    <br /><br />
                    Best metal roof colors for resale:
                    <br />• Charcoal gray - universally appealing
                    <br />• Black - timeless and elegant
                    <br />• Dark brown - works with most exteriors
                    <br />• Medium gray - modern and versatile
                    <br /><br />
                    Avoid extremely bold or unusual colors that might limit buyer appeal. Neutral standing seam metal roof colors provide the safest choice for maintaining home value while still offering attractive, durable roofing.
                </ SecondaryText>}
                imagePosition="right"
            />

            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-color/color1.webp"
                imgAlt="Modern home with contemporary metal roof colors and styles"
                title="Metal Roof Colors and Prices - What to Expect"
                mainContent={<SecondaryText>
                    <strong>Metal roof colors and prices vary based on the coating system and finish quality.</strong> Standard colors typically cost the same, while premium finishes like copper and specialty coatings may add 10-20% to material costs.
                    <br /><br />
                    Price factors for metal roof colors:
                    <br />• Standard colors (gray, black, brown) - base pricing
                    <br />• Premium colors (copper, bronze) - slight upcharge
                    <br />• Specialty finishes (matte, textured) - 10-15% more
                    <br />• High-performance coatings - 15-25% premium
                    <br /><br />
                    The color choice represents a small portion of total roofing costs. Focus on selecting colors that offer the best long-term performance and aesthetic appeal for your home.
                </ SecondaryText>}
                imagePosition="left"
            />


            {/* Light vs Dark Metal Roof Colors */}
            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-color/color6.webp"
                imgAlt="Comparison of light vs dark standing seam metal roofs"
                title="Light vs Dark Metal Roof Colors"
                mainContent={<SecondaryText>
                    Choosing between <strong>light and dark metal roof colors</strong> affects more than looks.
                    Light colors like white, beige, and light gray reflect more sunlight, keeping your attic cooler
                    and reducing energy bills. Dark shades like black and charcoal absorb heat, which can shorten
                    shingle lifespan in hot climates but may help melt snow faster in the winter.
                    <br /><br />
                    If you live in Pennsylvania, New Jersey, or Delaware, where summers are hot but winters bring
                    snow, a medium tone such as bronze or medium gray can provide the best balance.
                </SecondaryText>}
                bottomContent="Rule of thumb: lighter colors = cooler efficiency, darker colors = stronger contrast and bolder curb appeal."
                imagePosition="right"
            />

            {/* Best Metal Roof Colors for Energy Efficiency */}
            <InfoSection
                titleAs="h2"
                imgSrc="/images/roof-service/metal/metal-roof-color/color7.webp"
                imgAlt="White energy-efficient standing seam metal roof on a modern home"
                title="Best Metal Roof Colors for Energy Efficiency"
                mainContent={<SecondaryText>
                    Energy-efficient <strong>metal roof colors</strong> use reflective pigments that bounce sunlight
                    away instead of absorbing it. The best performing shades are white, light gray, and special
                    “cool roof” finishes certified by Energy Star. These colors can lower cooling costs by up to
                    20% in summer months.
                    <br /><br />
                    Modern coatings like Kynar® PVDF keep even darker colors efficient by reflecting infrared light.
                    This means you don’t have to choose between style and performance.
                </SecondaryText>}
                bottomContent="For maximum energy savings, pair your roof color with proper attic insulation and ventilation."
                imagePosition="left"
            />





            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 text-center">

                    <GetEstimate />
                </div>
            </div>
        </div>
    );
}