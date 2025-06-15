
"use client";
import HeroVideo from "@/components/landing-ui/HeroVideo";
import GetEstimate from "@/components/landing-ui/GetEstimate";
// import QualitySection from "@/components/landing-ui/Quality";
// import ThreeImage from "@/components/ThreeImage";
import RoofOptionsSection from "@/components/RoofOptionsSection";
import QualitySection from "@/components/solar/Quality";
import ThreeImageLayout from "@/components/solar/ThreeImage";

const posts = [
    {
        id: 1,
        title: 'Roof Repair and Protection for Your Home',
        description:
            "Your roof is your home's first defense against the elements. As a trusted roofing company, Paragon Exterior delivers expert roof repair and residential roofing services using high-quality materials and skilled craftsmanship. Protect your home with a roof that’s built to last and elevate curb appeal.",
        imageUrl: "/images/house7.jpeg",
    },
    {
        id: 2,
        title: 'Solar-Ready Roofing from Top Roofing Contractors',
        description:
            "Combine modern roof design with solar power. Our expert roofing contractors specialize in integrating solar panels into durable, energy-efficient roofing systems. Whether you're upgrading your existing roof or starting fresh, Paragon Exterior is the roofing company that builds smarter, greener homes.",
        imageUrl: "/images/house6.webp"
    },
    {
        id: 3,
        title: 'Residential Roofing with Style and Heritage',
        description:
            "Paragon Exterior proudly serves diverse communities with residential roofing solutions that honor cultural preferences and architectural beauty. Whether you want traditional shingles or custom roofing designs, our team delivers expert craftsmanship with the protection your family deserves.",
        imageUrl: "/images/house10.jpeg"
    },
];


const Page = () => {
    return (
        <div>
            {/* Hero Video Section */}
            <div className="flex w-full">
                <HeroVideo 

                    videos={[
                        "/videos/house1.mp4",
                        "/videos/house2.mp4",
                        "/videos/house3.mp4",


                    ]}
                    text="Roofing"
                    secText="Tailored Expertise, Exceptional Durability, Unmatched Value"
                
                />
            </div>

            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Trusted Roofing Company for Quality Craftsmanship"
                    description="As one of the most trusted roofing companies near you, Paragon Exterior delivers expert roof repair, residential roofing, tile roof repair, and flat roofing services with unmatched quality and precision. Our roofing contractors use premium materials to ensure durability, protection, and aesthetic appeal. Whether you’re searching for roof repair near me or a reliable roofing company for your home, we build roofs that last and perform for years to come."
                    image="/images/roof-shingle2.webp"
                />

            </div>

            <div >
                
                <ThreeImageLayout
                posts={posts}
                />
            </div>

            <div className="">
                <RoofOptionsSection/>
            </div>

            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>




        </div>
    );
};

export default Page;
