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
import FAQSection from '@/components/FAQSection'
import WhyParagon from '@/components/WhyParagon'

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
          imgSrc="/images/siding/vinyl/hero.jpg"
          imgAlt="Beautiful home with professional vinyl siding installation"
        />

        {/* MAIN INFO SECTION */}
        <InfoSection
          imgSrc="/images/siding/vinyl/vinyl1.webp"
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
            src: "/images/siding/vinyl/vinyl2.webp"
          }}
          incentives={[
            {
              name: "Low Maintenance Beauty",
              description: "Vinyl siding never needs painting or staining. A simple wash keeps your vinyl siding looking new for decades with minimal upkeep required.",
              imageSrc: "/images/siding/vinyl/icons/paint-brush-broad.svg",
              imageAlt: "Low maintenance vinyl siding benefits"
            },
            {
              name: "Exceptional Durability",
              description: "Quality vinyl siding resists rot, insects, and weather damage while maintaining its color and structural integrity for 20-30 years or more.",
              imageSrc: "/images/siding/vinyl/icons/shield-check.svg",
              imageAlt: "Durable vinyl siding installation"
            },
            {
              name: "Cost-Effective Investment",
              description: "Vinyl siding installation offers excellent value with competitive pricing, energy savings, and increased home value that pays dividends over time.",
              imageSrc: "/images/siding/vinyl/icons/money.svg",
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
                Vinyl siding cost includes materials and professional installation. Final pricing depends on home size,
                complexity, and material selection. All estimates include removal of old siding when applicable.
              </SecondaryText>
            </div>
          </div>
        </section>

        {/* VINYL SIDING COLORS AND STYLES */}
        <Row
          title="Endless Vinyl Siding Colors and Styles"
          description="Modern vinyl siding offers hundreds of color options that never fade or need repainting. From classic whites and earth tones to bold contemporary colors, vinyl siding installation lets you achieve any aesthetic vision. Choose from traditional horizontal vinyl siding, trendy vertical vinyl siding, or distinctive board-and-batten styles."
          imageSrc="/images/siding/vinyl/vinyl3.webp"
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
          imageSrc="/images/siding/vinyl/vinyl4.avif"
          className="py-16"
          reverse
        />
        <VinylSidingFAQ />

        {/* WHY CHOOSE US */}
        <WhyParagon
          title="Why Choose Paragon Exterior for Vinyl Siding Installation?"
          subTitle="As certified vinyl siding contractors, we bring expertise, quality materials, and proven installation techniques to every project. Our vinyl siding installation services are backed by comprehensive warranties and decades of satisfied customers."
        />





        {/* GET ESTIMATE */}
        <div className="py-12">
          <GetEstimate />
        </div>
      </div>
    </>
  )
}


function VinylSidingFAQ() {
  const vinylSidingFaqData = [
    {
      question: "What are the pros and cons of vinyl siding?",
      answer: "Pros of vinyl siding include low maintenance, affordability, wide color selection, moisture resistance, and easy installation. Cons include potential for cracking in extreme cold, limited repair options (damaged sections often need full replacement), can fade over time, and less insulation value than other materials. However, modern vinyl siding has addressed many traditional concerns with improved formulations."
    },
    {
      question: "What is the average lifespan of vinyl siding?",
      answer: "High-quality vinyl siding typically lasts 20-40 years with proper installation and maintenance. The lifespan depends on climate conditions, installation quality, and vinyl grade. Premium vinyl siding with proper care often reaches 30-40 years, while budget options may need replacement after 15-20 years."
    },
    {
      question: "What are the different types of vinyl siding?",
      answer: "Main vinyl siding types include horizontal lap siding (most common), vertical siding, board and batten, shake and shingle styles, and scalloped siding. Vinyl also comes in different thicknesses (.040, .044, .046+ inches) and profiles (Dutch lap, traditional clapboard, beaded). Insulated vinyl siding includes foam backing for enhanced energy efficiency."
    },
    {
      question: "What are the best brands of vinyl siding?",
      answer: "Top vinyl siding brands include James Hardie (HardiePlank), CertainTeed, Mastic, Alside, Royal Building Products, and Norandex. Premium brands like CertainTeed Monogram and Mastic Ovation offer superior thickness, color retention, and warranties. Choose brands that offer lifetime warranties and have strong local dealer networks for best support."
    },
    {
      question: "How to maintain vinyl siding?",
      answer: "Vinyl siding maintenance involves annual cleaning with mild soap and water, checking for loose or damaged panels, ensuring proper caulking around windows and doors, and clearing debris from behind siding. Avoid pressure washing at high pressure or harsh chemicals. Inspect for cracks, warping, or fading annually and address issues promptly to prevent water damage."
    },
    {
      question: "What are the warranties offered on vinyl siding?",
      answer: "Vinyl siding warranties typically range from 20 years to lifetime, depending on the manufacturer and product line. Premium brands often offer lifetime limited warranties covering manufacturing defects, while mid-grade products may have 25-50 year warranties. Warranties usually cover material defects but may have prorated coverage for fading and exclude installation-related issues."
    },
    {
      question: "What are the different colors and styles of vinyl siding available?",
      answer: "Vinyl siding comes in dozens of colors from neutral whites and grays to bold blues, greens, and reds. Styles include traditional horizontal clapboard, Dutch lap, board and batten, cedar shake, and vertical panels. Many manufacturers offer woodgrain textures and two-tone color options. Custom colors may be available through special order programs."
    },
    {
      question: "What are the alternatives to vinyl siding?",
      answer: "Popular vinyl siding alternatives include fiber cement (James Hardie), wood siding (cedar, pine), aluminum siding, engineered wood, brick, stone, and stucco. Each alternative offers different benefits: fiber cement provides fire resistance, wood offers natural beauty, aluminum resists insects, and masonry provides maximum durability. Choice depends on budget, climate, and aesthetic preferences."
    }
  ];

  return (
    <div className="py-16">
      <FAQSection
        title="Vinyl Siding Installation FAQ"
        faqs={vinylSidingFaqData}
      />
    </div>
  );
}

