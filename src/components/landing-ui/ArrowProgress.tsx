// import {CheckIcon} from '@heroicons/react/24/solid'

// const steps = [
//     {id: '01', name: 'Job details', href: '#', status: 'current'},
//     {id: '02', name: 'Application form', href: '#', status: 'current'},
// ]

// export default function ArrowProgress() {
//     return (
//         <nav aria-label="Progress">
//             <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
//                 {steps.map((step, stepIdx) => (
//                     <li key={step.name} className="relative md:flex md:flex-1">
//                         {step.status === 'complete' ? (
//                             <a href={step.href} className="group flex w-full items-center">
//                                 <span className="flex items-center px-6 py-4 text-sm font-medium">
//                                     <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
//                                         <CheckIcon aria-hidden="true" className="size-6 text-white" />
//                                     </span>
//                                     <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
//                                 </span>
//                             </a>
//                         ) : step.status === 'current' ? (
//                             <a href={step.href} aria-current="step" className="flex items-center px-6 py-4 text-sm font-medium">
//                                 <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
//                                     <span className="text-indigo-600">{step.id}</span>
//                                 </span>
//                                 <span className="ml-4 text-sm font-medium text-indigo-600">{step.name}</span>
//                             </a>
//                         ) : (
//                             <a href={step.href} className="group flex items-center">
//                                 <span className="flex items-center px-6 py-4 text-sm font-medium">
//                                     <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
//                                         <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
//                                     </span>
//                                     <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
//                                 </span>
//                             </a>
//                         )}

//                         {stepIdx !== steps.length - 1 ? (
//                             <>
//                                 {/* Arrow separator for lg screens and up */}
//                                 <div aria-hidden="true" className="absolute right-0 top-0 hidden h-full w-5 md:block">
//                                     <svg fill="none" viewBox="0 0 22 80" preserveAspectRatio="none" className="size-full text-gray-300">
//                                         <path
//                                             d="M0 -2L20 40L0 82"
//                                             stroke="currentcolor"
//                                             vectorEffect="non-scaling-stroke"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </div>
//                             </>
//                         ) : null}
//                     </li>
//                 ))}
//             </ol>
//         </nav>
//     )
// }


export default function ArrowProgress() {
    const steps = [
        {
            id: 1,
            title: 'Preventative Maintenance',
            description:
                'Regular inspections and maintenance can identify minor issues before they become major problems, saving you time and money.',
        },
        {
            id: 2,
            title: 'Professional Repairs',
            description:
                'Prompt and professional repairs can prevent further damage and extend the life of your existing roof.',
        },
    ];

    return (

        
        <div className="bg-white py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">
                    Extend the Life of Your Roof
                </h2>

                {/* Steps Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative flex flex-col border rounded-lg shadow-sm bg-gray-50"
                        >
                            {/* Arrow for the first row */}
                            {index === 0 && (
                                <div className="absolute -top-2 left-0 h-8 w-8 bg-gray-50 -rotate-45 transform"></div>
                            )}
                            {/* Top Number Section */}
                            <div className="bg-gray-100 text-center py-3 font-semibold text-gray-900">
                                {step.id}
                            </div>
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
