import {cn} from '@/lib/utils'
import {CheckIcon} from '@heroicons/react/20/solid'
import HeaderText from '../HeaderText'
import SecondaryText from '../SecondaryText'

// const tiers = [
//     {
//         name: "Complimentary Visual Renderings of Your Home",
//         description: "We offer complimentary exterior design mockup, so you know how your home will look like at the end of the project",
        
//     },
//     {
//         name: '25-Year Warranty on Workmanship',
//         description: "All our crews have at least 7 years of experience, and we audit the quality of every job",
//     },
//     {
//         name: 'Price Match Guarantee. No Hidden Fees',
//         description: 'With us, you have an all-inclusive price. No surprises with waste removal fees or neverending hourly repairs',
//     },
// ]


// export default function SidingHeader() {
//     return (
//         <div className="relative isolate overflow-hidden py-24 sm:py-32">


//             <img
//                 alt="Paragon Exterior"
//                 src="/images/siding/siding1.jpeg"
//                 className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
//             />

//             {/* Dark Tint Overlay - Moved right after background image with lower z-index */}
//             <div className="absolute inset-0 -z-10 bg-black bg-opacity-50"></div>
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="mx-auto max-w-4xl text-center">
//                     <HeaderText variant="large" className="mt-2 text-neutral-50">
//                         Pricing that grows with you
//                     </HeaderText>
//                 </div>
//                 <SecondaryText className="mx-auto mt-6 max-w-4xl text-pretty text-center text-neutral-50">
//                     Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
//                     loyalty, and driving sales.
//                 </SecondaryText>
//                 <div className="isolate mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//                     {tiers.map((tier, tierIdx) => (
//                         <div
//                             key={tierIdx}
//                             className={cn(
//                                 tierIdx === 1 ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
//                                 tierIdx === 0 ? 'lg:rounded-r-none' : '',
//                                 tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
//                                 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
//                             )}
//                         >
//                             <div>
//                                 <div className="flex items-center justify-between gap-x-4">
//                                     <HeaderText >
//                                         {tier.name}

//                                     </HeaderText>
                                 

//                                 </div>
//                                 <SecondaryText className=" text-gray-600">{tier.description}</SecondaryText>


//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
const tiers = [
    {
        name: "Customized Visual Design Previews",
        description: "Get a personalized exterior design rendering to visualize the transformation of your home before the project begins.",
    },
    {
        name: 'Comprehensive Workmanship Warranty',
        description: "Our highly skilled crews deliver exceptional quality, and we stand behind our work with a warranty that ensures peace of mind for years to come.",
    },
    {
        name: 'Transparent Pricing with No Surprises',
        description: "Our all-inclusive pricing means no hidden costs, with waste removal and repairs included upfront.",
    },
];

export default function SidingHeader() {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <img
                alt="Paragon Exterior"
                src="/images/siding/siding1.jpeg"
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
