import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProjectTableRow } from '../data/projectsTableData';

interface AdminContextType {
  isAuthenticated: boolean;
  projects: ProjectTableRow[];
  login: (password: string) => boolean;
  logout: () => void;
  addProject: (project: Omit<ProjectTableRow, 'id'>) => void;
  updateProject: (id: number, project: Omit<ProjectTableRow, 'id'>) => void;
  deleteProject: (id: number) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_PASSWORD = 'rakjr2024admin';

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projects, setProjects] = useState<ProjectTableRow[]>([]);

  useEffect(() => {
    // Check if admin is logged in
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }

    // Load projects from localStorage or use default data
    const savedProjects = localStorage.getItem('adminProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Load initial data from the static file
      import('../data/projectsTableData').then(module => {
        setProjects(module.PROJECT_TABLE_DATA);
        localStorage.setItem('adminProjects', JSON.stringify(module.PROJECT_TABLE_DATA));
      });
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  const addProject = (project: Omit<ProjectTableRow, 'id'>) => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    const newProject = { ...project, id: newId };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('adminProjects', JSON.stringify(updatedProjects));
  };

  const updateProject = (id: number, project: Omit<ProjectTableRow, 'id'>) => {
    const updatedProjects = projects.map(p =>
      p.id === id ? { ...project, id } : p
    );
    setProjects(updatedProjects);
    localStorage.setItem('adminProjects', JSON.stringify(updatedProjects));
  };

  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('adminProjects', JSON.stringify(updatedProjects));
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      projects,
      login,
      logout,
      addProject,
      updateProject,
      deleteProject
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};