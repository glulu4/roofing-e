import {Metadata} from 'next';
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import IncentivesSection from "@/components/service-page/Incentive";
import ServicesGrid from "@/components/service-page/Services";
import WhyParagon from "@/components/WhyParagon";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import Row from "@/components/Row";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";
import Image from "next/image";

// SEO metadata with metal roofing keyword focus
export const metadata: Metadata = {
    title: "Metal Roof Installation & Repair",
    description: "Professional metal roofing services in PA, NJ & DE. Get durable, energy-efficient metal roofing with 40+ year lifespan.",
    keywords: "metal roofing, metal roof installation, metal roof repair, standing seam metal roof, steel roofing, aluminum roofing, metal roofing contractors",
    openGraph: {
        title: "Expert Metal Roofing Installation & Repair Services | Paragon Exterior",
        description: "Professional metal roofing services in Philadelphia, NJ & Delaware. Get durable, energy-efficient metal roofing with 40+ year lifespan.",
        images: ['/images/metal-roofing-hero.jpg']
    }
};

// Metal roofing services data
const metalRoofingServices = [
    {
        id: 1,
        title: "Standing Seam Metal Roofing",
        href: "/roofing/metal-roofing/standing-seam-metal-roof",
        description: "Premium standing seam metal roofing systems with concealed fasteners for superior weather protection and modern aesthetics.",
        imageUrl: "/images/roof-service/metal/standing-seam/seam4.webp"
    },
    {
        id: 2,
        title: "Corrugated Metal Roofing",
        href: "/roofing/metal-roofing/corrugated-metal-roofing",
        description: "Cost-effective corrugated metal roofing solutions offering excellent durability and weather resistance for residential and commercial properties.",
        imageUrl: "/images/roof-service/metal/corrugated/corrugated-metal-roof-card.webp"
    },
    {
        id: 3,
        title: "Metal Roof Repair",
        href: "/roofing/metal-roofing/metal-roof-repair",
        description: "Expert metal roof repair services including leak repair, panel replacement, and fastener maintenance to extend your roof's lifespan.",
        imageUrl: "/images/roof-service/metal/metal-roof-repair/metal-roof-repair-card.webp"
    },
    {
        id: 4,
        title: "Metal Roof Colors",
        href: "/roofing/metal-roofing/metal-roof-colors",
        description: "Discover popular metal roof colors and choose the best shade for your property.",
        imageUrl: "/images/roof-service/metal/color4.webp"
    }
];

// Metal roofing materials incentives
const metalRoofingIncentives = [
    {
        name: "40-70 Year Lifespan",
        imageSrc: "/images/roof-service/metal/icons/seal-check.svg",
        description: "Metal roofing systems last 40-70 years, significantly outlasting traditional asphalt shingles that typically need replacement every 15-20 years."
    },
    {
        name: "Energy Efficiency",
        imageSrc: "/images/roof-service/metal/icons/coins.svg",
        description: "Save up to 40% on energy costs with reflective metal roofing that reduces cooling expenses during hot summer months."
    },
    {
        name: "Weather Resistance",
        imageSrc: "/images/roof-service/metal/icons/tornado.svg",
        description: "Withstand winds up to 140 mph, resist hail impact, and provide Class A fire resistance for ultimate home protection."
    },

];

