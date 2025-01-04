import React from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import type { Vehicle } from '../../types';

const mockVehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Dongfeng',
    model: 'Glory 580',
    year: 2024,
    price: 280000,
    stock: 3,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    status: 'available'
  },
  {
    id: '2',
    brand: 'Dongfeng',
    model: 'AX7',
    year: 2024,
    price: 320000,
    stock: 2,
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    status: 'available'
  }
];

export default function VehicleList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Véhicules en stock</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={20} />
          Ajouter un véhicule
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marque</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modèle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Année</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix (DHS)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img src={vehicle.imageUrl} alt={`${vehicle.brand} ${vehicle.model}`} className="w-20 h-12 object-cover rounded" />
                </td>
                <td className="px-6 py-4">{vehicle.brand}</td>
                <td className="px-6 py-4">{vehicle.model}</td>
                <td className="px-6 py-4">{vehicle.year}</td>
                <td className="px-6 py-4">{vehicle.price.toLocaleString()} DHS</td>
                <td className="px-6 py-4">{vehicle.stock}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit size={20} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}