import { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronRight, Grid3x3, ArrowUpRight, Factory, Home, Building, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { PROJECT_LIBRARY_DATA } from '../data/projectLibraryData';

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Industrial' | 'Healthcare' | 'Transportation';
  testingType: string;
  depth: number | null;
  quantity: number | null;
  description: string;
  featured?: boolean;
  topProject?: boolean;
  image?: string;
}

// Featured Projects with images - showcasing recent work with visual documentation
const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Proposed Three(3) Storey Residential Building',
    client: 'Private Developer',
    location: 'San Juan City',
    category: 'Residential',
    testingType: 'Soil Boring',
    depth: 30,
    quantity: 4,
    description: 'Comprehensive soil investigation for three-story residential building project requiring foundation design recommendations and bearing capacity analysis.',
    featured: true,
    image: '/sj_residential_optimized.jpeg'
  },
  {
    id: '2',
    title: 'Proposed Pipe Laying Project',
    client: 'Municipal Engineering Department',
    location: 'Remegio St. corner Oroquieta St., Sta. Cruz, Manila',
    category: 'Infrastructure',
    testingType: 'Soil Boring',
    depth: 15,
    quantity: 6,
    description: 'Critical infrastructure project for water distribution system requiring comprehensive soil analysis for underground pipe installation.',
    featured: true,
    image: '/stacruz_infrastructure_optimized.jpeg'
  },
  {
    id: '3',
    title: 'Proposed Three(3) Storey Apartment',
    client: 'Northridge Heights Developer',
    location: 'Northridge Heights, City of SJDM, Bulacan',
    category: 'Residential',
    testingType: 'Soil Boring',
    depth: 25,
    quantity: 5,
    description: 'Multi-story residential apartment complex requiring detailed geotechnical investigation for foundation design and settlement analysis.',
    featured: true,
    image: '/northridge_residential_optimized.jpeg'
  }
];

