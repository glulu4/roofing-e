import Image from 'next/image';
import React from 'react';

interface HeroProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function Row({title, description, imageSrc, imageAlt}: HeroProps) {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-40 lg:px-8 ">
            {/* Flex container for desktop row, mobile column */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-12 justify-center gap-10">
                {/* Text Section */}
                <div className="max-w-2xl text-center lg:text-left lg:flex-1">
                    <h1 className="text-5xl font-semibold tracking-tight text-primaryGreenDark sm:text-7xl">
                        {title}
                    </h1>
                    <p className="mt-10 text-xl font-semibold text-gray-500 sm:text-xl/8">
                        {description}
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <Image
                        width={500}
                        height={500}
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg object-fill"
                    />
                </div>
            </div>
        </div>
    );
}