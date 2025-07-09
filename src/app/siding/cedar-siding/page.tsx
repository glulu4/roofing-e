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
        subText="Experience the timeless beauty and natural performance of cedar siding. Our expert installation services deliver eco-friendly wood siding that provides superior insulation, natural pest resistance, and stunning curb appeal that enhances any architectural style."
        imgSrc="/images/siding/cedar/hero.webp"
        imgAlt="Beautiful home featuring professionally installed cedar siding"
      />

      <div className="w-5/6 mx-auto py-16 text-center">
        <HeaderText as="h1">Expert Cedar Siding Installation Services</HeaderText>
        <SecondaryText>
          Transform your home with professional <strong>cedar siding installation</strong> that combines natural beauty with exceptional performance. Our skilled contractors specialize in <strong>cedar siding</strong> solutions that provide superior insulation, natural pest resistance, and the rich, warm appearance that only authentic wood can deliver.
          <br />
          <br />
          We use only premium-grade cedar and proven installation techniques to ensure your siding stands the test of time. From initial consultation to final inspection, our team is committed to delivering outstanding craftsmanship and customer satisfaction on every project.
        </SecondaryText>

        <HeaderText as="h2" className="mt-12">Natural Benefits of Cedar Siding</HeaderText>
        <SecondaryText>
          <strong>Cedar siding</strong> represents naturesiding&apos;ss perfect building material, offering eco-friendly construction with built-in insulation properties and natural resistance to decay and insects. Known for its rustic charm and versatility, <strong>cedar siding</strong> can be stained, painted, or left natural to develop a beautiful weathered patina over time.
          <br />
          <br />
          Choose cedar siding for a sustainable, low-carbon footprint solution that enhances your homesiding&apos;ss curb appeal and value. Its unique grain patterns and warm tones create a welcoming exterior that complements any architectural style.
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
              Professional <strong>cedar siding installation</strong> harnesses naturesiding&apos;ss own building technology. <strong>Cedar siding</strong> provides rich texture and natural insulation that helps regulate indoor temperatures while delivering timeless curb appeal that enhances property value and architectural character.
            </p>
            <p className="mt-4">
              The unique cellular structure of <strong>cedar siding</strong> offers excellent thermal properties and moisture management. Our expert installation techniques ensure proper ventilation and sealing that maximizes cedarsiding&apos;ss natural resistance to decay, insects, and weather damage.
            </p>
          </div>
        }
        bottomContent="Properly installed and maintained cedar siding develops a beautiful patina over time while maintaining its structural integrity. Whether stained to highlight the natural grain or painted to match your design vision, cedar siding provides unmatched warmth and character."
        imagePosition="right"
      />

      {/* First Row Component - Installation Excellence */}
      <Row
        title="Professional Cedar Siding Installation Process"
        description={
          <div>
            <p>
              Expert <strong>cedar siding installation</strong> requires specialized knowledge of wood properties and moisture management. Our certified installers understand how <strong>cedar siding</strong> expands and contracts with seasonal changes, ensuring proper spacing and fastening techniques that prevent splitting and warping.
            </p>
            <p className="mt-4">
              Professional <strong>cedar siding installation</strong> includes proper vapor barriers, strategic ventilation, and premium sealants that protect your investment. We source high-grade <strong>cedar siding</strong> materials and apply proven installation methods that maximize durability and performance in all climate conditions.
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
        title="Sustainable Cedar Siding Solutions"
        description={
          <div>
            <p>
              <strong>Cedar siding</strong> represents the ultimate in sustainable building materials, sourced from renewable forests and requiring minimal processing. Unlike synthetic alternatives, <strong>cedar siding</strong> is completely biodegradable and contributes to improved indoor air quality through natural moisture regulation.
            </p>
            <p className="mt-4">
              While <strong>cedar siding</strong> requires periodic maintenance to preserve its appearance, proper care ensures decades of performance. Our maintenance guidance helps you protect your <strong>cedar siding</strong> investment with appropriate cleaning, staining, and sealing schedules that maintain both beauty and durability.
            </p>
          </div>
        }
        imageSrc="/images/siding/cedar/cedar3.webp"
        headerColor="text-primaryblue"
      />

      {/* Cedar Siding FAQ */}
      <CedarSidingFAQ />

      <WhyParagon
      title='Why Choose Paragon Exterior for Your Cedar Siding Installation?'
      subTitle='At Paragon Exterior, we specialize in cedar siding installation that combines the natural beauty of wood with expert craftsmanship. Our experienced team ensures your siding not only looks stunning but also provides long-lasting protection against the elements. We use only premium-grade cedar and proven installation techniques to deliver exceptional results that enhance your home’s curb appeal and value.'
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
      question: "Is cedar siding good?",
      answer: "Yes, cedar siding is an excellent choice for homeowners seeking natural beauty, superior insulation, and eco-friendly materials. Cedar siding offers natural pest resistance, excellent thermal properties, and can last 30+ years with proper maintenance."
    },
    {
      question: "How long does cedar siding last?",
      answer: "High-quality cedar siding can last 30-50 years with proper installation and maintenance. The lifespan depends on climate conditions, maintenance frequency, and the grade of cedar used. Premium cedar siding with regular care often exceeds 40 years of service life."
    },
    {
      question: "What are the disadvantages of cedar siding?",
      answer: "Cedar siding requires more maintenance than synthetic materials, including periodic staining or sealing every 3-5 years. It's also more expensive initially than vinyl or aluminum, and improper installation can lead to moisture issues or insect damage."
    },
    {
      question: "What is the cedar siding cost per square foot?",
      answer: "Cedar siding installation typically costs $8-15 per square foot, including materials and labor. The price varies based on cedar grade, installation complexity, and regional labor costs. While more expensive than vinyl, cedar siding offers superior longevity and natural beauty."
    },
    {
      question: "What are the downsides of cedar siding?",
      answer: "The main downsides include higher initial cost, regular maintenance requirements, potential for moisture damage if not properly sealed, and susceptibility to fire compared to non-combustible materials. However, proper installation and maintenance minimize these concerns."
    },
    {
      question: "Is cedar good for exterior siding?",
      answer: "Cedar is excellent for exterior siding due to its natural weather resistance, insulation properties, and aesthetic appeal. Cedar contains natural oils that resist decay and insects, making it ideal for exterior applications when properly installed and maintained."
    },
    {
      question: "What is the life expectancy of cedar siding?",
      answer: "Cedar siding life expectancy ranges from 30-50 years depending on installation quality, maintenance practices, and environmental conditions. Premium cedar with professional installation and regular maintenance often lasts 40+ years while maintaining its structural integrity and appearance."
    },
    {
      question: "What is behind cedar siding?",
      answer: "Behind cedar siding, proper installation includes house wrap or vapor barrier, insulation (if applicable), and sheathing over the home's structural frame. Professional installation ensures proper ventilation and moisture management to protect both the cedar siding and underlying structure."
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