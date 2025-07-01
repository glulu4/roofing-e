// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import Hero from '@/components/service-page/Hero';
// import Info from '@/components/service-page/Info';
// import React from 'react'
// import RoofRepairReasons from '@/components/service-page/roof/RoofRepairReasons';
// import Row from '@/components/Row';
// import HeaderText from '@/components/HeaderText';
// import SecondaryText from '@/components/SecondaryText';
// import AboutSection from '@/components/service-page/roof/AboutSection';
// import FAQSection from '@/components/FAQSection';




// export const metadata = {
//     title: 'Velux Skylights | Paragon Exterior',
//     description: 'Expert roof replacement services for homes and businesses in Pennsylvania, New Jersey, and Delaware. Our team provides durable, energy-efficient roofing solutions designed to protect your property and enhance curb appeal. Trust Paragon Exterior for professional roof installation and replacement.'
// }


// export default async function page() {

//     return (

//         <div className='min-h-screen'>
//             <Hero
//                 mainText="Velux Skylights"
//                 subText="Paragon Exterior specializes in professional roof replacement services, delivering durable, energy-efficient roofing solutions that protect your home and enhance curb appeal. From shingle roofs to flat roofing, our experts handle it all."
//                 imgSrc="/images/roof-service/skylight/skylight-hero.webp"
//                 imgAlt="Roof replacement hero image"
//             />


//             <AboutSection
//                 title='Velux Skylights'
//                 subtitle='Transform your home with Velux skylights, bringing natural light and fresh air into your living spaces. Our expert installation ensures energy efficiency and aesthetic appeal, enhancing your home’s comfort and value.'
//                 images={[
//                     {src: '/images/roof-service/skylight/skylight1.webp', alt: 'Velux skylight installation'},
//                     {src: '/images/roof-service/skylight/skylight2.webp', alt: 'Velux skylight in living room'},
//                     {src: '/images/roof-service/skylight/skylight3.webp', alt: 'Velux skylight with natural light'},
//                     {src: '/images/roof-service/skylight/skylight4.webp', alt: 'Velux skylight with natural light'}
//                 ]}

//                 secondHeader='Second Header'
//                 secondContent={[
//                     "",
//                     "Velux skylights are designed to enhance your home’s natural lighting and ventilation. They are energy-efficient, stylish, and can significantly improve the ambiance of any room. Our team specializes in the professional installation of Velux skylights, ensuring they are perfectly fitted to maximize light while maintaining your roof’s integrity."
//                 ]}
//                 thirdHeader='Third Header'
//                 thirdContent={[
//                     "",
//                     "Velux skylights are not just functional; they also add a touch of elegance to your home. With various styles and sizes available, you can choose the perfect skylight to complement your interior design. Our experts will guide you through the selection process, ensuring you find the ideal skylight for your needs."
//                 ]}
//             />




//             <div className='mx-auto w-5/6 py-6 lg:py-12'>
//                 <HeaderText className='text-center'>
//                     Frequently Asked Questions
//                 </HeaderText>


//                 <FAQSection
//                     faqs={[
//                         {
//                             question: "What are the benefits of installing Velux skylights?",
//                             answer: "Velux skylights provide natural light, improve ventilation, and enhance the aesthetic appeal of your home. They can also help reduce energy costs by minimizing the need for artificial lighting."
//                         },
//                         {
//                             question: "How long does it take to install Velux skylights?",
//                             answer: "Installation time can vary depending on the number of skylights and the complexity of your roof. Typically, it takes a few hours to a full day for professional installation."
//                         },
//                         {
//                             question: "Are Velux skylights energy-efficient?",
//                             answer: "Yes, Velux skylights are designed with energy efficiency in mind, featuring insulated glass and low-emissivity coatings to minimize heat loss and gain."
//                         }
//                     ]}
//                 />
//             </div>

//             <div className='mx-auto w-5/6 py-6 lg:py-12'>

//                 <div className='mb-32 text-center'>
//                     <HeaderText>
//                         Why Trust Paragon Exterior for Your Roof Replacement?
//                     </HeaderText>

//                     <SecondaryText>
//                         A roof replacement is one of the most important investments you can make for your home or business. At Paragon Exterior, we combine high-quality materials with expert craftsmanship to ensure your new roof is built to last. Whether you’re dealing with an aging roof, storm damage, or severe leaks, our team provides reliable solutions that restore the integrity of your property.
//                     </SecondaryText>

//                 </div>
//             </div>




//             <GetEstimate />
//         </div>

//     )
// }


