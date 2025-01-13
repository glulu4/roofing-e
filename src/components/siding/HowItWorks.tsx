
import React from 'react';
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: 'Old Siding Removal',
            description: `Once all the necessary materials are ordered, the removal process of the old siding begins. The duration of this step usually ranges from 2 to 7 days, depending on the project size and the type of existing siding. If you have a new build or just need a small siding repair, this step is skipped.`,
        },
        {
            number: 2,
            title: 'Sheathing Damage Inspection',
            description: `During this step, we’ll inspect the underlying sheathing for any signs of rot, mold, or damage. If repairs are needed, which fortunately doesn't happen often from our experience, you could be looking at a small additional cost.`,
        },
        {
            number: 3,
            title: 'Preparation of the Wall for Siding',
            description: `Prior to installation, we’ll protect your home by installing a rainscreen system consisting of building paper, flashings, and strapping/mesh. This crucial step safeguards your property against potential water damage.`,
        },
        {
            number: 4,
            title: 'Siding Installation',
            description: `
Our experienced team will install your chosen siding, paying meticulous attention to detail. From trim boards and soffits to insect screens and flashings, we'll ensure a comprehensive and professional finish. Any necessary touch-up painting will be conducted to guarantee a polished appearance. This step usually takes between 7 and 10 days`,
        },
        {
            number: 5,
            title: 'Waste Removal and Clean Up',
            description: `
We take pride in leaving your property clean and pristine. Our team will handle the clean-up and proper disposal of all construction debris, adhering to the highest standards of the siding industry.`,
        }
    ];

    return (
        <div className=" sm:w-full max-w-6xl mx-auto p-8">
            <div className="relative">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-[#FFD700] rounded-full" />

                {/* Steps */}
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        className={`relative flex items-center mb-24 last:mb-0 sm:${index % 2 === 0 ? 'justify-start' : 'justify-end'} justify-center`}
                    >
                        {/* Content container */}
                        <div className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                            }`}>
  
                            <div className="sm:w-4/5  bg-white rounded-lg shadow-lg border border-slate-200 h-fit">
                                <div className=' flex-1 flex flex-col sm:flex-row'>

                                    <div className=' bg-primaryblue w-full sm:max-w-fit h-fit rounded-b-lg sm:rounded-br-lg sm:rounded-bl-none'>
                                        <HeaderText className='p-6 text-neutral-50 text-center'>
                                            Step {step.number}
                                        </HeaderText>
                                        
                                    </div>

                                    <div className=' flex-[1] flex-wrap '>
                                        <HeaderText variant="default" className=" text-left sm:text-left font-bold p-6 sm:pb-8 text-wrap">
                                            {step.title}
                                        </HeaderText>

                                    </div>

                                </div>
                                <SecondaryText className="text-gray-500 p-6 text-5xl">{step.description}</SecondaryText>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;