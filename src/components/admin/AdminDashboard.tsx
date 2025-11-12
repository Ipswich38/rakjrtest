import { useState } from 'react';
import { LogOut, Plus, Settings, FileText, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { useAdmin } from '../../contexts/AdminContext';
import { ProjectsManager } from './ProjectsManager';

type TabType = 'projects' | 'analytics' | 'settings';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const { logout, projects } = useAdmin();

  const tabs = [
    { id: 'projects' as TabType, name: 'Projects', icon: FileText, count: projects.length },
    { id: 'analytics' as TabType, name: 'Analytics', icon: BarChart3 },
    { id: 'settings' as TabType, name: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">RAK-JR Technical Testing Services</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-[#10c202] text-[#028118]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  {tab.name}
                  {tab.count !== undefined && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'analytics' && <AnalyticsPanel />}
        {activeTab === 'settings' && <SettingsPanel />}
      </main>
    </div>
  );
}

function AnalyticsPanel() {
  const { projects } = useAdmin();

  const stats = [
    { label: 'Total Projects', value: projects.length },
    { label: 'Unique Contractors', value: new Set(projects.map(p => p.contractor)).size },
    { label: 'Locations Served', value: new Set(projects.map(p => p.location)).size },
    { label: 'Testing Types', value: new Set(projects.map(p => p.testingProcedure)).size },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Projects</h3>
        <div className="space-y-3">
          {projects.slice(-5).reverse().map((project) => (
            <div key={project.id} className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">{project.projectName}</p>
                <p className="text-sm text-gray-500">{project.contractor}</p>
              </div>
              <span className="text-sm text-gray-500">{project.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Settings</h2>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Admin Password</span>
            <span className="text-sm text-gray-500">rakjr2024admin</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Data Storage</span>
            <span className="text-sm text-gray-500">Local Browser Storage</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Last Updated</span>
            <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Data Management</h3>
        <p className="text-gray-600 mb-4">
          Project data is automatically saved to browser local storage. Changes are persistent across sessions.
        </p>
        <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
          Reset All Data
        </Button>
      </div>
    </div>
  );
}