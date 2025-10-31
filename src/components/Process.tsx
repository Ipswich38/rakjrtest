import { Phone, Calendar, Wrench, FileText, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Initial Consultation & Planning',
    description: 'We begin by understanding your project requirements, proposed structures, site conditions, and specific testing needs to recommend an appropriate investigation program.'
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Field Investigation',
    description: 'Our experienced field crews mobilize to your site with appropriate drilling equipment, documenting soil conditions and collecting samples while maintaining safety protocols.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Laboratory Analysis',
    description: 'Samples are tested in our ASTM-compliant laboratory by trained technicians using calibrated equipment following international quality control standards.'
  },
  {
    icon: FileText,
    number: '04',
    title: 'Engineering Analysis & Reporting',
    description: 'Licensed engineers analyze data to develop comprehensive reports including soil profiles, engineering properties, and foundation design recommendations.'
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Report Delivery & Support',
    description: 'Final reports are delivered digitally and in hard copy, signed and sealed by licensed engineers. We remain available for technical clarifications and coordination.'
  }
];

export function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/20 rounded-full mb-6 border border-[#10c202]/30">
            <span className="text-sm text-white">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Simple, Efficient, Professional
          </h2>
          <p className="text-xl text-gray-300">
            Quality results require systematic processes. Here's how we ensure consistent excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#10c202] to-[#028118] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl text-[#fdc123]">{step.number}</span>
                      <h3 className="text-xl text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759677472112-128df0fe4433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwdGVzdGluZyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYxNzQ5NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory testing equipment"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
              <div className="text-5xl text-[#10c202] mb-2">5-7</div>
              <div className="text-gray-700">days average turnaround time for comprehensive geotechnical reports</div>
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="max-w-4xl mx-auto mt-24 bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
          <h3 className="text-2xl text-white mb-6 text-center">Quality Assurance Commitment</h3>
          <p className="text-gray-300 text-center leading-relaxed">
            All test results are based on validated methods, calibrated equipment, and trained personnel following international good laboratory practices. We maintain strict adherence to ASTM, AASHTO, and National Structural Code of the Philippines standards.
          </p>
        </div>
      </div>
    </section>
  );
}
