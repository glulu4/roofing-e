import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import InfoSection from "@/components/service-page/Info";
import Row from "@/components/Row";
import Image from "next/image";
import {FaHandshake, FaAward, FaLightbulb} from "react-icons/fa"; // Import react-icons

export async function generateMetadata() {
  return {
    title: "About Paragon Exterior",
    description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",
    openGraph: {
      title: "About Paragon Exterior",
      description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",

    },
  };
}

const AboutPage = () => {
  return (
    <div className="">
      <main className="container mx-auto px-5 py-16 sm:py-24 lg:py-32">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-pretty text-5xl font-semibold tracking-tight text-primaryblue sm:text-6xl">
            About Paragon Exterior
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Your trusted partner for roofing and solar solutions, bringing excellence and innovation to every project.
          </p>
        </div>

        {/* Image and Intro */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <Image
              src="/images/about-house.jpeg" // Replace with your actual image
              alt="Paragon Exterior Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primaryblue sm:text-4xl">
              Who We Are
            </h2>
            <SecondaryText>
              At Paragon Exterior, we pride ourselves on delivering top-notch roofing, siding, window, and all exterior services. 
              We are on a mission to redefine the home improvement experience for our customers. We explain
              everystep of the process, so you know exactly what you&apos;re getting.
            </SecondaryText>
            <SecondaryText> 
               Founded with a mission to redefine home improvement, we’ve built a reputation for
              craftsmanship, innovation, and unparalleled customer service.
              Our roofing and siding company has been serving PA, NJ, and DE for years on end, completing roof roof replacements, 
              siding replacements, gutter installations, and commercial roofs. 
            </SecondaryText>
            <SecondaryText>
              From siding to roofing  we believe in creating sustainable and
              energy-efficient homes. Our team of experts is committed to helping you protect your investment while
              enhancing the beauty and value of your property.
            </SecondaryText>
          </div>
        </div>


        <CoreValues />

        {/* Roofing Services Section */}
        <div className="mt-24">
          <InfoSection
            imgAlt="Professional roofing services and GAF system installation"
            imgSrc="/images/roof-service/house7.jpeg"
            title="Expert Roofing Services & GAF Systems"
            mainContent={
              <SecondaryText>
                As a trusted <strong>roofing contractor</strong> serving PA, NJ, and DE, Paragon Exterior specializes in comprehensive <strong>roofing services</strong> that protect your home. We install full GAF roofing systems for the majority of homeowners, providing industry-leading warranties and proven performance. Our <strong>roof replacement</strong> and <strong>roof repair</strong> services use premium materials designed to withstand harsh weather conditions.
              </SecondaryText>
            }
            bottomContent={
              <>
                <SecondaryText>
                  Whether you need emergency <strong>roof leak repair</strong>, complete <strong>roof replacement</strong>, or preventive maintenance, our certified roofing team delivers reliable solutions. We also specialize in <strong>metal roofing</strong>, including standing seam and corrugated systems, <strong>flat roofing</strong> for commercial properties, and Velux skylight installations. Every roofing project includes thorough inspections and quality materials that extend your roof&apos;s lifespan.
                </SecondaryText>
              </>
            }
            className="text-left"
          />
        </div>

        {/* Siding Services Section */}
        <div className="mt-16">
          <Row
            title="Professional Siding Installation & Repair"
            description={
              <div>
                <SecondaryText>
                  Our expert <strong>siding contractors</strong> provide comprehensive <strong>siding installation</strong>, <strong>siding repair</strong>, and <strong>siding replacement</strong> services using premium materials. We work exclusively with James Hardie fiber cement siding, known for its durability and weather resistance. Whether you choose <strong>vinyl siding</strong>, <strong>cedar siding</strong>, <strong>aluminum siding</strong>, or <strong>engineered wood siding</strong>, we ensure proper installation that enhances your home&apos;s protection and curb appeal.
                </SecondaryText>
                <SecondaryText className="mt-4">
                  From traditional horizontal siding to modern <strong>board and batten siding</strong> styles, our siding specialists help you select materials that complement your home&apos;s architecture while providing long-lasting performance. Every siding project includes moisture barrier installation and precise finishing work.
                </SecondaryText>
              </div>
            }
            imageSrc="/images/siding/siding2.webp"
            reverse={true}
            headerColor="text-primaryblue"
            bodyColor="text-gray-700"
            className="py-16"
          />
        </div>

        {/* Gutters Services Section */}
        <div className="mt-16">
          <InfoSection
            imgAlt="Professional gutter installation and repair services"
            imgSrc="/images/gutters/img1.webp"
            title="Complete Gutter Solutions"
            mainContent={
              <SecondaryText>
                Protect your home&apos;s foundation with our professional <strong>gutter installation</strong>, <strong>gutter repair</strong>, and <strong>gutter replacement</strong> services. We install seamless aluminum, vinyl, and copper gutters designed to channel water away from your property effectively. Our gutter systems include proper downspout placement and optional gutter guards to reduce maintenance requirements.
              </SecondaryText>
            }
            bottomContent={
              <>
                <SecondaryText>
                  Whether you need emergency gutter repairs, complete system upgrades, or <strong>downspout services</strong>, our team ensures proper water management around your home. We address common issues like sagging gutters, improper drainage, and clogged systems to prevent water damage to your siding, foundation, and landscaping.
                </SecondaryText>
              </>
            }
            imagePosition="left"
            className="text-left"
          />
        </div>

        {/* Windows Services Section */}
        <div className="mt-16">
          <Row
            title="Energy-Efficient Window Solutions"
            description={
              <div>
                <SecondaryText>
                  Upgrade your home&apos;s comfort and energy efficiency with professional <strong>window installation</strong>, <strong>window replacement</strong>, and <strong>window repair</strong> services. We install ENERGY STAR® rated windows in vinyl, fiberglass, wood, and composite materials. Popular styles include double-hung, casement, bay, bow, picture, and awning windows designed to enhance your home&apos;s aesthetics while reducing energy costs.
                </SecondaryText>
                <SecondaryText className="mt-4">
                  Our window specialists help you select the right windows for your climate and architectural style. From single window replacements to whole-house upgrades, we ensure proper installation with weatherproofing and insulation that maximizes performance and longevity.
                </SecondaryText>
              </div>
            }
            imageSrc="/images/window/window-hero2.webp"
            headerColor="text-primaryblue"
            bodyColor="text-gray-700"
            className="py-16"
          />
        </div>

        {/* Commercial Services Section */}
        <div className="mt-16">
          <InfoSection
            imgAlt="Commercial roofing and exterior services"
            imgSrc="/images/commercial/commercial-roof.webp"
            title="Commercial Roofing & Exterior Solutions"
            mainContent={
              <SecondaryText>
                Paragon Exterior provides comprehensive <strong>commercial roofing</strong> services for businesses across Pennsylvania, New Jersey, and Delaware. We specialize in <strong>flat roofing</strong> systems including EPDM, TPO, and built-up roofs, as well as <strong>commercial metal roofing</strong> for warehouses, offices, retail spaces, and industrial buildings. Our commercial services include roof repairs, full replacements, and preventive maintenance programs.
              </SecondaryText>
            }
            bottomContent={
              <>
                <SecondaryText>
                  Every commercial project is managed with minimal business disruption and strict safety protocols. We&apos;re fully licensed, insured, and certified to install top commercial roofing brands. Whether you need emergency <strong>commercial roof repair</strong> or planned <strong>commercial roof replacement</strong>, our experienced team delivers durable, energy-efficient solutions that protect your investment.
                </SecondaryText>
              </>
            }
            imagePosition="left"
            className="text-left"
          />
        </div>

        {/* Call to Action */}
        <div className="pt-10">
          <GetEstimate />
        </div>

      </main>
    </div>
  );
};

export default AboutPage;


function CoreValues() {
  return <div className="mt-24 bg-gray-50 p-10 w-full rounded-md">
    <HeaderText as="h2" className="text-center font-semibold tracking-tight text-primaryblue">
      Our Core Values
    </HeaderText>
    <SecondaryText className="mt-4 text-center text-gray-600">
      At Paragon Exterior, our values guide everything we do. Here’s what sets us apart:
    </SecondaryText>
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="text-center">
        <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
          <FaHandshake className="h-8 w-8 text-amber-500" /> {/* New Integrity Icon */}
        </div>
        <h3 className="mt-4 text-xl font-bold text-primaryblue">Integrity</h3>
        <p className="mt-2 text-gray-600">
          We believe in doing what’s right, every time. Honesty and transparency are at the heart of our work.
        </p>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
          <FaAward className="h-8 w-8 text-amber-500" /> {/* New Excellence Icon */}
        </div>
        <h3 className="mt-4 text-xl font-bold text-primaryblue">Excellence</h3>
        <p className="mt-2 text-gray-600">
          Quality craftsmanship and attention to detail define every project we undertake.
        </p>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
          <FaLightbulb className="h-8 w-8 text-amber-500" /> {/* New Innovation Icon */}
        </div>
        <h3 className="mt-4 text-xl font-bold text-primaryblue">Innovation</h3>
        <p className="mt-2 text-gray-600">
          We leverage the latest technology to deliver energy-efficient and sustainable solutions.
        </p>
      </div>
    </div>
  </div>;
}

