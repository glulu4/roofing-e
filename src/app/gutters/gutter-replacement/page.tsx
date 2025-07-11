// import Hero from '@/components/service-page/Hero';
// import InfoSection from '@/components/service-page/Info';
// import Row from '@/components/Row';
// import FAQSection from '@/components/FAQSection';
// import GetEstimate from '@/components/landing-ui/GetEstimate';
// import WhyParagon from '@/components/WhyParagon';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Gutter Replacement Services | Seamless Gutter Installation',
//   description:
//     'Upgrade to durable, seamless gutters that protect your home from water damage. Serving homeowners across Pennsylvania, New Jersey, and Delaware.',
//   keywords:
//     'gutter replacement, seamless gutters, gutter installation, new gutter system, gutter company near me, Pennsylvania, New Jersey, Delaware',
//   openGraph: {
//     title: 'Professional Gutter Replacement Services | Paragon Exterior',
//     description:
//       'Full gutter replacement and seamless gutter installation for lasting protection. Serving PA, NJ, and DE.',
//     type: 'website',
//     images: ['/images/house4.jpeg'],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Professional Gutter Replacement Services | Paragon Exterior',
//     description:
//       'Full gutter replacement and seamless gutter installation for lasting protection. Serving PA, NJ, and DE.',
//     images: ['/images/house4.jpeg'],
//   },
// };

// export default function Page() {
//   return (
//     <div className="min-h-screen">
//       <Hero
//         mainText="Expert Gutter Replacement"
//         subText="Replace failing gutters with modern, seamless systems that keep rainwater flowing safely away from your home."
//         imgSrc="/images/house4.jpeg"
//         imgAlt="Gutter replacement project by Paragon Exterior"
//       />

//       <InfoSection
//         imgSrc="https://images.unsplash.com/photo-1583336667540-880adb5f8be0?auto=format&fit=crop&w=800&q=60"
//         imgAlt="Installing new seamless gutters on a home"
//         title="Professional Gutter Replacement"
//         titleAs="h1"
//         mainContent="Old, leaking gutters can lead to costly repairs. We remove worn-out systems and install seamless gutters built for decades of trouble-free performance."
//         bottomContent="Our crew handles every step from safe removal to precise installation, ensuring flawless water management for your home."
//         imagePosition="right"
//       />

//       <Row
//         title="Benefits of New Gutters"
//         description="New seamless gutters prevent leaks, reduce maintenance, and enhance curb appeal. Modern materials stand up to harsh weather year after year."
//         imageSrc="https://images.unsplash.com/photo-1504457041980-2b8c3391e4d1?auto=format&fit=crop&w=800&q=60"
//       />

//       <Row
//         title="Customized Gutter Systems"
//         description="We size and pitch gutters correctly and install downspouts where needed so your new system works perfectly for your property."
//         imageSrc="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=60"
//         reverse
//         className="py-12"
//       />

//       <FAQSection
//         title="Gutter Replacement FAQ"
//         faqs={[
//           {
//             question: 'When is gutter replacement better than repair?',
//             answer:
//               'If your gutters are severely rusted, bent, or pulling away from the home, replacement is often the most reliable solution.',
//           },
//           {
//             question: 'Do you install seamless aluminum gutters?',
//             answer:
//               'Yes, seamless aluminum is our most popular option, but we also offer copper and steel when desired.',
//           },
//           {
//             question: 'Can you match my existing downspouts?',
//             answer:
//               'Absolutely. We color match new gutters and downspouts to blend with your home’s exterior.',
//           },
//           {
//             question: 'How long does a gutter replacement take?',
//             answer:
//               'Most homes can be completed in a single day, depending on size and complexity.',
//           },
//         ]}
//       />

//       <WhyParagon
//         title="Why Choose Paragon Exterior for Gutter Replacement?"
//         titleAs="h2"
//       />

