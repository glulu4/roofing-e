"use client";
import HeroVideo from "@/components/landing-ui/HeroVideo";
import Customizable from "@/components/landing-ui/Customizable";
import FiveStars from "@/components/landing-ui/FiveStars";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import Review from "@/components/landing-ui/Review";
import Change from "@/components/landing-ui/Change";
import Enrich from "@/components/landing-ui/Enrich";
import Customize2 from "@/components/landing-ui/Exceptional";
import Branding from "@/components/landing-ui/Branding";
import TrustedBy from "@/components/landing-ui/TrustedBy";
import Exceptional from "@/components/landing-ui/Exceptional";

const Page = () => {
  return (
    <div>
      {/* Hero Video Section */}
      <div className="flex w-full">
        <HeroVideo
          videos={[
            "/videos/house3.mp4",

            "/videos/house1.mp4",
            "/videos/house2.mp4",
          ]}
        />
      </div>


      <Change />



      <div >
        <Customizable />
      </div>

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
