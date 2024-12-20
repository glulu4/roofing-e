
"use client";
import HeroVideo from "@/components/landing-ui/HeroVideo";
import ArrowProgress from "@/components/landing-ui/ArrowProgress";
import Customizable from "@/components/landing-ui/Customizable";
import Expertise from "@/components/landing-ui/Expertise";
import FiveStars from "@/components/landing-ui/FiveStars";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import ProtectionPyramid from "@/components/landing-ui/PyramidSection";
import PyramidSection from "@/components/landing-ui/PyramidSection";
import QualitySection from "@/components/landing-ui/Quality";
import Review from "@/components/landing-ui/Review";
import {wisp} from "@/lib/wisp";
import Change from "@/components/landing-ui/Change";
import Enrich from "@/components/landing-ui/Enrich";
import Customize2 from "@/components/landing-ui/Customize2";
import Branding from "@/components/landing-ui/Branding";

const Page = async ({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({limit: 6, page});
  return (
    <div>
      {/* Hero Video Section */}
      <div className="flex w-full">
        <HeroVideo 
        videos= {[
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

      <Enrich/>


      <Customize2 />
      {/* Customizable Section */}

      {/* Expertise Section */}
      {/* <div className="py-8 sm:py-16 md:py-20">
        <Expertise />
      </div> */}


            {/* Protection Pyramid Section */}
      {/* <div className="py-8 sm:py-16 md:py-20">
        <div className="bg-card mx-auto w-10/12 rounded-md p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-left">
            Protect Your Home from the Elements
          </h2>
          <div className="flex flex-col justify-center items-center py-8 sm:py-16">
            <ProtectionPyramid
            />
          </div>
        </div>
      </div> */}



      {/* Reviews and Five Stars Section */}
      <Branding />
      <div className="flex flex-col justify-center items-center sm:py-16 md:py-20">
        <FiveStars />
        <Review />
      </div>



      {/* Get Estimate Section */}
      <div className="pb-16 md:pt-2 md:pb-4 sm:pb-10">
        <GetEstimate />
      </div>

    </div>
  );
};

export default Page;
