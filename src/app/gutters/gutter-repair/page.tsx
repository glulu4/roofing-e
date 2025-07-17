import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import IncentivesSection from '@/components/service-page/Incentive';
import Reasons from '@/components/service-page/Reasons';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Gutter Repair Services PA, NJ, DE',
  description:
    'If you have damaged or missing gutters, Paragon Exterior can provide expert gutter repair services in PA, NJ & DE. Free estimates.',
  keywords:
    'gutter repair, gutter leak repair, sagging gutter repair, gutter cleaning, fascia board repair, downspout repair, gutter maintenance, emergency gutter repair, seamless gutter repair, aluminum gutter repair, copper gutter repair, gutter contractor, Pennsylvania gutter repair, New Jersey gutter repair, Delaware gutter repair, Philadelphia gutter repair, gutter repair cost, gutter repair near me, residential gutter repair, commercial gutter repair, gutter system repair, soffit repair, gutter guard installation, gutter replacement, storm damage gutter repair',
  openGraph: {
    title: 'Professional Gutter Repair Services | Paragon Exterior PA, NJ, DE',
    description:
      'Expert gutter repair contractors serving Pennsylvania, New Jersey & Delaware. Fast repairs for leaks, sagging gutters, storm damage. Licensed & insured with free estimates.',
    type: 'website',
    images: ['/images/house4.jpeg'],
    url: 'https://paragonexterior.com/gutters/gutter-repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Gutter Repair Services | Paragon Exterior',
    description:
      'Expert gutter repair contractors serving PA, NJ & DE. Emergency repairs, leak fixes, sagging gutter solutions. Licensed & insured with free estimates.',
    images: ['/images/house4.jpeg'],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Paragon Exterior Gutter Repair",
            "description": "Professional gutter repair services in Pennsylvania, New Jersey, and Delaware",
            "url": "https://paragonexterior.com/gutters/gutter-repair",
            "telephone": "+1-215-799-7663",
            "email": "info@paragonexterior.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Neshaminy Interplex Dr #103",
              "addressLocality": "Feasterville-Trevose",
              "addressRegion": "PA",
              "postalCode": "19053",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Pennsylvania"
              },
              {
                "@type": "State",
                "name": "New Jersey"
              },
              {
                "@type": "State",
                "name": "Delaware"
              }
            ],

            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Gutter Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Leak Repair",
                    "description": "Professional repair of leaking gutters including joint sealing, hole patching, and section replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sagging Gutter Repair",
                    "description": "Reinforcement and re-hanging of sagging gutters with new hangers and proper slope adjustment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Gutter Repair",
                    "description": "24/7 emergency gutter repair services for storm damage and urgent situations"
                  }
                }
              ]
            }
          })
        }}
      />

      <Hero
        mainText="Expert Gutter Repair Services in PA, NJ & DE"
        subText="Professional gutter repair for leaks, sagging sections, clogs, and storm damage. Licensed contractors with 20+ years experience serving Pennsylvania, New Jersey, and Delaware. Emergency service available 24/7."
        imgSrc="/images/gutters/repair/hero.avif"
        imgAlt="Professional gutter repair services by licensed contractors in Pennsylvania, New Jersey, Delaware"
      />

      <InfoSection
        imgSrc="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
        imgAlt="/images/gutters/repair/img1.webp"
        title="Professional Gutter Repair Contractors You Can Trust"
        titleAs="h1"
        mainContent="When gutters fail, water damage can cost thousands in repairs to your foundation, basement, and landscaping. Our licensed gutter repair specialists provide fast, reliable solutions for all gutter problems including leaks, sagging sections, clogged downspouts, and complete system failures. We service residential and commercial properties across Pennsylvania, New Jersey, and Delaware with emergency repair services available 24/7."
        bottomContent="Our certified technicians use premium materials and proven repair techniques to restore your gutter system's performance. We handle all gutter types including seamless aluminum, copper, vinyl, and steel gutters with comprehensive warranties on all work. From minor repairs to complete gutter restoration, we deliver lasting solutions that protect your home."
        imagePosition="right"
      />

      {/* Gutter Repair Services with Incentives Component */}
      <IncentivesSection
        title="Complete Gutter Repair Services"
        titleAs="h2"
        subtitle="From emergency leak repairs to complete gutter system restoration, our expert technicians handle every type of gutter problem. We use premium materials and proven techniques to ensure your gutters protect your home for years to come."
        heroImage={{
          src: "/images/gutters/repair/img2.webp",
          alt: "Professional gutter repair team working on residential home"
        }}
        incentives={[
          {
            name: "Gutter Leak Repair",
            imageSrc: "/images/siding/engineered/icons/hammer.svg",
            imageAlt: "Gutter leak repair icon",
            description: "Expert sealing and patching of leaks in gutters and downspouts using weather-resistant materials. We permanently stop water leaks to protect your foundation and landscaping."
          },
          {
            name: "Sagging Gutter Repair",
            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
            imageAlt: "Sagging gutter repair icon",
            description: "Professional reinforcement and re-hanging of sagging gutters. We replace damaged hangers, adjust proper slope, and strengthen fascia boards for long-lasting support."
          },
          {
            name: "Emergency Gutter Repair",
            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
            imageAlt: "Emergency gutter repair icon",
            description: "24/7 emergency gutter repair services for storm damage and urgent situations. Fast response to prevent water damage and protect your property investment."
          }
        ]}
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* Why Gutter Repair is Critical */}
      <Row
        title="Why Timely Gutter Repair is Critical for Your Home"
        description="Ignoring gutter problems leads to expensive consequences. Water damage from faulty gutters can cause foundation cracks, basement flooding, landscape erosion, and even structural damage. Professional gutter repair prevents these costly issues and protects your most valuable investment - your home. Our expert repairs ensure proper water flow away from your foundation, preserving your property value and preventing thousands in potential damage."
        imageSrc="/images/gutters/repair/img3.webp"
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Signs You Need Gutter Repair */}
      <Row
        title="Warning Signs Your Gutters Need Professional Repair"
        description="Don't wait for major damage - these warning signs indicate immediate gutter repair is needed: water overflowing during rain, visible rust or corrosion, gutters pulling away from the house, sagging sections, water stains on exterior walls, or pooling water near your foundation. Our experienced technicians can quickly assess and repair these issues before they cause expensive property damage."
        imageSrc="/images/gutters/repair/img4.webp"
        reverse
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Gutter Repair Reasons Component */}
      <Reasons
        title="Why Professional Gutter Repair is Essential"
        titleAs="h2"
        description="Understanding the importance of professional gutter repair helps you protect your home investment and avoid costly water damage repairs."
        reasons={[
          {
            name: "Foundation Protection",
            description: "Proper gutter repair prevents water from pooling around your foundation, avoiding cracks, settling, and basement flooding that can cost tens of thousands to repair."
          },
          {
            name: "Prevents Structural Damage",
            description: "Failed gutters allow water to damage fascia boards, soffits, and roof edges, leading to wood rot and expensive structural repairs."
          },
          {
            name: "Landscape Preservation",
            description: "Working gutters direct water away from landscaping, preventing soil erosion, plant damage, and the need for costly re-grading or replanting."
          },
          {
            name: "Prevents Ice Dams",
            description: "Properly functioning gutters reduce ice dam formation in winter, preventing roof damage and dangerous icicles that can cause injury."
          },
          {
            name: "Maintains Home Value",
            description: "Well-maintained gutters enhance curb appeal and prevent water damage that significantly reduces property value and marketability."
          },
          {
            name: "Saves Money Long-Term",
            description: "Investing in professional gutter repair now prevents much more expensive foundation, roofing, and siding repairs later."
          }
        ]}
        img={{
          src: "/images/gutters/repair/cover.webp",
          alt: "Professional gutter repair preventing water damage to home foundation"
        }}
      />

      {/* Gutter Materials We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Gutter Materials We Repair</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced technicians repair all types of gutter materials with specialized techniques and matching components for seamless results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Aluminum Gutters</h3>
              <p className="text-gray-600 mb-4">Most popular choice for durability and affordability. We repair dents, leaks, and replace damaged sections.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Seamless aluminum repair</li>
                <li>• Dent removal and reshaping</li>
                <li>• Color-matched replacements</li>
                <li>• Joint sealing and caulking</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Copper Gutters</h3>
              <p className="text-gray-600 mb-4">Premium material requiring specialized repair techniques. We maintain the beauty and integrity of copper systems.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Patina preservation</li>
                <li>• Soldering and joint repair</li>
                <li>• Matching copper replacements</li>
                <li>• Expansion joint maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Vinyl Gutters</h3>
              <p className="text-gray-600 mb-4">Cost-effective option that can crack or sag. We repair and reinforce vinyl systems for extended life.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Crack repair and sealing</li>
                <li>• Joint reinforcement</li>
                <li>• Bracket replacement</li>
                <li>• UV damage restoration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Steel Gutters</h3>
              <p className="text-gray-600 mb-4">Heavy-duty gutters that may rust over time. We provide rust treatment and protective coatings.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rust removal and treatment</li>
                <li>• Protective coating application</li>
                <li>• Heavy-duty hanger repair</li>
                <li>• Galvanized steel replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primaryblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Gutter Repair Service Areas</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional gutter repair services throughout Pennsylvania, New Jersey, and Delaware
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Pennsylvania</h3>
              <p className="text-blue-100 mb-4">Comprehensive gutter repair throughout PA including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Philadelphia & Greater Philadelphia Area</li>
                <li>• Feasterville-Trevose</li>
                <li>• Bensalem & Southampton</li>
                <li>• Newtown & Richboro</li>
                <li>• Doylestown & Montgomeryville</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">New Jersey</h3>
              <p className="text-blue-100 mb-4">Expert gutter repair services in NJ including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Camden County</li>
                <li>• Burlington County</li>
                <li>• Gloucester County</li>
                <li>• Mercer County</li>
                <li>• All surrounding areas</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Delaware</h3>
              <p className="text-blue-100 mb-4">Professional gutter repair in DE including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Wilmington</li>
                <li>• Newark</li>
                <li>• Dover</li>
                <li>• New Castle County</li>
                <li>• All Delaware communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Gutter Repair"
        faqs={[
          {
            question: 'How do I know if my gutters need repair or replacement?',
            answer:
              'If your gutters have minor leaks, small sections of damage, or occasional clogs, repair is usually the best option. However, if you have extensive rust, multiple leaks, large sections pulling away from the house, or gutters over 20 years old, replacement may be more cost-effective. Our experts provide honest assessments to help you make the right decision.',
          },
          {
            question: 'What does professional gutter repair typically cost?',
            answer:
              'Gutter repair costs vary depending on the extent of damage, materials needed, and accessibility. Minor repairs like sealing small leaks typically cost $100-300, while major repairs involving hanger replacement or section replacement can range from $300-800. We provide free estimates with transparent pricing and no hidden fees.',
          },
          {
            question: 'How long does gutter repair take to complete?',
            answer:
              'Most gutter repairs can be completed in a single day. Minor repairs like leak sealing or cleaning take 2-4 hours, while extensive repairs involving multiple sections or hanger replacement may take 6-8 hours. We work efficiently to minimize disruption to your daily routine.',
          },
          {
            question: 'Do you offer emergency gutter repair services?',
            answer:
              'Yes, we provide 24/7 emergency gutter repair services for urgent situations like storm damage, major leaks threatening your foundation, or gutters that have completely separated from your home. We respond quickly to prevent further water damage to your property.',
          },
          {
            question: 'What warranty do you provide on gutter repair work?',
            answer:
              'We stand behind our gutter repair work with comprehensive warranties. Labor is typically warranted for 2-5 years depending on the type of repair, and materials come with manufacturer warranties. We use only high-quality materials and proven techniques to ensure lasting repairs.',
          },
          {
            question: 'Can you repair gutters on all types of homes?',
            answer:
              'Yes, our experienced technicians repair gutters on single-family homes, townhouses, condos, and commercial buildings. We have the equipment and expertise to safely work on single-story homes up to multi-story buildings, handling any accessibility challenges.',
          },
          {
            question: 'Will you help with insurance claims for storm damage?',
            answer:
              'Absolutely. We work directly with insurance companies and can help document storm damage, provide detailed repair estimates, and work with adjusters to ensure you receive fair coverage for necessary gutter repairs. We make the insurance process as smooth as possible.',
          },
          {
            question: 'How often should gutters be inspected and maintained?',
            answer:
              'We recommend professional gutter inspection twice a year - in spring and fall. Regular cleaning and maintenance prevent most major repairs and extend gutter life significantly. We offer maintenance programs to keep your gutters functioning optimally year-round.',
          }
        ]}
      />

      {/* Why Choose Paragon */}
      <WhyParagon
        title="Why Choose Paragon Exterior for Gutter Repair?"
        titleAs="h2"
        customReasons={[
          {
            icon: require('@heroicons/react/24/solid').WrenchScrewdriverIcon,
            title: "Expert Gutter Repair Specialists",
            description: "Our gutter repair experts quickly diagnose and fix all types of gutter problems with precision, using premium materials and proven techniques for lasting results.",
            keywordPhrase: "expert gutter repair"
          },
          {
            icon: require('@heroicons/react/24/solid').ClockIcon,
            title: "Fast Emergency Response",
            description: "When you need emergency gutter repair, we provide rapid response times to prevent water damage and protect your home investment.",
            keywordPhrase: "emergency gutter repair"
          },
          {
            icon: require('@heroicons/react/24/solid').ShieldCheckIcon,
            title: "Guaranteed Gutter Repairs",
            description: "Our gutter repair services are backed by comprehensive warranties and use quality materials for long-lasting repairs that protect your property.",
            keywordPhrase: "guaranteed gutter repair"
          }
        ]}
        className="bg-gray-50"
      />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  );
}