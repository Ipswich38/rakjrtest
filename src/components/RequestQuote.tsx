import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FileText, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function RequestQuote() {
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
    
    // Create mailto link with form data
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
    <section id="quote" className="py-32 bg-[#023c3d]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/20 rounded-full mb-6 border border-[#10c202]/30">
              <FileText size={16} className="text-[#10c202]" />
              <span className="text-sm text-white">Request a Quote</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Get a Detailed Quotation
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll provide a comprehensive quotation within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="h-12 rounded-xl border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Company</label>
                  <Input
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="h-12 rounded-xl border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="h-12 rounded-xl border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="0918-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="h-12 rounded-xl border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Project Type *</label>
                  <Select required value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select project type" />
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
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Project Location *</label>
                  <Input
                    required
                    placeholder="City, Province"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="h-12 rounded-xl border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Desired Timeline</label>
                <Input
                  placeholder="e.g., Within 2 weeks, ASAP, etc."
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  className="h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Project Description *</label>
                <Textarea
                  required
                  placeholder="Please provide details about your project including: type of structure, number of stories, estimated loads, specific testing requirements, site conditions, etc."
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="min-h-32 rounded-xl border-gray-300"
                />
              </div>

              <div className="bg-[#10c202]/10 rounded-xl p-6 border border-[#10c202]/20">
                <p className="text-gray-700">
                  <strong>What happens next?</strong> Our team will review your request and contact you within 24 hours with a detailed quotation including scope of work, testing program, deliverables, and pricing.
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-[#10c202] hover:bg-[#028118] text-white h-14 rounded-xl text-lg"
              >
                <Send size={20} className="mr-2" />
                Submit Quote Request
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl text-[#10c202] mb-2">5-7</div>
              <div className="text-white">Days Turnaround</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl text-[#10c202] mb-2">24h</div>
              <div className="text-white">Quote Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl text-[#10c202] mb-2">300+</div>
              <div className="text-white">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
