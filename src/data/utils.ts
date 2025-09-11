import { RoofMaterial, StateClimate, ClimateAdjustment } from './types';
import { stateClimates } from './climateData';

// Utility function to get state climate data
export const getStateClimate = (stateName: string): StateClimate | undefined => {
  return stateClimates.find(state => 
    state.state.toLowerCase() === stateName.toLowerCase() ||
    state.code.toLowerCase() === stateName.toLowerCase()
  );
};

// Utility function to calculate adjusted lifespan
export const calculateAdjustedLifespan = (material: RoofMaterial, climate: ClimateAdjustment): {
  adjustedAverage: number;
  adjustedMin: number;
  adjustedMax: number;
  reductionYears: number;
  reductionPercent: number;
} => {
  const adjustedAverage = Math.round(material.averageLifespan * climate.overallFactor);
  const adjustedMin = Math.round(material.minLifespan * climate.overallFactor);
  const adjustedMax = Math.round(material.maxLifespan * climate.overallFactor);
  const reductionYears = material.averageLifespan - adjustedAverage;
  const reductionPercent = Math.round(((material.averageLifespan - adjustedAverage) / material.averageLifespan) * 100);
  
  return {
    adjustedAverage,
    adjustedMin,
    adjustedMax,
    reductionYears,
    reductionPercent
  };
};

// Utility function to assess roof condition based on age
export const assessRoofCondition = (roofAge: number, adjustedLifespan: number): {
  status: 'excellent' | 'good' | 'fair' | 'poor' | 'replacement-needed';
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  remainingYears: number;
  percentUsed: number;
} => {
  const percentUsed = Math.round((roofAge / adjustedLifespan) * 100);
  const remainingYears = Math.max(0, adjustedLifespan - roofAge);
  
  if (percentUsed <= 25) {
    return {
      status: 'excellent',
      description: 'Your roof is in excellent condition with many years of life remaining.',
      urgency: 'low',
      remainingYears,
      percentUsed
    };
  } else if (percentUsed <= 50) {
    return {
      status: 'good',
      description: 'Your roof is in good condition but should be monitored for wear.',
      urgency: 'low',
      remainingYears,
      percentUsed
    };
  } else if (percentUsed <= 75) {
    return {
      status: 'fair',
      description: 'Your roof is showing its age and should be inspected annually.',
      urgency: 'medium',
      remainingYears,
      percentUsed
    };
  } else if (percentUsed <= 100) {
    return {
      status: 'poor',
      description: 'Your roof is nearing the end of its expected lifespan and should be evaluated soon.',
      urgency: 'high',
      remainingYears,
      percentUsed
    };
  } else {
    return {
      status: 'replacement-needed',
      description: 'Your roof has exceeded its expected lifespan and should be replaced.',
      urgency: 'urgent',
      remainingYears,
      percentUsed
    };
  }
};