
import React from 'react';
import Image from "next/image";
import HeaderText from "../HeaderText";
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Roof Repair',
        href: '/roofing/roof-repair',
        description: 'Professional roof repair services for storm damage, missing shingles, leaks, and flashing issues. Licensed roofers serving PA, NJ, and DE with fast, reliable repairs.',
        imageUrl: '/images/roof-service/roof-repair/roof-repair4.jpg',
    },
    {
        id: 2,
        title: 'Roof Replacement',
        href: '/roofing/roof-replacement',
        description: 'Complete roof replacement services using premium asphalt shingles, metal roofing, and architectural materials. Expert installation with warranties for lasting protection.',
        imageUrl: '/images/roof-service/roof-replacement/roof-replacement.avif',
    },
    {
        id: 3,
        title: 'Velux Skylights',
        href: '/roofing/velux-skylights',
        description: 'Professional Velux skylight installation and repair services. Add natural light and ventilation to your home with energy-efficient, leak-proof skylight solutions.',
        imageUrl: '/images/roof-service/skylight/skylight.jpg',
    },
    {
        id: 4,
        title: 'Flat Roofing',
        href: '/roofing/flat-roofing',
        description: 'Specialized flat roof installation, repair, and maintenance using EPDM, TPO, and modified bitumen systems. Commercial and residential flat roofing experts.',
        imageUrl: '/images/roof-service/flat-roofing/flat-roof.jpg',
    },
    {
        id: 5,
        title: 'Roof Leak Repair',
        href: '/roofing/roof-leak-repair',
        description: 'Fast roof leak detection and repair services. Stop water damage with expert leak repairs for all roof types. Emergency leak repair available 24/7 in PA, NJ, DE.',
        imageUrl: '/images/roof-service/roof-leak/roof-leak.jpg',
    },
    {
        id: 6,
        title: 'Emergency Roof Repair',
        href: '/roofing/emergency-roof-repair',
        description: '24/7 emergency roof repair services for storm damage, active leaks, and urgent roofing needs. Immediate response with tarping and permanent repairs across PA, NJ, DE.',
        imageUrl: '/images/roof-service/emergency-roofing/roof-damage.jpg',
    },
  ];

export default function RoofingServices() {
    return (
        <div className="mb-12">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <article

                            key={service.id}
                            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                        >
                            <Link href={service.href}>
                                <Image
                                    width={500}
                                    height={500}
                                    alt={service.title}
                                    src={service.imageUrl}
                                    className="absolute inset-0 -z-10 size-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />

                                {/* Gradient overlay with hover effect */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 transition-all duration-500 group-hover:from-blue-900/90 group-hover:via-blue-900/30" />

                                {/* Ring effect */}
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 transition-all duration-300 group-hover:ring-blue-400/50 group-hover:ring-2" />

                                {/* Animated glow effect */}
                                <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-all duration-500 group-hover:opacity-20 blur-xl" />

                                {/* Content container with slide-up animation */}
                                <div className="relative z-10 transform transition-all duration-300 group-hover:-translate-y-2">
                                    <HeaderText as="h2" variant="default" className="mt-3 text-lg/6 font-semibold text-white transition-all duration-300 group-hover:text-blue-200">
                                        {/* <a href={service.href}> */}
                                        <span className="absolute inset-0" />
                                        {service.title}
                                        {/* </a> */}
                                    </HeaderText>

                                    {/* Description that slides in on hover */}
                                    <p className="mt-2 text-sm text-gray-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        {service.description}
                                    </p>

                                    {/* Animated arrow */}
                                    <div className="mt-4 flex items-center text-blue-400 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                        <span className="text-sm font-medium">Learn More</span>
                                        <svg className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Shimmer effect */}
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                </div>
                            </Link>

                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}