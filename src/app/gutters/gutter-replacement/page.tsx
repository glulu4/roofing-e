import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Replacement Services | Seamless Gutter Installation',
  description:
    'Upgrade to durable, seamless gutters that protect your home from water damage. Serving homeowners across Pennsylvania, New Jersey, and Delaware.',
  keywords:
    'gutter replacement, seamless gutters, gutter installation, new gutter system, gutter company near me, Pennsylvania, New Jersey, Delaware',
  openGraph: {
    title: 'Professional Gutter Replacement Services | Paragon Exterior',
    description:
      'Full gutter replacement and seamless gutter installation for lasting protection. Serving PA, NJ, and DE.',
    type: 'website',
    images: ['/images/house4.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Gutter Replacement Services | Paragon Exterior',
    description:
      'Full gutter replacement and seamless gutter installation for lasting protection. Serving PA, NJ, and DE.',
    images: ['/images/house4.jpeg'],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Expert Gutter Replacement"
        subText="Replace failing gutters with modern, seamless systems that keep rainwater flowing safely away from your home."
        imgSrc="/images/house4.jpeg"
        imgAlt="Gutter replacement project by Paragon Exterior"
      />

      <InfoSection
        imgSrc="https://images.unsplash.com/photo-1583336667540-880adb5f8be0?auto=format&fit=crop&w=800&q=60"
        imgAlt="Installing new seamless gutters on a home"
        title="Professional Gutter Replacement"
        titleAs="h1"
        mainContent="Old, leaking gutters can lead to costly repairs. We remove worn-out systems and install seamless gutters built for decades of trouble-free performance."
        bottomContent="Our crew handles every step from safe removal to precise installation, ensuring flawless water management for your home."
        imagePosition="right"
      />

      <Row
        title="Benefits of New Gutters"
        description="New seamless gutters prevent leaks, reduce maintenance, and enhance curb appeal. Modern materials stand up to harsh weather year after year."
        imageSrc="https://images.unsplash.com/photo-1504457041980-2b8c3391e4d1?auto=format&fit=crop&w=800&q=60"
      />

      <Row
        title="Customized Gutter Systems"
        description="We size and pitch gutters correctly and install downspouts where needed so your new system works perfectly for your property."
        imageSrc="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=60"
        reverse
        className="py-12"
      />

      <FAQSection
        title="Gutter Replacement FAQ"
        faqs={[
          {
            question: 'When is gutter replacement better than repair?',
            answer:
              'If your gutters are severely rusted, bent, or pulling away from the home, replacement is often the most reliable solution.',
          },
          {
            question: 'Do you install seamless aluminum gutters?',
            answer:
              'Yes, seamless aluminum is our most popular option, but we also offer copper and steel when desired.',
          },
          {
            question: 'Can you match my existing downspouts?',
            answer:
              'Absolutely. We color match new gutters and downspouts to blend with your home’s exterior.',
          },
          {
            question: 'How long does a gutter replacement take?',
            answer:
              'Most homes can be completed in a single day, depending on size and complexity.',
          },
        ]}
      />

      <WhyParagon
        title="Why Choose Paragon Exterior for Gutter Replacement?"
        titleAs="h2"
      />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  );
}
