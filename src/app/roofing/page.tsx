
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



const services = [
    {
        id: 1,
        title: 'Roof Repair',
        href: '/roofing/roof-repair',
        description: 'Professional roof repair services for storm damage, missing shingles, leaks, and flashing issues. Licensed roofers serving PA, NJ, and DE with fast, reliable repairs.',
        imageUrl: '/images/roof-service/roof-repair/roof-repair4.jpg',
    },
    {
        id: 2,
        title: 'Roof Replacement',
        href: '/roofing/roof-replacement',
        description: 'Complete roof replacement services using premium asphalt shingles, metal roofing, and architectural materials. Expert installation with warranties for lasting protection.',
        imageUrl: '/images/roof-service/roof-replacement/roof-replacement.avif',
    },
    {
        id: 3,
        title: 'Velux Skylights',
        href: '/roofing/velux-skylights',
        description: 'Professional Velux skylight installation and repair services. Add natural light and ventilation to your home with energy-efficient, leak-proof skylight solutions.',
        imageUrl: '/images/roof-service/skylight/skylight.jpg',
    },
    {
        id: 4,
        title: 'Flat Roofing',
        href: '/roofing/flat-roofing',
        description: 'Specialized flat roof installation, repair, and maintenance using EPDM, TPO, and modified bitumen systems. Commercial and residential flat roofing experts.',
        imageUrl: '/images/roof-service/flat-roofing/flat-roof.jpg',
    },
    {
        id: 5,
        title: 'Roof Leak Repair',
        href: '/roofing/roof-leak-repair',
        description: 'Fast roof leak detection and repair services. Stop water damage with expert leak repairs for all roof types. Emergency leak repair available 24/7 in PA, NJ, DE.',
        imageUrl: '/images/roof-service/roof-leak/roof-leak.jpg',
    },
    {
        id: 6,
        title: 'Emergency Roof Repair',
        href: '/roofing/emergency-roof-repair',
        description: '24/7 emergency roof repair services for storm damage, active leaks, and urgent roofing needs. Immediate response with tarping and permanent repairs across PA, NJ, DE.',
        imageUrl: '/images/roof-service/emergency-roofing/roof-damage.webp',
    },
];


export const metadata = {
    title: "Trusted Roofing Contractor ",
    description: "Explore our expert roofing services, including roof repair, roof leak repair, residential roofing, and flat roofing solutions. Trust Paragon Exterior for quality craftsmanship and durable materials.",
}

const Page = () => {
    return (
        <div>
            <div className="flex w-full">
                <HeroVideo

                    videos={[
                        "/videos/house1.mp4",
                        "/videos/house2.mp4",
                        "/videos/house3.mp4",
                    ]}
                    text="Roofing Services"
                    secText="Tailored Expertise, Exceptional Durability, Unmatched Value"
                />
            </div>


            <div className="flex flex-col justify-center sm:text-center items-center w-5/6 mx-auto text-left px-6 py-32">


                <HeaderText as="h1" variant='large'>
                    Trusted Roofing Contractor for Quality Solutions
                </HeaderText>

                <div className='my-12'>
                    <SecondaryText>
                        Choosing the right roofing solution is crucial for protecting your home and enhancing its curb appeal. Quality roofing works hand-in-hand with siding to create a protective shield against the elements. It boosts energy efficiency, reduces utility bills, and improves your home’s overall comfort and aesthetic. Whether you’re upgrading your roof or working with one of the best roofing companies near you, we’ll guide you through selecting the perfect solution that lasts.
                    </SecondaryText>

                    <SecondaryText>
                        At Paragon Exterior®, we’re more than a roofing company — we’re your trusted partner in exterior transformation. From roof repair to new installations, we help homeowners in humid continental climates like Pennsylvania find long-lasting materials that withstand hot summers, harsh winters, and year-round weather. Let our expert roofing contractors simplify the process and deliver results you’ll love.
                    </SecondaryText>
                </div>


            </div>

            <ServicesGrid services={services}/>

            <div className="py-32 sm:py-48 md:py-32">
                <QualitySection
                    mainText="Trusted Roofing Contractor for Quality Craftsmanship"
                    description="As the most trusted roofing company near you, Paragon Exterior delivers expert roof repair, residential roofing, tile roof repair, and flat roofing services with unmatched quality and precision. Our roofing contractors use premium materials to ensure durability, protection, and aesthetic appeal. Whether you’re searching for roof repair near me or a reliable roofing company for your home, we build roofs that last and perform for years to come."
                    image="/images/roof-shingle2.webp"
                />

            </div>

            <div >

                <ThreeImageLayout
                    posts={posts}
                />
            </div>

            <div className="">
                <RoofOptionsSection />
            </div>

            <div className="pb-16 pt-16 sm:pt-0 md:pt-2 md:pb-4 sm:pb-10">
                <GetEstimate />
            </div>




        </div>
    );
};

export default Page;
