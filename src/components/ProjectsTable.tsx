import { useState } from 'react';
import { Search, Download, Filter, MapPin, Building2, FileText, ChevronDown } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { PROJECT_TABLE_DATA, ProjectTableRow } from '../data/projectsTableData';

export function ProjectsTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  // Extract unique locations for filtering
  const locations = Array.from(
    new Set(
      PROJECT_TABLE_DATA.map(project => {
        // Extract city/province from location
        const parts = project.location.split(',');
        return parts[parts.length - 1].trim();
      })
    )
  ).sort();

  // Filter projects based on search and location
  const filteredProjects = PROJECT_TABLE_DATA.filter(project => {
    const matchesSearch = 
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.contractor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.testingProcedure.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation = 
      locationFilter === 'all' || 
      project.location.toLowerCase().includes(locationFilter.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  const toggleRowExpansion = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleExport = () => {
    // Create CSV content
    const headers = ['#', 'Project Name', 'Contractor', 'Project Location', 'Testing Procedure Conducted'];
    const csvContent = [
      headers.join(','),
      ...filteredProjects.map(project => 
        [
          project.id,
          `"${project.projectName}"`,
          `"${project.contractor}"`,
          `"${project.location}"`,
          `"${project.testingProcedure}"`
        ].join(',')
      )
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rak-jr-projects.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10c202]/10 rounded-full text-[#028118] text-xs uppercase tracking-widest mb-4">
            <FileText size={14} />
            <span>Complete Project List</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-4 tracking-tight">
            All Completed Projects
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl">
            Comprehensive list of soil testing and geotechnical investigation projects completed by RAK-JR Technical Testing Services.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search projects, contractors, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-white"
              />
            </div>

            {/* Location Filter */}
            <div className="w-full md:w-64">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="h-12 rounded-xl bg-white">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#10c202]" />
                    <SelectValue placeholder="All Locations" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Export Button */}
            <Button
              onClick={handleExport}
              variant="outline"
              className="h-12 rounded-xl border-2 hover:border-[#10c202] hover:bg-[#10c202]/5"
            >
              <Download size={20} className="mr-2" />
              Export CSV
            </Button>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Showing <span className="text-[#028118]">{filteredProjects.length}</span> of {PROJECT_TABLE_DATA.length} projects
            </span>
            {searchQuery && (
              <Button
                onClick={() => setSearchQuery('')}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
              >
                Clear search
              </Button>
            )}
          </div>
        </div>

        {/* Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-[#028118] to-[#10c202] hover:from-[#028118] hover:to-[#10c202]">
                  <TableHead className="text-white w-12">#</TableHead>
                  <TableHead className="text-white min-w-[250px]">Project Name</TableHead>
                  <TableHead className="text-white min-w-[250px]">Contractor</TableHead>
                  <TableHead className="text-white min-w-[200px]">Project Location</TableHead>
                  <TableHead className="text-white min-w-[300px]">Testing Procedure Conducted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <TableRow 
                      key={project.id}
                      className={`
                        transition-colors
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        hover:bg-[#10c202]/5
                      `}
                    >
                      <TableCell className="text-gray-500">
                        {project.id}
                      </TableCell>
                      <TableCell className="text-gray-900">
                        {project.projectName}
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">
                        {project.contractor}
                      </TableCell>
                      <TableCell className="text-gray-700">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-[#10c202] mt-1 flex-shrink-0" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-700 text-sm">
                        {project.testingProcedure}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12 text-gray-500">
                      No projects found matching your criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              const isExpanded = expandedRows.has(project.id);
              
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-[#028118] to-[#10c202] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                            #{project.id}
                          </Badge>
                        </div>
                        <h4 className="text-white text-lg leading-tight">
                          {project.projectName}
                        </h4>
                      </div>
                      <button
                        onClick={() => toggleRowExpansion(project.id)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-1">
                        <Building2 size={14} />
                        <span>Contractor</span>
                      </div>
                      <p className="text-sm text-gray-900">{project.contractor}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-1">
                        <MapPin size={14} />
                        <span>Location</span>
                      </div>
                      <p className="text-sm text-gray-900">{project.location}</p>
                    </div>

                    {isExpanded && (
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
                          <FileText size={14} />
                          <span>Testing Procedure</span>
                        </div>
                        <p className="text-sm text-gray-900 leading-relaxed">
                          {project.testingProcedure}
                        </p>
                      </div>
                    )}

                    {!isExpanded && (
                      <button
                        onClick={() => toggleRowExpansion(project.id)}
                        className="text-sm text-[#028118] hover:text-[#10c202] transition-colors flex items-center gap-1"
                      >
                        View testing procedure
                        <ChevronDown size={16} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-12 text-center">
              <p className="text-gray-500">No projects found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[#10c202] to-[#028118] rounded-2xl p-6 text-white">
            <div className="text-3xl md:text-4xl mb-2">{PROJECT_TABLE_DATA.length}</div>
            <div className="text-sm text-white/80">Total Projects</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="text-3xl md:text-4xl text-gray-900 mb-2">
              {new Set(PROJECT_TABLE_DATA.map(p => p.contractor)).size}
            </div>
            <div className="text-sm text-gray-600">Contractors</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="text-3xl md:text-4xl text-gray-900 mb-2">
              {locations.length}
            </div>
            <div className="text-sm text-gray-600">Locations</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="text-3xl md:text-4xl text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
