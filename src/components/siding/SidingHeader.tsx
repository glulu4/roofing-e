import {cn} from '@/lib/utils'
import HeaderText from '../HeaderText'
import SecondaryText from '../SecondaryText'
import Image from 'next/image';

const tiers = [
    {
        name: "Customized Visual Design Previews",
        description: "See how your home will look before work begins. In addition to expert siding, our roofing company offers full exterior transformations with roof repair and residential roofing integration included.",
    },
    {
        name: 'Comprehensive Workmanship Warranty',
        description: "Our licensed roofing contractors and siding teams deliver exceptional quality backed by a workmanship warranty. Whether it's siding or roof repair, Paragon Exterior ensures lasting durability and peace of mind.",
    },
    {
        name: 'Transparent Pricing with No Surprises',
        description: "Our all-inclusive pricing covers everything — from siding materials to roof repairs. No hidden costs, just honest pricing from one of the best roofing companies near you.",
    },
];

export default function SidingHeader() {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <Image
                width={1000}
                height={1000}
                alt="Siding Contractor Hero Background"
                src="/images/siding/siding1.webp"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
            />

            {/* Dark Tint Overlay */}
            <div className="absolute inset-0 -z-10 bg-black bg-opacity-50"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <HeaderText variant="large" className="mt-2 text-neutral-50">
                        Why Choose Our Siding Services?
                    </HeaderText>
                </div>
                <SecondaryText className="mx-auto mt-6 max-w-4xl text-pretty text-center text-neutral-50">
                    Discover the features that set us apart and ensure your siding project exceeds expectations.
                </SecondaryText>

                <div className="isolate mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tierIdx}
                            className={cn(
                                tierIdx === 1 ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <HeaderText>
                                        {tier.name}
                                    </HeaderText>
                                </div>
                                <SecondaryText className="text-gray-600">{tier.description}</SecondaryText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
