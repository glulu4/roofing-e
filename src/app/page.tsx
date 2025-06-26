import HeroVideo from "@/components/landing-ui/HeroVideo";
import HowWeWork from "@/components/landing-ui/HowWeWork";
import FiveStars from "@/components/landing-ui/FiveStars";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import Review from "@/components/landing-ui/Review";
import RoofingCompany from "@/components/landing-ui/RoofingCompany";
import Enrich from "@/components/landing-ui/Enrich";
import Branding from "@/components/landing-ui/Branding";
import TrustedBy from "@/components/landing-ui/TrustedBy";
import Exceptional from "@/components/landing-ui/Exceptional";
import {Metadata} from "next";
import RoofingServices from "@/components/landing-ui/Services";



export const metadata: Metadata = {
  title: "Roofing Company & Exterior Experts | Paragon Exterior",
  description: "Paragon Exterior is your trusted roofing company specializing in residential and commercial roofing, siding, and gutter services. Serving Philadelphia, New Jersey, and Delaware with quality craftsmanship.",
};

const Page = () => {
  return (
    <div>
      {/* Hero Video Section */}
      <div className="flex w-full">
        <HeroVideo
          text="Roof & Exterior Professionals"
          secText="Your Trusted Partner for Quality Roofing and Exterior Needs"
          
          videos={[
            "/videos/house3.mp4",
            "/videos/house1.mp4",
            "/videos/house2.mp4",
          ]}
        />
      </div>


        {/* change to maybe roofing company section */}
      <RoofingCompany />


      <RoofingServices/>

      {/* <div >
        <HowWeWork />
      </div> */}

      <div className="flex justify-center items-center">
        <Enrich />
      </div>


      <Exceptional />



      {/* Reviews and Five Stars Section */}
      <Branding />
      <div className="flex flex-col justify-center items-center sm:py-16 md:py-20">
        <FiveStars />
        <Review />
      </div>



      <div>
        <TrustedBy />
      </div>
      {/* Get Estimate Section */}
      <div className="pb-16 md:pt-2 md:pb-4 sm:pb-10">
        <GetEstimate />
      </div>



    </div>
  );
};

export default Page;
