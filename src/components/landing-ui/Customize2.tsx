// import {LifebuoyIcon, NewspaperIcon, PhoneIcon} from '@heroicons/react/20/solid'

// const cards = [
//     {
//         name: 'Sales',
//         description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
//         icon: PhoneIcon,
//     },
//     {
//         name: 'Technical Support',
//         description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
//         icon: LifebuoyIcon,
//     },
//     {
//         name: 'Media Inquiries',
//         description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
//         icon: NewspaperIcon,
//     },
// ]

// export default function Customize2() {
//     return (
//         <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
//             <img
//                 alt=""
//                 src="/images/quality-roof-image.jpg"
//                 className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
//             />
//             <div className="absolute inset-0 -z-5 bg-black bg-opacity-50"></div>
//             <div className=" hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
//                 <div
//                     style={{
//                         clipPath:
//                             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                     }}
//                     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//                 />
//             </div>
//             <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
//                 <div
//                     style={{
//                         clipPath:
//                             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                     }}
//                     className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//                 />
//             </div>
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl lg:mx-0">
//                     <h2 className="text-5xl font-semibold tracking-tight text-neutral-50 sm:text-7xl">Support center</h2>
//                     <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
//                         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                         fugiat veniam occaecat fugiat.
//                     </p>
//                 </div>
//                 <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
//                     {cards.map((card) => (
//                         <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
//                             <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
//                             <div className="text-base/7">
//                                 <h3 className="font-semibold text-neutral-50">{card.name}</h3>
//                                 <p className="mt-2 text-gray-300">{card.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

import {HomeIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon, SunIcon, WrenchScrewdriverIcon} from '@heroicons/react/20/solid'
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';

const cards = [
    {
        name: 'Custom Roof Installations',
        description: 'Choose from a variety of roofing types, including asphalt shingles, metal roofing, clay tiles, and flat roofs. We’ll help you find the perfect fit for your style, budget, and climate needs.',
        icon: HomeIcon,
    },
    {
        name: 'Solar Roof Solutions',
        description: 'Embrace the future of energy with solar-integrated roofing systems. Lower your energy bills and increase your home’s value with sustainable, state-of-the-art technology.',
        icon: SunIcon,
    },
    {
        name: 'Repairs & Maintenance',
        description: 'Keep your roof in peak condition with our expert repair and maintenance services. From fixing leaks to restoring storm-damaged roofs, we’ve got you covered.',
        icon: WrenchScrewdriverIcon,
    },
]

export default function Customize2() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Background Image */}
            <img
                alt=""
                src="/images/quality-roof-image.jpg"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
            />

            {/* Dark Tint Overlay - Moved right after background image with lower z-index */}
            <div className="absolute inset-0 -z-10 bg-black bg-opacity-75"></div>

            {/* Decorative Gradients */}
            <div className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#80bdff] to-[#040d85] opacity-30"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-auto max-w-2xl text-center">
                        <HeaderText className="text-neutral-50">
                            Roofing Excellence Backed by Exceptional Support
                        </HeaderText>
                        <SecondaryText className='text-neutral-50'>
                            From traditional shingles to modern solar roofing systems, we provide durable and energy-efficient solutions for every home. Our expert team ensures superior craftsmanship and unmatched customer service to protect what matters most.
                        </SecondaryText>
                    </div>
                </div>


                {/* Cards Section */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon aria-hidden="true" className="h-7 w-7 flex-none text-amber-200" />
                            <div className="text-base">
                                <h3 className="font-semibold text-neutral-50">{card.name}</h3>
                                <p className="mt-2 text-gray-300">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}