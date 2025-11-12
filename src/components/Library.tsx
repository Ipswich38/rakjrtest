import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Plus, Edit2, Trash2, Search, Filter, FileText, BarChart3, Eye, Download } from "lucide-react";
import { PROJECT_LIBRARY_DATA, ProjectRecord } from "../data/projectLibraryData";

const Library: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectRecord | null>(null);
  const [currentProject, setCurrentProject] = useState<Partial<ProjectRecord>>({
    projectName: "",
    client: "",
    location: "",
    testingType: "Soil Boring",
    depth: null,
    quantity: null
  });

  useEffect(() => {
    const savedProjects = localStorage.getItem('libraryProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(PROJECT_LIBRARY_DATA);
      localStorage.setItem('libraryProjects', JSON.stringify(PROJECT_LIBRARY_DATA));
    }
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "272829") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const saveProjects = (updatedProjects: ProjectRecord[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('libraryProjects', JSON.stringify(updatedProjects));
  };

  const handleAddProject = () => {
    if (!currentProject.projectName || !currentProject.client || !currentProject.location) {
      alert("Please fill in all required fields");
      return;
    }

    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const newProject: ProjectRecord = {
      id: newId,
      projectName: currentProject.projectName!,
      client: currentProject.client!,
      location: currentProject.location!,
      testingType: currentProject.testingType || "Soil Boring",
      depth: currentProject.depth,
      quantity: currentProject.quantity
    };

    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
    setIsAddDialogOpen(false);
    setCurrentProject({
      projectName: "",
      client: "",
      location: "",
      testingType: "Soil Boring",
      depth: null,
      quantity: null
    });
  };

  const handleEditProject = () => {
    if (!editingProject) return;

    const updatedProjects = projects.map(p =>
      p.id === editingProject.id ? editingProject : p
    );
    saveProjects(updatedProjects);
    setIsEditDialogOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updatedProjects = projects.filter(p => p.id !== id);
      saveProjects(updatedProjects);
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || project.testingType === filterType;
    return matchesSearch && matchesFilter;
  });

  const testingTypes = [...new Set(projects.map(p => p.testingType))];
  const totalProjects = projects.length;
  const soilBoringCount = projects.filter(p => p.testingType === "Soil Boring").length;
  const fdtCount = projects.filter(p => p.testingType === "FDT").length;
  const otherTestsCount = totalProjects - soilBoringCount - fdtCount;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#028118] to-[#10c202] flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#10c202] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Project Library</CardTitle>
            <p className="text-gray-600">RAK-JR Technical Testing Services</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Access Code</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter access code"
                  className="text-center font-mono text-lg"
                />
              </div>
              <Button type="submit" className="w-full bg-[#10c202] hover:bg-[#028118]">
                Access Library
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Library</h1>
              <p className="text-gray-600">RAK-JR Technical Testing Services - Project Database</p>
            </div>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline">
              Lock Library
            </Button>
          </div>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-[#10c202]" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{totalProjects}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">SB</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Soil Boring</p>
                    <p className="text-2xl font-bold text-gray-900">{soilBoringCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">FD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">FDT Tests</p>
                    <p className="text-2xl font-bold text-gray-900">{fdtCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">OT</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Other Tests</p>
                    <p className="text-2xl font-bold text-gray-900">{otherTestsCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search projects, clients, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by test type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Test Types</SelectItem>
                      {testingTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#10c202] hover:bg-[#028118]">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name *</Label>
                      <Textarea
                        id="projectName"
                        value={currentProject.projectName}
                        onChange={(e) => setCurrentProject({...currentProject, projectName: e.target.value})}
                        placeholder="Enter project name"
                        rows={2}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="client">Client *</Label>
                        <Input
                          id="client"
                          value={currentProject.client}
                          onChange={(e) => setCurrentProject({...currentProject, client: e.target.value})}
                          placeholder="Enter client name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="testingType">Testing Type</Label>
                        <Select
                          value={currentProject.testingType}
                          onValueChange={(value) => setCurrentProject({...currentProject, testingType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Soil Boring">Soil Boring</SelectItem>
                            <SelectItem value="FDT">FDT</SelectItem>
                            <SelectItem value="Schimid Test">Schimid Test</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={currentProject.location}
                        onChange={(e) => setCurrentProject({...currentProject, location: e.target.value})}
                        placeholder="Enter project location"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="depth">Depth (m)</Label>
                        <Input
                          id="depth"
                          type="number"
                          value={currentProject.depth?.toString() || ""}
                          onChange={(e) => setCurrentProject({...currentProject, depth: e.target.value ? parseInt(e.target.value) : null})}
                          placeholder="Enter depth in meters"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          type="number"
                          value={currentProject.quantity?.toString() || ""}
                          onChange={(e) => setCurrentProject({...currentProject, quantity: e.target.value ? parseInt(e.target.value) : null})}
                          placeholder="Enter quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleAddProject} className="bg-[#10c202] hover:bg-[#028118]">Add Project</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Projects Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-900">No.</TableHead>
                    <TableHead className="font-semibold text-gray-900">Project Name</TableHead>
                    <TableHead className="font-semibold text-gray-900">Client</TableHead>
                    <TableHead className="font-semibold text-gray-900">Location</TableHead>
                    <TableHead className="font-semibold text-gray-900">Testing Type</TableHead>
                    <TableHead className="font-semibold text-gray-900">Depth (m)</TableHead>
                    <TableHead className="font-semibold text-gray-900">Quantity</TableHead>
                    <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project, index) => (
                    <TableRow key={project.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="font-medium text-gray-900 truncate" title={project.projectName}>
                          {project.projectName}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600">{project.client}</TableCell>
                      <TableCell className="text-gray-600">{project.location}</TableCell>
                      <TableCell>
                        <Badge variant={project.testingType === 'Soil Boring' ? 'default' :
                                      project.testingType === 'FDT' ? 'secondary' : 'outline'}>
                          {project.testingType}
                        </Badge>
                      </TableCell>
                      <TableCell>{project.depth || '-'}</TableCell>
                      <TableCell>{project.quantity || '-'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingProject(project);
                              setIsEditDialogOpen(true);
                            }}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteProject(project.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
            </DialogHeader>
            {editingProject && (
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="editProjectName">Project Name</Label>
                  <Textarea
                    id="editProjectName"
                    value={editingProject.projectName}
                    onChange={(e) => setEditingProject({...editingProject, projectName: e.target.value})}
                    rows={2}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="editClient">Client</Label>
                    <Input
                      id="editClient"
                      value={editingProject.client}
                      onChange={(e) => setEditingProject({...editingProject, client: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editTestingType">Testing Type</Label>
                    <Select
                      value={editingProject.testingType}
                      onValueChange={(value) => setEditingProject({...editingProject, testingType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Soil Boring">Soil Boring</SelectItem>
                        <SelectItem value="FDT">FDT</SelectItem>
                        <SelectItem value="Schimid Test">Schimid Test</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="editLocation">Location</Label>
                  <Input
                    id="editLocation"
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({...editingProject, location: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="editDepth">Depth (m)</Label>
                    <Input
                      id="editDepth"
                      type="number"
                      value={editingProject.depth?.toString() || ""}
                      onChange={(e) => setEditingProject({...editingProject, depth: e.target.value ? parseInt(e.target.value) : null})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editQuantity">Quantity</Label>
                    <Input
                      id="editQuantity"
                      type="number"
                      value={editingProject.quantity?.toString() || ""}
                      onChange={(e) => setEditingProject({...editingProject, quantity: e.target.value ? parseInt(e.target.value) : null})}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleEditProject} className="bg-[#10c202] hover:bg-[#028118]">Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Library;
