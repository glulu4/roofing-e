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
        description:
            'Leak fixes, storm damage repair, and routine maintenance that lasts. Our expert roofing contractors offer fast and reliable roof repair in your area.',
        imageUrl: "/images/slug-images/roof-contractor.jpg"
    },
    {
        id: 2,
        title: 'Residential Roofing',
        description:
            'Shingle, metal, and designer roofing systems built for style and longevity. Trust our local roofing company to boost curb appeal and protect your home.',
        imageUrl: "/images/slug-images/roofing-contractors-near-you.jpg"
    },
    {
        id: 3,
        title: 'Flat & Emergency Roofing',
        description:
            'Low-slope solutions for modern homes and immediate assistance when storms hit. We’re the roofing contractor near you with a fast response time.',
        imageUrl: "/images/slug-images/roofing-contractors.jpg"
    },
];

export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}));
}

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
    const location = serviceAreas[params.slug];
    return {
        title: `${location?.name || "Your Area"}'s Roofing Contractor | Paragon Exterior`,
        // description: location?.description || "We provide expert roofing services near you. From roofing repair, to flat roofs, to residential roofing, we have you covered.",
    };
}

export default function ServiceAreaPage({params}: {params: {slug: string}}) {
    const location = serviceAreas[params.slug];
    if (!location) return <div>Area not found.</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText variant="large">
                    Trusted Roofing Contractor in {location.name}, PA
                </HeaderText>
                <SecondaryText className="mt-4">
                    At Paragon Exterior, we’re your neighborhood roofing contractor, offering
                    roof repair near me, residential roofing, flat roofing, and emergency roof repair
                    in {location.name}. Let’s make your home safe, sound, and stunning.
                </SecondaryText>
                <div className="mt-4">
                    <a href="/estimate" className="mt-6 bg-primaryblue text-white px-6 py-3 my-6 rounded">
                        Get Your Free Estimate
                    </a>
                </div>

            </section>

            {/* Why Choose Us */}
            <section>


                <TextImgRow
                    title={`Why ${location.name} Chooses Paragon Exterior for Roofing`}
                    description="We’re a local roofing company with a reputation for quality and reliability. Our licensed roofing contractors are experts in roof repair, residential roofing, and flat roofing systems. We offer transparent pricing, free inspections, and financing options to make your roofing project easy and affordable."
                    imageSrc="/images/slug-images/roofing-contractor.jpg"
                    imageAlt="Roofing Contractor"
                />
            </section>

            {/* Services Section */}
            <section className="text-center">
                <HeaderText variant="large" as="h2">The Trusted Roofer in {location.name}</HeaderText>

                <ThreeImageLayout posts={posts} />

            </section>


            <section>
                <HeaderText variant="large" as="h2">We Are Experienced Roofing Experts</HeaderText>
                <div className="mt-6 space-y-4">
                    <details>
                        <summary className="text-lg font-semibold cursor-pointer">Why Work With Local Roofers?</summary>
                        <SecondaryText className="mt-2">
                            Working with local roofing contractors means faster response times, personalized service, and peace of mind. At Paragon Exterior, we know the weather, homes, and roofing codes of your area. You're not just another customer — you're our neighbor.
                        </SecondaryText>
                    </details>

                    <details>
                        <summary className="text-lg font-semibold cursor-pointer">Roof Repair and Installation in the {location.name} Area</summary>
                        <SecondaryText className="mt-2">
                            From minor leaks to full replacements, our expert roofing contractors handle every project with precision. We install residential roofing systems that are beautiful, durable, and ready for solar. Our team guarantees top-quality roof repairs and installations near you.
                        </SecondaryText>
                    </details>

                    <details open>
                        <summary className="text-lg font-semibold text-primaryGreenDark cursor-pointer">
                            Advantages of Choosing Paragon Exterior
                        </summary>
                        <SecondaryText className="mt-2">
                            We provide free estimates, transparent pricing, and all our work is backed by warranty. Serving the entire {location.name} area, we’re your trusted roofing contractor for repairs, installs, solar prep, and more. Contact us today or call <strong className="text-primaryblue">267-343-8469</strong> to schedule your consultation.
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
