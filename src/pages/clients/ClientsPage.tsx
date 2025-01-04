import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { Client } from '../../types';
import { clientApi } from '../../api/clients';
import ClientList from '../../components/clients/ClientList';
import ClientForm from '../../components/clients/ClientForm';
import Modal from '../../components/common/Modal';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await clientApi.getAll();
    setClients(data);
  };

  const handleSubmit = async (clientData: Omit<Client, 'id'>) => {
    try {
      if (selectedClient) {
        await clientApi.update(selectedClient.id, clientData);
      } else {
        await clientApi.create(clientData);
      }
      await loadClients();
      setIsModalOpen(false);
      setSelectedClient(null);
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  const handleDelete = async (clientId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      try {
        await clientApi.delete(clientId);
        await loadClients();
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des clients</h1>
        <button
          onClick={() => {
            setSelectedClient(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Nouveau client
        </button>
      </div>

      <ClientList
        clients={clients}
        onEdit={(client) => {
          setSelectedClient(client);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedClient(null);
        }}
        title={selectedClient ? 'Modifier le client' : 'Nouveau client'}
      >
        <ClientForm
          client={selectedClient || undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedClient(null);
          }}
        />
      </Modal>
    </div>
  );
}