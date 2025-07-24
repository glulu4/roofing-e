import HeroVideo from "@/components/landing-ui/HeroVideo";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import RoofOptionsSection from "@/components/RoofOptionsSection";
import QualitySection from "@/components/Quality";
import ThreeImageLayout from "@/components/solar/ThreeImage";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import ServicesGrid from "@/components/service-page/Services";

const posts = [
    {
        id: 1,
        title: 'Roof Repair and Protection for Your Home',
        description:
            "Your roof shields your home from storms, wind, and sun. We offer expert roof repair and replacement using long-lasting materials and expert installation.",
        imageUrl: "/images/house7.jpeg",
    },
    {
        id: 2,
        title: 'Solar-Ready Roofing from Top Roofing Contractors',
        description:
            "Get a roof that's built for solar power. Our team installs durable, energy-efficient roofing systems that are ready for panels—now or later.",
        imageUrl: "/images/house6.webp",
    },
    {
        id: 3,
        title: 'Residential Roofing with Style and Heritage',
        description:
            "We serve homeowners with beautiful roofing that fits your home’s look and your family’s needs. Choose from traditional or custom styles with confidence.",
        imageUrl: "/images/house10.jpeg",
    },
];

const services = [
    {
        id: 1,
        title: 'Roof Repair',
        href: '/roofing/roof-repair',
        description: 'Fix leaks, missing shingles, storm damage, and more with fast, reliable roof repair.',
        imageUrl: '/images/roof-service/roof-repair/roof-repair4.jpg',
    },
    {
        id: 2,
        title: 'Roof Replacement',
        href: '/roofing/roof-replacement',
        description: 'Get a new roof that lasts. We install asphalt, metal, and architectural roofing systems.',
        imageUrl: '/images/roof-service/roof-replacement/roof-replacement.avif',
    },
    {
        id: 3,
        title: 'Velux Skylights',
        href: '/roofing/velux-skylights',
        description: 'Add light and airflow to your home with professional Velux skylight installation.',
        imageUrl: '/images/roof-service/skylight/skylight.jpg',
    },
    {
        id: 4,
        title: 'Flat Roofing',
        href: '/roofing/flat-roofing',
        description: 'We install and repair EPDM, TPO, and other flat roofing systems for homes and businesses.',
        imageUrl: '/images/roof-service/flat-roofing/flat-roof.jpg',
    },
    {
        id: 5,
        title: 'Roof Leak Repair',
        href: '/roofing/roof-leak-repair',
        description: 'Stop water damage fast. We find and fix roof leaks on all types of roofs.',
        imageUrl: '/images/roof-service/roof-leak/roof-leak.jpg',
    },
    {
        id: 6,
        title: 'Emergency Roof Repair',
        href: '/roofing/emergency-roof-repair',
        description: 'Need help now? We offer 24/7 emergency roof repair for leaks, damage, and storm issues.',
        imageUrl: '/images/roof-service/emergency-roofing/roof-damage.webp',
    },
    {
        id: 7,
        title: 'Metal Roofing',
        href: '/roofing/metal-roofing',
        description: 'Tough, long-lasting metal roofs in standing seam, corrugated, and custom profiles.',
        imageUrl: '/images/roof-service/metal/metal-roof-card.webp',
    },
];

export const metadata = {
    title: "Trusted Roofing Contractor",
    description:
        "Roofing services you can trust. We repair, replace, and install all roof types including asphalt, metal, and flat roofs. Serving PA, NJ, and DE.",
};

const Page = () => {
    return (
        <div>
            <div className="flex w-full">
                <HeroVideo
                    video="/videos/house1.mp4"

                    
                    text="Roofing Services"
                    secText="Reliable Repairs. Lasting Roofs. Local Experts."
                />
            </div>

            <div className="flex flex-col justify-center sm:text-center items-center sm:w-5/6 mx-auto text-left px-8 py-32">
                <HeaderText as="h1" variant="large">
                    Roofing Services That Protect What Matters Most
                </HeaderText>

                <div className="my-12">
                    <SecondaryText>
                        Your roof keeps your family safe from wind, rain, and heat. When it’s damaged or aging, it can lead to leaks, mold, and high energy bills. We help homeowners across PA, NJ, and DE fix roof problems fast—and replace old roofs with options that last.
                    </SecondaryText>

                    <SecondaryText>
                        At Paragon Exterior, we make the roofing process simple. Whether you need a quick repair or a full replacement, our experienced team uses top-quality materials and delivers honest, expert service every time.
                    </SecondaryText>
                </div>
            </div>

            <ServicesGrid services={services} />

            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Local Roofers Who Get the Job Done Right"
                    description="We’re your local roofing company for repairs, replacements, and everything in between. From emergency fixes to full roof installations, we use quality materials and proven methods that protect your home from the elements—season after season."
                    image="/images/roof-shingle2.webp"
                />
            </div>

            <ThreeImageLayout posts={posts} />

            <RoofOptionsSection />

            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>
        </div>
    );
};

export default Page;
