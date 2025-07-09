"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    HomeIcon,
    Squares2X2Icon,
    RectangleStackIcon,
    PaintBrushIcon
} from '@heroicons/react/24/solid';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const VinylSidingStyles = () => {
    const [activeStyle, setActiveStyle] = useState('horizontal');

    const sidingStyles = [
        {
            id: 'horizontal',
            title: 'Traditional Horizontal Vinyl Siding',
            icon: RectangleStackIcon,
            description: `
            The classic choice for vinyl siding installation, horizontal vinyl siding offers timeless appeal with 
            modern performance. Available in various widths from 4" to 12", horizontal vinyl siding creates 
            clean lines that complement any architectural style while providing excellent weather protection.
            `,
            features: [
                'Multiple board widths available',
                'Easy installation and repair',
                'Classic, universally appealing look',
                'Excellent water drainage design',
                'Wide variety of textures and colors',
                'Most cost-effective vinyl siding option'
            ],
            image: '/images/siding/vinyl/horzontil.webp'
        },
        {
            id: 'vertical',
            title: 'Modern Vertical Vinyl Siding',
            icon: Squares2X2Icon,
            description: 'Vertical vinyl siding installation creates dramatic visual impact that makes homes appear taller and more contemporary. This trending vinyl siding style draws the eye upward and adds architectural interest that sets your home apart from traditional horizontal applications.',
            features: [
                'Creates illusion of height and grandeur',
                'Modern, contemporary aesthetic appeal',
                'Excellent for accent walls and features',
                'Unique neighborhood standout appearance',
                'Professional installation expertise required',
                'Can be combined with horizontal siding'
            ],
            image: '/images/siding/vinyl/vertical.webp'
        },
        {
            id: 'board-batten',
            title: 'Board and Batten Vinyl Siding',
            icon: HomeIcon,
            description: 'Board and batten vinyl siding combines rustic farmhouse charm with modern vinyl technology. This vinyl siding style features wide boards with narrow battens covering the seams, creating authentic texture and visual depth that mimics traditional wood construction.',
            features: [
                'Authentic farmhouse appearance',
                'Dimensional texture and visual depth',
                'Combines wide boards with narrow battens',
                'Excellent for cottage and rustic styles',
                'Low maintenance rustic beauty',
                'Available in various board widths'
            ],
            image: '/images/siding/vinyl/board-batten.webp'
        },
        {
            id: 'shake-shingle',
            title: 'Shake and Shingle Vinyl Siding',
            icon: PaintBrushIcon,
            description: 'Shake and shingle vinyl siding replicates the natural beauty of cedar shakes without the maintenance requirements. This premium vinyl siding option provides authentic texture, shadow lines, and visual interest that enhances architectural character.',
            features: [
                'Authentic cedar shake appearance',
                'Natural shadow lines and texture',
                'Premium architectural appeal',
                'Ideal for gables and accent areas',
                'Weather-resistant synthetic material',
                'No splitting, warping, or insect damage'
            ],
            image: '/images/siding/vinyl/shake-shingle.jpg'
        }
    ];

    const activeStyleData = sidingStyles.find(style => style.id === activeStyle);

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primaryblue text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        Vinyl Siding Styles
                    </div>
                    <HeaderText as="h2" className="md:text-5xl font-bold text-primaryblue mb-6">
                        Choose Your Perfect Vinyl Siding Style
                    </HeaderText>
                    <SecondaryText className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Vinyl siding installation offers versatile style options to match any architectural vision.
                        From classic horizontal to dramatic vertical applications, explore vinyl siding styles that transform your home.
                    </SecondaryText>
                </div>

                <div className="grid lg:grid-cols-4 gap-6 mb-12">
                    {/* Style Selection Buttons */}
                    {sidingStyles.map((style) => (
                        <button
                            key={style.id}
                            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${activeStyle === style.id
                                    ? 'bg-primaryblue border-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-white border-slate-200 text-slate-900 hover:border-blue-300 hover:shadow-md'
                                }`}
                            onClick={() => setActiveStyle(style.id)}
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className={`flex-shrink-0 p-2 rounded-lg ${activeStyle === style.id ? 'bg-white/20' : 'bg-slate-100'
                                    }`}>
                                    <style.icon className="w-6 h-6" />
                                </div>
                                <HeaderText variant="small" className="text-sm font-bold truncate">
                                    {style.title}
                                </HeaderText>
                            </div>
                            {activeStyle === style.id && (
                                <div className="text-blue-200 text-xs">
                                    ✓ Currently Selected
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Detailed Style View */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Image Section */}
                        <div className="relative h-80 lg:h-auto">
                            <Image
                                src={activeStyleData?.image || '/images/siding/vinyl-styles/default.webp'}
                                alt={`${activeStyleData?.title} example`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            {/* Style Badge */}
                            <div className="absolute top-4 left-4">
                                <div className="bg-primaryblue text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    {activeStyleData?.icon && <activeStyleData.icon className="w-4 h-4 mr-2" />}
                                    Popular Choice
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12">
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="bg-primaryblue p-3 rounded-xl">
                                    {activeStyleData?.icon && <activeStyleData.icon className="w-6 h-6 text-white" />}
                                </div>
                                <div className="flex-1">
                                    <HeaderText variant="default" className="text-slate-900 mb-2">
                                        {activeStyleData?.title}
                                    </HeaderText>
                                    <p className="text-slate-600 leading-relaxed">
                                        {activeStyleData?.description}
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="mb-8">
                                <h4 className="font-bold text-slate-900 mb-4">Key Features:</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {activeStyleData?.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-primaryblue hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                                Get Free {activeStyleData?.title} Estimate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-16">
                    <SecondaryText className="text-slate-600 mb-6">
                        Not sure which vinyl siding style is right for your home? Our vinyl siding experts provide
                        free consultations to help you choose the perfect style, color, and material for your specific needs.
                    </SecondaryText>
                    <a
                        href="/estimate"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-200"
                    >
                        Schedule Free Vinyl Siding Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VinylSidingStyles;




// Vinyl Siding FAQ Component
