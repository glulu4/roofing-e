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
        title: "Asphalt Shingle Replacement",
        description: `
      Our most popular replacement service: durable, cost-effective asphalt shingles in a variety of colors.
      We tear off your old roof, inspect the decking, and install high-performance shingles with expert flashing and ventilation.`,
        imageUrl: "/images/replace2.jpeg",
    },
    {
        id: 2,
        title: "Metal Roof Replacement",
        description: `
      Upgrade to a sleek, long-lasting metal roof.
      Energy-efficient panels, superior wind and fire resistance, and a lifetime warranty make this an investment that pays dividends in durability and curb appeal.`,
        imageUrl: "/images/replace3.jpeg",
    },
    {
        id: 3,
        title: "Tile & Slate Replacement",
        description: `
      Elegant tile or slate roof replacement for a timeless look.
      Our craftsmen handle heavy materials safely, ensuring a weather-tight install that preserves your home’s character and stands the test of time.`,
        imageUrl: "/images/replace4.jpeg",
    },
];

export type ThreeImageArrayType = typeof posts[number];

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
        title: `${location?.name} Roof Replacement `,
        description: `Looking for expert roof replacement in ${location?.name}? Paragon Exterior handles everything from asphalt shingle replacements to metal and tile roof installs, backed by industry-leading warranties.`,
        alternates: { canonical: `https://www.paragonexterior.com/roof-replacement/${slug}` },
    };
}

export default async function page({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;

    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    const introText = `
    When it’s time for a brand-new roof, you want professionals you can trust. 
    At Paragon Exterior, we simplify the process from start to finish—free inspection, clear pricing, premium materials, and workmanship you can count on.
    Experience why homeowners in ${location.name} choose us for hassle-free, beautiful roof replacements.
  `;

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText as="h1" variant="large">
                    {location.name}&apos;s Roof Replacement Experts
                </HeaderText>
                <SecondaryText as="h2" className="mt-4">
                    Paragon Exterior delivers complete roof replacement solutions in{" "}
                    {location.name}. From asphalt shingles to metal and tile, our team
                    installs top-quality roofing systems that stand up to the elements.
                </SecondaryText>
                <div className="py-12">
                    <a
                        href="/estimate"
                        className="mt-6 bg-primaryblue text-white px-6 py-3 my-6 rounded"
                    >
                        Get Your Free Estimate
                    </a>
                </div>
            </section>

            {/* Introduction */}
            <section>
                <SecondaryText as="p"  className="mt-4">{introText}</SecondaryText>
            </section>

            {/* Why Choose Us */}
            <section>
                <TextImgRow
                    title={`Why ${location.name} Trusts Paragon Exterior for Roof Replacement`}
                    description="Local expertise, transparent pricing, and unmatched warranties. Our licensed roofers handle every step—from tear-off to final inspection—with care and precision."
                    imageSrc="/images/replace1.jpeg"
                    imageAlt={`Roof Replacement in ${location.name}`}
                />
            </section>

            {/* Service Types */}
            <section className="text-center">
                <ThreeImageLayout posts={posts} />
            </section>

            {/* Details & FAQs */}


            <div className="text-center">
                <HeaderText>
                    Frequently Asked Questions
                </HeaderText>
            </div>
            <FAQ locationName={location.name} />

            {/* CTA */}
            <GetEstimate location={location.name} />
        </div>
    );
}
