"use client"

import {

    ArrowUpRightIcon,

} from '@heroicons/react/24/outline';
import HeaderText from '../HeaderText';
import Image from 'next/image';
import Link from 'next/link';

// 🔥 TypeScript Types
interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    image: string;
    slug: string; // for routing to detail pages
}
const serviceData = [
    {
        id: "01",
        title: "Roofing Services",
        description: "Explore our range of roofing services, including roof repair, roof installation, roof leak repair, and roof replacement – tailored to enhance your home's protection and aesthetics.",
        image: "/images/home/roof-service.webp",
        slug: "/roofing"
    },
    {
        id: "02",
        title: "Siding Services",
        description: "Learn more about our siding services, including siding installation, siding repair, and vertical siding",
        image: "/images/home/siding-service.webp",
        slug: "siding"
    },
    {
        id: "03",
        title: "Windows",
        description: "Upgrade your home's energy efficiency and curb appeal with our window services, including window installation, window replacement, and window repair.",
        image: "/images/home/window-card.webp",
        slug: "/windows"
    },
    {
        id: "04",
        title: "Gutter Services",
        description: "Upgrade your home's drainage with our gutter services, including gutter installation, gutter cleaning, and gutter repair.",
        image: "/images/home/gutter-card.webp",
        slug: "gutters"
    },
    {
        id: "05",
        title: "Commercial Services",
        description: "Large-scale roofing solutions, such as flat roof repair, commerical roof repair, and commerical roof replacement. Our work is designed for durability and weather resistance for commercial properties",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        slug: "/commercial-roofing"
    }

    // {
    //     id: "04",
    //     title: "Windows",
    //     description: "Upgrade your home's drainage with our gutter services, including gutter installation, gutter cleaning, and gutter repair.",
    //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    //     slug: "gutters"
    // },
    // {
    //     id: "05",
    //     title: "Chimneys",
    //     description: "Upgrade your home's drainage with our gutter services, including gutter installation, gutter cleaning, and gutter repair.",
    //     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    //     slug: "gutters"
    // },
    // {
    //     id: "06",
    //     title: "Commercial Services",
    //     description: "Large-scale roofing solutions, such as flat roof repair, commerical roof repair, and commerical roof replacement. Our work is designed for durability and weather resistance for commercial properties",
    //     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    //     slug: "commercial"
    // }
] as const satisfies readonly ServiceCategory[];

// 🚀 Extract types from the data
type Service = typeof serviceData[number];
type ServiceId = Service['id'];
type ServiceSlug = Service['slug'];

// 🎯 Props interface for ServiceCard
interface ServiceCardProps {
    service: ServiceCategory;
    index: number;
    totalItems: number;
}

// 🔥 Individual Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({
    service,
    index,
    totalItems,
}) => {
    return (
        <>
            <Link className="flex flex-col lg:flex-row lg:items-center lg:justify-between group py-16 hover:bg-slate-100 p-5 rounded-xl transition-all duration-200 cursor-pointer"
                href={`${service.slug}`}>

                {/* Left side - Number and Image */}
                <div className="flex flex-col sm:flex-row sm:items-center lg:flex-row lg:items-center lg:flex-1 sm:gap-10">
                    <HeaderText
                        variant='large'
                        as="div"
                        className="font-bold text-primaryblue mb-4 sm:mb-0 sm:mr-8 lg:mr-12"
                    >
                        {service.id}
                    </HeaderText>

                    <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 lg:mb-0 group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                            loading='lazy'
                            width={224}
                            height={224}
                            src={service.image}
                            alt={service.title}
                            className="w-full sm:w-48 lg:w-56 h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                            // priority={index < 2} // Optimize loading for first 2 images
                        />
                    </div>
                </div>

                {/* Right side - Content and Arrow */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:ml-12">
                    <div className="lg:max-w-md">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primaryblue transition-colors duration-200">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button className="w-14 h-14 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-lg hover:shadow-xl">
                            <ArrowUpRightIcon className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </Link>

            {/* Divider */}
            {index < totalItems - 1 && (
                <div className="border-b border-gray-200 my-6" />
            )}
        </>
    );
};


// 🚀 Main Component
const RoofingServices = () => {
    // const handleServiceClick = (slug: string) => {


    // };

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
                    <div className="lg:max-w-2xl">
                        <div className="w-16 h-1 bg-amber-500 mb-6" />
                        <HeaderText className="text-4xl lg:text-5xl font-bold text-primaryblue leading-tight">
                            Residential and Commercial<br />
                            Roofing, Siding, and Exterior Services
                        </HeaderText>
                    </div>
                    <div className="mt-8 lg:max-w-md">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Experience Top-Tier Roofing, Siding, and Exterior Services, Designed to Withstand the Elements While Elevating Your Property&apos;s Aesthetic and Value.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-16">


                    <div className="flex flex-col space-y-4">
                        {serviceData.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                index={index}
                                totalItems={serviceData.length}
                            // onServiceClick={handleServiceClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoofingServices;

// 🔥 Export types for use in other components
export type {
    ServiceCategory,

    Service,
    ServiceId,
    ServiceSlug,
};