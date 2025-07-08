// import type {Metadata} from 'next';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Row from '@/components/Row';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import {WhyParagonPictureWindows} from '@/components/WhyParagon';

// export const metadata: Metadata = {
//     title: 'Picture Windows | Professional Picture Window Installation',
//     description: 'Picture windows provide unobstructed views and excellent energy efficiency. Our picture windows let natural light flood in while reducing drafts. Low-maintenance picture windows maximize your scenery. Paragon Exterior installs professional picture windows in PA, NJ, and DE.',
//     openGraph: {
//         title: 'Picture Windows | Professional Picture Window Installation',
//         description: 'Picture windows provide unobstructed views and excellent energy efficiency. Our picture windows let natural light flood in while reducing drafts. Low-maintenance picture windows maximize your scenery. Paragon Exterior installs professional picture windows in PA, NJ, and DE.',
//         type: 'website',
//         images: ["/images/window/picture/hero.webp"],
//     },
// };

// export default function PictureWindowsPage() {
//     return (
//         <div className="min-h-screen">
//             <Hero
//                 mainText="Picture Windows"
//                 subText="Picture windows provide expansive, unobstructed views with superior energy efficiency. Paragon Exterior installs picture windows for homeowners across Pennsylvania, New Jersey, and Delaware."
//                 imgSrc="/images/window/picture/hero.webp"
//                 imgAlt="Professional picture window installation by Paragon Exterior"
//             />
//             <InfoSection
//                 imgSrc="/images/window/picture/pic1.webp"
//                 imgAlt="Picture windows professionally installed on home"
//                 titleAs="h1"
//                 title="Picture Windows for Your Home"
//                 mainContent="Picture windows are fixed panes of glass that do not open, making them highly energy efficient and perfect for showcasing scenic views. With no moving parts, they require minimal maintenance and offer the lowest cost per square foot of glass."
//                 bottomContent="Paragon Exterior specializes in installing picture windows of all sizes in the Greater Philadelphia area. We ensure airtight seals and expert framing so your new picture windows deliver maximum light and efficiency."
//                 imagePosition="right"
//             />
//             <Row
//                 title="Benefits of Picture Windows"
//                 description="Because they are stationary, picture windows eliminate drafts and provide exceptional insulation. Large glass areas flood your home with natural light and let you enjoy the outside scenery."
//                 imageSrc="/images/window/picture/pic2.webp"
//             />
//             <Row
//                 title="Best Places for Picture Windows"
//                 description="Install picture windows in living rooms, stairwells, or any space where ventilation isn't necessary but a view is desired. They're often paired with operable windows for airflow."
//                 imageSrc="/images/window/picture/pic3.webp"
//                 reverse
//                 className="pt-12 lg:pt-24"
//             />
//             <Row
//                 title="Professional Picture Window Installation"
//                 description="Proper sealing and flashing are crucial for fixed windows. Our team secures every edge to prevent leaks and ensure your picture windows last for decades."
//                 imageSrc="/images/window/picture/pic4.webp"
//             />
//             <WhyParagonPictureWindows
//                 title="Why Choose Paragon Exterior for Picture Windows?"
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
import {WhyParagonPictureWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Picture Windows | Professional Picture Window Installation',
    description: 'Transform any room with stunning picture windows that frame your views like artwork. Professional picture window installation in PA, NJ, and DE. Maximum energy efficiency, minimal maintenance, and breathtaking natural light. Expert picture window contractors.',
    openGraph: {
        title: 'Picture Windows | Professional Picture Window Installation',
        description: 'Transform any room with stunning picture windows that frame your views like artwork. Professional picture window installation in PA, NJ, and DE. Maximum energy efficiency, minimal maintenance, and breathtaking natural light.',
        type: 'website',
        images: ["/images/window/picture/hero.webp"],
    },
};

