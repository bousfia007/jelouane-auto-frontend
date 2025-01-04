import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Car, Users, FileText, BarChart2, Menu, Shield, Key } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart2, label: 'Tableau de bord', path: '/dashboard' },
    { icon: Car, label: 'Véhicules', path: '/vehicles' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: FileText, label: 'Factures', path: '/invoices' },
    { icon: Users, label: 'Utilisateurs', path: '/users' },
    { icon: Shield, label: 'Rôles', path: '/roles' },
    { icon: Key, label: 'Permissions', path: '/permissions' },
  ];

  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">JELOUANE AUTO</h1>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

const TopBar = () => {
  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/dashboard': return 'Tableau de bord';
      case '/vehicles': return 'Véhicules';
      case '/clients': return 'Clients';
      case '/invoices': return 'Factures';
      case '/users': return 'Utilisateurs';
      case '/roles': return 'Rôles';
      case '/permissions': return 'Permissions';
      default: return '';
    }
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 fixed top-0 right-0 left-64">
      <div className="flex items-center gap-4">
        <Menu className="h-6 w-6 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin</span>
      </div>
    </header>
  );
};

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopBar />
        <main className="p-6 mt-16 bg-gray-50 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}