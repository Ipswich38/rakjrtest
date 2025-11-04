import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#e2e2d9] text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div className="md:col-span-2">
            <img src="/rjlogonew.png" alt="RAK-JR Logo" className="h-12 w-auto mb-6" />
            <h3 className="text-lg mb-4 tracking-tight">RAK-JR. Technical Testing Services</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md mb-6">
              Professional geotechnical testing services since 2019. Building on a foundation of trust and technical excellence.
            </p>
            <div className="flex gap-6 text-sm text-gray-700">
              <div>
                <div className="text-2xl text-[#028118] mb-1 tracking-tight">21+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
              <div>
                <div className="text-2xl text-[#028118] mb-1 tracking-tight">300+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-2xl text-[#028118] mb-1 tracking-tight">85%</div>
                <div className="text-xs text-gray-600">Retention</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-tight mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-gray-700 hover:text-[#028118] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-sm text-gray-700 hover:text-[#028118] transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-gray-700 hover:text-[#028118] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-gray-700 hover:text-[#028118] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-tight mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#028118] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Caloocan City, Metro Manila
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#028118] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  (02) 8832-3170
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#028118] flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:rakjunior_since2019@yahoo.com" 
                  className="text-sm text-gray-700 hover:text-[#028118] transition-colors break-all"
                >
                  rakjunior_since2019@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} RAK-JR. Technical Testing Services. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span className="text-xs px-3 py-1 bg-white rounded-full">DPWH Accredited</span>
              <span className="text-xs px-3 py-1 bg-white rounded-full">ASTM Compliant</span>
              <span className="text-xs px-3 py-1 bg-white rounded-full">DTI Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
