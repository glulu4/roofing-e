import HeroVideo from "@/components/landing-ui/HeroVideo";
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
import GoogleReviews from "@/components/landing-ui/GoogleReviews";
import HowWeWork from "@/components/landing-ui/HowWeWork";
import Expertise from "@/components/landing-ui/Expertise";



export const metadata: Metadata = {
  title: "Roofing & Siding Experts Near You | Paragon Exterior",
  description: `Paragon Exterior is a trusted roofing and siding company, offering expert roofing, siding, and exterior services. We serve the Greater Philadelphia area.`,
};

const Page = () => {
  return (
    <div>
      {/* Hero Video Section */}
      <div className="flex w-full">
        <HeroVideo
          text="Expert Roofing & Exterior Services"
          secText="Trusted roofing, siding, and exterior experts delivering top-quality solutions"
          video="/videos/house3short.mp4"
          poster="/images/home/default.webp"
        />
      </div>


        {/* change to maybe roofing company section */}
      <RoofingCompany />



      <RoofingServices />

      

      <div >
        <HowWeWork />
      </div>

      <div>
        <Expertise/>
      </div>

      <div className="flex justify-center items-center">
        <Enrich />
      </div>


      <Exceptional />


      {/* Reviews and Five Stars Section */}
      <Branding />
      <FiveStars />

      <GoogleReviews />
      <div className="flex flex-col justify-center items-center sm:py-16 md:py-20">
        <Review />
      </div>





      <div>
        <TrustedBy />
      </div>
      {/* Get Estimate Section */}
      <div >
        <GetEstimate />
      </div>



    </div>
  );
};

export default Page;
