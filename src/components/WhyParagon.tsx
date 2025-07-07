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

    'casement-windows': [
        {
            icon: FaHome,
            title: "Casement Window Specialists",
            description: "Our team expertly installs and services casement windows across Pennsylvania, New Jersey, and Delaware. We understand side-hinged hardware and weatherproofing requirements to ensure smooth operation and tight seals.",
            keywordPhrase: "casement windows"
        },
        {
            icon: FaTools,
            title: "Expert Casement Installation",
            description: "Precise casement window installation is crucial for full ventilation and easy operation. We ensure frames are plumb, hardware properly aligned, and energy-efficient glazing optimized for local climates.",
            keywordPhrase: "professional casement installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Casement Performance",
            description: "With quality casement windows installed by Paragon Exterior, homeowners enjoy long-term performance, energy efficiency, and unobstructed views. Our meticulous workmanship ensures lasting reliability.",
            keywordPhrase: "quality casement windows"
        },
    ],

    'double-hung-windows': [
        {
            icon: FaHome,
            title: "Double Hung Window Specialists",
            description: "We work with traditional double hung window systems in historic and modern homes throughout PA, NJ, and DE. Our experts address balance systems and sash fit for smooth operation.",
            keywordPhrase: "double hung windows"
        },
        {
            icon: FaTools,
            title: "Expert Double Hung Installation",
            description: "Professional double hung installation prevents air leaks around moving sashes and allows for easy tilt-in cleaning. Proper counterweights and weatherstripping ensure lasting performance.",
            keywordPhrase: "professional double hung installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Double Hung Performance",
            description: "Quality double hung windows installed by our team provide classic style with modern efficiency. We focus on durable components that hold up to daily use and seasonal weather.",
            keywordPhrase: "quality double hung windows"
        },
    ],

    'awning-windows': [
        {
            icon: FaHome,
            title: "Awning Window Specialists",
            description: "Awning windows require careful top-hinge alignment and weatherproofing. Our installers handle awning windows in bathrooms, basements, and hard-to-reach areas across Greater Philadelphia.",
            keywordPhrase: "awning windows"
        },
        {
            icon: FaTools,
            title: "Expert Awning Installation",
            description: "Professional awning window installation ensures smooth crank operation and tight seals that keep rain out even when open. We pay attention to hardware durability and framing.",
            keywordPhrase: "professional awning installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Awning Performance",
            description: "Quality awning windows from Paragon Exterior provide ventilation and privacy with minimal maintenance. Our expertise results in long-term performance and energy savings.",
            keywordPhrase: "quality awning windows"
        },
    ],

    'glider-windows': [
        {
            icon: FaHome,
            title: "Glider Window Specialists",
            description: "Glider windows slide horizontally on tracks that must be level and debris-free. We install glider windows with precise track alignment for homes across PA, NJ, and DE.",
            keywordPhrase: "glider windows"
        },
        {
            icon: FaTools,
            title: "Expert Glider Installation",
            description: "Professional glider window installation ensures effortless operation and prevents drafts. We focus on smooth rollers, secure locking mechanisms, and proper weatherstripping.",
            keywordPhrase: "professional glider installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Glider Performance",
            description: "Quality glider windows add modern style and easy functionality. With Paragon Exterior's skilled installation, you enjoy reliable performance and large viewing areas.",
            keywordPhrase: "quality glider windows"
        },
    ],

    'bay-windows': [
        {
            icon: FaHome,
            title: "Bay Window Specialists",
            description: "Bay window projects require structural insight and precise framing. Our specialists create beautiful bay window assemblies that add space and light to homes in Pennsylvania, New Jersey, and Delaware.",
            keywordPhrase: "bay windows"
        },
        {
            icon: FaTools,
            title: "Expert Bay Installation",
            description: "Expert bay window installation ensures proper support, airtight connections, and weatherproofing across multiple angles. We coordinate trim and roofing details for a seamless look.",
            keywordPhrase: "professional bay installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Bay Performance",
            description: "Quality bay windows installed by Paragon Exterior provide panoramic views and expanded interiors for decades. Our focus on engineering and craftsmanship delivers lasting value.",
            keywordPhrase: "quality bay windows"
        },
    ],

    'bow-windows': [
        {
            icon: FaHome,
            title: "Bow Window Specialists",
            description: "Bow windows curve gracefully outward, demanding careful custom framing and support. Our team designs and installs bow windows across the tri-state area with meticulous attention to detail.",
            keywordPhrase: "bow windows"
        },
        {
            icon: FaTools,
            title: "Expert Bow Installation",
            description: "Professional bow window installation requires precise alignment of multiple units to create a smooth curve and reliable performance. We handle the structural engineering and waterproofing.",
            keywordPhrase: "professional bow installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Bow Performance",
            description: "Quality bow windows from Paragon Exterior offer elegant aesthetics and expansive views. Our expert installation ensures durable performance and minimal maintenance.",
            keywordPhrase: "quality bow windows"
        },
    ],

    'picture-windows': [
        {
            icon: FaHome,
            title: "Picture Window Specialists",
            description: "Picture windows are fixed units that showcase uninterrupted views. We install energy-efficient picture windows across PA, NJ, and DE with expert sealing and framing.",
            keywordPhrase: "picture windows"
        },
        {
            icon: FaTools,
            title: "Expert Picture Installation",
            description: "Proper picture window installation maximizes thermal efficiency and prevents water infiltration. We use advanced glazing and airtight construction for lasting performance.",
            keywordPhrase: "professional picture installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Picture Performance",
            description: "Quality picture windows installed by Paragon Exterior deliver scenic views and energy savings with minimal upkeep. Our craftsmanship ensures your investment lasts.",
            keywordPhrase: "quality picture windows"
        },
    ],

    'round-top-windows': [
        {
            icon: FaHome,
            title: "Round Top Window Specialists",
            description: "Round top windows add architectural interest and require precise arched framing. Our specialists craft custom round top solutions for homes throughout Pennsylvania, New Jersey, and Delaware.",
            keywordPhrase: "round top windows"
        },
        {
            icon: FaTools,
            title: "Expert Round Top Installation",
            description: "Professional round top window installation ensures curved units fit perfectly and maintain structural integrity. We carefully seal and secure each arch for reliable performance.",
            keywordPhrase: "professional round top installation"
        },
        {
            icon: FaShieldAlt,
            title: "Quality Round Top Performance",
            description: "Quality round top windows from Paragon Exterior elevate curb appeal and preserve historical charm. Our expert installation guarantees longevity and energy efficiency.",
            keywordPhrase: "quality round top windows"
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

export const WhyParagonCasementWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="casement-windows" />;

export const WhyParagonDoubleHungWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="double-hung-windows" />;

export const WhyParagonAwningWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="awning-windows" />;

export const WhyParagonGliderWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="glider-windows" />;

export const WhyParagonBayWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="bay-windows" />;

export const WhyParagonBowWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="bow-windows" />;

export const WhyParagonPictureWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="picture-windows" />;

export const WhyParagonRoundTopWindows = (props: Omit<WhyParagonProps, 'service'>) =>
    <WhyParagon {...props} service="round-top-windows" />;