import GetEstimate from '@/components/landing-ui/GetEstimate';
import Hero from '@/components/service-page/Hero';
import Info from '@/components/service-page/Info';
import React from 'react';
import Row from '@/components/Row';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import AboutSection from '@/components/service-page/roof/AboutSection';
import FAQSection from '@/components/FAQSection';
import {WhyParagonVeluxSkylights} from '@/components/WhyParagon';

export const metadata = {
    title: 'Velux Skylights Installation | Paragon Exterior',
    description: 'Paragon Exterior offers professional Velux skylights installation to brighten your home with natural light, improve ventilation, and boost energy efficiency. Serving Pennsylvania, New Jersey, and Delaware.'
}

export default async function page() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Velux Skylights"
                subText="Paragon Exterior specializes in Velux skylight installation, bringing natural light, energy efficiency, and elegant design to homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/roof-service/skylight/skylight-hero.webp"
                imgAlt="Velux skylight installed on roof"
            />

            <AboutSection
                className='py-20'
                title="Velux Skylights – Brighten Your Home"
                subtitle="Velux skylights are designed to fill your space with natural light while maintaining energy efficiency and enhancing your home’s beauty. Our expert installers ensure a perfect fit for lasting performance."
                images={[
                    {src: '/images/roof-service/skylight/skylight1.webp', alt: 'Velux skylight installation'},
                    {src: '/images/roof-service/skylight/skylight2.webp', alt: 'Velux skylight in living room'},
                    {src: '/images/roof-service/skylight/skylight3.webp', alt: 'Velux skylight with natural light'},
                    {src: '/images/roof-service/skylight/skylight4.webp', alt: 'Velux skylight bringing light indoors'}
                ]}
                secondHeader="Why Choose Velux Skylights?"
                secondContent={[
                    "Velux skylights bring up to 30% more natural light into your rooms compared to vertical windows of the same size. Their Energy Star rated designs help lower utility bills by reducing the need for artificial lighting and improving insulation. Available in a variety of sizes, styles, and options — including venting models for fresh air — Velux skylights are the smart choice for both beauty and functionality.",
                    "Paragon Exterior is experienced in installing Velux skylights with precision, ensuring leak-free performance and seamless integration with your roof."
                ]}
                thirdHeader="Our Velux Skylight Installation Process"
                thirdContent={[
                    "Our process starts with a consultation to understand your goals for light, ventilation, and style. We help you choose the right Velux skylight for your home — whether it’s a fixed, venting, or solar-powered model.",
                    "Our expert team carefully integrates your skylight into your roof using Velux-approved flashing kits and installation methods. We ensure a weather-tight seal, clean worksite, and beautiful result that enhances your home for years to come."
                ]}
            />

            <div className="mx-auto w-5/6 py-6 lg:py-12">
                <div className="mb-32 text-center">
                    <HeaderText>
                        Why Choose Paragon Exterior for Your Velux Skylights Installation?
                    </HeaderText>
                    <SecondaryText>
                        Paragon Exterior combines years of roofing expertise with precision skylight installation to ensure long-lasting performance and customer satisfaction. We guide you through selection, handle every detail of installation, and stand behind our work so you can enjoy natural light without worry.
                    </SecondaryText>
                </div>
            </div>

            <div className="mx-auto w-5/6 py-6 lg:py-12">
                <HeaderText className="text-center mb-12">
                    Frequently Asked Questions
                </HeaderText>

                <FAQSection
                    faqs={[
                        {
                            question: "What are the benefits of Velux skylights?",
                            answer: "Velux skylights provide natural light, better ventilation, and improved energy efficiency. They enhance your home’s comfort while adding a touch of modern design."
                        },
                        {
                            question: "Are Velux skylights energy-efficient?",
                            answer: "Yes, most Velux skylights are Energy Star rated. They use insulated glass and advanced coatings to reduce heat loss in winter and heat gain in summer."
                        },
                        {
                            question: "How much does Velux skylight installation cost?",
                            answer: "Costs vary based on the skylight model, size, and installation complexity. Paragon Exterior provides clear, competitive estimates tailored to your needs."
                        },
                        {
                            question: "How long does Velux skylight installation take?",
                            answer: "Most Velux skylight installations are completed within a day, though complex projects or multiple skylights may take longer."
                        }
                    ]}
                />
            </div>


            <WhyParagonVeluxSkylights
                title='Why Trust Paragon Exterior for Your Velux Skylights Installation?'
                subTitle='At Paragon Exterior, we pride ourselves on delivering top-notch Velux skylight installation that combines beauty with durability. Our experienced team understands the intricacies of skylight installation, ensuring your home not only looks stunning but is also protected against the elements.'
                titleAs='h2'
            />

            <div className="py-12 pt-20 sm:pt-0">
                <GetEstimate />
            </div>
        </div>
    )
}
