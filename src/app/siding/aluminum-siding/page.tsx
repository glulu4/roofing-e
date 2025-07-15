

import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import IncentivesSection from '@/components/service-page/Incentive'
import Row from '@/components/Row'
import FAQSection from '@/components/FAQSection'
import {WhyParagonSiding} from '@/components/WhyParagon'
import type {Metadata} from 'next'
import React from 'react'
import Image from 'next/image'
import {FaPallet} from 'react-icons/fa'
import {SwatchBook, Wrench} from 'lucide-react'
import {WrenchScrewdriverIcon} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Aluminum Siding Installation Services | Durable Metal Siding',
  description: 'Expert aluminum siding installation services. Discover the benefits of durable, fire-resistant aluminum siding for your home. Professional installation with warranty included.',
  keywords: 'aluminum siding, aluminum siding installation, metal siding, aluminum siding contractors, residential aluminum siding, aluminum siding repair, aluminum siding replacement',
  openGraph: {
    title: 'Professional Aluminum Siding Installation | Paragon Exterior',
    description: 'Transform your home with professional aluminum siding installation. Fire-resistant, pest-proof, and low-maintenance metal siding solutions.',
    type: 'website',
    images: ['/images/siding/aluminum-siding.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Aluminum Siding Installation | Paragon Exterior',
    description: 'Expert aluminum siding installation services with durable, fire-resistant metal siding solutions.',
  },
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Aluminum Siding Installation",
  "description": "Professional aluminum siding installation services providing durable, fire-resistant, and low-maintenance metal siding solutions for residential homes.",
  "provider": {
    "@type": "Organization",
    "name": "Paragon Exterior",
    "url": "https://paragonexterior.com"
  },
  "areaServed": [
    {"@type": "State", "name": "Pennsylvania"},
    {"@type": "State", "name": "New Jersey"},
    {"@type": "State", "name": "Delaware"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Aluminum Siding Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aluminum Siding Installation",
          "description": "Professional installation of aluminum siding with fire resistance and pest protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aluminum Siding Repair",
          "description": "Expert repair services for damaged aluminum siding panels"
        }
      }
    ]
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />

      <div className="min-h-screen">
        <Hero
          mainText="Professional Aluminum Siding Installation"
          subText="Discover the superior protection and modern appeal of aluminum siding. Our expert installation services deliver fire-resistant, pest-proof, and low-maintenance metal siding solutions that enhance your home's durability and curb appeal."
          imgSrc="/images/siding/aluminum/hero.webp"
          imgAlt="Professional aluminum siding installation on modern home"
        />

        {/* Enhanced intro section with keyword optimization */}
        <div className="w-5/6 mx-auto py-16 text-center">
          <HeaderText as="h1">Expert Aluminum Siding Installation Services</HeaderText>
          <SecondaryText>
            Transform your home with professional <strong>aluminum siding installation</strong> that combines lightweight durability with exceptional performance. Our skilled contractors specialize in <strong>aluminum siding</strong> solutions that resist fire, pests, and harsh weather while maintaining their attractive appearance for decades.
          </SecondaryText>

          <HeaderText as="h2" className="mt-12">Why Choose Aluminum Siding for Your Home?</HeaderText>
          <SecondaryText>
            <strong>Aluminum siding</strong> offers unmatched advantages including superior fire resistance, pest immunity, and virtually maintenance-free performance. From modern residential homes to traditional architectures, <strong>aluminum siding</strong> provides the perfect blend of protection and aesthetic appeal.
          </SecondaryText>
        </div>

        {/* Enhanced InfoSection with more aluminum siding content */}
        <InfoSection
          imgSrc="/images/siding/aluminum/aluminum1.webp"
          imgAlt="Close-up of aluminum siding installation showing professional craftsmanship"
          title="Professional Aluminum Siding Installation Excellence"
          titleAs="h2"
          mainContent={
            <div>
              <p>
                Our professional <strong>aluminum siding installation</strong> process ensures optimal performance and longevity. <strong>Aluminum siding</strong> delivers lightweight durability that wonsiding&apos;st crack, warp, or rot like traditional materials, while providing exceptional resistance to fire, insects, and severe weather conditions.
              </p>
              <p className="mt-4">
                Each <strong>aluminum siding</strong> panel is precision-installed using advanced techniques that prevent thermal expansion issues and ensure proper drainage. Our certified installers understand the unique properties of <strong>aluminum siding</strong> and apply specialized methods for secure, long-lasting installation.
              </p>
            </div>
          }
          bottomContent="From initial consultation to final inspection, our aluminum siding installation team prioritizes quality craftsmanship and customer satisfaction. We guarantee that your new aluminum siding will enhance your home's protection and value for years to come."
          imagePosition="right"
        />

        {/* Aluminum Siding Advantages Section */}
        {/* <IncentivesSection
          className="py-16"
          title="Aluminum Siding: Superior Protection and Performance"
          titleAs="h2"
          subtitle="Professional aluminum siding installation provides exceptional benefits that make it the smart choice for discerning homeowners seeking durable, attractive, and low-maintenance exterior solutions."
          heroImage={{
            alt: "Aluminum siding installation showcasing fire resistance and durability",
            src: "/images/siding/aluminum/aluminum2.webp"
          }}
          incentives={[
            {
              name: "Fire & Pest Resistance",
              description: "Aluminum siding provides superior fire resistance and complete immunity to termites, carpenter ants, and other pests that can damage traditional siding materials.",
              imageSrc: "/images/siding/icons/fire-shield.svg",
              imageAlt: "Fire resistance aluminum siding icon"
            },
            {
              name: "Weather Durability",
              description: "Engineered to withstand extreme weather conditions including hail, high winds, and temperature fluctuations without cracking, warping, or deteriorating.",
              imageSrc: "/images/siding/icons/weather-shield.svg",
              imageAlt: "Weather resistant aluminum siding icon"
            },
            {
              name: "Low Maintenance",
              description: "Aluminum siding requires minimal upkeep with no painting, staining, or sealing needed. Simple cleaning maintains its appearance and performance indefinitely.",
              imageSrc: "/images/siding/icons/low-maintenance.svg",
              imageAlt: "Low maintenance aluminum siding icon"
            },
            {
              name: "Energy Efficiency",
              description: "Reflective properties help reduce cooling costs while optional insulation backing enhances thermal performance for year-round energy savings.",
              imageSrc: "/images/siding/icons/energy-efficient.svg",
              imageAlt: "Energy efficient aluminum siding icon"
            }
          ]}
          imagePosition="left"
          incentiveColumns={2}
        /> */}

        {/* Aluminum Siding vs Other Materials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <HeaderText as="h2">Why Aluminum Siding Outperforms Other Materials</HeaderText>
              <SecondaryText>
                Compare <strong>aluminum siding</strong> advantages against traditional siding materials and discover why professional <strong>aluminum siding installation</strong> delivers superior long-term value.
              </SecondaryText>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primaryblue mb-3">Aluminum Siding vs Vinyl</h3>
                    <p className="text-gray-700">
                      <strong>Aluminum siding</strong> offers superior fire resistance and wonsiding&apos;st melt or deform in extreme heat, unlike vinyl siding that can warp or melt.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primaryblue mb-3">Aluminum Siding vs Wood</h3>
                    <p className="text-gray-700">
                      Unlike wood siding, <strong>aluminum siding</strong> never rots, warps, or provides food for insects, eliminating costly maintenance and replacement cycles.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primaryblue mb-3">Aluminum Siding vs Fiber Cement</h3>
                    <p className="text-gray-700">
                      <strong>Aluminum siding</strong> is significantly lighter than fiber cement, reducing structural stress while providing equal or superior weather resistance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  width={600}
                  height={400}
                  src="/images/siding/aluminum/aluminum3.webp"
                  alt="Aluminum siding comparison showing durability advantages"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Row */}
        <Row
          title="Our Professional Aluminum Siding Installation Process"
          description={
            <div>
              <p>
                Our certified <strong>aluminum siding installation</strong> process ensures optimal performance and longevity. We begin with comprehensive site assessment, followed by precise measurement and material preparation specific to <strong>aluminum siding</strong> requirements.
              </p>
              <p className="mt-4">
                Each <strong>aluminum siding</strong> panel is installed using specialized techniques that account for thermal expansion, proper drainage, and secure fastening. Our attention to detail during <strong>aluminum siding installation</strong> prevents common issues like buckling, loose panels, and water infiltration.
              </p>
            </div>
          }
          imageSrc="/images/siding/aluminum/aluminum4.webp"
          headerColor="text-primaryblue"
          bodyColor="text-gray-700"
          reverse
        />

        {/* Aluminum Siding Maintenance Row */}
        <Row
          title="Aluminum Siding Maintenance and Longevity"
          description={
            <div>
              <p>
                One of the greatest advantages of <strong>aluminum siding</strong> is its minimal maintenance requirements. Unlike wood or vinyl, <strong>aluminum siding</strong> doesnsiding&apos;st need regular painting, staining, or sealing to maintain its protective properties and appearance.
              </p>
              <p className="mt-4">
                Professional <strong>aluminum siding installation</strong> includes protective coatings that resist fading, chalking, and corrosion. Simple periodic cleaning with mild soap and water keeps your <strong>aluminum siding</strong> looking new for decades.
              </p>
            </div>
          }
          imageSrc="/images/siding/aluminum/aluminum5.webp"

          headerColor="text-primaryblue"
          bodyColor="text-gray-700"
          className="py-16"

        />

        {/* Colors and Styles Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <HeaderText as="h2">Aluminum Siding Colors and Styles</HeaderText>
              <SecondaryText>
                Modern <strong>aluminum siding</strong> offers extensive design flexibility with numerous colors, textures, and profiles. Our <strong>aluminum siding installation</strong> experts help you choose the perfect style to complement your homesiding&apos;ss architecture.
              </SecondaryText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                  <SwatchBook className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primaryblue mb-3">Color Options</h3>
                <p className="text-gray-700">
                  Choose from dozens of fade-resistant colors that maintain their vibrancy throughout your <strong>aluminum sidingsiding&apos;ss</strong> lifespan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPallet className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primaryblue mb-3">Profile Styles</h3>
                <p className="text-gray-700">
                  Traditional horizontal, vertical, and custom profiles available to match any architectural style or design preference.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-white " />
                </div>
                <h3 className="text-xl font-bold text-primaryblue mb-3">Texture Options</h3>
                <p className="text-gray-700">
                  Smooth, embossed, and wood-grain textures provide authentic appearance with <strong>aluminum sidingsiding&apos;ss</strong> superior performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Paragon for Aluminum Siding */}
        <WhyParagonSiding
          title="Why Choose Paragon Exterior for Aluminum Siding Installation?"
          subTitle="Our aluminum siding installation experts combine years of experience with cutting-edge techniques to deliver superior results. We understand the unique properties of aluminum siding and ensure every installation meets the highest standards of quality and durability."
          titleAs="h2"
        />

        {/* Aluminum Siding FAQ */}
        <AluminumSidingFAQ />


        <div className="py-12">
          <GetEstimate />
        </div>
      </div>
    </>
  )
}

