import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonBayWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Bay Windows | Professional Bay Window Installation',
    description: 'Bay windows project outward to add space and panoramic views. Our bay windows fill rooms with natural light and create cozy nooks. Energy-efficient bay windows boost curb appeal. Paragon Exterior installs professional bay windows throughout PA, NJ, and DE.',
    openGraph: {
        title: 'Bay Windows | Professional Bay Window Installation',
        description: 'Bay windows project outward to add space and panoramic views. Our bay windows fill rooms with natural light and create cozy nooks. Energy-efficient bay windows boost curb appeal. Paragon Exterior installs professional bay windows throughout PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/bay/bay-hero.webp'],
    },
};

export default function BayWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Bay Windows"
                subText="Bay windows project outward to create cozy nooks and expansive views. Paragon Exterior designs and installs bay windows for homeowners across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/windows/bay/bay-hero.webp"
                imgAlt="Professional bay window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/bay/bay-1.webp"
                imgAlt="Bay windows professionally installed on home"
                titleAs="h1"
                title="Bay Windows for Your Home"
                mainContent="A bay window combines multiple window panels that extend beyond the exterior wall, increasing interior space and flooding rooms with natural light. Angled sections capture panoramic views and add striking architectural detail to any home."
                bottomContent="Paragon Exterior's experienced team constructs bay windows with proper support and weatherproofing. We serve the entire Greater Philadelphia region, delivering custom designs that enhance both aesthetics and functionality."
                imagePosition="right"
            />
            <Row
                title="Benefits of Bay Windows"
                description="Bay windows make rooms feel larger while providing excellent daylight and extended views. They create charming alcoves perfect for seating or displays."
                imageSrc="/images/windows/bay/bay-2.webp"
            />
            <Row
                title="Where Bay Windows Work Best"
                description="Install bay windows in living rooms, breakfast areas, or any space that can benefit from extra light and dimension. They're popular in both traditional and contemporary homes."
                imageSrc="/images/windows/bay/bay-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Bay Window Installation"
                description="Because bay windows project outward, correct structural support and flashing are essential. Our installers coordinate every detail to ensure a tight, weather-resistant fit."
                imageSrc="/images/windows/bay/bay-4.webp"
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
