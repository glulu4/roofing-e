import React from 'react'
import HeaderText from './HeaderText';


interface TimelineProps {
    title:string;
    className?: string;
    steps: Array<{
        name: string;
        description: string;
        date: string;
        dateTime?: string;
    }>;
}

export default function Timeline({
    className,
    title,
    steps,

}: TimelineProps) {
    return (
        <div className={`mx-auto -mt-8 w-5/6 px-6 lg:px-8 space-y-24 ${className}`}>

            <HeaderText className=" text-center font-semibold text-primaryblue pt-16">
                {title}
            </HeaderText>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {steps.map((item) => (
                    <div key={item.name}>
                        <time className="flex items-center text-md/6 font-semibold text-primaryGreenLight">
                            <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                                <circle r={2} cx={2} cy={2} fill="currentColor" />
                            </svg>
                            {item.date}
                            <div
                                aria-hidden="true"
                                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                            />
                        </time>
                        <p className="mt-6 text-2xl/8 font-semibold tracking-tight text-primaryGreenDark">{item.name}</p>
                        <p className="mt-3 text-lg/8 text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
