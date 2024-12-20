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
    <div className="bg-white">
      <main className="container mx-auto px-5 py-16 sm:py-24 lg:py-32">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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

        {/* Our Values */}
        {/* <div className="mt-24">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            At Paragon Exterior, our values guide everything we do. Here’s what sets us apart:
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We believe in doing what’s right, every time. Honesty and transparency are at the heart of our work.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                Quality craftsmanship and attention to detail define every project we undertake.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.07 4.93a10 10 0 11-14.14 14.14A10 10 0 0119.07 4.93zM12 18.93V20a8 8 0 10-6.93-12H7v1H4v-3h1v1.07C8.18 4.18 10.06 3 12 3v1.07A7.932 7.932 0 004.93 6.93 8.001 8.001 0 1012 18.93z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We leverage the latest technology to deliver energy-efficient and sustainable solutions.
              </p>
            </div>
          </div>
        </div> */}

        <div className="mt-24">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900">
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
              <h3 className="mt-4 text-xl font-bold text-gray-900">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We believe in doing what’s right, every time. Honesty and transparency are at the heart of our work.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                <FaAward className="h-8 w-8 text-amber-500" /> {/* New Excellence Icon */}
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                Quality craftsmanship and attention to detail define every project we undertake.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                <FaLightbulb className="h-8 w-8 text-amber-500" /> {/* New Innovation Icon */}
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We leverage the latest technology to deliver energy-efficient and sustainable solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <GetEstimate/>

      </main>
    </div>
  );
};

export default AboutPage;
