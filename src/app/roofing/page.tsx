
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
        title: 'Boost Your Home’s Protection',
        description:
        'Your roof is your home’s first line of defense against the elements. With Paragon Exterior, you’ll enjoy unmatched durability and design that not only protects but enhances your property’s curb appeal. Our high-quality materials and expert craftsmanship ensure your home stays safe and beautiful for years to come.',
        imageUrl: "/images/house7.jpeg",
    },
    {
        id: 2,
        title: 'Innovative Roofing for Solar Integration',
        description:"Combine the power of modern roofing with solar technology! Paragon Exterior specializes in seamless solar panel integration, allowing you to save on energy costs while maintaining a sleek and professional look. Transform your home into an energy-efficient powerhouse with our solar-friendly roofing solutions.",
        imageUrl: "/images/house6.webp"
    },
    {
        id: 3,
        title: 'Celebrating Multi-Cultural Designs',
        description:"At Paragon Exterior, we take pride in serving diverse communities. Whether you’re looking for traditional shingles or culturally inspired roofing styles, we have the expertise to honor your heritage while providing the protection your family deserves. Let us design a roof that reflects your story and values.",
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
                    mainText="Unmatched Quality and Craftsmanship"
                    description="Our roofs are built with the highest standards of quality and craftsmanship, ensuring lasting durability and superior performance. Whether it’s protecting your home from harsh weather or adding aesthetic value, our roofing solutions are designed to exceed expectations. With premium materials and expert installation, we provide roofs that stand the test of time, offering both beauty and reliability for years to come."
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
