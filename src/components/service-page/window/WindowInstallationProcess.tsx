"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    ClipboardDocumentCheckIcon,
    WrenchScrewdriverIcon,
    HomeModernIcon,
    ShieldCheckIcon,
    MagnifyingGlassIcon,
    SparklesIcon
} from '@heroicons/react/24/solid';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const WindowInstallationProcess = () => {
    const [activeStep, setActiveStep] = useState('consultation');

    const steps = [
        {
            id: 'consultation',
            title: 'Initial Consultation & Measurement',
            icon: ClipboardDocumentCheckIcon,
            description: `
            Our window installation process begins with a comprehensive consultation and precise measurement. Our certified installers assess your project needs, discuss window options, and take exact measurements to ensure perfect fit. We evaluate structural requirements and identify any potential challenges before installation begins.
            `,
            details: [
                'Detailed measurement and assessment',
                'Window selection consultation',
                'Structural evaluation',
                'Project planning and scheduling'
            ],
            img:"/images/window/window-install/consult.webp"
        },
        {
            id: 'preparation',
            title: 'Site Preparation & Protection',
            icon: ShieldCheckIcon,
            description: 'Proper preparation is crucial for successful window installation. We protect your home and belongings, prepare work areas, and ensure all tools and materials are ready. This phase includes removing old windows if applicable and preparing openings for new installation.',
            details: [
                'Interior and exterior protection',
                'Work area preparation',
                'Old window removal if needed',
                'Opening preparation and inspection'
            ],
            img: "/images/window/window-install/step2.webp"
        },
        {
            id: 'installation',
            title: 'Professional Window Installation',
            icon: WrenchScrewdriverIcon,
            description: 'Our certified installers perform precise window installation using manufacturer specifications and building code requirements. This includes proper positioning, securing, flashing, insulation, and weatherproofing for optimal performance.',
            details: [
                'Precise window positioning and leveling',
                'Secure fastening and anchoring',
                'Professional flashing installation',
                'Insulation and weatherproofing'
            ],
            img: "/images/window/window-install/step3.webp"
        },
        {
            id: 'sealing',
            title: 'Weatherproofing & Sealing',
            icon: HomeModernIcon,
            description: 'Critical weatherproofing ensures long-term window performance and energy efficiency. We apply professional-grade sealants, install proper drainage, and create airtight seals that prevent moisture infiltration and air leaks.',
            details: [
                'Professional-grade sealant application',
                'Drainage system installation',
                'Air sealing for energy efficiency',
                'Moisture barrier installation'
            ],
            img: "/images/window/window-install/step4.webp"
        },
        {
            id: 'finishing',
            title: 'Trim Work & Finishing',
            icon: SparklesIcon,
            description: 'Professional finishing gives your window installation a polished appearance. We install trim, caulk joints, touch up paint if needed, and ensure all details are completed to our high standards.',
            details: [
                'Interior and exterior trim installation',
                'Joint caulking and finishing',
                'Paint touch-up if required',
                'Hardware adjustment and calibration'
            ],
            img: "/images/window/window-install/step5.webp"
        },
        {
            id: 'inspection',
            title: 'Quality Inspection & Testing',
            icon: MagnifyingGlassIcon,
            description: 'Every window installation undergoes thorough inspection and testing to ensure proper operation, energy efficiency, and building code compliance. We test operation, check seals, and verify all work meets our quality standards.',
            details: [
                'Operation testing and adjustment',
                'Seal integrity verification',
                'Energy efficiency testing',
                'Final quality inspection and cleanup'
            ],
            img: "/images/window/window-install/step6.webp"
        }
    ];

    const activeStepData = steps.find(step => step.id === activeStep);

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primaryblue text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Professional Window Installation Process
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Our Proven Window Installation Method
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Professional window installation requires systematic approach, specialized knowledge, and attention to detail.
                        Our certified installers follow a proven process that ensures optimal performance, energy efficiency, and long-lasting results.
                    </SecondaryText>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Step Selection */}
                    <div className="lg:col-span-1 space-y-4">
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${activeStep === step.id
                                    ? 'bg-primaryblue border-blue-600 text-white shadow-lg'
                                    : 'bg-white border-slate-200 text-slate-900 hover:border-blue-300 hover:shadow-md'
                                    }`}
                                onClick={() => setActiveStep(step.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${activeStep === step.id ? 'bg-white/20' : 'bg-slate-100'
                                        }`}>
                                        <span className={`text-sm font-bold ${activeStep === step.id ? 'text-white' : 'text-primaryblue'}`}>
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-sm">{step.title}</h3>
                                        {activeStep === step.id && (
                                            <div className="text-blue-200 text-xs mt-1">
                                                ✓ Currently Viewing
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Step Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative h-64 bg-slate-900">
                                <Image
                                    // src="/images/windows/window-installation/installation-process.webp"
                                    src={activeStepData?.img || "/images/windows/window-installation/installation-process.webp"}
                                    alt={`${activeStepData?.title} demonstration`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                {/* Step Badge */}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-primaryblue text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                        {activeStepData?.icon && <activeStepData.icon className="w-4 h-4 mr-2" />}
                                        Step {steps.findIndex(s => s.id === activeStep) + 1}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="bg-primaryblue p-3 rounded-xl">
                                        {activeStepData?.icon && <activeStepData.icon className="w-6 h-6 text-white" />}
                                    </div>
                                    <div className="flex-1">
                                        <HeaderText variant="default" className="text-slate-900 mb-2">
                                            {activeStepData?.title}
                                        </HeaderText>
                                        <p className="text-slate-600 leading-relaxed">
                                            {activeStepData?.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Step Details List */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-slate-900 mb-4">Key Activities:</h4>
                                    <div className="grid grid-cols-1 gap-3">
                                        {activeStepData?.details.map((detail, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-slate-700">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                                        <span>Installation Progress</span>
                                        <span>{Math.round(((steps.findIndex(s => s.id === activeStep) + 1) / steps.length) * 100)}% Complete</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                        <div
                                            className="bg-primaryblue h-2 rounded-full transition-all duration-300"
                                            style={{width: `${((steps.findIndex(s => s.id === activeStep) + 1) / steps.length) * 100}%`}}
                                        />
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => {
                                            const currentIndex = steps.findIndex(s => s.id === activeStep);
                                            if (currentIndex > 0) {
                                                setActiveStep(steps[currentIndex - 1].id);
                                            }
                                        }}
                                        disabled={steps.findIndex(s => s.id === activeStep) === 0}
                                        className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous Step
                                    </button>
                                    <button
                                        onClick={() => {
                                            const currentIndex = steps.findIndex(s => s.id === activeStep);
                                            if (currentIndex < steps.length - 1) {
                                                setActiveStep(steps[currentIndex + 1].id);
                                            }
                                        }}
                                        disabled={steps.findIndex(s => s.id === activeStep) === steps.length - 1}
                                        className="px-4 py-2 text-sm bg-primaryblue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-16">
                    <SecondaryText className="text-slate-600 mb-6">
                        Professional window installation requires expertise, specialized tools, and attention to detail.
                        Our certified installers follow this proven process to ensure optimal performance and longevity.
                    </SecondaryText>
                    <a
                        href="/estimate"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                    >
                        Schedule Professional Window Installation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WindowInstallationProcess;