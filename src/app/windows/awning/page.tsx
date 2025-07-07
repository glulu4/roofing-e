import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonAwningWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Awning Windows | Professional Awning Window Installation',
    description: 'Awning windows hinge at the top to protect your home from rain while ventilating. Our awning windows provide privacy and energy efficiency. Durable awning windows suit basements and bathrooms. Paragon Exterior installs professional awning windows across PA, NJ, and DE.',
    openGraph: {
        title: 'Awning Windows | Professional Awning Window Installation',
        description: 'Awning windows hinge at the top to protect your home from rain while ventilating. Our awning windows provide privacy and energy efficiency. Durable awning windows suit basements and bathrooms. Paragon Exterior installs professional awning windows across PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/awning/awning-hero.webp'],
    },
};

export default function AwningWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Awning Windows"
                subText="Top-hinged awning windows offer privacy and protection from light rain while still allowing ventilation. Paragon Exterior installs awning windows for homeowners in Pennsylvania, New Jersey, and Delaware with expert craftsmanship."
                imgSrc="/images/windows/awning/awning-hero.webp"
                imgAlt="Professional awning window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/windows/awning/awning-1.webp"
                imgAlt="Awning windows professionally installed on home"
                titleAs="h1"
                title="Awning Windows for Your Home"
                mainContent="Awning windows are hinged at the top and open outward from the bottom, creating a protective awning when open. This design lets you enjoy fresh air even during light rain showers. Awning windows are commonly used in bathrooms, basements, and other areas requiring privacy yet good ventilation. The tight compression seal also boosts energy efficiency."
                bottomContent="Paragon Exterior has installed countless awning windows throughout the Greater Philadelphia area. Our team understands the unique hardware and framing considerations that keep awning windows operating smoothly for years."
                imagePosition="right"
            />
            <Row
                title="Key Benefits of Awning Windows"
                description="Because they shed rainwater away from your home, awning windows can stay open in wet weather. They also provide excellent privacy and complement spaces where ventilation is needed high on the wall."
                imageSrc="/images/windows/awning/awning-2.webp"
            />
            <Row
                title="Ideal Applications for Awning Windows"
                description="Awning windows excel in bathrooms, basements, and first-floor rooms where you want airflow without sacrificing privacy. They're also great companions to larger stationary windows."
                imageSrc="/images/windows/awning/awning-3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Awning Window Installation"
                description="Top-hinged windows require precise alignment and durable hardware to prevent sagging or leaks. Our installers secure every hinge and seal to ensure worry-free performance season after season."
                imageSrc="/images/windows/awning/awning-4.webp"
            />
            <WhyParagonAwningWindows
                title="Why Choose Paragon Exterior for Awning Windows?"
                titleAs="h2"
            />
            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}
