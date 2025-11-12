import { useState } from 'react';
import { Plus, Edit, Trash2, Search, Save, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useAdmin } from '../../contexts/AdminContext';
import { ProjectTableRow } from '../../data/projectsTableData';

export function ProjectsManager() {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProject, setEditingProject] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    contractor: '',
    location: '',
    testingProcedure: ''
  });

  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      projectName: '',
      contractor: '',
      location: '',
      testingProcedure: ''
    });
  };

  const handleAdd = () => {
    setShowAddForm(true);
    resetForm();
  };

  const handleEdit = (project: ProjectTableRow) => {
    setEditingProject(project.id);
    setFormData({
      projectName: project.projectName,
      contractor: project.contractor,
      location: project.location,
      testingProcedure: project.testingProcedure
    });
  };

  const handleSave = () => {
    if (!formData.projectName || !formData.contractor || !formData.location || !formData.testingProcedure) {
      alert('Please fill in all fields');
      return;
    }

    if (editingProject) {
      updateProject(editingProject, formData);
      setEditingProject(null);
    } else {
      addProject(formData);
      setShowAddForm(false);
    }
    resetForm();
  };

  const handleCancel = () => {
    setEditingProject(null);
    setShowAddForm(false);
    resetForm();
  };

  const handleDelete = (id: number, projectName: string) => {
    if (confirm(`Are you sure you want to delete "${projectName}"?`)) {
      deleteProject(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Projects Management</h2>
        <Button onClick={handleAdd} className="bg-[#10c202] hover:bg-[#028118] flex items-center gap-2">
          <Plus size={16} />
          Add Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects, contractors, or locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10c202] focus:border-transparent"
        />
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingProject) && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10c202] focus:border-transparent"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contractor</label>
              <input
                type="text"
                value={formData.contractor}
                onChange={(e) => setFormData({ ...formData, contractor: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10c202] focus:border-transparent"
                placeholder="Enter contractor name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10c202] focus:border-transparent"
                placeholder="Enter project location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Testing Procedure</label>
              <input
                type="text"
                value={formData.testingProcedure}
                onChange={(e) => setFormData({ ...formData, testingProcedure: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10c202] focus:border-transparent"
                placeholder="Enter testing procedure"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button onClick={handleSave} className="bg-[#10c202] hover:bg-[#028118] flex items-center gap-2">
              <Save size={16} />
              {editingProject ? 'Update' : 'Add'} Project
            </Button>
            <Button onClick={handleCancel} variant="outline" className="flex items-center gap-2">
              <X size={16} />
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contractor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Testing Procedure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.projectName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.contractor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {project.testingProcedure}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleEdit(project)}
                        size="sm"
                        variant="outline"
                        className="text-[#028118] border-[#028118] hover:bg-[#028118] hover:text-white"
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        onClick={() => handleDelete(project.id, project.projectName)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-600 hover:text-white"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found</p>
            <p className="text-gray-400 text-sm">
              {searchTerm ? 'Try adjusting your search criteria' : 'Add your first project to get started'}
            </p>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="mt-6 text-sm text-gray-500">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>
    </div>
  );
}