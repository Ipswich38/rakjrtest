import { useState } from 'react';
import { MapPin, Calendar, Building2, ChevronRight, Grid3x3, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ProjectsTable } from './ProjectsTable';
import { PortfolioEvidence } from './PortfolioEvidence';

interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Industrial';
  date: string;
  description: string;
  details: {
    boringDepth: string;
    numberOfBorings: number;
    soilType: string;
    tests: string[];
    duration: string;
  };
  image?: string;
  featured?: boolean;
  topProject?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'High-Rise Condominium Development',
    location: 'Makati City, Metro Manila',
    category: 'Residential',
    date: 'September 2024',
    description: 'Comprehensive geotechnical investigation for 25-story residential tower on Guadalupe Tuff formation.',
    details: {
      boringDepth: '30 meters',
      numberOfBorings: 8,
      soilType: 'Guadalupe Tuff with variable weathering',
      tests: ['SPT', 'Triaxial Compression', 'Consolidation', 'Seismic Refraction'],
      duration: '4 weeks'
    },
    featured: true,
    topProject: true
  },
  {
    id: '2',
    title: 'Shopping Mall Complex',
    location: 'Quezon City, Metro Manila',
    category: 'Commercial',
    date: 'August 2024',
    description: 'Multi-phase soil investigation for large commercial development near Valley Fault System.',
    details: {
      boringDepth: '25 meters',
      numberOfBorings: 12,
      soilType: 'Mixed alluvial and residual soils',
      tests: ['SPT', 'Active Fault Investigation', 'Liquefaction Assessment', 'Plate Load Test'],
      duration: '6 weeks'
    },
    featured: true,
    topProject: true
  },
  {
    id: '3',
    title: 'Residential Subdivision',
    location: 'Laguna',
    category: 'Residential',
    date: 'July 2024',
    description: 'Subdivision development soil testing covering 15 hectares with variable soil conditions.',
    details: {
      boringDepth: '20 meters',
      numberOfBorings: 15,
      soilType: 'Volcanic tuff and lake sediments',
      tests: ['SPT', 'Soil Classification', 'Bearing Capacity Analysis', 'Settlement Analysis'],
      duration: '5 weeks'
    },
    featured: true
  },
  {
    id: '4',
    title: 'Bridge Foundation Study',
    location: 'Bulacan',
    category: 'Infrastructure',
    date: 'June 2024',
    description: 'Deep foundation investigation for major bridge crossing over river system.',
    details: {
      boringDepth: '35 meters',
      numberOfBorings: 6,
      soilType: 'Deep alluvial deposits',
      tests: ['SPT', 'Pile Load Test', 'Groundwater Monitoring', 'Soil Classification'],
      duration: '3 weeks'
    },
    topProject: true
  },
  {
    id: '5',
    title: 'Industrial Warehouse',
    location: 'Cavite',
    category: 'Industrial',
    date: 'May 2024',
    description: 'Soil testing for large-scale warehouse facility with heavy floor loading requirements.',
    details: {
      boringDepth: '18 meters',
      numberOfBorings: 10,
      soilType: 'Residual volcanic soils',
      tests: ['SPT', 'Plate Load Test', 'Consolidation Test', 'Direct Shear Test'],
      duration: '3 weeks'
    },
    topProject: true
  },
  {
    id: '6',
    title: 'Hillside Residential Estate',
    location: 'Rizal',
    category: 'Residential',
    date: 'April 2024',
    description: 'Slope stability analysis and soil investigation for luxury hillside development.',
    details: {
      boringDepth: '22 meters',
      numberOfBorings: 9,
      soilType: 'Residual soils on steep terrain',
      tests: ['SPT', 'Slope Stability Analysis', 'Seismic Site Response', 'Rock Quality Assessment'],
      duration: '4 weeks'
    }
  },
  {
    id: '7',
    title: 'Office Tower',
    location: 'Pasig City, Metro Manila',
    category: 'Commercial',
    date: 'March 2024',
    description: 'Geotechnical study for 15-story office building in central business district.',
    details: {
      boringDepth: '28 meters',
      numberOfBorings: 7,
      soilType: 'Mixed alluvial deposits',
      tests: ['SPT', 'Triaxial Test', 'Consolidation', 'Liquefaction Assessment'],
      duration: '4 weeks'
    }
  },
  {
    id: '8',
    title: 'Educational Campus',
    location: 'Pampanga',
    category: 'Infrastructure',
    date: 'February 2024',
    description: 'Comprehensive site investigation for new university campus on lahar deposits.',
    details: {
      boringDepth: '25 meters',
      numberOfBorings: 14,
      soilType: 'Volcanic lahar and ash deposits',
      tests: ['SPT', 'Soil Improvement Study', 'Settlement Analysis', 'Bearing Capacity'],
      duration: '5 weeks'
    }
  },
  {
    id: '9',
    title: 'Coastal Resort Development',
    location: 'Batangas',
    category: 'Commercial',
    date: 'January 2024',
    description: 'Soil testing for beachfront resort with special coastal considerations.',
    details: {
      boringDepth: '20 meters',
      numberOfBorings: 8,
      soilType: 'Coastal sand and marine deposits',
      tests: ['SPT', 'Liquefaction Assessment', 'Groundwater Monitoring', 'Corrosion Analysis'],
      duration: '3 weeks'
    }
  }
];

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS.filter(p => p.featured);
  const topProjects = PROJECTS.filter(p => p.topProject);
  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 6);

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
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#f3f4ea]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/10 rounded-full text-[#028118] text-xs uppercase tracking-widest mb-6">
            <Grid3x3 size={14} />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6 tracking-tighter leading-[0.9]">
            Completed<br />Projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Delivering professional soil testing and geotechnical investigation services across Metro Manila and major Philippine regions since 2019.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">Featured Projects</h3>
            <Badge variant="outline" className="text-[#028118] border-[#028118]">
              {featuredProjects.length} Featured
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#028118] to-[#10c202] relative overflow-hidden">
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
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar size={16} className="text-[#10c202]" />
                    <span>{project.date}</span>
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

        {/* Top Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">Top Projects</h3>
            <Badge variant="outline" className="text-[#fdc123] border-[#fdc123]">
              {topProjects.length} Top Rated
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {topProjects.map((project) => (
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
                      <Calendar size={14} className="text-[#10c202]" />
                      <span>{project.date}</span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Depth: {project.details.boringDepth}</span>
                      <span>•</span>
                      <span>{project.details.numberOfBorings} Borings</span>
                      <span>•</span>
                      <span>{project.details.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 tracking-tight">All Projects</h3>
            <Badge variant="outline" className="text-gray-600 border-gray-300">
              {PROJECTS.length} Total
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <ChevronRight size={20} className="text-gray-400 group-hover:text-[#10c202] group-hover:translate-x-1 transition-all" />
                </div>

                <h4 className="text-lg text-gray-900 mb-3 tracking-tight group-hover:text-[#028118] transition-colors">
                  {project.title}
                </h4>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-[#10c202]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} className="text-[#10c202]" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {!showAllProjects && PROJECTS.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAllProjects(true)}
              size="lg"
              className="bg-[#10c202] hover:bg-[#028118] text-white rounded-xl h-14 px-8"
            >
              View All Projects ({PROJECTS.length - 6} More)
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </div>
        )}

        {showAllProjects && (
          <div className="text-center">
            <Button
              onClick={() => {
                setShowAllProjects(false);
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 hover:border-[#10c202] rounded-xl h-14 px-8"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>

      {/* Complete Projects Table */}
      <ProjectsTable />

      {/* Portfolio Evidence Section */}
      <PortfolioEvidence />

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
                        <Calendar size={16} className="text-[#10c202]" />
                        <span>{selectedProject.date}</span>
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
                    <h5 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Investigation Details</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Boring Depth</p>
                        <p className="text-base text-gray-900">{selectedProject.details.boringDepth}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Number of Borings</p>
                        <p className="text-base text-gray-900">{selectedProject.details.numberOfBorings} locations</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Duration</p>
                        <p className="text-base text-gray-900">{selectedProject.details.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h5 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Soil Characteristics</h5>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Predominant Soil Type</p>
                      <p className="text-base text-gray-900">{selectedProject.details.soilType}</p>
                    </div>
                  </div>
                </div>

                {/* Tests Performed */}
                <div>
                  <h4 className="text-lg text-gray-900 mb-4 tracking-tight">Tests Performed</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.tests.map((test, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#10c202]/10 text-[#028118] hover:bg-[#10c202]/20">
                        {test}
                      </Badge>
                    ))}
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
