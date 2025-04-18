import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import SecondaryText from "@/components/SecondaryText";
import {Metadata} from "next";

const serviceAreas: {
    [key: string]: {
        name: string;
        description: string;
    };
} = {
    langhorne: {
        name: "Langhorne",
        description: "Paragon Exterior offers professional roof repair and residential roofing services in Langhorne, PA.",
    },
    bensalem: {
        name: "Bensalem",
        description: "We deliver expert roof repair, siding installations, and residential roofing services in Bensalem, PA.",
    },


    levittown: {
        name: "Levittown",
        description: "Paragon Exterior specializes in roof repair and residential roofing solutions in Levittown, PA.",
    },
    bristol: {
        name: "Bristol",
        description: "We provide top-notch roof repair and residential roofing services in Bristol, PA.",
    },
    feasterville: {
        name: "Feasterville",
        description: "Paragon Exterior offers expert roof repair and residential roofing solutions in Feasterville, PA.",
    },
    trevose: {
        name: "Trevose",
        description: "We specialize in roof repair and residential roofing services in Trevose, PA.",
    },
    richboro: {
        name: "Richboro",
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Richboro, PA.",
    },
    newtown: {
        name: "Newtown",
        description: "We deliver expert roof repair and residential roofing solutions in Newtown, PA.",
    },
    southampton: {
        name: "Southampton",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in Southampton, PA.",
    },
    yardley: {
        name: "Yardley",
        description: "We provide top-notch roof repair and residential roofing solutions in Yardley, PA.",  
    },
    morrisville: {
        name: "Morrisville",
        description: "Paragon Exterior offers expert roof repair and residential roofing services in Morrisville, PA.",
    },
    penndel: {
        name: "Penndel",
        description: "We specialize in roof repair and residential roofing solutions in Penndel, PA.",
    },
    warminster: {
        name: "Warminster",
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Warminster, PA.",
    },
    willowgrove: {
        name: "Willow Grove",
        description: "We deliver expert roof repair and residential roofing solutions in Willow Grove, PA.",
    },
    hatboro: {
        name: "Hatboro",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in Hatboro, PA.",
    },
    horsham: {
        name: "Horsham",
        description: "We provide top-notch roof repair and residential roofing solutions in Horsham, PA.",
    },
    ambler: {
        name: "Ambler",
        description: "Paragon Exterior offers expert roof repair and residential roofing services in Ambler, PA.",
    },
    doylestown: {
        name: "Doylestown",
        description: "We specialize in roof repair and residential roofing solutions in Doylestown, PA.",
    },
    lansdale: {
        name: "Lansdale",
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Lansdale, PA.",
    },
    montgomeryville: {
        name: "Montgomeryville",
        description: "We deliver expert roof repair and residential roofing solutions in Montgomeryville, PA.",
    },
    northwales: {
        name: "North Wales",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in North Wales, PA.",
    },
    bluebell: {
        name: "Blue Bell",
        description: "We provide top-notch roof repair and residential roofing solutions in Blue Bell, PA.",
    },
    plymouthmeeting: {
        name: "Plymouth Meeting",
        description: "Paragon Exterior offers expert roof repair and residential roofing services in Plymouth Meeting, PA.",
    },
    kingofprussia: {
        name: "King of Prussia",
        description: "We specialize in roof repair and residential roofing solutions in King of Prussia, PA.",
    },
    norristown: {
        name: "Norristown",
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Norristown, PA.",
    },
    westnorriton: {
        name: "West Norriton",
        description: "We deliver expert roof repair and residential roofing solutions in West Norriton, PA.",
    },
    conshohocken: {
        name: "Conshohocken",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in Conshohocken, PA.",
    },
    eastnorriton: {
        name: "East Norriton",
        description: "We provide top-notch roof repair and residential roofing solutions in East Norriton, PA.",
    },
    collegeville: {
        name: "Collegeville",
        description: "Paragon Exterior offers expert roof repair and residential roofing services in Collegeville, PA.",
    },
    trappe: {
        name: "Trappe",
        description: "We specialize in roof repair and residential roofing solutions in Trappe, PA.",
    },
    phoenixville: {
        name: "Phoenixville",   
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Phoenixville, PA.",
    },
    pottstown: {
        name: "Pottstown",
        description: "We deliver expert roof repair and residential roofing solutions in Pottstown, PA.",
    },
    abington: {
        name: "Abington",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in Abington, PA.",
    },
    huntingtonvalley: {
        name: "Huntington Valley",
        description: "We provide top-notch roof repair and residential roofing solutions in Huntington Valley, PA.",
    },
    somerton: {
        name: "Somerton",
        description: "Paragon Exterior offers professional roof repair and residential roofing services in Somerton, PA.",
    },
    bustleton: {
        name: "Bustleton",
        description: "We provide top-tier roof repair and residential roofing solutions in Bustleton, PA.",
    },
    foxchase: {
        name: "Fox Chase",
        description: "Paragon Exterior delivers expert roof repair and residential roofing services in Fox Chase, PA.",
    },
    holmesburg: {
        name: "Holmesburg",
        description: "We specialize in roof repair and residential roofing solutions in Holmesburg, PA.",
    },
    mayfair: {
        name: "Mayfair",
        description: "Paragon Exterior provides trusted roof repair and residential roofing services in Mayfair, PA.",
    },
    rhawnhurst: {
        name: "Rhawnhurst",
        description: "We offer expert roof repair and residential roofing solutions in Rhawnhurst, PA.",
    },
    oxfordcircle: {
        name: "Oxford Circle",
        description: "Paragon Exterior specializes in roof repair and residential roofing services in Oxford Circle, PA.",
    },
    lawndale: {
        name: "Lawndale",
        description: "We provide top-notch roof repair and residential roofing solutions in Lawndale, PA.",
    },
    frankford: {
        name: "Frankford",
        description: "Paragon Exterior delivers reliable roof repair and residential roofing services in Frankford, PA.",
    },
    wissinoming: {
        name: "Wissinoming",
        description: "We offer high-quality roof repair and residential roofing services in Wissinoming, PA.",
    },
    chestnuthill: {
        name: "Chestnut Hill",
        description: "Paragon Exterior offers expert roof repair and residential roofing services in Chestnut Hill, PA.",
    },
    mountairy: {
        name: "Mount Airy",
        description: "We deliver professional roof repair and residential roofing solutions in Mount Airy, PA.",
    },
    roxborough: {
        name: "Roxborough",
        description: "Paragon Exterior provides high-quality roof repair and residential roofing services in Roxborough, PA.",
    },
    manayunk: {
        name: "Manayunk",
        description: "We specialize in roof repair and residential roofing solutions in Manayunk, PA.",
    },
    germantown: {
        name: "Germantown",
        description: "Paragon Exterior offers trusted roof repair and residential roofing services in Germantown, PA.",
    },
    olney: {
        name: "Olney",
        description: "We provide affordable and reliable roof repair and residential roofing in Olney, PA.",
    },
    elkinspark: {
        name: "Elkins Park",
        description: "Paragon Exterior specializes in expert roof repair and residential roofing services in Elkins Park, PA.",
    },
    cheltenham: {
        name: "Cheltenham",
        description: "We deliver roof repair and residential roofing solutions in Cheltenham, PA.",
    },
    glenside: {
        name: "Glenside",
        description: "Paragon Exterior provides professional roof repair and residential roofing services in Glenside, PA.",
    },
    jenkintown: {
        name: "Jenkintown",
        description: "We offer roof repair and residential roofing services in Jenkintown, PA.",
    },
    rockledge: {
        name: "Rockledge",
        description: "Paragon Exterior specializes in roof repair and residential roofing in Rockledge, PA.",
    },
    roslyn: {
        name: "Roslyn",
        description: "We deliver high-quality roof repair and residential roofing services in Roslyn, PA.",
    },
    foxchasefarm: {
        name: "Fox Chase Farm",
        description: "Paragon Exterior offers expert roof repair and residential roofing in Fox Chase Farm, PA.",
    },
    meadowbrook: {
        name: "Meadowbrook",
        description: "We provide reliable roof repair and residential roofing services in Meadowbrook, PA.",
    },
    huntingpark: {
        name: "Hunting Park",
        description: "Paragon Exterior delivers roof repair and residential roofing services in Hunting Park, PA.",
    },
    springfieldmontco: {
        name: "Springfield (Montco)",
        description: "We specialize in roof repair and residential roofing services in Springfield, Montgomery County, PA.",
    },
    eastfalls: {
        name: "East Falls",
        description: "Paragon Exterior provides residential roofing and expert roof repair services in East Falls, PA.",
    },
    logan: {
        name: "Logan",
        description: "We offer professional roof repair and residential roofing services in Logan, Philadelphia.",
    },
    ogontz: {
        name: "Ogontz",
        description: "Paragon Exterior specializes in roof repair and residential roofing solutions in Ogontz, PA.",
    },
    abingtontownship: {
        name: "Abington Township",
        description: "We provide top-notch roof repair and residential roofing in Abington Township, PA.",
    },


};

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

