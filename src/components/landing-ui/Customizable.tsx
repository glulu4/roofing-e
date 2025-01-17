
import React, {useEffect} from 'react'
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
        name: 'Color Selection',
        description:
            'Choose from a wide range of colors to match your home\'s style and enhance its curb appeal.',
        href: '#',
        icon: StarIcon,
    },
    {
        name: 'Roof Styles',
        description:
            'We offer a variety of roof styles, from traditional to modern, to complement your architectural design.',
        href: '#',
        icon: SwatchIcon,
    },
    {
        name: 'Material Options',
        description:
            'We work with various roofing materials, including asphalt shingles, metal roofing, and tile, to meet your specific needs.',
        href: '#',
        icon: () => <FontAwesomeIcon icon={faRecycle} size="2x" color="#152d47" />,
    },
]

export default function Customizable() {
    // 1. Set up Intersection Observer in a useEffect
    // useEffect(() => {
    //     const targets = document.querySelectorAll('.')

    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 // Add your Tailwind animate class
    //                 entry.target.classList.add('')
    //                 // Stop observing once it’s visible
    //                 observer.unobserve(entry.target)
    //             }
    //         })
    //     }, {
    //         // Optional: how much of the element must be in view before triggering
    //         threshold: 0.1
    //     })

    //     targets.forEach(target => observer.observe(target))

    //     // Cleanup
    //     return () => observer.disconnect()
    // }, [])

    return (
        <div>
            <div className="mx-auto w-11/12 px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-primaryblue px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            {/* This header can also fade in immediately or on scroll; 
                  if you want it to fade on scroll, add “ opacity-0” + remove  */}
                            <HeaderText className=" text-2xl font-bold tracking-tight text-neutral-50">
                                Customizable Options to Fit Your Style
                            </HeaderText>

                            <SecondaryText className="mt-4 text-lg text-neutral-50">
                                Design a roof that complements your style, enhances your home, and supports sustainable living.
                            </SecondaryText>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    // Add the  + initial opacity-0
                                    className="
                             text-center sm:flex sm:text-left lg:block lg:text-center"
                                >
                                    <div className="sm:shrink-0">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                            {/* Render your icon */}
                                            <feature.icon className="h-8 w-8 text-primaryblue" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 className="text-lg font-semibold text-neutral-50">
                                            {feature.name}
                                        </h3>
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
