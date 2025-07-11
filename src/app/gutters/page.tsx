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
          <>
            Gutters play a crucial role in directing rainwater safely away from your home. Without a dependable gutter system, water can pool around your foundation and seep behind siding, leading to costly structural damage and mold growth.
            At Paragon Exterior, we specialize in comprehensive gutter services that ensure your home remains protected from the elements. Our team of experienced professionals is dedicated to providing high-quality gutter repair, replacement, and downspout solutions tailored to your specific needs.
            Whether you need a quick repair to fix leaks and clogs or a full gutter replacement to upgrade your system, we have the expertise and tools to get the job done right. We use only the best materials and techniques to ensure your gutters function flawlessly for years to come.
          </>
        }
        bottomContent={
          <>
            With our commitment to customer satisfaction, you can trust that your home is in good hands. We take pride in our work and strive to exceed your expectations with every project. From the initial consultation to the final inspection,
            we keep you informed and involved every step of the way.
            Contact us today to schedule your gutter service and ensure your home is protected from water damage. Let Paragon Exterior be your trusted partner for all your gutter needs.
          </>
        }
        className="text-left"
      />

      <ServicesGrid services={services} />

      {/* Enhanced Gutter Repair Row */}
      <Row
        title="Critical Signs You Need Professional Gutter Repair"
        description={
          <div>
            <p>
              Don&apos;t ignore the warning signs that indicate your gutters need immediate attention. <strong>Overflowing water during rainstorms</strong> is often the first indicator that your gutter system is compromised. When gutters can&apos;t properly channel water away from your home, you&apos;ll notice water cascading over the edges, creating unsightly stains and potential foundation damage.
            </p>
            <p className="mt-4">
              <strong>Peeling paint and rust stains</strong> near your roofline signal that water is backing up and causing damage to your home&apos;s exterior. <strong>Mildew, mold, or water stains</strong> around your foundation indicate that water isn&apos;t being directed away from your home properly, which can lead to serious structural issues and costly basement flooding.
            </p>
            <p className="mt-4">
              Other critical warning signs include <strong>sagging or pulling away gutters</strong>, visible cracks or holes in gutter sections, and <strong>basement flooding during heavy rains</strong>. Our certified gutter repair specialists provide comprehensive inspections and immediate repairs that prevent minor issues from becoming major home damage disasters.
            </p>
          </div>
        }
        imageSrc="/images/gutters/img2.webp"
        reverse={true}
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16"
      />

      {/* New Professional Gutter Services Row */}
      <Row
        title="Comprehensive Gutter Installation and Replacement Services"
        description={
          <div>
            <p>
              Transform your home&apos;s water management system with professional <strong>gutter installation</strong> that provides decades of reliable protection. Our expert team specializes in seamless aluminum gutters, durable vinyl gutter systems, and premium copper gutters that enhance both functionality and curb appeal while protecting your most valuable investment.
            </p>
            <p className="mt-4">
              <strong>Complete gutter replacement</strong> becomes necessary when repairs are no longer cost-effective or when your current system can&apos;t handle your roof&apos;s water volume. We provide comprehensive <strong>gutter sizing calculations</strong>, proper slope installation, and strategic downspout placement that ensures optimal water flow and maximum protection for your foundation and landscaping.
            </p>
            <p className="mt-4">
              Our gutter services include <strong>gutter guard installation</strong> to prevent clogs and reduce maintenance, professional gutter cleaning and maintenance programs, and emergency gutter repair for storm damage. From initial consultation to final inspection, we ensure your new gutter system provides superior performance and lasting value.
            </p>
          </div>
        }
        imageSrc="/images/gutters/img3.webp"
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16 "
      />

      <Row
        title="Signs You Need Gutter Repair"
        description="Overflowing water, peeling paint near the roofline, and mildew around your foundation are all indicators that your gutters aren’t doing their job. Our professionals can inspect and repair issues before they lead to bigger problems."
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
              'Look for sagging sections, leaks during rain, or water pooling near your foundation. These signs indicate it’s time to call for professional gutter repair.',
          },
          {
            question:"How do I install gutter guards?",
            answer:
              'Gutter guards can be installed by our team to prevent debris buildup. They fit over your existing gutters and allow water to flow through while blocking leaves and twigs.',
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
