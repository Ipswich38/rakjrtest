import { useState } from 'react';
import { MapPin, Search, AlertTriangle, Info, Phone, Mail, Loader2, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { PHILIPPINE_REGIONS, LEGAL_REQUIREMENTS, WHY_TESTING_MANDATORY } from '../data/soilKnowledgeBase';

type RiskLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'VERY HIGH' | 'EXTREME';

interface RegionalData {
  code: string;
  name: string;
  generalCharacteristics: {
    terrain?: string;
    soilTypes?: string;
    geologicVariability?: string;
    [key: string]: any;
  };
  generalHazards: {
    seismic?: { level: string; concern?: string; note?: string };
    liquefaction?: { level: string; concern?: string };
    flooding?: { level: string; concern?: string };
    landslide?: { level: string; concern?: string };
    volcanic?: { level: string; concern?: string };
    [key: string]: any;
  };
  criticalNote?: string;
  typicalInvestigationNeeds: {
    minimumBoringDepth: string;
    estimatedCost?: string;
    [key: string]: any;
  };
}

function getRiskLevel(levelText: string): RiskLevel {
  const text = levelText.toUpperCase();
  if (text.includes('EXTREME') || text.includes('CRITICAL')) return 'EXTREME';
  if (text.includes('VERY HIGH')) return 'VERY HIGH';
  if (text.includes('HIGH')) return 'HIGH';
  if (text.includes('MODERATE')) return 'MODERATE';
  return 'LOW';
}

function getRiskColor(level: RiskLevel) {
  switch(level) {
    case 'EXTREME': 
      return { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-900', badge: 'bg-red-600 text-white' };
    case 'VERY HIGH': 
      return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900', badge: 'bg-orange-600 text-white' };
    case 'HIGH': 
      return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', badge: 'bg-yellow-600 text-white' };
    case 'MODERATE': 
      return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-500 text-white' };
    case 'LOW': 
      return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-500 text-white' };
    default:
      return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', badge: 'bg-gray-500 text-white' };
  }
}

export function SoilRiskAssessment() {
  const [region, setRegion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [regionalData, setRegionalData] = useState<RegionalData | null>(null);

  const handleAnalyze = () => {
    if (!region) {
      toast.error('Please select a region');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const data = PHILIPPINE_REGIONS[region as keyof typeof PHILIPPINE_REGIONS] as RegionalData;
      
      if (data) {
        setRegionalData(data);
        toast.success('Regional overview generated', {
          description: 'Remember: This is GENERAL information only. Professional investigation required.'
        });
        
        setTimeout(() => {
          document.getElementById('assessment-results')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        toast.error('Region data not found');
      }
      
      setIsLoading(false);
    }, 1200);
  };

  const handleContactRequest = () => {
    const subject = `Soil Investigation Quote Request - ${regionalData?.name}`;
    const body = `
Region: ${regionalData?.name}
Region Code: ${regionalData?.code}

I am interested in professional soil investigation services for a construction project in this region.

Please provide information about:
- Site-specific soil boring and testing
- Professional geotechnical investigation
- Cost estimates for my project
- Timeline and requirements

Thank you.
    `.trim();
    
    window.location.href = `mailto:rakjunior_since2019@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success('Opening email client...', {
      description: 'Contact us for professional soil investigation.'
    });
  };

  return (
    <section id="soil-assessment" className="py-24 bg-gradient-to-br from-[#023c3d] via-[#028118] to-[#023c3d]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/20 backdrop-blur-sm rounded-full text-[#10c202] text-xs uppercase tracking-widest mb-6">
            <Info size={14} />
            <span>Educational Regional Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-white mb-6 tracking-tighter leading-[0.9]">
            Philippine Regions<br />Geological Overview
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            General educational information about geological characteristics by region
          </p>
          <p className="text-yellow-300 text-sm max-w-3xl mx-auto mb-2">
            ⚠️ This provides REGIONAL OVERVIEW ONLY • NOT site-specific information
          </p>
          <p className="text-white/60 text-xs max-w-3xl mx-auto">
            Professional soil investigation MANDATORY for every construction site • Data from PHIVOLCS, MGB-DENR, BSWM
          </p>
        </div>

        {/* Region Selector */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#10c202] rounded-xl flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 tracking-tight">Select Philippine Region</h3>
                <p className="text-sm text-gray-600">View general geological characteristics</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="flex-1 h-14 rounded-xl text-base">
                  <SelectValue placeholder="Choose a region" />
                </SelectTrigger>
                <SelectContent className="max-h-[400px]">
                  <SelectItem value="NCR">NCR - National Capital Region (Metro Manila)</SelectItem>
                  <SelectItem value="CAR">CAR - Cordillera Administrative Region</SelectItem>
                  <SelectItem value="REGION_I">Region I - Ilocos Region</SelectItem>
                  <SelectItem value="REGION_II">Region II - Cagayan Valley</SelectItem>
                  <SelectItem value="REGION_III">Region III - Central Luzon</SelectItem>
                  <SelectItem value="REGION_IV_A">Region IV-A - CALABARZON</SelectItem>
                  <SelectItem value="REGION_IV_B">Region IV-B - MIMAROPA</SelectItem>
                  <SelectItem value="REGION_V">Region V - Bicol Region</SelectItem>
                  <SelectItem value="REGION_VI">Region VI - Western Visayas</SelectItem>
                  <SelectItem value="REGION_VII">Region VII - Central Visayas</SelectItem>
                  <SelectItem value="REGION_VIII">Region VIII - Eastern Visayas</SelectItem>
                  <SelectItem value="REGION_IX">Region IX - Zamboanga Peninsula</SelectItem>
                  <SelectItem value="REGION_X">Region X - Northern Mindanao</SelectItem>
                  <SelectItem value="REGION_XI">Region XI - Davao Region</SelectItem>
                  <SelectItem value="REGION_XII">Region XII - SOCCSKSARGEN</SelectItem>
                  <SelectItem value="REGION_XIII">Region XIII - Caraga</SelectItem>
                  <SelectItem value="BARMM">BARMM - Bangsamoro</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleAnalyze}
                disabled={isLoading || !region}
                size="sm"
                className="bg-[#10c202] hover:bg-[#028118] text-white rounded-xl px-6"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Search size={16} className="mr-2" />
                    View
                  </>
                )}
              </Button>
            </div>

            {/* Important Disclaimer */}
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <p className="text-xs text-yellow-900 flex items-start gap-2">
                <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  <strong>CRITICAL:</strong> This tool shows GENERAL REGIONAL information only. Actual soil conditions at YOUR SPECIFIC SITE can be completely different. Professional site investigation is MANDATORY by law for all construction projects.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Regional Overview Results */}
        {regionalData && (
          <div id="assessment-results" className="max-w-6xl mx-auto space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{regionalData.code}</p>
                  <h3 className="text-3xl text-gray-900 tracking-tight mb-2">{regionalData.name}</h3>
                  <p className="text-sm text-gray-600">General Regional Overview</p>
                </div>
                <div className="px-4 py-2 bg-blue-100 text-blue-900 rounded-xl text-xs uppercase tracking-wider">
                  Educational Only
                </div>
              </div>

              {regionalData.criticalNote && (
                <div className="p-6 bg-red-50 border-2 border-red-200 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-red-900 leading-relaxed whitespace-pre-line">
                        {regionalData.criticalNote}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* General Characteristics */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-2xl text-gray-900 mb-6 tracking-tight">General Regional Characteristics</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(regionalData.generalCharacteristics).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <p className="text-sm text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-base text-gray-900">{value as string}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* General Hazards */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="text-2xl text-gray-900 mb-6 tracking-tight">General Hazard Overview</h4>
              <div className="space-y-4">
                {Object.entries(regionalData.generalHazards).map(([hazardType, hazardData]) => {
                  if (typeof hazardData === 'object' && hazardData && 'level' in hazardData) {
                    const level = getRiskLevel(hazardData.level);
                    const colors = getRiskColor(level);
                    
                    return (
                      <div key={hazardType} className={`p-6 rounded-2xl border-2 ${colors.bg} ${colors.border}`}>
                        <div className="flex items-start justify-between mb-3">
                          <h5 className={`text-lg tracking-tight capitalize ${colors.text}`}>
                            {hazardType}
                          </h5>
                          <span className={`px-3 py-1 rounded-lg text-xs uppercase tracking-wider ${colors.badge}`}>
                            {hazardData.level}
                          </span>
                        </div>
                        {hazardData.concern && (
                          <p className={`text-sm ${colors.text} mb-2`}>
                            <strong>Concern:</strong> {hazardData.concern}
                          </p>
                        )}
                        {hazardData.note && (
                          <p className={`text-xs ${colors.text} opacity-70`}>
                            {hazardData.note}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Investigation Needs */}
            <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-3xl p-8 text-white">
              <h4 className="text-2xl mb-6 tracking-tight">Typical Investigation Needs</h4>
              <div className="space-y-4">
                {Object.entries(regionalData.typicalInvestigationNeeds)
                  .filter(([key]) => key !== 'estimatedCost')
                  .map(([key, value]) => (
                    <div key={key} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white/70 text-sm capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-white">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Legal Requirements */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <h4 className="text-2xl text-gray-900 mb-6 tracking-tight">Legal Requirements</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-red-900">
                    <strong>Mandatory:</strong> {LEGAL_REQUIREMENTS.mandatory}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>Hazard Areas:</strong> {LEGAL_REQUIREMENTS.hazardAreas}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Submittal:</strong> {LEGAL_REQUIREMENTS.submittal}
                  </p>
                </div>
              </div>
            </div>

            {/* Why Testing is Mandatory */}
            <div className="bg-gradient-to-br from-[#023c3d] to-[#028118] rounded-3xl p-10 text-white">
              <h4 className="text-3xl mb-8 tracking-tight">Why Professional Investigation is MANDATORY</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle size={24} />
                  </div>
                  <h5 className="text-lg tracking-tight">{WHY_TESTING_MANDATORY.safetyReason.title}</h5>
                  <p className="text-white/80 text-sm">{WHY_TESTING_MANDATORY.safetyReason.responsibility}</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Info size={24} />
                  </div>
                  <h5 className="text-lg tracking-tight">{WHY_TESTING_MANDATORY.legalReason.title}</h5>
                  <p className="text-white/80 text-sm">{WHY_TESTING_MANDATORY.legalReason.requirement}</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Info size={24} />
                  </div>
                  <h5 className="text-lg tracking-tight">{WHY_TESTING_MANDATORY.financialReason.title}</h5>
                  <p className="text-white/80 text-sm">{WHY_TESTING_MANDATORY.financialReason.comparison.soilTesting} vs {WHY_TESTING_MANDATORY.financialReason.comparison.buildingLoss} if building fails</p>
                </div>
              </div>
            </div>

            {/* Cost Estimate Section */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <h4 className="text-2xl text-gray-900 mb-6 tracking-tight">Estimated Cost</h4>
              <div className="bg-gray-50 rounded-2xl p-6 text-center mb-6">
                <h5 className="text-xl text-gray-900 mb-2">To Be Determined</h5>
                <p className="text-sm text-gray-600 mb-4">
                  Cost depends on project size, location, complexity, and specific testing requirements.
                  Contact RAK-JR for an accurate quote.
                </p>
                <div className="text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="font-medium text-yellow-900 mb-1">Cost Estimates Disclaimer</p>
                      <p className="text-yellow-800">
                        Historical data from online sources suggests many underestimate the true value of professional soil testing.
                        Actual costs vary significantly based on site conditions, project requirements, and local factors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="text-lg text-gray-900 mb-4 text-center">Contact RAK-JR for Accurate Quote</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  onClick={handleContactRequest}
                  size="sm"
                  className="bg-[#028118] hover:bg-[#10c202] text-white rounded-xl"
                >
                  <Mail size={16} className="mr-2" />
                  Email
                </Button>
                <Button
                  onClick={() => window.location.href = 'tel:+639214039264'}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <Phone size={16} className="mr-2" />
                  Call
                </Button>
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Form
                </Button>
                <Button
                  onClick={() => window.open('https://facebook.com/rakjrtechnicaltestingservices', '_blank')}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  <Facebook size={16} className="mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#fdc123] rounded-3xl p-10 text-center">
              <h4 className="text-3xl text-gray-900 mb-4 tracking-tight">Get Professional Soil Investigation</h4>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                This regional overview is for educational purposes only. Every construction site requires professional geotechnical investigation by licensed engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleContactRequest}
                  size="lg"
                  className="bg-[#028118] hover:bg-[#10c202] text-white rounded-xl h-14 px-8"
                >
                  <Mail size={20} className="mr-2" />
                  Request Professional Quote
                </Button>
                <Button
                  onClick={() => window.location.href = 'tel:+639214039264'}
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-xl h-14 px-8"
                >
                  <Phone size={20} className="mr-2" />
                  Call: 0921-403-9264
                </Button>
              </div>
            </div>

            {/* Final Disclaimer */}
            <div className="bg-red-900 text-white rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle size={32} className="flex-shrink-0" />
                <div>
                  <h5 className="text-xl mb-3 tracking-tight">CRITICAL DISCLAIMER</h5>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    This regional overview provides GENERAL INFORMATION ONLY based on publicly available data. This is NOT:
                  </p>
                  <ul className="text-white/80 text-sm space-y-1 mb-4">
                    <li>✗ Site-specific assessment</li>
                    <li>✗ Sufficient for construction decisions</li>
                    <li>✗ Substitute for professional investigation</li>
                    <li>✗ Usable for building permits or engineering design</li>
                  </ul>
                  <p className="text-white text-sm">
                    <strong>EVERY CONSTRUCTION SITE REQUIRES:</strong> Professional geotechnical investigation with site-specific soil boring, laboratory testing, and licensed engineer's analysis per National Building Code (PD 1096).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
