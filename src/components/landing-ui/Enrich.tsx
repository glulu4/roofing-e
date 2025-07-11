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

                                <HeaderText className="text-pretty font-semibold tracking-tight text-primaryblue ">
                                    Why Homeowners Choose Paragon Exterior as Their Trusted Roofing and Siding Company
                                </HeaderText>

                                <SecondaryText className="text-gray-600">
                                    Paragon Exterior isn&apos;t just another roofing company — 
                                    we&apos;re your neighbors, your problem solvers, and your go-to team for peace of mind when it matters most. 
                                    Our commitment to quality, reliability, and customer satisfaction has made us one of the most trusted roofing and siding contractors in the PA, NJ, and DE regions. 
                                    Whether you&apos;re dealing with an urgent roof repair, siding replacement, or planning a full roof replacement, 
                                    our team delivers top-tier craftsmanship, clear communication, and competitive pricing every time.
                                    We understand that your home is your sanctuary, and we treat it with the care and respect it deserves.
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

