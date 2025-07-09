import HeaderText from '@/components/HeaderText'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import SecondaryText from '@/components/SecondaryText'
import HowItWorks from '@/components/siding/HowItWorks'
import SidingHeader from '@/components/siding/SidingHeader'
import SidingMaterial from '@/components/siding/SidingMaterial'
import StepsSection from '@/components/siding/StepsSection'
import React from 'react'
import type {Metadata} from 'next'
import ServicesGrid from '@/components/service-page/Services'
import FAQSection from '@/components/FAQSection'
import InfoSection from '@/components/service-page/Info'
import Row from '@/components/Row'


const services = [
  {
    id: 1,
    title: 'Siding Installation',
    href: '/siding/siding-installation',
    description: "Expert siding installation services to enhance your home's protection and curb appeal.Choose from a variety of materials including fiber cement, vinyl, and engineered wood.",
    imageUrl: '/images/siding/siding-service/siding-installation.webp',
  },
  {
    id: 2,
    title: 'Siding Repair',
    href: '/siding/siding-repair',
    description: 'Expert siding repair services to fix damage from weather, pests, or wear. Ensure your home remains energy-efficient and visually appealing with our expert solutions.',
    imageUrl: '/images/siding/siding-service/siding-repair.webp',
  },
  {
    id: 3,
    title: 'Siding Replacement',
    href: '/siding/siding-replacement',
    description: "Complete siding replacement services to upgrade your home's exterior.We offer a range of durable materials like fiber cement, vinyl, and aluminum to suit your style and budget.",
    imageUrl: '/images/siding/siding-service/siding-replacement.webp',
  },
  {
    id: 4,
    title: 'Board and Batten Siding',
    href: '/siding/board-and-batten-siding',
    description: 'Stylish vertical siding options to add a modern touch to your home. Our team specializes in installing vertical siding that enhances aesthetics and provides superior protection against the elements.',
    imageUrl: '/images/siding/siding-service/vertical-siding.webp',
  },
]

export const metadata: Metadata = {
  title: 'Expert Siding Installation, Repair & Replacement Contractors | Vinyl Siding Specialists',
  description: 'Professional siding contractors specializing in siding installation, siding repair, and siding replacement. Expert vinyl siding services, fiber cement, and board & batten siding solutions for Pennsylvania homes.',
}

