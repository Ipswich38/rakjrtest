import React, { useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Download, FileText, MapPin, Building2, FlaskConical, Hammer, Search, FileCheck, BarChart3 } from 'lucide-react';
import { PROJECT_LIBRARY_DATA } from '../data/projectLibraryData';

interface WhitepaperProps {
  downloadMode?: boolean;
}

export function Whitepaper({ downloadMode = false }: WhitepaperProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    // Dynamic import for client-side only
    const html2pdf = (await import('html2pdf.js')).default;

    if (contentRef.current) {
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'RAK-JR_Technical_Testing_Services_Whitepaper.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(contentRef.current).save();
    }
  };

  // Calculate statistics from project library
  const totalProjects = PROJECT_LIBRARY_DATA.length;
  const soilBoringProjects = PROJECT_LIBRARY_DATA.filter(p => p.testingType === 'Soil Boring').length;
  const fdtProjects = PROJECT_LIBRARY_DATA.filter(p => p.testingType === 'FDT').length;
  const uniqueLocations = [...new Set(PROJECT_LIBRARY_DATA.map(p => p.location.split(',')[0].trim()))].length;
  const majorClients = [...new Set(PROJECT_LIBRARY_DATA.map(p => p.client))].slice(0, 8);

  if (!downloadMode) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Technical Services Whitepaper</h1>
              <p className="text-gray-600">Comprehensive overview of RAK-JR's capabilities and expertise</p>
            </div>
            <Button onClick={handleDownloadPDF} className="bg-[#10c202] hover:bg-[#028118]">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Whitepaper Content */}
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div ref={contentRef} className="bg-white">
                <WhitepaperContent />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div ref={contentRef} className="bg-white">
      <WhitepaperContent />
    </div>
  );
}

