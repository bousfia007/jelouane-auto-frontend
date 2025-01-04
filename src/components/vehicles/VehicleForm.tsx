import React, { useState } from 'react';
import type { Vehicle } from '../../types';

interface VehicleFormProps {
  vehicle?: Vehicle;
  onSubmit: (vehicle: Omit<Vehicle, 'id'>) => void;
  onCancel: () => void;
}

export default function VehicleForm({ vehicle, onSubmit, onCancel }: VehicleFormProps) {
  const [formData, setFormData] = useState({
    brand: vehicle?.brand || '',
    model: vehicle?.model || '',
    year: vehicle?.year || new Date().getFullYear(),
    price: vehicle?.price || 0,
    stock: vehicle?.stock || 1,
    imageUrl: vehicle?.imageUrl || '',
    status: vehicle?.status || 'available'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Marque</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Modèle</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Année</label>
          <input
            type="number"
            required
            min="2000"
            max="2025"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Prix (DHS)</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL de l'image</label>
          <input
            type="url"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
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
          {vehicle ? 'Modifier' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
}