export default function page() {
  return (
    <div>

      <SidingHeader />

      <div className="flex flex-col justify-center items-center w-5/6 mx-auto sm:text-center text-left px-6 py-32">
        <HeaderText as="h1" variant='large'>
          Professional Siding Contractors You Can Trust
        </HeaderText>
        <div className='my-12'>
          <SecondaryText>
            Choosing the right siding for your home is a vital decision that impacts more than just exterior appearance.
            Quality siding works hand-in-hand with residential roofing to create a protective shield against the elements.
            It boosts energy efficiency, reduces utility bills, and enhances your home&apos;s overall comfort and curb appeal.
            Whether you&apos;re planning new <strong>siding installation</strong>, tackling <strong>siding repair</strong>, or considering <strong>siding replacement</strong>,
            you can trust Paragon Exterior to be your siding contractors. Wesiding&apos;sll guide you through selecting durable materials like <strong>fiber cement</strong>, <strong>vinyl siding</strong>, <strong>aluminum</strong>, <strong>cedar</strong>, and <strong>engineered wood</strong> for lasting performance.
          </SecondaryText>

          <SecondaryText>
            At Paragon Exterior&reg;, we&rsquo;re more than a siding and roofing company — we&rsquo;re your trusted partner in exterior transformation.
            From roof repair to expert <strong>siding installations</strong> and <strong>vertical siding</strong> solutions, we help homeowners in humid continental climates like Pennsylvania
            choose materials that withstand hot summers, harsh winters, and year-round weather.
            Let our skilled roofing and siding contractors simplify the process and deliver results you&rsquo;ll love.
          </SecondaryText>
        </div>
      </div>

      <div>
        <ServicesGrid services={services} />
      </div>

      {/* New SEO-focused section about vinyl siding */}
      <div className="bg-gray-50 py-16">


        <InfoSection
          imgAlt='why choose vinyl siding for your home'
          imgSrc='/images/siding/siding2.webp'
          title="Why Choose Vinyl Siding for Your Home?"
          mainContent={
            <>
              <SecondaryText>
                <strong>Vinyl siding</strong> remains one of the most popular choices for homeowners seeking durable, low-maintenance exterior solutions. Our professional <strong>vinyl siding installation</strong> services provide exceptional value, combining affordability with long-lasting performance. Unlike wood siding that requires regular painting and maintenance, vinyl siding offers decades of protection with minimal upkeep requirements.
              </SecondaryText>

            </>
          }
          bottomContent={
            <>
                          <SecondaryText>
                When you choose Paragon Exterior for your <strong>vinyl siding replacement</strong>, yousiding&apos;sre investing in energy efficiency and curb appeal. Modern vinyl siding systems include insulation options that can significantly reduce heating and cooling costs. Our expert team ensures proper installation techniques that maximize your vinyl siding&apos;s lifespan and performance, making us the preferred choice for <strong>siding contractors</strong> in Pennsylvania.
                </SecondaryText>
              <SecondaryText>Even the highest-quality vinyl siding may occasionally need attention. Our comprehensive <strong>vinyl siding repair</strong> services address common issues like cracking, fading, or storm damage. Whether you need minor repairs or extensive restoration, our experienced contractors use premium materials and proven techniques to restore your homesiding&apos;ss exterior beauty and protection.</SecondaryText>

            </>

          }
          
          className="text-left"
        />
      </div>

      {/* New section about siding installation process */}
      <div className="py-16">


        <InfoSection
          imgAlt='siding installation process'
          imgSrc='/images/siding/siding3.webp'
          title="Professional Siding Installation Process"
          mainContent={
            <>
              <SecondaryText>
                Our comprehensive <strong>siding installation</strong> process begins with a detailed assessment of your homesiding&apos;ss current exterior condition. We inspect existing siding, check for structural issues, and evaluate insulation needs to ensure your new siding system performs optimally. This thorough approach sets us apart from other <strong>siding contractors</strong> and guarantees superior results.
              </SecondaryText>
            </>
          }
          bottomContent={
            <>
              <SecondaryText>
                During the <strong>siding installation</strong> phase, our certified contractors follow industry best practices for moisture management, proper fastening techniques, and seamless integration with existing roofing and trim systems. We use premium materials and advanced installation methods to ensure your new siding withstands Pennsylvaniasiding&apos;ss challenging weather conditions while maintaining its aesthetic appeal for years to come.
              </SecondaryText>

              <SecondaryText>
                Quality control is paramount in every <strong>siding installation</strong> project. Our team conducts multiple inspections throughout the process, from initial preparation to final cleanup. We ensure proper alignment, secure fastening, and weather-tight seals that protect your home investment. This attention to detail explains why homeowners consistently choose Paragon Exterior for their siding needs.
              </SecondaryText>
            </>
          }
          imagePosition='left'
          className="text-left"
        />
      </div>

      {/* Siding Repair section using Row component */}
      <div className="bg-blue-50 py-16">
        <InfoSection
          imgAlt="expert siding repair services"
          imgSrc="/images/siding/siding4.webp"
          title="Expert Siding Repair Services"
          mainContent={
        <>
          <SecondaryText>
            Even high-quality siding can suffer damage from severe weather, impact, or normal wear over time. Our professional <strong>siding repair</strong> services address these issues quickly and effectively, preventing minor problems from becoming major expenses. From loose panels and cracked sections to storm damage and pest-related issues, our skilled contractors restore your siding&apos;s integrity and appearance.
          </SecondaryText>
        </>
          }
          bottomContent={
        <>
          <SecondaryText className="mt-4">
            Early intervention through professional <strong>siding repair</strong> can extend your siding&apos;s lifespan significantly while maintaining your homesiding&apos;ss energy efficiency. Our repair specialists use color-matched materials and proven techniques to ensure seamless integration with existing siding. Whether you need emergency storm damage repair or routine maintenance, we respond promptly to protect your home investment.
          </SecondaryText>
          <SecondaryText className="mt-4">
            Our comprehensive <strong>siding repair</strong> services include damage assessment, moisture inspection, structural evaluation, and complete restoration. We identify underlying issues that might compromise your siding&apos;s performance and address them during the repair process. This thorough approach ensures long-lasting results and helps prevent future problems.
          </SecondaryText>
        </>
          }
          imagePosition="left"
          className="text-left bg-blue-50"
        />
      </div>

      {/* Siding Replacement section using Row component */}
      <div className="py-16">
        <InfoSection
          imgAlt="when to consider siding replacement"
          imgSrc="/images/siding/siding5.webp"
          title="When to Consider Siding Replacement"
          mainContent={
        <>
          <SecondaryText>
            <strong>Siding replacement</strong> becomes necessary when repair costs exceed the value of restoration or when your current siding no longer provides adequate protection. Signs that indicate the need for <strong>siding replacement</strong> include widespread damage, frequent repair requirements, significant energy loss, or outdated materials that compromise your homesiding&apos;ss performance and appearance.
          </SecondaryText>
        </>
          }
          bottomContent={
        <>
          <SecondaryText className="mt-4">
            Modern <strong>siding replacement</strong> offers significant advantages over older siding systems. Todaysiding&apos;ss materials provide superior insulation, weather resistance, and aesthetic options that can transform your homesiding&apos;ss exterior. Our <strong>siding replacement</strong> services include energy-efficient options that can reduce utility costs while enhancing curb appeal and property value.
          </SecondaryText>
          <SecondaryText className="mt-4">
            The <strong>siding replacement</strong> process involves careful removal of existing materials, thorough inspection and preparation of the underlying structure, and installation of new siding systems designed for optimal performance. Our experienced contractors ensure proper integration with roofing, windows, and other exterior elements for a cohesive, weather-tight building envelope.
          </SecondaryText>
        </>
          }
          imagePosition="right"
          className="text-left"
        />
      </div>
      <div>
        <SidingMaterial />
      </div>

      <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-left px-6 py-32">
        <HeaderText as='h2' variant='large' className='text-left'>
          The Steps We Take as Your Professional Siding Contractors
        </HeaderText>

        <div className='my-12'>
          <SecondaryText>
            Replacing siding is a structured process that ensures your home remains protected, energy-efficient, and visually appealing. At Paragon Exterior®, our approach combines expert <strong>siding installation</strong> with the knowledge and precision of a trusted roofing contractor. Each phase — from removing old materials and inspecting for damage to precise installation and cleanup — is handled by our experienced team. Whether you&apos;re updating siding or working with one of the best roofing companies near you for roof repair or residential roofing, we make the process simple, stress-free, and built to last.
          </SecondaryText>

          <SecondaryText>
            Our certified <strong>siding contractors</strong> follow a systematic approach that begins with comprehensive project planning and material selection. We coordinate <strong>siding installation</strong>, <strong>siding repair</strong>, and <strong>siding replacement</strong> projects to minimize disruption to your daily routine while ensuring superior results. From initial consultation to final inspection, every step is designed to exceed your expectations and deliver lasting value.
          </SecondaryText>
        </div>
      </div>

      <div>
        <HowItWorks />
      </div>

      {/* New closing section with strong CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="flex flex-col justify-center items-center w-5/6 mx-auto text-center px-6">
          <HeaderText as='h2' variant='large' className='text-white mb-8'>
            Ready for Professional Siding Services?
          </HeaderText>

          <div className='space-y-6 mb-8'>
            <SecondaryText className='text-gray-300'>
              Donsiding&apos;st let damaged or outdated siding compromise your homesiding&apos;ss protection and beauty. Whether you need <strong>siding installation</strong>, <strong>siding repair</strong>, <strong>siding replacement</strong>, or <strong>vinyl siding</strong> services, Paragon Exteriorsiding&apos;ss experienced <strong>siding contractors</strong> are ready to help. Contact us today for a comprehensive evaluation and discover why Pennsylvania homeowners trust us for all their exterior renovation needs.
            </SecondaryText>
          </div>
        </div>
      </div>

      {/* New FAQ Section using your existing FAQ component */}
      <div className="py-16">
        <SidingFAQ />
      </div>

      <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
        <GetEstimate />
      </div>
    </div>
  )
}