function WhitepaperContent() {
  const totalProjects = PROJECT_LIBRARY_DATA.length;
  const soilBoringProjects = PROJECT_LIBRARY_DATA.filter(p => p.testingType === 'Soil Boring').length;
  const fdtProjects = PROJECT_LIBRARY_DATA.filter(p => p.testingType === 'FDT').length;
  const uniqueLocations = [...new Set(PROJECT_LIBRARY_DATA.map(p => p.location.split(',')[0].trim()))].length;
  const majorClients = [...new Set(PROJECT_LIBRARY_DATA.map(p => p.client))].slice(0, 8);

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Cover Page */}
      <div className="min-h-screen flex flex-col justify-center p-16 bg-gradient-to-br from-[#028118] to-[#10c202] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-lg rotate-12"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/30 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/30 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/30 rounded-lg -rotate-45"></div>
        </div>

        <div className="relative z-10">
          {/* Logo Area */}
          <div className="mb-16">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-[#028118]" />
            </div>
            <h3 className="text-xl font-semibold tracking-wider">RAK-JR TECHNICAL TESTING SERVICES</h3>
          </div>

          {/* Title */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-8">
              Geotechnical<br />
              Excellence
            </h1>
            <h2 className="text-3xl font-light mb-6 text-white/90">
              Professional Soil Testing & Engineering Services
            </h2>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Comprehensive technical whitepaper showcasing our expertise, methodologies,
              and proven track record in geotechnical investigation services across the Philippines.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{totalProjects}+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{uniqueLocations}+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Locations Served</div>
            </div>
          </div>

          {/* Publication Info */}
          <div className="border-t border-white/30 pt-8">
            <div className="text-sm text-white/70">
              <p className="mb-1">Published: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>© {new Date().getFullYear()} RAK-JR Technical Testing Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Executive Summary</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            RAK-JR Technical Testing Services has established itself as a leading provider of geotechnical investigation
            and soil testing services in the Philippines. Since 2019, we have successfully completed <strong>{totalProjects} projects</strong>
            across diverse sectors including residential, commercial, infrastructure, and industrial developments.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, reliable, and professional geotechnical testing services that ensure
                the structural integrity and safety of construction projects throughout the Philippines.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Precision:</strong> Accurate testing and reliable results</li>
                <li>• <strong>Integrity:</strong> Honest reporting and transparent processes</li>
                <li>• <strong>Innovation:</strong> Modern equipment and methodologies</li>
                <li>• <strong>Service:</strong> Client-focused solutions and support</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#028118] mb-2">{soilBoringProjects}</div>
                <div className="text-sm text-gray-600">Soil Boring Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#028118] mb-2">{fdtProjects}</div>
                <div className="text-sm text-gray-600">FDT Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#028118] mb-2">42m</div>
                <div className="text-sm text-gray-600">Maximum Depth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#028118] mb-2">60</div>
                <div className="text-sm text-gray-600">Largest Project Scale</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Service Portfolio</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our comprehensive range of geotechnical services ensures complete project support from initial
            investigation through final certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Core Services */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#10c202] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#10c202] rounded-lg flex items-center justify-center">
                  <FlaskConical className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Soil Boring Test (SPT)</h3>
              </div>
              <p className="text-gray-700">
                Standard Penetration Test with comprehensive soil classification and bearing capacity analysis.
                Depths ranging from 10m to 42m based on project requirements.
              </p>
              <div className="mt-3 text-sm text-gray-600">
                • N-values determination • Soil classification • Groundwater assessment
              </div>
            </div>

            <div className="border-l-4 border-[#10c202] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#10c202] rounded-lg flex items-center justify-center">
                  <Hammer className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Field Density Test (FDT)</h3>
              </div>
              <p className="text-gray-700">
                Comprehensive field testing for compaction control and material verification using
                sand cone and nuclear density methods.
              </p>
              <div className="mt-3 text-sm text-gray-600">
                • Compaction verification • Moisture content • Quality control
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[#10c202] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#10c202] rounded-lg flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Structural Assessment</h3>
              </div>
              <p className="text-gray-700">
                Non-destructive testing including rebound hammer test and concrete coring for
                structural integrity evaluation.
              </p>
              <div className="mt-3 text-sm text-gray-600">
                • Rebound hammer test • Core strength testing • Structural evaluation
              </div>
            </div>

            <div className="border-l-4 border-[#10c202] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#10c202] rounded-lg flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Laboratory Analysis</h3>
              </div>
              <p className="text-gray-700">
                Complete soil characterization including grain size analysis, Atterberg limits,
                and specialized geotechnical testing.
              </p>
              <div className="mt-3 text-sm text-gray-600">
                • Grain size distribution • Plasticity index • Chemical analysis
              </div>
            </div>
          </div>
        </div>

        {/* Service Statistics */}
        <div className="bg-gradient-to-r from-[#028118] to-[#10c202] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Service Distribution</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{Math.round((soilBoringProjects / totalProjects) * 100)}%</div>
              <div className="text-white/90">Soil Boring Projects</div>
              <div className="text-sm text-white/70 mt-1">Primary geotechnical investigation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{Math.round((fdtProjects / totalProjects) * 100)}%</div>
              <div className="text-white/90">Field Density Testing</div>
              <div className="text-sm text-white/70 mt-1">Quality control & compaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{Math.round(((totalProjects - soilBoringProjects - fdtProjects) / totalProjects) * 100)}%</div>
              <div className="text-white/90">Specialized Testing</div>
              <div className="text-sm text-white/70 mt-1">Structural & laboratory analysis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Portfolio */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Project Portfolio</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our diverse project portfolio demonstrates expertise across multiple sectors and project scales,
            from residential developments to major infrastructure projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-gray-100 text-gray-800">Industrial</Badge>
                <div className="text-right text-sm text-gray-600">
                  <div>60 Tests</div>
                  <div>20m Depth</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Port Area Power Plant & Sheet Pile Development
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Tripartite Engineering and Construction • Brgy. Talisay, San Andres, Quezon
              </p>
              <p className="text-gray-600 text-sm">
                Large-scale soil investigation for major power plant infrastructure with extensive
                onshore and offshore testing requirements.
              </p>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-blue-100 text-blue-800">Infrastructure</Badge>
                <div className="text-right text-sm text-gray-600">
                  <div>2 Tests</div>
                  <div>42m Depth</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Proposed New Pasig City Hall Building
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Pasig City LGU • Pasig City
              </p>
              <p className="text-gray-600 text-sm">
                Government infrastructure project requiring specialized testing for public building
                construction with maximum depth requirements.
              </p>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-green-100 text-green-800">Healthcare</Badge>
                <div className="text-right text-sm text-gray-600">
                  <div>9 Tests</div>
                  <div>30m Depth</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Proposed Nine Floor Medical Building
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Urdaneta City Medical Center • Urdaneta City, Pangasinan
              </p>
              <p className="text-gray-600 text-sm">
                Healthcare facility development requiring precise soil analysis for medical
                equipment foundations and specialized requirements.
              </p>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-purple-100 text-purple-800">Residential</Badge>
                <div className="text-right text-sm text-gray-600">
                  <div>21 Tests</div>
                  <div>12m Depth</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Amaresa Land Development Projects
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Red Oak Properties, Inc. • Marilao, Bulacan & Mexico, Pampanga
              </p>
              <p className="text-gray-600 text-sm">
                Multi-site residential subdivision development across two major provinces
                demonstrating our regional project management capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Distribution */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Industry Expertise</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Residential</h4>
              <p className="text-sm text-gray-600">
                Condominiums, subdivisions, and residential complexes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
              <p className="text-sm text-gray-600">
                Bridges, government buildings, utilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industrial</h4>
              <p className="text-sm text-gray-600">
                Warehouses, power plants, manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Specialized</h4>
              <p className="text-sm text-gray-600">
                Healthcare, telecommunications, transportation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Coverage */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Geographic Coverage</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            RAK-JR Technical Testing Services maintains an extensive operational footprint across
            key Philippine regions, providing accessible and reliable geotechnical services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Metro Manila</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Pasig City • Quezon City</li>
              <li>• Mandaluyong City • Caloocan City</li>
              <li>• Manila • Las Piñas City</li>
            </ul>
            <div className="mt-4 text-xs text-gray-600">Primary metropolitan coverage</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Central Luzon</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Bulacan Province</li>
              <li>• Pampanga Province</li>
              <li>• Nueva Ecija</li>
              <li>• Tarlac</li>
            </ul>
            <div className="mt-4 text-xs text-gray-600">Regional expansion areas</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Southern Luzon</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Batangas Province</li>
              <li>• Cavite Province</li>
              <li>• Quezon Province</li>
              <li>• Rizal Province</li>
            </ul>
            <div className="mt-4 text-xs text-gray-600">Strategic service locations</div>
          </div>
        </div>

        <div className="bg-[#028118] text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Service Reach Statistics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">{uniqueLocations}+</div>
              <div className="text-white/90">Cities & Municipalities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-white/90">Major Regions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/90">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Portfolio */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Client Portfolio</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our diverse client base includes government agencies, multinational corporations,
            construction companies, and private developers across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Government Sector</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">Department of Public Works & Highways</div>
                  <div className="text-sm text-gray-600">Infrastructure development projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">Pasig City LGU</div>
                  <div className="text-sm text-gray-600">Municipal building construction</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">Metropolitan Manila Development Authority</div>
                  <div className="text-sm text-gray-600">Sanitary landfill projects</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Sector</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">NW Steel Technologies, Inc.</div>
                  <div className="text-sm text-gray-600">Industrial & infrastructure projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">Red Oak Properties, Inc.</div>
                  <div className="text-sm text-gray-600">Residential development projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Building2 className="h-5 w-5 text-[#10c202]" />
                <div>
                  <div className="font-medium text-gray-900">Tripartite Engineering and Construction</div>
                  <div className="text-sm text-gray-600">Major infrastructure projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Key Clients</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            {majorClients.slice(3).map((client, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10c202] rounded-full"></div>
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Capabilities */}
      <div className="p-16 border-b">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Technical Capabilities</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our technical expertise is demonstrated through consistent delivery of accurate,
            reliable testing results using modern equipment and proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Testing Specifications</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#10c202] pl-4">
                <h4 className="font-semibold text-gray-900">Depth Capabilities</h4>
                <p className="text-gray-700 text-sm">Standard range: 10m - 30m | Maximum: 42m depth</p>
              </div>
              <div className="border-l-4 border-[#10c202] pl-4">
                <h4 className="font-semibold text-gray-900">Project Scale</h4>
                <p className="text-gray-700 text-sm">Single boring to 60+ test locations per project</p>
              </div>
              <div className="border-l-4 border-[#10c202] pl-4">
                <h4 className="font-semibold text-gray-900">Testing Standards</h4>
                <p className="text-gray-700 text-sm">ASTM, AASHTO, and Philippine National Standards</p>
              </div>
              <div className="border-l-4 border-[#10c202] pl-4">
                <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                <p className="text-gray-700 text-sm">Certified procedures and equipment calibration</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Equipment & Methods</h3>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Drilling Equipment</h4>
                <p className="text-gray-700 text-sm">Truck-mounted drilling rigs with auger and wash boring capabilities</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">SPT Equipment</h4>
                <p className="text-gray-700 text-sm">Standard penetration testing with 140 lb hammer and split-spoon samplers</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Field Testing</h4>
                <p className="text-gray-700 text-sm">Nuclear density gauge and sand cone methods for compaction testing</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Laboratory</h4>
                <p className="text-gray-700 text-sm">Complete soil characterization and materials testing facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#028118] to-[#10c202] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6 text-center">Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/90 text-sm">Project Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-white/90 text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">42m</div>
              <div className="text-white/90 text-sm">Maximum Testing Depth</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/90 text-sm">Technical Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion & Contact */}
      <div className="p-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Conclusion</h2>
          <div className="w-24 h-1 bg-[#10c202] mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            RAK-JR Technical Testing Services represents excellence in geotechnical investigation and soil testing.
            With <strong>{totalProjects} successfully completed projects</strong> and a proven track record across diverse industries,
            we continue to be the trusted partner for construction projects throughout the Philippines.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose RAK-JR?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Proven Experience:</strong> 5+ years with {totalProjects}+ completed projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Technical Excellence:</strong> Modern equipment and certified procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Comprehensive Services:</strong> Complete geotechnical investigation capabilities</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Geographic Reach:</strong> Service coverage across major Philippine regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Industry Expertise:</strong> Experience across all construction sectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#10c202] rounded-full mt-2"></div>
                  <span><strong>Quality Assurance:</strong> Reliable results and professional reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#028118] to-[#10c202] rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Contact RAK-JR Technical Testing Services</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Ready to ensure your project's success? Get in touch with our geotechnical experts for
              professional soil testing and engineering services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-3">Get a Quote</h4>
              <p className="text-white/90 text-sm mb-4">
                Request a detailed project quotation tailored to your specific requirements.
              </p>
              <div className="text-sm text-white/80">
                Professional consultation available
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Technical Support</h4>
              <p className="text-white/90 text-sm mb-4">
                Speak with our engineering team about your geotechnical investigation needs.
              </p>
              <div className="text-sm text-white/80">
                Expert guidance provided
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Project Planning</h4>
              <p className="text-white/90 text-sm mb-4">
                Collaborate with us on testing scope and methodology for optimal results.
              </p>
              <div className="text-sm text-white/80">
                Customized solutions available
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/30">
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} RAK-JR Technical Testing Services. All rights reserved. | Professional geotechnical investigation and soil testing services across the Philippines.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;