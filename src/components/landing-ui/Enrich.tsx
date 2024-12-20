'use client'

import HeaderText from "../Headertext"
import SecondaryText from "../SecondaryText"



export default function Enrich() {

    return (
        <div >


            <div className="relative bg-white">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-y-0 right-20 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                <HeaderText className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                    High-Quality Roofing Solutions for Lasting Protection
                                </HeaderText>
                                <SecondaryText className="text-gray-500">
                                    Protect your home with durable, reliable roofing solutions designed to withstand the toughest elements. Our expert craftsmanship ensures a seamless finish that boosts your home’s value and curb appeal. Discover why homeowners trust us for quality that lasts.
                                </SecondaryText>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        alt=""
                        src="/images/r3.png"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

// 'use client';

// export default function Enrich() {
//     return (
//         <div className="bg-white relative">
//             <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center lg:items-stretch">
//                 {/* Text Section */}
//                 <div className="relative z-10 lg:w-1/2 p-6 sm:px-10 lg:px-12 lg:py-32">
//                     <div className="max-w-2xl mx-auto lg:mx-0">
//                         <div className="hidden sm:flex sm:mb-10">
//                             <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                                 Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
//                                 <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
//                                     Read more <span aria-hidden="true">&rarr;</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//                             Data to enrich your business
//                         </h1>
//                         <p className="mt-6 text-lg text-gray-500 sm:text-xl">
//                             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
//                             amet fugiat veniam occaecat fugiat aliqua.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="lg:w-1/2">
//                     <img
//                         alt="Roof Example"
//                         src="/images/3d-roof-render.png"
//                         className="w-full h-full object-contain lg:object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
