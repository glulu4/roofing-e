import React from 'react'
import {serviceAreas, Location} from "../../../../public/service-areas";
import {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import InfoSection from '@/components/service-page/Info';
import SecondaryText from '@/components/SecondaryText';
import HeaderText from '@/components/HeaderText';
import ServicesGrid from '@/components/service-page/Services';
import IncentivesSection from '@/components/service-page/Incentive';
import Row from '@/components/Row';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';

const services = [
    {
        id: 1,
        title: 'Siding Installation',
        href: '/siding/siding-installation',
        description: "Expert siding installation services to enhance your home's protection and curb appeal.Choose from a variety of materials including fiber cement, vinyl, and engineered wood.",
        imageUrl: '/images/siding/siding-service/siding-installation.webp',
    },

    {
        id: 3,
        title: 'Siding Replacement',
        href: '/siding/siding-replacement',
        description: "Complete siding replacement services to upgrade your home's exterior.We offer a range of durable materials like fiber cement, vinyl, and aluminum to suit your style and budget.",
        imageUrl: '/images/siding/siding-service/siding-replacement.webp',
    },
    {
        id: 7,
        title: 'Metal Roofing',
        href: '/roofing/metal-roofing',
        description: 'Durable metal roofing installation and repair services. Choose from standing seam, corrugated, and architectural metal roofing systems for long-lasting protection.',
        imageUrl: '/images/roof-service/metal/metal-roof-card.webp',
    },
    {
        id: 4,
        title: 'Board and Batten Siding',
        href: '/siding/board-and-batten-siding',
        description: 'Stylish vertical siding options to add a modern touch to your home. Our team specializes in installing vertical siding that enhances aesthetics and provides superior protection against the elements.',
        imageUrl: '/images/siding/siding-service/vertical-siding.webp',
    },
    {
        id: 5,
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


]

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}


export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];

    const title = `Exterior Contractors in ${location?.name}`;
    const description = `Need a roofing contractor in ${location?.name}? Fast roof repair, full replacement, metal & flat roofing. Licensed, insured, local. Free same‑day estimates.`;

    const canonical = `https://www.paragonexterior.com/roofing-contractor/${slug}`;

    return {
        title,
        description,
        alternates: {canonical},
        openGraph: {
            title,
            description,
            url: canonical,
            type: 'website',
            images: [{url: '/images/dynamic/roofing-contractor/og.webp', width: 1200, height: 630, alt: `Roofing Contractor in ${location?.name}`}],
            locale: 'en_US',
            siteName: 'Paragon Exterior',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/dynamic/roofing-contractor/og.webp'],
        },
    };
}



