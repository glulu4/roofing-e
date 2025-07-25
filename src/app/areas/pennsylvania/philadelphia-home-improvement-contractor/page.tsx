import GetEstimate from "@/components/landing-ui/GetEstimate";
import Row from "@/components/Row";
import Hero from "@/components/service-page/Hero";
import InfoSection from "@/components/service-page/Info";
import WhyParagon from "@/components/WhyParagon";
import React from "react";


export const metadata = {
    title: "Philadelphia Home Improvement Contractor",
    description: "We are Philadelphia's trusted home improvement contractor, specializing in roofing, siding, gutters, and windows.",
    openGraph: {
        title: "Philadelphia Exterior Services",
        description: "Expert exterior services in Philadelphia, including roofing & siding. Trust Paragon Exterior for quality home improvements in the City of Brotherly Love.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Professional exterior services in Philadelphia - roofing, siding, and windows",
            },
        ],
    },
    twitter: {
        title: "Philadelphia Exterior Services",
        description: "Expert exterior services in Philadelphia, including roofing & siding. Trust Paragon Exterior for quality home improvements in the City of Brotherly Love.",
        images: [
            {
                url: "/images/locations/philadelphia/hero.webp",
                width: 1200,
                height: 630,
                alt: "Professional exterior services in Philadelphia - roofing, siding, and windows",
            },
        ],
        card: "summary_large_image",
    },
    keywords: [
        "Philadelphia Home Improvement Contractor",
        "Philadelphia exterior services",
        "roofing Philadelphia",
        "siding Philadelphia",
        "window installation Philadelphia",
        "roof repair Philadelphia",
        "roof replacement Philadelphia",
        "metal roofing Philadelphia",
        "commercial roofing Philadelphia",
        "home improvement Philadelphia",
        "Paragon Exterior",
    ],
};

