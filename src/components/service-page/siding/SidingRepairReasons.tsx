"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    FireIcon,
    CloudIcon,
    SunIcon,
    CubeTransparentIcon,
    BugAntIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import {FaWater, FaWind} from 'react-icons/fa';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const SidingRepairReasons = () => {
    const [activeItem, setActiveItem] = useState('water');

    const reasons = [
        {
            id: 'water',
            title: 'Water Damage & Moisture',
            icon: FaWater,
            description: `
            Excessive moisture can cause siding to warp, rot, and deteriorate over time. Water infiltration behind siding 
            leads to structural damage and creates ideal conditions for mold growth. Our siding repair experts quickly 
            identify and fix water-related damage before it spreads.
            `,
            details: [
                'Identify moisture entry points',
                'Repair water-damaged sections',
                'Install proper water barriers',
                'Prevent future water infiltration'
            ]
        },
        {
            id: 'mold',
            title: 'Mold & Mildew Growth',
            icon: BugAntIcon,
            description: 'Mold and mildew can rapidly compromise your siding\'s integrity and appearance. These fungi thrive in moist conditions and can spread quickly across siding surfaces, requiring immediate professional siding repair intervention.',
            details: [
                'Remove mold and mildew growth',
                'Treat affected siding areas',
                'Address underlying moisture issues',
                'Apply protective treatments'
            ]
        },
        {
            id: 'wind',
            title: 'Wind & Storm Damage',
            icon: FaWind,
            description: 'Strong winds can tear off siding panels, crack materials, and create loose sections that compromise your home\'s protection. Storm damage requires prompt siding repair to prevent further deterioration and maintain your home\'s weather barrier.',
            details: [
                'Replace missing siding panels',
                'Secure loose sections',
                'Repair wind-damaged areas',
                'Reinforce vulnerable sections'
            ]
        },
        {
            id: 'heat',
            title: 'Heat & UV Damage',
            icon: SunIcon,
            description: 'Extreme heat and prolonged UV exposure can cause siding to warp, fade, crack, or even melt. Heat damage affects both appearance and structural integrity, requiring expert siding repair to restore protection.',
            details: [
                'Replace heat-warped panels',
                'Repair UV-damaged sections',
                'Address thermal expansion issues',
                'Install heat-resistant materials'
            ]
        },
        {
            id: 'hail',
            title: 'Hail & Impact Damage',
            icon: CloudIcon,
            description: 'Hail storms can dent, crack, or puncture siding materials, creating entry points for moisture and pests. Impact damage from debris also requires immediate siding repair to maintain your home\'s protective barrier.',
            details: [
                'Assess hail damage severity',
                'Replace punctured panels',
                'Repair impact dents and cracks',
                'Work with insurance adjusters'
            ]
        },
        {
            id: 'age',
            title: 'Age & Material Deterioration',
            icon: CubeTransparentIcon,
            description: 'Over time, all siding materials naturally deteriorate due to weathering and age. Older siding becomes brittle, fades, and loses its protective qualities, making timely siding repair essential for continued home protection.',
            details: [
                'Evaluate material condition',
                'Replace deteriorated sections',
                'Upgrade to modern materials',
                'Extend siding lifespan'
            ]
        },
        {
            id: 'pests',
            title: 'Pest & Insect Damage',
            icon: BugAntIcon,
            description: 'Insects and small animals can damage siding by boring holes, creating nests, or chewing through materials. Pest damage creates entry points that compromise your home\'s protection and requires professional siding repair.',
            details: [
                'Repair pest entry points',
                'Replace damaged sections',
                'Install pest-resistant materials',
                'Seal vulnerable areas'
            ]
        }
    ];

    const activeReason = reasons.find(reason => reason.id === activeItem);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Siding Repair Expertise
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Common Causes of Siding Damage
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Your siding protects your home from weather, pests, and moisture every day. While quality siding
                        can last decades, various factors can cause damage that requires prompt siding repair. Understanding
                        these common causes helps you identify when professional siding repair services are needed.
                    </SecondaryText>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        {reasons.map((reason) => (
                            <div
                                key={reason.id}
                                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeItem === reason.id
                                    ? 'bg-primaryblue border-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-white border-slate-200 text-slate-900 hover:border-blue-300 hover:shadow-md'
                                    }`}
                                onClick={() => setActiveItem(reason.id)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 p-2 rounded-lg ${activeItem === reason.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                                        <reason.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <HeaderText variant='small' className="text-lg font-bold mb-2">{reason.title}</HeaderText>
                                        {activeItem === reason.id && (
                                            <div className="space-y-3">
                                                <p className="text-blue-100 leading-relaxed">{reason.description}</p>
                                                <ul className="space-y-2">
                                                    {reason.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-center text-sm text-blue-100">
                                                            <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-20">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative aspect-video bg-slate-900">
                                <Image
                                    src="/images/siding/siding-service/siding-repair/siding-repair4.webp"
                                    alt="Professional siding repair demonstration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="bg-primaryblue p-3 rounded-xl">
                                        {activeReason?.icon && <activeReason.icon className="w-6 h-6 text-white" />}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeReason?.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{activeReason?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SidingRepairReasons;