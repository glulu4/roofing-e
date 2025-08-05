import React from 'react'
import {
    ShieldCheckIcon,
    CogIcon,
    SunIcon,
} from '@heroicons/react/20/solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCertificate} from "@fortawesome/free-solid-svg-icons"
import SecondaryText from '../SecondaryText'
import HeaderText from '../HeaderText'
import {HardHatIcon, HomeIcon} from 'lucide-react'

const features = [
    {
        name: 'Complete Roofing System',
        description:
            "GAF systems go beyond shingles. We install a fully integrated roofing system that includes leak barriers, roof deck protection, starter shingles, and ridge caps—engineered to work together for maximum performance.",
        icon: HomeIcon,
    },
    {
        name: 'Industry-Leading Warranties',
        description:
            "As GAF-certified installers, we can offer exclusive warranties like the System Plus and Golden Pledge®—providing up to 50 years of coverage on materials and up to 25 years on workmanship.",
        // icon: () => (
        //     <FontAwesomeIcon icon={faCertificate} size="2x" color="#152d47" />
        // ),
        icon: HardHatIcon,
    },
    {
        name: 'Advanced Shingle Technology',
        description:
            "We install Timberline® HDZ shingles with LayerLock™ technology and StainGuard® protection. These architectural shingles offer superior durability, wind resistance, and curb appeal for your home.",
        icon: ShieldCheckIcon,
    },
]

export default function GAFRoofSystem() {
    return (
        <div className="rounded-2xl sm:p-16 mx-auto w-full sm:w-10/12 px-12 py-24 sm:px-6 lg:px-8">
            <div className="">
                <div className="text-center flex flex-col justify-center items-center py-12">
                    <HeaderText
                        as="h2"
                        className="text-2xl font-bold  text-primaryblue"
                    >
                        We Install Complete GAF Roofing Systems
                    </HeaderText>

                    <SecondaryText className="py-6 text-lg ">
                        Paragon Exterior is proud to be a GAF-certified roofing contractor. That means every roof we install is built using GAF’s high-performance components for unmatched protection, beauty, and long-term value.
                        From advanced leak barriers and starter shingles to ridge caps and attic ventilation, we follow GAF’s
                        full system approach—not just shingle installation. This ensures your roof performs as a cohesive unit,
                        backed by industry-leading warranties and engineered to withstand the extreme weather common in Pennsylvania,
                        New Jersey, and Delaware. When you choose Paragon, you&apos;re choosing quality, reliability,
                        and the peace of mind that only a factory-certified GAF system can provide.
                    </SecondaryText>
                </div>

                <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="text-center sm:flex sm:text-left lg:block lg:text-center"
                        >
                            <div className="sm:shrink-0">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primaryblue">
                                    <feature.icon className="h-8 w-8 text-amber-500" />
                                </div>
                            </div>
                            <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                <HeaderText
                                    as="h3"
                                    variant="small"
                                    className=""
                                >
                                    {feature.name}
                                </HeaderText>
                                <SecondaryText className="mt-2 ">
                                    {feature.description}
                                </SecondaryText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
