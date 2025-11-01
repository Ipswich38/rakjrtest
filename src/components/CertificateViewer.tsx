import { useState } from 'react';
import { Award, X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import certificateImage from 'figma:asset/30c8e5d3922e814e73d86fe99db7e4215ed0082d.png';

interface CertificateViewerProps {
  compact?: boolean;
}

export function CertificateViewer({ compact = false }: CertificateViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      {/* Compact Certificate Thumbnail */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(true)}
          onContextMenu={handleContextMenu}
          className="relative block w-full bg-gradient-to-br from-[#fdc123] to-[#f59e0b] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full -ml-8 -mb-8" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                  <Award size={20} className="text-[#fdc123]" />
                </div>
                <div className="text-left">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/20 rounded-full text-[10px] uppercase tracking-widest mb-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white">Valid Until Oct 3, 2027</span>
                  </div>
                  <h4 className="text-sm text-white tracking-tight">
                    DPWH Accredited
                  </h4>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                <ZoomIn size={16} className="text-white" />
              </div>
            </div>

            {/* Certificate Thumbnail */}
            <div className="bg-white rounded-lg p-2 shadow-md">
              <img
                src={certificateImage}
                alt="DPWH Certificate of Accreditation Preview"
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
                className="w-full h-auto rounded pointer-events-none select-none opacity-90 group-hover:opacity-100 transition-opacity"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              />
            </div>

            {/* Click to Zoom Text */}
            <div className="mt-2 flex items-center justify-center gap-1.5 text-white/90 text-xs">
              <ZoomIn size={12} />
              <span>Click to view certificate</span>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </button>

        {/* Floating Badge */}
        <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] shadow-lg">
          Accredited
        </div>
      </div>

      {/* Full View Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] p-0 overflow-hidden bg-black/95">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Hidden Accessibility Headers */}
            <DialogTitle className="sr-only">
              DPWH Certificate of Accreditation - RAK-JR Technical Testing Services
            </DialogTitle>
            <DialogDescription className="sr-only">
              Official Certificate of Accreditation from the Department of Public Works and Highways, valid from October 4, 2025 to October 3, 2027
            </DialogDescription>

            {/* Certificate Image - Full View */}
            <div className="p-8 overflow-auto max-h-[95vh]">
              <div className="bg-white rounded-lg p-4 inline-block min-w-full">
                <img
                  src={certificateImage}
                  alt="DPWH Certificate of Accreditation - RAK-JR Technical Testing Services accredited for materials testing for government infrastructure projects. Valid from October 4, 2025 to October 3, 2027"
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                  className="w-full h-auto select-none pointer-events-none"
                  style={{ 
                    userSelect: 'none', 
                    WebkitUserSelect: 'none',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>

              {/* Watermark Overlay */}
              <div className="text-center mt-4 text-white/60 text-sm">
                <p>© RAK-JR Technical Testing Services - For Viewing Only</p>
                <p className="text-xs mt-1">This certificate is protected and cannot be downloaded</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
