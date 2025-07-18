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
  title: 'Expert Siding Installation, Repair & Replacement Contractors',
  description: 'Paragon Exterior is a trusted siding contractors specializing in installation, repair, and replacement. Serving PA, NJ, and DE with quality craftsmanship.',
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
            Choosing the right siding does more than boost your home&apos;s appearance. Quality siding protects your house from harsh weather, helps lower your energy bills, and improves comfort all year.
            That&apos;s why Paragon Exterior exclusively works with <a href="/james-hardie" className="underline text-blue-700">James Hardie</a> for siding material and installation—trusted for durability and style.

            Whether you need new <strong>siding installation</strong>, a quick <strong>siding repair</strong>, or a complete <strong>siding replacement</strong>, Paragon Exterior is the contractor you can rely on.
            We help you choose durable materials like <strong>fiber cement</strong>, <strong>vinyl siding</strong>, <strong>aluminum</strong>, <strong>cedar</strong>, or <strong>engineered wood</strong>—so your home stays protected for years to come.
            </SecondaryText>
          <SecondaryText>
            At Paragon Exterior<sup>&reg;</sup>, we&apos;re more than just siding and roofing—we&apos;re your local partner for exterior upgrades.
            From roof repair to expert <strong>siding installation</strong> and <strong>vertical siding</strong>, we help Pennsylvania homeowners choose materials that handle the heat, cold, storms, and everyday wear.
            Our experienced team makes the process simple, so you get results you&apos;ll love for years.
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
                <strong>Vinyl siding</strong> is a top pick for homeowners—it&apos;s strong, affordable, and low-maintenance. Our <strong>vinyl siding installation</strong> gives you long-lasting protection and fresh curb appeal, all without the hassle of painting or heavy upkeep.
                With Paragon Exterior, your vinyl siding looks great and stands up to Pennsylvania&apos;s weather year after year.
              </SecondaryText>
            </>
          }
          bottomContent={
            <>
              <SecondaryText>
                When you choose Paragon Exterior for <strong>vinyl siding replacement</strong>, you boost both your home&apos;s efficiency and its style.
                Today&apos;s vinyl siding comes with insulation options that help reduce your heating and cooling bills. Our team installs everything with care, so your siding lasts as long as possible and performs at its best.
              </SecondaryText>
              <SecondaryText>
                Even the best siding needs the occasional fix. Our <strong>vinyl siding repair</strong> services cover cracks, fading, or storm damage.
                From small repairs to full restoration, we use top-quality materials and proven techniques to keep your siding looking and working its best.
              </SecondaryText>
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
                Every <strong>siding installation</strong> starts with a free, detailed check of your home&apos;s exterior.
                We inspect your current siding, look for hidden issues, and review insulation needs—so your new siding performs great and lasts for years.
              </SecondaryText>
            </>
          }
          bottomContent={
            <>
              <SecondaryText>
                During installation, our certified contractors use best practices for moisture protection and secure fastening.
                We make sure your new siding fits perfectly with your roof and trim, so you get a tight seal and a beautiful finish.
              </SecondaryText>
              <SecondaryText>
                We pay attention to every detail, from careful alignment to final cleanup. Our commitment to quality means your siding not only looks great, but keeps your home protected in every season.
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
                Even the best siding can get damaged by storms, wind, or everyday life. Our <strong>siding repair</strong> services fix problems quickly, so a small issue doesn&apos;t turn into a big expense.
                Whether you have loose panels, cracks, or pest damage, our team restores your siding&apos;s strength and looks—fast.
              </SecondaryText>
            </>
          }
          bottomContent={
            <>
              <SecondaryText className="mt-4">
                Quick repairs can help your siding last longer and keep your home more energy efficient.
                We use color-matched materials and proven techniques for repairs that blend right in.
              </SecondaryText>
              <SecondaryText className="mt-4">
                Our <strong>siding repair</strong> process includes a full check for hidden moisture, structural issues, and anything else that could cause problems later. You get long-lasting results and peace of mind.
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
                Sometimes, <strong>siding replacement</strong> is the best choice—especially if repairs are adding up or your old siding just isn&apos;t protecting your home.
                Signs you need new siding include major damage, high energy bills, or faded panels that hurt your home&apos;s curb appeal.
              </SecondaryText>
            </>
          }
          bottomContent={
            <>
              <SecondaryText className="mt-4">
                New <strong>siding replacement</strong> brings big benefits: better insulation, stronger weather resistance, and a fresh new look.
                We offer modern materials that last longer and help lower your utility costs.
              </SecondaryText>
              <SecondaryText className="mt-4">
                Our team removes old siding, checks for any hidden damage, and installs your new siding for a perfect fit.
                Everything is carefully integrated with your roof, windows, and trim for a clean, weather-tight finish.
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
            Replacing siding is a step-by-step process to keep your home protected, energy efficient, and looking great.
            At Paragon Exterior®, our experts handle everything—from removing old materials and checking for hidden problems, to precise installation and a spotless cleanup.
          </SecondaryText>
          <SecondaryText>
            Our certified <strong>siding contractors</strong> guide you through material choices, schedule every step, and keep your project on track.
            Whether it&apos;s a full <strong>siding replacement</strong> or a small repair, we make the process easy and stress-free from start to finish.
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
              Don&apos;t let damaged or outdated siding put your home at risk.
              For <strong>siding installation</strong>, <strong>siding repair</strong>, <strong>siding replacement</strong>, or <strong>vinyl siding</strong>, Paragon Exterior&apos;s experienced <strong>siding contractors</strong> are ready to help.
              Contact us today for a free estimate and see why Pennsylvania homeowners trust us for all their exterior needs.
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