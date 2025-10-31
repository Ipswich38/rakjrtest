import { Target, Eye, Award, Shield, TrendingUp, Users } from 'lucide-react';

export function AboutGrid() {
  return (
    <section id="about" className="py-24 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        {/* Top Grid - About Text and Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* About Text - Tall */}
          <div className="bg-[#e2e2d9] rounded-3xl p-12 md:p-16 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-[#028118] mb-6">About RAK-JR</div>
            <h2 className="text-4xl md:text-6xl text-gray-900 mb-8 tracking-tighter leading-[0.9]">
              Built on Trust
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2019 by seasoned professionals with extensive experience in geological surveys and materials testing, <strong>RAK-JR. Technical Testing Services</strong> has rapidly established itself as a trusted name in the Philippine construction industry.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We serve government agencies, multinational corporations, private developers, and engineering consultants throughout Metro Manila, Luzon, and beyond.
            </p>
          </div>

          {/* Mission & Vision Stack */}
          <div className="grid grid-rows-2 gap-6">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#028118] to-[#10c202] rounded-3xl p-8 text-white flex flex-col justify-center">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Target size={20} className="text-white" />
              </div>
              <h3 className="text-xl mb-4 tracking-tight">Our Mission</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To be the leading technical testing laboratory in the Philippines by consistently delivering high-quality, accurate testing services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#fdc123] to-[#ff8c00] rounded-3xl p-8 text-white flex flex-col justify-center">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <Eye size={20} className="text-white" />
              </div>
              <h3 className="text-xl mb-4 tracking-tight">Our Vision</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To be recognized as the most competitive and trusted geotechnical service provider in the Philippines.
              </p>
            </div>
          </div>
        </div>

        {/* Values Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          {[
            { icon: Award, title: 'Excellence', color: 'bg-[#10c202]' },
            { icon: Shield, title: 'Integrity', color: 'bg-[#028118]' },
            { icon: TrendingUp, title: 'Reliability', color: 'bg-[#fdc123]' },
            { icon: Target, title: 'Innovation', color: 'bg-[#10c202]' },
            { icon: Users, title: 'Teamwork', color: 'bg-[#028118]' },
            { icon: Eye, title: 'Sustainability', color: 'bg-[#fdc123]' }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all">
                <div className={`w-10 h-10 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="text-gray-900 text-sm tracking-tight">{value.title}</div>
              </div>
            );
          })}
        </div>

        {/* Leadership */}
        <div className="mb-8">
          <h3 className="text-2xl text-gray-900 mb-6 tracking-tight">Leadership Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Leader 1 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-[#028118] to-[#10c202] rounded-full flex items-center justify-center text-white text-xl mb-5">
              AB
            </div>
            <h4 className="text-lg text-gray-900 mb-2 tracking-tight">Ariel Domingo Bautista</h4>
            <p className="text-[#028118] text-sm mb-3">Founder & General Manager</p>
            <p className="text-xs text-gray-600 mb-1">B.S. Mechanical Engineering</p>
            <p className="text-xs text-gray-600 mb-4">Technological University of the Philippines</p>
            <p className="text-gray-700 text-xs leading-relaxed mb-3">
              21+ years in geotechnical investigation
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Extensive experience in major infrastructure, commercial buildings, and government facilities across the Philippines.
            </p>
          </div>

          {/* Leader 2 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-[#10c202] to-[#fdc123] rounded-full flex items-center justify-center text-white text-xl mb-5">
              MD
            </div>
            <h4 className="text-lg text-gray-900 mb-2 tracking-tight">Miguel Dimadura</h4>
            <p className="text-[#028118] text-sm mb-3">Consulting Geotechnical Engineer</p>
            <p className="text-xs text-gray-600 mb-1">M.CivEng</p>
            <p className="text-xs text-gray-600 mb-4">PRC License No. 59571</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Professional Civil Engineer specializing in geotechnical and substructural engineering with advanced academic credentials.
            </p>
          </div>

          {/* Leader 3 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-[#fdc123] to-[#ff8c00] rounded-full flex items-center justify-center text-white text-xl mb-5">
              BG
            </div>
            <h4 className="text-lg text-gray-900 mb-2 tracking-tight">Bryan Angelo Gammad</h4>
            <p className="text-[#028118] text-sm mb-3">Geotechnical Engineering Consultant</p>
            <p className="text-xs text-gray-600 mb-1">M.Sc.E</p>
            <p className="text-xs text-gray-600 mb-4">PRC License No. 0136159</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Professional Civil Engineer providing expert analysis for complex geotechnical challenges and foundation design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
