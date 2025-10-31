import { Drill, FlaskConical, FileCheck, ArrowRight, Microscope, HardHat, TestTube } from 'lucide-react';

const mainServices = [
  {
    icon: Drill,
    title: 'Geotechnical Investigation',
    description: 'Advanced soil boring and subsurface exploration up to 35 meters depth with comprehensive analysis.',
    link: 'Explore services'
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Testing',
    description: 'ASTM-compliant soil analysis and materials testing with state-of-the-art equipment.',
    link: 'Explore testing'
  },
  {
    icon: FileCheck,
    title: 'Engineering Reports',
    description: 'Detailed geotechnical reports prepared by licensed professional engineers with actionable recommendations.',
    link: 'Explore reports'
  }
];

// Accreditations
const accreditations = [
  { name: 'DPWH Accredited' },
  { name: 'Manila Water Approved' },
  { name: 'Maynilad Approved' },
  { name: 'ASTM Standards' },
  { name: 'DTI Registered' }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Accreditations Section */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-8">Accredited & Trusted Provider</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
            {accreditations.map((accreditation, index) => (
              <div 
                key={index} 
                className="text-white/80 text-xl px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                {accreditation.name}
              </div>
            ))}
          </div>
        </div>

        {/* Main Service Cards */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <button className="flex items-center justify-center gap-2 mx-auto text-[#028118] hover:text-[#10c202] transition-colors group bg-[#10c202]/10 hover:bg-[#10c202]/20 px-6 py-3 rounded-full">
                    <span className="w-6 h-6 bg-[#028118] group-hover:bg-[#10c202] rounded-full flex items-center justify-center transition-colors">
                      <ArrowRight size={14} className="text-white" />
                    </span>
                    <span>{service.link}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300">
              Complete geotechnical solutions aligned with ASTM, AASHTO, and Philippine standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Drill,
                title: 'Soil Boring & Exploration',
                description: 'Systematic subsurface investigations to determine soil stratification, bearing capacity, and groundwater levels',
                features: ['Up to 35m depth capability', 'Undisturbed sampling', 'SPT testing', 'Foundation recommendations']
              },
              {
                icon: TestTube,
                title: 'Soil Classification',
                description: 'Comprehensive analysis of soil properties and characteristics',
                features: ['Particle size distribution', 'Atterberg limits', 'Moisture content', 'Specific gravity tests']
              },
              {
                icon: HardHat,
                title: 'Compaction & Density',
                description: 'Field and laboratory compaction testing for quality control',
                features: ['Standard Proctor test', 'Field density testing', 'Sand cone method', 'Relative compaction']
              },
              {
                icon: Microscope,
                title: 'Strength Testing',
                description: 'Determining soil strength and bearing capacity parameters',
                features: ['CBR testing', 'Unconfined compression', 'Bearing capacity analysis', 'Settlement prediction']
              },
              {
                icon: FlaskConical,
                title: 'Aggregate Testing',
                description: 'Quality assessment of construction aggregates',
                features: ['Specific gravity & absorption', 'LA abrasion test', 'Soundness testing', 'Gradation analysis']
              },
              {
                icon: FileCheck,
                title: 'Non-Destructive Testing',
                description: 'On-site evaluation without structural damage',
                features: ['Rebound hammer testing', 'Rebar scanning', 'Concrete coring', 'Thickness measurement']
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-[#10c202] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
