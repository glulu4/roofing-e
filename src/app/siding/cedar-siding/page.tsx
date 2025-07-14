import Hero from '@/components/service-page/Hero'
import HeaderText from '@/components/HeaderText'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import Row from '@/components/Row'
import FAQSection from '@/components/FAQSection'
import type {Metadata} from 'next'
import React from 'react'
import WhyParagon from '@/components/WhyParagon'

export const metadata: Metadata = {
  title: 'Professional Cedar Siding Installation | Natural Wood Siding Services',
  description: 'Expert cedar siding installation services. Discover the natural beauty and insulation benefits of cedar siding for your home. Professional installation with eco-friendly materials.',
  keywords: 'cedar siding, cedar siding installation, wood siding, natural wood siding, cedar shake siding, cedar board siding',
  openGraph: {
    title: 'Professional Cedar Siding Installation | Paragon Exterior',
    description: 'Transform your home with professional cedar siding installation. Natural beauty, superior insulation, and eco-friendly wood siding solutions.',
    type: 'website',
    images: ["/images/siding/cedar/hero.webp"],
  },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero
        mainText="Professional Cedar Siding Installation"
        subText="Experience the timeless beauty and lasting protection of authentic cedar siding. Our expert installation team delivers eco-friendly wood siding that offers superior insulation, natural pest resistance, and a level of curb appeal that only real wood can provide."
        imgSrc="/images/siding/cedar/hero.webp"
        imgAlt="Beautiful home featuring professionally installed cedar siding"
      />

      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Expert Cedar Siding Installation Services</HeaderText>
        <SecondaryText>
          Transform your home’s exterior with the warmth, depth, and natural character of professionally installed <strong>cedar siding</strong>. At Paragon Exterior, we combine artisan-level craftsmanship with advanced wood preservation techniques to deliver cedar siding installations that last for decades—even in the challenging Mid-Atlantic climate.
          <br /><br />
          Our skilled siding specialists use only premium-grade cedar and pay meticulous attention to every detail, from moisture control to flawless finishing. Every cedar siding project is tailored to highlight your home’s unique architecture, increase energy efficiency, and create a truly inviting appearance that makes a statement.
        </SecondaryText>

        <HeaderText as="h2" className="mt-12">Why Cedar Siding Stands Out</HeaderText>
        <SecondaryText>
          <strong>Cedar siding</strong> is nature’s original building material—offering not only unrivaled beauty, but also eco-friendly construction, built-in insulation, and impressive durability. With its natural oils, cedar is highly resistant to decay, rot, and insects, making it one of the most reliable choices for exterior cladding.
          <br /><br />
          Whether you prefer a crisp painted finish, a rustic stained look, or a naturally weathered patina, cedar siding adapts to any design vision. Choosing cedar means investing in a renewable, low-carbon product that elevates your home’s value and sustainability profile.
        </SecondaryText>
      </div>

      <InfoSection
        imgSrc="/images/siding/cedar/cedar1.webp"
        imgAlt="Close-up of cedar siding installation showing natural wood grain and craftsmanship"
        title="Natural Warmth and Performance of Cedar Siding"
        titleAs="h2"
        mainContent={
          <div>
            <p>
              Our professional <strong>cedar siding installation</strong> process harnesses the best of nature and modern building science. <strong>Cedar siding</strong> brings a rich, organic texture and natural insulating value that can help regulate your home’s indoor temperature while dramatically boosting curb appeal.
            </p>
            <p className="mt-4">
              Cedar’s unique cellular structure provides superior thermal properties and excellent moisture management. Paragon Exterior’s expert installation team ensures proper ventilation and flashing to maximize cedar’s resistance to decay, warping, and weather damage—delivering lasting performance, season after season.
            </p>
          </div>
        }
        bottomContent="Properly installed and maintained cedar siding matures gracefully, developing a beautiful silvery patina or holding vibrant stains for years. Whether your vision is modern or classic, cedar siding delivers warmth, texture, and authenticity unmatched by synthetic materials."
        imagePosition="right"
      />

      {/* First Row Component - Installation Excellence */}
      <Row
        title="Our Proven Cedar Siding Installation Process"
        description={
          <div>
            <p>
              Installing <strong>cedar siding</strong> right takes real wood expertise. Our certified installers understand how cedar expands, contracts, and responds to moisture—ensuring proper board spacing and advanced fastening techniques that prevent splitting, cupping, or warping for the long haul.
            </p>
            <p className="mt-4">
              Every Paragon Exterior project includes installation of vapor barriers, ventilated rain screens, and premium sealants. We carefully select each piece of cedar for visual consistency and strength, so your home looks stunning from every angle and remains protected for decades.
            </p>
          </div>
        }
        imageSrc="/images/siding/cedar/cedar2.webp"
        headerColor="text-primaryblue"
        bodyColor="text-gray-700"
        className="py-16"
        reverse
      />

      {/* Second Row Component - Sustainability and Maintenance */}
      <Row
        title="Sustainable & Low-Impact Cedar Siding Solutions"
        description={
          <div>
            <p>
              <strong>Cedar siding</strong> is one of the most sustainable cladding options available—sourced from responsibly managed forests and fully biodegradable at end-of-life. Unlike vinyl or fiber cement, cedar requires minimal processing, reducing its environmental footprint and improving your home’s overall sustainability.
            </p>
            <p className="mt-4">
              While <strong>cedar siding</strong> does require regular care (like staining or sealing every few years), our experts will help you set up a maintenance routine to keep your siding strong and beautiful. With proper upkeep, cedar siding can easily last 30 to 50 years—making it a smart, high-value investment.
            </p>
          </div>
        }
        imageSrc="/images/siding/cedar/cedar3.webp"
        headerColor="text-primaryblue"
      />

      {/* Cedar Siding FAQ */}
      <CedarSidingFAQ />

      <WhyParagon
        title='Why Choose Paragon Exterior for Cedar Siding Installation?'
        subTitle='At Paragon Exterior, we combine deep experience with a commitment to superior materials and customer care. Every cedar siding installation is handled by true craftsmen—delivering not just lasting protection, but a finished product that makes your home the envy of the neighborhood. Enjoy peace of mind knowing your cedar siding project is backed by transparent warranties and 5-star local support.'
      />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  )
}

