import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Clock, Home, MapPin, Calendar} from 'lucide-react';
import RoofLifespanCalculatorClient from '@/components/RoofLifespanCalc';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import RoofInspectionCTA from '@/components/RoofInspectionCTA';
import {
    roofMaterials,
    stateClimates,
    getStateClimate,
    calculateAdjustedLifespan,
    RoofMaterial,
    StateClimate,
    popularStates,
    popularMaterials
} from '@/data';

interface Params {
    state: string;
    material: string;
}

interface Props {
    params: Promise<Params>;
}

// Generate static params for SEO optimization
export async function generateStaticParams() {
    const params = [];
    
    // Create popular combinations for static generation
    for (const state of popularStates) {
        for (const material of popularMaterials) {
            params.push({
                state: state.toLowerCase().replace(/\s+/g, '-'),
                material: material.toLowerCase().replace(/\s+/g, '-')
            });
        }
    }
    
    return params;
}

// Helper function to find material by slug
function findMaterialBySlug(slug: string): RoofMaterial | undefined {
    const normalizedSlug = slug.toLowerCase().replace(/-/g, ' ');
    return roofMaterials.find(material => {
        const normalizedName = material.name.toLowerCase();
        return normalizedName.includes(normalizedSlug) || 
               normalizedSlug.includes(normalizedName) ||
               (normalizedSlug === 'asphalt-shingles' && normalizedName.includes('asphalt')) ||
               (normalizedSlug === 'metal-roofing' && normalizedName.includes('metal')) ||
               (normalizedSlug === 'clay-tiles' && normalizedName.includes('clay')) ||
               (normalizedSlug === 'concrete-tiles' && normalizedName.includes('concrete'));
    });
}

// Helper function to find state by slug
function findStateBySlug(slug: string): StateClimate | undefined {
    const normalizedSlug = slug.toLowerCase().replace(/-/g, ' ');
    return stateClimates.find(state => 
        state.state.toLowerCase().replace(/\s+/g, ' ') === normalizedSlug
    );
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const state = findStateBySlug(resolvedParams.state);
    const material = findMaterialBySlug(resolvedParams.material);
    
    if (!state || !material) {
        return {
            title: 'Roof Lifespan Calculator | Paragon Exterior',
            description: 'Calculate roof lifespan by material and location'
        };
    }

    const adjustedLifespan = calculateAdjustedLifespan(material, state.adjustment);
    const materialDisplayName = material.name.includes('(') 
        ? material.name.split('(')[0].trim() 
        : material.name;

    return {
        title: `${materialDisplayName} Roof Lifespan in ${state.state} | How Long Will It Last?`,
        description: `${materialDisplayName} roofs in ${state.state} last an average of ${adjustedLifespan.adjustedAverage} years. Calculate your roof's expected lifespan with our climate-adjusted calculator.`,
        keywords: [
            `${materialDisplayName.toLowerCase()} roof lifespan ${state.state.toLowerCase()}`,
            `how long does ${materialDisplayName.toLowerCase()} last ${state.state.toLowerCase()}`,
            `${state.state.toLowerCase()} roof replacement`,
            `${materialDisplayName.toLowerCase()} roofing ${state.state.toLowerCase()}`,
            'roof lifespan calculator',
            `${state.state.toLowerCase()} roofer`,
            `${state.state.toLowerCase()} roofing contractor`
        ],
        openGraph: {
            title: `${materialDisplayName} Roof Lifespan in ${state.state} - Paragon Exterior`,
            description: `${materialDisplayName} roofs in ${state.state} last ${adjustedLifespan.adjustedAverage} years on average. Climate-adjusted lifespan calculator by professional roofers.`,
            type: 'website',
        },
    };
}

export default async function StateMaterialRoofCalculatorPage({ params }: Props) {
    const resolvedParams = await params;
    const state = findStateBySlug(resolvedParams.state);
    const material = findMaterialBySlug(resolvedParams.material);
    
    if (!state || !material) {
        notFound();
    }

    const adjustedLifespan = calculateAdjustedLifespan(material, state.adjustment);
    const materialDisplayName = material.name.includes('(') 
        ? material.name.split('(')[0].trim() 
        : material.name;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <Clock className="w-16 h-16 text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {materialDisplayName} Roof Lifespan in {state.state}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-6">
                            {materialDisplayName} roofs in {state.state} last an average of <span className="font-bold text-amber-400">{adjustedLifespan.adjustedAverage} years</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="inline-flex items-center bg-blue-800 rounded-full px-4 py-2">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{state.climateZone}</span>
                            </div>
                            <div className="inline-flex items-center bg-blue-800 rounded-full px-4 py-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>Range: {adjustedLifespan.adjustedMin}-{adjustedLifespan.adjustedMax} years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {adjustedLifespan.adjustedAverage} Years
                        </div>
                        <div className="text-gray-600">Average Lifespan</div>
                        <div className="text-sm text-gray-500 mt-2">
                            Climate-adjusted for {state.state}
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                            -{adjustedLifespan.reductionYears} Years
                        </div>
                        <div className="text-gray-600">Climate Impact</div>
                        <div className="text-sm text-gray-500 mt-2">
                            vs. ideal conditions
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            {adjustedLifespan.adjustedMin}-{adjustedLifespan.adjustedMax}
                        </div>
                        <div className="text-gray-600">Expected Range</div>
                        <div className="text-sm text-gray-500 mt-2">
                            Depends on maintenance
                        </div>
                    </div>
                </div>

                {/* Location & Material Specific Info */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <HeaderText>
                        {materialDisplayName} Performance in {state.state}
                    </HeaderText>

                    <SecondaryText>
                        {materialDisplayName} is {material.popularIn.length > 0 ? 'popular in ' + material.popularIn.join(', ').toLowerCase() : 'a common roofing choice'} and {material.description.toLowerCase()}. In {state.state}&apos;s {state.climateZone.toLowerCase()} climate, this material faces specific challenges that affect its lifespan.<br/><br/>

                        <strong>Climate Impact in {state.state}:</strong><br/>
                        {state.adjustment.description} This results in approximately {adjustedLifespan.reductionPercent}% reduction in expected lifespan compared to ideal conditions, bringing the average from {material.averageLifespan} years down to {adjustedLifespan.adjustedAverage} years.<br/><br/>

                        <strong>What This Means for Your Roof:</strong><br/>
                        • Plan for replacement around year {Math.round(adjustedLifespan.adjustedAverage * 0.85)}-{adjustedLifespan.adjustedAverage}<br/>
                        • Schedule professional inspections every {adjustedLifespan.adjustedAverage > 30 ? '2-3' : '1-2'} years<br/>
                        • Budget approximately ${(adjustedLifespan.adjustedAverage > 30 ? '$15,000-$25,000' : '$10,000-$20,000')} for eventual replacement<br/>
                        • Consider preventive maintenance to maximize lifespan
                    </SecondaryText>
                </div>

                {/* CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Calculator */}
                        <RoofLifespanCalculatorClient />
                    </div>
                    
                    <div className="space-y-6">
                        <RoofInspectionCTA 
                            variant="default"
                            className="w-full"
                        />
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Local {state.state} Factors
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Climate Zone:</span>
                                    <span className="font-medium">{state.climateZone}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Avg. Reduction:</span>
                                    <span className="font-medium text-red-600">{adjustedLifespan.reductionPercent}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Base Lifespan:</span>
                                    <span className="font-medium">{material.averageLifespan} years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Adjusted:</span>
                                    <span className="font-medium text-green-600">{adjustedLifespan.adjustedAverage} years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}