// Aluminum Siding FAQ Component
function AluminumSidingFAQ() {
  const aluminumSidingFaqData = [
    {
      question: "What are the main benefits of aluminum siding?",
      answer: "Aluminum siding offers superior fire resistance, complete pest immunity, exceptional weather durability, and virtually maintenance-free performance. It won't rot, warp, or crack like other materials, making it an excellent long-term investment for your home."
    },
    {
      question: "How long does aluminum siding installation take?",
      answer: "Professional aluminum siding installation typically takes 7-14 days depending on your home's size and complexity. Our experienced installers work efficiently while ensuring proper installation techniques for optimal performance."
    },
    {
      question: "Is aluminum siding more expensive than other materials?",
      answer: "While aluminum siding may have higher upfront costs than vinyl, it offers superior longevity and virtually no maintenance costs over time. The fire resistance, pest immunity, and durability make aluminum siding an excellent long-term value."
    },
    {
      question: "Does aluminum siding require special maintenance?",
      answer: "Aluminum siding requires minimal maintenance - just occasional cleaning with mild soap and water. Unlike wood siding, it never needs painting, staining, or sealing, saving you time and money over its lifespan."
    },
    {
      question: "Can aluminum siding be installed in any climate?",
      answer: "Yes, aluminum siding performs excellently in all climates. It resists temperature extremes, won't freeze-crack in cold weather, and reflects heat in hot climates, making it ideal for Pennsylvania's variable weather conditions."
    },
    {
      question: "What colors and styles are available for aluminum siding?",
      answer: "Modern aluminum siding comes in dozens of fade-resistant colors and various profiles including horizontal, vertical, and specialty styles. We help you choose colors and textures that complement your home's architecture."
    },
    {
      question: "How does aluminum siding compare to vinyl siding?",
      answer: "Aluminum siding offers superior fire resistance, won't melt in extreme heat, and provides better dent resistance than vinyl. While vinyl may be less expensive initially, aluminum siding's durability and performance advantages often provide better long-term value."
    },
    {
      question: "Do you offer warranties on aluminum siding installation?",
      answer: "Yes, we provide comprehensive warranties on both aluminum siding materials and our installation workmanship. This includes protection against defects, proper installation, and performance guarantees for your peace of mind."
    }
  ];

  return (
    <div className="py-16">
      <FAQSection
        title="Aluminum Siding Installation FAQ"
        faqs={aluminumSidingFaqData}
      />
    </div>
  );
}