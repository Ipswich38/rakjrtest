import { useState } from 'react';
import { Download, FileText, Award, Maximize2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export function DocumentsSection() {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handleWhitepaperDownload = () => {
    // Navigate to whitepaper page which handles the download
    window.open('/whitepaper', '_blank');
  };

  const handleCertificateDownload = () => {
    // Create download link for the certificate
    const link = document.createElement('a');
    link.href = '/Certificate.jpeg';
    link.download = 'RAK-JR_Certificate_of_Accreditation.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Documents Section */}
      <div className="bg-gradient-to-br from-[#028118] to-[#10c202] rounded-3xl p-10 text-white mt-20">
        <div className="text-center mb-8">
          <h3 className="text-3xl mb-4">Documents & Certifications</h3>
          <p className="text-white/90 text-lg">
            Access our technical documentation and accreditation certificates
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Whitepaper */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl text-white mb-1">Technical Whitepaper</h4>
                <p className="text-white/80 text-sm">Comprehensive technical documentation</p>
              </div>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Detailed analysis of our geotechnical investigation methodologies, testing procedures, and industry best practices.
            </p>
            <Button
              onClick={handleWhitepaperDownload}
              className="w-full bg-white text-[#028118] hover:bg-gray-100 rounded-xl"
            >
              <Download size={16} className="mr-2" />
              View & Download Whitepaper
            </Button>
          </div>

          {/* Certificate */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl text-white mb-1">Accreditation Certificate</h4>
                <p className="text-white/80 text-sm">DPWH-certified testing laboratory</p>
              </div>
            </div>

            {/* Certificate Preview */}
            <div
              className="relative mb-4 cursor-pointer group"
              onClick={() => setShowCertificateModal(true)}
            >
              <img
                src="/certificate_optimized.jpeg"
                alt="RAK-JR Certificate of Accreditation"
                className="w-full h-40 object-cover rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-all"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setShowCertificateModal(true)}
                variant="outline"
                className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-xl"
              >
                <Maximize2 size={16} className="mr-2" />
                View
              </Button>
              <Button
                onClick={handleCertificateDownload}
                className="flex-1 bg-white text-[#028118] hover:bg-gray-100 rounded-xl"
              >
                <Download size={16} className="mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={showCertificateModal} onOpenChange={setShowCertificateModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Certificate of Accreditation</span>
              <Button
                onClick={handleCertificateDownload}
                size="sm"
                className="bg-[#10c202] hover:bg-[#028118] text-white"
              >
                <Download size={16} className="mr-2" />
                Download
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <img
              src="/Certificate.jpeg"
              alt="RAK-JR Certificate of Accreditation - Full Size"
              className="w-full h-auto rounded-lg border"
            />

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certificate Details</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Organization:</strong> RAK-JR. TECHNICAL TESTING SERVICES</p>
                <p><strong>Accreditation:</strong> Private Testing Laboratory</p>
                <p><strong>Location:</strong> Block 6, Lot 24-F, Mt. Everest St., Mountain Heights Subd., Brgy. 183, Caloocan City, Metro Manila</p>
                <p><strong>Valid Period:</strong> October 4, 2025 to October 3, 2027</p>
                <p><strong>Issuing Authority:</strong> Department of Public Works and Highways</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}