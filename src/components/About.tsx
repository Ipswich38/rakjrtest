import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Our clients depend on us for accurate data and timely delivery – we never compromise on reliability'
  },
  {
    icon: Award,
    title: 'Trustworthy',
    description: 'We operate with transparency, honesty, and unwavering commitment to ethical practices'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Collaboration and knowledge-sharing drive our success and complex problem-solving'
  },
  {
    icon: Eye,
    title: 'Service Matters',
    description: 'We are committed to sustainable practices and responsible stewardship in all our services'
  }
];

const leaders = [
  {
    name: 'Ariel Domingo Bautista',
    title: 'Founder & General Manager',
    education: 'B.S. Mechanical Engineering',
    school: 'Technological University of the Philippines',
    experience: '21+ years in geotechnical investigation',
    description: 'Extensive experience in major infrastructure, commercial buildings, residential complexes, and government facilities across the Philippines.'
  },
  {
    name: 'Miguel Dimadura, M.CivEng',
    title: 'Consulting Geotechnical Engineer',
    license: 'PRC License No. 59571',
    description: 'Professional Civil Engineer specializing in geotechnical and substructural engineering with advanced academic credentials.'
  }
];

export function About() {
  return (
    <section id="about" className="py-32 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/10 rounded-full mb-6 border border-[#10c202]/20">
              <span className="text-sm text-[#028118]">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Building on a Foundation of Trust and Excellence
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2019 by seasoned professionals with extensive experience in geological surveys and materials testing, <strong>RAK-JR. Technical Testing Services</strong> has rapidly established itself as a trusted name in the Philippine construction and engineering industry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We specialize in three core areas: <strong>Geotechnical Exploration and Investigation</strong>, <strong>Engineering Consulting Services</strong>, and <strong>Advanced Laboratory Testing and Analysis</strong>. Our multidisciplinary approach combines field investigations with sophisticated laboratory analysis.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Understanding soil behavior is fundamental to construction success. The Philippines' diverse geological landscape presents unique challenges that require specialized knowledge. We serve government agencies, multinational corporations, private developers, and engineering consultants throughout Metro Manila, Luzon, and beyond.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-[#028118] to-[#10c202] rounded-3xl p-10 text-white shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-3xl mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To offer services to end users and be the leading technical testing laboratory in the Philippines by offering high quality, efficient and accurate testing with fast and reliable turnaround times.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#fdc123] to-[#ff8c00] rounded-3xl p-10 text-white shadow-xl">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-white" />
            </div>
            <h3 className="text-3xl mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To be the most competitive and most reliable service provider to end users.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Core Values</h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Leadership & Technical Expertise</h3>
            <p className="text-xl text-gray-600">Guided by experienced professionals committed to excellence</p>
          </div>

          <div className="space-y-6">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#028118] to-[#10c202] rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl text-gray-900 mb-2">{leader.name}</h4>
                    <p className="text-[#028118] mb-2">{leader.title}</p>
                    {leader.education && <p className="text-gray-600 text-sm mb-1">{leader.education}, {leader.school}</p>}
                    {leader.license && <p className="text-gray-600 text-sm mb-1">{leader.license}</p>}
                    {leader.experience && <p className="text-gray-600 text-sm mb-3 italic">{leader.experience}</p>}
                    <p className="text-gray-700 leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
