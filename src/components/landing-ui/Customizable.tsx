import {ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, StarIcon, SwatchIcon} from '@heroicons/react/20/solid'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import SecondaryText from '../SecondaryText';
import SecondaryHeader from '../SecondaryHeader';
import HeaderText from '../HeaderText';

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
        icon: () => <FontAwesomeIcon icon={faRecycle} size="2x" color="#152d47" />, // JSX element wrapped in a function
    },
]

export default function Customizable() {
    return (

        <div >
            <div className="mx-auto w-5/6 px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-primaryblue px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <HeaderText className="text-2xl font-bold tracking-tight text-neutral-50">
                                Customizable Options to Fit Your Style
                            </HeaderText>
                            <SecondaryText className="mt-4 text-lg text-neutral-50">
                                Solar energy is an investment in your home, your finances, and the planet. Here’s why going solar is worth it.
                            </SecondaryText>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
                            {features.map((features) => (
                                <div
                                    key={features.name}
                                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                                >
                                    <div className="sm:shrink-0">
                                        <div className="flex items-center justify-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
                                            <features.icon className="h-8 w-8 text-primaryblue" />
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 className="text-lg font-semibold text-neutral-50">{features.name}</h3>
                                        <SecondaryText className="mt-2 text-neutral-50">{features.description}</SecondaryText>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="bg-primaryblue py-32 sm:py-48 md:py-32">
        //     <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        //         <div className="mx-auto max-w-2xl lg:text-center">
        //             {/* <h2 className="text-base/7 font-semibold text-indigo-600">Customize</h2> */}
        //             <HeaderText className='text-neutral-50'>
        //                 Customizable Options to Fit Your Style
        //             </HeaderText>
           
        //         </div>
        //         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none py-14">
        //             <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        //                 {features.map((feature) => (
        //                     <div key={feature.name} className="flex flex-col">
        //                         <SecondaryHeader className=" text-neutral-50"> {/** text-gray-900 */}
        //                             <feature.icon aria-hidden="true" className="size-5 flex-none text-amber-200" />
        //                             {feature.name}
        //                         </SecondaryHeader>
        //                         <dd className="mt-4 flex flex-auto flex-col text-lg/7 text-neutral-50">
        //                             <p className="flex-auto font-secondary text-neutral-50">{feature.description}</p>

        //                         </dd>
        //                     </div>
        //                 ))}
        //             </dl>
        //         </div>
        //     </div>
        // </div>
    )
}
