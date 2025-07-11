import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import ServicesGrid from '@/components/service-page/Services';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Services | Gutter Repair, Replacement & Downspouts',
  description:
    'Expert gutter repair, replacement, and downspout services from Paragon Exterior. Serving PA, NJ, and DE. Protect your home from water damage with properly functioning gutters.',
  keywords:
    'gutter repair, gutter replacement, gutter services, gutter contractors, downspout repair, gutter company near me, PA, NJ, DE',
  openGraph: {
    title: 'Gutter Services | Gutter Repair, Replacement & Downspouts',
    description:
      'Expert gutter repair, replacement, and downspout services from Paragon Exterior. Serving PA, NJ, and DE.',
    type: 'website',
    images: [
      {
        url: '/images/house4.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional gutter services by Paragon Exterior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutter Services | Gutter Repair, Replacement & Downspouts',
    description:
      'Expert gutter repair, replacement, and downspout services from Paragon Exterior. Serving PA, NJ, and DE.',
    images: ['/images/house4.jpeg'],
  },
};

const services = [
  {
    id: 1,
    title: 'Gutter Repair',
    href: '/gutters/gutter-repair',
    description:
      'Fixing leaks, sagging gutters, clogs, and pitch issues so water flows properly.',
    imageUrl:
      'https://images.unsplash.com/photo-1604890900856-f39684913add?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Gutter Replacement',
    href: '/gutters/gutter-replacement',
    description:
      'Full system upgrades with modern materials for lasting protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1583336667540-880adb5f8be0?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'Gutter Downspout Services',
    href: '/gutters/downspout-services',
    description:
      'Repair and install downspouts to redirect water away from foundations.',
    imageUrl:
      'https://images.unsplash.com/photo-1581579186987-0aaad60f3fa3?auto=format&fit=crop&w=800&q=60',
  },
];

export default function Page() {
  return (
    <div>
      <Hero
        mainText="Professional Gutter Services"
        subText="Protect your home from water damage with expert gutter repair, replacement, and downspout solutions."
        imgSrc="/images/house4.jpeg"
        imgAlt="Gutter services project by Paragon Exterior"
      />

      <InfoSection
        imgAlt="close up of a clean gutter system"
        imgSrc="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
        title="Your Local Gutter Experts"
        titleAs="h1"
        mainContent={
          <>
            Gutters play a crucial role in directing rainwater safely away from your home. Without a dependable gutter system, water can pool around your foundation and seep behind siding, leading to costly structural damage and mold growth.
          </>
        }
        bottomContent={
          <>
            Paragon Exterior provides complete gutter solutions across Pennsylvania, New Jersey, and Delaware. From minor repairs to full replacements, our team ensures your gutters work flawlessly in every season.
          </>
        }
        className="text-left"
      />

      <ServicesGrid services={services} />

      <Row
        title="Why Gutters Matter"
        description="Reliable gutters protect your foundation, prevent soil erosion, and stop water from damaging your siding and landscaping. Investing in quality gutters safeguards the longevity of your entire exterior."
        imageSrc="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60"
        className="py-12"
      />
      <Row
        title="Signs You Need Gutter Repair"
        description="Overflowing water, peeling paint near the roofline, and mildew around your foundation are all indicators that your gutters aren’t doing their job. Our professionals can inspect and repair issues before they lead to bigger problems."
        imageSrc="https://images.unsplash.com/photo-1563371351-e53ebb744a1b?auto=format&fit=crop&w=800&q=60"
        reverse
        className="py-12"
      />

      <FAQSection
        title="Gutter Services FAQ"
        faqs={[
          {
            question: 'How do I know if my gutters need repair?',
            answer:
              'Look for sagging sections, leaks during rain, or water pooling near your foundation. These signs indicate it’s time to call for professional gutter repair.',
          },
          {
            question: 'What types of gutters do you install?',
            answer:
              'We install aluminum, copper, and seamless gutters designed for durability and optimal water flow.',
          },
          {
            question: 'Can you fix sagging or detached gutters?',
            answer:
              'Yes, our team can resecure loose gutters, correct the pitch, and replace any damaged hangers or sections.',
          },
          {
            question: 'What areas do you serve for gutter services?',
            answer:
              'Paragon Exterior proudly serves homeowners across Pennsylvania, New Jersey, and Delaware.',
          },
        ]}
      />

      <GetEstimate />
    </div>
  );
}
