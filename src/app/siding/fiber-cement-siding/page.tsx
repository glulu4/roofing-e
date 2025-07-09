import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import Row from '@/components/Row'
import FAQSection from '@/components/FAQSection'
import type {Metadata} from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Professional Fiber Cement Siding Installation | Durable Cement Board Siding',
  description: 'Expert fiber cement siding installation services. Discover the superior durability and wood-like beauty of fiber cement siding for your home. Professional installation with warranty.',
  keywords: 'fiber cement siding, fiber cement siding installation, cement board siding, hardie board siding, durable siding, fiber cement board',
  openGraph: {
    title: 'Professional Fiber Cement Siding Installation | Paragon Exterior',
    description: 'Transform your home with professional fiber cement siding installation. Fire-resistant, rot-proof, and beautiful wood-like appearance.',
    type: 'website',
    images: ["/images/siding/fiber/hero.jpeg"],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Professional Fiber Cement Siding Installation"
        subText="Experience the perfect combination of durability and beauty with fiber cement siding. Our expert installation delivers fire-resistant, rot-proof, and pest-resistant siding that maintains the classic appeal of wood without the maintenance requirements."
        imgSrc="/images/siding/fiber/hero.jpeg"
        imgAlt="Beautiful home with professionally installed fiber cement siding"
      />

      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Expert Fiber Cement Siding Installation Services</HeaderText>
        <SecondaryText>
          Transform your home with professional <strong>fiber cement siding installation</strong> that delivers unmatched durability and timeless beauty. Our skilled contractors specialize in <strong>fiber cement siding</strong> solutions that resist fire, insects, and rot while providing the classic appearance of painted wood that enhances any architectural style.
        </SecondaryText>

        <HeaderText as="h2" className="mt-12">Why Choose Fiber Cement Siding for Your Home?</HeaderText>
        <SecondaryText>
          <strong>Fiber cement siding</strong> represents the pinnacle of modern siding technology, combining cement durability with cellulose fiber reinforcement. This premium material withstands harsh weather conditions and holds paint longer than traditional wood, making <strong>fiber cement siding</strong> the smart long-term investment for discerning homeowners.
        </SecondaryText>
      </div>

      <InfoSection
        imgSrc="/images/siding/fiber/fiber1.webp"
        imgAlt="Close-up of fiber cement siding installation showing superior craftsmanship"
        title="Superior Fiber Cement Siding Performance"
        titleAs="h2"
        mainContent={
          <div>
            <p>
              Professional <strong>fiber cement siding installation</strong> creates a protective barrier that combines cementsiding&apos;ss strength with cellulose fibers for dimensional stability. <strong>Fiber cement siding</strong> resists warping, cracking, and rot while providing exceptional resistance to fire, hail, wind, and pest damage.
            </p>
            <p className="mt-4">
              Unlike traditional wood or vinyl alternatives, <strong>fiber cement siding</strong> maintains its structural integrity in demanding climates. Our expert installation techniques ensure proper moisture management and thermal expansion accommodation for decades of worry-free performance.
            </p>
          </div>
        }
        bottomContent="With superior flame resistance and outstanding paint retention, your fiber cement siding exterior maintains its fresh appearance for decades. Choose from various textures and colors to match your architectural vision while enjoying unmatched protection and longevity."
        imagePosition="right"
      />

      {/* First Row Component - Installation Benefits */}
      <Row
        title="Fiber Cement Siding Installation Advantages"
        description={
          <div>
            <p>
              Professional <strong>fiber cement siding installation</strong> provides exceptional advantages over traditional materials. <strong>Fiber cement siding</strong> offers 50-year durability with minimal maintenance while delivering authentic wood-grain textures and lasting color retention.
            </p>
            <p className="mt-4">
              Our expert <strong>fiber cement siding installation</strong> includes proper vapor barriers, precise cutting techniques, and specialized fastening methods that ensure optimal performance. Unlike wood siding that requires frequent painting and maintenance, <strong>fiber cement siding</strong> maintains its beauty with simple periodic cleaning.
            </p>
          </div>
        }
        imageSrc="/images/siding/fiber/fiber2.webp"
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16"
      />

      {/* Second Row Component - Maintenance and Longevity */}
      <Row
        title="Low-Maintenance Fiber Cement Siding Performance"
        description={
          <div>
            <p>
              <strong>Fiber cement siding</strong> dramatically reduces maintenance requirements compared to traditional wood siding. With proper <strong>fiber cement siding installation</strong>, yousiding&apos;sll enjoy decades of protection without the need for frequent repainting, sealing, or repairs that wood siding demands.
            </p>
            <p className="mt-4">
              The unique composition of <strong>fiber cement siding</strong> resists moisture absorption, preventing rot, warping, and insect damage. Professional installation ensures proper caulking, flashing, and drainage that maximize your <strong>fiber cement sidingsiding&apos;ss</strong> impressive lifespan and performance characteristics.
            </p>
          </div>
        }
        imageSrc="/images/siding/fiber/fiber3.webp"
        reverse={true}
        headerColor="text-primaryblue"
      />

      {/* Fiber Cement Siding FAQ */}
      <FiberCementSidingFAQ />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}

// Fiber Cement Siding FAQ Component
function FiberCementSidingFAQ() {
  const fiberCementFaqData = [
    {
      question: "What is the lifespan of fiber cement siding?",
      answer: "High-quality fiber cement siding can last 50+ years with proper installation and minimal maintenance. Unlike wood siding that may need replacement in 15-20 years, fiber cement siding provides exceptional longevity and durability."
    },
    {
      question: "Is fiber cement siding better than vinyl?",
      answer: "Fiber cement siding offers superior fire resistance, impact resistance, and paint retention compared to vinyl. While vinyl may be less expensive initially, fiber cement siding provides better long-term value with enhanced durability and authentic wood appearance."
    },
    {
      question: "Does fiber cement siding crack easily?",
      answer: "Properly installed fiber cement siding is highly resistant to cracking. Our professional installation techniques include proper expansion joints and fastening methods that prevent cracking from thermal expansion and structural movement."
    },
    {
      question: "How expensive is fiber cement siding installation?",
      answer: "Fiber cement siding installation costs more than vinyl but less than natural wood or stone. The superior durability, low maintenance requirements, and longevity make fiber cement siding an excellent long-term investment for your home."
    },
    {
      question: "Can you hang things on fiber cement siding?",
      answer: "Yes, fiber cement siding can support decorative items and fixtures when proper fasteners are used. We recommend consulting with our installation experts for specific mounting requirements to ensure secure attachment without damage."
    },
    {
      question: "Does fiber cement siding increase home value?",
      answer: "Fiber cement siding typically increases home value due to its premium appearance, durability, and low maintenance requirements. Many homeowners see excellent return on investment with fiber cement siding installation."
    },
    {
      question: "What is better than fiber cement siding?",
      answer: "Fiber cement siding is considered one of the premium siding options available. While natural stone or brick may offer certain advantages, fiber cement siding provides the best balance of durability, appearance, maintenance, and cost for most homeowners."
    },
    {
      question: "Is fiber cement siding high maintenance?",
      answer: "No, fiber cement siding is considered low-maintenance. Unlike wood siding that requires frequent painting and sealing, fiber cement siding only needs periodic cleaning and occasional caulking maintenance to maintain its appearance and performance."
    }
  ];

  return (
    <div className="py-16">
      <FAQSection
        title="Fiber Cement Siding Installation FAQ"
        faqs={fiberCementFaqData}
      />
    </div>
  );
}