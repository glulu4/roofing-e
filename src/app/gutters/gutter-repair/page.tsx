import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Repair Services | Fix Leaks, Sagging & Clogs',
  description:
    'Local gutter repair experts providing fast fixes for leaks, sagging gutters, and clogs across Pennsylvania, New Jersey, and Delaware.',
  keywords:
    'gutter repair, gutter leak repair, sagging gutter fix, gutter cleaning, gutter service near me, Pennsylvania, New Jersey, Delaware',
  openGraph: {
    title: 'Professional Gutter Repair Services | Paragon Exterior',
    description:
      'Local gutter repair experts serving PA, NJ, and DE. We fix leaks, sagging gutters, and clogs to keep water flowing properly.',
    type: 'website',
    images: ['/images/house4.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Gutter Repair Services | Paragon Exterior',
    description:
      'Local gutter repair experts serving PA, NJ, and DE. We fix leaks, sagging gutters, and clogs to keep water flowing properly.',
    images: ['/images/house4.jpeg'],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Professional Gutter Repair"
        subText="Fast fixes for leaks, sagging gutters, and clogs so your home stays protected from water damage."
        imgSrc="/images/house4.jpeg"
        imgAlt="Gutter repair services by Paragon Exterior"
      />

      <InfoSection
        imgSrc="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
        imgAlt="Technician repairing a damaged gutter"
        title="Gutter Repair You Can Trust"
        titleAs="h1"
        mainContent="When gutters fail, water can back up and cause costly damage. Our experienced team quickly repairs leaks, resecures sagging sections, and clears clogs so rainwater flows freely."
        bottomContent="We serve homeowners across Pennsylvania, New Jersey, and Delaware with prompt service and quality workmanship."
        imagePosition="right"
      />

      <Row
        title="Why Timely Gutter Repair Matters"
        description="Ignoring gutter problems can lead to foundation cracks, rotted fascia, and ruined landscaping. Timely repairs keep water away from your home."
        imageSrc="https://images.unsplash.com/photo-1581579186987-0aaad60f3fa3?auto=format&fit=crop&w=800&q=60"
      />

      <Row
        title="Signs You Need Gutter Repair"
        description="Overflowing water during rain, rust spots, or gutters pulling away from the roofline indicate it's time to call the pros."
        imageSrc="https://images.unsplash.com/photo-1555685812-4b743ffc8845?auto=format&fit=crop&w=800&q=60"
        reverse
        className="py-12"
      />

      <FAQSection
        title="Gutter Repair FAQ"
        faqs={[
          {
            question: 'How do I know if my gutters need repair?',
            answer:
              'Look for leaks, sagging sections, or water spilling over the sides during a storm.',
          },
          {
            question: 'Do you repair seamless gutters?',
            answer:
              'Yes, we fix all gutter types including seamless, aluminum, and copper.',
          },
          {
            question: 'Can you unclog gutters filled with debris?',
            answer:
              'Absolutely. We remove clogs and ensure downspouts are clear so water flows freely.',
          },
          {
            question: 'Which areas do you serve?',
            answer:
              'We provide gutter repair across Pennsylvania, New Jersey, and Delaware.',
          },
        ]}
      />

      <WhyParagon
        title="Why Choose Paragon Exterior for Gutter Repair?"
        titleAs="h2"
      />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  );
}
