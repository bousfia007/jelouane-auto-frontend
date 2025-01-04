import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/users/UsersPage';
import RolesPage from './pages/users/RolesPage';
import PermissionsPage from './pages/users/PermissionsPage';
import ClientsPage from './pages/clients/ClientsPage';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="permissions" element={<PermissionsPage />} />
          <Route path="clients" element={<ClientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}