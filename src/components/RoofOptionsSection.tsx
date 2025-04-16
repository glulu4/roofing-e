import React from 'react';
import HeaderText from './HeaderText';
import SecondaryText from './SecondaryText';
import Image from 'next/image';

const roofOptions = [
    {
        title: 'Royal Sovereign® 3-Tab Shingles',
        subtitle: 'A Good Roof',
        description: 'These traditional 3-tab shingles provide reliable performance and timeless beauty at an affordable price point. They feature a Class A fire rating and a Micro Weave™ Core that resists cracking and splitting, ensuring long-term durability. Available in 13 different colors, they offer versatility to match various home styles.',
        imageUrl: '/images/royal-sovereign.jpg', // Replace with actual image paths
        features: [
            {label: 'Shingle', value: 'GAF Natural Shadow'},
            {label: 'Underlayment', value: '15lb Felt'},
            {label: 'Ridge Cap', value: 'GAF Seal-A-Ridge'},
            {label: 'Ridge Vent', value: 'GAF Snow Country'},
            {label: 'Ice & Water Shield', value: 'Tarco'},
            {label: 'Drip Edge', value: 'F5 Drip Edge'},
        ],
    },
    {
        title: 'Timberline® HDZ™ Architectural Shingles',
        subtitle: 'A Better Roof',
        description: "As North America's best-selling shingles, Timberline® HDZ™ offers a perfect blend of beauty and performance. Designed to resemble wood shakes, they come with LayerLock™ Technology for enhanced wind resistance and a StrikeZone™ nailing area for easier installation. These shingles are available in a wide array of colors to complement any home exterior.",
        imageUrl: '/images/timberline-hdz.jpg',
        features: [
            {label: 'Shingle', value: 'GAF Timberline HDZ'},
            {label: 'Underlayment', value: 'GAF FeltBuster'},
            {label: 'Ridge Cap', value: 'GAF TimberTex'},
            {label: 'Ridge Vent', value: 'GAF Snow Country'},
            {label: 'Ice & Water Shield', value: 'WeatherWatch'},
            {label: 'Drip Edge', value: 'F5 Drip Edge'},
            {label: 'Starter Strip', value: 'GAF ProStart'},
            {label: 'Pipe Boots', value: 'Lifetime'},
        ],
    },
    {
        title: 'Timberline® UHDZ™ Ultra High Definition Shingles',
        subtitle: 'The Best Roof',
        description: "For homeowners seeking a more pronounced dimensional look, Timberline® UHDZ™ shingles offer a thicker, ultra-dimensional wood-shake appearance. They feature a Dual Shadow Line for enhanced depth and a 30-year StainGuard Plus PRO™ Limited Warranty against blue-green algae discoloration. These premium shingles are available in several rich color blends.",
        imageUrl: '/images/timberline-uhdz.png',
        features: [
            {label: 'Shingle', value: 'GAF Designer Grade'},
            {label: 'Underlayment', value: 'GAF Deck Armor'},
            {label: 'Ridge Cap', value: 'GAF TimberTex'},
            {label: 'Ridge Vent', value: 'GAF Snow Country'},
            {label: 'Ice & Water Shield', value: 'WeatherWatch'},
            {label: 'Drip Edge', value: 'F5 Drip Edge'},
            {label: 'Starter Strip', value: 'WeatherBlocker'},
            {label: 'Pipe Boots', value: 'Lifetime'},
        ],
    },
    {
        title: 'Designer Shingles (e.g., Camelot® II)',
        subtitle: 'The SmartRoof',
        description: "GAF's Designer Shingles, such as the Camelot® II series, offer the ultimate in sophistication and architectural style. Mimicking the appearance of hand-cut European shingles, they provide a luxury look at an affordable price. These shingles come with advanced protection technology and are available in a selection of artisan-crafted color palettes.",
        imageUrl: '/images/royal-slate-gaf-roof-shingles-0692695-64_1000.jpg',
        features: [
            {label: 'Shingle', value: 'GAF Asphalt Shingle'},
            {label: 'Underlayment', value: 'GAF Deck Armor'},
            {label: 'Ridge Cap', value: 'GAF TimberTex'},
            {label: 'Ridge Vent', value: 'GAF Snow Country'},
            {label: 'Ice & Water Shield', value: 'WeatherWatch'},
            {label: 'Drip Edge', value: 'F5 Drip Edge'},
            {label: 'Starter Strip', value: 'WeatherBlocker'},
            {label: 'Pipe Boots', value: 'Lifetime'},
        ],
    },
];


export default function RoofOptionsSection() {
    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="text-center">
                <HeaderText variant='large'>Asphalt Shingles</HeaderText>
                <SecondaryText className="mt-4 text-lg text-gray-700">It’s as simple as good, better, best</SecondaryText>
            </div>
            <div className="mt-16 mx-auto grid w-5/6 grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {roofOptions.map((option) => (
                    <div key={option.title} className="border border-gray-200 rounded-lg shadow-sm p-6">
                        {/* <HeaderText className='pb-10' variant="small">{option.title}</HeaderText> */}

                        <div className="flex items-center justify-center h-32 py-3">
                            <HeaderText className=" text-center" variant="small">{option.title}</HeaderText>
                        </div>

                        <SecondaryText className="mt-2 text-sm font-medium text-gray-500">{option.subtitle}</SecondaryText>
                        <Image
                            width={500}
                            height={500}
                            src={option.imageUrl}
                            alt={option.title}
                            className="mt-4 h-40 w-full object-cover rounded-md"
                        />
                        <SecondaryText className="mt-4 text-gray-600">{option.description}</SecondaryText>
                        <ul className="mt-4 space-y-2">
                            {option.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-green-600">✔</span>
                                    <span className="text-gray-700 text-lg">
                                        <strong>{feature.label}:</strong> {feature.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
