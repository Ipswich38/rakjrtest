import { FlaskConical, Hammer, Search, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function ServicesGrid() {
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
              src="https://images.unsplash.com/photo-1569579957290-39e0ecd45d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwdGVzdGluZyUyMGZpZWxkfGVufDF8fHx8MTc2MTgyMzY0OXww&ixlib=rb-4.1.0&q=80&w=1080"
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
                <span>Soil Classification</span>
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
              <li className="flex items-start gap-2">
                <span className="text-[#10c202] mt-0.5">—</span>
                <span>Ultrasonic Testing</span>
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

        {/* Promotional Banner for Soil Assessment */}
        <div className="mt-6 bg-gradient-to-r from-[#fdc123] to-[#ff8c00] rounded-3xl p-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h3 className="text-2xl mb-2 tracking-tight">🎯 Try Our Free Soil Risk Assessment Tool</h3>
              <p className="text-white/90 text-sm">
                Get instant preliminary risk analysis for your project location before scheduling professional testing
              </p>
            </div>
            <Button 
              onClick={() => document.getElementById('soil-assessment')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-[#ff8c00] hover:bg-gray-100 rounded-full"
            >
              Try It Now
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
