// import Hero from '@/components/service-page/Hero'
// import HeaderText from '@/components/HeaderText'
// import SecondaryText from '@/components/SecondaryText'
// import InfoSection from '@/components/service-page/Info'
// import GetEstimate from '@/components/landing-ui/GetEstimate'
// import type { Metadata } from 'next'
// import React from 'react'

// export const metadata: Metadata = {
//   title: 'Vinyl Siding Installation | Paragon Exterior',
//   description: 'Enhance your home with durable Vinyl Siding. We offer traditional and vertical vinyl siding installation for low-maintenance curb appeal.',
//   keywords: 'vinyl siding, vertical vinyl siding, vinyl siding installation, siding contractors',
//   openGraph: {
//     title: 'Vinyl Siding Installation | Paragon Exterior',
//     description: 'Professional vinyl siding installation including vertical vinyl siding options.',
//     type: 'website',
//     images: ['/images/siding/vinyl-siding.jpg'],
//   },
// }

// export default function Page() {
//   return (
//     <div className="min-h-screen">
//       <Hero
//         mainText="Vinyl Siding"
//         subText="Durable and versatile vinyl siding installed by experts. Ask about our vertical vinyl siding options."
//         imgSrc="/images/siding/vinyl-siding.jpg"
//         imgAlt="Home with vinyl siding installed"
//       />
//       <div className="w-5/6 mx-auto py-16 text-center">
//         <HeaderText as="h1">Vinyl Siding Installation Experts</HeaderText>
//         <SecondaryText>
//           Vinyl siding offers lasting color and minimal upkeep. Our team installs both horizontal and vertical vinyl siding profiles to match your vision and protect your home.
//         </SecondaryText>
//         <HeaderText as="h2" className="mt-12">Benefits of Vinyl Siding</HeaderText>
//         <SecondaryText>
//           With excellent resistance to rot and insects, Vinyl Siding keeps maintenance low while boosting energy efficiency and curb appeal.
//         </SecondaryText>
//       </div>

//       <InfoSection
//         imgSrc="/images/siding/vinyl-siding.jpg"
//         imgAlt="Detail of durable vinyl siding panels"
//         title="Versatile Vinyl Siding"
//         mainContent="Modern vinyl siding provides bold color choices and realistic wood textures without the need for constant upkeep."
//         bottomContent="Impact-resistant panels lock out moisture and never need painting, keeping your exterior vibrant year after year."
//         imagePosition="right"
//       />
//       <div className="py-12">
//         <GetEstimate />
//       </div>
//     </div>
//   )
// }


import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import IncentivesSection from '@/components/service-page/Incentive'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import Row from '@/components/Row'
// import {WhyParagonVinylSiding} from '@/components/WhyParagon'
import type {Metadata} from 'next'
import React from 'react'
import VinylSidingStyles from '@/components/service-page/siding/VinylSiding'

