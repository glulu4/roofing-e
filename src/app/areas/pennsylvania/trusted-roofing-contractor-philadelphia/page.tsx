import GetEstimate from "@/components/landing-ui/GetEstimate";
import Row from "@/components/Row";
import SecondaryText from "@/components/SecondaryText";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import WhyParagon from "@/components/WhyParagon";
import React from "react";


export const metadata = {
    title: "Trusted Roofing Contractor Philadelphia | Paragon Exterior",
    description: "Paragon Exterior is the trusted roofing contractor in Philadelphia. We specialize in roof repair, roof replacement, and expert exterior services.",
    alternates: {
        canonical: "https://www.paragonexterior.com/areas/pennsylvania/philadelphia-home-improvement-contractor",
    },
    openGraph: {
        title: "Trusted Roofing Contractor Philadelphia",
        description: "Need a reliable roofing contractor in Philadelphia? Paragon Exterior delivers expert roof repair, installation, and replacement backed by local trust and experience.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Trusted roofing contractor Philadelphia - roof installation and repair",
            },
        ],
    },
    twitter: {
        title: "Trusted Roofing Contractor Philadelphia",
        description: "Looking for a trusted roofing contractor in Philadelphia? Paragon Exterior offers expert service, long-lasting results, and honest guidance for your roof.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Trusted roofing contractor Philadelphia - roof installation and repair",
            },
        ],
        card: "summary_large_image",
    },
    keywords: [
        "trusted roofing contractor Philadelphia",
        "Philadelphia roofing company",
        "roof repair Philadelphia",
        "roof replacement Philadelphia",
        "licensed roofer in Philadelphia",
        "metal roofing Philadelphia",
        "commercial roofing Philadelphia",
        "Philadelphia roofers",
        "Paragon Exterior roofing contractor",
    ],
};


