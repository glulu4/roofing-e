import React from 'react';
import HeaderText from './HeaderText';
import SecondaryText from './SecondaryText';
import SecondaryHeader from './SecondaryHeader';

const roofOptions = [
    {
        title: 'Natural Shadow',
        subtitle: 'A Good Roof',
        description: 'Get the basic necessities of a good roof at an affordable price.',
        imageUrl: '/images/type1.jpg', // Replace with actual image paths
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
        title: 'GAF HDZ',
        subtitle: 'A Better Roof',
        description: 'Get a roof that will look great and last longer than a basic “good” roof all at a best-value price.',
        imageUrl: '/images/type2.jpg',
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
        title: 'Designer Grade',
        subtitle: 'The Best Roof',
        description: 'Do you want your house to be the envy of your neighbors? This is the roof for you.',
        imageUrl: '/images/type3.jpg',
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
        title: 'Roof + Solar',
        subtitle: 'The SmartRoof',
        description: 'Get an elegant, low-profile energy system that integrates directly with your newly replaced roof.',
        imageUrl: '/images/type4.jpg',
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
                        <HeaderText variant="small">{option.title}</HeaderText>
                        <SecondaryText className="mt-2 text-sm font-medium text-gray-500">{option.subtitle}</SecondaryText>
                        <img
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
