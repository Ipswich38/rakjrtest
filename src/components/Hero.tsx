import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from 'figma:asset/480559e9672c0fc7f2443e634bff435c5bbd039a.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/20 rounded-full border border-[#10c202]/30 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#10c202]" />
              <span className="text-sm text-white">Trusted by 300+ construction projects since 2019</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Your Trusted Partner in
              <span className="block mt-2 bg-gradient-to-r from-[#10c202] to-[#fdc123] bg-clip-text text-transparent">
                Geotechnical Excellence
              </span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              Premier geotechnical investigation and materials testing services ensuring structural integrity and safety for construction projects across the Philippines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-[#10c202] hover:bg-[#028118] text-white px-8 text-lg h-14 rounded-full group"
              >
                Request a Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 hover:border-[#10c202] hover:bg-[#10c202]/10 text-white px-8 text-lg h-14 rounded-full backdrop-blur-sm"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8">
              <div>
                <div className="text-3xl md:text-4xl text-[#10c202] mb-1">21+</div>
                <div className="text-sm text-gray-300">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#10c202] mb-1">300+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#10c202] mb-1">85%</div>
                <div className="text-sm text-gray-300">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="RAK-JR soil boring and testing team in action"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#10c202] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-900">ASTM Certified</div>
                  <div className="text-sm text-gray-500">DPWH Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