const generateStructuredData = (location: Location) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Paragon Exterior",
    "url": `https://www.paragonexterior.com/exterior-contractors/${location.name}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": location.name
    },
});



export default async function page({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location))}}
            />



            <div className="min-h-screen">
                <Hero
                    mainText={`${location.name}'s Exterior Contractors `}
                    subText={`Professional Siding Contractors in ${location.name} specializing in vinyl siding installation, siding repair, siding replacement, and fiber cement siding. Transform your home with expert siding installation services from licensed, insured contractors.`}
                    imgSrc="/images/dynamic/siding-contractor/hero.webp"
                    imgAlt={`Professional Siding Contractors team in ${location.name}`}
                />


                {/* Hero Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-50">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <HeaderText as="h1" variant="large" className="text-primaryblue">
                            {`Full-Service Exterior Contractors in ${location.name} `}
                        </HeaderText>
                        <SecondaryText as="h2" className="mt-6 max-w-4xl mx-auto">
                            Paragon Exterior is your trusted partner for all exterior contracting needs in {location.name}. From expert siding installation to reliable roof repair, we provide top-quality services that enhance your home&apos;s beauty and protection.
                        </SecondaryText>

                        <div className="mt-12">
                            <a
                                href="/estimate"
                                className="bg-primaryblue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                            >
                                Get a Free Estimate
                            </a>
                        </div>
                    </div>
                </section>




                <InfoSection
                    imgSrc="/images/dynamic/siding-contractor/img1.webp"
                    imgAlt={`Siding installation in ${location.name}`}
                    title={`Siding Installation Services in ${location.name}`}
                    titleAs="h2"
                    mainContent={
                        <div>
                            <SecondaryText>
                                As {location.name}&apos;s trusted exterior contractors, Paragon Exterior specializes in <strong>siding installation</strong>, professional <strong>vinyl siding</strong> services, quality <strong>siding repair</strong>, and complete <strong>siding replacement</strong>. Our experienced team transforms homes throughout {location.name} with durable, beautiful siding that enhances both protection and curb appeal.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                From popular <strong>vinyl siding installation</strong> to premium fiber cement and natural cedar options, our siding contractors deliver exceptional results. We specialize in <strong>siding repair</strong> services that address storm damage, wear, and maintenance needs, plus complete <strong>siding replacement</strong> projects that modernize and protect your home investment.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Choose Paragon Exterior as your local siding contractor for superior craftsmanship, premium materials, and complete customer satisfaction. Our reputation in ${location.name} is built on quality siding installation and reliable service that homeowners trust.`}
                    imagePosition="right"
                />


                <InfoSection
                    imgSrc="/images/dynamic/roofing-contractor/img1.webp"
                    imgAlt={`Paragon Exterior roofing team in ${location.name}`}
                    title={`${location.name}'s Roofing Contractor`}
                    titleAs="h2"
                    mainContent={
                        <div>
                            <SecondaryText>
                                Looking for a reliable roofer in {location.name}? Paragon Exterior brings years of local experience, high-quality materials, and a commitment to craftsmanship. Our roofing specialists know the unique weather and roofing needs in {location.name}, so your roof will stand strong in every season.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                We believe in fast estimates, honest communication, and top-notch workmanship—backed by industry-leading warranties. When you choose Paragon Exterior, you get a roofing partner you can trust for the long haul.
                            </SecondaryText>
                        </div>
                    }
                    bottomContent={`Join your neighbors who choose Paragon Exterior as their #1 roofing company in ${location.name}. Let us show you the difference true local service makes.`}
                    imagePosition='left'
                />


                {/* Comprehensive Siding Services Grid */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <HeaderText as="h2" variant="large">
                                Complete Siding Solutions in {location.name}
                            </HeaderText>
                            <SecondaryText>
                                Our professional siding contractors services include everything from vinyl siding installation to comprehensive siding repair and replacement. Discover the perfect siding solution for your {location.name} home.
                            </SecondaryText>
                        </div>

                        <ServicesGrid services={services} />
                    </div>
                </section>


                <Row
                    title={`Gutter Installation Services in ${location.name}`}
                    description={
                        <div>
                            <SecondaryText>
                                Protect your home from water damage with expert <strong>gutter installation</strong> in {location.name}. We install high-quality gutters that help move rainwater away from your roof, foundation, and siding—keeping your home dry and damage-free.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Our team works quickly and cleanly, installing gutters that fit your home and last for years. Whether you’re replacing old gutters or adding new ones, we make the process easy and affordable.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/gutter-installation/img2.webp"
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16"
                />



                <IncentivesSection
                    className="py-16"
                    title={`The Paragon Exterior Advantage in ${location.name}`}
                    titleAs="h2"
                    subtitle={`Get more for your money! Our local expertise, fast service, and quality materials make us the first choice for roofing in ${location.name}.`}
                    heroImage={{
                        alt: `Happy homeowner in ${location.name} with new roof installation`,
                        src: "/images/dynamic/roofing-contractor/img2.webp"
                    }}
                    incentives={[
                        {
                            name: "Local Knowledge",
                            description: `We understand ${location.name} weather, codes, and building styles—so your roof is built to last.`,
                            imageSrc: "/images/roof-service/emergency-roofing/icons/hard-hat.svg",
                            imageAlt: "Local roofing expertise icon"
                        },
                        {
                            name: "Rapid Response",
                            description: "Get emergency roofing help 24/7—plus flexible scheduling for all projects.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/clock.svg",
                            imageAlt: "Fast emergency response icon"
                        },
                        {
                            name: "Guaranteed Quality",
                            description: "Every job comes with a full warranty and our personal commitment to quality.",
                            imageSrc: "/images/roof-service/emergency-roofing/icons/shield-check.svg",
                            imageAlt: "Quality guarantee icon"
                        }
                    ]}
                    imagePosition="left"
                />

                <Row
                    title={`Proudly Serving ${location.name} and Nearby Areas`}
                    description={
                        <div>
                            <SecondaryText>
                                As {location.name}&apos; exterior contractor&apos;s, we respond quickly to emergencies, offer same-day estimates, and know your neighborhood inside and out.
                            </SecondaryText>
                            <SecondaryText className="mt-4">
                                Whether you need storm repairs, a routine roof inspection, siding installation, window installation, or a full roof replacement, our {location.name} roofing experts are ready to help. Get your free estimate today—let’s make your home safer and more beautiful.
                            </SecondaryText>
                        </div>
                    }
                    imageSrc="/images/dynamic/roofing-contractor/img4.webp"
                    reverse={true}
                    headerColor="text-primaryblue"
                    bodyColor="text-gray-700"
                    className="py-16 "
                />

                <GoogleReviews />

                <GetEstimate />
            </div>
        </>
    )

}






