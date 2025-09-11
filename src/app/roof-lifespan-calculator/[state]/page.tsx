import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Clock, Home, MapPin, Thermometer, Droplets, Wind} from 'lucide-react';
import Link from 'next/link';
import RoofLifespanCalculatorClient from '@/components/RoofLifespanCalc';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';
import RoofInspectionCTA from '@/components/RoofInspectionCTA';
import {
    roofMaterials,
    stateClimates,
    getStateClimate,
    calculateAdjustedLifespan,
    StateClimate,
    popularStates
} from '@/data';

interface Params {
    state: string;
}

interface Props {
    params: Promise<Params>;
}

// Generate static params for popular states
export async function generateStaticParams() {
    return popularStates.map(state => ({
        state: state.toLowerCase().replace(/\s+/g, '-')
    }));
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
    
    if (!state) {
        return {
            title: 'Roof Lifespan Calculator | Paragon Exterior',
            description: 'Calculate roof lifespan by location'
        };
    }

    return {
        title: {
            absolute: `${state.state} Roof Lifespan Calculator | How Long Do Roofs Last?`,
        },
        description: `Calculate roof lifespan in ${state.state}'s ${state.climateZone.toLowerCase()} climate. See how local weather affects different roofing materials.`,
        keywords: [
            `${state.state.toLowerCase()} roof lifespan`,
            `how long do roofs last ${state.state.toLowerCase()}`,
            `${state.state.toLowerCase()} roof replacement`,
            `${state.state.toLowerCase()} roofing materials`,
            'roof lifespan calculator',
            `${state.state.toLowerCase()} climate roof impact`,
            `${state.state.toLowerCase()} roofer`
        ],
        openGraph: {
            title: `${state.state} Roof Lifespan Calculator - Paragon Exterior`,
            description: `See how ${state.state}'s climate affects roof lifespan. Professional calculator for planning roof maintenance and replacement.`,
            type: 'website',
        },
    };
}

