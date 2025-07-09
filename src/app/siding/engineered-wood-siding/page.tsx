import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import Row from '@/components/Row'
import FAQSection from '@/components/FAQSection'
import IncentivesSection from '@/components/service-page/Incentive'
import type {Metadata} from 'next'
import React from 'react'
import WhyParagon from '@/components/WhyParagon'

export const metadata: Metadata = {
  title: 'Engineered Wood Siding Installation | Composite Wood Siding Services',
  description: 'Professional engineered wood siding installation services. Discover the authentic wood beauty with enhanced durability of engineered wood siding. Expert installation with warranty.',
  keywords: 'engineered wood siding, engineered wood siding installation, composite wood siding, wood composite siding, LP SmartSide siding',
  openGraph: {
    title: 'Professional Engineered Wood Siding Installation | Paragon Exterior',
    description: 'Transform your home with engineered wood siding installation. Authentic wood beauty with superior durability and performance.',
    type: 'website',
    images: ['/images/siding/engineered/hero.webp'],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Premium Engineered Wood Siding Installation"
        subText="Experience the perfect fusion of authentic wood beauty and modern engineering excellence. Our expert engineered wood siding installation delivers the classic appeal of natural wood with enhanced durability, moisture resistance, and dimensional stability that outperforms traditional lumber."
        imgSrc='/images/siding/engineered/hero.webp'
        imgAlt="Stunning home featuring professionally installed engineered wood siding"
      />

      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Expert Engineered Wood Siding Installation Services</HeaderText>
        <SecondaryText>
          Discover the revolutionary advantages of professional <strong>engineered wood siding installation</strong> that combines authentic wood aesthetics with advanced composite technology. Our skilled contractors specialize in <strong>engineered wood siding</strong> solutions that deliver superior moisture resistance, enhanced durability, and the natural beauty that only wood-based materials can provide.
        </SecondaryText>

        <HeaderText as="h2" className="mt-12">Why Choose Engineered Wood Siding?</HeaderText>
        <SecondaryText>
          <strong>Engineered wood siding</strong> represents the evolution of wood building materials, offering authentic wood fiber construction with advanced binders and treatments that resist moisture, insects, and decay. This innovative material provides the warmth and character of natural wood while eliminating many traditional wood siding limitations through modern manufacturing processes.
        </SecondaryText>
      </div>

      {/* Advanced Benefits Section */}
      <IncentivesSection
        className="py-16"
        title="Engineered Wood Siding: Where Innovation Meets Tradition"
        titleAs="h2"
        subtitle="Professional engineered wood siding installation combines cutting-edge composite technology with authentic wood aesthetics, delivering superior performance that traditional wood siding simply cannot match."
        heroImage={{
          alt: "Engineered wood siding installation showcasing superior craftsmanship and durability",
          src: '/images/siding/engineered/eng1.webp'
        }}
        incentives={[
          {
            name: "Enhanced Moisture Resistance",
            description: "Advanced resin technology and moisture barriers prevent swelling, warping, and rot that commonly affect traditional wood siding materials.",
            imageSrc: "/images/siding/engineered/icons/drop.svg",
            imageAlt: "Moisture resistant engineered wood siding icon"
          },
          {
            name: "Dimensional Stability",
            description: "Engineered construction eliminates seasonal expansion and contraction, maintaining straight, true lines year after year.",
            imageSrc: "/images/siding/engineered/icons/ruler.svg",
            imageAlt: "Dimensional stability engineered wood siding icon"
          },
          {
            name: "Authentic Wood Beauty",
            description: "Real wood fiber construction with natural grain patterns and textures that stain and paint beautifully for unlimited design possibilities.",
            imageSrc: "/images/siding/engineered/icons/log.svg",
            imageAlt: "Natural wood beauty engineered siding icon"
          },
          {
            name: "Superior Durability",
            description: "Advanced composite technology resists impact damage, splitting, and checking while maintaining structural integrity in all weather conditions.",
            imageSrc: "/images/siding/engineered/icons/hammer.svg",
            imageAlt: "Durable engineered wood siding icon"
          }
        ]}
        imagePosition="right"
        incentiveColumns={2}
      />

      <InfoSection
        imgSrc='/images/siding/engineered/eng2.webp'
        imgAlt="Close-up of engineered wood siding showing superior craftsmanship and wood grain detail"
        title="Revolutionary Engineered Wood Siding Technology"
        titleAs="h2"
        mainContent={
          <div>
            <p>
              Professional <strong>engineered wood siding installation</strong> harnesses advanced composite manufacturing that bonds real wood fibers with specialized resins and protective treatments. This innovative process creates <strong>engineered wood siding</strong> that maintains authentic wood appearance while dramatically improving moisture resistance and dimensional stability.
            </p>
            <p className="mt-4">
              Unlike traditional wood siding that can warp, split, or rot, <strong>engineered wood siding</strong> undergoes precision manufacturing that eliminates natural wood defects while preserving the grain patterns and textures that make wood so appealing. Our expert installation ensures optimal performance through proper moisture management and thermal expansion accommodation.
            </p>
          </div>
        }
        bottomContent="From initial substrate preparation to final finishing touches, our engineered wood siding installation process maximizes both aesthetic appeal and long-term performance. The result is beautiful, durable siding that enhances your home's value while providing decades of low-maintenance protection."
        imagePosition="left"
      />

      {/* First Row Component - Installation Excellence */}
      <Row
        title="Precision Engineered Wood Siding Installation"
        description={
          <div>
            <p>
              Expert <strong>engineered wood siding installation</strong> requires understanding both traditional woodworking principles and modern composite material properties. Our certified installers leverage specialized techniques that accommodate the unique characteristics of <strong>engineered wood siding</strong> while ensuring optimal moisture management and thermal performance.
            </p>
            <p className="mt-4">
              Professional <strong>engineered wood siding installation</strong> includes precision cutting, strategic fastening patterns, and advanced sealing methods that prevent moisture infiltration. We use premium-grade <strong>engineered wood siding</strong> products and apply proven installation protocols that maximize durability while preserving the natural wood aesthetic that homeowners love.
            </p>
          </div>
        }
        imageSrc='/images/siding/engineered/eng3.webp'
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16"
      />


      {/* Engineered Wood Siding FAQ */}
      <EngineeredWoodSidingFAQ />

      <WhyParagon
      title='Why Choose Paragon Exterior for Your Engineered Wood Siding Installation?'
      subTitle='At Paragon Exterior, we specialize in engineered wood siding installation that combines the beauty of natural wood with the durability of modern composites. Our experienced team ensures your siding not only looks stunning but also provides long-lasting protection against the elements.'

      />


      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}

// Engineered Wood Siding FAQ Component
function EngineeredWoodSidingFAQ() {
  const engineeredWoodFaqData = [
    {
      question: "What is engineered wood siding?",
      answer: "Engineered wood siding is a composite material made from real wood fibers bonded with advanced resins and protective treatments. This manufacturing process creates siding that maintains authentic wood appearance while offering superior moisture resistance and dimensional stability compared to traditional lumber."
    },
    {
      question: "How long does engineered wood siding last?",
      answer: "High-quality engineered wood siding can last 50+ years with proper installation and maintenance. The advanced composite construction eliminates many issues that affect traditional wood, such as rot, warping, and insect damage, resulting in exceptional longevity."
    },
    {
      question: "Is engineered wood siding better than vinyl?",
      answer: "Engineered wood siding offers authentic wood appearance, superior impact resistance, and better insulation properties than vinyl. While vinyl may require less maintenance, engineered wood provides more aesthetic options and typically increases home value more significantly."
    },
    {
      question: "What are the disadvantages of engineered wood siding?",
      answer: "Engineered wood siding costs more initially than vinyl and requires periodic maintenance including staining or painting every 8-12 years. However, the superior durability and authentic appearance often justify the higher investment for most homeowners."
    },
    {
      question: "Can engineered wood siding be painted?",
      answer: "Yes, engineered wood siding accepts paint and stain beautifully due to its real wood fiber construction. The smooth, consistent surface provides excellent paint adhesion and allows for unlimited color and finish options to match any design vision."
    },
    {
      question: "How much does engineered wood siding cost?",
      answer: "Engineered wood siding installation typically costs $8-14 per square foot including materials and labor. While more expensive than vinyl, the superior durability, authentic appearance, and longevity provide excellent long-term value for homeowners."
    },
    {
      question: "Is engineered wood siding waterproof?",
      answer: "Engineered wood siding offers excellent moisture resistance through advanced resin treatments and protective coatings, but it's not completely waterproof. Proper installation with appropriate vapor barriers and flashing ensures optimal moisture management and prevents water damage."
    },
    {
      question: "What maintenance does engineered wood siding require?",
      answer: "Engineered wood siding requires periodic cleaning and refinishing every 8-12 years depending on climate and exposure. Regular inspection for damage and prompt repair of any issues helps maintain the siding's appearance and protective properties."
    }
  ];

  return (
    <div className="py-16">
      <FAQSection
        title="Engineered Wood Siding Installation FAQ"
        faqs={engineeredWoodFaqData}
      />
    </div>
  );
}