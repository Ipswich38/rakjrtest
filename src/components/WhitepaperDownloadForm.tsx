import React, { useState } from 'react';
import { Download, FileText, User, Mail, Phone, Building, FileCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface WhitepaperDownloadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhitepaperDownloadForm({ isOpen, onClose }: WhitepaperDownloadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [downloadType, setDownloadType] = useState<'whitepaper' | 'profile' | 'both'>('both');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Determine what's being downloaded
      const downloadText = downloadType === 'whitepaper'
        ? 'Technical Whitepaper'
        : downloadType === 'profile'
        ? 'Company Profile'
        : 'Technical Whitepaper & Company Profile';

      // Create email content
      const emailSubject = encodeURIComponent(`Document Download Request - RAK-JR Technical Testing Services`);
      const emailBody = encodeURIComponent(`
New document download request:

Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.contact}
Document(s) Requested: ${downloadText}
Request Date: ${new Date().toLocaleString()}

Please process this download request.

Best regards,
RAK-JR Website System
      `);

      // Open email client with pre-filled information
      window.open(`mailto:rakjunior_since2019@yahoo.com?subject=${emailSubject}&body=${emailBody}`, '_blank');

      // Trigger document downloads based on selection
      setTimeout(() => {
        if (downloadType === 'whitepaper' || downloadType === 'both') {
          const whitepaperLink = document.createElement('a');
          whitepaperLink.href = '/RAKJR-whitepaper (3).pdf';
          whitepaperLink.download = 'RAK-JR_Technical_Whitepaper.pdf';
          document.body.appendChild(whitepaperLink);
          whitepaperLink.click();
          document.body.removeChild(whitepaperLink);
        }

        if (downloadType === 'profile' || downloadType === 'both') {
          setTimeout(() => {
            const profileLink = document.createElement('a');
            profileLink.href = '/RAKJR-whitepaper_company_profile.pdf';
            profileLink.download = 'RAK-JR_Company_Profile.pdf';
            document.body.appendChild(profileLink);
            profileLink.click();
            document.body.removeChild(profileLink);
          }, downloadType === 'both' ? 1000 : 0);
        }
      }, 500);

      // Reset form and close dialog
      setFormData({ name: '', email: '', contact: '' });
      onClose();

      // Show success message
      const successMessage = downloadType === 'both'
        ? 'Thank you! Your downloads will begin shortly, and we\'ve been notified of your request.'
        : 'Thank you! Your download will begin shortly, and we\'ve been notified of your request.';
      alert(successMessage);

    } catch (error) {
      console.error('Error processing download:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.contact.trim();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <FileText size={24} className="text-[#10c202]" />
            Download Documents
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#028118] to-[#10c202] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText size={32} className="text-white" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Please provide your details to download our technical documents including whitepaper and company profile.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={16} className="text-[#10c202]" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10c202] focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail size={16} className="text-[#10c202]" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10c202] focus:border-transparent transition-all"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone size={16} className="text-[#10c202]" />
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10c202] focus:border-transparent transition-all"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Download Options */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Download size={16} className="text-[#10c202]" />
                Select Documents to Download
              </label>

              <div className="grid gap-3">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#10c202] transition-all">
                  <input
                    type="radio"
                    name="downloadType"
                    value="both"
                    checked={downloadType === 'both'}
                    onChange={(e) => setDownloadType(e.target.value as any)}
                    className="w-4 h-4 text-[#10c202] border-gray-300 focus:ring-[#10c202]"
                  />
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#028118] to-[#10c202] rounded-lg flex items-center justify-center">
                      <FileCheck size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Both Documents</p>
                      <p className="text-sm text-gray-600">Technical Whitepaper + Company Profile</p>
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#10c202] transition-all">
                  <input
                    type="radio"
                    name="downloadType"
                    value="whitepaper"
                    checked={downloadType === 'whitepaper'}
                    onChange={(e) => setDownloadType(e.target.value as any)}
                    className="w-4 h-4 text-[#10c202] border-gray-300 focus:ring-[#10c202]"
                  />
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#10c202] to-[#fdc123] rounded-lg flex items-center justify-center">
                      <FileText size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Technical Whitepaper</p>
                      <p className="text-sm text-gray-600">Geotechnical investigation methodologies</p>
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#10c202] transition-all">
                  <input
                    type="radio"
                    name="downloadType"
                    value="profile"
                    checked={downloadType === 'profile'}
                    onChange={(e) => setDownloadType(e.target.value as any)}
                    className="w-4 h-4 text-[#10c202] border-gray-300 focus:ring-[#10c202]"
                  />
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#fdc123] to-[#ff8c00] rounded-lg flex items-center justify-center">
                      <Building size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Company Profile</p>
                      <p className="text-sm text-gray-600">Complete business overview and capabilities</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gradient-to-r from-[#028118] to-[#10c202] hover:from-[#10c202] hover:to-[#028118] text-white font-medium py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <Download size={18} className="mr-2" />
                    {downloadType === 'whitepaper'
                      ? 'Download Whitepaper'
                      : downloadType === 'profile'
                      ? 'Download Company Profile'
                      : 'Download Documents'
                    }
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Disclaimer */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              By downloading these documents, you agree to receive communications from RAK-JR Technical Testing Services.
              Your information will be kept confidential and used only for business purposes.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}