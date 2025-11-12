import { useAdmin } from '../../contexts/AdminContext';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export function AdminPanel() {
  const { isAuthenticated } = useAdmin();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
}