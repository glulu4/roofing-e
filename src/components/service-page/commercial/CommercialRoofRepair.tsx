"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    WrenchScrewdriverIcon,
    BuildingOfficeIcon,
    CloudIcon,
    ExclamationTriangleIcon,
    FireIcon,
    Cog6ToothIcon,
    ShieldExclamationIcon
} from '@heroicons/react/24/solid';
import {FaWater} from 'react-icons/fa';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import Link from 'next/link';

const CommercialRoofRepairReasons = () => {
    const [activeItem, setActiveItem] = useState('ponding');

    const reasons = [
        {
            id: 'ponding',
            title: 'Ponding Water & Drainage Issues',
            icon: FaWater,
            description: 'Standing water on flat commercial roofs for more than 48 hours indicates drainage problems. Ponding water accelerates membrane deterioration, causes structural damage, and creates ideal conditions for mold growth, threatening your business operations.',
            details: [
                'Clogged drain inspection and clearing',
                'Drainage system redesign and repair',
                'Roof slope correction',
                'Emergency water removal services'
            ]
        },
        {
            id: 'membrane',
            title: 'Membrane Damage & Deterioration',
            icon: ShieldExclamationIcon,
            description: 'Commercial roofing membranes (EPDM, TPO, PVC) can develop cracks, tears, punctures, and UV damage over time. Membrane shrinkage, blistering, and separation of seams are common issues that require immediate professional attention to prevent costly water damage.',
            details: [
                'Membrane patching and repair',
                'Seam welding and reinforcement',
                'Blister removal and resealing',
                'Full membrane replacement'
            ]
        },
        {
            id: 'hvac',
            title: 'HVAC Equipment Damage',
            icon: Cog6ToothIcon,
            description: 'Rooftop HVAC units cause significant wear through foot traffic, condensation leaks, improper installation, and structural overloading. Heavy equipment can puncture membranes, create low spots, and strain roof structures beyond their load capacity.',
            details: [
                'HVAC curb installation and flashing',
                'Condensation drainage solutions',
                'Walkway pad installation',
                'Structural reinforcement assessment'
            ]
        },
        {
            id: 'flashing',
            title: 'Flashing & Penetration Failures',
            icon: WrenchScrewdriverIcon,
            description: 'Commercial roofs have numerous penetrations for vents, pipes, and equipment. Damaged flashing around these penetrations is a leading cause of leaks. Temperature changes cause expansion and contraction, loosening seals and creating water infiltration points.',
            details: [
                'Flashing replacement and repair',
                'Penetration resealing',
                'Chimney and vent flashing',
                'Expansion joint maintenance'
            ]
        },
        {
            id: 'weather',
            title: 'Storm & Weather Damage',
            icon: CloudIcon,
            description: 'Severe weather events including hail, high winds, heavy snow loads, and UV exposure cause immediate and long-term damage to commercial roofing systems. Emergency repairs are critical to prevent further damage to building contents and operations.',
            details: [
                'Emergency storm damage assessment',
                'Hail damage repair',
                'Wind uplift reinforcement',
                'Insurance claim documentation'
            ]
        },
        {
            id: 'traffic',
            title: 'Foot Traffic & Maintenance Damage',
            icon: BuildingOfficeIcon,
            description: 'Commercial roofs experience heavy foot traffic from HVAC technicians, maintenance workers, and other service personnel. Without proper protection, this traffic causes punctures, membrane tears, and premature wear in high-traffic areas.',
            details: [
                'Protective walkway installation',
                'Traffic damage assessment',
                'High-traffic area reinforcement',
                'Access control planning'
            ]
        },
        {
            id: 'structural',
            title: 'Structural & Emergency Issues',
            icon: ExclamationTriangleIcon,
            description: 'Structural failures, roof deck deterioration, and emergency situations require immediate professional intervention. Overloaded roof structures, rotting decking, and sudden collapses threaten business continuity and employee safety.',
            details: [
                'Emergency structural stabilization',
                'Load capacity assessment',
                'Deck replacement and repair',
                'Safety evaluation and planning'
            ]
        }
    ];

    const activeReason = reasons.find(reason => reason.id === activeItem);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Commercial Roof Repair Expertise
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Common Commercial Roof Repair Issues
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Commercial roofs face unique challenges from heavy equipment, increased foot traffic, and complex drainage systems.
                        Unlike residential roofs, commercial buildings require specialized expertise to address membrane systems, structural loads, and business continuity concerns.
                        Early identification and professional repair of these issues prevents costly business interruptions and protects your commercial investment.
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
                                    src="/images/commercial/repair/repair4.jpg"
                                    alt="Commercial roof repair demonstration"
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

                                {/* Commercial-specific call-to-action */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                                    <div className="flex items-center mb-2">
                                        <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 mr-2" />
                                        <span className="font-semibold text-amber-800">Business Impact Alert</span>
                                    </div>
                                    <p className="text-sm text-amber-700">
                                        Commercial roof issues can disrupt operations, damage equipment, and create liability concerns.
                                        Emergency response available 24/7 to minimize business downtime.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    <Link href="/estimate" className="bg-primaryblue text-center hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                                        Emergency Commercial Repair
                                    </Link>
                                    <Link href="tel:2157997663" className="border-2 border-slate-300 hover:border-primaryblue text-slate-700 hover:text-primaryblue text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                        Schedule Inspection
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CommercialRoofRepairReasons;