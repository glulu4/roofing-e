"use client";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {
    ArrowUpIcon,
    SparklesIcon,
    EyeIcon,
    HomeModernIcon
} from '@heroicons/react/24/solid';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const VerticalSidingShowcase = () => {
    const [currentView, setCurrentView] = useState('horizontal');
    const [isAnimating, setIsAnimating] = useState(false);

    const viewOptions = [
        {
            id: 'horizontal',
            title: 'Traditional Horizontal',
            description: 'Conventional horizontal siding - familiar but ordinary',
            icon: HomeModernIcon,
            image: '/images/siding/siding-service/vertical-siding/vertical-siding-h.webp'
        },
        {
            id: 'vertical',
            title: 'Dramatic Vertical',
            description: 'Vertical siding transformation - bold and modern',
            icon: ArrowUpIcon,
            image: '/images/siding/siding-service/vertical-siding/vertical-siding.webp'
        },
        {
            id: 'mixed',
            title: 'Mixed Orientation',
            description: 'Combined vertical and horizontal - architectural artistry',
            icon: SparklesIcon,
            image: '/images/siding/siding-service/vertical-siding/mix.webp'
        }
    ];

    const handleViewChange = (viewId: string) => {
        if (viewId !== currentView) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentView(viewId);
                setIsAnimating(false);
            }, 300);
        }
    };

    const currentViewData = viewOptions.find(view => view.id === currentView);

    // Auto-cycle through views for demonstration
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = viewOptions.findIndex(view => view.id === currentView);
            const nextIndex = (currentIndex + 1) % viewOptions.length;
            handleViewChange(viewOptions[nextIndex].id);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentView, viewOptions, handleViewChange]);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-primaryblue to-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(255,255,255,0.1) 2px,
                        rgba(255,255,255,0.1) 4px
                    )`
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-amber-500 text-primaryblue px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Interactive Showcase
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-white mb-6">
                        See the Vertical Siding Difference
                    </HeaderText>
                    <SecondaryText className="text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Experience the dramatic transformation that vertical siding brings to home design.
                        Click through different orientations to see how vertical lines create stunning visual impact.
                    </SecondaryText>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-center">
                    {/* Control Panel */}
                    <div className="lg:col-span-2 space-y-4">
                        {viewOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${currentView === option.id
                                        ? 'bg-white border-amber-500 text-slate-900 shadow-2xl shadow-amber-500/20 scale-105'
                                        : 'bg-slate-800/50 border-slate-600 text-white hover:border-amber-400 hover:bg-slate-700/50'
                                    }`}
                                onClick={() => handleViewChange(option.id)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`flex-shrink-0 p-3 rounded-xl transition-colors duration-300 ${currentView === option.id
                                            ? 'bg-amber-500 text-white'
                                            : 'bg-slate-700 text-slate-300'
                                        }`}>
                                        <option.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1">{option.title}</h3>
                                        <p className={`text-sm ${currentView === option.id
                                                ? 'text-slate-600'
                                                : 'text-slate-400'
                                            }`}>
                                            {option.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Active indicator */}
                                {currentView === option.id && (
                                    <div className="mt-4 flex items-center text-amber-600">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse" />
                                        <span className="text-sm font-medium">Currently Viewing</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Benefits highlight for current view */}
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 mt-8">
                            <h4 className="text-white font-bold mb-4 flex items-center">
                                <SparklesIcon className="w-5 h-5 text-amber-400 mr-2" />
                                Key Benefits
                            </h4>
                            <div className="space-y-2">
                                {currentView === 'vertical' && (
                                    <>
                                        <div className="text-blue-200 text-sm">• Creates illusion of height</div>
                                        <div className="text-blue-200 text-sm">• Modern architectural appeal</div>
                                        <div className="text-blue-200 text-sm">• Distinctive neighborhood presence</div>
                                        <div className="text-blue-200 text-sm">• Excellent water drainage</div>
                                    </>
                                )}
                                {currentView === 'horizontal' && (
                                    <>
                                        <div className="text-blue-200 text-sm">• Traditional and familiar</div>
                                        <div className="text-blue-200 text-sm">• Widely accepted design</div>
                                        <div className="text-blue-200 text-sm">• Easy installation and repair</div>
                                        <div className="text-blue-200 text-sm">• Cost-effective option</div>
                                    </>
                                )}
                                {currentView === 'mixed' && (
                                    <>
                                        <div className="text-blue-200 text-sm">• Architectural sophistication</div>
                                        <div className="text-blue-200 text-sm">• Visual depth and interest</div>
                                        <div className="text-blue-200 text-sm">• Unique design flexibility</div>
                                        <div className="text-blue-200 text-sm">• Premium aesthetic appeal</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Image Display */}
                    <div className="lg:col-span-3">
                        <div className="relative">
                            {/* Main image container */}
                            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
                                }`}>
                                <Image
                                    src={currentViewData?.image || '/images/siding/showcase/default.webp'}
                                    alt={`${currentViewData?.title} siding example`}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

                                {/* Title overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                                        <h3 className="font-bold text-xl text-slate-900 mb-1">
                                            {currentViewData?.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            {currentViewData?.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Loading animation */}
                                {isAnimating && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-500 rounded-full opacity-60 animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000" />
                        </div>

                        {/* Progress indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {viewOptions.map((option) => (
                                <button
                                    key={option.id}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentView === option.id
                                            ? 'bg-amber-500 scale-125'
                                            : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    onClick={() => handleViewChange(option.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <SecondaryText className="mb-8 max-w-3xl mx-auto">
                        Ready to break away from ordinary horizontal siding? Let our vertical siding experts
                        help you create a home that stands out with dramatic architectural appeal.
                    </SecondaryText>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/estimate"
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200"
                        >
                            Get Free Vertical Siding Quote
                        </a>
                        <a
                            href="/contact"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
                        >
                            Design Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerticalSidingShowcase;