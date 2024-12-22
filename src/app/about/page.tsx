import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import {signOgImageUrl} from "@/lib/og-image";
import Image from "next/image";

import {FaHandshake, FaAward, FaLightbulb} from "react-icons/fa"; // Import react-icons

export async function generateMetadata() {
  return {
    title: "About Paragon Exterior",
    description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",
    openGraph: {
      title: "About Paragon Exterior",
      description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",
      images: [
        signOgImageUrl({
          title: "Paragon Exterior",
          label: "About Us",
          brand: "Paragon Exterior",
        }),
      ],
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
              At Paragon Exterior, we pride ourselves on delivering top-notch roofing and solar services that stand the
              test of time. Founded with a mission to redefine home improvement, we’ve built a reputation for
              craftsmanship, innovation, and unparalleled customer service.
            </SecondaryText>
            <p className="mt-4 text-lg text-gray-600">
              From durable roofing solutions to cutting-edge solar installations, we believe in creating sustainable and
              energy-efficient homes. Our team of experts is committed to helping you protect your investment while
              enhancing the beauty and value of your property.
            </p>
          </div>
        </div>


        <div className="mt-24 bg-gray-50 p-10 w-full rounded-md">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-primaryblue">
            Our Core Values
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            At Paragon Exterior, our values guide everything we do. Here’s what sets us apart:
          </p>
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
