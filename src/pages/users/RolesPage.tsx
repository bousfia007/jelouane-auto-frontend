import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import RoleList from '../../components/users/RoleList';
import RoleForm from '../../components/users/RoleForm';
import { roleApi } from '../../api/roles';
import { permissionApi } from '../../api/permissions';
import { Role, Permission } from '../../types';
import Modal from '../../components/common/Modal';

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadRoles();
    loadPermissions();
  }, []);

  const loadRoles = async () => {
    const data = await roleApi.getAll();
    setRoles(data);
  };

  const loadPermissions = async () => {
    const data = await permissionApi.getAll();
    setPermissions(data);
  };

  const handleSubmit = async (roleData: Omit<Role, 'id'>) => {
    try {
      if (selectedRole) {
        await roleApi.update(selectedRole.id, roleData);
      } else {
        await roleApi.create(roleData);
      }
      await loadRoles();
      setIsModalOpen(false);
      setSelectedRole(null);
    } catch (error) {
      console.error('Error saving role:', error);
    }
  };

  const handleDelete = async (roleId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rôle ?')) {
      try {
        await roleApi.delete(roleId);
        await loadRoles();
      } catch (error) {
        console.error('Error deleting role:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des rôles</h1>
        <button
          onClick={() => {
            setSelectedRole(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Nouveau rôle
        </button>
      </div>

      <RoleList
        roles={roles}
        onEdit={(role) => {
          setSelectedRole(role);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedRole(null);
        }}
        title={selectedRole ? 'Modifier le rôle' : 'Nouveau rôle'}
      >
        <RoleForm
          role={selectedRole || undefined}
          permissions={permissions}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedRole(null);
          }}
        />
      </Modal>
    </div>
  );
}