import FAQSection from '@/components/FAQSection';
import HeaderText from '@/components/HeaderText';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';
import SecondaryText from '@/components/SecondaryText';
import Hero from '@/components/service-page/Hero';
import ServicesGrid from '@/components/service-page/Services';
import WhyParagon from '@/components/WhyParagon';
import HorizontalSlider from '@/components/windows/Slider';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Window Installation',
    href: '/windows/window-installation',
    description: 'Professional window installation for better comfort, energy savings, and style.',
    imageUrl: '/images/window/window-installation-card.avif',
  },
  {
    id: 2,
    title: 'Window Replacement',
    href: '/windows/window-replacement',
    description: 'Replace outdated windows to improve your home’s energy efficiency and curb appeal.',
    imageUrl: '/images/window/window-replacement.webp',
  },
  {
    id: 3,
    title: 'Window Repair',
    href: '/windows/window-repair',
    description: 'Fix broken glass, drafts, and stuck windows quickly and affordably.',
    imageUrl: '/images/window/window-repair-card.webp',
  },
];

const faqData = [
  {
    question: "How do I know if I need window replacement or just repair?",
    answer: "If your windows are drafty, foggy, or hard to open, replacement might be best. Small issues like broken locks or cracked glass can often be repaired. We’ll inspect your windows and recommend the right fix.",
  },
  {
    question: "What types of windows do you install?",
    answer: "We install vinyl, fiberglass, wood, and composite windows. Popular styles include double-hung, casement, sliding, bay, and more.",
  },
  {
    question: "Are your windows energy efficient?",
    answer: "Yes! We install ENERGY STAR® rated windows that help lower energy bills and keep your home comfortable year-round.",
  },
  {
    question: "How long does window installation take?",
    answer: "Most jobs take 1 to 2 days depending on how many windows you need replaced. We work quickly and cleanly.",
  },
  {
    question: "Do you offer financing or free estimates?",
    answer: "Yes. We offer free estimates and flexible financing options to fit your budget.",
  },
];

export const metadata = {
  title: 'Window Repair & Installation | Paragon Exterior',
  description: 'Professional window repair and installation services in PA, NJ, and DE. Replace or upgrade your windows to improve comfort, lower energy bills, and add style to your home.',
};

function Page() {
  return (
    <div>
      <Hero
        mainText="Window Installation & Replacement Services"
        subText="Make your home more energy efficient, quiet, and beautiful with new windows installed by local experts."
        imgSrc="/images/window/window-hero2.webp"
        imgAlt="Paragon Exterior window installation project"
      />

      <div className="flex flex-col justify-center sm:text-center items-center sm:w-5/6 mx-auto text-left px-8 py-32">
        <HeaderText as="h1" variant="large">
          Trusted Window Contractor in PA, NJ & DE
        </HeaderText>
        <div className="my-12">
          <SecondaryText>
            Old windows can let in drafts, drive up energy bills, and make your home feel less comfortable. At Paragon Exterior, we help homeowners replace or repair their windows with options that improve efficiency and fit their style.
          </SecondaryText>
          <SecondaryText>
            Whether you need a single window replaced or want to upgrade every window in your home, our expert team makes the process easy. We install high-quality, energy-saving windows that look great and perform well in all seasons.
          </SecondaryText>
        </div>
      </div>

      <div className="pb-12">
        <ServicesGrid services={services} />
      </div>

      <HorizontalSlider />

      <FAQSection
        title="Frequently Asked Questions About Window Services"
        faqs={faqData}
      />

      <GoogleReviews />

      <WhyParagon
        title="Why Choose Paragon Exterior for Your Window Project?"
        subTitle="We specialize in window installation, replacement, and repair for homes across Pennsylvania, New Jersey, and Delaware. Our team focuses on honest advice, quality work, and customer satisfaction—so you get windows that last and look great."
      />

      <GetEstimate />
    </div>
  );
}

export default Page;
