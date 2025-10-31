import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export function ContactGrid() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    timeline: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Quote Request: ${formData.projectType} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Location: ${formData.location}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim();
    
    window.location.href = `mailto:rakjunior_since2019@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success('Opening email client...', {
      description: 'Your quote request will be sent via email.'
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#023c3d]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-[#10c202] mb-6">Get In Touch</div>
          <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tighter leading-[0.9]">
            Let's Build<br />Together
          </h2>
          <p className="text-white/70 leading-relaxed">
            Whether you're planning major infrastructure, commercial development, or residential construction, we're ready to provide the expertise you need.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info - Single Column */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                <MapPin size={20} className="text-white" />
              </div>
              <h4 className="text-white text-sm mb-3 tracking-tight">Address</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                B6,L24-E, Mt. Everest St., Mountain Hts. Subd., Brgy. 183, Tala, Caloocan City 1400, Metro Manila
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                <Phone size={20} className="text-white" />
              </div>
              <h4 className="text-white text-sm mb-3 tracking-tight">Phone</h4>
              <p className="text-xs text-white/70">(02) 8832-3170</p>
              <p className="text-xs text-white/70">0918-214-4273</p>
              <p className="text-xs text-white/70">0933-501-9853</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                <Mail size={20} className="text-white" />
              </div>
              <h4 className="text-white text-sm mb-3 tracking-tight">Email</h4>
              <a href="mailto:rakjunior_since2019@yahoo.com" className="text-xs text-[#10c202] hover:underline break-all">
                rakjunior_since2019@yahoo.com
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 bg-[#10c202] rounded-xl flex items-center justify-center mb-4">
                <Clock size={20} className="text-white" />
              </div>
              <h4 className="text-white text-sm mb-3 tracking-tight">Business Hours</h4>
              <p className="text-xs text-white/70">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-xs text-white/70">Sat: 8:00 AM - 12:00 PM</p>
            </div>
          </div>

          {/* Quote Form - Two Columns */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl text-gray-900 mb-8 tracking-tight">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                />
                <Input
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  required
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select required value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                  <SelectTrigger className="h-12 rounded-xl border-gray-200">
                    <SelectValue placeholder="Project Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soil-boring">Soil Boring & Investigation</SelectItem>
                    <SelectItem value="laboratory">Laboratory Testing</SelectItem>
                    <SelectItem value="ndt">Non-Destructive Testing</SelectItem>
                    <SelectItem value="residential">Residential Development</SelectItem>
                    <SelectItem value="commercial">Commercial Building</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure Project</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  required
                  placeholder="Project Location *"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                />
              </div>

              <Input
                placeholder="Desired Timeline"
                value={formData.timeline}
                onChange={(e) => handleChange('timeline', e.target.value)}
                className="h-12 rounded-xl border-gray-200"
              />

              <Textarea
                required
                placeholder="Project Description *"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="min-h-32 rounded-xl border-gray-200"
              />

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#10c202] hover:bg-[#028118] text-white h-12 rounded-xl"
              >
                <Send size={18} className="mr-2" />
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-80">
            <img
              src="https://images.unsplash.com/photo-1640101086894-7d70c3e70179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZvdW5kYXRpb258ZW58MXx8fHwxNzYxODEwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Construction foundation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl mb-2 tracking-tight">Foundation Excellence</h3>
              <p className="text-white/90 text-sm">Building on solid ground</p>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-3xl p-10 flex flex-col justify-center text-white">
            <h3 className="text-2xl mb-6 tracking-tight">Why Choose RAK-JR?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#fdc123] mt-0.5">—</span>
                <span>21+ years combined experience</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#fdc123] mt-0.5">—</span>
                <span>DPWH, Manila Water, Maynilad accredited</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#fdc123] mt-0.5">—</span>
                <span>ASTM-compliant laboratory</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#fdc123] mt-0.5">—</span>
                <span>300+ successful projects</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="text-[#fdc123] mt-0.5">—</span>
                <span>Fast turnaround (5-7 days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
