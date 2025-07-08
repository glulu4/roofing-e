import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonRoundTopWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Round Top Windows | Professional Round Top Window Installation',
    description: 'Add timeless elegance with round top windows that create stunning architectural focal points. Professional round top window installation in PA, NJ, and DE. Custom arched windows for traditional and colonial homes. Expert round top window contractors with specialty installation.',
    openGraph: {
        title: 'Round Top Windows | Professional Round Top Window Installation',
        description: 'Add timeless elegance with round top windows that create stunning architectural focal points. Professional round top window installation in PA, NJ, and DE. Custom arched windows for traditional and colonial homes.',
        type: 'website',
        images: ['/images/windows/round-top/round-top-hero.webp'],
    },
};

export default function RoundTopWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Round Top Windows"
                subText="Some architectural details never go out of style, and round top windows are proof of that timeless appeal. These gracefully arched windows have been gracing elegant homes for centuries, adding that touch of classic sophistication that makes neighbors pause and admire. Our expert round top window installation brings old-world charm to Pennsylvania, New Jersey, and Delaware homes with the precision and quality these beautiful windows deserve."
                imgSrc="/images/window/round/hero.webp"
                imgAlt="Professional round top window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/round/round1.webp"
                imgAlt="Round top windows professionally installed on home"
                titleAs="h1"
                title="Round Top Windows: Where Elegance Meets Tradition"
                mainContent="There's something magical about the way a round top window changes the entire character of a home. It's like adding a piece of architectural jewelry – suddenly, your house has personality and presence that sets it apart from every other home on the block. Round top windows have this incredible ability to make even modest homes look distinguished and established, as if they've been lovingly cared for through generations. Whether you're restoring a historic colonial or adding character to a newer home, these arched beauties create focal points that draw the eye and capture the imagination."
                bottomContent="Now, I'll be honest with you – round top windows aren't something you see every contractor doing well. These aren't your standard rectangular installations; they require specialized skills, custom framing, and an understanding of how curved elements interact with traditional construction methods. We've been perfecting our round top window installation techniques for years, working with everything from subtle arches to dramatic half-circles. Each one is essentially a custom project that requires careful planning, precise measurements, and the kind of craftsmanship that used to be standard but is increasingly rare these days."
                imagePosition="right"
            />

            <Row
                title="The Unique Appeal and Benefits of Round Top Windows"
                description="What I find fascinating about round top windows is how they solve both aesthetic and practical challenges at the same time. From a design standpoint, they add vertical height and visual interest to what might otherwise be a plain wall surface. But here's the practical magic: that curved top actually captures and channels more natural light into your home than a standard rectangular window of the same width. The arch creates this beautiful, soft light distribution that changes throughout the day as the sun moves across the sky. And let's talk about curb appeal – round top windows are like architectural exclamation points that signal quality and attention to detail. We've had real estate agents tell us that homes with well-placed round top windows sell faster and for higher prices because they stand out in a crowded market."
                imageSrc="/images/window/round/round2.webp"
            />

            <Row
                title="Perfect Placement Ideas for Round Top Windows"
                description="The secret to using round top windows effectively is understanding that they're accent pieces, not workhorses. They're meant to create 'wow' moments and architectural interest. We love installing them above front doors where they create this welcoming, grand entrance feeling – it's like your home is greeting visitors with open arms. Gable ends are another favorite spot because the arch echoes the roofline and creates harmony between the window and the home's structure. Inside, round top windows work beautifully in stairway landings where they create these unexpected moments of beauty and light. We've also done stunning installations in master bathrooms where a round top window above a freestanding tub creates this spa-like, luxurious atmosphere. The key is thinking of them as architectural punctuation marks that add emphasis and elegance to your home's story."
                imageSrc="/images/window/round/round3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <Row
                title="The Craft Behind Round Top Window Installation"
                description="Here's where round top windows separate the skilled craftsmen from the weekend warriors – the installation is part carpentry, part geometry, and part artistry. Every curve has to be mathematically perfect, yet it also has to look naturally elegant. We start by creating custom templates for each arch, because even slight variations in radius or proportion can make the difference between stunning and awkward. The framing has to accommodate the curved shape while maintaining structural integrity, and the weatherproofing requires specialized techniques since water behaves differently around curved surfaces. We've seen too many round top window installations that looked great initially but failed within a few years because the installer didn't understand the unique challenges these windows present. When done correctly, though, a round top window should last for decades while maintaining its perfect curve and weathertight seal. That's why we take extra time with each installation and use only the highest-grade materials designed specifically for curved applications."
                imageSrc="/images/window/round/round4.webp"
                className="pt-12 lg:pt-24"
            />

            <WhyParagonRoundTopWindows
                title="Why Choose Paragon Exterior for Round Top Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}