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
  title: 'Downspout Installation & Repair Services Near Me',
  description:
    'Do you need new gutters and downspouts? Paragon Exterior can provide expert downspout installation services in PA, NJ & DE. Free estimates available.',
  keywords:
    'downspout installation, downspout repair, downspout replacement, downspout services, gutter downspouts, downspout extensions, buried downspouts, underground drainage, downspout cleaning, downspout maintenance, aluminum downspouts, copper downspouts, downspout elbow repair, downspout disconnect, rain barrel connection, foundation drainage, Pennsylvania downspout services, New Jersey downspout installation, Delaware downspout repair, Philadelphia downspout contractor, downspout cost, downspout problems, water drainage solutions, basement flooding prevention',
  openGraph: {
    title: 'Professional Downspout Services | Paragon Exterior PA, NJ, DE',
    description:
      'Expert downspout installation, repair & drainage solutions serving Pennsylvania, New Jersey & Delaware. Protect your foundation with professional downspout services.',
    type: 'website',
    images: ['/images/house4.jpeg'],
    url: 'https://paragonexterior.com/gutters/downspout-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Downspout Services | Paragon Exterior',
    description:
      'Expert downspout installation, repair & drainage solutions in PA, NJ & DE. Protect your foundation with professional downspout services.',
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
            "name": "Paragon Exterior Downspout Services",
            "description": "Professional downspout installation, repair, and drainage solutions in Pennsylvania, New Jersey, and Delaware",
            "url": "https://paragonexterior.com/gutters/downspout-services",
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
              "name": "Downspout Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Downspout Installation",
                    "description": "Professional installation of aluminum, copper, and steel downspouts with proper sizing and placement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Underground Drainage Systems",
                    "description": "Buried downspout systems and underground drainage to carry water away from foundations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Downspout Repair & Maintenance",
                    "description": "Expert repair of damaged downspouts, elbows, and drainage connections"
                  }
                }
              ]
            }
          })
        }}
      />

      <Hero
        mainText="Professional Downspout Installation & Repair Services"
        subText="Expert downspout services including installation, repair, extensions, and underground drainage systems. Protect your foundation and prevent water damage with professional downspout solutions in Pennsylvania, New Jersey, and Delaware."
        imgSrc="/images/gutters/down/hero.webp"
        imgAlt="Professional downspout installation and repair services by licensed contractors"
      />

      <InfoSection
        imgSrc="/images/gutters/down/img1.webp"
        imgAlt="Professional downspout installation on residential home"
        title="Expert Downspout Installation & Repair Services"
        titleAs="h1"
        mainContent="Properly functioning downspouts are critical for protecting your home's foundation, basement, and landscaping from water damage. Our licensed contractors provide comprehensive downspout services including new installation, repair of damaged systems, extensions, underground drainage, and complete replacement. We serve residential and commercial properties across Pennsylvania, New Jersey, and Delaware with expert craftsmanship and premium materials."
        bottomContent="From simple downspout repairs to complex underground drainage systems, our experienced team ensures your home's water management system functions flawlessly. We install aluminum, copper, and steel downspouts with proper sizing, strategic placement, and connections to effectively channel water away from your foundation and prevent costly water damage."
        imagePosition="right"
      />

      {/* Downspout Services with Incentives */}
      <IncentivesSection
        title="Complete Downspout Services & Drainage Solutions"
        titleAs="h2"
        subtitle="From basic downspout installation to sophisticated underground drainage systems, we provide comprehensive solutions that protect your home from water damage and foundation problems."
        heroImage={{
          src: "/images/gutters/down/img2.webp",
          alt: "Professional downspout installation and drainage solutions"
        }}
        incentives={[
          {
            name: "Downspout Installation & Replacement",
            imageSrc: "/images/window/window-replace/icons/house-line.svg",
            imageAlt: "Downspout installation icon",
            description: "Professional installation of new downspouts with proper sizing, placement, and connections. We install aluminum, copper, and steel downspouts to match your gutter system perfectly."
          },
          {
            name: "Underground Drainage Systems",
            imageSrc: "/images/siding/engineered/icons/drop.svg",
            imageAlt: "Underground drainage icon",
            description: "Buried downspout systems and underground drainage that carry water far from your foundation. Prevents basement flooding and protects your home's structural integrity."
          },
          {
            name: "Downspout Repair & Maintenance",
            imageSrc: "/images/window/window-replace/icons/shield-check.svg",
            imageAlt: "Downspout repair icon",
            description: "Expert repair of damaged downspouts, loose connections, clogged systems, and broken elbows. Regular maintenance keeps your drainage system functioning optimally."
          }
        ]}
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* Why Downspouts Are Critical */}
      <Row
        title="Why Proper Downspouts Are Critical for Your Home"
        description="Downspouts are your home's primary defense against water damage. Without properly functioning downspouts, rainwater from your roof can pool around your foundation, causing cracks, basement flooding, landscape erosion, and structural damage. Professional downspout installation ensures water is carried safely away from your home, protecting your foundation, basement, and landscaping while preventing thousands of dollars in potential water damage repairs."
        imageSrc="/images/gutters/down/img3.webp"
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Downspout Problems and Solutions */}
      <Row
        title="Common Downspout Problems We Solve"
        description="Downspout issues can cause serious water damage if not addressed promptly. We solve problems including: clogged or blocked downspouts, loose or disconnected elbows, inadequate drainage causing water pooling, damaged or bent downspouts from storms, insufficient downspout capacity for heavy rainfall, and poor placement causing foundation problems. Our expert repairs and installations ensure optimal water management and long-term protection for your property."
        imageSrc="/images/gutters/down/img4.webp"
        reverse
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Downspout Services Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Comprehensive Downspout Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert downspout services cover every aspect of water drainage and foundation protection, from basic repairs to sophisticated underground systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">New Downspout Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional installation of new downspouts with proper sizing, strategic placement, and secure connections to optimize water flow.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Custom sizing for roof area and rainfall</li>
                <li>• Strategic placement for optimal drainage</li>
                <li>• Quality materials: aluminum, copper, steel</li>
                <li>• Secure mounting and connections</li>
                <li>• Color matching to existing gutters</li>
                <li>• Proper splash blocks and extensions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Downspout Repair & Replacement</h3>
              <p className="text-gray-600 mb-4">
                Expert repair of damaged, loose, or clogged downspouts to restore proper water drainage and prevent foundation damage.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Elbow and connection repairs</li>
                <li>• Straightening bent or damaged sections</li>
                <li>• Clearing clogs and blockages</li>
                <li>• Reattaching loose downspouts</li>
                <li>• Replacing damaged components</li>
                <li>• Storm damage restoration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Underground Drainage Systems</h3>
              <p className="text-gray-600 mb-4">
                Sophisticated buried downspout systems that carry water far from your foundation through underground piping.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Buried downspout extensions</li>
                <li>• Underground drainage piping</li>
                <li>• French drain connections</li>
                <li>• Catch basin installation</li>
                <li>• Proper grading and slope</li>
                <li>• Pop-up emitters for discharge</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Downspout Extensions & Accessories</h3>
              <p className="text-gray-600 mb-4">
                Custom extensions and accessories to direct water away from foundations, walkways, and landscaping areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Flexible and rigid extensions</li>
                <li>• Decorative splash blocks</li>
                <li>• Rain barrel connections</li>
                <li>• Downspout filters and screens</li>
                <li>• Leaf guards and debris catchers</li>
                <li>• Custom length extensions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Commercial Downspout Services</h3>
              <p className="text-gray-600 mb-4">
                Large-scale downspout installation and repair for commercial buildings, warehouses, and multi-family properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Large capacity downspout systems</li>
                <li>• Commercial-grade materials</li>
                <li>• Multi-story building solutions</li>
                <li>• Compliance with building codes</li>
                <li>• Maintenance agreements available</li>
                <li>• Emergency repair services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Drainage System Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance and cleaning services to keep your downspout system functioning optimally year-round.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Seasonal cleaning and inspection</li>
                <li>• Clog removal and prevention</li>
                <li>• Connection tightening and adjustment</li>
                <li>• Preventive maintenance programs</li>
                <li>• Storm damage assessment</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downspout Materials and Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Downspout Materials & Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from premium downspout materials designed for durability, performance, and aesthetic appeal to complement your home&apos;s style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primaryblue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Al</span>
              </div>
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Aluminum Downspouts</h3>
              <p className="text-gray-600 mb-6">
                Most popular choice offering excellent durability, corrosion resistance, and affordability. Available in multiple colors and sizes.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Lightweight yet durable construction</li>
                <li>• Rust and corrosion resistant</li>
                <li>• Available in 2x3&apos; and 3x4&apos; sizes</li>
                <li>• Over 20 color options available</li>
                <li>• Cost-effective premium choice</li>
                <li>• Easy maintenance and repair</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">Cu</span>
              </div>
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Copper Downspouts</h3>
              <p className="text-gray-600 mb-6">
                Premium choice for luxury homes offering unmatched beauty and longevity. Develops attractive patina over time.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• 50+ year lifespan with minimal maintenance</li>
                <li>• Naturally antimicrobial properties</li>
                <li>• Develops beautiful patina finish</li>
                <li>• Increases home value significantly</li>
                <li>• Superior weather resistance</li>
                <li>• Environmentally friendly material</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">St</span>
              </div>
              <h3 className="text-2xl font-semibold text-primaryblue mb-4">Steel Downspouts</h3>
              <p className="text-gray-600 mb-6">
                Heavy-duty option for extreme weather conditions and commercial applications. Galvanized coating provides excellent protection.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Superior strength and durability</li>
                <li>• Galvanized coating prevents rust</li>
                <li>• Ideal for harsh weather conditions</li>
                <li>• Commercial and industrial grade</li>
                <li>• Handles heavy water volume</li>
                <li>• Professional-grade performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Service Areas */}
      <section className="py-16 bg-primaryblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Downspout Service Areas</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional downspout installation and repair services throughout Pennsylvania, New Jersey, and Delaware
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Pennsylvania</h3>
              <p className="text-blue-100 mb-4">Expert downspout services throughout PA including:</p>
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
              <p className="text-blue-100 mb-4">Professional downspout installation in NJ including:</p>
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
              <p className="text-blue-100 mb-4">Downspout services in DE including:</p>
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
        title="Frequently Asked Questions About Downspout Services"
        faqs={[
          {
            question: 'How often should downspouts be inspected and maintained?',
            answer:
              'We recommend professional downspout inspection twice a year - in spring and fall - and after major storms. Regular inspection helps identify clogs, loose connections, or damage before they cause water damage. Maintenance includes cleaning, checking connections, and ensuring proper water flow.',
          },
          {
            question: 'Can you install buried downspout extensions and underground drainage?',
            answer:
              'Yes, we specialize in underground drainage systems including buried downspout extensions, catch basins, and underground piping. These systems carry water far from your foundation through buried pipes, preventing basement flooding and foundation damage while maintaining your landscape aesthetics.',
          },
          {
            question: 'What downspout materials do you recommend for different situations?',
            answer:
              'We install aluminum, copper, and steel downspouts matched to your gutter system. Aluminum is most popular for its durability and affordability. Copper offers premium appearance and longevity for luxury homes. Steel provides maximum strength for commercial applications or extreme weather areas.',
          },
          {
            question: 'How do you determine proper downspout sizing and placement?',
            answer:
              'Proper sizing depends on roof area, local rainfall intensity, and gutter capacity. Generally, one downspout handles 600-800 square feet of roof area. We calculate your specific needs and strategically place downspouts to ensure optimal drainage while considering architecture and landscaping.',
          },
          {
            question: 'Do you provide downspout services for commercial properties?',
            answer:
              'Absolutely. We provide comprehensive downspout services for commercial buildings, warehouses, and multi-family properties. Commercial projects often require larger capacity systems, special materials, and compliance with building codes - all areas where our expertise ensures proper installation.',
          },
          {
            question: 'What causes downspouts to become clogged or damaged?',
            answer:
              'Common causes include leaves and debris buildup, ice dams in winter, improper installation, storm damage, and age-related deterioration. Regular maintenance prevents most problems, while professional repair addresses damage from storms or wear to restore proper function.',
          },
          {
            question: 'Can downspouts be connected to rain barrels or drainage systems?',
            answer:
              'Yes, we can connect downspouts to rain barrels for water collection, French drains for landscaping, or storm water management systems. These connections help manage runoff while providing water conservation benefits and meeting local storm water requirements.',
          },
          {
            question: 'What warranty do you provide on downspout installation and repair?',
            answer:
              'We provide comprehensive warranties on both materials and labor. Downspout materials typically come with manufacturer warranties, while our installation labor is warranted for several years. We stand behind our work and use only quality materials for lasting performance.',
          }
        ]}
      />

      {/* Why Choose Paragon */}
      <WhyParagon
        title="Why Choose Paragon Exterior for Downspout Services?"
        titleAs="h2"
        customReasons={[
          {
            icon: require('@heroicons/react/24/solid').WrenchScrewdriverIcon,
            title: "Expert Downspout Specialists",
            description: "Our licensed contractors specialize in all aspects of downspout installation, repair, and drainage solutions using premium materials and proven techniques.",
            keywordPhrase: "expert downspout installation"
          },
          {
            icon: require('@heroicons/react/24/solid').HomeModernIcon,
            title: "Complete Drainage Solutions",
            description: "From basic downspout repair to sophisticated underground drainage systems, we provide comprehensive solutions that protect your foundation and property.",
            keywordPhrase: "complete drainage solutions"
          },
          {
            icon: require('@heroicons/react/24/solid').ShieldCheckIcon,
            title: "Foundation Protection Guarantee",
            description: "Our downspout services are designed to prevent water damage and protect your foundation with reliable drainage systems backed by comprehensive warranties.",
            keywordPhrase: "foundation protection guarantee"
          },
        ]}

      />

      {/* Call to Action */}
      <GetEstimate/>
      
      </div>
      
    );
}