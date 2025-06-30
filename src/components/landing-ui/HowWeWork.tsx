import React from 'react'
import {
    StarIcon,
    SwatchIcon,
} from '@heroicons/react/20/solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRecycle} from "@fortawesome/free-solid-svg-icons"
import SecondaryText from '../SecondaryText'
import HeaderText from '../HeaderText'

const features = [
    {
        name: 'Roofing Repair',
        description:
            "Our roofing repair services are unmatched. We specialize in expert roof repair for all home types, including tile roof repair. Whether you're dealing with leaks, missing shingles, or storm damage, our roofing company delivers fast, affordable, and reliable solutions.",
        href: '#',
        icon: StarIcon,
    },
    {
        name: 'Residential Roofing',
        description:
            "As the top roofing company in the area, we provide high-quality residential roofing services. From replacements to new installations, trust the best roofing company near you to protect your home with style.",
        href: '#',
        icon: SwatchIcon,
    },
    {
        name: 'Flat Roofing',
        description:
            "Our roofing company also specializes in offers flat roofs, ideal for modern homes and commercial buildings. With expert installation and long-lasting materials, we’re the local roofing company you can rely on.",
        href: '#',
        icon: () => (
            <FontAwesomeIcon icon={faRecycle} size="2x" color="#152d47" />
        ),
    },
]



export default function HowWeWork() {
    return (
        <div>
            <div className="mx-auto w-11/12 px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-primaryblue px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <HeaderText
                                as="h2"
                                className="text-2xl font-bold tracking-tight text-neutral-50"
                            >
                                Customizable Roofing Solutions Near You
                            </HeaderText>

                            <SecondaryText className="mt-4 text-lg text-neutral-50">
                                As one of the best roofing companies in your area, we offer a range of services, including roofing repair, roof replacements, flat roofing, and long-lasting residential roofing solutions tailored to your home.
                            </SecondaryText>

                        </div>

                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                                >
                                    <div className="sm:shrink-0">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                            <feature.icon className="h-8 w-8 text-primaryblue" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <HeaderText
                                            as="h3"
                                            variant="small"
                                            className="text-neutral-50"
                                        >
                                            {feature.name}
                                        </HeaderText>
                                        <SecondaryText className="mt-2 text-neutral-50">
                                            {feature.description}
                                        </SecondaryText>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
