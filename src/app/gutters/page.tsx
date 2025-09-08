import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import ServicesGrid from '@/components/service-page/Services';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import type {Metadata} from 'next';
import SecondaryText from '@/components/SecondaryText';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';
import HeaderText from '@/components/HeaderText';

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
        description="Water spilling over the sides, peeling paint, and soggy areas around your home's base are all signs your gutters need help. Call us for a fast inspection and affordable fix."
        imageSrc="/images/gutters/img4.webp"
        reverse
        className="py-12"
      />

      {/* GUTTER COST SECTION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <HeaderText as="h2" className="text-center mb-6">
            Gutter Service Costs: What You Can Expect
          </HeaderText>
          <SecondaryText className="text-center mb-8">
            We believe in upfront pricing so you can budget accordingly. Here&apos;s what most gutter services actually cost based on our experience.
          </SecondaryText>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="font-bold text-gray-900">Gutter Cleaning & Minor Repairs</span>
                <SecondaryText className="text-sm mt-1">
                  $150 - $300 for cleaning and small fixes like resealing joints or adjusting hangers. Usually takes 2-4 hours.
                </SecondaryText>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="font-bold text-gray-900">Gutter Repair</span>
                <SecondaryText className="text-sm mt-1">
                  $300 - $800 for fixing leaks, replacing sections, or correcting slope issues. Most repairs completed in one day.
                </SecondaryText>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="font-bold text-gray-900">Downspout Repair/Replacement</span>
                <SecondaryText className="text-sm mt-1">
                  $100 - $300 per downspout for repairs or replacements, including proper drainage away from foundation.
                </SecondaryText>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <span className="font-bold text-gray-900">Full Gutter Replacement</span>
                <SecondaryText className="text-sm mt-1">
                  $6 - $12 per linear foot for seamless aluminum gutters, $8 - $15 for copper. Average home needs 120-200 feet.
                </SecondaryText>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <span className="font-bold text-gray-900">Gutter Guards</span>
                <SecondaryText className="text-sm mt-1">
                  $3 - $8 per linear foot depending on type. Great investment to reduce future cleaning costs.
                </SecondaryText>
              </div>
              
              <div className="border-l-4 border-green-600 pl-4">
                <span className="font-bold text-gray-900">Emergency Services</span>
                <SecondaryText className="text-sm mt-1">
                  $200 - $500 for urgent repairs after storms, including temporary fixes to prevent immediate water damage.
                </SecondaryText>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
            <SecondaryText>
              <strong>The bottom line:</strong> Most gutter issues are way less expensive to fix than the water damage they can cause if ignored. We always provide free estimates so you know exactly what you&apos;re looking at cost-wise.
            </SecondaryText>
          </div>
        </div>
      </section>

      {/* SEASONAL GUTTER MAINTENANCE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <HeaderText as="h2" className="text-center mb-6">
            Seasonal Gutter Care: When to Clean, Inspect, and Maintain
          </HeaderText>
          <SecondaryText className="text-center mb-12">
            Different seasons bring different challenges for your gutters. Here&apos;s when to pay attention and what to look for.
          </SecondaryText>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg text-orange-600 mb-3">🍂 Fall (September - November)</h3>
                <SecondaryText className="text-sm mb-3">
                  Prime cleaning season when leaves clog everything up. Clean gutters at least twice during fall, especially after big windstorms.
                </SecondaryText>
                <div className="text-xs text-gray-600">
                  <strong>What to look for:</strong> Deep cleaning, downspout clearing, gutter guard inspection
                </div>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg text-blue-600 mb-3">❄️ Winter (December - February)</h3>
                <SecondaryText className="text-sm mb-3">
                  Watch for ice dams and icicles that can damage gutters. Don&apos;t try to remove ice yourself - call us for safe removal.
                </SecondaryText>
                <div className="text-xs text-gray-600">
                  <strong>What to look for:</strong> Ice dam prevention, icicle monitoring, emergency repairs
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg text-green-600 mb-3">🌱 Spring (March - May)</h3>
                <SecondaryText className="text-sm mb-3">
                  Perfect time for inspection and repairs after winter damage. Check for loose hangers, leaks, and proper drainage.
                </SecondaryText>
                <div className="text-xs text-gray-600">
                  <strong>What to look for:</strong> Damage inspection, minor repairs, slope adjustment
                </div>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg text-yellow-600 mb-3">☀️ Summer (June - August)</h3>
                <SecondaryText className="text-sm mb-3">
                  Best time for major repairs or replacement projects. Dry weather makes installation easier and more reliable.
                </SecondaryText>
                <div className="text-xs text-gray-600">
                  <strong>What to look for:</strong> Replacement projects, gutter guard installation, preventive maintenance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL COMPARISON */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <HeaderText as="h2" className="text-center mb-6">
            Gutter Materials: Finding What Works Best for Your Home
          </HeaderText>
          <SecondaryText className="text-center mb-8">
            Not all gutters are created equal. Here&apos;s our honest take on the most popular materials and when each one makes sense.
          </SecondaryText>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 bg-white p-4 rounded">
              <HeaderText as="h3" className="text-lg mb-2">Seamless Aluminum (Most Popular)</HeaderText>
              <SecondaryText className="text-sm mb-3">
                The go-to choice for most homes. Lightweight, rust-resistant, and available in lots of colors. Won&apos;t dent easily and handles weather well.
              </SecondaryText>
              <div className="text-xs text-green-600">
                <strong>Best for:</strong> Most homes, budget-conscious homeowners, low maintenance needs
              </div>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 bg-white p-4 rounded">
              <HeaderText as="h3" className="text-lg mb-2">Copper (Premium Choice)</HeaderText>
              <SecondaryText className="text-sm mb-3">
                Beautiful, long-lasting, and develops a natural patina over time. More expensive upfront but can last 50+ years with minimal maintenance.
              </SecondaryText>
              <div className="text-xs text-green-600">
                <strong>Best for:</strong> Historic homes, high-end properties, homeowners wanting lifetime solution
              </div>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 bg-white p-4 rounded">
              <HeaderText as="h3" className="text-lg mb-2">Vinyl (Budget Option)</HeaderText>
              <SecondaryText className="text-sm mb-3">
                Least expensive option and won&apos;t rust, but can crack in extreme cold and fade over time. Good for simple applications.
              </SecondaryText>
              <div className="text-xs text-green-600">
                <strong>Best for:</strong> Temporary solutions, rental properties, very tight budgets
              </div>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 bg-white p-4 rounded">
              <HeaderText as="h3" className="text-lg mb-2">Steel (Heavy Duty)</HeaderText>
              <SecondaryText className="text-sm mb-3">
                Strongest option that handles heavy snow loads and impacts well. Requires more maintenance to prevent rust but lasts a long time.
              </SecondaryText>
              <div className="text-xs text-green-600">
                <strong>Best for:</strong> Areas with heavy snow, homes near trees, commercial applications
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <SecondaryText>
              Not sure which material is right for your home? We&apos;ll look at your roof, climate, and budget to recommend what makes the most sense for your situation.
            </SecondaryText>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      <FAQSection
        title="Gutter Services FAQ"
        faqs={[
          {
            question: 'How do I know if my gutters need repair?',
            answer:
              'Look for sagging sections, water overflowing during rain, or puddles near your foundation. Other signs include peeling paint near gutters, rust stains, or mildew around your home\'s base. These are clear signals it\'s time to get them checked before damage gets worse.',
          },
          {
            question: "How do gutter guards work and are they worth it?",
            answer:
              'Gutter guards sit on top of your gutters and keep out leaves and debris while letting water flow through. They reduce cleaning from twice a year to maybe once every few years. For most homes with nearby trees, they pay for themselves in reduced maintenance costs.',
          },
          {
            question: 'What types of gutters do you install?',
            answer:
              'We install seamless aluminum (most popular), copper (premium), vinyl (budget-friendly), and steel (heavy-duty) gutters. Seamless aluminum is our most popular choice because it\'s durable, affordable, and available in lots of colors to match your home.',
          },
          {
            question: 'How often should gutters be cleaned?',
            answer:
              'Most homes need gutter cleaning twice a year - once in late fall after leaves drop and once in late spring. If you have lots of trees nearby, you might need cleaning 3-4 times per year. Gutter guards can cut this down significantly.',
          },
          {
            question: 'Can you fix loose or sagging gutters?',
            answer:
              'Yes, we can resecure loose gutters by replacing hangers, adjusting the slope for proper drainage, and fixing any damaged sections. Often sagging happens because hangers are spaced too far apart or the gutters are clogged with debris.',
          },
          {
            question: 'How long do gutters typically last?',
            answer:
              'Aluminum gutters last 15-25 years, copper can last 50+ years, and vinyl typically lasts 10-15 years. The lifespan depends on material quality, installation, and maintenance. Regular cleaning and minor repairs can extend any gutter system\'s life.',
          },
          {
            question: 'Do you provide emergency gutter services?',
            answer:
              'Yes, we offer emergency gutter repairs for storm damage, severe clogs causing overflow, or ice dam issues. We can usually respond within 24 hours to prevent water damage to your home. Call us right away if you\'re seeing active water problems.',
          },
          {
            question: 'What areas do you serve?',
            answer:
              'We provide gutter services across Pennsylvania, New Jersey, and Delaware. Our service area includes the Greater Philadelphia region and surrounding communities.',
          },
        ]}
      />

      <GetEstimate />
    </div>
  );
}
