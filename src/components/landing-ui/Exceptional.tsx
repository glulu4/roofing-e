

import {HomeIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon, SunIcon, WrenchScrewdriverIcon} from '@heroicons/react/20/solid'
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';
import Image from 'next/image';

// const cards = [
//     {
//         name: 'Custom Roof Installations',
//         description:
//             'Looking for a roofing company that understands style and performance? We install asphalt shingles, metal roofs, clay tiles, and flat roofing systems tailored to your home’s design and needs.',
//         icon: HomeIcon,
//     },
//     {
//         name: 'Solar Roof Solutions',
//         description:
//             'Go green with our solar roofing options. As trusted residential roofing contractors, we help you save on energy bills while increasing your home’s value with state-of-the-art roof technology.',
//         icon: SunIcon,
//     },
//     {
//         name: 'Repairs & Maintenance',
//         description:
//             'Need roof repair near you? Our expert roofing contractors handle everything from minor leaks to storm damage. Prevent costly issues with proactive maintenance you can count on.',
//         icon: WrenchScrewdriverIcon,
//     },
// ]
const cards = [
    {
        name: 'Clear Communication',
        description:
            'From your first estimate to final inspection, we keep you informed every step of the way. No surprises, just honest updates and easy scheduling.',
        icon: PhoneIcon,
    },
    {
        name: 'Top-Quality Craftsmanship',
        description:
            'Every project is handled by skilled roofing professionals using durable, high-performance materials. We don’t just build roofs—we build confidence.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Respect for Your Property',
        description:
            'We treat your home like it’s our own. That means clean job sites, careful prep and protection, and a team that shows up on time, ready to work.',
        icon: NewspaperIcon,
    },
];



export default function Exceptional() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* Background Image */}
            <Image
                width={1000}
                height={1000}
                alt="roofing company"
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
                            What to expect from Paragon Exterior
                        </HeaderText>
                        <SecondaryText className='text-neutral-50'>
                            We know inviting a roofing crew to your home is a big decision. That&apos;s why at Paragon Exterior, you can expect professionalism from start to finish—clear communication, dependable craftsmanship, and a crew that respects your time and property. From small repairs to full replacements, we make the process smooth and stress-free.
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