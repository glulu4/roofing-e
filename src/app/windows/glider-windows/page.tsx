// import type {Metadata} from 'next';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Row from '@/components/Row';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import {WhyParagonGliderWindows} from '@/components/WhyParagon';

// export const metadata: Metadata = {
//     title: 'Glider Windows | Professional Glider Window Installation',
//     description: 'Glider windows slide horizontally for a modern look and effortless use. Our glider windows require no exterior clearance and create wide openings. Energy-efficient glider windows are perfect near patios. Choose Paragon Exterior for professional glider windows in PA, NJ, and DE.',
//     openGraph: {
//         title: 'Glider Windows | Professional Glider Window Installation',
//         description: 'Glider windows slide horizontally for a modern look and effortless use. Our glider windows require no exterior clearance and create wide openings. Energy-efficient glider windows are perfect near patios. Choose Paragon Exterior for professional glider windows in PA, NJ, and DE.',
//         type: 'website',
//         images: ['/images/windows/glider/glider-hero.webp'],
//     },
// };

// export default function GliderWindowsPage() {
//     return (
//         <div className="min-h-screen">
//             <Hero
//                 mainText="Glider Windows"
//                 subText="Glider windows slide horizontally for a sleek, modern look and easy operation. Paragon Exterior provides glider window installation throughout Pennsylvania, New Jersey, and Delaware."
//                 imgSrc="/images/window/glider/glide-hero.webp"
//                 imgAlt="Professional glider window installation by Paragon Exterior"
//             />
//             <InfoSection
//                 imgSrc="/images/window/glider/glide1.webp"
//                 imgAlt="Glider windows professionally installed on home"
//                 titleAs="h1"
//                 title="Glider Windows for Your Home"
//                 mainContent="Glider windows operate on horizontal tracks, making them ideal where exterior clearance is limited. Their streamlined design offers wide glass areas for plentiful natural light. With minimal moving parts, gliders are simple to use and provide a contemporary aesthetic."
//                 bottomContent="Serving the Greater Philadelphia area, Paragon Exterior installs glider windows with level tracks and smooth rollers. Our craftsmanship ensures effortless operation and long-lasting energy efficiency."
//                 imagePosition="right"
//             />
//             <Row
//                 title="Benefits of Glider Windows"
//                 description="Glider windows don't require exterior swing space, so they're perfect near patios or walkways. Large openings bring in daylight while the sliding sash is easy to operate."
//                 imageSrc="/images/window/glider/glide2.webp"
//             />
//             <Row
//                 title="Best Uses for Glider Windows"
//                 description="These windows shine in modern homes and spaces where you want uninterrupted views. They're often installed over kitchen counters or in contemporary living rooms across PA, NJ, and DE."
//                 imageSrc="/images/window/glider/glide3.webp"
//                 reverse
//                 className="pt-12 lg:pt-24"
//             />
//             <Row
//                 title="Professional Glider Window Installation"
//                 description="Accurate track installation prevents sticking and drafts. We keep the sliding mechanism clean and secure so your glider windows glide smoothly for years."
//                 imageSrc="/images/window/glider/glide4.webp"
//             />
//             <WhyParagonGliderWindows
//                 title="Why Choose Paragon Exterior for Glider Windows?"
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
import {WhyParagonGliderWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Glider Windows | Professional Glider Window Installation',
    description: 'Modern glider windows that slide horizontally for contemporary style and easy operation. Professional glider window installation in PA, NJ, and DE. Perfect for patios and tight spaces - no exterior clearance needed. Get your glider windows estimate today.',
    openGraph: {
        title: 'Glider Windows | Professional Glider Window Installation',
        description: 'Modern glider windows that slide horizontally for contemporary style and easy operation. Professional glider window installation in PA, NJ, and DE. Perfect for patios and tight spaces - no exterior clearance needed.',
        type: 'website',
        images: ['/images/windows/glider/glider-hero.webp'],
    },
};

export default function GliderWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Glider Windows"
                subText="Sleek glider windows that slide effortlessly for modern living. Perfect when you need ventilation but don't have room for outward-swinging windows. Our professional glider window installation brings contemporary style and practical function to homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/window/glider/glide-hero.webp"
                imgAlt="Professional glider window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/glider/glide1.webp"
                imgAlt="Glider windows professionally installed on home"
                titleAs="h1"
                title="Glider Windows: Where Style Meets Practicality"
                mainContent="If you've ever struggled with windows that won't stay open in the wind or fought with cranks that seem to have a mind of their own, you'll appreciate the simple elegance of glider windows. These horizontally sliding windows operate on smooth tracks, making them incredibly easy to use – no wrestling with heavy sashes or worrying about exterior clearance. The best part? You get expansive glass areas that flood your rooms with natural light while maintaining that clean, contemporary look that makes your home feel modern and spacious."
                bottomContent="Here in the Greater Philadelphia area, we see a lot of homes where traditional windows just don't work – maybe you've got a patio right outside, or landscaping that would get damaged by an outward-swinging window. That's where glider windows really shine. At Paragon Exterior, we've installed hundreds of these windows, and we always make sure the tracks are perfectly level and the rollers glide like butter. Because there's nothing worse than a window that fights you every time you want some fresh air."
                imagePosition="right"
            />

            <Row
                title="Why Homeowners Love Glider Windows"
                description="Let's be honest – glider windows are the problem-solvers of the window world. Got a deck or patio right outside? No problem – gliders slide horizontally so they won't bang into your outdoor furniture or awning. Want a wide-open view without interruption? The sliding design means you can open up half the window for ventilation while still maintaining structural stability. And here's something most people don't think about until it matters: glider windows are incredibly easy to clean because you can access both sides of the glass from inside your home. Plus, with fewer mechanical parts than casement windows, there's simply less that can break or need maintenance over the years."
                imageSrc="/images/window/glider/glide2.webp"
            />

            <Row
                title="Perfect Spots for Glider Windows in Your Home"
                description="We install a lot of glider windows over kitchen sinks – there's something satisfying about being able to slide open a window while you're doing dishes without having to reach around cabinets or worry about hitting the faucet. They're also fantastic in bedrooms where you want that connection to the outdoors but don't want to sacrifice privacy or security. Ranch-style homes especially benefit from glider windows because they complement the horizontal lines of the architecture. And if you're renovating a basement or lower level, glider windows can make those spaces feel less like a basement and more like an integral part of your home."
                imageSrc="/images/window/glider/glide3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Row
                title="The Art of Proper Glider Window Installation"
                description="Here's what most homeowners don't realize: a glider window is only as good as its installation. Those smooth-sliding tracks? They need to be perfectly level, or you'll end up with a window that either won't close properly or requires Herculean effort to open. We've seen too many DIY installations where the homeowner saved a few bucks upfront only to deal with drafty, sticky windows for years afterward. Our installers take extra care with the weatherstripping and make sure the drainage weep holes are properly positioned – because in Pennsylvania's unpredictable weather, you need windows that can handle everything from spring downpours to winter freeze-thaw cycles. We also pay attention to the little details, like making sure the screens fit properly and the locks engage smoothly, because those everyday interactions are what make you love or hate your windows."
                imageSrc="/images/window/glider/glide4.webp"
                className="pt-12 lg:pt-24"
            />

            <WhyParagonGliderWindows
                title="Why Choose Paragon Exterior for Glider Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}