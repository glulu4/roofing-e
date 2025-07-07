import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonBowWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Bow Windows | Professional Bow Window Installation',
    description: 'Bow windows form a gentle curve for elegant design and sweeping views. Our bow windows expand interior space and brighten your home. Energy-efficient bow windows enhance architectural style. Trust Paragon Exterior for professional bow windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Bow Windows | Professional Bow Window Installation',
        description: 'Bow windows form a gentle curve for elegant design and sweeping views. Our bow windows expand interior space and brighten your home. Energy-efficient bow windows enhance architectural style. Trust Paragon Exterior for professional bow windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/bow/bow-hero.webp'],
    },
};

export default function BowWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Bow Windows"
                subText="Bow windows offer a graceful, curved projection for panoramic views. Paragon Exterior crafts bow window installations for homes across Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/windows/bow/bow-hero.webp"
                imgAlt="Professional bow window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/bow/bow-1.webp"
                imgAlt="Bow windows professionally installed on home"
                titleAs="h1"
                title="Bow Windows for Your Home"
                mainContent="Bow windows consist of four or more casement units joined to form a gentle curve. This design maximizes view area and creates an elegant exterior appearance. Bow windows can dramatically enhance curb appeal and provide extra interior space."
                bottomContent="We have the structural expertise needed for complex bow window installations throughout the Greater Philadelphia area. Paragon Exterior ensures each unit aligns perfectly for smooth operation and long-term durability."
                imagePosition="right"
            />
            <Row
                title="Advantages of Bow Windows"
                description="The continuous curve of a bow window softens exterior lines while expanding interior space. Multiple panels allow a sweeping view that draws in abundant light."
                imageSrc="/images/windows/bow/bow-2.webp"
            />
            <Row
                title="Ideal Locations for Bow Windows"
                description="Bow windows make a statement in living and dining rooms or any facade where you desire a graceful architectural element. They're especially popular on Victorian and upscale homes."
                imageSrc="/images/windows/bow/bow-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Bow Window Installation"
                description="Bow installations are complex and require precise engineering. Our professionals handle framing, support cables, and waterproofing so your bow windows remain secure and beautiful."
                imageSrc="/images/windows/bow/bow-4.webp"
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