// Signature Projects - major achievements and notable works
const SIGNATURE_PROJECTS: Project[] = [
  {
    id: '4',
    title: 'Port Area Power Plant & Sheet Pile Development',
    client: 'Tripartite Engineering and Construction',
    location: 'Brgy. Talisay, San Andres, Quezon',
    category: 'Industrial',
    testingType: 'Soil Boring',
    depth: 20,
    quantity: 60,
    description: 'Large-scale soil investigation for major power plant infrastructure with extensive onshore and offshore testing requirements.',
    topProject: true
  },
  {
    id: '5',
    title: 'Proposed 18 Storey Condominium Building',
    client: 'Bright Homes Realty Corporation',
    location: 'Brgy. Catmon, Sta. Maria, Bulacan',
    category: 'Residential',
    testingType: 'Soil Boring',
    depth: 30,
    quantity: 6,
    description: 'High-rise residential development requiring comprehensive geotechnical investigation for foundation design.',
    topProject: true
  },
  {
    id: '6',
    title: 'Proposed New Pasig City Hall Building',
    client: 'Pasig City LGU',
    location: 'Pasig City',
    category: 'Infrastructure',
    testingType: 'Soil Boring',
    depth: 42,
    quantity: 2,
    description: 'Government infrastructure project requiring specialized testing for public building construction.',
    topProject: true
  },
  {
    id: '7',
    title: 'Proposed Circulo Verde Bridge',
    client: 'NW Steel Technologies, Inc.',
    location: 'Pasig and Quezon City',
    category: 'Transportation',
    testingType: 'Soil Boring',
    depth: 30,
    quantity: 6,
    description: 'Critical bridge infrastructure connecting two major cities with deep foundation requirements.',
    topProject: true
  },
  {
    id: '8',
    title: 'Proposed Nine Floor Medical Building',
    client: 'Urdaneta City Medical Center',
    location: 'Urdaneta City, Pangasinan',
    category: 'Healthcare',
    testingType: 'Soil Boring',
    depth: 30,
    quantity: 9,
    description: 'Healthcare facility development requiring precise soil analysis for medical equipment foundations.',
    topProject: true
  }
];

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // No need for these since we're using FEATURED_PROJECTS directly

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'Residential':
        return 'bg-blue-500';
      case 'Commercial':
        return 'bg-purple-500';
      case 'Infrastructure':
        return 'bg-orange-500';
      case 'Industrial':
        return 'bg-gray-600';
      case 'Healthcare':
        return 'bg-green-500';
      case 'Transportation':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/10 rounded-full text-[#028118] text-xs uppercase tracking-widest mb-6">
            <Grid3x3 size={14} />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6 tracking-tighter leading-[0.9]">
            Proven<br />Expertise
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            RAK-JR Technical Testing Services has successfully completed <span className="font-semibold text-[#028118]">{PROJECT_LIBRARY_DATA.length} projects</span> across diverse industries including residential developments, infrastructure projects, healthcare facilities, industrial complexes, and government buildings.
          </p>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">8+</p>
              <p className="text-sm text-gray-600">Residential</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">15+</p>
              <p className="text-sm text-gray-600">Infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Factory className="h-6 w-6 text-gray-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">5+</p>
              <p className="text-sm text-gray-600">Industrial</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">7+</p>
              <p className="text-sm text-gray-600">Specialized</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">Featured Projects</h3>
            <Badge variant="outline" className="text-[#028118] border-[#028118]">
              {FEATURED_PROJECTS.length} Recent Projects
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#028118] to-[#10c202]" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs text-white ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={20} className="text-[#028118]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl text-gray-900 mb-3 tracking-tight group-hover:text-[#028118] transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin size={16} className="text-[#10c202]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Building2 size={16} className="text-[#10c202]" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{project.testingType}</span>
                    {project.depth && <span className="text-xs text-gray-500">{project.depth}m depth</span>}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#028118] text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">Signature Projects</h3>
            <Badge variant="outline" className="text-[#fdc123] border-[#fdc123]">
              {SIGNATURE_PROJECTS.length} Major Projects
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SIGNATURE_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#10c202]"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10c202] to-[#028118] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg text-gray-900 tracking-tight group-hover:text-[#028118] transition-colors">
                        {project.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs text-white ${getCategoryColor(project.category)} flex-shrink-0`}>
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin size={14} className="text-[#10c202]" />
                      <span>{project.location}</span>
                      <span className="text-gray-400">•</span>
                      <Building2 size={14} className="text-[#10c202]" />
                      <span className="truncate">{project.client}</span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{project.testingType}</span>
                      {project.depth && (
                        <>
                          <span>•</span>
                          <span>Depth: {project.depth}m</span>
                        </>
                      )}
                      {project.quantity && (
                        <>
                          <span>•</span>
                          <span>{project.quantity} tests</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-[#10c202] to-[#028118] rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl tracking-tight mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join the {PROJECT_LIBRARY_DATA.length}+ successful projects we've completed. Get professional soil testing and geotechnical investigation services for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#028118] hover:bg-gray-100 rounded-xl h-12 px-6"
            >
              Get Free Quote
              <ChevronRight size={20} className="ml-2" />
            </Button>
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl h-12 px-6"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>


      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <DialogTitle className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#10c202]" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-[#10c202]" />
                        <span>{selectedProject.client}</span>
                      </div>
                    </DialogDescription>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs text-white ${getCategoryColor(selectedProject.category)} flex-shrink-0`}>
                    {selectedProject.category}
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg text-gray-900 mb-2 tracking-tight">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h5 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Project Details</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Testing Type</p>
                        <p className="text-base text-gray-900">{selectedProject.testingType}</p>
                      </div>
                      {selectedProject.depth && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Testing Depth</p>
                          <p className="text-base text-gray-900">{selectedProject.depth} meters</p>
                        </div>
                      )}
                      {selectedProject.quantity && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Number of Tests</p>
                          <p className="text-base text-gray-900">{selectedProject.quantity} locations</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h5 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Client Information</h5>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Client/Contractor</p>
                      <p className="text-base text-gray-900">{selectedProject.client}</p>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Project Category</p>
                      <p className="text-base text-gray-900">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                {/* Project Scope */}
                <div>
                  <h4 className="text-lg text-gray-900 mb-4 tracking-tight">Project Scope</h4>
                  <div className="bg-[#10c202]/5 rounded-xl p-4">
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-2xl p-8 text-white">
                  <h4 className="text-xl mb-3 tracking-tight">Need Similar Testing Services?</h4>
                  <p className="text-white/90 mb-6">
                    Get a customized quote for your construction project. We provide comprehensive soil testing and geotechnical investigation services.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedProject(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#028118] hover:bg-gray-100 rounded-xl"
                  >
                    Request a Quote
                    <ChevronRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
