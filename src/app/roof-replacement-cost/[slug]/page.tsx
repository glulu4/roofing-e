import HeaderText from '@/components/HeaderText';
import GetEstimate from '@/components/landing-ui/GetEstimate';
import SecondaryText from '@/components/SecondaryText';
import TextImgRow from '@/components/TextImgRow';
import ThreeImageLayout from '@/components/solar/ThreeImage';
import FAQ from '@/components/FAQ';
import {Metadata} from 'next';
import {serviceAreas} from '../../../../public/service-areas';

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
        title: `${location?.name} Roof Replacement Cost `,
        description: `Wondering what a roof replacement costs in ${location?.name
            }? Paragon Exterior breaks down average prices and offers fixed, written quotes for every material.`,
        alternates: { canonical: `https://www.paragonexterior.com/roof-replacement-cost/${slug}` },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;
    const location = serviceAreas[slug];
    if (!location) return <div>Area not found.</div>;

    const introText = `
  Curious how much you should budget for a new roof? Paragon Exterior lays out the typical roof replacement cost in ${location.name
        } and pinpoints the factors that move the needle on price. Use our guide below, then request your free, written quote.
  `;

    const costPosts = [
        {
            id: 1,
            title: 'Asphalt Shingle Roof',
            description: `Installed asphalt shingle roof replacement cost in ${location.name
                } averages \$8,000–\$14,000 for a 2,000 sq ft home, depending on shingle grade and roof complexity.`,
            imageUrl: "/images/replace2.jpeg",
        },
        {
            id: 2,
            title: 'Metal Roof',
            description: `Expect \$18,000–\$30,000 for standing-seam or ribbed metal panels on a typical home in ${location.name
                }. Higher upfront roof replacement cost, but decades of service and energy savings.`,
            imageUrl: "/images/replace3.jpeg",
        },
        {
            id: 3,
            title: 'Tile or Slate Roof',
            description: `Premium clay tile or natural slate can range from \$30,000–\$60,000+. Material weight, specialty underlayment, and artisan installation all influence your roof replacement cost in ${location.name
                }.`,
            imageUrl: "/images/replace4.jpeg",
        },
    ]

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-16 pt-24">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText as="h1" variant="large">
                    {location.name} Roof Replacement Cost
                </HeaderText>
                <SecondaryText as="h2" className="mt-4">
                    Transparent pricing for roof replacement cost in {location.name}
                </SecondaryText>

                <div className="py-12">
                    <a
                        href="/estimate"
                        className="mt-6 bg-primaryblue text-white px-6 py-3 rounded"
                    >
                        Get Your Free Estimate
                    </a>
                </div>
            </section>

            {/* Introduction */}
            <section>
                <SecondaryText as="p" className="mt-4">
                    {introText}
                </SecondaryText>
            </section>

            {/* Cost Factors */}
            <section>
                <TextImgRow
                    title="What Determines Your Roof Replacement Cost?"
                    description="Square footage, material choice, roof pitch, tear-off complexity, and local permit fees all influence final pricing. Our estimators measure every plane and itemize each line so you know exactly where each dollar goes."
                    imageSrc="/images/replace1.jpeg"
                    imageAlt="Roof replacement cost calculation"
                />
            </section>

            {/* Typical Price Ranges */}
            <section className="text-center">
                <ThreeImageLayout posts={costPosts} />
            </section>

            {/* CTA & FAQ */}
            <section>
                <HeaderText variant="large" as="h2">
                    Lock in Your Exact Roof Replacement Cost
                </HeaderText>
                <SecondaryText as="p" className="mt-4">
                    Ready for precise numbers? Our on-site inspections and satellite
                    measurements ensure you receive a fixed, written quote—no surprises.
                </SecondaryText>
            </section>

            <FAQ locationName={location.name} />
            <GetEstimate location={location.name} />
        </div>
    );
}
