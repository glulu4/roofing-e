export interface RoofMaterial {
  name: string;
  averageLifespan: number; // in years
  minLifespan: number;
  maxLifespan: number;
  description: string;
  popularIn: string[];
}

export interface ClimateAdjustment {
  name: string;
  code: string;
  temperatureFactor: number; // multiplier for temperature effects
  moistureFactor: number; // multiplier for moisture/humidity effects
  windFactor: number; // multiplier for wind effects
  overallFactor: number; // combined adjustment factor
  description: string;
}

export interface StateClimate {
  state: string;
  code: string;
  climateZone: string;
  adjustment: ClimateAdjustment;
}