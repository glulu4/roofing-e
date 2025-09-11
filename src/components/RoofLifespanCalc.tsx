"use client"
import React, { useState, useEffect } from 'react';
import { Calculator, Home, Clock, AlertTriangle, CheckCircle, Info, TrendingUp, MapPin } from 'lucide-react';
import RoofInspectionCTA from '@/components/RoofInspectionCTA';
import { 
  roofMaterials, 
  stateClimates, 
  getStateClimate, 
  calculateAdjustedLifespan, 
  assessRoofCondition,
  RoofMaterial,
  StateClimate
} from '@/data';

interface CalculationResults {
  selectedMaterial: RoofMaterial;
  selectedState: StateClimate;
  roofAge: number;
  adjustedLifespan: {
    adjustedAverage: number;
    adjustedMin: number;
    adjustedMax: number;
    reductionYears: number;
    reductionPercent: number;
  };
  condition: {
    status: 'excellent' | 'good' | 'fair' | 'poor' | 'replacement-needed';
    description: string;
    urgency: 'low' | 'medium' | 'high' | 'urgent';
    remainingYears: number;
    percentUsed: number;
  };
}

const RoofLifespanCalculatorClient: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [roofAge, setRoofAge] = useState<string>('');
  const [results, setResults] = useState<CalculationResults | null>(null);

  // Calculate lifespan when inputs change
  useEffect(() => {
    if (!selectedMaterial || !selectedState || !roofAge) {
      setResults(null);
      return;
    }

    const material = roofMaterials.find(m => m.name === selectedMaterial);
    const state = getStateClimate(selectedState);
    const age = parseInt(roofAge);

    if (!material || !state || isNaN(age) || age < 0) {
      setResults(null);
      return;
    }

    const adjustedLifespan = calculateAdjustedLifespan(material, state.adjustment);
    const condition = assessRoofCondition(age, adjustedLifespan.adjustedAverage);

    setResults({
      selectedMaterial: material,
      selectedState: state,
      roofAge: age,
      adjustedLifespan,
      condition
    });
  }, [selectedMaterial, selectedState, roofAge]);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-green-500';
      case 'fair': return 'text-yellow-600';
      case 'poor': return 'text-orange-600';
      case 'replacement-needed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getUrgencyColor = (urgency: string): string => {
    switch (urgency) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProgressBarColor = (percentUsed: number): string => {
    if (percentUsed <= 25) return 'bg-green-500';
    if (percentUsed <= 50) return 'bg-yellow-500';
    if (percentUsed <= 75) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const clearCalculator = (): void => {
    setSelectedMaterial('');
    setSelectedState('');
    setRoofAge('');
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
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Calculate Roof Lifespan</h2>
              </div>

              {/* Input Fields */}
              <div className="space-y-6 mb-8">
                {/* Roof Material Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roof Material Type
                  </label>
                  <select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your roof material...</option>
                    {roofMaterials.map((material) => (
                      <option key={material.name} value={material.name}>
                        {material.name} (Avg: {material.averageLifespan} years)
                      </option>
                    ))}
                  </select>
                  {selectedMaterial && (
                    <p className="text-xs text-gray-500 mt-1">
                      {roofMaterials.find(m => m.name === selectedMaterial)?.description}
                    </p>
                  )}
                </div>

                {/* State Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your State (Climate Zone)
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your state...</option>
                    {stateClimates.map((state) => (
                      <option key={state.code} value={state.state}>
                        {state.state} - {state.climateZone}
                      </option>
                    ))}
                  </select>
                  {selectedState && (() => {
                    const state = getStateClimate(selectedState);
                    return state ? (
                      <p className="text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {state.adjustment.description}
                      </p>
                    ) : null;
                  })()}
                </div>

                {/* Roof Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Roof Age (years)
                  </label>
                  <input
                    type="number"
                    value={roofAge}
                    onChange={(e) => setRoofAge(e.target.value)}
                    placeholder="Enter roof age in years"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="150"
                  />
                  <p className="text-xs text-gray-500 mt-1">How many years since your roof was installed?</p>
                </div>
              </div>

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
                    <h3 className="text-xl font-bold text-gray-900">Lifespan Analysis Results</h3>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-600">Expected Lifespan</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {results.adjustedLifespan.adjustedAverage} years
                      </div>
                      <div className="text-xs text-gray-500">
                        ({results.adjustedLifespan.adjustedMin}-{results.adjustedLifespan.adjustedMax} range)
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-600">Remaining Years</div>
                      <div className="text-2xl font-bold text-green-600">
                        {results.condition.remainingYears}
                      </div>
                      <div className="text-xs text-gray-500">Estimated remaining</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-600">Age vs Lifespan</div>
                      <div className="text-2xl font-bold text-orange-600">
                        {results.condition.percentUsed}%
                      </div>
                      <div className="text-xs text-gray-500">Life used</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-600">Climate Impact</div>
                      <div className="text-2xl font-bold text-red-600">
                        -{results.adjustedLifespan.reductionYears}
                      </div>
                      <div className="text-xs text-gray-500">Years reduction</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Roof Lifespan Progress</span>
                      <span className="text-sm text-gray-500">
                        {results.roofAge} of {results.adjustedLifespan.adjustedAverage} years
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full transition-all duration-500 ${getProgressBarColor(results.condition.percentUsed)}`}
                        style={{ width: `${Math.min(results.condition.percentUsed, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Roof Condition Assessment */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Info className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-900">Current Roof Condition</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(results.condition.urgency)}`}>
                        {results.condition.urgency.charAt(0).toUpperCase() + results.condition.urgency.slice(1)} Priority
                      </span>
                    </div>
                    
                    <div className={`text-xl font-bold ${getStatusColor(results.condition.status)} mb-2`}>
                      {results.condition.status.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </div>
                    
                    <p className="text-gray-700">
                      {results.condition.description}
                    </p>

                    {/* Climate Impact Details */}
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Climate Impact Analysis</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Climate Zone:</strong> {results.selectedState.climateZone}</p>
                        <p><strong>Base Lifespan:</strong> {results.selectedMaterial.averageLifespan} years</p>
                        <p><strong>Climate Adjusted:</strong> {results.adjustedLifespan.adjustedAverage} years ({results.adjustedLifespan.reductionPercent}% reduction)</p>
                        <p><strong>Impact Factor:</strong> {results.selectedState.adjustment.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Material Comparison */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Lifespan Guide</h3>
              <div className="space-y-3">
                {roofMaterials.slice(0, 6).map((material, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900 text-sm">{material.name}</span>
                      <span className="text-blue-600 font-bold">{material.averageLifespan}yr</span>
                    </div>
                    <div className="text-xs text-gray-500">{material.description}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Range: {material.minLifespan}-{material.maxLifespan} years
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Climate Zones */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Climate Impact Zones</h3>
              <div className="space-y-4">
                <div className="p-3 border-l-4 border-red-500 bg-red-50">
                  <div className="font-semibold text-red-800">Hot & Humid</div>
                  <div className="text-sm text-red-600">~20% lifespan reduction</div>
                  <div className="text-xs text-red-500">Heat, humidity, storms</div>
                </div>
                <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                  <div className="font-semibold text-orange-800">Hot & Dry</div>
                  <div className="text-sm text-orange-600">~10% lifespan reduction</div>
                  <div className="text-xs text-orange-500">High heat, UV exposure</div>
                </div>
                <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                  <div className="font-semibold text-yellow-800">Cold & Wet</div>
                  <div className="text-sm text-yellow-600">~15% lifespan reduction</div>
                  <div className="text-xs text-yellow-500">Freeze-thaw, moisture</div>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-semibold text-blue-800">Coastal</div>
                  <div className="text-sm text-blue-600">~20% lifespan reduction</div>
                  <div className="text-xs text-blue-500">Salt air, high winds</div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="font-semibold text-green-800">Temperate</div>
                  <div className="text-sm text-green-600">Baseline lifespan</div>
                  <div className="text-xs text-green-500">Moderate conditions</div>
                </div>
              </div>
            </div>

            {/* Dynamic CTA based on results */}
            {results ? (
              <RoofInspectionCTA
                variant={results.condition.urgency === 'urgent' ? 'urgent' : results.condition.urgency === 'high' ? 'maintenance' : 'default'}
                urgency={results.condition.urgency}
                remainingYears={results.condition.remainingYears}
              />
            ) : (
              <RoofInspectionCTA />
            )}
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Roof Lifespan Matters</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Understanding your roof&apos;s expected lifespan helps you plan maintenance, budget for replacement, and make informed decisions about repairs vs. replacement.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Plan for major home expenses</li>
                <li>Optimize maintenance schedules</li>
                <li>Make informed repair vs. replace decisions</li>
                <li>Understand warranty coverage periods</li>
                <li>Increase property value with timely upgrades</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Roof Life</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-semibold text-gray-900">Climate & Weather</div>
                <div className="text-sm text-gray-600">Temperature extremes, precipitation, wind, and storms</div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="font-semibold text-gray-900">Installation Quality</div>
                <div className="text-sm text-gray-600">Professional installation vs. DIY or poor workmanship</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold text-gray-900">Maintenance</div>
                <div className="text-sm text-gray-600">Regular inspections, cleaning, and preventive repairs</div>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold text-gray-900">Material Quality</div>
                <div className="text-sm text-gray-600">Grade of materials and manufacturer warranties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoofLifespanCalculatorClient;