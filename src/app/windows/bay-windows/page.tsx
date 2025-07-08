// import type {Metadata} from 'next';
// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Row from '@/components/Row';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import {WhyParagonBayWindows} from '@/components/WhyParagon';

// export const metadata: Metadata = {
//     title: 'Bay Windows | Professional Bay Window Installation',
//     description: 'Bay windows project outward to add space and panoramic views. Our bay windows fill rooms with natural light and create cozy nooks. Energy-efficient bay windows boost curb appeal. Paragon Exterior installs professional bay windows throughout PA, NJ, and DE.',
//     openGraph: {
//         title: 'Bay Windows | Professional Bay Window Installation',
//         description: 'Bay windows project outward to add space and panoramic views. Our bay windows fill rooms with natural light and create cozy nooks. Energy-efficient bay windows boost curb appeal. Paragon Exterior installs professional bay windows throughout PA, NJ, and DE.',
//         type: 'website',
//         images: ['/images/windows/bay/bay-hero.webp'],
//     },
// };

// export default function BayWindowsPage() {
//     return (
//         <div className="min-h-screen">
//             <Hero
//                 mainText="Bay Windows"
//                 subText="Bay windows project outward to create cozy nooks and expansive views. Paragon Exterior designs and installs bay windows for homeowners across Pennsylvania, New Jersey, and Delaware."
//                 imgSrc="/images/window/bay/hero.webp"
//                 imgAlt="Professional bay window installation by Paragon Exterior"
//             />
//             <InfoSection
//                 imgSrc="/images/window/bay/bay1.webp"
//                 imgAlt="Bay windows professionally installed on home"
//                 titleAs="h1"
//                 title="Bay Windows for Your Home"
//                 mainContent="A bay window combines multiple window panels that extend beyond the exterior wall, increasing interior space and flooding rooms with natural light. Angled sections capture panoramic views and add striking architectural detail to any home."
//                 bottomContent="Paragon Exterior's experienced team constructs bay windows with proper support and weatherproofing. We serve the entire Greater Philadelphia region, delivering custom designs that enhance both aesthetics and functionality."
//                 imagePosition="right"
//             />
//             <Row
//                 title="Benefits of Bay Windows"
//                 description="Bay windows make rooms feel larger while providing excellent daylight and extended views. They create charming alcoves perfect for seating or displays."
//                 imageSrc="/images/window/bay/bay2.webp"
//             />
//             <Row
//                 title="Where Bay Windows Work Best"
//                 description="Install bay windows in living rooms, breakfast areas, or any space that can benefit from extra light and dimension. They're popular in both traditional and contemporary homes."
//                 imageSrc="/images/window/bay/bay3.webp"
//                 reverse
//                 className="pt-12 lg:pt-24"
//             />
//             <Row
//                 title="Professional Bay Window Installation"
//                 description="Because bay windows project outward, correct structural support and flashing are essential. Our installers coordinate every detail to ensure a tight, weather-resistant fit."
//                 imageSrc="/images/window/bay/bay4.webp"
//             />
//             <WhyParagonBayWindows
//                 title="Why Choose Paragon Exterior for Bay Windows?"
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
import {WhyParagonBayWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Bay Windows | Professional Bay Window Installation',
    description: 'Transform your home with stunning bay windows that add space, light, and architectural character. Professional bay window installation in PA, NJ, and DE. Create beautiful window seats and panoramic views. Expert bay window contractors with structural expertise.',
    openGraph: {
        title: 'Bay Windows | Professional Bay Window Installation',
        description: 'Transform your home with stunning bay windows that add space, light, and architectural character. Professional bay window installation in PA, NJ, and DE. Create beautiful window seats and panoramic views.',
        type: 'website',
        images: ['/images/windows/bay/bay-hero.webp'],
    },
};

export default function BayWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Bay Windows"
                subText="Transform any room into something special with bay windows that actually add square footage to your home. These architectural gems create those coveted reading nooks everyone dreams about while flooding your space with natural light from three directions. Our expert bay window installation brings both beauty and function to Pennsylvania, New Jersey, and Delaware homes."
                imgSrc="/images/window/bay/hero.webp"
                imgAlt="Professional bay window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/bay/bay1.webp"
                imgAlt="Bay windows professionally installed on home"
                titleAs="h1"
                title="Bay Windows: More Than Just Pretty Windows"
                mainContent="Here's the thing about bay windows that most people don't realize until they have them – they're like getting a small room addition without the massive construction project. When we install a bay window, we're literally extending your living space outward, creating anywhere from 12 to 36 extra square feet depending on the projection. But it's not just about the space – it's about how that space transforms the entire feel of a room. Suddenly, your living room has this incredible focal point where light pours in from three different angles, creating this warm, inviting atmosphere that makes everyone gravitate toward that corner."
                bottomContent="Now, I'll be straight with you – bay windows aren't a weekend DIY project. We're talking about cutting into your exterior wall, building out a structural extension, and making sure everything is properly supported and waterproofed. That's why we see so many bay window installations that look great from the inside but cause problems down the road. At Paragon Exterior, we've been doing this long enough to know that the magic is in the details – proper load distribution, flawless flashing, and making sure that beautiful new space stays comfortable year-round."
                imagePosition="right"
            />

            <Row
                title="Why Bay Windows Make Such a Difference in Your Home"
                description="You know that feeling when you walk into a room and it just feels bigger and brighter? That's the bay window effect. Because they project outward and capture light from multiple angles, they create this amazing sense of openness that's hard to achieve any other way. And here's something really cool – bay windows can actually make your rooms feel bigger than the actual square footage they add. It's all about those sight lines and how your eye follows the angles out into the yard. Plus, let's talk about the practical stuff: you get a perfect spot for plants that need lots of light, built-in storage if you add a window seat, and the best views in your house for watching the seasons change. Many of our clients tell us their bay window becomes the favorite spot in the whole house."
                imageSrc="/images/window/bay/bay2.webp"
            />

            <Row
                title="Finding the Perfect Spot for Your Bay Window"
                description="We get asked all the time: 'Where should I put a bay window?' The honest answer is almost anywhere you spend time and want to feel more connected to the outdoors. Kitchen breakfast nooks are incredibly popular – imagine having your morning coffee surrounded by light and garden views. Living rooms are classic choices because bay windows create natural conversation areas and give you flexibility for furniture arrangement. But don't overlook bedrooms – a bay window can turn a simple bedroom into a master retreat with a cozy reading corner. We've even installed them in home offices where the extra light and expanded views make working from home feel less confining. The key is thinking about your daily routines and where a little extra light and space would make the biggest impact."
                imageSrc="/images/window/bay/bay3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Row
                title="The Reality of Bay Window Installation (And Why You Need Pros)"
                description="Let me paint you a picture of what bay window installation actually involves, because it's way more complex than most homeowners realize. First, we're essentially building a mini room addition that has to support its own weight while staying perfectly waterproof. The structural engineering alone requires calculating load paths, potentially adding support beams, and making sure your foundation can handle the extra weight. Then there's the precision work – three windows that have to align perfectly, custom roofing over the projection, and flashing that has to handle water coming from multiple directions. We've rescued too many DIY bay window projects where corners were cut, and trust me, water damage from improper installation costs way more than hiring professionals from the start. Our team handles everything from permits to final touches, and we stand behind our work because we know it's built right."
                imageSrc="/images/window/bay/bay4.webp"
                className="pt-12 lg:pt-24"
            />

            <WhyParagonBayWindows
                title="Why Choose Paragon Exterior for Bay Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}