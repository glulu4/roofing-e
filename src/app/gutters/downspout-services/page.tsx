import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downspout Services | Installation & Repair',
  description:
    'Professional downspout repair and installation to keep water away from your foundation. Serving Pennsylvania, New Jersey, and Delaware.',
  keywords:
    'downspout services, downspout installation, downspout repair, gutter downspout, drainage solutions, Pennsylvania, New Jersey, Delaware',
  openGraph: {
    title: 'Professional Downspout Services | Paragon Exterior',
    description:
      'Expert downspout repair and installation services that protect your home from foundation damage. Serving PA, NJ, and DE.',
    type: 'website',
    images: ['/images/house4.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Downspout Services | Paragon Exterior',
    description:
      'Expert downspout repair and installation services that protect your home from foundation damage. Serving PA, NJ, and DE.',
    images: ['/images/house4.jpeg'],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Gutter Downspout Services"
        subText="Redirect water safely away from your foundation with professional downspout installation and repair."
        imgSrc="/images/house4.jpeg"
        imgAlt="Gutter downspout installation by Paragon Exterior"
      />

      <InfoSection
        imgSrc="https://images.unsplash.com/photo-1581579186987-0aaad60f3fa3?auto=format&fit=crop&w=800&q=60"
        imgAlt="Downspout being installed on a home"
        title="Downspout Installation & Repair"
        titleAs="h1"
        mainContent="Properly functioning downspouts prevent basement flooding and foundation problems. We install new downspouts and repair damaged ones to ensure water flows away from your property."
        bottomContent="From reattaching loose elbows to burying extensions, our team handles every aspect of downspout service throughout PA, NJ, and DE."
        imagePosition="right"
      />

      <Row
        title="Why Downspouts Are Crucial"
        description="Without reliable downspouts, rainwater can pool around your foundation leading to cracks and leaks. Good drainage protects your entire home."
        imageSrc="https://images.unsplash.com/photo-1504457041980-2b8c3391e4d1?auto=format&fit=crop&w=800&q=60"
      />

      <Row
        title="Downspout Upgrade Options"
        description="We can add extensions, bury piping, or connect to rain barrels to customize your drainage system."
        imageSrc="https://images.unsplash.com/photo-1593956856930-7b4b8736875f?auto=format&fit=crop&w=800&q=60"
        reverse
        className="py-12"
      />

      <FAQSection
        title="Downspout Services FAQ"
        faqs={[
          {
            question: 'How often should downspouts be inspected?',
            answer:
              'We recommend inspecting downspouts at least twice a year and after major storms to ensure they are clear and securely attached.',
          },
          {
            question: 'Can you install buried downspout extensions?',
            answer:
              'Yes, we can bury extensions or connect to drain piping to carry water further from the home.',
          },
          {
            question: 'What materials do you use for downspouts?',
            answer:
              'We install aluminum, copper, and steel downspouts matched to your gutter system.',
          },
          {
            question: 'Do you serve commercial properties?',
            answer:
              'Absolutely. We provide downspout installation and repair for residential and commercial buildings across PA, NJ, and DE.',
          },
        ]}
      />

      <WhyParagon
        title="Why Choose Paragon Exterior for Downspout Services?"
        titleAs="h2"
      />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  );
}