export default async function StateRoofCalculatorPage({ params }: Props) {
    const resolvedParams = await params;
    const state = findStateBySlug(resolvedParams.state);
    
    if (!state) {
        notFound();
    }

    // Calculate lifespans for popular materials in this state
    const materialComparisons = roofMaterials.slice(0, 6).map(material => ({
        material,
        adjusted: calculateAdjustedLifespan(material, state.adjustment)
    }));

    const getClimateIcon = (climateZone: string) => {
        if (climateZone.toLowerCase().includes('hot')) {
            return <Thermometer className="w-6 h-6 text-red-500" />;
        } else if (climateZone.toLowerCase().includes('cold')) {
            return <Thermometer className="w-6 h-6 text-blue-500" />;
        } else if (climateZone.toLowerCase().includes('coastal')) {
            return <Wind className="w-6 h-6 text-blue-600" />;
        } else if (climateZone.toLowerCase().includes('humid') || climateZone.toLowerCase().includes('wet')) {
            return <Droplets className="w-6 h-6 text-blue-400" />;
        }
        return <MapPin className="w-6 h-6 text-green-500" />;
    };

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
                            {state.state} Roof Lifespan Calculator
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-6">
                            See how {state.state}&apos;s {state.climateZone.toLowerCase()} climate affects different roofing materials
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="inline-flex items-center bg-blue-800 rounded-full px-4 py-2">
                                {getClimateIcon(state.climateZone)}
                                <span className="ml-2">{state.climateZone}</span>
                            </div>
                            <div className="inline-flex items-center bg-blue-800 rounded-full px-4 py-2">
                                <Home className="w-4 h-4 mr-2" />
                                <span>Climate-Adjusted Calculations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Material Comparison Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <HeaderText>
                        Roof Material Lifespans in {state.state}
                    </HeaderText>
                    
                    <SecondaryText>
                        {state.state}&apos;s {state.climateZone.toLowerCase()} climate creates specific challenges for roofing materials. {state.adjustment.description} Here&apos;s how popular roofing materials perform in your local conditions:
                    </SecondaryText>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {materialComparisons.map(({ material, adjusted }) => {
                            const materialSlug = material.name.toLowerCase()
                                .replace(/[()]/g, '')
                                .replace(/\s+/g, '-')
                                .replace(/\//g, '-');
                            
                            return (
                                <Link
                                    key={material.name}
                                    href={`/roof-lifespan-calculator/${resolvedParams.state}/${materialSlug}`}
                                    className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-colors duration-200 border border-gray-200 hover:border-blue-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                                            {material.name}
                                        </h3>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {adjusted.adjustedAverage}
                                            </div>
                                            <div className="text-sm text-gray-500">years</div>
                                        </div>
                                    </div>
                                    
                                    <div className="text-sm text-gray-600 mb-4">
                                        {material.description}
                                    </div>
                                    
                                    <div className="flex justify-between text-sm">
                                        <div>
                                            <span className="text-gray-500">Range:</span>
                                            <span className="font-medium ml-1">
                                                {adjusted.adjustedMin}-{adjusted.adjustedMax} yrs
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">vs Base:</span>
                                            <span className="font-medium ml-1 text-red-600">
                                                -{adjusted.reductionYears} yrs
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Climate Impact Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                        <HeaderText>
                            How {state.state}&apos;s Climate Affects Your Roof
                        </HeaderText>

                        <SecondaryText>
                            <strong>Climate Zone:</strong> {state.climateZone}<br/>
                            <strong>Primary Challenge:</strong> {state.adjustment.description}<br/><br/>

                            {state.adjustment.code === 'hot-humid' && (
                                <>
                                    <strong>Hot & Humid Climate Impact:</strong><br/>
                                    • High temperatures accelerate material aging and UV degradation<br/>
                                    • Humidity promotes mold, algae, and rot in organic materials<br/>
                                    • Frequent storms and high winds stress roofing systems<br/>
                                    • Thermal expansion/contraction cycles cause material fatigue<br/>
                                    • Average lifespan reduction: 15-20%<br/>
                                </>
                            )}
                            
                            {state.adjustment.code === 'hot-dry' && (
                                <>
                                    <strong>Hot & Dry Climate Impact:</strong><br/>
                                    • Extreme heat causes materials to become brittle over time<br/>
                                    • Intense UV radiation degrades asphalt and synthetic materials<br/>
                                    • Large temperature swings between day and night create stress<br/>
                                    • Low humidity prevents some moisture-related issues<br/>
                                    • Average lifespan reduction: 10-15%<br/>
                                </>
                            )}
                            
                            {state.adjustment.code === 'cold-wet' && (
                                <>
                                    <strong>Cold & Wet Climate Impact:</strong><br/>
                                    • Freeze-thaw cycles can crack and damage roofing materials<br/>
                                    • Heavy snow loads stress structural components<br/>
                                    • Ice dams can cause water backup and interior damage<br/>
                                    • Persistent moisture promotes rot and deterioration<br/>
                                    • Average lifespan reduction: 10-20%<br/>
                                </>
                            )}
                            
                            {state.adjustment.code === 'cold-dry' && (
                                <>
                                    <strong>Cold & Dry Climate Impact:</strong><br/>
                                    • Freeze-thaw cycles affect material integrity<br/>
                                    • High winds and storms are common<br/>
                                    • Large temperature variations cause expansion/contraction<br/>
                                    • Lower humidity reduces some types of deterioration<br/>
                                    • Average lifespan reduction: 5-10%<br/>
                                </>
                            )}
                            
                            {state.adjustment.code === 'coastal' && (
                                <>
                                    <strong>Coastal Climate Impact:</strong><br/>
                                    • Salt air is highly corrosive to metal components<br/>
                                    • High winds from ocean storms create additional stress<br/>
                                    • Humidity and moisture accelerate deterioration<br/>
                                    • Storm surge and hurricane damage risks<br/>
                                    • Average lifespan reduction: 15-25%<br/>
                                </>
                            )}
                            
                            {state.adjustment.code === 'temperate' && (
                                <>
                                    <strong>Temperate Climate Benefits:</strong><br/>
                                    • Moderate temperatures reduce thermal stress<br/>
                                    • Balanced moisture levels prevent extreme conditions<br/>
                                    • Less severe weather events mean longer material life<br/>
                                    • Most roofing materials perform at or near expected lifespans<br/>
                                    • Minimal climate-related lifespan reduction<br/>
                                </>
                            )}
                        </SecondaryText>
                    </div>

                    <div className="space-y-6">
                        <RoofInspectionCTA />
                        
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                {state.state} Quick Facts
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                    {getClimateIcon(state.climateZone)}
                                    <span className="ml-2 font-medium">{state.climateZone}</span>
                                </div>
                                <div className="border-t pt-3">
                                    <p className="text-gray-600 mb-2">Average Impact:</p>
                                    <p className="font-semibold">
                                        {state.adjustment.overallFactor === 1.0 
                                            ? 'No reduction - ideal conditions' 
                                            : `${Math.round((1 - state.adjustment.overallFactor) * 100)}% lifespan reduction`
                                        }
                                    </p>
                                </div>
                                <div className="border-t pt-3">
                                    <p className="text-gray-600 mb-2">Best Materials:</p>
                                    <p className="text-xs">
                                        {materialComparisons
                                            .sort((a, b) => b.adjusted.adjustedAverage - a.adjusted.adjustedAverage)
                                            .slice(0, 2)
                                            .map(m => m.material.name.split('(')[0].trim())
                                            .join(', ')
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calculator Section */}
                <RoofLifespanCalculatorClient />
            </div>
        </div>
    );
}