export default function page() {
    return (
        <div>
            <Hero
                mainText="Philadelphia's Roofing & Siding Experts"
                subText="Transform your Philadelphia home with our expert exterior services. From roofing to siding, we provide comprehensive solutions for all your exterior needs in the City of Brotherly Love."
                imgSrc="/images/locations/philadelphia/hero.webp"
                imgAlt="Professional exterior services in Philadelphia - roofing, siding, and windows"
            />

            <InfoSection
            titleAs="h2"
                title="Philadelphia's Select Home Improvement Contractor"
                mainContent="At Paragon, we provide Philadelphia homeowners with trusted, top-quality exterior services tailored to the unique needs of local properties. Whether you're updating an aging roof, replacing damaged siding, or installing energy-efficient windows, we deliver expert craftsmanship and honest guidance every step of the way. Our team is trained to handle Philly's unpredictable weather and historical home styles with care."
                bottomContent="Paragon delivers exceptional exterior services throughout Philadelphia and surrounding areas. Our experienced team understands the unique challenges Philadelphia homes face, from harsh winters to humid summers. We provide complete roofing, siding, and window solutions designed to protect and enhance your Philadelphia property for years to come."
                imgSrc="/images/locations/philadelphia/philly1.webp"
                imgAlt="Philadelphia exterior services - comprehensive home improvement solutions"
            />

            <InfoSection
                title="Expert Roofing Contractors in Philadelphia"
                mainContent="Looking for reliable roofing contractors in Philadelphia? Paragon is known for professional roofing services that stand the test of time. We handle shingle, metal, and flat roofing systems with precision and care. Whether it's a minor leak or full roof installation, we treat every home like our own. We serve Philadelphia neighborhoods with quality materials, skilled labor, and honest pricing."
                bottomContent="When you need reliable roofing contractors in Philadelphia, Paragon stands above the rest. Our certified Philadelphia roofing team has decades of combined experience handling everything from minor repairs to complete roof overhauls. We use premium materials and proven techniques to ensure your Philadelphia home stays protected through every season."
                imgSrc="/images/locations/philadelphia/philly2.webp"
                imgAlt="Professional roofing contractors working on Philadelphia home"
                imagePosition="left"
            />

            <InfoSection
                title="Expert Roof Repair in Philadelphia"
                mainContent="Roof issues in Philadelphia can’t wait—and neither do we. At Paragon, our fast-response roof repair services handle everything from small leaks to storm damage. We repair shingle, flat, and standing seam metal roofs using high-quality materials to ensure long-lasting performance. Trust our skilled Philadelphia team to spot problems early and prevent costly damage."
                bottomContent="Don't let roof damage compromise your Philadelphia home. Our emergency roof repair services in Philadelphia are available when you need them most. From storm damage to aging materials, our skilled technicians diagnose problems quickly and provide lasting solutions. We handle all types of roof repair in Philadelphia, ensuring your family stays safe and dry."
                imgSrc="/images/locations/philadelphia/philly3.webp"
                imgAlt="Professional roof repair services in Philadelphia"
            />

            <InfoSection
                title="Professional Roof Installation in Philadelphia"
                mainContent="Installing a new roof in Philadelphia is a major investment—and one you should trust to the pros. Paragon offers full-service roof installation across all materials, including asphalt shingles, metal, and flat roofing systems. Our team follows strict installation standards for weatherproofing, ventilation, and long-term durability. We help Philadelphia homeowners select the right roof to match their home's look and withstand the seasons."
                bottomContent="Transform your Philadelphia home with professional roof installation from Paragon. Our expert installers work with all major roofing materials and styles, ensuring your new roof complements your home's architecture while providing superior protection. Every roof installation in Philadelphia comes with comprehensive warranties and our commitment to excellence."
                imgSrc="/images/locations/philadelphia/philly4.webp"
                imgAlt="New roof installation project in Philadelphia neighborhood"
                imagePosition="left"
            />

            <InfoSection
                title="Board and Batten Siding Installation in Philadelphia"
                mainContent="Add character and charm to your Philadelphia home with professionally installed board and batten siding. This popular vertical siding style not only looks great but also adds strength and weather resistance. Paragon installs board and batten siding in vinyl and fiber cement materials to suit both traditional and modern Philly home styles. Our team ensures a seamless installation with sharp lines and long-lasting durability."
                bottomContent="Board and batten siding is a stylish, durable option for Philadelphia homeowners who want to boost curb appeal. We offer expert installation in a variety of materials to match your home's look and protect it from the elements."
                imgSrc="/images/siding/vinyl/board-batten.webp"
                imgAlt="Board and batten siding installation on a Philadelphia home"
            />

            <InfoSection
                title="Vinyl Siding Services in Philadelphia"
                mainContent="Paragon offers expert vinyl siding installation and replacement services across Philadelphia. Vinyl siding is known for its affordability, durability, and low maintenance—making it a great choice for many Philly homeowners. We carry a wide range of colors and styles to match your vision while boosting energy efficiency and protection. Our skilled team delivers precision installation backed by long-term warranties."
                bottomContent="If you're looking for affordable, reliable siding in Philadelphia, vinyl siding is a top option. Paragon installs high-quality vinyl siding built to last and look great."
                imgSrc="/images/siding/vinyl/vinyl1.webp"
                imgAlt="Vinyl siding installed on a Philadelphia home"
            />

            <InfoSection
                title="Metal Roofing in Philadelphia"
                mainContent="Metal roofs are growing in popularity across Philadelphia for their sleek appearance, energy efficiency, and longevity. Paragon installs premium standing seam metal roofing and corrugated metal options that are built to last through PA's weather extremes. Whether you're modernizing your rowhome or upgrading your historic property, our Philadelphia metal roofing experts deliver unbeatable results."
                bottomContent="Discover the benefits of metal roofing in Philadelphia with Paragon. Metal roofs offer exceptional durability, energy efficiency, and style that perfectly suits Philadelphia's diverse architectural landscape. Our metal roofing specialists install premium steel, aluminum, and copper roofing systems designed to withstand Philadelphia's weather extremes while adding lasting value to your home."
                imgSrc="/images/locations/philadelphia/philly5.webp"
                imgAlt="Beautiful metal roofing installation on Philadelphia home"
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

            <WhyParagon
            title="Why Choose Paragon for Your Philadelphia Exterior Needs?"
            />

            <GetEstimate/>
        </div>
    );
}
