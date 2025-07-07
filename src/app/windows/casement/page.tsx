import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonCasementWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Casement Windows | Professional Casement Window Installation',
    description: 'Casement windows deliver excellent ventilation and unobstructed views. Our casement windows swing open for full airflow and easy cleaning. Energy-efficient casement windows keep drafts out. Choose Paragon Exterior for professional casement windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Casement Windows | Professional Casement Window Installation',
        description: 'Casement windows deliver excellent ventilation and unobstructed views. Our casement windows swing open for full airflow and easy cleaning. Energy-efficient casement windows keep drafts out. Choose Paragon Exterior for professional casement windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/casement/casement-hero.webp'],
    },
};

export default function CasementWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Casement Windows"
                subText="Side-hinged casement windows open fully for refreshing breezes and crystal-clear views. Paragon Exterior installs casement windows across Pennsylvania, New Jersey, and Delaware with precision and energy-efficient craftsmanship."
                imgSrc="/images/windows/casement/casement-hero.webp"
                imgAlt="Professional casement window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/casement/casement-1.webp"
                imgAlt="Casement windows professionally installed on home"
                titleAs="h1"
                title="Casement Windows for Your Home"
                mainContent="Casement windows operate on sturdy side hinges, allowing the sash to swing outward for maximum airflow and easy cleaning. Because the entire window opens, casement windows capture breezes like a sail to quickly ventilate your home. When closed, the sash presses firmly against the frame, providing a tight weather-resistant seal that enhances energy efficiency. Contemporary design options make casement windows a versatile choice for any room."
                bottomContent="Paragon Exterior specializes in casement window installation throughout Pennsylvania, New Jersey, and Delaware. Our team ensures a precise fit and smooth crank operation so your new casement windows deliver lasting performance in the Greater Philadelphia area."
                imagePosition="right"
            />
            <Row
                title="Benefits of Casement Windows"
                description="A full 90-degree opening maximizes ventilation and allows for unobstructed views. The crank handle makes cleaning simple from inside your home while the compression seal keeps drafts out and boosts efficiency."
                imageSrc="/images/windows/casement/casement-2.webp"
            />
            <Row
                title="Where Casement Windows Shine"
                description="Casement windows are ideal in kitchens, over sinks, or anywhere you want clear sightlines and excellent ventilation. They work well in modern designs but complement many architectural styles throughout PA, NJ, and DE."
                imageSrc="/images/windows/casement/casement-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Casement Window Installation"
                description="Proper installation ensures the hardware operates smoothly and the window seals tightly against the elements. Our experts level each frame, adjust the hinges, and verify weatherstripping so your casement windows perform flawlessly."
                imageSrc="/images/windows/casement/casement-4.webp"
            />
            <WhyParagonCasementWindows
                title="Why Choose Paragon Exterior for Casement Windows?"
                titleAs="h2"
            />
            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}
