
import React from 'react'
import {serviceAreas, Location} from '../../../../public/service-areas';
import {Metadata} from 'next';
import Hero from '@/components/service-page/Hero';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import WhyParagon from '@/components/WhyParagon';
import Row from '@/components/Row';
import InfoSection from '@/components/service-page/Info';
import SecondaryText from '@/components/SecondaryText';
import GoogleReviews from '@/components/landing-ui/GoogleReviews';

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{slug: string}>;
}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `Home Improvement Contractor in ${location?.name}`,
        description: `Trusted home improvement contractor in ${location?.name}. Paragon Exterior specializes in roofing, siding, windows, and gutters. Get a free estimate today!`,
        openGraph: {
            title: `Home Improvement Contractor in ${location?.name} | Paragon Exterior`,
            description: `Trusted home improvement contractor in ${location?.name}. Paragon Exterior specializes in roofing, siding, windows, and gutters. Get a free estimate today!`,
            type: 'website',
            images: ['/images/home/best-roofing-contractor.webp'],
        },
    };
}



const generateStructuredData = (location: Location, slug: string) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.paragonexterior.com/home-improvement/${slug}`,
    "name": "Paragon Exterior",
    "description": `Professional home improvement contractor in ${location.name} specializing in roofing, siding, windows, doors, and complete home renovations.`,
    "url": `https://www.paragonexterior.com/home-improvement/${slug}`,
    "telephone": "(215) 799-7663",
    "email": "info@paragonexterior.com",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": "PA",
        "addressCountry": "US"
    },
    "areaServed": [
        {
            "@type": "AdministrativeArea",
            "name": location.name
        }
    ],
});

export default async function page({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    // Remove "home-improvement-" to get the location slug  
    const location = serviceAreas[slug];

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div className='min-h-screen'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(generateStructuredData(location, slug))}}
            />

            <Hero
                mainText={`Home Improvement Contractor in ${location.name}`}
                subText={`Looking for expert home improvement services in ${location.name}? Paragon Exterior handles everything from roofing and siding to windows and doors, backed by industry-leading warranties.`}
                textTagAs='h1'
                imgAlt={`Home Improvement Contractor in ${location.name}`}
                imgSrc='/images/home/best-roofing-contractor.webp'
            />

            <Row
                title={`Your Trusted Home Improvement Contractor in ${location.name}`}
                description={`Paragon Exterior understands that your home means everything to you. 
                    This understanding has made us the most trusted home improvement contractor in ${location.name}.
                We pride ourselves in our quality of work and transparent pricing. We specialize in comprehensive home improvement services tailored to the unique needs of each homeowners in ${location.name}. Whether you need a new roof, siding installation, or window replacements, our team is here to help.`}
                imageSrc='/images/home/best-roofers.webp'
                className='py-20'
                
            />




                <InfoSection
                    imgSrc="/images/dynamic/siding-contractor/img1.webp"
                    imgAlt={`Siding installation in ${location.name}`}
                    titleAs="h2"
                title="Your Local Exterior Home Improvement Experts"
                mainContent="From a small repair to a full exterior renovation, our team has the skills and experience to keep your home looking beautiful and performing its best. We specialize in roofing, siding, windows, and gutters—helping you protect your investment while improving curb appeal and energy efficiency. Whether you need a leak fixed, a storm-damaged section replaced, or a complete upgrade, we deliver quality craftsmanship backed by reliable service and industry-leading warranties."
                bottomContent={`Proudly serving homeowners throughout ${location.name}, we make every project simple, transparent, and stress-free from the first call to the final cleanup.`}                    
                imagePosition="left"
                />


            <Row
                title={`Roof Repair & Roof Replacement in ${location.name}`}
                description={
                    <div>
                        <SecondaryText>
                            From small leak fixes to full <strong>roof replacements</strong>, we keep your home protected with durable materials and skilled craftsmanship. Our team repairs missing shingles, storm damage, and aging roofs, and installs new systems from top brands in asphalt shingles, standing seam metal, and other premium options.
                        </SecondaryText>
                        <SecondaryText className="mt-4">
                            Every roof we install in {location.name} is built for long-term performance, backed by strong manufacturer warranties and installed by licensed, insured professionals you can trust.
                        </SecondaryText>
                    </div>
                }
                imageSrc="/images/dynamic/service-area/img3.webp"
                reverse={true}
                headerColor="text-primaryblue"
                bodyColor="text-gray-700"
                className="py-16"
            />

            {/* Siding & Windows */}
            <Row
                title={`Siding & Window Replacement in ${location.name}`}
                description={
                    <div>
                        <SecondaryText>
                            Refresh your home’s look and improve efficiency with expert <strong>siding installation</strong> and <strong>window replacement</strong>. We offer vinyl, fiber cement, and wood siding, plus energy-efficient windows that enhance comfort and curb appeal.
                        </SecondaryText>
                        <SecondaryText className="mt-4">
                            Serving homeowners throughout {location.name}, we manage the entire exterior upgrade process—saving you time, reducing stress, and ensuring every detail meets our high standards.
                        </SecondaryText>
                    </div>
                }
                imageSrc="/images/dynamic/service-area/img4.webp"
                headerColor="text-primaryblue"
                bodyColor="text-gray-700"
                className="py-16"
            />



                <WhyParagon
                title={`Why Choose Paragon Exterior for Home Improvement in ${location.name}?`}
                className='mb-20'
                />

                    
                <GoogleReviews/>
            <GetEstimate/>


        </div>
    )
}