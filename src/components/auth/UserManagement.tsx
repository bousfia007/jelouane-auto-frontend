import React from 'react';
import { UserPlus, Shield, Key } from 'lucide-react';

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Gestion des utilisateurs</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <UserPlus className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Utilisateurs</h3>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Gérer les utilisateurs
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Rôles</h3>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Gérer les rôles
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Key className="h-5 w-5 text-blue-600" />
                <h3 className="font-medium">Permissions</h3>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Gérer les permissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}