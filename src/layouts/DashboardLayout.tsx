import { Outlet } from 'react-router-dom';
import { useAuthStore } from '../app/store/auth.store';

export default function DashboardLayout() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <div>
      <header>
        <button onClick={logout}>Logout</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
