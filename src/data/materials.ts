import { RoofMaterial } from './types';

export const roofMaterials: RoofMaterial[] = [
  {
    name: "Asphalt Shingles (3-Tab)",
    averageLifespan: 20,
    minLifespan: 15,
    maxLifespan: 25,
    description: "Most common and affordable roofing material",
    popularIn: ["Suburban homes", "First-time homeowners", "Budget-conscious projects"]
  },
  {
    name: "Asphalt Shingles (Architectural/Dimensional)",
    averageLifespan: 30,
    minLifespan: 25,
    maxLifespan: 35,
    description: "Higher quality asphalt with better durability and aesthetics",
    popularIn: ["Modern homes", "Mid-range construction", "Standard residential"]
  },
  {
    name: "Metal Roofing (Steel/Aluminum)",
    averageLifespan: 50,
    minLifespan: 40,
    maxLifespan: 70,
    description: "Durable, energy-efficient, and weather-resistant",
    popularIn: ["Modern architecture", "Coastal areas", "Commercial buildings"]
  },
  {
    name: "Clay Tiles",
    averageLifespan: 75,
    minLifespan: 50,
    maxLifespan: 100,
    description: "Traditional, fire-resistant, excellent for hot climates",
    popularIn: ["Mediterranean style", "Southwest US", "Spanish colonial homes"]
  },
  {
    name: "Concrete Tiles",
    averageLifespan: 50,
    minLifespan: 40,
    maxLifespan: 75,
    description: "Durable alternative to clay with similar aesthetics",
    popularIn: ["Modern homes", "Storm-prone areas", "Energy-efficient designs"]
  },
  {
    name: "Slate",
    averageLifespan: 100,
    minLifespan: 75,
    maxLifespan: 150,
    description: "Premium natural stone, extremely durable",
    popularIn: ["Historic homes", "Luxury properties", "Northeast architecture"]
  },
  {
    name: "Wood Shingles/Shakes",
    averageLifespan: 25,
    minLifespan: 20,
    maxLifespan: 40,
    description: "Natural material requiring regular maintenance",
    popularIn: ["Traditional homes", "Cape Cod style", "Cedar-friendly climates"]
  },
  {
    name: "EPDM (Rubber)",
    averageLifespan: 25,
    minLifespan: 15,
    maxLifespan: 30,
    description: "Flexible membrane for flat/low-slope roofs",
    popularIn: ["Commercial buildings", "Modern flat-roof homes", "Budget flat roofing"]
  },
  {
    name: "TPO (Thermoplastic)",
    averageLifespan: 20,
    minLifespan: 15,
    maxLifespan: 25,
    description: "Energy-efficient single-ply membrane",
    popularIn: ["Commercial roofing", "Energy-conscious projects", "White reflective roofs"]
  },
  {
    name: "Modified Bitumen",
    averageLifespan: 20,
    minLifespan: 15,
    maxLifespan: 25,
    description: "Enhanced asphalt for flat roofs",
    popularIn: ["Commercial buildings", "Industrial facilities", "Multi-layer systems"]
  }
];