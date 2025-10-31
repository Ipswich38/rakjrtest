import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'B6,L24-E, Mt. Everest St., Mountain Hts. Subd., Brgy. 183, Tala, Caloocan City 1400, Metro Manila, Philippines'
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: '(02) 8832-3170'
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '0918-214-4273 / 0933-501-9853'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'rakjunior_since2019@yahoo.com'
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday to Friday: 8:00 AM - 5:00 PM\nSaturday: 8:00 AM - 12:00 PM'
  },
  {
    icon: Building2,
    label: 'Services',
    value: 'Geotechnical Investigation, Laboratory Testing, Non-Destructive Testing'
  }
];

const projectInfo = [
  { label: 'Project location and site plan', required: true },
  { label: 'Type and scale of proposed structure', required: true },
  { label: 'Number of stories and estimated loads', required: false },
  { label: 'Specific testing requirements', required: false },
  { label: 'Project timeline and reporting deadlines', required: false }
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/10 rounded-full mb-6 border border-[#10c202]/20">
              <span className="text-sm text-[#028118]">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're planning major infrastructure, commercial development, or residential construction, we're ready to provide the geotechnical expertise you need for success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#10c202] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-[#028118] mb-1">{info.label}</p>
                          <p className="text-gray-800 leading-relaxed whitespace-pre-line">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Request a Quotation */}
            <div>
              <h3 className="text-2xl text-gray-900 mb-8">Request a Quotation</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To receive a detailed quotation for your project, please contact us with the following information:
                </p>
                <ul className="space-y-4">
                  {projectInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#10c202] mt-1">
                        {item.required ? '●' : '○'}
                      </span>
                      <span className="text-gray-700">{item.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#10c202]/10 to-[#fdc123]/10 rounded-xl border border-[#10c202]/20">
                  <p className="text-gray-800">
                    <strong>Fast Turnaround:</strong> Comprehensive geotechnical reports delivered within 5-7 working days from fieldwork completion.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 bg-gradient-to-br from-[#028118] to-[#10c202] rounded-2xl p-8 text-white shadow-xl">
                <h4 className="text-2xl mb-4">Why Choose RAK-JR?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fdc123]">✓</span>
                    <span>Licensed professional engineers with 21+ years combined experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fdc123]">✓</span>
                    <span>ASTM-compliant laboratory with state-of-the-art equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fdc123]">✓</span>
                    <span>DPWH, Manila Water, and Maynilad accredited</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fdc123]">✓</span>
                    <span>300+ successful projects with 85% client retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fdc123]">✓</span>
                    <span>Competitive pricing with transparent quotations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#fdc123] to-[#ff8c00] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a consultation and detailed quotation for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0288323170" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#028118] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg"
              >
                <Phone size={20} />
                <span>Call Us Now</span>
              </a>
              <a 
                href="mailto:rakjunior_since2019@yahoo.com" 
                className="inline-flex items-center justify-center gap-2 bg-[#028118] text-white px-8 py-4 rounded-full hover:bg-[#023c3d] transition-all shadow-lg"
              >
                <Mail size={20} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
