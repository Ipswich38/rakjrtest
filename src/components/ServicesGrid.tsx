import { FlaskConical, Hammer, Search, FileCheck, ArrowRight, Award, Download, FileText, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { WhitepaperDownloadForm } from './WhitepaperDownloadForm';

export function ServicesGrid() {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showWhitepaperForm, setShowWhitepaperForm] = useState(false);

  const handleWhitepaperDownload = () => {
    setShowWhitepaperForm(true);
  };

  const handleCertificateDownload = () => {
    const link = document.createElement('a');
    link.href = '/Certificate.jpeg';
    link.download = 'RAK-JR_Certificate_of_Accreditation.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="services" className="py-24 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Large Text Block */}
          <div className="bg-[#028118] rounded-3xl p-12 md:p-16 flex flex-col justify-center text-white">
            <div className="text-xs uppercase tracking-widest text-[#10c202] mb-6">Our Services</div>
            <h2 className="text-4xl md:text-6xl tracking-tighter leading-[0.9] mb-8">
              Complete<br />Testing<br />Solutions
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed max-w-md">
              From initial soil investigation to final materials testing, we provide end-to-end geotechnical services.
            </p>
            <div>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-[#028118] hover:bg-gray-100 rounded-full"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] md:h-auto">
            <img
              src="/enhanced_psa.png"
              alt="Field investigation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl mb-2 tracking-tight">Field Investigation</h3>
              <p className="text-white/90 text-sm">Professional on-site testing and sampling</p>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#028118] to-[#10c202] flex items-center justify-center mb-6">
              <Search size={24} className="text-white" />
            </div>
            <h3 className="text-xl mb-3 tracking-tight">Soil Boring</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Comprehensive subsurface exploration using advanced drilling equipment and SPT methods
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Standard Penetration Test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Soil Sampling & Analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Groundwater Assessment</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10c202] to-[#fdc123] flex items-center justify-center mb-6">
              <FlaskConical size={24} className="text-white" />
            </div>
            <h3 className="text-xl mb-3 tracking-tight">Laboratory Testing</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              ASTM-compliant testing with state-of-the-art equipment
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Soil Classification - particle size distribution, plastic limit, liquid limit, plasticity index, specific gravity of soil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Compaction & CBR Tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Triaxial Testing</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fdc123] to-[#ff8c00] flex items-center justify-center mb-6">
              <Hammer size={24} className="text-white" />
            </div>
            <h3 className="text-xl mb-3 tracking-tight">NDT Services</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Non-destructive testing for quality assurance
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Core Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Rebound Hammer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row - Two Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accreditations */}
          <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-3xl p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl mb-4 tracking-tight">Certified & Accredited</h3>
            <p className="text-white/90 text-sm mb-6">Meeting the highest industry standards</p>
            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-2 bg-white/20 rounded-full backdrop-blur-sm text-xs tracking-wider">DPWH</div>
              <div className="px-5 py-2 bg-white/20 rounded-full backdrop-blur-sm text-xs tracking-wider">ASTM</div>
              <div className="px-5 py-2 bg-white/20 rounded-full backdrop-blur-sm text-xs tracking-wider">Manila Water</div>
              <div className="px-5 py-2 bg-white/20 rounded-full backdrop-blur-sm text-xs tracking-wider">Maynilad</div>
            </div>
          </div>

          {/* Geotechnical Reports */}
          <div className="bg-[#e2e2d9] rounded-3xl p-10 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#028118] flex items-center justify-center mb-6">
              <FileCheck size={24} className="text-white" />
            </div>
            <h3 className="text-2xl mb-3 tracking-tight">Detailed Reports</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Comprehensive geotechnical analysis with foundation recommendations, bearing capacity calculations, and settlement analysis
            </p>
          </div>
        </div>

        {/* Three Action Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Soil Risk Assessment Tool */}
          <div className="bg-gradient-to-r from-[#fdc123] to-[#ff8c00] rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl tracking-tight">Risk Assessment Tool</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Get instant preliminary risk analysis for your project location before scheduling professional testing
            </p>
            <Button
              onClick={() => document.getElementById('soil-assessment')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-[#ff8c00] hover:bg-gray-100 rounded-xl"
            >
              Try It Now
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Whitepaper */}
          <div className="bg-gradient-to-r from-[#028118] to-[#10c202] rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xl tracking-tight">Technical Whitepaper</h3>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Comprehensive technical documentation of our geotechnical investigation methodologies and best practices
            </p>
            <Button
              onClick={handleWhitepaperDownload}
              className="w-full bg-white text-[#028118] hover:bg-gray-100 rounded-xl"
            >
              <Download size={16} className="mr-2" />
              View & Download
            </Button>
          </div>

          {/* Certificate */}
          <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl tracking-tight">Accreditation</h3>
            </div>

            {/* Certificate Preview */}
            <div
              className="relative mb-4 cursor-pointer group rounded-lg overflow-hidden"
              onClick={() => setShowCertificateModal(true)}
            >
              <img
                src="/certificate_optimized.jpeg"
                alt="RAK-JR Certificate of Accreditation"
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} className="text-white" />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setShowCertificateModal(true)}
                variant="outline"
                className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-xl"
                size="sm"
              >
                <Maximize2 size={14} className="mr-1" />
                View
              </Button>
              <Button
                onClick={handleCertificateDownload}
                className="flex-1 bg-white text-[#6366f1] hover:bg-gray-100 rounded-xl"
                size="sm"
              >
                <Download size={14} className="mr-1" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Whitepaper Download Form */}
      <WhitepaperDownloadForm
        isOpen={showWhitepaperForm}
        onClose={() => setShowWhitepaperForm(false)}
      />

      {/* Certificate Modal */}
      <Dialog open={showCertificateModal} onOpenChange={setShowCertificateModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Certificate of Accreditation</span>
              <Button
                onClick={handleCertificateDownload}
                size="sm"
                className="bg-[#10c202] hover:bg-[#028118] text-white"
              >
                <Download size={16} className="mr-2" />
                Download
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <img
              src="/Certificate.jpeg"
              alt="RAK-JR Certificate of Accreditation - Full Size"
              className="w-full h-auto rounded-lg border"
            />

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certificate Details</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Organization:</strong> RAK-JR. TECHNICAL TESTING SERVICES</p>
                <p><strong>Accreditation:</strong> Private Testing Laboratory</p>
                <p><strong>Location:</strong> Block 6, Lot 24-F, Mt. Everest St., Mountain Heights Subd., Brgy. 183, Caloocan City, Metro Manila</p>
                <p><strong>Valid Period:</strong> October 4, 2025 to October 3, 2027</p>
                <p><strong>Issuing Authority:</strong> Department of Public Works and Highways</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
