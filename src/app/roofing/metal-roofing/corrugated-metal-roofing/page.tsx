import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import ProCon from '@/components/service-page/ProCon';
import FAQSection from '@/components/FAQSection';


export const metadata = {
    title: 'Corrugated Metal Roofing Installation and Repair',
    description:
        'Paragon Exterior provides expert corrugated metal roofing installation and repair in Pennsylvania, New Jersey, and Delaware. Learn about its durability, affordability, and energy-saving benefits.',
};

export default function CorrugatedMetalRoofPage() {


    return (
        <div className="min-h-screen">
            <Hero
                mainText="Corrugated Metal Roofing Installation & Repair"
                subText="Paragon Exterior is your local expert for corrugated metal roofing in Pennsylvania, New Jersey, and Delaware. Enjoy affordable durability, energy savings, and all-weather protection for your home or business. From new installs to fast repairs, we deliver top-rated results you can trust."
                imgSrc="/images/roof-service/metal/corrugated/corrugated-panel-hero.webp"
                imgAlt="Installation of corrugated metal roofing panels"
            />


            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/corrugated/corrugated-metal-roof1.webp"
                imgAlt="Close-up of corrugated metal roof profile"
                title="What Is Corrugated Metal Roofing?"
                mainContent={
                    <>
                        Corrugated metal roofing is made from strong, wavy sheets of steel, aluminum, or copper, installed with exposed fasteners.
                        The unique corrugated design gives these panels extra strength, so they can stand up to heavy winds, rain, hail, and snow across PA, NJ, and DE.
                        This roofing is a smart, affordable choice for both homes and businesses, and—with proper care—can last 30 to 50 years or more.
                    </>
                }
                bottomContent={
                    <>
                        Corrugated metal roofs are lightweight, shed debris easily, and reflect the sun’s heat to help lower cooling costs in summer.
                        It’s a great option for barns, houses, workshops, and commercial buildings throughout the tri-state region.
                    </>
                }
                imagePosition="right"
            />

            <Benefits
                title="Benefits of Corrugated Metal Roofing"
                description="Corrugated metal roofing offers a great balance of affordability, durability, and energy efficiency—making it a popular choice in Pennsylvania, New Jersey, and Delaware."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/corrugated/corrugated-metal-roof2.webp",
                    alt: 'Corrugated metal roof in sunny weather',
                }}
                img2={{
                    src: "/images/roof-service/metal/corrugated/corrugated-metal-roof3.webp",
                    alt: 'Side view of corrugated metal roofing edge',
                }}
                text1="✔ Lasts 30 to 50+ years with simple care and maintenance."
                text2="✔ Reflective coatings can lower your energy bills during hot Northeast summers."
            />


            <div className="mt-16 mx-auto w-5/6">
                <HeaderText className="text-center mb-8">
                    Corrugated vs. Standing Seam & Other Metal Roofing
                </HeaderText>
                <SecondaryText>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Cost-effective:</strong> Corrugated metal roofing is usually about 50% less expensive than standing seam metal roofs.</li>
                        <li><strong>Quick to install:</strong> The exposed fastener system makes installation faster and easier for both professionals and DIYers.</li>
                        <li><strong>Weather resistance:</strong> Corrugated panels are tough, but exposed screws may loosen over time—regular inspections help prevent leaks.</li>
                        <li><strong>Material options:</strong> Choose galvanized steel, lightweight aluminum for coastal areas, or copper for a premium look.</li>
                        <li><strong>Great for many climates:</strong> Needs the right slope and proper underlayment to avoid leaks or warping in extreme weather.</li>
                        <li><strong>Sound & insulation:</strong> Metal can be noisy in rain, but added underlayment or insulation can keep things quiet and comfortable.</li>
                    </ul>
                </SecondaryText>
            </div>





            <ProCon
                title="Benefits and Drawbacks of Corrugated Metal Roofing"
                benefits={[
                    {title: 'Durability & Longevity', content: 'Corrugated metal roofs are built to last 30–50 years or more. They’re highly resistant to wind, hail, and fire.'},
                    {title: 'Affordable Option', content: 'Corrugated metal is less expensive than standing seam and many other roofing types, making it great for budget-friendly projects.'},
                    {title: 'Energy Efficiency', content: 'Reflective coatings help cut down on heat and lower your cooling bills.'},
                    {title: 'Low Maintenance', content: 'Needs little upkeep compared to other materials—just routine checks and occasional cleaning.'},
                    {title: 'Eco-Friendly', content: 'Corrugated metal roofing is recyclable, making it an environmentally friendly roofing choice.'},
                    {title: 'Lightweight & Versatile', content: 'Easier to install, and works on many types of structures from homes to barns.'},
                    {title: 'Custom Styles', content: 'Available in many colors and finishes to match different buildings and tastes.'}
                ]}
                drawbacks={[
                    {title: 'Noise', content: 'Rain or hail can be loud on a metal roof, especially without proper insulation.'},
                    {title: 'Prone to Dents', content: 'Corrugated panels can dent from hail or falling branches.'},
                    {title: 'Expansion/Contraction', content: 'Temperature swings cause metal to expand and contract, so correct installation is important.'},
                    {title: 'Installation Matters', content: 'Proper installation and good underlayment are key to prevent leaks and make the roof last.'},
                    {title: 'Potential for Rust', content: 'Even treated metal can rust in harsh or coastal climates if not maintained.'},
                    {title: 'Industrial Look', content: 'Some may find the wavy, industrial style doesn’t fit every home or neighborhood.'}
                ]}
            />


            <FAQSection
                title='Frequently Asked Questions About Corrugated Metal Roofing'
                faqs={[
                    {
                        question: "Is corrugated metal roofing good?",
                        answer: "Yes! Corrugated metal roofing is durable, weather-resistant, and energy-efficient. It's popular for both homes and businesses. The main drawbacks are potential noise and denting, but both can be minimized with proper installation."
                    },
                    {
                        question: "How long does a corrugated metal roof last?",
                        answer: "With routine care, most corrugated metal roofs last 30 to 45 years, and some go even longer. Lifespan depends on the metal, installation quality, and local climate."
                    },
                    {
                        question: "Is corrugated metal roofing expensive?",
                        answer: "Corrugated metal roofing is affordable—typically $4 to $14 per square foot installed. Actual cost depends on roof size, metal type, and local labor."
                    },
                    {
                        question: "Is corrugated metal roofing cheaper than shingles?",
                        answer: "Metal roofing costs more upfront than asphalt shingles, but lasts much longer—often over 50 years. Shingles usually last 20–30 years. Over time, metal is often the better investment."
                    }
                ]}
            />

            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}
