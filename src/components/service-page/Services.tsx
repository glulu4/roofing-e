
import React from 'react';
import Image from "next/image";
import HeaderText from "../HeaderText";
import Link from 'next/link';



interface ServicesGridProps {
    services: {
        id: number;
        title: string;
        href: string;
        description: string;
        imageUrl: string;
    }[];
}

export default function ServicesGrid({
    services
}: ServicesGridProps) {
    return (
        <div className="mb-12">
            <div className="mx-auto sm:w-5/6 px-8">
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
                                    <HeaderText as="h2" variant="default" className="mt-3 font-semibold text-white transition-all duration-300 group-hover:text-blue-200">
                                        {/* <a href={service.href}> */}
                                        <span className="absolute inset-0" />
                                        {service.title}
                                        {/* </a> */}
                                    </HeaderText>

                                    {/* Description that slides in on hover */}
                                    <p className="mt-2 text-sm text-gray-300 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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