// Cedar Siding FAQ Component
function CedarSidingFAQ() {
  const cedarSidingFaqData = [
    {
      question: "Is cedar siding a good investment?",
      answer: "Absolutely. Cedar siding is prized for its natural beauty, durability, and eco-friendliness. It offers superior insulation, resists pests and moisture, and significantly enhances curb appeal. With proper maintenance, cedar siding provides outstanding long-term value for your home."
    },
    {
      question: "How long does cedar siding last?",
      answer: "Premium cedar siding professionally installed and regularly maintained can last 30–50 years or longer. The key factors are proper installation, frequent inspections, and timely re-staining or sealing."
    },
    {
      question: "Does cedar siding require a lot of maintenance?",
      answer: "Cedar siding needs more upkeep than vinyl or fiber cement, including cleaning and re-staining every 3–5 years. However, its maintenance is straightforward and ensures decades of beautiful performance."
    },
    {
      question: "Is cedar siding expensive?",
      answer: "Cedar siding is more expensive up front compared to vinyl or aluminum, generally ranging from $8–$15 per square foot installed. However, it pays off in natural aesthetics, longevity, and value."
    },
    {
      question: "How does cedar siding compare to other siding materials?",
      answer: "Cedar siding offers unmatched warmth and character. It’s naturally resistant to decay and insects, insulates well, and is completely renewable. While it requires more maintenance than some alternatives, many homeowners find its authentic appearance and performance worth the investment."
    },
    {
      question: "What is installed behind cedar siding?",
      answer: "Professional cedar siding installation includes a vapor barrier or house wrap, insulation if desired, and proper sheathing over your home’s structure. This layered system ensures moisture management and long-term durability."
    }
  ];

  return (
    <div className="py-16">
      <FAQSection
        title="Cedar Siding Installation FAQ"
        faqs={cedarSidingFaqData}
      />
    </div>
  );
}
