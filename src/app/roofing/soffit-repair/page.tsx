import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import Row from '@/components/Row';
import FAQSection from '@/components/FAQSection';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import IncentivesSection from '@/components/service-page/Incentive';
import Reasons from '@/components/service-page/Reasons';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Professional Soffit Repair & Replacement Services PA, NJ, DE',
  description:
    'Expert soffit repair and replacement services for damaged, rotted, or sagging soffits. Complete installation and repair solutions in PA, NJ & DE.',
  keywords:
    'soffit repair, soffit replacement, damaged soffit, rotted soffit, sagging soffit, soffit ventilation repair, soffit board repair, fascia soffit repair, aluminum soffit repair, vinyl soffit repair, wood soffit repair, Pennsylvania soffit repair, New Jersey soffit repair, Delaware soffit repair, Philadelphia soffit repair, soffit repair cost, soffit repair near me, residential soffit repair, commercial soffit repair, eave soffit repair, roof soffit repair, exterior soffit repair',
  openGraph: {
    title: 'Professional Soffit Repair Services | Paragon Exterior PA, NJ, DE',
    description:
      'Expert soffit repair contractors serving Pennsylvania, New Jersey & Delaware. Quality repairs for damaged, rotted, or sagging soffits. Licensed & insured with free estimates.',
    type: 'website',
    images: ["/images/roof-service/soffit/img4.webp"],
    url: 'https://paragonexterior.com/roofing/soffit-repair',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Soffit Repair Services | Paragon Exterior',
    description:
      'Expert soffit repair contractors serving PA, NJ & DE. Quality repairs for damaged, rotted, or sagging soffits. Licensed & insured with free estimates.',
    images: ["/images/roof-service/soffit/img4.webp"],
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
            "name": "Paragon Exterior Soffit Repair & Replacement",
            "description": "Professional soffit repair and replacement services in Pennsylvania, New Jersey, and Delaware",
            "url": "https://paragonexterior.com/roofing/soffit-repair",
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
              "name": "Soffit Repair & Replacement Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Soffit Replacement",
                    "description": "Full soffit replacement with premium materials including aluminum, vinyl, and fiber cement for optimal airflow and protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Soffit Repair & Restoration",
                    "description": "Professional repair of damaged, cracked, or sagging soffit sections with structural issue resolution"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "New Soffit Installation",
                    "description": "Professional installation of new soffit systems for home additions, renovations, and ventilation upgrades"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Soffit Ventilation Repair",
                    "description": "Restoration of proper attic ventilation through soffit repair and ventilation system optimization"
                  }
                }
              ]
            }
          })
        }}
      />

      <Hero
        mainText="Expert Soffit Repair & Replacement Services in PA, NJ & DE"
        subText="Professional soffit repair and replacement for damaged, rotted, or sagging soffits. Complete installation services with premium materials. Our experienced contractors restore proper ventilation and protect your home's exterior. Licensed and insured with 20+ years serving Pennsylvania, New Jersey, and Delaware."
        imgSrc="/images/roof-service/soffit/img4.webp"
        imgAlt="Professional soffit repair services by licensed contractors in Pennsylvania, New Jersey, Delaware"
      />

      <InfoSection
        imgSrc="/images/roof-service/soffit/img1.webp"
        imgAlt="Close-up view of professional soffit repair work"
        title="Professional Soffit Repair & Replacement Contractors You Can Trust"
        titleAs="h1"
        mainContent="Damaged or outdated soffits compromise your home's ventilation and leave your roof structure vulnerable to moisture damage. Our expert soffit contractors provide comprehensive solutions including complete soffit replacement, repairs, and new installations. We work with all soffit materials - aluminum, vinyl, wood, and fiber cement - ensuring proper installation, optimal ventilation, and long-lasting results that protect your home."
        bottomContent="With over 20 years of experience, our certified technicians understand the critical role soffits play in your home's ventilation system. Whether you need complete soffit replacement or targeted repairs, we provide solutions that not only fix immediate problems but also prevent future damage to your roof structure, attic, and home interior."
        imagePosition="right"
      />

      {/* Soffit Repair Services with Incentives Component */}
      <IncentivesSection
        title="Complete Soffit Repair & Replacement Services"
        titleAs="h2"
        subtitle="From minor repairs to complete soffit replacement and new installations, our expert team handles all types of soffit projects. We restore proper ventilation and protect your home's structural integrity with premium materials and professional installation."
        heroImage={{
          src: "/images/roof-service/soffit/img2.webp",
          alt: "Professional soffit repair services including damaged board replacement"
        }}
        incentives={[
          {
            name: "Complete Soffit Replacement",
            imageSrc: "/images/siding/engineered/icons/hammer.svg",
            imageAlt: "Complete soffit replacement icon",
            description: "Full soffit replacement with premium materials including aluminum, vinyl, or fiber cement. We remove old soffits and install new ventilated systems for optimal airflow and protection."
          },
          {
            name: "Soffit Repair & Restoration",
            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
            imageAlt: "Soffit repair icon",
            description: "Professional repair of damaged, cracked, or sagging soffit sections. We address structural issues, replace damaged boards, and restore proper ventilation function."
          },
          {
            name: "New Soffit Installation",
            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
            imageAlt: "New soffit installation icon",
            description: "Professional installation of new soffit systems for home additions, renovations, or upgrades. We ensure proper ventilation design and premium material installation."
          }
        ]}
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* Why Soffit Repair & Replacement is Important */}
      <Row
        title="Why Professional Soffit Repair & Replacement is Critical for Your Home"
        description="Damaged or outdated soffits create serious problems for your home's structural integrity and ventilation system. Without proper soffit function, moisture builds up in your attic causing mold, rot, and expensive structural damage. Professional soffit repair and replacement prevents these costly issues while restoring proper airflow and protecting your roof structure. Complete soffit replacement often provides better long-term value than repeated repairs."
        imageSrc="/images/roof-service/soffit/img3.webp"
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* When to Replace vs Repair Soffits */}
      <Row
        title="When to Replace vs Repair Your Soffits"
        description="Our experienced team evaluates whether repair or replacement is the best solution for your situation. Minor damage like small cracks or loose panels can often be repaired cost-effectively. However, extensive rot, multiple damaged sections, outdated materials, or poor ventilation design typically warrant complete soffit replacement. We provide honest assessments to help you make the most cost-effective decision for long-term protection."
        imageSrc="/images/roof-service/soffit/img5.webp"
        reverse
        className="py-16"
        headerColor="text-primaryblue"
        bodyColor="text-gray-600"
      />

      {/* Soffit Repair Reasons Component */}
      <Reasons
        title="Why Professional Soffit Repair is Essential"
        titleAs="h2"
        description="Understanding the importance of properly functioning soffits helps you protect your home investment and avoid costly structural repairs."
        reasons={[
          {
            name: "Prevents Moisture Damage",
            description: "Properly repaired soffits maintain attic ventilation, preventing moisture buildup that leads to mold, rot, and structural damage costing thousands to repair."
          },
          {
            name: "Protects Roof Structure",
            description: "Functional soffits prevent water intrusion and pest infiltration that can damage roof decking, rafters, and insulation systems."
          },
          {
            name: "Maintains Energy Efficiency",
            description: "Proper soffit ventilation regulates attic temperature, reducing energy costs and preventing ice dam formation in winter months."
          },
          {
            name: "Prevents Pest Problems",
            description: "Intact soffits block entry points for birds, squirrels, bats, and insects that can cause expensive damage and health hazards."
          },
          {
            name: "Preserves Home Value",
            description: "Well-maintained soffits enhance curb appeal and prevent structural issues that significantly impact property value and marketability."
          },
          {
            name: "Saves Long-Term Costs",
            description: "Professional soffit repair prevents extensive roof, attic, and structural damage that costs far more than timely maintenance and repairs."
          }
        ]}
        img={{
          src: "/images/roof-service/soffit/hero.webp",
          alt: "Professional soffit repair protecting home ventilation and structure"
        }}
      />

      {/* Soffit Materials We Work With */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primaryblue mb-4">Soffit Materials We Repair</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced technicians repair and replace all types of soffit materials with expert craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Aluminum Soffits</h3>
              <p className="text-gray-600 mb-4">Durable and low-maintenance, aluminum soffits resist rust and provide excellent ventilation. We repair dents, replace panels, and fix loose sections.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Panel replacement and repair</li>
                <li>• Dent removal and reshaping</li>
                <li>• Ventilation screen restoration</li>
                <li>• Color matching and painting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Vinyl Soffits</h3>
              <p className="text-gray-600 mb-4">Cost-effective and weather-resistant, vinyl soffits can crack or sag over time. We repair damage and restore proper support.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Crack repair and panel replacement</li>
                <li>• Sagging section reinforcement</li>
                <li>• Fastener and bracket repair</li>
                <li>• UV damage restoration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Wood Soffits</h3>
              <p className="text-gray-600 mb-4">Traditional wood soffits provide classic appeal but require maintenance. We repair rot, replace boards, and restore ventilation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rot removal and board replacement</li>
                <li>• Structural repair and reinforcement</li>
                <li>• Ventilation hole cutting and screening</li>
                <li>• Painting and weather protection</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold text-primaryblue mb-3">Fiber Cement Soffits</h3>
              <p className="text-gray-600 mb-4">Durable composite material resistant to moisture and pests. We repair cracks, replace damaged sections, and maintain ventilation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Crack repair and sealing</li>
                <li>• Panel replacement and installation</li>
                <li>• Fastener system repair</li>
                <li>• Moisture barrier restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primaryblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Soffit Repair Service Areas</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional soffit repair services throughout Pennsylvania, New Jersey, and Delaware
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Pennsylvania</h3>
              <p className="text-blue-100 mb-4">Comprehensive soffit repair throughout PA including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Philadelphia & Greater Philadelphia Area</li>
                <li>• Feasterville-Trevose</li>
                <li>• Bensalem & Southampton</li>
                <li>• Newtown & Richboro</li>
                <li>• Doylestown & Montgomeryville</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">New Jersey</h3>
              <p className="text-blue-100 mb-4">Expert soffit repair services in NJ including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Camden County</li>
                <li>• Burlington County</li>
                <li>• Gloucester County</li>
                <li>• Mercer County</li>
                <li>• All surrounding areas</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Delaware</h3>
              <p className="text-blue-100 mb-4">Professional soffit repair in DE including:</p>
              <ul className="text-blue-100 space-y-1">
                <li>• Wilmington</li>
                <li>• Newark</li>
                <li>• Dover</li>
                <li>• New Castle County</li>
                <li>• All Delaware communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions About Soffit Repair & Replacement"
        faqs={[
          {
            question: 'Can soffits be repaired?',
            answer:
              'Yes, most soffit problems can be effectively repaired depending on the extent of damage. Minor issues like small cracks, loose panels, or damaged ventilation screens can often be fixed without full replacement. However, extensively rotted, structurally compromised, or outdated soffits typically require complete replacement for proper function, optimal ventilation, and long-term protection.',
          },
          {
            question: 'Is it hard to replace soffits?',
            answer:
              'Soffit replacement is a complex project requiring specialized skills, proper tools, and safety equipment for working at height. The process involves removing old materials, inspecting and repairing the underlying structure, calculating proper ventilation requirements, and precisely installing new soffits. Professional installation ensures structural integrity, optimal ventilation performance, and warranty protection.',
          },
          {
            question: 'How to fix soffit gaps?',
            answer:
              'Soffit gaps should be properly sealed to prevent pest intrusion and maintain ventilation efficiency. We use appropriate caulking, trim pieces, or replacement panels depending on the gap size and cause. Proper repair maintains the soffit\'s function while preventing water and pest problems.',
          },
          {
            question: 'Who repairs a soffit?',
            answer:
              'Qualified roofing and exterior contractors repair soffits. Look for licensed contractors with experience in soffit systems, proper insurance coverage, and good local references. Professional repair ensures proper ventilation function and prevents costly moisture damage.',
          },
          {
            question: 'How to repair a damaged soffit?',
            answer:
              'Soffit repair involves assessing the damage extent, removing damaged sections, addressing underlying issues like moisture or structural problems, and installing matching replacement materials. Proper repair restores ventilation function and prevents further damage to your roof system.',
          },
          {
            question: 'What are the common problems with soffits?',
            answer:
              'Common soffit problems include rotted wood boards, sagging aluminum panels, damaged ventilation screens, pest intrusion, paint peeling, loose fasteners, and structural separation from the fascia board. These issues can lead to moisture problems and reduced attic ventilation if not addressed promptly.',
          },
          {
            question: 'What materials are used for soffit repair?',
            answer:
              'Soffit repair materials include aluminum panels, vinyl boards, wood planks, fiber cement panels, galvanized fasteners, ventilation screens, caulking, trim pieces, and appropriate flashing. We match existing materials when possible or recommend upgraded options for better durability.',
          },
          {
            question: 'How to prevent future soffit damage?',
            answer:
              'Prevent soffit damage through regular inspection, prompt repair of small issues, maintaining proper attic ventilation, controlling moisture sources, keeping gutters clean, trimming overhanging branches, and scheduling professional maintenance. Annual inspections help catch problems before they become expensive repairs.',
          },
          {
            question: 'What are the different types of soffit materials?',
            answer:
              'Common soffit materials include aluminum (durable and low-maintenance), vinyl (cost-effective and weather-resistant), wood (traditional appearance but requires maintenance), fiber cement (composite material resistant to moisture), and steel (heavy-duty but prone to rust). Each material has specific installation requirements and performance characteristics for replacement projects.',
          },
          {
            question: 'How much does soffit replacement cost?',
            answer:
              'Soffit replacement costs vary based on material choice, home size, accessibility, and ventilation requirements. Vinyl soffit replacement typically costs $8-12 per linear foot, aluminum ranges $10-15 per linear foot, and premium materials like fiber cement cost $15-25 per linear foot. We provide detailed estimates including materials, labor, and any necessary structural repairs.',
          },
          {
            question: 'How long does soffit replacement take?',
            answer:
              'Complete soffit replacement typically takes 1-3 days depending on home size and complexity. Simple single-story homes may be completed in one day, while larger or multi-story homes require additional time. Weather conditions and the need for structural repairs can extend the timeline. We work efficiently while maintaining quality standards.',
          },
          {
            question: 'Do I need permits for soffit replacement?',
            answer:
              'Most soffit replacement projects do not require permits since they\'re considered maintenance rather than structural changes. However, if significant structural repairs or modifications to ventilation systems are needed, permits may be required. We handle permit applications when necessary and ensure all work meets local building codes.',
          }
        ]}
      />

      {/* Why Choose Paragon */}
      <WhyParagon
        title="Why Choose Paragon Exterior for Soffit Repair?"
        titleAs="h2"
        customReasons={[
          {
            icon: require('@heroicons/react/24/solid').WrenchScrewdriverIcon,
            title: "Expert Soffit Repair Specialists",
            description: "Our soffit repair experts quickly identify and fix all types of soffit problems with precision, using quality materials and proven techniques for lasting results.",
            keywordPhrase: "expert soffit repair"
          },
          {
            icon: require('@heroicons/react/24/solid').HomeIcon,
            title: "Complete Ventilation Solutions",
            description: "We don't just fix soffits – we ensure your entire ventilation system works properly to protect your home from moisture damage and structural problems.",
            keywordPhrase: "soffit ventilation repair"
          },
          {
            icon: require('@heroicons/react/24/solid').ShieldCheckIcon,
            title: "Guaranteed Quality Repairs",
            description: "Our soffit repair services are backed by comprehensive warranties and use premium materials for repairs that protect your home and maintain proper ventilation.",
            keywordPhrase: "guaranteed soffit repair"
          }
        ]}
        className="bg-gray-50"
      />

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      <div className="py-12">
        <GetEstimate />
      </div>
    </div>
  );
}