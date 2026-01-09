import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../../modules/auth/pages/LoginPage';
import DashboardLayout from '../../layouts/DashboardLayout';
import AuthLayout from '../../layouts/AuthLayout';
import { ProtectedRoute } from './protected.route';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route
        path="/"
        element={
            <DashboardLayout />
        }
      >
        <Route index element={<h1>Dashboard</h1>} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
