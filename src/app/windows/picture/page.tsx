import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonPictureWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Picture Windows | Professional Picture Window Installation',
    description: 'Picture windows provide unobstructed views and excellent energy efficiency. Our picture windows let natural light flood in while reducing drafts. Low-maintenance picture windows maximize your scenery. Paragon Exterior installs professional picture windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Picture Windows | Professional Picture Window Installation',
        description: 'Picture windows provide unobstructed views and excellent energy efficiency. Our picture windows let natural light flood in while reducing drafts. Low-maintenance picture windows maximize your scenery. Paragon Exterior installs professional picture windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/picture/picture-hero.webp'],
    },
};

export default function PictureWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Picture Windows"
                subText="Picture windows provide expansive, unobstructed views with superior energy efficiency. Paragon Exterior installs picture windows for homeowners across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/windows/picture/picture-hero.webp"
                imgAlt="Professional picture window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/picture/picture-1.webp"
                imgAlt="Picture windows professionally installed on home"
                titleAs="h1"
                title="Picture Windows for Your Home"
                mainContent="Picture windows are fixed panes of glass that do not open, making them highly energy efficient and perfect for showcasing scenic views. With no moving parts, they require minimal maintenance and offer the lowest cost per square foot of glass."
                bottomContent="Paragon Exterior specializes in installing picture windows of all sizes in the Greater Philadelphia area. We ensure airtight seals and expert framing so your new picture windows deliver maximum light and efficiency."
                imagePosition="right"
            />
            <Row
                title="Benefits of Picture Windows"
                description="Because they are stationary, picture windows eliminate drafts and provide exceptional insulation. Large glass areas flood your home with natural light and let you enjoy the outside scenery."
                imageSrc="/images/windows/picture/picture-2.webp"
            />
            <Row
                title="Best Places for Picture Windows"
                description="Install picture windows in living rooms, stairwells, or any space where ventilation isn't necessary but a view is desired. They're often paired with operable windows for airflow."
                imageSrc="/images/windows/picture/picture-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Picture Window Installation"
                description="Proper sealing and flashing are crucial for fixed windows. Our team secures every edge to prevent leaks and ensure your picture windows last for decades."
                imageSrc="/images/windows/picture/picture-4.webp"
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
