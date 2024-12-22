// import {SunIcon, CurrencyDollarIcon, GlobeAltIcon} from '@heroicons/react/24/outline';
// import HeaderText from './HeaderText';
// import SecondaryText from './SecondaryText';

import HeaderText from "./HeaderText";
import SecondaryText from "./SecondaryText";

// const incentives = [
//     {
//         name: 'Lower Energy Bills',
//         Icon: SunIcon,
//         description:
//             "Reduce your electricity costs by harnessing the power of the sun. Solar energy provides clean and affordable energy for your home.",
//     },
//     {
//         name: 'Tax Incentives',
//         Icon: CurrencyDollarIcon,
//         description:
            // "Take advantage of federal and state solar tax credits to lower the upfront cost of installing a solar system.",
//     },
//     {
//         name: 'Eco-Friendly Energy',
//         Icon: GlobeAltIcon,
//         description:
//             "Switch to renewable energy to reduce your carbon footprint and help combat climate change for future generations.",
//     },
// ];

// export default function Benefits() {
//     return (
//         <div >
//             <div className="mx-auto w-5/6 px-4 py-24 sm:px-6 lg:px-8">
//                 <div className="rounded-2xl bg-primaryblue px-6 py-16 sm:p-16">
//                     <div className="mx-auto max-w-xl lg:max-w-none">
//                         <div className="text-center">
//                             <HeaderText className="text-2xl font-bold tracking-tight text-neutral-50">
//                                 Discover the Benefits of Solar Energy
//                             </HeaderText>
//                             <SecondaryText className="mt-4 text-lg text-white">
//                                 Solar energy is an investment in your home, your finances, and the planet. Here’s why going solar is worth it.
//                             </SecondaryText>
//                         </div>
//                         <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
//                             {incentives.map((incentive) => (
//                                 <div
//                                     key={incentive.name}
//                                     className="text-center sm:flex sm:text-left lg:block lg:text-center"
//                                 >
//                                     <div className="sm:shrink-0">
//                                         <div className="flex items-center justify-center bg-amber-100 rounded-full w-16 h-16 mx-auto">
//                                             <incentive.Icon className="h-8 w-8 text-amber-500" />
//                                         </div>
//                                     </div>
//                                     <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
//                                         <h3 className="text-lg font-semibold text-gray-300">{incentive.name}</h3>
//                                         <SecondaryText className="mt-2 text-gray-300">{incentive.description}</SecondaryText>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
export default function Benefits() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="flex flex-col items-center text-center">
                        <HeaderText className="text-primaryblue">
                            Benefits of Solar
                        </HeaderText>
                        <SecondaryText >
                            Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                            all-day adventures, long shifts at work, and tough travel schedules.
                        </SecondaryText>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <img
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                src="/images/benefit2.jpeg"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                            Reduce your electricity costs by harnessing 
                            the power of the sun. Solar energy provides clean and 
                            affordable energy for your home.                           
                             </SecondaryText>
                        </div>
                        <div>
                            <img
                                alt="Front zipper pouch with included key ring."
                                src="/images/benefit1.jpeg"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                                Take advantage of federal and state solar tax 
                                credits to lower the upfront cost of installing a 
                                solar system.
                            </SecondaryText>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
