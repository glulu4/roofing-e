"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    WalletIcon,
    WrenchIcon,
    HomeModernIcon,
    BoltIcon,
    CubeIcon,
    AdjustmentsHorizontalIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/solid';
import {FaWater} from 'react-icons/fa';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const RoofRepairReasons = () => {
    const [activeItem, setActiveItem] = useState('shingles');

    const reasons = [
        {
            id: 'leaks',
            title: 'Leaky Roofs',
            icon: FaWater,
            description: `
            If you have an old or damaged roof, it can lead to water damage 
            that can jeopardize the integrity of your roof and cost you hundreds of dollars to fix. Don’t let your leak get any worse. Let us help.
            `,
            details: [
                'Identify source of water entry',
                'Prevent structural damage',
                'Protect interior belongings',
                'Maintain home value'
            ]
        },
        {
            id: 'flashing',
            title: 'Leaky Pipe Collars, Flashing and Chimneys',
            icon: WrenchIcon,
            description: 'Damaged flashing around chimneys, vents, and pipe collars is a common source of leaks. Professional repair ensures proper water diversion.',
            details: [
                'Chimney flashing repair',
                'Vent pipe sealing',
                'Step flashing replacement',
                'Waterproof barrier installation'
            ]
        },
        {
            id: 'shingles',
            title: 'Loose and Damaged Shingles',
            icon: HomeModernIcon,
            description: 'Don\'t let loose or damaged shingles compromise the look and strength of your roof. Damaged shingles can lead to problems with the wood underlayment.',
            details: [
                'Individual shingle replacement',
                'Wind damage assessment',
                'Granule loss evaluation',
                'Underlayment protection'
            ]
        },
        {
            id: 'fascia',
            title: 'Fascia Wind Damage',
            icon: BoltIcon,
            description: 'Strong winds can damage fascia boards, compromising your roof\'s edge protection. Quick repair prevents further structural issues.',
            details: [
                'Fascia board replacement',
                'Edge protection restoration',
                'Wind damage assessment',
                'Gutter system integration'
            ]
        },
        {
            id: 'wood',
            title: 'Rotting Wood',
            icon: CubeIcon,
            description: 'Moisture damage can cause wood rot in roof decking and structural elements. Early intervention prevents extensive damage.',
            details: [
                'Deck board replacement',
                'Structural assessment',
                'Moisture source elimination',
                'Preventive treatment'
            ]
        },
        {
            id: 'venting',
            title: 'Damaged Venting',
            icon: AdjustmentsHorizontalIcon,
            description: 'Proper ventilation is crucial for roof health. Damaged vents can lead to moisture buildup and energy inefficiency.',
            details: [
                'Ridge vent repair',
                'Soffit ventilation',
                'Exhaust fan installation',
                'Airflow optimization'
            ]
        },
        {
            id: 'collapsed',
            title: 'Collapsed Roofs',
            icon: ExclamationTriangleIcon,
            description: 'Structural failure requires immediate professional attention. Our emergency response team provides rapid assessment and repair.',
            details: [
                'Emergency stabilization',
                'Structural engineering',
                'Insurance coordination',
                'Complete reconstruction'
            ]
        }
    ];

    const activeReason = reasons.find(reason => reason.id === activeItem);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Roof Repair Expertise
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Common Reasons for Roof Repair
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Because your roof shields your home from the elements all day, every day it takes on a lot of wear and tear.
                        While a properly installed roof should last up to 20 years, shoddy installation and extreme weather events can cause issues.
                        Even the smallest problems can lead to major concerns, so it’s important to identify and repair roof issues as soon as possible.
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
                                    src="/images/roof-service/roof-repair/roof-repair2.png"
                                    alt="Roof repair demonstration"
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

export default RoofRepairReasons;