export default function page() {
    return (
        <div>
            <Hero
                mainText="Trusted Roofing Contractor in Philadelphia"
                subText="Paragon Exterior is the roofing contractor Philadelphia homeowners trust. We provide reliable roof repair, roof replacement, and exterior upgrades with expert craftsmanship and honest guidance."
                imgSrc="/images/locations/philadelphia/hero.webp"
                imgAlt="Trusted roofing contractor Philadelphia - residential roof work"
            />


            {/* <InfoSection
                title="Philadelphia's Trusted Roofing Contractor"
                mainContent="Paragon Exterior has earned a reputation as the trusted roofing contractor in Philadelphia. Our team brings decades of experience to every roof repair, replacement, or installation. We know the local climate, understand historic Philly homes, and work with premium materials to protect your property for the long term."
                bottomContent="From rowhomes in South Philly to suburban properties in the Northeast, Paragon Exterior is Philadelphia’s roofing company of choice. We offer free inspections, honest quotes, and craftsmanship that lasts through every season."
                imgSrc="/images/locations/philadelphia/philly2.webp"
                imgAlt="Roofers working on home in Philadelphia - trusted contractor"
                imagePosition="left"
                titleHref="/roofing-contractor/philadelphia"
                titleAs="h1"
            /> */}

            <InfoSection
                title="Philadelphia's Trusted Roofing Contractor"
                mainContent={
                    <>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            Paragon Exterior has earned a reputation as the trusted roofing contractor in Philadelphia. Our team brings decades of experience to every roof repair, replacement, or installation. We know the local climate, understand historic Philly homes, and work with premium materials to protect your property for the long term.
                        </SecondaryText>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            As a locally owned and operated roofing company, we’ve worked in nearly every neighborhood—from Fishtown to Fairmount, Manayunk to Mount Airy. We know what it takes to keep Philadelphia homes safe and sound, season after season.
                        </SecondaryText>
                    </>
                }
                bottomContent="From rowhomes in South Philly to suburban properties in the Northeast, Paragon Exterior is Philadelphia’s roofing company of choice. We offer free inspections, honest quotes, and craftsmanship that lasts through every season."
                imgSrc="/images/locations/philadelphia/philly2.webp"
                imgAlt="Roofers working on home in Philadelphia - trusted contractor"
                imagePosition="left"
                titleHref="/roofing-contractor/philadelphia"
                titleAs="h1"
            />



            <InfoSection
                title="Full Roof Replacement by a Trusted Philadelphia Contractor"
                mainContent="If your roof is beyond repair, our trusted team delivers expert roof replacement services across Philadelphia. We use only high-quality materials and proven installation methods to give your home lasting protection. Whether you're replacing shingles, upgrading to metal, or dealing with storm damage, Paragon is the roofing contractor Philadelphia counts on."
                bottomContent="From permits to cleanup, we handle every step of your Philadelphia roof replacement. Our team prioritizes communication, safety, and precision—so you feel confident every step of the way."
                imgSrc="/images/locations/philadelphia/philly6.avif"
                imgAlt="Trusted roofing contractor in Philadelphia replacing roof"
                imagePosition="left"

            />


            {/* <InfoSection
                title="Expert Roof Repair in Philadelphia"
                mainContent="Roof issues in Philadelphia can’t wait—and neither do we. At Paragon, our fast-response roof repair services handle everything from small leaks to storm damage. We repair shingle, flat, and standing seam metal roofs using high-quality materials to ensure long-lasting performance. Trust our skilled Philadelphia team to spot problems early and prevent costly damage."
                bottomContent="Don't let roof damage compromise your Philadelphia home. Our emergency roof repair services in Philadelphia are available when you need them most. From storm damage to aging materials, our skilled technicians diagnose problems quickly and provide lasting solutions. We handle all types of roof repair in Philadelphia, ensuring your family stays safe and dry."
                imgSrc="/images/locations/philadelphia/philly3.webp"
                imgAlt="Professional roof repair services in Philadelphia"
                titleHref="/roofing/roof-repair"
            /> */}
            <InfoSection
                title="Expert Roof Repair in Philadelphia"
                mainContent={
                    <>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            Roof issues in Philadelphia can’t wait—and neither do we. At Paragon, our fast-response roof repair services handle everything from small leaks to storm damage. We repair shingle, flat, and standing seam metal roofs using high-quality materials to ensure long-lasting performance. Trust our skilled Philadelphia team to spot problems early and prevent costly damage.
                        </SecondaryText>
                        <SecondaryText className="mt-6 text-lg text-gray-600">
                            We understand the unique needs of Philly homes—especially older structures with aging materials. Whether you’re in a brick rowhouse or a modern rebuild, we know how to assess your roof and recommend the right fix, fast.
                        </SecondaryText>
                    </>
                }
                bottomContent="Don't let roof damage compromise your Philadelphia home. Our emergency roof repair services in Philadelphia are available when you need them most. From storm damage to aging materials, our skilled technicians diagnose problems quickly and provide lasting solutions. We handle all types of roof repair in Philadelphia, ensuring your family stays safe and dry."
                imgSrc="/images/locations/philadelphia/philly3.webp"
                imgAlt="Professional roof repair services in Philadelphia"
                titleHref="/roofing/roof-repair"
            />


            <InfoSection
                title="Professional Roof Installation in Philadelphia"
                mainContent="Installing a new roof in Philadelphia is a major investment—and one you should trust to the pros. Paragon offers full-service roof installation across all materials, including asphalt shingles, metal, and flat roofing systems. Our team follows strict installation standards for weatherproofing, ventilation, and long-term durability. We help Philadelphia homeowners select the right roof to match their home's look and withstand the seasons."
                bottomContent="Transform your Philadelphia home with professional roof installation from Paragon. Our expert installers work with all major roofing materials and styles, ensuring your new roof complements your home's architecture while providing superior protection. Every roof installation in Philadelphia comes with comprehensive warranties and our commitment to excellence."
                imgSrc="/images/locations/philadelphia/philly4.webp"
                imgAlt="New roof installation project in Philadelphia neighborhood"
                imagePosition="left"
                titleHref="/roofing/roof-replacement"
            />

            <InfoSection
                title="Board and Batten Siding Installation in Philadelphia"
                mainContent="Add character and charm to your Philadelphia home with professionally installed board and batten siding. This popular vertical siding style not only looks great but also adds strength and weather resistance. Paragon installs board and batten siding in vinyl and fiber cement materials to suit both traditional and modern Philly home styles. Our team ensures a seamless installation with sharp lines and long-lasting durability."
                bottomContent="Board and batten siding is a stylish, durable option for Philadelphia homeowners who want to boost curb appeal. We offer expert installation in a variety of materials to match your home's look and protect it from the elements."
                imgSrc="/images/siding/vinyl/board-batten.webp"
                imgAlt="Board and batten siding installation on a Philadelphia home"
                titleHref="/siding/board-and-batten-siding"
            />

            <InfoSection
                title="Vinyl Siding Services in Philadelphia"
                mainContent="Paragon offers expert vinyl siding installation and replacement services across Philadelphia. Vinyl siding is known for its affordability, durability, and low maintenance—making it a great choice for many Philly homeowners. We carry a wide range of colors and styles to match your vision while boosting energy efficiency and protection. Our skilled team delivers precision installation backed by long-term warranties."
                bottomContent="If you're looking for affordable, reliable siding in Philadelphia, vinyl siding is a top option. Paragon installs high-quality vinyl siding built to last and look great."
                imgSrc="/images/siding/vinyl/vinyl1.webp"
                imgAlt="Vinyl siding installed on a Philadelphia home"
                titleHref="/siding/vinyl-siding"
            />

            <InfoSection
                title="Metal Roofing in Philadelphia"
                mainContent="Metal roofs are growing in popularity across Philadelphia for their sleek appearance, energy efficiency, and longevity. Paragon installs premium standing seam metal roofing and corrugated metal options that are built to last through PA's weather extremes. Whether you're modernizing your rowhome or upgrading your historic property, our Philadelphia metal roofing experts deliver unbeatable results."
                bottomContent="Discover the benefits of metal roofing in Philadelphia with Paragon. Metal roofs offer exceptional durability, energy efficiency, and style that perfectly suits Philadelphia's diverse architectural landscape. Our metal roofing specialists install premium steel, aluminum, and copper roofing systems designed to withstand Philadelphia's weather extremes while adding lasting value to your home."
                imgSrc="/images/locations/philadelphia/philly5.webp"
                imgAlt="Beautiful metal roofing installation on Philadelphia home"
                titleHref="/roofing/metal-roofing"
            />

            <InfoSection
                title="Roof Replacement in Philadelphia"
                mainContent="If your roof is nearing the end of its life, Paragon offers full roof replacement services throughout Philadelphia. We start with a detailed inspection, then guide you through choosing the best materials—whether shingles, metal, or flat roofing. Our replacement process includes removal, prep, installation, and cleanup. With quality craftsmanship and transparent communication, your Philadelphia home is in good hands."
                bottomContent="When repair isn't enough, trust Paragon for complete roof replacement in Philadelphia. Our comprehensive replacement process includes thorough inspection, material selection, and expert installation. We handle every aspect of roof replacement in Philadelphia, from permits to cleanup, ensuring a smooth experience and a roof that will protect your home for decades."
                imgSrc="/images/locations/philadelphia/philly6.avif"
                imgAlt="Complete roof replacement project in Philadelphia"
                imagePosition="left"
            />

            <Row
                title="Commercial Roofing in Philadelphia"
                imageSrc="/images/locations/philadelphia/philly7.webp"
                description="Paragon extends our expertise to commercial roofing in Philadelphia, serving businesses throughout the metropolitan area. Our commercial roofing team understands the unique demands of Philadelphia businesses, providing durable, cost-effective roofing solutions that minimize downtime and maximize protection. From flat roof systems to metal installations, we deliver commercial roofing services that keep Philadelphia businesses operating smoothly."
            />

            <InfoSection
                title="Why Philadelphia Homeowners Trust Paragon Exterior"
                mainContent="As a local, licensed roofing contractor in Philadelphia, we’ve built our business on trust, transparency, and results. Our roofers are trained, insured, and committed to doing things right the first time. We stand behind our work with strong warranties, responsive service, and 5-star reviews from your neighbors."
                bottomContent="Choosing a roofing contractor in Philadelphia doesn’t have to be stressful. Paragon Exterior combines big-company capability with small-town customer care—so your home stays safe, dry, and beautiful."
                imgSrc="/images/roof-service/roof-replacement/roof-replacement-hero.webp"
                imgAlt="Homeowners trust Paragon Exterior as their roofing contractor in Philadelphia"
                imagePosition="left"
            />

            <section className="max-w-5xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-primaryblue mb-4">
                    Serving All of Philadelphia with Trusted Roofing & Siding
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Paragon Exterior is proud to serve homeowners throughout the Philadelphia metro area. We’ve completed projects in South Philly, West Philly, Chestnut Hill, Kensington, and beyond. Our deep knowledge of local home styles and weather patterns helps us deliver smarter, longer-lasting solutions.
                </p>
                <p className="text-lg text-gray-700">
                    Whether you need urgent roof repair, a full replacement, or siding installation using James Hardie or CertainTeed products, our team is ready to help. Paragon Exterior is Philadelphia’s go-to roofing contractor for a reason: we show up, follow through, and treat your home like it’s our own.
                </p>
            </section>



            <WhyParagon
            title="Why Choose Paragon for Your Philadelphia Exterior Needs?"
            />

            <GetEstimate/>
        </div>
    );
}
