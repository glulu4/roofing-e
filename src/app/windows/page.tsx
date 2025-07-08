import HeaderText from '@/components/HeaderText';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import SecondaryText from '@/components/SecondaryText';
import Hero from '@/components/service-page/Hero';
import ServicesGrid from '@/components/service-page/Services';
import WhyParagon from '@/components/WhyParagon';
import HorizontalSlider from '@/components/windows/Slider';
import React from 'react'


const services = [
  {
    id: 1,
    title: 'Window Installation',
    href: '/windows/window-installation',
    description: 'Professional window installation services for energy-efficient and stylish windows. Upgrade your home with our expert team.',
    imageUrl: '/images/window/window-installation-card.avif',
  },
  {
    id: 2,
    title: 'Window Replacement',
    href: '/windows/window-replacement',
    description: 'Complete window replacement services to enhance your home’s energy efficiency and aesthetics. Choose from a variety of styles and materials.',
    imageUrl: '/images/window/window-replacement.webp',
  },
  {
    id: 2,
    title: 'Window Repair',
    href: '/windows/window-repair',
    description: 'Complete window replacement services to enhance your home’s energy efficiency and aesthetics. Choose from a variety of styles and materials.',
    imageUrl: '/images/window/window-repair-card.webp',
  },

];

export const metadata = {
  title: 'Window Repair & Installation | Paragon Exterior',
  description: 'Upgrade your home with our premium window installation services. From energy-efficient windows to stylish designs, we offer solutions that improve comfort and curb appeal.',
}
function page() {
  return (
    <div>
      <Hero
        mainText="Windows That Enhance Your Home's Beauty and Efficiency"
        subText="Upgrade your home with our premium window installation services. From energy-efficient windows to stylish designs, we offer solutions that improve comfort and curb appeal."
        imgSrc="/images/window/window-hero2.webp"
        imgAlt="Paragon Exterior window installation project"
      />
      <div className="flex flex-col justify-center sm:text-center items-center sm:w-5/6 mx-auto text-left px-8 py-32">
        <HeaderText as="h1" variant='large'>
          Trusted Window Contractor for Quality Solutions
        </HeaderText>
        <div className='my-12'>
          <SecondaryText>
            Choosing the right windows is essential for improving your home’s comfort, energy efficiency, and curb appeal. Well-designed windows help insulate your home, reduce energy loss, and ease the burden on your HVAC system in both hot summers and cold winters. Whether you’re upgrading outdated windows or looking for new window installations, Paragon Exterior will guide you in selecting stylish, durable solutions that enhance your home and help lower utility bills.
          </SecondaryText>
          <SecondaryText>
            At Paragon Exterior®, we’re more than just a window installation company — we’re your trusted partner in exterior improvement. From window replacement to custom window solutions, we help homeowners across Pennsylvania, New Jersey, and Delaware find high-quality products that provide natural light, fresh air, and superior protection from the elements. Let our expert team make the process simple and deliver results that transform your home’s look and performance.
          </SecondaryText>
        </div>
      </div>
      <div className='pb-12'>
        <ServicesGrid services={services} />
      </div>
      <HorizontalSlider />
      <WhyParagon
        title='Why Choose Paragon Exterior for Your Window Needs?'
        subTitle='At Paragon Exterior, we take pride in being your trusted window contractor. Our team of experts is dedicated to providing top-notch window installation, replacement, and repair services. We understand that windows are a crucial part of your home’s exterior, and we strive to deliver solutions that enhance both aesthetics and energy efficiency. With our commitment to quality craftsmanship and customer satisfaction, you can trust us to transform your home with beautiful, functional windows.'
      />

      <GetEstimate />
    </div>
  )
}

export default page;