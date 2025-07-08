import type {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import {WhyParagonDoubleHungWindows} from '@/components/WhyParagon';

export const metadata: Metadata = {
    title: 'Double Hung Windows | Professional Double Hung Window Installation',
    description: 'Double hung windows offer timeless style with top and bottom sash operation. Our double hung windows provide versatile ventilation and easy cleaning. Energy-efficient double hung windows fit any architectural style. Trust Paragon Exterior for professional double hung windows in PA, NJ, and DE.',
    openGraph: {
        title: 'Double Hung Windows | Professional Double Hung Window Installation',
        description: 'Double hung windows offer timeless style with top and bottom sash operation. Our double hung windows provide versatile ventilation and easy cleaning. Energy-efficient double hung windows fit any architectural style. Trust Paragon Exterior for professional double hung windows in PA, NJ, and DE.',
        type: 'website',
        images: ['/images/windows/double-hung/double-hung-hero.webp'],
    },
};

export default function DoubleHungWindowsPage() {
    return (
        <div className="min-h-screen">
            <Hero
                mainText="Double Hung Windows"
                subText="Double hung windows provide classic appeal and flexible airflow with two operable sashes. Paragon Exterior installs double hung windows across Pennsylvania, New Jersey, and Delaware with expert craftsmanship."
                imgSrc="/images/window/double-hung/hero.webp"
                imgAlt="Professional double hung window installation by Paragon Exterior"
            />
            <InfoSection
                imgSrc="/images/window/double-hung/double1.webp"
                imgAlt="Double hung windows professionally installed on home"
                titleAs="h1"
                title="Double Hung Windows for Your Home"
                mainContent="Double hung windows are your classic window type. Double hung windows have both upper and lower sashes that slide vertically, offering flexible ventilation options. Open the top sash to release warm air or the bottom sash for fresh breezes. Modern balances and tilt-in designs make cleaning easy from inside your home. Their classic appearance suits almost any architectural style."
                bottomContent="Our team has extensive experience installing double hung windows in homes across the Greater Philadelphia region. We ensure smooth sash movement, proper weatherstripping, and secure locks so your new double hung windows provide lasting comfort and energy efficiency."
                imagePosition="right"
            />
            <Row
                title="Advantages of Double Hung Windows"
                description="Double Hung Windows have two operable sashes, giving you precise control over airflow. The tilt-in features simplify cleaning while maintaining the traditional look many homeowners love. Double hung windows also accommodate window AC units when needed."
                imageSrc="/images/window/double-hung/double2.webp"
            />
            <Row
                title="Best Places for Double Hung Windows"
                description="These versatile windows are a great fit for more historic homes and modern builds alike. They work especially well in bedrooms and living spaces where controllable ventilation is a priority."
                imageSrc="/images/window/double-hung/double3.webp"
                reverse
                className="pt-12 lg:pt-24"
            />
            <Row
                title="Professional Double Hung Window Installation"
                description="Correct installation is the key to preventing air leakage and keeping both sashes operating smoothly. Paragon Exterior’s technicians align balances, install durable hardware, and seal every edge for optimal performance and customer satisfaction."
                imageSrc="/images/window/double-hung/double4.webp"
            />
            <WhyParagonDoubleHungWindows
                title="Why Choose Paragon Exterior for Double Hung Windows?"
                titleAs="h2"
            />
            <div className="py-12">
                <GetEstimate />
            </div>
        </div>
    );
}
