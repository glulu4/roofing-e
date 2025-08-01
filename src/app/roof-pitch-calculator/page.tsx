import {Metadata} from 'next';
import {Calculator, Home} from 'lucide-react';
import RoofPitchCalculatorClient from '@/components/PitchCalc';

// Export metadata for SEO
export const metadata: Metadata = {
    title: 'Roof Pitch Calculator | Calculate Roof Slope & Angle',
    description: 'Calculate your roof pitch, angle, and slope with our professional roofing calculator. Get instant results for rise/run, degrees, and percentage.',
    keywords: [
        'roof pitch calculator',
        'roof slope calculator',
        'roof angle calculator',
        'roofing calculator',
        'rise over run calculator',
        'roof pitch chart',
        'roofing tools',
        'Philadelphia roofer',
        'roof measurement',
        'roofing contractor'
    ],
    openGraph: {
        title: 'Roof Pitch Calculator - Paragon Exterior',
        description: 'Professional roof pitch calculator. Calculate roof slope, angle, and pitch notation instantly. Tool by Paragon Exterior roofing contractors.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Paragon Exterior',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roof Pitch Calculator - Paragon Exterior',
        description: 'Calculate your roof pitch, angle, and slope with our professional roofing calculator. Get instant results and expert advice.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

};

// Static page component (server-side)
export default function RoofPitchCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Server-side rendered */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Calculator className="w-16 h-16 text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Roof Pitch Calculator
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Calculate your roof pitch, angle, and slope with our professional roofing calculator
                        </p>
                        <div className="mt-6 inline-flex items-center bg-blue-800 rounded-full px-6 py-2">
                            <Home className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Tool by Paragon Exterior</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client-side interactive component */}
            <RoofPitchCalculatorClient />
        </div>
    );
}