import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import {Metadata} from "next";
import {serviceAreas} from "../../../../public/service-areas";
import TextImgRow from "@/components/TextImgRow";
import ThreeImageLayout from "@/components/solar/ThreeImage";
import FAQ from "@/components/FAQ";


const posts = [
    {
        id: 1,
        title: 'Roof Repair',
        description:`
        Our roofing company specializes in roof repairs, such as leak fixes, storm damage repair, and routine maintenance. 
        Our roofing contractors offer the best, fast, and reliable roof repair.`,
        imageUrl: "/images/slug-images/roof-contractor.jpg"
    },
    {
        id: 2,
        title: 'Residential Roofing',
        description:
            `Our roofing company offers all sorts of residential roofing solutions. 
            Paragon Exterior uses quality materials to ensure you're home is stylish and durable.
            Trust Paragon Exterior, your local roofing company, to boost curb appeal and protect your home.`,
        imageUrl: "/images/slug-images/roofing-contractors-near-you.jpg"
    },
    {
        id: 3,
        title: 'Flat Roofs',
        description:
            `At Paragon Exterior, we also offer flat roofs. Our roofing company specializes in low-slope solutions, such as flat roofs, for modern homes.
            We’re the roofing contractor near you with a fast response time.`,
        imageUrl: "/images/slug-images/roofing-contractors.jpg"
    },
];



export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
    const {slug} = await params;
    const location = serviceAreas[slug];
    return {
        title: `${location?.name}'s Roofing Contractor | Paragon Exterior`,
        description:`We are ${location.name}'s select roofing contractor. Paragon Exterior provides quality roofing services near you. From roofing repair, to flat roofs, solar installation, to residential roofing, we have you covered.`,
    };
}




interface PageProps {
    params: Promise<{slug: string}>;
}

export default async function ServiceAreaPage({params}: PageProps) {
    const {slug} = await params;

    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;


    const sectiontext = `
We know that choosing a roofing contractor can feel overwhelming. That’s why at Paragon Exterior, we’ve made it our mission to keep the process simple, transparent, and stress-free—so you’re 100% thrilled with the finished result.

From rapid estimate turnarounds to clear, proactive communication before, during, and after your project, plus our industry-leading workmanship, premium materials, and unbeatable warranties, we stand firmly behind every promise we make.

Experience what makes Paragon Exterior the select roofing contractor of ${location.name}. See why homeowners in ${location.name} trust us as the area’s Top Rated Roofing Contractor!
`

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText as="h1" variant="large">
                    {location.name}&apos;s Trusted Roofing Contractor
                </HeaderText>
                <SecondaryText className="mt-4">
                    Paragon Exterior is {location.name}&apos;s select roofing contractor, offering
                    roof repairs, flexible pricing, residential roofing, flat roofing, and even solar panels. 
                    <a href="/solar" className="text-blue-700">
                        &nbsp;Learn more about solar.&nbsp;
                        </a>
                    As one of the top roofing companies in {location.name}, we&apos;d love to make your home safe, sound, and stunning.
                </SecondaryText>
                <div className="py-12">
                    <a href="/estimate" className="mt-6 bg-primaryblue text-white px-6 py-3 my-6 rounded">
                        Get Your Free Estimate
                    </a>
                </div>

            </section>
            <section>
                <SecondaryText className="mt-4">
                    {sectiontext}
                </SecondaryText>
                
            </section>

            {/* Why Choose Us */}
            <section>


                <TextImgRow
                    title={`Why ${location.name} Chooses Paragon Exterior for Roofing`}
                    description="We’re a local roofing contractor with a reputation for quality and reliability. Our licensed roofing contractors are experts in roof repair, residential roofing, and flat roofing systems. We offer transparent pricing, free inspections, and financing options to make your roofing project easy and affordable."
                    imageSrc="/images/slug-images/roofing-contractor.jpg"
                    imageAlt="Roofing Contractor"
                />
            </section>

            {/* Services Section */}
            <section className="text-center">

                <ThreeImageLayout posts={posts} />

            </section>


            <section>
                <HeaderText variant="large" as="h2">We Are Experienced Roofing Experts</HeaderText>
                <div className="mt-6 space-y-4">
                    <details>
                        <summary className="text-lg font-semibold cursor-pointer">Why Work With Local Roofers?</summary>
                        <SecondaryText className="mt-2">
                            Working with a local roofing company means you get faster response times, personalized service, and peace of mind. 
                            At Paragon Exterior, you&apos;re not just another customer — you&apos;re our neighbor.
                        </SecondaryText>
                    </details>

                    <details>
                        <summary className="text-lg font-semibold cursor-pointer">Roof Repair and Installation in the {location.name}</summary>
                        <SecondaryText className="mt-2">
                            From minor leaks to full replacements, our expert roofing company handle every project with precision. We install residential roofs that are beautiful, durable, and solar ready.
                            Our roofing company guarantees top-quality roof repairs and installations near you.
                        </SecondaryText>
                    </details>

                    <details open>
                        <summary className="text-lg font-semibold text-primaryGreenDark cursor-pointer">
                            Advantages of Choosing Paragon Exterior
                        </summary>
                        <SecondaryText className="mt-2">
                            We provide free estimates, transparent pricing, and all our work is backed by warranty. Having served the {location.name} area years on end, we’re your trusted roofing company for repairs, and installation.
                        </SecondaryText>
                    </details>
                </div>
            </section>

            <FAQ locationName={location.name} />
            {/* CTA */}
            <GetEstimate />
        </div>
    );
}
