// import type {Metadata} from 'next';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Row from '@/components/Row';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import {WhyParagonAwningWindows} from '@/components/WhyParagon';

// export const metadata: Metadata = {
//     title: 'Awning Windows | Professional Awning Window Installation',
//     description: 'Awning windows hinge at the top to protect your home from rain while ventilating. Our awning windows provide privacy and energy efficiency. Durable awning windows suit basements and bathrooms. Paragon Exterior installs professional awning windows across PA, NJ, and DE.',
//     openGraph: {
//         title: 'Awning Windows | Professional Awning Window Installation',
//         description: 'Awning windows hinge at the top to protect your home from rain while ventilating. Our awning windows provide privacy and energy efficiency. Durable awning windows suit basements and bathrooms. Paragon Exterior installs professional awning windows across PA, NJ, and DE.',
//         type: 'website',
//         images: ['/images/window/awning/hero.webp'],
//     },
// };

// export default function AwningWindowsPage() {
//     return (
//         <div className="min-h-screen">
//             <Hero
//                 mainText="Awning Windows"
//                 subText="Top-hinged awning windows offer privacy and protection from light rain while still allowing ventilation. Paragon Exterior installs awning windows for homeowners in Pennsylvania, New Jersey, and Delaware with expert craftsmanship."
//                 imgSrc="/images/window/awning/hero.webp"
//                 imgAlt="Professional awning window installation by Paragon Exterior"
//             />
//             <InfoSection
//                 imgSrc="/images/window/awning/awning1.webp"
//                 imgAlt="Awning windows professionally installed on home"
//                 titleAs="h1"
//                 title="Awning Windows for Your Home"
//                 mainContent="Awning windows are hinged at the top and open outward from the bottom, creating a protective awning when open. This design lets you enjoy fresh air even during light rain showers. Awning windows are commonly used in bathrooms, basements, and other areas requiring privacy yet good ventilation. The tight compression seal also boosts energy efficiency."
//                 bottomContent="Paragon Exterior has installed countless awning windows throughout the Greater Philadelphia area. Our team understands the unique hardware and framing considerations that keep awning windows operating smoothly for years."
//                 imagePosition="right"
//             />
//             <Row
//                 title="Key Benefits of Awning Windows"
//                 description="Because they shed rainwater away from your home, awning windows can stay open in wet weather. They also provide excellent privacy and complement spaces where ventilation is needed high on the wall."
//                 imageSrc="/images/window/awning/awning2.webp"
//             />
//             <Row
//                 title="Ideal Applications for Awning Windows"
//                 description="Awning windows excel in bathrooms, basements, and first-floor rooms where you want airflow without sacrificing privacy. They're also great companions to larger stationary windows."
//                 imageSrc="/images/window/awning/awning3.avif"
//                 reverse
//                 className="pt-12 lg:pt-24"
//             />
//             <Row
//                 title="Professional Awning Window Installation"
//                 description="Top-hinged windows require precise alignment and durable hardware to prevent sagging or leaks. Our installers secure every hinge and seal to ensure worry-free performance season after season."
//                 imageSrc="/images/window/awning/awning4.webp"
//             />
//             <WhyParagonAwningWindows
//                 title="Why Choose Paragon Exterior for Awning Windows?"
//                 titleAs="h2"
//             />
//             <div className="py-12">
//                 <GetEstimate />
//             </div>
//         </div>
//     );
// }


import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonAwningWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Awning Windows | Professional Awning Window Installation',
    description: 'Professional awning windows installation in PA, NJ, and DE. Top-hinged awning windows provide weather protection, privacy, and energy efficiency. Expert awning window installation for basements, bathrooms, and any room needing ventilation with privacy. Get your awning windows estimate today.',
    openGraph: {
        title: 'Awning Windows | Professional Awning Window Installation',
        description: 'Professional awning windows installation in PA, NJ, and DE. Top-hinged awning windows provide weather protection, privacy, and energy efficiency. Expert awning window installation for basements, bathrooms, and any room needing ventilation with privacy.',
        type: 'website',
        images: ['/images/window/awning/hero.webp'],
    },
};

export default function AwningWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Awning Windows"
                subText="Professional awning windows installation that combines weather protection with excellent ventilation. Our top-hinged awning windows stay open during light rain, provide enhanced privacy, and deliver superior energy efficiency for Pennsylvania, New Jersey, and Delaware homeowners."
                imgSrc="/images/window/awning/hero.webp"
                imgAlt="Professional awning window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/awning/awning1.webp"
                imgAlt="Awning windows professionally installed on home"
                titleAs="h1"
                title="Awning Windows for Enhanced Comfort and Privacy"
                mainContent="Awning windows are ingeniously designed with top hinges that allow the window to open outward from the bottom, creating a natural awning effect that sheds rainwater away from your home. This unique operation makes awning windows the perfect solution for spaces requiring ventilation even during inclement weather. The compressed seal created when awning windows are closed provides exceptional energy efficiency, while their positioning makes them ideal for privacy-sensitive areas like bathrooms, bedrooms, and ground-floor rooms where you want fresh air without compromising security or privacy."
                bottomContent="Paragon Exterior has been the trusted choice for awning windows installation throughout the Greater Philadelphia region for years. Our experienced installers understand the critical importance of proper hardware selection, precise alignment, and weatherproofing that ensures your awning windows operate smoothly and seal tightly for decades. We work with premium awning window manufacturers to provide options that complement any architectural style while delivering the performance and durability you expect."
                imagePosition="right"
            />

            <Row
                title="Superior Benefits and Features of Awning Windows"
                description="Awning windows offer unique advantages that make them ideal for specific applications. Their top-hinged design allows them to remain open during light rain showers, providing continuous ventilation when other window types must be closed. The outward opening creates excellent natural ventilation by drawing air up and out of your home. Awning windows also provide enhanced security since they're difficult to access from outside when installed at appropriate heights. Their tight compression seal when closed makes them among the most energy-efficient window options available, helping reduce heating and cooling costs while maintaining comfortable indoor temperatures year-round."
                imageSrc="/images/window/awning/awning2.webp"
            />

            <Row
                title="Perfect Applications and Placement for Awning Windows"
                description="Awning windows excel in bathrooms where moisture removal is critical, basement spaces requiring ventilation and security, and any room where you want fresh air with privacy. They're frequently used above kitchen sinks, in laundry rooms, and as accent windows paired with larger picture windows or sliding doors. Awning windows work exceptionally well in contemporary and modern home designs, and their horizontal proportions complement ranch and prairie-style architecture. When installed higher on walls, awning windows provide excellent ventilation without sacrificing privacy or wall space below for furniture placement."
                imageSrc="/images/window/awning/awning3.avif"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Row
                title="Expert Awning Window Installation and Hardware Considerations"
                description="Professional awning window installation requires specialized knowledge of hardware systems, structural support, and weatherproofing techniques. The top-hinged operation places unique stress on the frame and hardware, making proper installation critical for long-term performance. Our certified installers ensure precise alignment to prevent binding or difficulty in operation, install heavy-duty hinges rated for the window's weight and size, and apply professional-grade weatherstripping and sealants to prevent air and water infiltration. We also consider factors like wind exposure, drainage, and the specific opening mechanisms that will provide years of smooth, reliable operation in your Greater Philadelphia area home."
                imageSrc="/images/window/awning/awning4.webp"
                className="pt-12 lg:pt-24"
            />

            <WhyParagonAwningWindows
                title="Why Choose Paragon Exterior for Awning Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}