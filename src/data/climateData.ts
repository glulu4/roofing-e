import { ClimateAdjustment, StateClimate } from './types';

export const climateAdjustments: { [key: string]: ClimateAdjustment } = {
  "hot-dry": {
    name: "Hot & Dry",
    code: "hot-dry",
    temperatureFactor: 0.85,
    moistureFactor: 1.0,
    windFactor: 0.95,
    overallFactor: 0.9,
    description: "High heat and UV exposure reduce material lifespan"
  },
  "hot-humid": {
    name: "Hot & Humid",
    code: "hot-humid",
    temperatureFactor: 0.85,
    moistureFactor: 0.8,
    windFactor: 0.9,
    overallFactor: 0.8,
    description: "Heat, humidity, and storms significantly impact roof life"
  },
  "temperate": {
    name: "Temperate",
    code: "temperate",
    temperatureFactor: 1.0,
    moistureFactor: 0.95,
    windFactor: 1.0,
    overallFactor: 1.0,
    description: "Moderate climate with average wear conditions"
  },
  "cold-dry": {
    name: "Cold & Dry",
    code: "cold-dry",
    temperatureFactor: 0.9,
    moistureFactor: 1.0,
    windFactor: 0.9,
    overallFactor: 0.95,
    description: "Freeze-thaw cycles and wind cause moderate wear"
  },
  "cold-wet": {
    name: "Cold & Wet",
    code: "cold-wet",
    temperatureFactor: 0.9,
    moistureFactor: 0.85,
    windFactor: 0.85,
    overallFactor: 0.85,
    description: "Snow, ice, and moisture create challenging conditions"
  },
  "coastal": {
    name: "Coastal",
    code: "coastal",
    temperatureFactor: 0.95,
    moistureFactor: 0.8,
    windFactor: 0.75,
    overallFactor: 0.8,
    description: "Salt air, high winds, and storms accelerate deterioration"
  }
};

export const stateClimates: StateClimate[] = [
  // Hot & Dry States
  { state: "Arizona", code: "AZ", climateZone: "Hot & Dry Desert", adjustment: climateAdjustments["hot-dry"] },
  { state: "Nevada", code: "NV", climateZone: "Hot & Dry Desert", adjustment: climateAdjustments["hot-dry"] },
  { state: "New Mexico", code: "NM", climateZone: "Hot & Dry Desert", adjustment: climateAdjustments["hot-dry"] },
  
  // Hot & Humid States
  { state: "Florida", code: "FL", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "Louisiana", code: "LA", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "Mississippi", code: "MS", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "Alabama", code: "AL", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "Georgia", code: "GA", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "South Carolina", code: "SC", climateZone: "Hot & Humid Subtropical", adjustment: climateAdjustments["hot-humid"] },
  { state: "Texas", code: "TX", climateZone: "Hot & Humid/Dry Mixed", adjustment: climateAdjustments["hot-humid"] },
  
  // Temperate States
  { state: "California", code: "CA", climateZone: "Temperate Mediterranean", adjustment: climateAdjustments["temperate"] },
  { state: "North Carolina", code: "NC", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Virginia", code: "VA", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Tennessee", code: "TN", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Kentucky", code: "KY", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Arkansas", code: "AR", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Oklahoma", code: "OK", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Kansas", code: "KS", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Missouri", code: "MO", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Illinois", code: "IL", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Indiana", code: "IN", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Ohio", code: "OH", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "West Virginia", code: "WV", climateZone: "Temperate Mountain", adjustment: climateAdjustments["temperate"] },
  { state: "Maryland", code: "MD", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Delaware", code: "DE", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "New Jersey", code: "NJ", climateZone: "Temperate Humid", adjustment: climateAdjustments["temperate"] },
  { state: "Pennsylvania", code: "PA", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "New York", code: "NY", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Connecticut", code: "CT", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Rhode Island", code: "RI", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Massachusetts", code: "MA", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "Vermont", code: "VT", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  { state: "New Hampshire", code: "NH", climateZone: "Temperate Continental", adjustment: climateAdjustments["temperate"] },
  
  // Cold & Dry States
  { state: "Colorado", code: "CO", climateZone: "Cold & Dry Mountain", adjustment: climateAdjustments["cold-dry"] },
  { state: "Utah", code: "UT", climateZone: "Cold & Dry Mountain", adjustment: climateAdjustments["cold-dry"] },
  { state: "Wyoming", code: "WY", climateZone: "Cold & Dry Mountain", adjustment: climateAdjustments["cold-dry"] },
  { state: "Montana", code: "MT", climateZone: "Cold & Dry Continental", adjustment: climateAdjustments["cold-dry"] },
  { state: "Idaho", code: "ID", climateZone: "Cold & Dry Mountain", adjustment: climateAdjustments["cold-dry"] },
  { state: "Nebraska", code: "NE", climateZone: "Cold & Dry Continental", adjustment: climateAdjustments["cold-dry"] },
  { state: "South Dakota", code: "SD", climateZone: "Cold & Dry Continental", adjustment: climateAdjustments["cold-dry"] },
  { state: "North Dakota", code: "ND", climateZone: "Cold & Dry Continental", adjustment: climateAdjustments["cold-dry"] },
  
  // Cold & Wet States
  { state: "Washington", code: "WA", climateZone: "Cold & Wet Oceanic", adjustment: climateAdjustments["cold-wet"] },
  { state: "Oregon", code: "OR", climateZone: "Cold & Wet Oceanic", adjustment: climateAdjustments["cold-wet"] },
  { state: "Michigan", code: "MI", climateZone: "Cold & Wet Great Lakes", adjustment: climateAdjustments["cold-wet"] },
  { state: "Wisconsin", code: "WI", climateZone: "Cold & Wet Continental", adjustment: climateAdjustments["cold-wet"] },
  { state: "Minnesota", code: "MN", climateZone: "Cold & Wet Continental", adjustment: climateAdjustments["cold-wet"] },
  { state: "Iowa", code: "IA", climateZone: "Cold & Wet Continental", adjustment: climateAdjustments["cold-wet"] },
  { state: "Maine", code: "ME", climateZone: "Cold & Wet Northeastern", adjustment: climateAdjustments["cold-wet"] },
  
  // Coastal States (separate category for high wind/salt exposure)
  { state: "Alaska", code: "AK", climateZone: "Extreme Cold Coastal", adjustment: climateAdjustments["coastal"] },
  { state: "Hawaii", code: "HI", climateZone: "Tropical Coastal", adjustment: climateAdjustments["coastal"] }
];