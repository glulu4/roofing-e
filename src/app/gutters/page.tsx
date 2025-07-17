import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import ServicesGrid from '@/components/service-page/Services';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import type {Metadata} from 'next';
import SecondaryText from '@/components/SecondaryText';

export const metadata: Metadata = {
  title: 'Gutter Repair & Installation Specialists',
  description:
    'Whether you need new gutters, gutter repair, or downspout services, Paragon Exterior is the trusted gutter specialist near you.',
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
      '/images/gutters/gutter-replace-card.webp',
  },
  {
    id: 2,
    title: 'Gutter Replacement',
    href: '/gutters/gutter-replacement',
    description:
      'Full system upgrades with modern materials for lasting protection.',
    imageUrl:
      '/images/gutters/gutter-repair-card.webp',
  },
  {
    id: 3,
    title: 'Gutter Downspout Services',
    href: '/gutters/downspout-services',
    description:
      'Repair and install downspouts to redirect water away from foundations.',
    imageUrl:
      '/images/gutters/downspout-card.avif',
  },
];

export default function Page() {
  return (
    <div>
      <Hero
        mainText="Professional Gutter Services"
        subText="Protect your home from water damage with expert gutter repair, replacement, and downspout solutions."
        imgSrc="/images/gutters/hero.webp"
        imgAlt="Gutter services project by Paragon Exterior"
      />

      <InfoSection
        imgAlt="close up of a clean gutter system"
        imgSrc="/images/gutters/img1.webp"
        title="Your Local Gutter Experts"
        titleAs="h1"
        mainContent={
          <SecondaryText>
            Gutters protect your home by moving rainwater away from your roof and foundation. When they’re clogged, leaking, or sagging, water can seep behind siding, cause basement flooding, or damage your home’s structure.
            <br /><br />
            At Paragon Exterior, we make sure your gutters work the way they should. From simple gutter repairs to full replacements, our team provides solutions that stop water damage before it starts. We use quality materials that last and install everything with precision.
          </SecondaryText>
        }
        bottomContent={
          <>
            Whether you need a quick fix or a complete system upgrade, we’re here to help. We’ll walk you through the process and keep you informed every step of the way. Schedule your gutter service today and keep your home safe from water damage.
          </>
        }
        className="text-left"
      />

      <ServicesGrid services={services} />

      <Row
        title="Common Signs Your Gutters Need Repair"
        description={
          <div>
            <SecondaryText>
              Overflowing water during storms is a clear sign your gutters aren’t working properly. Water spilling over the edge can damage your siding, landscaping, and even your foundation.
            </SecondaryText>
            <SecondaryText className="mt-4">
              You might also notice peeling paint, rust stains near the roof, or mildew around the base of your home. These are signs that water is backing up and not draining where it should.
            </SecondaryText>
            <SecondaryText className="mt-4">
              If your gutters are sagging, cracked, or pulling away from the house, it’s time for a repair. Our team will inspect your system and fix the problem before it turns into major damage.
            </SecondaryText>
          </div>
        }
        imageSrc="/images/gutters/img2.webp"
        reverse={true}
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16"
      />

      <Row
        title="Full-Service Gutter Installation & Replacement"
        description={
          <div>
            <SecondaryText>
              If your gutters are old, damaged, or constantly clogging, it might be time to replace them. We install seamless aluminum, vinyl, and copper gutters that are built to last and look great on any home.
            </SecondaryText>
            <SecondaryText className="mt-4">
              Our team makes sure your new system is the right size for your roof and slopes correctly so water flows smoothly. We’ll also install downspouts in the best locations to protect your foundation.
            </SecondaryText>
            <SecondaryText className="mt-4">
              Want to cut down on gutter cleaning? Ask about gutter guards. They block leaves and debris while letting water through, so you don’t have to clean as often.
            </SecondaryText>
          </div>
        }
        imageSrc="/images/gutters/img3.webp"
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16 "
      />

      <Row
        title="When Should You Call for Gutter Repair?"
        description="Water spilling over the sides, peeling paint, and soggy areas around your home’s base are all signs your gutters need help. Call us for a fast inspection and affordable fix."
        imageSrc="/images/gutters/img4.webp"
        reverse
        className="py-12"
      />

      <FAQSection
        title="Gutter Services FAQ"
        faqs={[
          {
            question: 'How do I know if my gutters need repair?',
            answer:
              'Look for sagging sections, water overflowing during rain, or puddles near your foundation. These are clear signs it’s time to get them checked.',
          },
          {
            question: "How do gutter guards work?",
            answer:
              'Gutter guards sit on top of your gutters and keep out leaves and debris. Water can still flow through, but you won’t need to clean as often.',
          },
          {
            question: 'What types of gutters do you install?',
            answer:
              'We install aluminum, copper, vinyl, and seamless gutters—all built for durability and designed to fit your home’s style.',
          },
          {
            question: 'Can you fix loose or sagging gutters?',
            answer:
              'Yes, we resecure loose gutters, fix the slope, and replace damaged parts to keep water flowing properly.',
          },
          {
            question: 'What areas do you serve?',
            answer:
              'We provide gutter services across Pennsylvania, New Jersey, and Delaware.',
          },
        ]}
      />

      <GetEstimate />
    </div>
  );
}
