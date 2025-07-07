"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    FireIcon,
    CloudIcon,
    SunIcon,
    CubeTransparentIcon,
    BugAntIcon,
    ExclamationTriangleIcon,
    WrenchScrewdriverIcon,
    HomeModernIcon
} from '@heroicons/react/24/solid';
import {FaWater, FaWind} from 'react-icons/fa';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import {CogIcon} from 'lucide-react';

const WindowRepairReasons = () => {
    const [activeItem, setActiveItem] = useState('broken-glass');

    const reasons = [
        {
            id: 'broken-glass',
            title: 'Broken or Cracked Glass',
            icon: ExclamationTriangleIcon,
            description: `
            Broken or cracked window glass is a common window repair need that requires immediate attention for security and energy efficiency. Whether from storm damage, impact, or thermal stress, damaged glass compromises your home's protection and allows air infiltration that increases energy costs.
            `,
            details: [
                'Single-pane glass replacement',
                'Double-pane insulated glass repair',
                'Tempered glass installation',
                'Emergency glass boarding services'
            ]
        },
        {
            id: 'seal-failure',
            title: 'Window Seal Failure',
            icon: CubeTransparentIcon,
            description: 'Failed window seals in double-pane windows cause fogging, condensation between panes, and reduced energy efficiency. Window seal repair or replacement restores clarity and insulation performance while extending window life.',
            details: [
                'Seal replacement and resealing',
                'Moisture removal between panes',
                'Insulated glass unit replacement',
                'Energy efficiency restoration'
            ]
        },
        {
            id: 'frame-damage',
            title: 'Window Frame Damage',
            icon: HomeModernIcon,
            description: 'Damaged window frames from rot, impact, or weathering affect window operation and energy efficiency. Professional window frame repair restores structural integrity and appearance while preventing further deterioration.',
            details: [
                'Wood frame rot repair',
                'Vinyl frame crack repair',
                'Aluminum frame restoration',
                'Frame reinforcement and strengthening'
            ]
        },
        {
            id: 'hardware-issues',
            title: 'Window Hardware Problems',
            icon: WrenchScrewdriverIcon,
            description: 'Faulty window hardware including locks, handles, hinges, and operators prevents proper window function and compromises security. Window hardware repair restores smooth operation and secure closure.',
            details: [
                'Lock mechanism repair',
                'Handle and crank replacement',
                'Hinge adjustment and replacement',
                'Window operator repair'
            ]
        },
        {
            id: 'weatherstripping',
            title: 'Weatherstripping Failure',
            icon: FaWind,
            description: 'Worn or damaged weatherstripping allows air leaks that reduce energy efficiency and comfort. Professional weatherstripping replacement creates tight seals that eliminate drafts and improve insulation.',
            details: [
                'Weatherstrip inspection and replacement',
                'Air leak elimination',
                'Energy efficiency improvement',
                'Draft prevention and comfort restoration'
            ]
        },
        {
            id: 'water-damage',
            title: 'Water Damage & Moisture Issues',
            icon: FaWater,
            description: 'Water infiltration around windows causes frame damage, interior damage, and mold growth. Window repair addressing water issues includes sealing, frame repair, and moisture prevention.',
            details: [
                'Water intrusion repair',
                'Caulking and sealing',
                'Drainage improvement',
                'Moisture damage restoration'
            ]
        },
        {
            id: 'operation-problems',
            title: 'Window Operation Issues',
            icon: CogIcon,
            description: 'Windows that stick, bind, or won\'t open properly create safety and ventilation concerns. Window repair addressing operation issues restores smooth function and emergency egress capability.',
            details: [
                'Window adjustment and alignment',
                'Track cleaning and lubrication',
                'Balance system repair',
                'Operation mechanism restoration'
            ]
        }
    ];

    const activeReason = reasons.find(reason => reason.id === activeItem);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Window Repair Expertise
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Common Window Repair Issues
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Windows face constant exposure to weather, temperature changes, and daily use that can cause various problems requiring professional window repair. Understanding these common issues helps you identify when window repair services are needed to maintain your home&apos;s comfort, security, and energy efficiency.
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
                                    src="/images/windows/window-repair/window-repair-demo.webp"
                                    alt="Professional window repair demonstration"
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

                                {/* Service area call-to-action */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-center mb-2">
                                        <ExclamationTriangleIcon className="w-5 h-5 text-blue-600 mr-2" />
                                        <span className="font-semibold text-blue-800">Greater Philadelphia Service</span>
                                    </div>
                                    <p className="text-sm text-blue-700">
                                        Serving homeowners throughout Pennsylvania, New Jersey, and Delaware with professional window repair services.
                                        Same-day service available for emergency window repair needs.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <a href="/estimate" className="bg-primaryblue text-center hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                                        Get Free Window Repair Estimate
                                    </a>
                                    <a href="tel:2157997663" className="border-2 border-slate-300 hover:border-primaryblue text-slate-700 hover:text-primaryblue text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                        Call for Emergency Repair
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WindowRepairReasons;