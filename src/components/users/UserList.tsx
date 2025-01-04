import React from 'react';
import { User } from '../../types';
import { Edit, Trash2, UserX, UserCheck } from 'lucide-react';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
  onToggleStatus: (userId: string, enabled: boolean) => void;
}

export default function UserList({ users, onEdit, onDelete, onToggleStatus }: UserListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rôles</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {user.roles.map(role => (
                    <span key={role.id} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {role.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  user.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.enabled ? 'Actif' : 'Inactif'}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => onEdit(user)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button 
                    onClick={() => onToggleStatus(user.id, !user.enabled)}
                    className={`${user.enabled ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'}`}
                  >
                    {user.enabled ? <UserX size={20} /> : <UserCheck size={20} />}
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