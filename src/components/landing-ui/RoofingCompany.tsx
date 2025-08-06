'use client'

import Image from "next/image"
import HeaderText from "../HeaderText"
import SecondaryText from "../SecondaryText"

export default function RoofingCompany() {

    return (
        <div className="relative isolate">

            <div
                aria-hidden="true"
                className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                    }}
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#80bdff] to-[#040d85] opacity-30"
                />
            </div>
            <div className="overflow-hidden">
                <div className="mx-auto w-5/6 pb-28 pt-28 sm:pt-52 lg:px-8 lg:pt-24">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:gap-x-44">

                        <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl flex flex-col gap-12">
                            <HeaderText as="h1" className="text-pretty font-semibold tracking-tight text-primaryblue">
                                Paragon Exterior is the Best Roofing Company in Greater Philadelphia
                            </HeaderText>
                            <SecondaryText>
                                At Paragon Exterior, we deliver reliable,
                                high-quality roofing and siding services
                                for homeowners across Pennsylvania, New Jersey, and Delaware.
                                We know how important your home is, and we treat it with the care and respect it deserves.
                                From full roof replacements, using premium GAF shingles, to precision siding installations,
                                we combine expert craftsmanship with fair pricing.
                                Located in Feasterville-Trevose, we proudly serve a 50-mile radius from zip code 19053 with certified crews and exceptional service.
                                <br />


                                Looking for the best roofing company near you? We&apos;re committed to quality, affordability, and customer satisfaction — building roofs that last and relationships that matter.
                            </SecondaryText>


                        </div>
                        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="roofing and siding company"
                                        src="/images/roof-tiles.jpeg"
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                            </div>
                            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="roofing and siding company"
                                        src="/images/house2.webp"
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="roofing and siding company"
                                        src="/images/house1.jpeg"
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                            </div>
                            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="roofing and siding company"
                                        src="/images/house5.jpeg"
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <Image
                                        width={200}
                                        height={200}
                                        alt="roofing and siding company"
                                        src="/images/house4.jpeg"
                                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
