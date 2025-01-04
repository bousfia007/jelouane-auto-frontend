import React from 'react';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-600 text-sm font-medium">Véhicules en stock</h3>
        <p className="text-3xl font-semibold mt-2">24</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-600 text-sm font-medium">Ventes ce mois</h3>
        <p className="text-3xl font-semibold mt-2">8</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-600 text-sm font-medium">Chiffre d'affaires</h3>
        <p className="text-3xl font-semibold mt-2">2.4M DHS</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-gray-600 text-sm font-medium">Clients actifs</h3>
        <p className="text-3xl font-semibold mt-2">156</p>
      </div>
    </div>
  );
}