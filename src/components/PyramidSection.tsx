// import React from 'react';
// import styles from '../../Pyramid.module.css';
// import {cn} from '@/lib/utils';

// const ProtectionPyramid = () => {
//     const sections = [
//         {
//             number: 1,
//             title: 'Energy Efficiency',
//             description: 'Our roofs are designed to improve energy efficiency, reduce bills, and enhance overall comfort.',
//         },
//         {
//             number: 2,
//             title: 'Leak Prevention',
//             description: 'We use advanced techniques and materials to prevent leaks and protect your home from water damage.',
//         },
//         {
//             number: 3,
//             title: 'Weather Resistance',
//             description: 'Our roofs are designed to withstand harsh weather conditions, including heavy rain, strong winds, and extreme temperatures.',
//         },
//     ];

//     return (

//         <div className={cn(
//             "flex flex-col md:flex-row items-center md:items-stretch w-10/12 mx-auto gap-8",

//             )}>
//             {/* Pyramid Section */}
//             <div className={`${styles.pyramid} w-full`}>
//                 {sections.map((section, index) => (
//                     <div key={section.number} className={styles.pyramid__section}>
//                         <div className={`flex justify-center h-full items-center pt-6 md:pt-10 ${index === 0 ? 'sm:pt-14' : ''}`}>
//                             <h1 className="text-xl font-bold text-white">{section.number}</h1>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Text Sections */}
//             <div className="flex flex-col justify-around items-start w-full md:w-1/2">
//                 {sections.map((section, index) => (
//                     <div
//                         key={section.number}
//                         className={`relative mt-4 md:mt-0 ${index === 1 ? 'md:ml-10' : index === 2 ? 'md:ml-20' : 'md:ml-0'
//                             } flex items-start gap-4`}
//                     >
//                         {/* Number for column layout */}
//                         <div style={{width: '2rem', height: '2rem', borderRadius: '4rem', backgroundColor:"#003566"}} className=" md:hidden text-xl font-bold text-white flex items-center justify-center bg-slate-500 p-5">
//                             {section.number}
//                         </div>


//                         <div>
//                             <h2 className="font-secondary text-2xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
//                             <h3 className="font-secondary text-xl md:text-2xl text-gray-700 mt-4">{section.description}</h3>
//                         </div>

//                     </div>
//                 ))}
//             </div>

//         </div>

//     );
// };

// export default ProtectionPyramid;
import React from 'react';
import styles from '../../Pyramid.module.css';
import {cn} from '@/lib/utils';

const ProtectionPyramid = () => {
    const sections = [
        {
            number: 1,
            title: 'Energy Efficiency',
            description: 'Our roofs are designed to improve energy efficiency, reduce bills, and enhance overall comfort.',
        },
        {
            number: 2,
            title: 'Leak Prevention',
            description: 'We use advanced techniques and materials to prevent leaks and protect your home from water damage.',
        },
        {
            number: 3,
            title: 'Weather Resistance',
            description: 'Our roofs are designed to withstand harsh weather conditions, including heavy rain, strong winds, and extreme temperatures.',
        },
    ];

    return (
        <div className="relative isolate bg-white">
            {/* Background gradient */}
            <svg
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <div
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        width: '120rem', // Increased width
                        height: '120rem', // Increased height
                        background: 'linear-gradient(to top left, #80bdff, #040d85)',
                        opacity: 0.3,
                    }}
                    className="absolute"
                />
            </div>

            <div
                className={cn(
                    "flex flex-col md:flex-row items-center md:items-stretch w-10/12 mx-auto gap-8"
                )}
            >
                {/* Pyramid Section */}
                <div className={`${styles.pyramid}`}>
                    {sections.map((section, index) => (
                        <div key={section.number} className={styles.pyramid__section}>
                            <div
                                className={`flex justify-center h-full items-center pt-6 md:pt-10 ${index === 0 ? 'sm:pt-14' : ''}`}
                            >
                                <h1 className="text-xl font-bold text-white">{section.number}</h1>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Text Sections */}
                <div className="flex flex-col justify-around items-start w-full md:w-1/2">
                    {sections.map((section, index) => (
                        <div
                            key={section.number}
                            className={`relative mt-4 md:mt-0 ${index === 1 ? 'md:ml-10' : index === 2 ? 'md:ml-20' : 'md:ml-0'
                                } flex items-start gap-4`}
                        >
                            {/* Number for column layout */}
                            <div
                                style={{
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '4rem',
                                    backgroundColor: '#003566',
                                }}
                                className="md:hidden text-xl font-bold text-white flex items-center justify-center p-5"
                            >
                                {section.number}
                            </div>

                            <div>
                                <h2 className="font-secondary text-2xl md:text-4xl font-bold text-gray-900">
                                    {section.title}
                                </h2>
                                <h3 className="font-secondary text-xl md:text-2xl text-gray-700 mt-4">
                                    {section.description}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProtectionPyramid;
