import React from 'react';
import { Role } from '../../types';
import { Edit, Trash2 } from 'lucide-react';

interface RoleListProps {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (roleId: string) => void;
}

export default function RoleList({ roles, onEdit, onDelete }: RoleListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permissions</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">{role.name}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {role.permissions.map(permission => (
                    <span key={permission.id} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                      {permission.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => onEdit(role)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => onDelete(role.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}