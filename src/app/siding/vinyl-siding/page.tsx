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
        <Hero
          mainText="Upgrade Your Home With Premium Vinyl Siding"
          subText="Want a home exterior that turns heads—and keeps you worry-free? Our professional vinyl siding installation delivers lasting beauty, energy savings, and almost zero maintenance. Trusted by local homeowners, Paragon Exterior guarantees quality that lasts."
          imgSrc="/images/siding/vinyl/hero.jpg"
          imgAlt="Beautiful home with premium vinyl siding installation"
        />

        <InfoSection
          imgSrc="/images/siding/vinyl/vinyl1.webp"
          imgAlt="Vinyl siding installers working on a home"
          titleAs="h1"
          title="Vinyl Siding Installation: Built to Last, Styled for You"
          mainContent={
            <>
              <SecondaryText>
                Vinyl siding is the most popular choice for American homes—thanks to its unbeatable mix of style, durability, and affordability. Our team helps you choose from hundreds of colors and profiles, so your home looks exactly how you want. And with our expert installation, you get siding that resists fading, cracking, and warping for decades.
              </SecondaryText>
              <SecondaryText className="mt-4">
                Every project starts with a free consultation. We guide you through design, explain the process, and answer every question—no pressure, just honest advice. When you’re ready, our certified installers make sure your new siding is sealed, straight, and weatherproof from the very first day.
              </SecondaryText>
            </>
          }
          bottomContent="Choose Paragon Exterior for vinyl siding that protects your home, boosts energy efficiency, and stays beautiful year after year."
          imagePosition="right"
        />


        {/* VINYL SIDING STYLES COMPONENT */}
        <VinylSidingStyles />

        {/* VINYL SIDING BENEFITS */}
        <IncentivesSection
          className="py-16"
          title="Why Homeowners Love Vinyl Siding"
          titleAs="h2"
          subtitle="Discover why so many local families are choosing vinyl siding—and why our installs outlast and outperform the competition."
          heroImage={{
            alt: "House with modern vinyl siding colors",
            src: "/images/siding/vinyl/vinyl2.webp"
          }}
          incentives={[
            {
              name: "Zero Maintenance Hassle",
              description: "No painting, no staining, no headaches. Just rinse with a garden hose and your siding looks new—year after year.",
              imageSrc: "/images/siding/vinyl/icons/paint-brush-broad.svg",
              imageAlt: "Low maintenance siding icon"
            },
            {
              name: "Weatherproof & Durable",
              description: "Our premium vinyl resists fading, cracking, insects, and weather damage for 20-30+ years. Backed by real warranties.",
              imageSrc: "/images/siding/vinyl/icons/shield-check.svg",
              imageAlt: "Weatherproof siding icon"
            },
            {
              name: "Smart Investment",
              description: "Vinyl siding installation delivers excellent value: affordable upfront, lower utility bills, and real curb appeal.",
              imageSrc: "/images/siding/vinyl/icons/money.svg",
              imageAlt: "Value siding icon"
            },
          ]}
          imagePosition="left"
        />


        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <HeaderText as="h2" className="mb-6">
                What Does Vinyl Siding Cost?
              </HeaderText>
              <SecondaryText className="max-w-4xl mx-auto">
                With transparent pricing, no hidden fees, and free estimates, you’ll always know what to expect from Paragon Exterior. Choose a siding style and budget that fits your needs—then let our experts handle the rest!
              </SecondaryText>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Budget-Friendly</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$3–6</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  Affordable, attractive siding for any home. Great for rentals or quick curb-appeal upgrades.
                </SecondaryText>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-primaryblue">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Premium Selection</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$6–9</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  Realistic textures, more color choices, and extra durability for longer life and style.
                </SecondaryText>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <HeaderText variant="small" className="mb-4 text-primaryblue">Luxury Vinyl Siding</HeaderText>
                <div className="text-3xl font-bold text-amber-500 mb-2">$9–12</div>
                <div className="text-gray-600 mb-4">per square foot</div>
                <SecondaryText className="text-sm">
                  Maximum thickness, custom colors, and architecturally detailed siding for truly stunning homes.
                </SecondaryText>
              </div>
            </div>
            <div className="text-center mt-8">
              <SecondaryText className="text-gray-600">
                All pricing includes professional installation and removal of your old siding. Get a custom quote—no pressure, no obligations.
              </SecondaryText>
            </div>
          </div>
        </section>

        <Row
          title="Vinyl Siding Colors and Styles for Every Taste"
          description="Go bold or keep it classic: vinyl siding comes in hundreds of long-lasting colors and styles. Choose from traditional horizontal, trendy vertical, or board-and-batten profiles. Whatever your vision, we’ll help you bring it to life."
          imageSrc="/images/siding/vinyl/vinyl3.webp"
          className="py-16"
        />

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <HeaderText as="h2" className="mb-6">
                How Our Vinyl Siding Installation Works
              </HeaderText>
              <SecondaryText className="max-w-4xl mx-auto">
                Professional results start with a clear process. Here’s what you can expect when you choose Paragon Exterior for your vinyl siding project:
              </SecondaryText>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Design & Estimate",
                  description: "We help you pick styles and colors, answer questions, and provide a clear, honest quote."
                },
                {
                  step: "2",
                  title: "Prep & Removal",
                  description: "Old siding comes off, surfaces are checked, and we install moisture barriers for long-term protection."
                },
                {
                  step: "3",
                  title: "Expert Install",
                  description: "Certified installers use manufacturer-approved methods for a flawless, weather-tight fit."
                },
                {
                  step: "4",
                  title: "Final Inspection",
                  description: "We walk you through the finished project—no detail overlooked, and no mess left behind."
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

