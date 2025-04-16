import React from 'react';
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';
import Image from 'next/image';

const steps = [
    {
        step: 1,
        title: 'Old Siding Removal',
        description: `Once all the necessary materials are ordered, the removal process of the old siding begins. The duration of this step usually ranges from 2 to 7 days, depending on the project size and the type of existing siding. If you have a new build or just need a small siding repair, this step is skipped.`,
        image: '/images/step1.png',
    },
    {
        step: 2,
        title: 'Sheathing Damage Inspection',
        description: `During this step, we’ll inspect the underlying sheathing for any signs of rot, mold, or damage. If repairs are needed, which fortunately doesn't happen often from our experience, you could be looking at a small additional cost.`,
        image: '/images/step2.png',
    },
    {
        step: 3,
        title: 'Preparation of the Wall for Siding',
        description: `Prior to installation, we’ll protect your home by installing a rainscreen system consisting of building paper, flashings, and strapping/mesh. This crucial step safeguards your property against potential water damage.`,
        image: '/images/step3.png',
    },
    {
        step: 4,
        title: 'Siding Installation and Touch-ups',
        description: `
Our experienced team will install your chosen siding, paying meticulous attention to detail. From trim boards and soffits to insect screens and flashings, we'll ensure a comprehensive and professional finish. Any necessary touch-up painting will be conducted to guarantee a polished appearance. This step usually takes between 7 and 10 days`,
        image: '/images/step3.png',
    },
    {
        step: 5,
        title: 'Waste Removal and Clean Up',
        description: `
We take pride in leaving your property clean and pristine. Our team will handle the clean-up and proper disposal of all construction debris, adhering to the highest standards of the siding industry.`,
        image: '/images/step3.png',
    },
];

export default function StepsSection() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                {steps.map((step, index) => (
                    <div
                        key={step.step}
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            } items-center gap-8`}
                    >
                        {/* Image */}
                        <div className="flex-shrink-0 w-full md:w-1/2">
                            <Image
                                width={500}
                                height={500}
                                src={step.image}
                                alt={`best roofing company near me`}
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2">
                            <div className="mb-4 flex items-center">
                                <span className="bg-primaryblue text-xl text-white font-bold py-1 px-4 rounded-full mr-4">
                                    Step {step.step}
                                </span>
                                <HeaderText variant="small" className="">{step.title}</HeaderText>
                            </div>
                            <SecondaryText className="text-gray-700 ">{step.description}</SecondaryText>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