export default function PictureWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Picture Windows"
                subText="Sometimes the best view deserves an uninterrupted frame. Picture windows turn your favorite outdoor scenery into living artwork while flooding your home with natural light. These energy-efficient, low-maintenance windows are perfect when you want maximum impact with minimal fuss. Our expert picture window installation brings the beauty of Pennsylvania, New Jersey, and Delaware right into your living space."
                imgSrc="/images/window/picture/hero.webp"
                imgAlt="Professional picture window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/picture/pic1.webp"
                imgAlt="Picture windows professionally installed on home"
                titleAs="h1"
                title="Picture Windows: Simple Elegance That Just Works"
                mainContent="You know what I love about picture windows? They're the honest, straightforward choice in a world of complicated solutions. No cranks to break, no tracks to clean, no weatherstripping to replace – just beautiful, unobstructed glass that does exactly what it's supposed to do. Think of them as the picture frame for your favorite view, whether that's your garden, a distant mountain, or just the way light plays across your yard throughout the day. And here's the best part: because there are no moving parts, picture windows are incredibly energy efficient. That fixed glass creates an airtight seal that moving windows simply can't match."
                bottomContent="Now, some people worry that picture windows are 'boring' because they don't open, but that's missing the point entirely. These windows aren't about function – they're about bringing the outside world into your home in the most beautiful way possible. We've installed picture windows that have literally stopped visitors in their tracks because the view is so stunning. And from a practical standpoint? You'll never have to worry about a picture window failing to close during a storm or getting stuck when you need it most. Sometimes the simplest solution really is the best one."
                imagePosition="right"
            />

            <Row
                title="Why Picture Windows Are the Smart Choice for Many Homes"
                description="Let's talk about what picture windows actually deliver for your daily life. First, they're energy efficiency champions – no gaps, no seals that wear out, no air leakage around operating mechanisms. This means lower heating and cooling bills and more consistent indoor temperatures. The maintenance factor is huge too – when was the last time you thought about maintaining a mirror or piece of artwork? That's essentially what you get with picture windows. But the real magic happens with natural light. Because there are no frames dividing the glass and no hardware taking up space, you get maximum daylight penetration. We've seen dark, cramped rooms transformed into bright, welcoming spaces just by installing the right picture windows. Plus, if you've got young kids or elderly family members, there are no operating mechanisms to worry about – picture windows are as safe as it gets."
                imageSrc="/images/window/picture/pic2.webp"
            />

            <Row
                title="Finding the Perfect Spots for Picture Windows in Your Home"
                description="Here's where picture windows really shine: any space where you want to showcase a view or bring in maximum light without needing ventilation. Living rooms are obvious choices, especially if you've got a beautiful backyard or interesting street scene to frame. But think bigger – stairway landings with picture windows create these amazing moments of connection to the outdoors as you move through your home. Home offices benefit enormously from picture windows because natural light reduces eye strain and that connection to the outside world makes working from home feel less isolating. And here's a pro tip: picture windows work beautifully in combination with other window types. We often install a large picture window flanked by smaller casement or double-hung windows – you get the dramatic view plus the ventilation when you need it."
                imageSrc="/images/window/picture/pic3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Row
                title="The Art of Picture Window Installation (It's More Than You Think)"
                description="Here's what surprises most homeowners: picture window installation is actually more critical than installing windows with moving parts. Why? Because when something goes wrong with a picture window, it's usually catastrophic – we're talking about water damage, not just a sticky handle. The entire performance of the window depends on perfect installation the first time. Every seal has to be perfect, the frame has to be absolutely square and level, and the flashing has to handle water runoff flawlessly because there's no weep system like you'd have with operable windows. We've rescued homeowners from picture window installations where corners were cut, and trust me, the water damage bills were eye-watering. But when picture windows are installed correctly – with proper structural support for larger sizes, professional-grade sealants, and meticulous attention to drainage – they'll outlast and outperform just about any other window type. That's why we take extra time with measurements and use the best materials available."
                imageSrc="/images/window/picture/pic4.webp"
                className="pt-12 lg:pt-24"
            />

            <WhyParagonPictureWindows
                title="Why Choose Paragon Exterior for Picture Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}