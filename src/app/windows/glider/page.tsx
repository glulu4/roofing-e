import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonGliderWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Glider Windows | Professional Glider Window Installation',
    description: 'Glider windows slide horizontally for a modern look and effortless use. Our glider windows require no exterior clearance and create wide openings. Energy-efficient glider windows are perfect near patios. Choose Paragon Exterior for professional glider windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Glider Windows | Professional Glider Window Installation',
        description: 'Glider windows slide horizontally for a modern look and effortless use. Our glider windows require no exterior clearance and create wide openings. Energy-efficient glider windows are perfect near patios. Choose Paragon Exterior for professional glider windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/glider/glider-hero.webp'],
    },
};

export default function GliderWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Glider Windows"
                subText="Glider windows slide horizontally for a sleek, modern look and easy operation. Paragon Exterior provides glider window installation throughout Pennsylvania, New Jersey, and Delaware."
                imgSrc="/images/windows/glider/glider-hero.webp"
                imgAlt="Professional glider window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/glider/glider-1.webp"
                imgAlt="Glider windows professionally installed on home"
                titleAs="h1"
                title="Glider Windows for Your Home"
                mainContent="Glider windows operate on horizontal tracks, making them ideal where exterior clearance is limited. Their streamlined design offers wide glass areas for plentiful natural light. With minimal moving parts, gliders are simple to use and provide a contemporary aesthetic."
                bottomContent="Serving the Greater Philadelphia area, Paragon Exterior installs glider windows with level tracks and smooth rollers. Our craftsmanship ensures effortless operation and long-lasting energy efficiency."
                imagePosition="right"
            />
            <Row
                title="Benefits of Glider Windows"
                description="Glider windows don't require exterior swing space, so they're perfect near patios or walkways. Large openings bring in daylight while the sliding sash is easy to operate."
                imageSrc="/images/windows/glider/glider-2.webp"
            />
            <Row
                title="Best Uses for Glider Windows"
                description="These windows shine in modern homes and spaces where you want uninterrupted views. They're often installed over kitchen counters or in contemporary living rooms across PA, NJ, and DE."
                imageSrc="/images/windows/glider/glider-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Glider Window Installation"
                description="Accurate track installation prevents sticking and drafts. We keep the sliding mechanism clean and secure so your glider windows glide smoothly for years."
                imageSrc="/images/windows/glider/glider-4.webp"
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
