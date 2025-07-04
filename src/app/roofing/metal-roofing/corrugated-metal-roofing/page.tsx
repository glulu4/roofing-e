import React from 'react';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Benefits from '@/components/solar/Benefits';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import ProCon from '@/components/service-page/ProCon';
import FAQSection from '@/components/FAQSection';



const benefits = [
    {title: 'Durability and Longevity', content: 'Corrugated metal roofs are known for their long lifespan, often lasting 30-50 years or more with proper maintenance. They are resistant to weather damage, including wind, hail, and fire.'},
    {title: 'Cost-Effectiveness', content: 'While the initial cost can be higher than some other roofing materials like asphalt shingles, corrugated metal is often more affordable than other metal roofing options like standing seam.'},
    {title: 'Energy Efficiency', content: 'Corrugated metal roofs can be coated with reflective paints that help reflect sunlight and reduce cooling costs, making them a more energy-efficient choice.'},
    {title: 'Low Maintenance', content: 'Compared to other roofing materials, corrugated metal generally requires less maintenance.'},
    {title: 'Recyclability', content: 'Metal roofing, including corrugated metal, is recyclable, making it an environmentally friendly option.'},
    {title: 'Lightweight', content: 'The lightweight nature of corrugated metal makes installation easier and can reduce the need for extensive structural support.'},
    {title: 'Variety of Styles', content: 'Corrugated metal roofing comes in a wide range of colors and finishes, allowing for customization to match different architectural styles.'}
];

const drawbacks = [
    {title: 'Noise', content: 'Rain or hail on a corrugated metal roof can be noisy, especially if not properly insulated.'},
    {title: 'Potential for Denting', content: 'While durable, corrugated metal can be dented by hail or falling debris.'},
    {title: 'Expansion and Contraction', content: 'Metal expands and contracts with temperature changes, which can cause issues with fasteners and trim over time if not installed correctly.'},
    {title: 'Requires Proper Installation', content: 'To ensure longevity and prevent leaks, corrugated metal roofing needs to be installed correctly with appropriate underlayment and flashing.'},
    {title: 'Potential for Rust and Corrosion', content: 'While modern corrugated metal is treated to resist rust and corrosion, it can still be an issue in coastal areas or areas with high humidity.'},
    {title: 'Can Look Industrial', content: 'The look of corrugated metal may not be suitable for all architectural styles.'}
];

export const metadata = {
    title: 'Corrugated Metal Roofing Installation and Repair',
    description:
        'Paragon Exterior provides expert corrugated metal roofing installation and repair in Pennsylvania, New Jersey, and Delaware. Learn about its durability, affordability, and energy-saving benefits.',
};

