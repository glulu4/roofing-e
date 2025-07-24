"use client"
import React, {useState, useEffect} from 'react';
import {Calculator, Ruler, Home, Info, AlertCircle, CheckCircle} from 'lucide-react';

// Type definitions
type CalculationMethod = 'rise-run' | 'angle';

interface RoofResults {
    pitch: string;
    degrees: string;
    percent: string;
    ratio: string;
    pitchNotation: string;
    rise: number;
    run: number;
}

interface RoofTypeInfo {
    type: string;
    color: string;
    description: string;
}

interface PitchExample {
    name: string;
    pitch: string;
    degrees: string;
    description: string;
}

interface MeasurementStep {
    step: number;
    title: string;
    description: string;
}

const RoofPitchCalculatorClient: React.FC = () => {
    const [rise, setRise] = useState<string>('');
    const [run, setRun] = useState<string>('');
    const [angle, setAngle] = useState<string>('');
    const [calculationMethod, setCalculationMethod] = useState<CalculationMethod>('rise-run');
    const [results, setResults] = useState<RoofResults | null>(null);

    // Calculate roof pitch based on inputs
    useEffect(() => {
        const calculateFromRiseRun = (): void => {
            if (!rise || !run) return;

            const riseNum = +rise;
            const runNum = +run;

            if (isNaN(riseNum) || isNaN(runNum) || riseNum <= 0 || runNum <= 0) {
                setResults(null);
                return;
            }

            const pitch = riseNum / runNum;
            const degrees = Math.atan(pitch) * (180 / Math.PI);
            const percent = pitch * 100;
            const ratio = `${riseNum}:${runNum}`;
            const pitchNotation = `${Math.round((riseNum / runNum) * 12)}/12`;

            setResults({
                pitch: pitch.toFixed(4),
                degrees: degrees.toFixed(2),
                percent: percent.toFixed(2),
                ratio,
                pitchNotation,
                rise: riseNum,
                run: runNum
            });
        };

        const calculateFromAngle = (): void => {
            if (!angle) return;

            const angleNum = +angle;

            if (isNaN(angleNum) || angleNum <= 0 || angleNum >= 90) {
                setResults(null);
                return;
            }

            const radians = angleNum * (Math.PI / 180);
            const pitch = Math.tan(radians);
            const percent = pitch * 100;
            const calculatedRise = Math.tan(radians) * 12;
            const ratio = `${calculatedRise.toFixed(2)}:12`;
            const pitchNotation = `${Math.round(calculatedRise)}/12`;

            setResults({
                pitch: pitch.toFixed(4),
                degrees: angleNum.toFixed(2),
                percent: percent.toFixed(2),
                ratio,
                pitchNotation,
                rise: +(calculatedRise.toFixed(2)),
                run: 12
            });
        };

        if (calculationMethod === 'rise-run') {
            calculateFromRiseRun();
        } else if (calculationMethod === 'angle') {
            calculateFromAngle();
        } else {
            setResults(null);
        }
    }, [rise, run, angle, calculationMethod]);

    const getRoofType = (degrees: string): RoofTypeInfo => {
        const deg = +degrees;
        if (deg < 10) return {
            type: 'Low Slope',
            color: 'text-blue-600',
            description: 'Typically requires special membrane roofing'
        };
        if (deg < 30) return {
            type: 'Standard Pitch',
            color: 'text-green-600',
            description: 'Most common residential roofing'
        };
        if (deg < 45) return {
            type: 'Steep Pitch',
            color: 'text-orange-600',
            description: 'Traditional steep roofing, excellent drainage'
        };
        return {
            type: 'Very Steep',
            color: 'text-red-600',
            description: 'Specialized installation required'
        };
    };

    const pitchExamples: PitchExample[] = [
        {name: 'Flat Roof', pitch: '1/12', degrees: '4.8°', description: 'Commercial buildings, modern homes'},
        {name: 'Low Pitch', pitch: '3/12', degrees: '14.0°', description: 'Ranch homes, contemporary design'},
        {name: 'Standard Pitch', pitch: '6/12', degrees: '26.6°', description: 'Most common residential pitch'},
        {name: 'Steep Pitch', pitch: '9/12', degrees: '36.9°', description: 'Traditional colonial, Tudor styles'},
        {name: 'Very Steep', pitch: '12/12', degrees: '45.0°', description: 'Victorian, Gothic styles'}
    ];

    const measurementSteps: MeasurementStep[] = [
        {
            step: 1,
            title: 'Measure the Run',
            description: 'Mark a level 12-inch horizontal distance from the roof edge'
        },
        {
            step: 2,
            title: 'Measure the Rise',
            description: 'Measure vertically from that point to the roof surface'
        },
        {
            step: 3,
            title: 'Calculate Pitch',
            description: 'The rise over 12 inches of run gives you the pitch'
        }
    ];

    const clearCalculator = (): void => {
        setRise('');
        setRun('');
        setAngle('');
        setResults(null);
    };

    const handleRiseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setRise(e.target.value);
    };

    const handleRunChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setRun(e.target.value);
    };

    const handleAngleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAngle(e.target.value);
    };

    const handleMethodChange = (method: CalculationMethod): void => {
        setCalculationMethod(method);
        // Clear inputs when switching methods
        setRise('');
        setRun('');
        setAngle('');
        setResults(null);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Calculator Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Ruler className="w-8 h-8 text-blue-600 mr-3" />
                                <h2 className="text-3xl font-bold text-gray-900">Calculate Roof Pitch</h2>
                            </div>

                            {/* Calculation Method Selector */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Calculation Method
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => handleMethodChange('rise-run')}
                                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${calculationMethod === 'rise-run'
                                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="text-lg font-semibold">Rise & Run</div>
                                        <div className="text-sm text-gray-600">Enter vertical rise and horizontal run</div>
                                    </button>
                                    <button
                                        onClick={() => handleMethodChange('angle')}
                                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${calculationMethod === 'angle'
                                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="text-lg font-semibold">Angle</div>
                                        <div className="text-sm text-gray-600">Enter roof angle in degrees</div>
                                    </button>
                                </div>
                            </div>

                            {/* Input Fields */}
                            {calculationMethod === 'rise-run' ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Rise (inches)
                                        </label>
                                        <input
                                            type="number"
                                            value={rise}
                                            onChange={handleRiseChange}
                                            placeholder="Enter rise"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            min="0.1"
                                            step="0.1"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Vertical measurement</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Run (inches)
                                        </label>
                                        <input
                                            type="number"
                                            value={run}
                                            onChange={handleRunChange}
                                            placeholder="Enter run (typically 12)"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            min="0.1"
                                            step="0.1"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Horizontal measurement</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Roof Angle (degrees)
                                    </label>
                                    <input
                                        type="number"
                                        value={angle}
                                        onChange={handleAngleChange}
                                        placeholder="Enter angle in degrees"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        max="89"
                                        min="0.1"
                                        step="0.1"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Enter value between 0.1° and 89°</p>
                                </div>
                            )}

                            <button
                                onClick={clearCalculator}
                                className="mb-6 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                Clear Calculator
                            </button>

                            {/* Results */}
                            {results && (
                                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-900">Calculation Results</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white rounded-lg p-4 shadow-sm">
                                            <div className="text-sm text-gray-600">Pitch Notation</div>
                                            <div className="text-2xl font-bold text-blue-600">{results.pitchNotation}</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 shadow-sm">
                                            <div className="text-sm text-gray-600">Angle</div>
                                            <div className="text-2xl font-bold text-green-600">{results.degrees}°</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 shadow-sm">
                                            <div className="text-sm text-gray-600">Slope %</div>
                                            <div className="text-2xl font-bold text-orange-600">{results.percent}%</div>
                                        </div>
                                    </div>

                                    {/* Roof Type Classification */}
                                    {(() => {
                                        const roofType = getRoofType(results.degrees);
                                        return (
                                            <div className={`bg-white rounded-lg p-4 border-l-4 border-blue-500`}>
                                                <div className="flex items-center mb-2">
                                                    <Info className="w-5 h-5 text-blue-500 mr-2" />
                                                    <span className="font-semibold text-gray-900">Roof Classification</span>
                                                </div>
                                                <div className={`text-lg font-bold ${roofType.color} mb-1`}>
                                                    {roofType.type}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {roofType.description}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>

                        {/* Visual Representation */}
                        {results && (
                            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visual Representation</h3>
                                <div className="bg-gray-100 rounded-lg p-8 overflow-x-auto">
                                    <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto">
                                        {/* Ground line */}
                                        <line x1="50" y1="250" x2="350" y2="250" stroke="#666" strokeWidth="2" />

                                        {/* House base */}
                                        <rect x="100" y="200" width="200" height="50" fill="#e5e7eb" stroke="#6b7280" strokeWidth="1" />

                                        {/* Roof */}
                                        <polygon
                                            points={`100,200 200,${200 - ((results.rise) * 4)} 300,200`}
                                            fill="#dc2626"
                                            stroke="#991b1b"
                                            strokeWidth="2"
                                        />

                                        {/* Rise line */}
                                        <line
                                            x1="200"
                                            y1="200"
                                            x2="200"
                                            y2={200 - ((results.rise) * 4)}
                                            stroke="#2563eb"
                                            strokeWidth="3"
                                            strokeDasharray="5,5"
                                        />

                                        {/* Run line */}
                                        <line
                                            x1="200"
                                            y1="200"
                                            x2="300"
                                            y2="200"
                                            stroke="#16a34a"
                                            strokeWidth="3"
                                            strokeDasharray="5,5"
                                        />

                                        {/* Labels */}
                                        <text x="205" y={195 - ((results.rise) * 2)} fill="#2563eb" fontSize="12" fontWeight="bold">
                                            Rise: {results.rise}&quot;
                                        </text>
                                        <text x="240" y="215" fill="#16a34a" fontSize="12" fontWeight="bold">
                                            Run: {results.run}&quot;
                                        </text>
                                        <text x="150" y="170" fill="#dc2626" fontSize="14" fontWeight="bold">
                                            {results.degrees}°
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Common Pitch Examples */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Roof Pitches</h3>
                            <div className="space-y-3">
                                {pitchExamples.map((example, index) => (
                                    <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-semibold text-gray-900">{example.name}</span>
                                            <span className="text-blue-600 font-bold">{example.pitch}</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">{example.degrees}</div>
                                        <div className="text-xs text-gray-500">{example.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How to Measure */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Measure Roof Pitch</h3>
                            <div className="space-y-4">
                                {measurementSteps.map((step) => (
                                    <div key={step.step} className="flex items-start">
                                        <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                                            <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{step.title}</div>
                                            <div className="text-sm text-gray-600">{step.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">Need Professional Help?</h3>
                            <p className="text-blue-100 mb-4">
                                Our expert roofers can assess your roof pitch and recommend the best materials and installation methods.
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="/estimate"
                                    className="block w-full bg-amber-500 hover:bg-amber-600 text-center text-blue-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    Get Free Estimate
                                </a>
                                <a
                                    href="tel:2157997663"
                                    className="block w-full border border-blue-400 hover:bg-blue-600 text-center text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    Call (215) 799-7663
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Educational Content */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Roof Pitch Matters</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Roof pitch affects water drainage, snow load capacity, material choices, and overall aesthetics.
                                Understanding your roof&apos;s pitch is crucial for:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Selecting appropriate roofing materials</li>
                                <li>Ensuring proper water drainage</li>
                                <li>Meeting building code requirements</li>
                                <li>Planning for snow load capacity</li>
                                <li>Determining installation complexity and costs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Recommendations by Pitch</h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-red-500 pl-4">
                                <div className="font-semibold text-gray-900">Flat to Low Pitch (0° - 10°)</div>
                                <div className="text-sm text-gray-600">EPDM, TPO, Modified Bitumen, Built-up roofing</div>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-4">
                                <div className="font-semibold text-gray-900">Standard Pitch (10° - 30°)</div>
                                <div className="text-sm text-gray-600">Asphalt shingles, Metal roofing, Tile roofing</div>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4">
                                <div className="font-semibold text-gray-900">Steep Pitch (30°+)</div>
                                <div className="text-sm text-gray-600">All materials suitable, including specialty options</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoofPitchCalculatorClient;