'use client'

import Image from "next/image"
import HeaderText from "../HeaderText"
import SecondaryText from "../SecondaryText"



export default function Enrich() {

    return (
        <div >


            <div className="mx-auto w-5/6 flex flex-col md:flex-row lg:flex-row justify-between items-center md:gap-24 lg:gap-28">
                <div className="flex-[0.45]">
                    <div className="relative z-10 pt-7 lg:w-full lg:max-w-2xl">
                        <div className="relative px-6 pt-12 pb-24 sm:pt-16 sm:pb-32 lg:px-8 lg:pt-12 lg:pb-32 lg:pr-0 flex flex-col gap-12">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                {/* <HeaderText className="text-pretty text-5xl font-semibold tracking-tight text-primaryblue sm:text-7xl">
                                    High-Quality Roofing Solutions for Lasting Protection
                                </HeaderText>
                                <SecondaryText className="text-gray-600">
                                    Protect your home with durable, reliable roofing solutions designed to withstand the toughest elements. Our expert craftsmanship ensures a seamless finish that boosts your home’s value and curb appeal. Discover why homeowners trust us for quality that lasts.
                                </SecondaryText> */}

                                <HeaderText className="text-pretty text-5xl font-semibold tracking-tight text-primaryblue sm:text-7xl">
                                    Trusted Roofing Company for Repairs & Residential Roofing
                                </HeaderText>

                                <SecondaryText className="text-gray-600">
                                    Looking for expert roof repair near you? Paragon Exterior is one of the top-rated roofing companies delivering high-quality roof repairs, installations, and replacements. Whether you need residential roofing or a trusted roofing contractor for your next project, we provide reliable service built to last — all at competitive prices.
                                </SecondaryText>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[0.55] mx-auto ">
                    <Image
                        alt="roofing companies"
                        width={1000}
                        height={1000}
                        src="/images/r3.png"
                        className="object-cover lg:mb-12 xl:mb-24"
                    />
                </div>
            </div>
        </div>
    )
}

