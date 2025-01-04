import React from 'react';
import { Permission } from '../../types';
import { Edit, Trash2 } from 'lucide-react';

interface PermissionListProps {
  permissions: Permission[];
  onEdit: (permission: Permission) => void;
  onDelete: (permissionId: string) => void;
}

export default function PermissionList({ permissions, onEdit, onDelete }: PermissionListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {permissions.map((permission) => (
            <tr key={permission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">{permission.name}</td>
              <td className="px-6 py-4">{permission.description}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => onEdit(permission)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => onDelete(permission.id)}
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