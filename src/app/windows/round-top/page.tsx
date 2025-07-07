import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonRoundTopWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Round Top Windows | Professional Round Top Window Installation',
    description: 'Round top windows add distinctive arches and architectural interest. Our round top windows elevate curb appeal and enhance traditional homes. Energy-efficient round top windows offer unique style. Choose Paragon Exterior for professional round top windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Round Top Windows | Professional Round Top Window Installation',
        description: 'Round top windows add distinctive arches and architectural interest. Our round top windows elevate curb appeal and enhance traditional homes. Energy-efficient round top windows offer unique style. Choose Paragon Exterior for professional round top windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/round-top/round-top-hero.webp'],
    },
};

export default function RoundTopWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Round Top Windows"
                subText="Round top windows add a graceful arch that enhances curb appeal and architectural charm. Paragon Exterior installs round top windows for homeowners in Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/windows/round-top/round-top-hero.webp"
                imgAlt="Professional round top window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/round-top/round-top-1.webp"
                imgAlt="Round top windows professionally installed on home"
                titleAs="h1"
                title="Round Top Windows for Your Home"
                mainContent="Round top windows feature an arched design that brings distinctive character to traditional and colonial-style homes. They can be fixed or operable and often serve as decorative accents above standard windows or doors."
                bottomContent="Our craftsmen are experienced in shaping and installing custom round top windows throughout the Greater Philadelphia area. We ensure each arch fits perfectly and complements your home's design."
                imagePosition="right"
            />
            <Row
                title="Benefits of Round Top Windows"
                description="The curved top creates visual interest and allows more natural light into your home. Round top windows are a striking detail that increases curb appeal and property value."
                imageSrc="/images/windows/round-top/round-top-2.webp"
            />
            <Row
                title="Ideal Uses for Round Top Windows"
                description="Use round top windows above entryways, in gable ends, or as unique focal points in living spaces. They pair beautifully with other window styles."
                imageSrc="/images/windows/round-top/round-top-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Round Top Window Installation"
                description="Arched windows require precise measurements and framing techniques. Paragon Exterior ensures smooth curves, secure seals, and lasting performance for every round top window."
                imageSrc="/images/windows/round-top/round-top-4.webp"
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