// Siding-specific FAQ component
function SidingFAQ() {
  const sidingFaqData = [
    {
      question: "What types of siding installation services do you offer?",
      answer: "We provide comprehensive siding installation services including vinyl siding, fiber cement, aluminum, cedar, and engineered wood siding installation. Our experienced siding contractors handle both residential and commercial siding projects with expert craftsmanship.",
    },
    {
      question: "How long does siding installation take?",
      answer: "Siding installation typically takes 5-10 days depending on your home's size and the type of siding material. Vinyl siding installation is often faster, while fiber cement and other materials may require additional time for proper installation and finishing.",
    },
    {
      question: "Do you offer siding repair services?",
      answer: "Yes, our siding contractors provide comprehensive siding repair services for all types of siding materials. We handle storm damage, cracked panels, loose siding, and other issues to restore your home's protection and appearance.",
    },
    {
      question: "What is the cost of siding replacement?",
      answer: "Siding replacement costs vary based on material type, home size, and project complexity. Vinyl siding is typically the most affordable option, while fiber cement and cedar cost more but offer enhanced durability. We provide free estimates for all siding replacement projects.",
    },
    {
      question: "How do I know if I need siding replacement or just siding repair?",
      answer: "Our siding contractors will assess your current siding condition and recommend the most cost-effective solution. Minor damage often requires only siding repair, while extensive damage, frequent repairs, or outdated materials may warrant complete siding replacement.",
    },
    {
      question: "What makes vinyl siding a popular choice?",
      answer: "Vinyl siding offers excellent value with low maintenance requirements, wide color selection, and good durability. Vinyl siding installation is typically faster and more affordable than other materials, making it ideal for budget-conscious homeowners seeking quality exterior protection.",
    },
    {
      question: "Do you provide warranties on siding work?",
      answer: "Yes, we provide comprehensive warranties on all siding installation, siding repair, and siding replacement work. Our warranties cover both materials and labor, giving you peace of mind that your investment is protected.",
    },
    {
      question: "Can you help with siding color and style selection?",
      answer: "Absolutely! Our siding contractors provide expert guidance on material selection, colors, and styles that complement your home's architecture. We can show you samples and help you visualize how different siding options will look on your home.",
    },
  ];

  return (
    <FAQSection
      title="Frequently Asked Questions About Siding Services"
      faqs={sidingFaqData}
    />
  );
}