import React from 'react'
import HeaderText from './HeaderText'
import SecondaryText from './SecondaryText'
import {FaAward, FaHandshake, FaLightbulb, FaShieldAlt, FaClock, FaTools, FaHome, FaUsers, FaStar} from 'react-icons/fa'

interface WhyParagonReason {
    icon: React.ComponentType<{className?: string}>;
    title: string;
    description: string;
    keywordPhrase?: string; // For SEO optimization
}

interface WhyParagonProps {
    title: string;
    subTitle?: string;
    service?: keyof typeof serviceReasons; // Use keyof to restrict to valid service keys
    // service?: 'roof-repair' | 'roof-replacement' | 'velux-skylights' | 'flat-roofing' | 'roof-leak-repair' | 'emergency-roof-repair' | 'roofing' | 'siding' | 'siding-installation' | 'siding-repair' | 'siding-replacement' | 'vertical-siding' | 'board-and-batten-siding' | 'general';
    customReasons?: WhyParagonReason[];
    className?: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// Service-specific reason sets for maximum SEO impact
const serviceReasons = {
    'roof-repair': [
        {
            icon: FaTools,
            title: "Expert Roof Repair Specialists",
            description: "Our roof repair experts quickly diagnose and fix storm damage, missing shingles, leaks, and flashing issues with precision and care.",
            keywordPhrase: "expert roof repair"
        },
        {
            icon: FaClock,
            title: "Fast Roof Repair Response",
            description: "When you need roof repair near me, we provide rapid response times to prevent further damage to your home.",
            keywordPhrase: "fast roof repair"
        },
        {
            icon: FaShieldAlt,
            title: "Reliable Roof Repair Solutions",
            description: "Our roof repair services are backed by warranties and use quality materials for long-lasting repairs that protect your investment.",
            keywordPhrase: "reliable roof repair"
        },
    ],
    'roof-replacement': [
        {
            icon: FaAward,
            title: "Premium Roof Replacement Services",
            description: "Our roof replacement experts install premium asphalt shingles, metal roofing, and architectural materials with expert craftsmanship.",
            keywordPhrase: "premium roof replacement"
        },
        {
            icon: FaShieldAlt,
            title: "Complete Roof Replacement Solutions",
            description: "From tear-off to final installation, our roof replacement process ensures your new roof provides superior protection for decades.",
            keywordPhrase: "complete roof replacement"
        },
        {
            icon: FaStar,
            title: "Roof Replacement Value",
            description: "Our roof replacement services increase home value, improve energy efficiency, and enhance curb appeal with lasting results.",
            keywordPhrase: "roof replacement value"
        },
    ],
    'velux-skylights': [
        {
            icon: FaLightbulb,
            title: "Professional Velux Skylight Installation",
            description: "Our Velux skylight experts provide professional installation and repair services for energy-efficient, leak-proof skylight solutions.",
            keywordPhrase: "Velux skylight installation"
        },
        {
            icon: FaHome,
            title: "Natural Light Enhancement",
            description: "Add natural light and ventilation to your home with expert Velux skylight installation that brightens your living spaces.",
            keywordPhrase: "natural light skylights"
        },
        {
            icon: FaShieldAlt,
            title: "Leak-Proof Skylight Installation",
            description: "Our Velux skylight installation ensures proper waterproofing and weather-tight seals for worry-free performance.",
            keywordPhrase: "leak-proof skylights"
        },
    ],
    'flat-roofing': [
        {
            icon: FaTools,
            title: "Flat Roofing Specialists",
            description: "Our flat roofing experts specialize in EPDM, TPO, and modified bitumen systems for commercial and residential flat roofing projects.",
            keywordPhrase: "flat roofing specialists"
        },
        {
            icon: FaShieldAlt,
            title: "Durable Flat Roofing Systems",
            description: "We install and repair flat roofing systems that withstand ponding water, UV exposure, and extreme weather conditions.",
            keywordPhrase: "durable flat roofing"
        },
        {
            icon: FaAward,
            title: "Commercial Flat Roofing Expertise",
            description: "Our flat roofing team handles large-scale commercial projects and residential flat roofing with proven installation techniques.",
            keywordPhrase: "commercial flat roofing"
        },
    ],
    'roof-leak-repair': [
        {
            icon: FaClock,
            title: "Emergency Roof Leak Repair",
            description: "Fast roof leak detection and repair services available 24/7 to stop water damage and protect your home immediately.",
            keywordPhrase: "emergency roof leak repair"
        },
        {
            icon: FaTools,
            title: "Expert Leak Detection",
            description: "Our roof leak repair specialists use advanced techniques to locate hidden leaks and provide permanent repair solutions.",
            keywordPhrase: "expert leak detection"
        },
        {
            icon: FaShieldAlt,
            title: "Permanent Roof Leak Solutions",
            description: "We don't just patch leaks - our roof leak repair services address the root cause for lasting protection.",
            keywordPhrase: "permanent leak repair"
        },
    ],
    'emergency-roof-repair': [
        {
            icon: FaClock,
            title: "24/7 Emergency Roof Repair",
            description: "Our emergency roof repair team responds immediately to storm damage, active leaks, and urgent roofing emergencies.",
            keywordPhrase: "24/7 emergency roof repair"
        },
        {
            icon: FaShieldAlt,
            title: "Storm Damage Response",
            description: "Immediate emergency roof repair services for storm damage with professional tarping and permanent repairs available.",
            keywordPhrase: "storm damage repair"
        },
        {
            icon: FaTools,
            title: "Emergency Roof Stabilization",
            description: "Our emergency roof repair experts provide immediate stabilization and temporary protection until permanent repairs are completed.",
            keywordPhrase: "emergency roof stabilization"
        },
    ],
    roofing: [
        {
            icon: FaShieldAlt,
            title: "Licensed Roofing Contractors",
            description: "Our certified roofing contractors bring years of experience to every roof repair, roof replacement, and residential roofing project.",
            keywordPhrase: "licensed roofing contractors"
        },
        {
            icon: FaClock,
            title: "Fast Emergency Roof Repair",
            description: "When you need roof repair near me, we respond quickly with 24/7 emergency roofing services to protect your home.",
            keywordPhrase: "emergency roof repair"
        },
        {
            icon: FaAward,
            title: "Best Roofing Company Guarantee",
            description: "As one of the best roofing companies near you, we back every roof installation and repair with comprehensive warranties.",
            keywordPhrase: "best roofing company"
        },
    ],
    siding: [
        {
            icon: FaTools,
            title: "Expert Siding Contractors",
            description: "Our skilled siding contractors specialize in all types of siding installation, siding repair, and siding replacement services.",
            keywordPhrase: "expert siding contractors"
        },
        {
            icon: FaHome,
            title: "Complete Siding Solutions",
            description: "From vinyl siding to fiber cement, we provide comprehensive siding services that enhance your home's protection and curb appeal.",
            keywordPhrase: "complete siding solutions"
        },
        {
            icon: FaStar,
            title: "Quality Siding Materials",
            description: "We use only premium siding materials and proven installation techniques for lasting beauty and performance.",
            keywordPhrase: "quality siding materials"
        },
    ],
    'siding-installation': [
        {
            icon: FaTools,
            title: "Professional Siding Installation",
            description: "Our siding installation experts use precise techniques and quality materials for flawless siding installation results.",
            keywordPhrase: "professional siding installation"
        },
        {
            icon: FaShieldAlt,
            title: "Siding Installation Warranty",
            description: "Every siding installation project comes with comprehensive warranties covering both materials and workmanship.",
            keywordPhrase: "siding installation warranty"
        },
        {
            icon: FaClock,
            title: "Efficient Siding Installation",
            description: "We complete siding installation projects on time with minimal disruption to your daily routine.",
            keywordPhrase: "efficient siding installation"
        },
    ],
    'siding-repair': [
        {
            icon: FaClock,
            title: "Fast Siding Repair Response",
            description: "When you need siding repair services, we respond quickly to assess damage and provide effective siding repair solutions.",
            keywordPhrase: "fast siding repair"
        },
        {
            icon: FaTools,
            title: "Expert Siding Repair Techniques",
            description: "Our siding repair specialists use advanced techniques to seamlessly blend repairs with existing siding.",
            keywordPhrase: "expert siding repair"
        },
        {
            icon: FaHandshake,
            title: "Affordable Siding Repair",
            description: "We provide cost-effective siding repair services that restore your home's protection without breaking the bank.",
            keywordPhrase: "affordable siding repair"
        },
    ],
    'siding-replacement': [
        {
            icon: FaHome,
            title: "Complete Siding Replacement",
            description: "Our siding replacement experts handle every aspect of your siding replacement project from planning to final installation.",
            keywordPhrase: "complete siding replacement"
        },
        {
            icon: FaAward,
            title: "Premium Siding Replacement Materials",
            description: "Choose from the finest siding replacement materials including vinyl, fiber cement, and engineered wood options.",
            keywordPhrase: "premium siding replacement"
        },
        {
            icon: FaStar,
            title: "Siding Replacement Value",
            description: "Our siding replacement services increase your home's value, energy efficiency, and curb appeal significantly.",
            keywordPhrase: "siding replacement value"
        },
    ],
    'board-and-batten-siding': [
        {
            icon: FaTools,
            title: "Board and Batten Siding Specialists",
            description: "Our board and batten siding experts specialize in traditional and modern board and batten installation for authentic farmhouse charm.",
            keywordPhrase: "board and batten siding specialists"
        },
        {
            icon: FaHome,
            title: "Custom Board and Batten Designs",
            description: "From wide boards to narrow battens, we create custom board and batten siding patterns that enhance your home's architectural character.",
            keywordPhrase: "custom board and batten"
        },
        {
            icon: FaShieldAlt,
            title: "Durable Board and Batten Installation",
            description: "Our board and batten siding installation ensures proper spacing, weather protection, and long-lasting beauty for your home.",
            keywordPhrase: "board and batten installation"
        },
    ],
    'vertical-siding': [
        {
            icon: FaLightbulb,
            title: "Vertical Siding Design Expertise",
            description: "Our vertical siding specialists understand the unique design considerations and installation requirements for stunning vertical siding.",
            keywordPhrase: "vertical siding expertise"
        },
        {
            icon: FaTools,
            title: "Precision Vertical Siding Installation",
            description: "We ensure proper water management and structural integrity in every vertical siding installation project.",
            keywordPhrase: "vertical siding installation"
        },
        {
            icon: FaStar,
            title: "Modern Vertical Siding Styles",
            description: "From board and batten to contemporary metal, we install all types of vertical siding for maximum architectural impact.",
            keywordPhrase: "modern vertical siding"
        },
    ],
    general: [
        {
            icon: FaHandshake,
            title: "Integrity",
            description: "We believe in doing what's right, every time. Honesty and transparency are at the heart of our work.",
            keywordPhrase: "honest contractors"
        },
        {
            icon: FaAward,
            title: "Excellence",
            description: "Quality craftsmanship and attention to detail define every project we undertake.",
            keywordPhrase: "quality craftsmanship"
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "We leverage the latest technology to deliver energy-efficient and sustainable solutions.",
            keywordPhrase: "innovative solutions"
        },
    ],
    'window-repair': [
        {
            icon: FaTools,
            title: "Expert Window Repair Specialists",
            description: "Our window repair experts quickly diagnose and fix broken glass, damaged frames, seal failures, and hardware issues with precision and care.",
            keywordPhrase: "expert window repair"
        },
        {
            icon: FaClock,
            title: "Fast Window Repair Response",
            description: "When you need window repair services, we provide rapid response times to restore security and prevent further damage to your home.",
            keywordPhrase: "fast window repair"
        },
        {
            icon: FaShieldAlt,
            title: "Reliable Window Repair Solutions",
            description: "Our window repair services are backed by warranties and use quality materials for long-lasting repairs that restore function and efficiency.",
            keywordPhrase: "reliable window repair"
        },
    ],
    'window-replacement': [
        {
            icon: FaHome,
            title: "Expert Window Replacement Contractors",
            description: "Our window replacement specialists provide professional installation of energy-efficient windows with precise fitting and superior craftsmanship.",
            keywordPhrase: "expert window replacement"
        },
        {
            icon: FaAward,
            title: "Quality Window Replacement Materials",
            description: "We install premium vinyl, fiberglass, and wood windows from leading manufacturers with comprehensive warranties for lasting performance.",
            keywordPhrase: "quality window replacement"
        },
        {
            icon: FaStar,
            title: "Complete Window Replacement Service",
            description: "Our window replacement process includes consultation, professional installation, cleanup, and warranties for a hassle-free experience.",
            keywordPhrase: "complete window replacement"
        },
    ],

    'window-installation': [
        {
            icon: FaTools,
            title: "Certified Window Installation Contractors",
            description: "Our certified window installation specialists provide professional installation with precision fitting, proper weatherproofing, and building code compliance.",
            keywordPhrase: "certified window installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Window Installation Materials",
            description: "We use professional-grade flashing, sealants, and fasteners for window installation that ensures lasting performance and energy efficiency.",
            keywordPhrase: "quality window installation"
        },
        {
            icon: FaClock,
            title: "Efficient Window Installation Process",
            description: "Our systematic window installation process minimizes disruption while ensuring precise installation and optimal window performance.",
            keywordPhrase: "efficient window installation"
        },
    ],

};

export default function WhyParagon({
    title,
    subTitle = "At Paragon Exterior, our values guide everything we do. Here's what sets us apart:",
    service = 'general',
    customReasons,
    className = "",
    titleAs = "h2"
}: WhyParagonProps) {

    // Use custom reasons if provided, otherwise use service-specific reasons
    const reasons = customReasons || serviceReasons[service] || serviceReasons.general;

    return (
        <section className={`mt-24 bg-gray-50 p-10 mx-auto w-5/6 rounded-md ${className}`}>
            {/* SEO-optimized header */}
            <HeaderText
                variant='default'
                as={titleAs}
                className="text-center mx-auto max-w-4xl font-semibold tracking-tight text-primaryblue"
            >
                {title}
            </HeaderText>

            <SecondaryText className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
                {subTitle}
            </SecondaryText>

            {/* Reasons grid with enhanced SEO structure */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason, index) => (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                        {/* Icon container with hover effects */}
                        <div className="flex justify-center items-center bg-amber-100 group-hover:bg-amber-200 rounded-full w-16 h-16 mx-auto transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                            <reason.icon className="h-8 w-8 text-amber-500 group-hover:text-amber-600 transition-colors duration-300" />
                        </div>

                        {/* SEO-optimized title with schema markup considerations */}
                        <HeaderText
                            variant="small"
                            as="h3"
                            className="mt-4 text-xl font-bold text-primaryblue group-hover:text-blue-700 transition-colors duration-300"
                        >
                            {reason.title}
                        </HeaderText>

                        {/* Enhanced description with keyword integration */}
                        <SecondaryText className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                            {reason.description}
                        </SecondaryText>

                        {/* Hidden keyword phrase for SEO (screen reader accessible) */}
                        {reason.keywordPhrase && (
                            <span className="sr-only">
                                {reason.keywordPhrase}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
                    <div className="flex items-center space-x-2">
                        <FaShieldAlt className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaAward className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">Quality Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUsers className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">Local Experts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaStar className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">5-Star Service</span>
                    </div>
                </div>
            </div>

            {/* Structured data script for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Paragon Exterior",
                        "description": `Professional ${service.replace('-', ' ')} services with ${reasons.map(r => r.keywordPhrase).filter(Boolean).join(', ')}.`,
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": `${service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ')} Services`,
                            "itemListElement": reasons.map((reason, index) => ({
                                "@type": "Offer",
                                "name": reason.title,
                                "description": reason.description,
                                "position": index + 1
                            }))
                        }
                    })
                }}
            />
        </section>
    )
}

// Export service-specific factory functions for easy use
export const WhyParagonRoofRepair = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="roof-repair" />;

export const WhyParagonRoofReplacement = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="roof-replacement" />;

export const WhyParagonVeluxSkylights = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="velux-skylights" />;

export const WhyParagonFlatRoofing = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="flat-roofing" />;

export const WhyParagonRoofLeakRepair = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="roof-leak-repair" />;

export const WhyParagonEmergencyRoofRepair = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="emergency-roof-repair" />;

export const WhyParagonRoofing = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="roofing" />;

export const WhyParagonSiding = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="siding" />;

export const WhyParagonSidingInstallation = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="siding-installation" />;

export const WhyParagonSidingRepair = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="siding-repair" />;

export const WhyParagonSidingReplacement = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="siding-replacement" />;

export const WhyParagonBoardAndBattenSiding = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="board-and-batten-siding" />;

export const WhyParagonVerticalSiding = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="vertical-siding" />;

export const WhyParagonWindowRepair = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="window-repair" />;


export const WhyParagonWindowReplacement = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="window-replacement" />;


export const WhyParagonWindowInstallation = (props: Omit<WhyParagonProps, 'service'>) => 
    <WhyParagon {...props} service="window-installation" />;