export default function MetalRoofingPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Metal Roofing Focus */}
            <Hero
                mainText="Professional Metal Roofing Installation & Repair Services"
                subText="Transform your home with durable, energy-efficient metal roofing from Paragon Exterior. Our expert metal roofing contractors deliver premium standing seam, corrugated, and steel roofing solutions with unmatched longevity and weather protection."
                imgSrc="/images/roof-service/metal/metal-roof-hero.webp"
                imgAlt="Professional metal roofing installation by Paragon Exterior"
            />

            {/* Metal Roofing Benefits Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto w-5/6 px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <HeaderText as="h2" className="text-primaryblue">
                            Why Choose Metal Roofing for Your Home?
                        </HeaderText>
                        <SecondaryText className="mt-4 max-w-3xl mx-auto">
                            Metal roofing has become the preferred choice for homeowners seeking long-lasting,
                            energy-efficient roofing solutions. Discover why metal roofing offers superior
                            value compared to traditional roofing materials.
                        </SecondaryText>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primaryblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">40+</span>
                            </div>
                            <h3 className="text-xl font-semibold text-primaryblue mb-2">Years Lifespan</h3>
                            <p className="text-gray-600">Metal roofing lasts 40-70 years, 3x longer than asphalt shingles</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primaryblue text-2xl font-bold">40%</span>
                            </div>
                            <h3 className="text-xl font-semibold text-primaryblue mb-2">Energy Savings</h3>
                            <p className="text-gray-600">Reduce cooling costs by up to 40% with reflective metal roofing</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primaryblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-lg font-bold">140</span>
                            </div>
                            <h3 className="text-xl font-semibold text-primaryblue mb-2">MPH Wind Resistance</h3>
                            <p className="text-gray-600">Withstand extreme weather with superior impact resistance</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primaryblue text-lg font-bold">100%</span>
                            </div>
                            <h3 className="text-xl font-semibold text-primaryblue mb-2">Recyclable</h3>
                            <p className="text-gray-600">Eco-friendly metal roofing is fully recyclable at end of life</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metal Roofing Types Section */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto sm:w-5/6 px-8">
                    <HeaderText as="h2" className="text-center text-primaryblue mb-12">
                        Metal Roofing Materials We Install
                    </HeaderText>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Steel Roofing */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/images/roof-service/metal/steel.webp"
                                alt="Steel metal roofing installation"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primaryblue mb-3">Steel Roofing</h3>
                                <p className="text-gray-600 mb-4">
                                    The most popular metal roofing choice, offering exceptional strength,
                                    durability, and cost-effectiveness. Available in galvanized and galvalume options.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• 40-60 year lifespan</li>
                                    <li>• Cost: $6-16 per sq ft</li>
                                    <li>• Superior strength and impact resistance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Aluminum Roofing */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/images/roof-service/metal/aluminum.jpg"
                                alt="Aluminum metal roofing system"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primaryblue mb-3">Aluminum Roofing</h3>
                                <p className="text-gray-600 mb-4">
                                    Lightweight and highly corrosion-resistant, perfect for coastal environments.
                                    Aluminum metal roofing offers excellent reflectivity and longevity.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• 50+ year lifespan</li>
                                    <li>• Cost: $4-11 per sq ft</li>
                                    <li>• Best for coastal areas</li>
                                </ul>
                            </div>
                        </div>

                        {/* Copper Roofing */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/images/roof-service/metal/copper.webp"
                                alt="Premium copper metal roofing"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primaryblue mb-3">Copper Roofing</h3>
                                <p className="text-gray-600 mb-4">
                                    Premium metal roofing option with distinctive appearance and exceptional longevity.
                                    Develops beautiful patina over time for unique aesthetic appeal.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• 70-100+ year lifespan</li>
                                    <li>• Cost: $15-30 per sq ft</li>
                                    <li>• Develops attractive patina</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metal Roofing Cost Information */}
            <Row
                title="Metal Roofing Cost & Investment Value in 2025"
                description={
                    <div>
                        <SecondaryText className="mb-4">
                            While metal roofing requires a higher initial investment than asphalt shingles,
                            it delivers exceptional long-term value. Metal roofing costs range from $4-30 per
                            square foot installed, depending on material type and complexity.
                        </SecondaryText>
                        <SecondaryText className="mb-4">
                            Consider that you may replace an asphalt roof 3-4 times over the lifespan of
                            one metal roof. When you consider energy savings of up to 40% and low maintenance needs, 
                            metal roofing can cost less over time.
                        </SecondaryText>
                        <SecondaryText>
                            Our metal roofing experts provide transparent pricing and financing options
                            to make premium metal roofing accessible for every budget.
                        </SecondaryText>
                    </div>
                }
                imageSrc="/images/roof-service/metal/metal3.avif"
                headerColor="text-primaryblue"
                bodyColor="text-gray-600"
            />

            {/* Metal Roofing Installation Process */}
            <InfoSection
            imagePosition='left'
                imgSrc="/images/roof-service/metal/metal2.webp"
                imgAlt="Professional metal roofing installation process"
                title="Expert Metal Roofing Installation Process"
                titleAs="h2"
                mainContent="Our certified metal roofing contractors follow a meticulous installation process to ensure your metal roof performs optimally for decades. 
                We start with a careful inspection of the roof deck. Next, we prepare it and install the right underlayment and ventilation systems. Finally, we install your chosen metal roofing system, paying attention to every detail. Our metal roofing installation includes comprehensive warranties on both materials and workmanship."
                bottomContent="From initial consultation to final inspection, we handle every aspect of your metal roofing project. Our team works efficiently to minimize disruption while delivering the highest quality metal roof installation in the region."
                className="bg-white"
            />

            {/* Metal Roofing Services */}
            <section className="">
                <div className="text-center mb-12 px-8">
                    <HeaderText as="h2" className="text-primaryblue">
                        Comprehensive Metal Roofing Services
                    </HeaderText>
                    <SecondaryText className="mt-4 max-w-3xl mx-auto">
                        Our metal roofing experts offer full services for homes and businesses. We handle new roof installation, repairs, and maintenance.
                    </SecondaryText>
                </div>
                <ServicesGrid services={metalRoofingServices} />
            </section>

            {/* Metal Roofing Incentives */}
            <IncentivesSection
                title="The Paragon Exterior Metal Roofing Advantage"
                titleAs="h2"
                subtitle="Choose Paragon Exterior for professional metal roofing installation backed by expertise, quality materials, and comprehensive warranties. Our metal roofing contractors are certified by the factory. They have experience with all types of metal roofs, including standing seam and corrugated panels."
                heroImage={{
                    src: "/images/roof-service/metal/metal1.webp",
                    alt: "Paragon Exterior metal roofing installation team"
                }}
                incentives={metalRoofingIncentives}
                backgroundColor="bg-white"
            />

            {/* Why Choose Paragon for Metal Roofing */}
            <WhyParagon
                title="Why Choose Paragon Exterior for Metal Roofing?"
                service="roofing"
                customReasons={[
                    {
                        icon: require('@heroicons/react/24/solid').WrenchScrewdriverIcon,
                        title: "Certified Metal Roofing Specialists",
                        description: "Our metal roofing contractors are factory-certified and experienced in all types of metal roofing systems, from standing seam to corrugated panels.",
                        keywordPhrase: "certified metal roofing contractors"
                    },
                    {
                        icon: require('@heroicons/react/24/solid').ShieldCheckIcon,
                        title: "Premium Metal Roofing Materials",
                        description: "We work with top metal roofing manufacturers. This allows us to offer high-quality steel, aluminum, and copper roofing materials. All our products come with strong warranties.",
                        keywordPhrase: "premium metal roofing materials"
                    },
                    {
                        icon: require('@heroicons/react/24/solid').StarIcon,
                        title: "Metal Roofing Installation Excellence",
                        description: "Our meticulous metal roofing installation process ensures optimal performance, weather protection, and aesthetic appeal for your investment.",
                        keywordPhrase: "metal roofing installation excellence"
                    }
                ]}
                className="bg-gray-50"
            />


            {/* Call to Action */}
            <GetEstimate className='pt-16 sm:pt-4' />
        </div>
    );
}