//       <div className="py-12">
//         <GetEstimate />
//       </div>
//     </div>
//   );
// }



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
  title: 'Gutter Replacement Services PA, NJ, DE | Seamless Gutter Installation',
  description:
    'Professional gutter replacement services in Pennsylvania, New Jersey & Delaware. Expert seamless gutter installation, aluminum gutters, copper gutters & more. Free estimates from licensed contractors.',
  keywords:
    'gutter replacement, seamless gutters, gutter installation, new gutter system, gutter company near me, aluminum gutter installation, copper gutter replacement, seamless gutter replacement, gutter contractor, gutter installation cost, new gutters, gutter system replacement, Pennsylvania gutter replacement, New Jersey gutter replacement, Delaware gutter replacement, Philadelphia gutter installation, residential gutter replacement, commercial gutter installation, gutter upgrade, gutter replacement near me, best gutter company, professional gutter installation, gutter replacement cost, half round gutters, k-style gutters, gutter and downspout installation',
  openGraph: {
    title: 'Professional Gutter Replacement Services | Paragon Exterior PA, NJ, DE',
    description:
      'Expert gutter replacement and seamless gutter installation serving Pennsylvania, New Jersey & Delaware. Licensed contractors with premium materials and warranties.',
    type: 'website',
    images: ['/images/house4.jpeg'],
    url: 'https://paragonexterior.com/gutters/gutter-replacement',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Gutter Replacement Services | Paragon Exterior',
    description:
      'Expert gutter replacement and seamless gutter installation in PA, NJ & DE. Licensed contractors with premium materials and warranties.',
    images: ['/images/house4.jpeg'],
  },
  alternates: {
    canonical: 'https://paragonexterior.com/gutters/gutter-replacement',
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
            "name": "Paragon Exterior Gutter Replacement",
            "description": "Professional gutter replacement and seamless gutter installation services in Pennsylvania, New Jersey, and Delaware",
            "url": "https://paragonexterior.com/gutters/gutter-replacement",
            "telephone": "+1-215-799-7663",
            "email": "sales@paragonexterior.com",
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
            "serviceType": [
              "Gutter Replacement",
              "Seamless Gutter Installation",
              "Aluminum Gutter Installation",
              "Copper Gutter Replacement",
              "Gutter System Installation",
              "New Gutter Installation"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Gutter Replacement Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Seamless Gutter Installation",
                    "description": "Custom seamless aluminum gutter installation with no joints or seams to prevent leaks"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Gutter System Replacement",
                    "description": "Full gutter system removal and replacement including gutters, downspouts, and accessories"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium Gutter Materials",
                    "description": "Installation of aluminum, copper, and steel gutters with various profiles and colors"
                  }
                }
              ]
            }
          })
        }}
      />

      <Hero
        mainText="Expert Gutter Replacement Services in PA, NJ & DE"
        subText="Complete gutter replacement with seamless gutters, premium materials, and professional installation. Licensed contractors serving Pennsylvania, New Jersey, and Delaware with 20+ years experience and comprehensive warranties."
        imgSrc="/images/gutters/replacement/hero.webp"
        imgAlt="Professional gutter replacement and seamless gutter installation by licensed contractors"
      />

      <InfoSection
        imgSrc="/images/gutters/replacement/img1.webp"
        imgAlt="Professional seamless gutter installation on residential home"
        title="Professional Gutter Replacement & Seamless Gutter Installation"
        titleAs="h1"
        mainContent="When your gutters are beyond repair, complete gutter replacement is the smart investment that protects your home for decades. Our licensed gutter contractors specialize in seamless gutter installation using premium materials including aluminum, copper, and steel gutters. We handle complete gutter system replacement from old gutter removal to new installation, ensuring proper sizing, pitch, and drainage for optimal performance."
        bottomContent="Our expert gutter replacement process includes thorough assessment of your home's drainage needs, custom measurement and fabrication of seamless gutters, professional installation with proper hangers and support, and complete cleanup. We service residential and commercial properties throughout Pennsylvania, New Jersey, and Delaware with comprehensive warranties on all gutter replacement work."
        imagePosition="right"
      />

      {/* Gutter Replacement Services with Incentives */}
      <IncentivesSection
        title="Complete Gutter Replacement Services"
        titleAs="h2"
        subtitle="From seamless aluminum gutter installation to premium copper gutter systems, we provide complete gutter replacement solutions. Our expert installation ensures proper water management and long-lasting protection for your home."
        heroImage={{
          src: "/images/gutters/replacement/img2.webp",
          alt: "Professional gutter replacement team installing seamless gutters"
        }}
        incentives={[
          {
            name: "Seamless Gutter Installation",
            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
            imageAlt: "Seamless gutter installation icon",
            description: "Custom seamless aluminum gutters fabricated on-site with no joints or seams. Eliminates leak points and provides superior water management with clean, professional appearance."
          },
          {
            name: "Premium Gutter Materials",
            imageSrc: "/images/siding/engineered/icons/log.svg",
            imageAlt: "Premium gutter materials icon",
            description: "Choose from aluminum, copper, and steel gutters in various profiles and colors. All materials come with manufacturer warranties and are designed for decades of performance."
          },
          {
            name: "Complete System Installation",
            imageSrc: "/images/siding/engineered/icons/hammer.svg",
            imageAlt: "Complete gutter system icon",
            description: "Full gutter replacement including gutters, downspouts, hangers, and accessories. Professional installation ensures proper drainage and protects your home investment."
          }
        ]}
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* When to Replace vs Repair */}
      <Row
        title="When Gutter Replacement is Better Than Repair"
        description="While gutter repair can fix minor issues, complete gutter replacement is the smart choice when gutters are extensively damaged, over 20 years old, or constantly requiring repairs. Signs you need gutter replacement include: extensive rust or corrosion, multiple sections pulling away from the house, frequent leaks despite repairs, sagging that can't be corrected, or outdated gutter materials. Professional gutter replacement provides decades of worry-free protection and actually saves money compared to repeated repairs."
        imageSrc="/images/gutters/replacement/img3.avif"
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Benefits of New Gutters */}
      <Row
        title="Benefits of Professional Gutter Replacement"
        description="New seamless gutters provide superior protection with no leak points, enhanced curb appeal that increases home value, and maintenance-free performance for decades. Modern gutter materials resist rust, corrosion, and weather damage while providing optimal water flow. Professional gutter replacement includes proper sizing for your home's specific drainage needs, correct pitch for efficient water flow, and strategic downspout placement for foundation protection. The investment in quality gutter replacement pays for itself through prevented water damage and increased property value."
        imageSrc="/images/gutters/replacement/img4.webp"
        reverse
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Gutter Material Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Gutter Material Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from premium gutter materials designed for durability, performance, and aesthetic appeal. Each material offers unique benefits for different home styles and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Seamless Aluminum Gutters</h3>
              <p className="text-gray-600 mb-4">
                Most popular choice combining affordability, durability, and low maintenance. Available in over 20 colors with baked-on finish.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 30+ year lifespan with proper installation</li>
                <li>• Lightweight yet strong construction</li>
                <li>• Seamless fabrication eliminates leak points</li>
                <li>• Rust-resistant with protective coating</li>
                <li>• Cost-effective premium option</li>
                <li>• Wide range of color choices</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Copper Gutters</h3>
              <p className="text-gray-600 mb-4">
                Premium choice for luxury homes offering unmatched beauty and longevity. Develops attractive patina over time.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 50+ year lifespan with minimal maintenance</li>
                <li>• Naturally antimicrobial properties</li>
                <li>• Develops beautiful patina finish</li>
                <li>• Increases home value significantly</li>
                <li>• Superior corrosion resistance</li>
                <li>• Environmentally friendly material</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Steel Gutters</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty option for extreme weather conditions. Galvanized coating provides excellent rust protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Superior strength for heavy snow loads</li>
                <li>• Galvanized coating prevents rust</li>
                <li>• Ideal for commercial applications</li>
                <li>• Handles extreme weather conditions</li>
                <li>• Professional-grade performance</li>
                <li>• Long-term durability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Profiles and Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Gutter Profiles & Styles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect gutter profile to complement your home&apos;s architecture while providing optimal water management performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">K-Style Gutters</h3>
              <p className="text-gray-600 mb-6">
                Most popular residential choice with decorative front profile resembling crown molding. Holds more water than half-round gutters.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• 5&apos; and 6&apos; size options available</li>
                <li>• Decorative ogee front profile</li>
                <li>• Superior water capacity</li>
                <li>• Fits most home architectural styles</li>
                <li>• Easy integration with standard downspouts</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Half-Round Gutters</h3>
              <p className="text-gray-600 mb-6">
                Traditional European style offering classic elegance. Perfect for historic homes and luxury properties seeking authentic appearance.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Authentic historic appearance</li>
                <li>• Self-cleaning rounded bottom</li>
                <li>• Available in copper and aluminum</li>
                <li>• Premium architectural appeal</li>
                <li>• Custom fabrication available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <Reasons
        title="Our Professional Gutter Replacement Process"
        titleAs="h2"
        description="Our systematic gutter replacement process ensures proper installation, optimal performance, and long-lasting protection for your home investment."
        reasons={[
          {
            name: "Free Consultation & Measurement",
            description: "Comprehensive assessment of your home's drainage needs with precise measurements for custom gutter fabrication. We evaluate roof area, pitch, and water flow requirements."
          },
          {
            name: "Material Selection & Design",
            description: "Expert guidance in selecting optimal gutter materials, profiles, and colors. We help you choose the best solution for your home's style, budget, and performance needs."
          },
          {
            name: "Safe Old Gutter Removal",
            description: "Careful removal of existing gutters with proper disposal and recycling. We protect your landscaping and property during the removal process."
          },
          {
            name: "Fascia Board Inspection",
            description: "Thorough inspection and repair of fascia boards if needed. We ensure solid, level mounting surface for optimal gutter performance and longevity."
          },
          {
            name: "Custom Gutter Fabrication",
            description: "On-site fabrication of seamless gutters to exact measurements. No joints or seams means no leak points for superior water management."
          },
          {
            name: "Professional Installation",
            description: "Expert installation with proper hangers, correct pitch, and strategic downspout placement. Final inspection ensures optimal performance and appearance."
          }
        ]}
        img={{
          src: "/images/gutters/replacement/img5.avif",
          alt: "Professional gutter replacement installation process"
        }}
      />

      {/* Cost and Investment Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primaryblue mb-6">Gutter Replacement Investment</h2>
          <p className="text-xl text-gray-600 mb-8">
            Understanding gutter replacement costs helps you make informed decisions about protecting your home investment.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primaryblue mb-4">Factors Affecting Cost</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Home size and linear footage needed</li>
                <li>• Material choice (aluminum, copper, steel)</li>
                <li>• Gutter profile and size selection</li>
                <li>• Number of downspouts required</li>
                <li>• Accessibility and installation complexity</li>
                <li>• Additional accessories and features</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primaryblue mb-4">Long-Term Value</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Prevents costly foundation repairs</li>
                <li>• Protects landscaping and hardscaping</li>
                <li>• Increases home value and curb appeal</li>
                <li>• Eliminates ongoing repair costs</li>
                <li>• Reduces homeowner&apos;s insurance claims</li>
                <li>• Provides decades of maintenance-free service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primaryblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Gutter Replacement Service Areas</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional gutter replacement and seamless gutter installation throughout Pennsylvania, New Jersey, and Delaware
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Pennsylvania</h3>
              <p className="text-blue-100 mb-4">Expert gutter replacement throughout PA including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Philadelphia & Greater Philadelphia Area</li>
                <li>• Feasterville-Trevose & Bensalem</li>
                <li>• Southampton & Newtown</li>
                <li>• Richboro & Langhorne</li>
                <li>• Doylestown & Montgomeryville</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">New Jersey</h3>
              <p className="text-blue-100 mb-4">Professional gutter installation in NJ including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Camden County communities</li>
                <li>• Burlington County areas</li>
                <li>• Gloucester County regions</li>
                <li>• Mercer County locations</li>
                <li>• All surrounding NJ areas</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Delaware</h3>
              <p className="text-blue-100 mb-4">Seamless gutter installation in DE including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Wilmington & surrounding areas</li>
                <li>• Newark & University areas</li>
                <li>• Dover & central Delaware</li>
                <li>• New Castle County</li>
                <li>• All Delaware communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Gutter Replacement"
        faqs={[
          {
            question: 'When is gutter replacement better than repair?',
            answer:
              'Gutter replacement is recommended when gutters are over 20 years old, have extensive rust or corrosion, multiple sections are pulling away from the house, you have frequent leaks despite repairs, or repair costs approach 50% of replacement cost. New gutters provide decades of worry-free protection and often save money compared to ongoing repairs.',
          },
          {
            question: 'What are the benefits of seamless gutters?',
            answer:
              'Seamless gutters are fabricated on-site to exact measurements with no joints or seams except at corners and downspouts. This eliminates most leak points, provides superior water flow, requires less maintenance, and offers a cleaner appearance. Seamless gutters last longer and perform better than sectional gutters.',
          },
          {
            question: 'How long does gutter replacement take?',
            answer:
              'Most residential gutter replacement projects are completed in 1-2 days depending on home size and complexity. We work efficiently to minimize disruption while ensuring quality installation. Weather conditions may affect timing, but we always complete projects as quickly as possible.',
          },
          {
            question: 'What warranty do you provide on gutter replacement?',
            answer:
              'We provide comprehensive warranties on both materials and labor. Gutter materials typically come with 20-30 year manufacturer warranties, while our installation labor is warranted for 5-10 years depending on the project. We stand behind our work and use only premium materials.',
          },
          {
            question: 'Do you handle permits and inspections?',
            answer:
              'Most gutter replacement projects do not require permits, but we handle all necessary permits and inspections when required. We ensure all work meets local building codes and HOA requirements. Our licensed contractors are familiar with all local regulations.',
          },
          {
            question: 'Can you match gutters to my home\'s style?',
            answer:
              'Absolutely. We offer multiple gutter profiles (K-style, half-round), various sizes, and over 20 color options. Our experts help you select gutters that complement your home\'s architecture while providing optimal performance. Custom colors are available for special projects.',
          },
          {
            question: 'What happens to my old gutters?',
            answer:
              'We carefully remove and dispose of your old gutters in an environmentally responsible manner. Aluminum and copper gutters are recycled whenever possible. We handle all cleanup and disposal as part of our comprehensive gutter replacement service.',
          },
          {
            question: 'Do you offer financing for gutter replacement?',
            answer:
              'Yes, we offer flexible financing options to help make gutter replacement affordable. We work with several financing partners to provide competitive rates and terms. Contact us to discuss financing options that fit your budget and project needs.',
          }
        ]}
      />

      {/* Why Choose Paragon */}
      <WhyParagon
        title="Why Choose Paragon Exterior for Gutter Replacement?"
        titleAs="h2"
        customReasons={[
          {
            icon: require('@heroicons/react/24/solid').CogIcon,
            title: "Expert Gutter Installation Specialists",
            description: "Our licensed gutter contractors specialize in seamless gutter installation using premium materials and proven techniques for lasting performance and protection.",
            keywordPhrase: "expert gutter installation"
          },
          {
            icon: require('@heroicons/react/24/solid').ShieldCheckIcon,
            title: "Premium Gutter Materials & Warranties",
            description: "We install only the highest quality aluminum, copper, and steel gutters with comprehensive manufacturer and labor warranties for complete peace of mind.",
            keywordPhrase: "premium gutter materials"
          },
          {
            icon: require('@heroicons/react/24/solid').HomeModernIcon,
            title: "Complete Gutter System Solutions",
            description: "From consultation to cleanup, we provide complete gutter replacement services including proper sizing, professional installation, and ongoing support.",
            keywordPhrase: "complete gutter replacement"
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