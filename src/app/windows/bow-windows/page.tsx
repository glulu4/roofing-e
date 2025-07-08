import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonBowWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Bow Windows | Professional Bow Window Installation',
    description: 'Elegant bow windows with graceful curves that create stunning panoramic views and add luxury to your home. Professional bow window installation in PA, NJ, and DE. Custom bow windows that expand space and enhance architectural beauty. Expert bow window contractors.',
    openGraph: {
        title: 'Bow Windows | Professional Bow Window Installation',
        description: 'Elegant bow windows with graceful curves that create stunning panoramic views and add luxury to your home. Professional bow window installation in PA, NJ, and DE. Custom bow windows that expand space and enhance architectural beauty.',
        type: 'website',
        images: ["/images/window/bow/hero.webp"],
    },
};

export default function BowWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Bow Windows"
                subText="When you want to make a statement that says 'this home is something special,' bow windows deliver that wow factor like nothing else. These gracefully curved window projections create sweeping panoramic views while adding an unmistakable touch of elegance to any home. Our expert bow window installation transforms ordinary rooms into extraordinary spaces throughout Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/window/bow/hero.webp"
                imgAlt="Professional bow window installation by Paragon Exterior"
            />

            <InfoSection
                imgSrc="/images/window/bow/bow1.webp"
                imgAlt="Bow windows professionally installed on home"
                titleAs="h1"
                title="Bow Windows: The Ultimate in Architectural Elegance"
                mainContent="Picture this: instead of looking out through a flat window, you're surrounded by glass that curves gently around you, creating this incredible panoramic view that makes you feel like you're sitting in a glass pavilion. That's the magic of bow windows. While bay windows typically use three panels set at angles, bow windows use four, five, or even six panels that curve smoothly, creating this incredibly sophisticated look that literally stops people in their tracks when they see your home. We're talking about a window installation that doesn't just let in light – it transforms the entire character of your house."
                bottomContent="Now, I won't sugarcoat it – bow windows are the most complex window installation we do. We're essentially building a curved room addition that has to support its own weight, handle wind loads, and stay perfectly watertight through Pennsylvania winters and summer storms. But when you see the finished result, especially when that morning light fills the space and you're surrounded by your garden views, you'll understand why bow windows are considered the crown jewel of residential window installations. We've been perfecting this craft for years, and there's nothing quite like the satisfaction of creating something this beautiful and functional."
                imagePosition="right"
            />

            <Row
                title="Why Bow Windows Are Worth the Investment"
                description="Let's talk about what bow windows actually do for your daily life, because the benefits go way beyond just looking impressive from the curb. First, you get this incredible sense of being connected to your outdoor space – it's like having a conservatory built right into your room. The curved design means you're getting light from more angles than any other window type, which makes rooms feel larger and more open. And here's something most people don't think about: bow windows create this amazing focal point that actually helps with furniture arrangement. Instead of trying to figure out how to decorate around a flat wall, you've got this beautiful curved space that naturally becomes the heart of the room. Plus, the extra square footage isn't just theoretical – you can actually use that space for seating, plants, or display areas that become conversation starters."
                imageSrc="/images/window/bow/bow2.webp"
                reverse
            />

            <Row
                title="Where Bow Windows Make the Biggest Impact"
                description="We get this question a lot: 'Where should I put a bow window?' The truth is, bow windows work best where they can really shine and be appreciated. Living rooms are the classic choice because that's where you and your guests spend time, and bow windows create this stunning backdrop for entertaining. Dining rooms are another favorite – imagine hosting dinner parties where your guests are surrounded by garden views and natural light. But here's a secret: master bedrooms with bow windows feel like luxury hotel suites, especially if you can create a little sitting area in the curved space. We've also done some beautiful installations in home libraries and studies where the extra light makes reading a pleasure, and the views provide natural breaks from screen time. The key is choosing a room where you'll actually enjoy the benefits daily, not just when company comes over."
                imageSrc="/images/window/bow/bow3.webp"
                className="pt-12 lg:pt-24"
            />

            <Row
                title="The Art and Science of Bow Window Installation"
                description="Here's where I need to be completely honest with you – bow window installation is probably the most technically challenging project we take on. We're not just installing windows; we're engineering a curved structural extension that has to handle significant loads while maintaining a perfect seal against the weather. Each panel has to align precisely with its neighbors, the curve has to be mathematically accurate, and the whole assembly needs support systems that most contractors have never even seen, let alone installed. We use specialized hardware, custom-engineered support brackets, and waterproofing techniques that require years of experience to master. This isn't a project where you want to go with the lowest bidder – we've seen too many bow window failures that turned into expensive nightmares. When we do the job right, though, you get a window installation that will be the pride of your home for decades."
                imageSrc="/images/window/bow/bow4.webp"
                reverse
                className="pt-12 lg:pt-24"
            />

            <WhyParagonBowWindows
                title="Why Choose Paragon Exterior for Bow Windows?"
                titleAs="h2"
            />

            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}