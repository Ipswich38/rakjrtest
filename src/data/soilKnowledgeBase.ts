/**
 * ================================================================================
 * PHILIPPINE SOIL & GEOLOGICAL RISK KNOWLEDGE BASE - REGIONAL OVERVIEW
 * ================================================================================
 * 
 * PURPOSE: 
 * GENERAL EDUCATIONAL TOOL to raise awareness about soil testing importance.
 * Provides REGIONAL OVERVIEW ONLY - NOT site-specific information.
 * 
 * ⚠️ CRITICAL LIMITATIONS ⚠️
 * 
 * This knowledge base provides GENERAL REGIONAL INFORMATION ONLY.
 * 
 * DATA SOURCES (All Public Information):
 * - PHIVOLCS (Philippine Institute of Volcanology and Seismology)
 * - MGB-DENR (Mines and Geosciences Bureau)
 * - BSWM (Bureau of Soils and Water Management)
 * - PhilRice (Philippine Rice Research Institute)
 * - National Building Code of the Philippines (PD 1096)
 * - National Structural Code of the Philippines (NSCP 2015)
 * 
 * Last Updated: October 2025
 * ================================================================================
 */

// ============================================================================
// 1. LEGAL REQUIREMENTS - National Building Code
// ============================================================================

export const LEGAL_REQUIREMENTS = {
  mandatory: "Buildings 3+ stories require soil boring tests per National Building Code (PD 1096)",
  hazardAreas: "Lower buildings in hazard areas also require testing",
  hazardTypes: ["Active fault zones", "Liquefaction zones", "Landslide areas", "Flood-prone areas", "Coastal areas", "Reclaimed land"],
  submittal: "Written geotechnical engineer's report required for building permit",
  importance: "Required by law, protects lives, prevents costly failures"
};

// ============================================================================
// 2. PHILIPPINE REGIONS - GENERAL GEOLOGICAL CHARACTERISTICS
// ============================================================================