export default function CorrugatedMetalRoofPage() {
    const facts = [
        {
            title: 'Cost-effective',
            content: 'Corrugated metal typically costs ~50% less than standing seam roofing.',
        },
        {
            title: 'Easy to install',
            content: 'The exposed fastener design makes it simpler and faster for both pros and DIYers.',
        },
        {
            title: 'Good, but not perfect weather-tightness',
            content: 'Exposed screws can loosen over time — regular inspections help prevent leaks.',
        },
        {
            title: 'Material variety',
            content: 'Available in galvanized steel, aluminum (ideal for coastal areas), and copper for premium looks.',
        },
        {
            title: 'Climate suitability',
            content: 'Needs a minimum roof slope and proper underlay to avoid warping in extreme temperature swings.',
        },
        {
            title: 'Noise & insulation',
            content: 'Metal can be noisy in rain — adding underlayment can greatly reduce sound levels.',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <Hero
                mainText="Corrugated Metal Roofing"
                subText="Paragon Exterior specializes in corrugated metal roofing installation across Pennsylvania, New Jersey, and Delaware. Discover affordable durability, weather protection, and energy efficiency for your home or business."
                imgSrc="/images/roof-service/metal/corrugated/corrugated-panel-hero.webp"
                imgAlt="Installation of corrugated metal roofing panels"
            />

            {/* WHAT IS */}
            <InfoSection
                titleAs="h1"
                imgSrc="/images/roof-service/metal/corrugated/corrugated-metal-roof1.webp"
                imgAlt="Close-up of corrugated metal roof profile"
                title="What Is Corrugated Metal Roofing?"
                mainContent={
                    <>
                        Corrugated metal roofing consists of wavy steel, aluminum, or copper sheets secured with exposed fasteners.
                        The design strengthens the panels, providing a lightweight yet durable roof that handles high winds, rain, and snow.
                        Popular in both residential and commercial applications in PA, NJ, and DE, corrugated metal is a cost-effective solution
                        that offers 30–50 years of service life with proper care.
                    </>
                }
                bottomContent={
                    <>
                        Its reflective coatings help reduce cooling costs in summer, while its rugged design sheds debris easily.
                        It’s ideal for barns, homes, workshops, and commercial buildings across the tri-state region.
                    </>
                }
                imagePosition="right"
            />

            {/* KEY BENEFITS */}
            <Benefits
                title="Benefits of Corrugated Metal Roofing"
                description="From affordability to resilience, corrugated metal roofing delivers reliable performance across PA, NJ, and DE."
                titleAs="h2"
                img1={{
                    src: "/images/roof-service/metal/corrugated/corrugated-metal-roof2.webp",
                    alt: 'Corrugated metal roof in sunny weather',
                }}
                img2={{
                    src: "/images/roof-service/metal/corrugated/corrugated-metal-roof3.webp",
                    alt: 'Side view of corrugated metal roofing edge',
                }}
                text1="Long lifespan of 30–50+ years with basic maintenance."
                text2="Reflective coatings help reduce energy costs in hot summers common across the Northeast."
            />

            <div className="mt-16 mx-auto w-5/6">
                <HeaderText className="text-center mb-8">
                    Corrugated vs. Standing Seam & Other Metal Roofing
                </HeaderText>
                <SecondaryText>
                    <ul className="list-disc list-inside space-y-2">
                        {facts.map((fact, index) => (
                            <li key={index}>
                                <strong>{fact.title}:</strong> {fact.content}
                            </li>
                        ))}
                    </ul>
                </SecondaryText>
            </div>




            <ProCon
                title="Benefits and Drawbacks of Corrugated Metal Roofing"
                benefits={benefits}
                drawbacks={drawbacks}
            />


            {/* <div className='py-24'>
                <HeaderText className='text-center mb-16 text-primaryblue'>
                    Frequently Asked Questions About Corrugated Metal Roofing
                </HeaderText> */}

                <FAQSection
                title='Frequently Asked Questions About Corrugated Metal Roofing'
                    faqs={[
                        {
                            question: "Is corrugated metal roofing good?",
                            answer: "Corrugated metal roofing is generally considered a good roofing option, offering benefits like durability, weather resistance, and energy efficiency. However, it's not without its drawbacks, including potential noise issues and the possibility of denting."
                        },
                        {
                            question: "How long does a corrugated metal roof last?",
                            answer: "A corrugated metal roof typically lasts between 30 and 45 years, and sometimes even longer with proper maintenance. Factors like the type of metal used, installation quality, and environmental conditions can affect the lifespan."
                        },
                        {
                            question: "Is corrugated metal roofing expensive?",
                            answer: "Corrugated metal roofing typically costs between $4 and $14 per square foot installed. That means for a 2,000-square-foot roof, homeowners can expect to pay between $8,000 and $28,000, depending on the material, style, labor rates, and regional pricing differences."
                        },
                        {
                            question: "Is corrugated metal roofing cheaper than shingles?",
                            answer: "Metal roofing generally costs between $4 and $30 per square foot, while asphalt shingles cost between $4 and $20 per square foot. Metal roofs are more expensive but are durable, energy-efficient, and last longer—often over 50 years, compared to 20-30 years for asphalt shingles."
                        }
                    ]}
                />
            {/* </div>  */}
            {/* CTA */}
            <div className="py-16 text-center">
                <GetEstimate />
            </div>
        </div>
    );
}