// export default function ServiceAreaPage({params}: {params: {slug: string}}) {
//     const location = serviceAreas[params.slug];

//     if (!location) return <div>Area not found.</div>;

//     return (
//         <div className="p-6 max-w-3xl mx-auto">
//             <h1 className="text-4xl font-bold mb-4">
//                 Roofing Contractor in {location.name}, PA
//             </h1>
//             <p className="text-lg">
//                 {location.description}
//             </p>
//             <p className="mt-4">
//                 From roof repair and siding to residential roofing and gutter services, Paragon Exterior is proud to serve the {location.name} area with quality and care.
//             </p>
//         </div>
//     );
// }


export default function ServiceAreaPage({params}: {params: {slug: string}}) {
    const location = serviceAreas[params.slug]

    if (!location) return <div>Area not found.</div>

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-16">
            {/* Hero Section */}
            <section className="text-center">
                <HeaderText variant="large">Roofing Company in {location.name}, PA</HeaderText>
                <SecondaryText className="mt-4">
                    Paragon Exterior provides expert roof repair, residential roofing, siding, and solar-ready roofing systems in {location.name}. We&apos;re one of the most trusted roofing contractors near you.
                </SecondaryText>
                <button className="mt-6 bg-primaryblue text-white px-6 py-3 rounded">Get a Free Estimate</button>
            </section>

            {/* Why Choose Us */}
            <section>
                <HeaderText as="h2">Why {location.name} Homeowners Choose Paragon Exterior</HeaderText>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                    <li>Licensed & Insured Roofing Contractors</li>
                    <li>Expert Roof Repair Near You</li>
                    <li>Residential Roofing Built to Last</li>
                    <li>Transparent Pricing & Free Inspections</li>
                </ul>
            </section>

            {/* Services Section */}
            <section>
                <HeaderText as="h2">Roofing Services in {location.name}</HeaderText>
                <ul className="mt-4 space-y-4">
                    <li><strong>Roof Repair:</strong> Fast and affordable roofing repairs for leaks, damage, and wear.</li>
                    <li><strong>Residential Roofing:</strong> Shingle, metal, and custom roofing systems for your home.</li>
                    <li><strong>Flat Roofing:</strong> Low-slope and flat roof systems for additions and modern homes.</li>
                    <li><strong>Emergency Roof Repair:</strong> Storm or damage? Call us for immediate help.</li>
                </ul>
            </section>

            {/* Roofing Types */}
            <section>
                <HeaderText as="h2">Shingle & Roofing Options</HeaderText>
                <SecondaryText className="mt-2">
                    We offer a variety of roofing materials tailored to the needs of your homes:
                </SecondaryText>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                    <li>Architectural Asphalt Shingles</li>
                    <li>Metal Roofing Systems</li>
                    <li>Luxury Designer Shingles</li>
                    <li>Flat Roofing Systems</li>
                </ul>
                <a href="/roofing" className="mt-4 inline-block text-primaryblue underline font-semibold">Learn more about our roofing styles →</a>
            </section>

            {/* Solar Section */}
            <section>
                <HeaderText as="h2">Solar-Ready Roofing in {location.name}</HeaderText>
                <SecondaryText className="mt-2">
                    Thinking of going solar? Our roofing company makes sure your roof is ready for solar integration.
                </SecondaryText>
                <a href="/solar" className="mt-4 inline-block text-primaryblue underline font-semibold">Explore solar roofing →</a>
            </section>

            {/* Siding Mention */}
            <section>
                <HeaderText as="h2">Complete Exterior Services</HeaderText>
                <SecondaryText className="mt-2">
                    At Paragon Exterior, we also offer professional siding services to protect your home. Combine siding with roofing for a full exterior upgrade. Chose our rooding company for all your exterior needs.
                </SecondaryText>
            </section>

            {/* Testimonials */}
            {/* <section>
                <HeaderText as="h2">What Our Clients Say</HeaderText>
                <div className="mt-4 space-y-4">
                    <blockquote className="bg-gray-100 p-4 rounded">
                        "Paragon Exterior repaired my roof after a storm and did an amazing job. Highly recommend!" — Jane D.
                    </blockquote>
                    <blockquote className="bg-gray-100 p-4 rounded">
                        "They replaced our shingles with a beautiful architectural style. It transformed our home." — Michael S.
                    </blockquote>
                </div>
            </section> */}

            {/* FAQ Section */}
            <section>
                <HeaderText as="h2">Frequently Asked Questions</HeaderText>
                <ul className="mt-4 space-y-4">
                    <li>
                        <strong>Do you offer roof repair near me in {location.name}?</strong>
                        <p>
                            Yes! We specialize in fast, affordable roof repair near you. Whether you&apos;re in {location.name} or a nearby neighborhood, our local roofing contractors respond quickly to leaks, storm damage, and general wear.
                        </p>
                    </li>
                    <li>
                        <strong>Are you licensed roofing contractors?</strong>
                        <p>
                            Absolutely. Paragon Exterior is a fully licensed and insured roofing contractor in Pennsylvania, trusted by homeowners in {location.name} for residential roofing, roof repair, and solar roofing projects.
                        </p>
                    </li>
                    <li>
                        <strong>What types of roofing do you install?</strong>
                        <p>
                            We install a wide range of roofing systems including asphalt shingles, flat roofing, metal roofing, and designer shingles. If you’re searching for the best roofing company near {location.name}, we’ve got you covered.
                        </p>
                    </li>
                    <li>
                        <strong>Do you provide emergency roof repair in {location.name}?</strong>
                        <p>
                            Yes! We offer emergency roof repair services near you. Our team can assess and address urgent roof leaks, storm damage, and structural issues on short notice.
                        </p>
                    </li>
                    <li>
                        <strong>Can I get solar panels for my house through you?</strong>
                        <p>
                            Yes. We offer solar-ready roofing systems and work with solar installation partners to ensure your home is ready for household solar panels. Our designs support solar electricity for home energy efficiency.
                        </p>
                    </li>
                    <li>
                        <strong>Do solar panels work with all types of roofs?</strong>
                        <p>
                            Most solar panels can be integrated with shingle, metal, or flat roofs. As a roofing company experienced in solar panel installations, we make sure your system fits securely and efficiently.
                        </p>
                    </li>
                    <li>
                        <strong>How do I know if I need a new roof or just repairs?</strong>
                        <p>
                            If your roof is leaking, sagging, or more than 15–20 years old, it may be time for a replacement. Our roofing contractors will inspect your roof and provide honest guidance on roof repair vs. full replacement.
                        </p>
                    </li>
                    <li>
                        <strong>Do you offer financing for roof replacement or solar roofing?</strong>
                        <p>
                            Yes, we offer flexible financing options for roof replacements, residential roofing, and solar-ready installations. Get high-quality service without the upfront burden.
                        </p>
                    </li>
                </ul>
            </section>


            {/* CTA */}
            {/* <section className="text-center bg-primaryblue text-white py-12 rounded"> */}

                <GetEstimate/>
                {/* <HeaderText className="text-white">Ready to Get Started?</HeaderText>
                <p className="mt-2">Contact us today for a free roofing estimate in {location.name}, PA.</p>
                <button className="mt-4 bg-white text-primaryblue px-6 py-3 rounded font-semibold">Request a Quote</button> */}
            {/* </section> */}
        </div>
    )
} 