export const metadata: Metadata = {
  title: 'Professional Vinyl Siding Installation | Low Maintenance & Durable',
  description: 'Expert vinyl siding installation services with premium materials and professional installation. Discover vinyl siding cost, styles, and benefits. Free estimates on vinyl siding installation.',
  keywords: 'vinyl siding, vinyl siding installation, vinyl siding cost, vinyl siding contractors, vertical vinyl siding, vinyl siding colors, vinyl siding styles, low maintenance siding',
  openGraph: {
    title: 'Professional Vinyl Siding Installation | Paragon Exterior',
    description: 'Transform your home with professional vinyl siding installation. Low maintenance, durable, and beautiful vinyl siding solutions.',
    type: 'website',
    images: ['/images/siding/vinyl-siding/vinyl-siding-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Vinyl Siding Installation | Paragon Exterior',
    description: 'Expert vinyl siding installation with premium materials and professional service.',
  },
  alternates: {
    canonical: 'https://www.paragonexterior.com/services/vinyl-siding'
  }
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Vinyl Siding Installation",
  "description": "Professional vinyl siding installation services with premium materials, expert installation, and comprehensive warranties.",
  "provider": {
    "@type": "Organization",
    "name": "Paragon Exterior",
    "url": "https://paragonexterior.com"
  },
  "serviceType": "Home Improvement",
  "areaServed": "Mid Atlantic",
  "offers": {
    "@type": "Offer",
    "description": "Free vinyl siding installation estimates with material consultation"
  }
}

export default function VinylSidingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />

      <div className="min-h-screen">
        {/* HERO */}
        <Hero
          mainText="Premium Vinyl Siding Installation"
          subText="Transform your home with professional vinyl siding installation. Durable, low-maintenance, and beautiful vinyl siding solutions that enhance curb appeal and protect your investment."
          imgSrc="/images/siding/vinyl/vinyl-siding-hero.jpg"
          imgAlt="Beautiful home with professional vinyl siding installation"
        />

        {/* MAIN INFO SECTION */}
        <InfoSection
          imgSrc="/images/siding/vinyl-siding/vinyl-siding-installation.webp"
          imgAlt="Professional vinyl siding installation process"
          titleAs="h1"
          title="Expert Vinyl Siding Installation You Can Trust"
          mainContent="Vinyl siding remains America's most popular exterior siding choice, and for good reason. Our professional vinyl siding installation combines durability, beauty, and affordability in one comprehensive solution. With hundreds of colors, textures, and styles available, vinyl siding installation offers endless design possibilities while requiring minimal maintenance."
          bottomContent="Our vinyl siding contractors are trained in the latest installation techniques, ensuring proper ventilation, moisture management, and long-lasting performance. From traditional horizontal vinyl siding to modern vertical vinyl siding applications, we deliver vinyl siding installation that protects your home and enhances its value for decades to come."
          imagePosition="right"
        />

        {/* VINYL SIDING STYLES COMPONENT */}
        <VinylSidingStyles />

        {/* VINYL SIDING BENEFITS */}
        <IncentivesSection
          className="py-16"
          title="Why Choose Vinyl Siding for Your Home?"
          titleAs="h2"
          subtitle="Vinyl siding installation offers unmatched benefits that make it the smart choice for homeowners seeking beauty, durability, and value. Discover why millions of homeowners trust vinyl siding for their exterior needs."
          heroImage={{
            alt: "Benefits of professional vinyl siding installation",
            src: "/images/siding/vinyl-siding/vinyl-benefits.webp"
          }}
          incentives={[
            {
              name: "Low Maintenance Beauty",
              description: "Vinyl siding never needs painting or staining. A simple wash keeps your vinyl siding looking new for decades with minimal upkeep required.",
              imageSrc: "/images/siding/icons/low-maintenance.svg",
              imageAlt: "Low maintenance vinyl siding benefits"
            },
            {
              name: "Exceptional Durability",
              description: "Quality vinyl siding resists rot, insects, and weather damage while maintaining its color and structural integrity for 20-30 years or more.",
              imageSrc: "/images/siding/icons/durability.svg",
              imageAlt: "Durable vinyl siding installation"
            },
            {
              name: "Cost-Effective Investment",
              description: "Vinyl siding installation offers excellent value with competitive pricing, energy savings, and increased home value that pays dividends over time.",
              imageSrc: "/images/siding/icons/cost-effective.svg",
              imageAlt: "Cost-effective vinyl siding installation"
            },
          ]}
          imagePosition="left"
        />

        {/* VINYL SIDING COST AND VALUE */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <HeaderText as="h2" className="mb-6">
                Vinyl Siding Cost and Investment Value
              </HeaderText>
              <SecondaryText className="max-w-4xl mx-auto">
                Understanding vinyl siding cost helps you make informed decisions about your home improvement investment.
                Our transparent pricing ensures you get the best value for your vinyl siding installation project.
              </SecondaryText>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Budget-Friendly Options</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$3-6</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  Basic vinyl siding installation with standard colors and profiles. Perfect for cost-conscious homeowners seeking quality and value.
                </SecondaryText>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primaryblue">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Premium Selection</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$6-9</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  High-quality vinyl siding with enhanced durability, realistic textures, and premium color options for superior curb appeal.
                </SecondaryText>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Luxury Vinyl Siding</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$9-12</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  Top-tier vinyl siding installation with architectural details, custom colors, and maximum thickness for ultimate performance.
                </SecondaryText>
              </div>
            </div>

            <div className="text-center mt-8">
              <SecondaryText className="text-gray-600">
                *Vinyl siding cost includes materials and professional installation. Final pricing depends on home size,
                complexity, and material selection. All estimates include removal of old siding when applicable.
              </SecondaryText>
            </div>
          </div>
        </section>

        {/* VINYL SIDING COLORS AND STYLES */}
        <Row
          title="Endless Vinyl Siding Colors and Styles"
          description="Modern vinyl siding offers hundreds of color options that never fade or need repainting. From classic whites and earth tones to bold contemporary colors, vinyl siding installation lets you achieve any aesthetic vision. Choose from traditional horizontal vinyl siding, trendy vertical vinyl siding, or distinctive board-and-batten styles."
          imageSrc="/images/siding/vinyl-siding/vinyl-colors.webp"
          className="py-16"
        />

        {/* INSTALLATION PROCESS */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <HeaderText as="h2" className="mb-6">
                Our Professional Vinyl Siding Installation Process
              </HeaderText>
              <SecondaryText className="max-w-4xl mx-auto">
                Proper vinyl siding installation requires expertise, precision, and attention to detail. Our certified
                vinyl siding contractors follow proven installation methods that ensure lasting performance and beauty.
              </SecondaryText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Design Consultation",
                  description: "Free vinyl siding consultation with material selection, color matching, and project planning tailored to your home."
                },
                {
                  step: "2",
                  title: "Preparation & Removal",
                  description: "Careful removal of existing siding, surface preparation, and installation of proper moisture barriers and insulation."
                },
                {
                  step: "3",
                  title: "Expert Installation",
                  description: "Professional vinyl siding installation using manufacturer-approved techniques for optimal performance and appearance."
                },
                {
                  step: "4",
                  title: "Quality Inspection",
                  description: "Thorough quality inspection, trim installation, and final cleanup ensuring your complete satisfaction with the results."
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primaryblue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{process.step}</span>
                  </div>
                  <HeaderText variant="small" className="mb-4">{process.title}</HeaderText>
                  <SecondaryText className="text-sm">{process.description}</SecondaryText>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE AND CARE */}
        <Row
          title="Vinyl Siding Maintenance: Simple and Effective"
          description="One of the greatest advantages of vinyl siding installation is the minimal maintenance required. Annual cleaning with soap and water keeps vinyl siding looking new. No painting, staining, or sealing needed - just years of beautiful, worry-free performance that saves you time and money."
          imageSrc="/images/siding/vinyl-siding/vinyl-maintenance.webp"
          className="py-16"
          reverse
        />

        {/* WHY CHOOSE US */}
        {/* <WhyParagonVinylSiding
          title="Why Choose Paragon Exterior for Vinyl Siding Installation?"
          subTitle="As certified vinyl siding contractors, we bring expertise, quality materials, and proven installation techniques to every project. Our vinyl siding installation services are backed by comprehensive warranties and decades of satisfied customers."
        /> */}

        {/* VINYL SIDING FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <HeaderText as="h2" className="text-center mb-12">
              Frequently Asked Questions About Vinyl Siding
            </HeaderText>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <HeaderText variant="small" className="mb-3 text-primaryblue">
                  How long does vinyl siding installation take?
                </HeaderText>
                <SecondaryText>
                  Most vinyl siding installation projects are completed in 3-7 days, depending on home size and complexity.
                  Our vinyl siding contractors work efficiently while maintaining the highest quality standards.
                </SecondaryText>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <HeaderText variant="small" className="mb-3 text-primaryblue">
                  What affects vinyl siding cost?
                </HeaderText>
                <SecondaryText>
                  Vinyl siding cost depends on material quality, home size, architectural complexity, and additional features
                  like insulation or trim work. We provide detailed estimates that break down all costs transparently.
                </SecondaryText>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <HeaderText variant="small" className="mb-3 text-primaryblue">
                  Is vertical vinyl siding more expensive than horizontal?
                </HeaderText>
                <SecondaryText>
                  Vertical vinyl siding installation typically costs slightly more due to additional cutting and specialized
                  installation techniques, but the dramatic visual impact often justifies the modest price difference.
                </SecondaryText>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <HeaderText variant="small" className="mb-3 text-primaryblue">
                  How do I choose vinyl siding colors?
                </HeaderText>
                <SecondaryText>
                  Our design experts help you select vinyl siding colors that complement your home's architecture,
                  neighborhood aesthetic, and personal preferences. We provide color samples and digital visualizations.
                </SecondaryText>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 px-4 bg-primaryblue">
          <div className="max-w-4xl mx-auto text-center">
            <HeaderText className="text-white mb-6">
              Ready for Your Vinyl Siding Installation?
            </HeaderText>
            <SecondaryText className="text-blue-100 mb-8">
              Transform your home with professional vinyl siding installation that combines beauty, durability, and value.
              Get your free consultation and discover why homeowners trust us for quality vinyl siding installation.
            </SecondaryText>
            <a
              href="/estimate"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-4 text-xl font-semibold rounded-lg transition-colors duration-200"
            >
              Get Free Vinyl Siding Estimate
            </a>
          </div>
        </section>

        {/* GET ESTIMATE */}
        <div className="py-12">
          <GetEstimate />
        </div>
      </div>
    </>
  )
}