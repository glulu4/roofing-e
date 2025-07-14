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
                subText="Upgrade your home with custom bay windows that expand space, boost curb appeal, and flood your interior with natural light from three angles. Whether you're dreaming of a cozy reading nook or dramatic architectural detail, our professional bay window installation services bring function and beauty to homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/window/bay/hero.webp"
                imgAlt="Professional bay window installation by Paragon Exterior"
            />


            <InfoSection
                imgSrc="/images/window/bay/bay1.webp"
                imgAlt="Bay windows professionally installed on home"
                titleAs="h1"
                title="Bay Windows: Add Space, Light, and Lasting Value"
                mainContent="Bay windows are more than just a design upgrade — they’re a clever way to expand your interior without a full renovation. A professionally installed bay window adds 12 to 36 square feet of usable space, depending on the projection. But the real magic is how it transforms your room: panoramic views, natural light from three directions, and a stunning focal point that elevates your home’s character."
                bottomContent="Bay windows aren’t a DIY weekend project. Cutting into your exterior wall, building a structural bump-out, and waterproofing every seam takes serious expertise. That’s why homeowners across PA, NJ, and DE trust Paragon Exterior for precision installations built to last — with proper load distribution, flawless flashing, and year-round comfort."
                imagePosition="right"
            />


            <Row
                title="Why Bay Windows Make a Big Impact"
                description="Bay windows change how a room feels — not just how it looks. Because they extend beyond the exterior wall, they catch light from multiple angles and create a sense of openness. You gain not only floor space but visual space, too. They’re perfect for houseplants, cozy reading corners, or built-in window seating with hidden storage. Plus, they add a timeless architectural feature that increases home value."
                imageSrc="/images/window/bay/bay2.webp"
            />


            <Row
                title="Where Should You Add a Bay Window?"
                description="Bay windows work beautifully in any room where you want more space, light, and a view. Popular spots include breakfast nooks, living rooms, bedrooms, and even home offices. In kitchens, they brighten your mornings with garden views. In living rooms, they create a natural gathering spot. And in bedrooms, they add a relaxing, retreat-like feel. Wherever you install one, bay windows enhance both the atmosphere and functionality of your space."
                imageSrc="/images/window/bay/bay3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />


            <Row
                title="Bay Window Installation: Why It’s a Job for Pros"
                description="Installing a bay window is like building a mini room addition. It requires cutting into your exterior wall, reinforcing the structure, adding custom roofing, and ensuring long-term waterproofing. Each window must align perfectly for proper sealing and aesthetics. Mistakes here lead to water damage, drafts, or sagging frames. Our team handles the engineering, permits, and precision work so your bay window looks stunning and lasts for decades."
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