import { useState } from 'react';
import { FileText, Award, ZoomIn, X, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReportItem {
  id: string;
  type: 'report' | 'certificate';
  title: string;
  subtitle: string;
  projectName?: string;
  location?: string;
  client?: string;
  date?: string;
  evaluatedBy?: string;
  imageUrl: string;
  details?: {
    label: string;
    value: string;
  }[];
}

const PORTFOLIO_ITEMS: ReportItem[] = [
  {
    id: 'report-1',
    type: 'report',
    title: 'Geotechnical Investigation Report',
    subtitle: 'Seven (7) Storey Building',
    projectName: 'Prop. Seven (7) Storey Building',
    location: 'La Salle Cor Ermin Garcia St., Brgy. Silangan, Cubao, Quezon City',
    client: 'PENDRAGON ANIMAL HEALTH GROUP INC.',
    date: 'March 12, 2022 - March 17, 2022',
    evaluatedBy: 'Engr. Bryan Angelo Gammad - Geotechnical Engineering Consultant',
    imageUrl: 'https://images.unsplash.com/photo-1754780960162-839cda44d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBkb2N1bWVudHxlbnwxfHx8fDE3NjE5NTcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      { label: 'Project Name', value: 'Prop. Seven (7) Storey Building' },
      { label: 'Location', value: 'La Salle Cor Ermin Garcia St., Brgy. Silangan, Cubao, Quezon City' },
      { label: 'Client', value: 'PENDRAGON ANIMAL HEALTH GROUP INC.' },
      { label: 'Duration', value: 'March 12, 2022 - March 17, 2022' },
      { label: 'Evaluated By', value: 'Engr. Bryan Angelo Gammad - Geotechnical Engineering Consultant' },
    ]
  },
  {
    id: 'report-2',
    type: 'report',
    title: 'Geotechnical Investigation Report',
    subtitle: 'Three (3) Storey Residential Building',
    projectName: 'Proposed Three (3) Storey Residential Building',
    location: 'Blk. 25A Lot 14 Phase 4 Mangahan Ave. Buenamar Subd. QLC',
    client: 'RLA HOMES DTFASCO',
    date: 'August 12, 2022',
    evaluatedBy: 'Engr. Bryan Gammad - Consulting Geotechnical / Sub Structural Engr.',
    imageUrl: 'https://images.unsplash.com/photo-1568057373106-63057e421d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHJlcG9ydCUyMHBhcGVyc3xlbnwxfHx8fDE3NjE5NTcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      { label: 'Project Name', value: 'Proposed Three (3) Storey Residential Building' },
      { label: 'Location', value: 'Blk. 25A Lot 14 Phase 4 Mangahan Ave. Buenamar Subd. QLC' },
      { label: 'Client', value: 'RLA HOMES DTFASCO' },
      { label: 'Date', value: 'August 12, 2022' },
      { label: 'Evaluated By', value: 'Engr. Bryan Gammad - Consulting Geotechnical / Sub Structural Engr.' },
    ]
  },
  {
    id: 'report-3',
    type: 'report',
    title: 'Geotechnical Investigation Report',
    subtitle: 'Eight (8) Units, Ten (10) Storey Condominium',
    projectName: 'Proposed Eight (8) Units, Ten (10) Storey Condominium Building',
    location: 'Brgy. Tambo, Lipa City, Batangas',
    client: 'JT MOLAND NOVO HOMES',
    date: 'September 15, 2025',
    evaluatedBy: 'Engr. Miguel Dimadura - Consulting Geotechnical / Sub Structural Engr.',
    imageUrl: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkb2N1bWVudCUyMG9mZmljZXxlbnwxfHx8fDE3NjE5NTcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      { label: 'Project Name', value: 'Proposed Eight (8) Units, Ten (10) Storey Condominium Building' },
      { label: 'Location', value: 'Brgy. Tambo, Lipa City, Batangas' },
      { label: 'Owner', value: 'JT MOLAND NOVO HOMES' },
      { label: 'Date Started', value: 'September 15, 2025' },
      { label: 'Evaluated By', value: 'Engr. Miguel Dimadura - Consulting Geotechnical / Sub Structural Engr.' },
    ]
  },
  {
    id: 'dpwh-cert',
    type: 'certificate',
    title: 'DPWH Certificate of Accreditation',
    subtitle: 'Official Government Accreditation',
    imageUrl: 'figma:asset/3b2d9c4aef22a2c7bbd3a2f8c8b7d9e8f3c4a5b6.png', // Placeholder - will use CertificateViewer
    details: [
      { label: 'Accreditation', value: 'Department of Public Works and Highways (DPWH)' },
      { label: 'Status', value: 'Active & Verified' },
      { label: 'Services', value: 'Soil Testing & Geotechnical Investigation' },
    ]
  }
];

