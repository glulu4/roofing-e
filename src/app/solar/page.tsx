
"use client";
import HeroVideo from "@/components/landing-ui/HeroVideo";

import GetEstimate from "@/components/landing-ui/GetEstimate";
import QualitySection from "@/components/landing-ui/Quality";
import {wisp} from "@/lib/wisp";

import ThreeImage from "@/components/ThreeImage";
import RoofOptionsSection from "@/components/RoofOptionsSection";
import Benefits from "@/components/Benefits";


const posts = [
    {
        id: 1,
        title: 'Save Money with Solar Power',
        description:
            'Reduce your electricity bills and take control of your energy expenses with cost-effective solar panel solutions. Our innovative systems help homeowners and businesses lower costs while making a positive environmental impact.',
        imageUrl: "images/solar/house-solar2.jpeg",
    },
    {
        id: 2,
        title: 'Eco-Friendly Energy Solutions',
        description:
            'Switch to renewable energy and reduce your carbon footprint. Solar energy is clean, sustainable, and the perfect choice for environmentally conscious individuals. Let’s build a greener future together.',
        imageUrl: "images/solar/house-solar.jpeg",
    },
    {
        id: 3,
        title: 'Increase Your Property Value',
        description:
            'Solar panels not only save energy but also enhance your property’s market value. Invest in a long-term energy solution that adds tangible value to your home or business.',
        imageUrl: "images/solar/house4-solar.jpeg",
    },
];

export type ThreeImageArrayType = typeof posts[number];
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
                    videos={[
                        "/videos/solar-tab-video.mp4",
                        "/videos/house2.mp4",
                        "/videos/house3.mp4",


                    ]}
                    text="Solar"
                    secText="Power Your Home with Clean, Renewable Energy"

                />
            </div>

            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection 
                    mainText="Unmatched Quality and Craftsmanship"
                    description="Our roofs are built with the highest standards of quality and craftsmanship, ensuring lasting durability and superior performance. Whether it’s protecting your home from harsh weather or adding aesthetic value, our roofing solutions are designed to exceed expectations. With premium materials and expert installation, we provide roofs that stand the test of time, offering both beauty and reliability for years to come."

                    image="/images/solar/solar-panel.jpeg"
                />
            </div>

            <div >
                
                <ThreeImage 
                    posts={posts}
                    />
            </div>

            <div>
                <Benefits />
            </div>
            
            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>





        </div>
    );
};

export default Page;
