import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import PermissionList from '../../components/users/PermissionList';
import PermissionForm from '../../components/users/PermissionForm';
import { permissionApi } from '../../api/permissions';
import { Permission } from '../../types';
import Modal from '../../components/common/Modal';

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadPermissions();
  }, []);

  const loadPermissions = async () => {
    const data = await permissionApi.getAll();
    setPermissions(data);
  };

  const handleSubmit = async (permissionData: Omit<Permission, 'id'>) => {
    try {
      if (selectedPermission) {
        await permissionApi.update(selectedPermission.id, permissionData);
      } else {
        await permissionApi.create(permissionData);
      }
      await loadPermissions();
      setIsModalOpen(false);
      setSelectedPermission(null);
    } catch (error) {
      console.error('Error saving permission:', error);
    }
  };

  const handleDelete = async (permissionId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette permission ?')) {
      try {
        await permissionApi.delete(permissionId);
        await loadPermissions();
      } catch (error) {
        console.error('Error deleting permission:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des permissions</h1>
        <button
          onClick={() => {
            setSelectedPermission(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Nouvelle permission
        </button>
      </div>

      <PermissionList
        permissions={permissions}
        onEdit={(permission) => {
          setSelectedPermission(permission);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPermission(null);
        }}
        title={selectedPermission ? 'Modifier la permission' : 'Nouvelle permission'}
      >
        <PermissionForm
          permission={selectedPermission || undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedPermission(null);
          }}
        />
      </Modal>
    </div>
  );
}