
"use client";
import HeroVideo from "@/components/landing-ui/HeroVideo";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import QualitySection from "@/components/landing-ui/Quality";

import {wisp} from "@/lib/wisp";
import ThreeImage from "@/components/ThreeImage";
import RoofOptionsSection from "@/components/RoofOptionsSection";

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: "images/house7.jpeg",
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: "images/house6.webp"
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: "images/house10.jpeg"
    },
    // More posts...
];

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
                        "/videos/house1.mp4",
                        "/videos/house2.mp4",
                        "/videos/house3.mp4",


                    ]}
                    text="Roofing"
                    secText="this is some addition seo optimized text"
                
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
                
                <ThreeImage
                posts={posts}
                />
            </div>

            <div className="">
                <RoofOptionsSection/>
            </div>

            <div className="pb-16 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>




        </div>
    );
};

export default Page;
