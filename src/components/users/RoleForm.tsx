import React, { useState } from 'react';
import { Role, Permission } from '../../types';

interface RoleFormProps {
  role?: Role;
  permissions: Permission[];
  onSubmit: (roleData: Omit<Role, 'id'>) => void;
  onCancel: () => void;
}

export default function RoleForm({ role, permissions, onSubmit, onCancel }: RoleFormProps) {
  const [formData, setFormData] = useState({
    name: role?.name || '',
    permissions: role?.permissions || []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du rôle</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
        <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-4">
          {permissions.map(permission => (
            <div key={permission.id} className="flex items-center">
              <input
                type="checkbox"
                id={permission.id}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.permissions.some(p => p.id === permission.id)}
                onChange={(e) => {
                  const updatedPermissions = e.target.checked
                    ? [...formData.permissions, permission]
                    : formData.permissions.filter(p => p.id !== permission.id);
                  setFormData({ ...formData, permissions: updatedPermissions });
                }}
              />
              <label htmlFor={permission.id} className="ml-2 block text-sm text-gray-900">
                {permission.name}
                <span className="text-xs text-gray-500 ml-2">{permission.description}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          {role ? 'Modifier' : 'Créer'}
        </button>
      </div>
    </form>
  );
}