export const PHILIPPINE_REGIONS = {
  NCR: {
    code: "NCR",
    name: "National Capital Region (Metro Manila)",
    
    generalCharacteristics: {
      geologicVariability: "EXTREMELY HIGH - conditions vary drastically within the region",
      soilTypes: "Ranges from soft alluvial clay to volcanic tuff to fill material",
      waterTable: "Variable - very shallow in low areas to deep in elevated areas",
      developmentHistory: "Highly urbanized with extensive land modification"
    },

    generalHazards: {
      seismic: {
        level: "VERY HIGH",
        concern: "Major active fault systems present in the region",
        note: "Some areas directly on active faults"
      },
      liquefaction: {
        level: "HIGH in low-lying areas",
        concern: "Loose saturated soils in various parts of region"
      },
      flooding: {
        level: "HIGH in low-lying areas",
        concern: "Annual flooding affects multiple areas"
      },
      landslide: {
        level: "MODERATE in elevated areas",
        concern: "Hilly portions subject to slope instability"
      }
    },

    criticalNote: `NCR has the HIGHEST variability in soil conditions of any region. Conditions can change dramatically within 100 meters. Professional site investigation is ABSOLUTELY MANDATORY. Regional data provides NO useful information for specific sites.`,

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-30 meters (varies by building height)",
      commonTests: ["Standard Penetration Test (SPT)", "Soil classification", "Bearing capacity analysis", "Settlement analysis", "Seismic site response analysis", "Liquefaction assessment (in applicable areas)"],
      estimatedCost: "₱80,000 - ₱200,000+ depending on project"
    }
  },

  CAR: {
    code: "CAR",
    name: "Cordillera Administrative Region",
    
    generalCharacteristics: {
      terrain: "Mountainous",
      elevation: "High (many areas >1000m above sea level)",
      soilTypes: "Residual soils from weathered bedrock, colluvial deposits",
      climate: "Cooler, high rainfall"
    },

    generalHazards: {
      landslide: {
        level: "VERY HIGH",
        concern: "Steep slopes + high rainfall = major landslide risk"
      },
      seismic: {
        level: "MODERATE to HIGH",
        concern: "Philippine Fault Zone nearby"
      },
      erosion: {
        level: "HIGH",
        concern: "Steep slopes with intense rainfall"
      }
    },

    criticalNote: `Landslide hazard is PRIMARY concern in this region. Slope stability analysis is critical for most construction sites. Do NOT build on steep slopes without comprehensive investigation.`,

    typicalInvestigationNeeds: {
      minimumBoringDepth: "Variable (may encounter bedrock at shallow depth)",
      specializedTests: ["Slope stability analysis", "Rock quality assessment", "Groundwater seepage analysis", "Erosion potential assessment"],
      estimatedCost: "₱60,000 - ₱150,000+"
    }
  },

  REGION_I: {
    code: "Region I",
    name: "Ilocos Region",
    
    generalCharacteristics: {
      terrain: "Coastal plains and mountains",
      soilTypes: "Alluvial in lowlands, residual in uplands",
      coastalAreas: "Present along western coast"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE to HIGH",
        concern: "Philippine Fault Zone present"
      },
      liquefaction: {
        level: "MODERATE in coastal/lowland areas"
      },
      tsunami: {
        level: "LOW to MODERATE on west coast"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱120,000"
    }
  },

  REGION_II: {
    code: "Region II",
    name: "Cagayan Valley",
    
    generalCharacteristics: {
      terrain: "River valley system surrounded by mountains",
      soilTypes: "Extensive alluvial deposits in valley, residual in uplands",
      flooding: "Valley areas subject to riverine flooding"
    },

    generalHazards: {
      flooding: {
        level: "HIGH in valley areas",
        concern: "Seasonal flooding from major rivers"
      },
      seismic: {
        level: "MODERATE"
      },
      soilExpansion: {
        level: "MODERATE",
        concern: "Some areas have expansive clay soils"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-25 meters in alluvial areas",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  },

  REGION_III: {
    code: "Region III",
    name: "Central Luzon",
    
    generalCharacteristics: {
      terrain: "Central plain with volcanic peaks",
      soilTypes: "Mix of alluvial, volcanic, and residual soils",
      volcanoes: "Mt. Pinatubo and other volcanic features present"
    },

    generalHazards: {
      seismic: {
        level: "HIGH",
        concern: "Multiple fault systems, proximity to tectonic features"
      },
      liquefaction: {
        level: "MODERATE to HIGH in lowland areas"
      },
      flooding: {
        level: "MODERATE to HIGH in low-lying areas"
      },
      volcanicLahar: {
        level: "MODERATE in specific areas",
        concern: "Historical lahar flows from volcanic eruptions"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-25 meters",
      estimatedCost: "₱60,000 - ₱130,000"
    }
  },

  REGION_IV_A: {
    code: "Region IV-A",
    name: "CALABARZON",
    
    generalCharacteristics: {
      terrain: "Highly variable - coastal, plains, mountains, lakes",
      soilTypes: "Extremely diverse",
      development: "Rapidly urbanizing"
    },

    generalHazards: {
      seismic: {
        level: "VERY HIGH",
        concern: "Valley Fault System and other active faults present"
      },
      liquefaction: {
        level: "HIGH in low-lying areas"
      },
      landslide: {
        level: "HIGH in mountainous areas"
      },
      volcanic: {
        level: "MODERATE",
        concern: "Taal Volcano and other volcanic features"
      }
    },

    criticalNote: `This region has MULTIPLE severe hazards. Proximity to active fault systems makes comprehensive investigation critical.`,

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-30 meters",
      estimatedCost: "₱70,000 - ₱150,000+"
    }
  },

  REGION_IV_B: {
    code: "Region IV-B",
    name: "MIMAROPA",
    
    generalCharacteristics: {
      terrain: "Island provinces with diverse topography",
      soilTypes: "Variable by island and location"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE"
      },
      landslide: {
        level: "MODERATE in mountainous areas"
      },
      coastal: {
        level: "Relevant for coastal construction"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  },

  REGION_V: {
    code: "Region V",
    name: "Bicol Region",
    
    generalCharacteristics: {
      terrain: "Volcanic and coastal",
      volcanoes: "Mt. Mayon and other active volcanoes",
      typhoons: "High typhoon exposure"
    },

    generalHazards: {
      volcanic: {
        level: "HIGH",
        concern: "Active volcanoes with eruption history"
      },
      seismic: {
        level: "HIGH",
        concern: "Volcanic and tectonic activity"
      },
      landslide: {
        level: "HIGH on volcanic slopes"
      },
      typhoon: {
        level: "VERY HIGH",
        concern: "Direct path for many Pacific typhoons"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-25 meters",
      specialConsideration: "Volcanic ash/lahar in some areas",
      estimatedCost: "₱60,000 - ₱120,000"
    }
  },

  REGION_VI: {
    code: "Region VI",
    name: "Western Visayas",
    
    generalCharacteristics: {
      terrain: "Lowland and coastal plains, some mountains",
      soilTypes: "Predominantly alluvial in lowlands"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE"
      },
      liquefaction: {
        level: "MODERATE in coastal/lowland areas"
      },
      flooding: {
        level: "MODERATE to HIGH in low areas"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  },

  REGION_VII: {
    code: "Region VII",
    name: "Central Visayas",
    
    generalCharacteristics: {
      terrain: "Island provinces with varied topography",
      development: "Highly urbanized in certain areas"
    },

    generalHazards: {
      seismic: {
        level: "HIGH",
        concern: "Active faults present in the region"
      },
      landslide: {
        level: "MODERATE to HIGH in hilly areas"
      },
      liquefaction: {
        level: "MODERATE in coastal lowlands"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "15-25 meters",
      estimatedCost: "₱60,000 - ₱130,000"
    }
  },

  REGION_VIII: {
    code: "Region VIII",
    name: "Eastern Visayas",
    
    generalCharacteristics: {
      terrain: "Mountainous with coastal plains",
      exposure: "Eastern seaboard - high typhoon exposure"
    },

    generalHazards: {
      typhoon: {
        level: "EXTREME",
        concern: "Direct path for Pacific typhoons"
      },
      landslide: {
        level: "VERY HIGH",
        concern: "Steep terrain + intense rainfall"
      },
      seismic: {
        level: "MODERATE to HIGH",
        concern: "Philippine Trench nearby"
      },
      tsunami: {
        level: "MODERATE on eastern coasts"
      }
    },

    criticalNote: `Region has experienced catastrophic landslides. Comprehensive slope investigation critical for elevated sites.`,

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-25 meters",
      estimatedCost: "₱50,000 - ₱120,000"
    }
  },

  REGION_IX: {
    code: "Region IX",
    name: "Zamboanga Peninsula",
    
    generalCharacteristics: {
      terrain: "Peninsula with mountains and coastal areas",
      soilTypes: "Variable"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE to HIGH"
      },
      landslide: {
        level: "MODERATE to HIGH in mountainous areas"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  },

  REGION_X: {
    code: "Region X",
    name: "Northern Mindanao",
    
    generalCharacteristics: {
      terrain: "Coastal and inland areas with varied topography",
      development: "Growing urban centers"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE"
      },
      landslide: {
        level: "MODERATE to HIGH in elevated areas"
      },
      flooding: {
        level: "MODERATE in low-lying areas"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱110,000"
    }
  },

  REGION_XI: {
    code: "Region XI",
    name: "Davao Region",
    
    generalCharacteristics: {
      terrain: "Includes highest peak in Philippines (Mt. Apo)",
      soilTypes: "Variable from coastal to mountainous"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE",
        note: "Generally lower than northern Philippines"
      },
      landslide: {
        level: "HIGH on slopes near Mt. Apo and other peaks"
      },
      flooding: {
        level: "MODERATE in coastal/lowland areas"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-25 meters",
      estimatedCost: "₱50,000 - ₱120,000"
    }
  },

  REGION_XII: {
    code: "Region XII",
    name: "SOCCSKSARGEN",
    
    generalCharacteristics: {
      terrain: "Plains and highlands",
      soilTypes: "Mix of alluvial and residual soils"
    },

    generalHazards: {
      seismic: {
        level: "LOW to MODERATE"
      },
      landslide: {
        level: "MODERATE in highland areas"
      },
      flooding: {
        level: "MODERATE in lowlands"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  },

  REGION_XIII: {
    code: "Region XIII",
    name: "Caraga",
    
    generalCharacteristics: {
      terrain: "Eastern Mindanao with mountains and coastline",
      exposure: "Pacific Ocean exposure"
    },

    generalHazards: {
      typhoon: {
        level: "HIGH",
        concern: "Eastern seaboard exposure"
      },
      seismic: {
        level: "MODERATE to HIGH",
        concern: "Philippine Trench nearby"
      },
      landslide: {
        level: "MODERATE to HIGH"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱110,000"
    }
  },

  BARMM: {
    code: "BARMM",
    name: "Bangsamoro Autonomous Region in Muslim Mindanao",
    
    generalCharacteristics: {
      terrain: "Variable - coastal, inland, island provinces",
      soilTypes: "Diverse depending on location"
    },

    generalHazards: {
      seismic: {
        level: "MODERATE"
      },
      coastal: {
        level: "Relevant for maritime areas"
      }
    },

    typicalInvestigationNeeds: {
      minimumBoringDepth: "10-20 meters",
      estimatedCost: "₱50,000 - ₱100,000"
    }
  }
};

// ============================================================================
// 3. WHY SOIL TESTING CANNOT BE SKIPPED
// ============================================================================

export const WHY_TESTING_MANDATORY = {
  
  legalReason: {
    title: "IT'S THE LAW",
    requirement: "PD 1096 (National Building Code) REQUIRES soil investigation",
    consequence: "Building permit will be DENIED without proper testing",
    liability: "You are legally liable for inadequate investigation"
  },

  safetyReason: {
    title: "IT SAVES LIVES",
    facts: [
      "Buildings collapse when foundations fail",
      "Foundation failure is often due to inadequate soil investigation",
      "Many deaths in Philippines due to building failures",
      "Proper soil testing prevents these tragedies"
    ],
    responsibility: "You are responsible for safety of occupants"
  },

  financialReason: {
    title: "IT SAVES MONEY",
    comparison: {
      soilTesting: "₱50,000 - ₱150,000",
      foundationRepair: "₱500,000 - ₱5,000,000+",
      buildingLoss: "TOTAL INVESTMENT LOST"
    },
    conclusion: "Testing is CHEAP compared to repairs or loss"
  },

  technicalReason: {
    title: "YOU CANNOT GUESS SOIL CONDITIONS",
    truth: [
      "Soil varies drastically even within small areas",
      "Surface appearance tells you NOTHING about subsurface",
      "Regional data is NOT applicable to your specific site",
      "Only drilling and testing reveals actual conditions"
    ],
    engineering: "Engineers CANNOT design proper foundations without test data"
  },

  bottomLine: {
    message: "THERE IS NO VALID REASON TO SKIP SOIL TESTING",
    emphasis: [
      "It's required by law",
      "It's essential for safety",
      "It's much cheaper than repairs",
      "It's necessary for proper engineering",
      "Your site's actual conditions are unknown without it"
    ],
    action: "GET PROFESSIONAL SOIL INVESTIGATION. Period."
  }
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  LEGAL_REQUIREMENTS,
  PHILIPPINE_REGIONS,
  WHY_TESTING_MANDATORY
};
