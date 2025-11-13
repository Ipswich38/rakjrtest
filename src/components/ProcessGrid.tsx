import { Phone, FileText, Truck, FlaskConical, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Consultation',
    description: 'Contact us with your project details. We discuss scope and requirements.'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Proposal',
    description: 'Detailed quotation within 24 hours with complete methodology.'
  },
  {
    icon: Truck,
    number: '03',
    title: 'Field Work',
    description: 'Team mobilizes to site with equipment for soil boring and testing.'
  },
  {
    icon: FlaskConical,
    number: '04',
    title: 'Lab Analysis',
    description: 'ASTM-compliant testing in our state-of-the-art laboratory.'
  },
  {
    icon: CheckCircle2,
    number: '05',
    title: 'Report',
    description: 'Comprehensive geotechnical report delivered within 5-7 days.'
  }
];

export function ProcessGrid() {
  return (
    <section id="process" className="py-24 bg-[#023c3d]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-[#10c202] mb-6">How We Work</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tighter leading-[0.9]">
            Simple,<br />Efficient Process
          </h2>
          <p className="text-white/70 leading-relaxed">
            From first contact to final report, we've streamlined our workflow for maximum efficiency and quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#10c202] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-3">{step.number}</div>
                  <h3 className="text-base text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stats */}
          <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-3xl p-10">
            <h3 className="text-2xl text-white mb-8 tracking-tight">Fast Turnaround</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-white/20">
                <span className="text-white text-sm">Quote Response</span>
                <span className="text-4xl text-white tracking-tight">24h</span>
              </div>
              <div className="flex items-center justify-between pb-5 border-b border-white/20">
                <span className="text-white text-sm">Mobilization</span>
                <span className="text-4xl text-white tracking-tight">2-3d</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Final Report</span>
                <span className="text-4xl text-white tracking-tight">5-7d</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-80">
            <img
              src="/calibration_final.jpeg"
              alt="Laboratory testing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl mb-2 tracking-tight">Advanced Equipment</h3>
              <p className="text-white/90 text-sm">ASTM-compliant laboratory facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
