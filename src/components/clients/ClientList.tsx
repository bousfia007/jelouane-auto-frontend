import React from 'react';
import { Client } from '../../types';
import { Edit, Trash2, Phone, Mail, MapPin } from 'lucide-react';

interface ClientListProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (clientId: string) => void;
}

export default function ClientList({ clients, onEdit, onDelete }: ClientListProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom complet</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CIN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {client.firstName} {client.lastName}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone size={16} className="mr-2" />
                    {client.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail size={16} className="mr-2" />
                    {client.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    {client.address}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {client.cin}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => onEdit(client)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => onDelete(client.id)}
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