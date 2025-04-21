import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import {Metadata} from "next";
import {serviceAreas} from "../../../../public/service-areas";



// needed to build static paths
export async function generateStaticParams() {
    return Object.keys(serviceAreas).map((slug) => ({slug}))
}


export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
    const location = serviceAreas[params.slug];
    return {
        title: `Expert Roofing Company in ${location?.name || "Your Area"} | Paragon Exterior`,
        description: location?.description || "We provide expert roofing services near you. From roofing repair, to flat roofs, to residential roofing, we have you covered.",
        
    };
}


export default function ServiceAreaPage({params}: {params: {slug: string}}) {
    const location = serviceAreas[params.slug];
    if (!location) return <div>Area not found.</div>;

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-16">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText variant="large">
                    Trusted Roofing Contractor in {location.name}, PA
                </HeaderText>
                <SecondaryText className="mt-4">
                    At Paragon Exterior, we&apos;re your neighborhood roofing contractor, offering
                    roof repair near me, residential roofing, flat roofing, and emergency roof repair
                    in {location.name}. Let&apos;s make your home safe, sound, and stunning.
                </SecondaryText>
                {/* <button  className="mt-6 bg-primaryblue text-white px-6 py-3 rounded">
                    Get Your Free Estimate
                </button> */}
            </section>

            {/* Why Choose Us */}
            <section>
                <HeaderText as="h2">
                    Why {location.name} Chooses Paragon Exterior for Roofing
                </HeaderText>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                    <li>
                        Fully licensed <strong>roofing contractor</strong> near you for peace of mind
                    </li>
                    <li>
                        Rapid <strong>roof repair near me</strong> response in {location.name}
                    </li>
                    <li>
                        Durable <strong>residential roofing</strong> and <strong>flat roofing</strong>
                    </li>
                    <li>
                        Transparent pricing, free inspections, and financing options available
                    </li>
                </ul>
            </section>

            {/* Services Section */}
            <section>
                <HeaderText as="h2">Roof Repair in {location.name}</HeaderText>
                <SecondaryText className="mt-2">
When your home springs a leak or suffers storm damage, you need reliable roof repair near me—and that’s exactly what Paragon Exterior delivers. Our expert roofing contractors respond quickly to patch holes, replace damaged shingles, and perform routine maintenance that lasts. As one of the best roofing companies in the region, we blend durable materials with skilled craftsmanship, ensuring your roof stands up to wind, rain, and whatever comes next.                </SecondaryText>
            </section>

            <section>
                <HeaderText as="h2">Residential Roofing in {location.name}</HeaderText>
                <SecondaryText className="mt-2">
Your home deserves a roof that looks great and stands the test of time. Paragon Exterior specializes in residential roofing, offering asphalt shingle, metal, and luxury designer roofing systems tailored to your style. As a trusted roofing company, we guide you through color, texture, and energy‑efficient options so your new roof not only protects but enhances curb appeal for years to come.                </SecondaryText>
            </section>

            <section>
                <HeaderText as="h2">Flat Roofing in {location.name}</HeaderText>
                <SecondaryText className="mt-2">
                    For modern homes, additions, and commercial projects, Paragon Exterior installs high‑performance flat roofing solutions built to last. Our low‑slope roofing membranes resist ponding water, UV damage, and temperature swings—perfect for decks, garages, and contemporary designs. As a full‑service roofing contractor, we ensure seamless installation and rigid quality control, giving you confidence in every square foot of your flat roof.
                </SecondaryText>
            </section>

            <section>
                <HeaderText as="h2">Emergency Roof Repair in {location.name}</HeaderText>
                <SecondaryText className="mt-2">

When you spot a drip or after a storm, you want fast, reliable roof repair—and that&apos;s exactly what Paragon Exterior provides. Our expert technicians specialize in leak detection, storm damage repair, and preventative maintenance designed to extend your roof&apos;s lifespan. Searching for “roof repair near me”? We respond quickly, diagnose the issue precisely, and perform roof repairs that last, ensuring your home stays watertight and worry‑free.                </SecondaryText>
            </section>

            <section>
                <HeaderText as="h2">Trsuted Roofing Contractor</HeaderText>
                <SecondaryText className="mt-2">
                    Paragon Exterior is your trusted roofing contractor in {location.name}, PA—fully licensed, insured, and backed by years of experience. As your local roofing contractor near me, we handle everything from shingle and metal roofing installations to flat roofing systems and solar‑ready prep. Whether you need a full roof replacement or a simple inspection, our team combines top‑quality materials with meticulous craftsmanship to deliver durable, beautiful roofs that protect your home and boost curb appeal.
                </SecondaryText>

            </section>
            

            {/* Roofing Types */}
            <section>
                <HeaderText as="h2">Shingle & Roofing Options</HeaderText>
                <SecondaryText className="mt-2">
                    Choose from top roofing materials, from cost‑effective architectural asphalt
                    shingles to high‑end luxury designer shingles and metal roofing.
                </SecondaryText>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                    <li>Architectural Asphalt Shingles</li>
                    <li>Metal Roofing Systems</li>
                    <li>Luxury Designer Shingles</li>
                    <li>Flat Roofing Membranes</li>
                </ul>
                <a
                    href="/roofing"
                    className="mt-4 inline-block text-primaryblue underline font-semibold"
                >
                    Learn more about our roofing styles →
                </a>
            </section>

            {/* Solar Section */}
            <section>
                <HeaderText as="h2">
                    Solar‑Ready Roofing & Household Solar Panels
                </HeaderText>
                <SecondaryText className="mt-2">
                    Supercharge your savings with <strong>solar panels for home</strong> on a
                    roof built for solar energy. We prep your roof for seamless
                    solar integration and partner with top installers for full solar service.
                </SecondaryText>
                <a
                    href="/solar"
                    className="mt-4 inline-block text-primaryblue underline font-semibold"
                >
                    Explore solar roofing →
                </a>
            </section>

            {/* Siding & More */}
            <section>
                <HeaderText as="h2">Complete Exterior Services</HeaderText>
                <SecondaryText className="mt-2">
                    Paragon Exterior isn&apos;t just a roofing company—we do siding too. Bundle your
                    roof and siding upgrades to protect, insulate, and beautify your home
                    in {location.name}.
                </SecondaryText>
            </section>

            {/* FAQ */}
            <section>
                <HeaderText as="h2">Frequently Asked Questions</HeaderText>
                <ul className="mt-4 space-y-4">
                    <li>
                        <strong>Do you offer roof repair near me in {location.name}?</strong>
                        <p>
                            Absolutely—our local crews respond fast to leaks, storm damage, and wear
                            anywhere in {location.name} and surrounding neighborhoods.
                        </p>
                    </li>
                    <li>
                        <strong>Are you licensed roofing contractors?</strong>
                        <p>
                            Yes. Paragon Exterior is fully licensed, insured, and one of the
                            best roofing companies near you for residential roofing and
                            solar‑ready installs.
                        </p>
                    </li>
                    <li>
                        <strong>What roofing materials do you install?</strong>
                        <p>
                            From traditional asphalt shingles to metal, tile, and modern flat
                            roofing—our versatile team handles it all.
                        </p>
                    </li>
                    <li>
                        <strong>Do you offer emergency roof repair?</strong>
                        <p>
                            We do. Our emergency roofing contractors are on call for urgent
                            repairs to protect your home from further damage.
                        </p>
                    </li>
                    <li>
                        <strong>Can I add solar panels for my house?</strong>
                        <p>
                            Yes! We design and install solar‑ready roofing systems that
                            accommodate household solar panels and solar electricity for home
                            energy savings.
                        </p>
                    </li>
                    <li>
                        <strong>How do I know if I need a full roof replacement?</strong>
                        <p>
                            If your roof is over 15 years old, sagging, or leaking frequently,
                            our roof replacement experts will assess and recommend a durable,
                            long‑lasting solution.
                        </p>
                    </li>
                    <li>
                        <strong>Do you offer financing options?</strong>
                        <p>
                            We offer flexible financing on roof repair, full residential
                            roofing, and solar roofing projects—so you can get quality work
                            today and pay over time.
                        </p>
                    </li>
                </ul>
            </section>

            {/* CTA */}
            <GetEstimate />
        </div>
    );
}