export function PortfolioEvidence() {
  const [selectedItem, setSelectedItem] = useState<ReportItem | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdc123]/10 rounded-full text-[#028118] text-xs uppercase tracking-widest mb-6">
            <Shield size={14} />
            <span>Evidence & Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tighter leading-[0.9]">
            Sample Deliverables<br />& Accreditations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Professional geotechnical investigation reports and official government certifications that demonstrate our commitment to quality and compliance.
          </p>
        </div>

        {/* Grid of Report Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-[#10c202]"
            >
              {/* Image Preview */}
              <div className="relative h-64 bg-gradient-to-br from-[#028118]/10 to-[#10c202]/10 overflow-hidden">
                {item.type === 'certificate' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#fdc123] rounded-full flex items-center justify-center">
                      <Award size={40} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <>
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </>
                )}
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <ZoomIn size={18} className="text-[#028118]" />
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute bottom-4 left-4">
                  {item.type === 'certificate' ? (
                    <Badge className="bg-[#fdc123] text-white border-0">
                      <Award size={12} className="mr-1" />
                      Accreditation
                    </Badge>
                  ) : (
                    <Badge className="bg-[#10c202] text-white border-0">
                      <FileText size={12} className="mr-1" />
                      Report
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-sm text-gray-900 mb-1 tracking-tight group-hover:text-[#028118] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {item.subtitle}
                </p>
                {item.location && (
                  <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                    📍 {item.location}
                  </p>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#028118] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Click any report or certificate to view full details. All documents are protected and cannot be downloaded.
          </p>
        </div>
      </div>

      {/* Full Screen Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0 bg-[#023c3d]">
          {selectedItem && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedItem.title}</DialogTitle>
                <DialogDescription>{selectedItem.subtitle}</DialogDescription>
              </DialogHeader>
              
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
                  aria-label="Close"
                >
                  <X size={24} className="text-gray-900" />
                </button>

                {/* Header */}
                <div className="bg-white p-8 border-b-4 border-[#10c202]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#10c202] to-[#028118] rounded-xl flex items-center justify-center flex-shrink-0">
                      {selectedItem.type === 'certificate' ? (
                        <Award size={24} className="text-white" />
                      ) : (
                        <FileText size={24} className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 tracking-tight">
                        {selectedItem.title}
                      </h3>
                      <p className="text-gray-600">
                        {selectedItem.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

              {/* Content */}
              <div className="p-8">
                {selectedItem.type === 'certificate' ? (
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#fdc123] to-[#f59e0b] rounded-full flex items-center justify-center">
                        <Award size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center mb-8">
                      <h4 className="text-xl text-gray-900 mb-2 tracking-tight">
                        Department of Public Works and Highways
                      </h4>
                      <p className="text-gray-600">
                        Official Accreditation for Soil Testing & Geotechnical Investigation Services
                      </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-6">
                      <div className="space-y-4">
                        {selectedItem.details?.map((detail, index) => (
                          <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-gray-600">{detail.label}</span>
                            <span className="text-sm text-gray-900 text-right">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Report Image */}
                    <div className="bg-white rounded-2xl p-4 shadow-2xl">
                      <div className="relative bg-gray-100 rounded-xl overflow-hidden" style={{ minHeight: '500px' }}>
                        <ImageWithFallback
                          src={selectedItem.imageUrl}
                          alt={selectedItem.title}
                          className="w-full h-auto"
                          style={{ userSelect: 'none', pointerEvents: 'none' }}
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        {/* Watermark Overlay */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                          <div className="text-white/10 text-6xl transform rotate-[-45deg] select-none">
                            PREVIEW ONLY
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Report Details */}
                    <div className="bg-white rounded-2xl p-6">
                      <h4 className="text-lg text-gray-900 mb-4 tracking-tight">Project Details</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedItem.details?.map((detail, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                              {detail.label}
                            </p>
                            <p className="text-sm text-gray-900">
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Protection Notice */}
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Shield size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-amber-900 mb-1">
                            <strong>Protected Document</strong>
                          </p>
                          <p className="text-xs text-amber-700">
                            This is a sample report for demonstration purposes. The actual report is confidential and protected. Downloading, copying, or distributing this document is prohibited.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
