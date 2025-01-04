import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import UserList from '../../components/users/UserList';
import UserForm from '../../components/users/UserForm';
import { userApi } from '../../api/users';
import { roleApi } from '../../api/roles';
import { User, Role } from '../../types';
import Modal from '../../components/common/Modal';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadUsers();
    loadRoles();
  }, []);

  const loadUsers = async () => {
    const data = await userApi.getAll();
    setUsers(data);
  };

  const loadRoles = async () => {
    const data = await roleApi.getAll();
    setRoles(data);
  };

  const handleSubmit = async (userData: Omit<User, 'id'>) => {
    try {
      if (selectedUser) {
        await userApi.update(selectedUser.id, userData);
      } else {
        await userApi.create(userData);
      }
      await loadUsers();
      setIsModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (userId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await userApi.delete(userId);
        await loadUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleToggleStatus = async (userId: string, enabled: boolean) => {
    try {
      await userApi.toggleStatus(userId, enabled);
      await loadUsers();
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion des utilisateurs</h1>
        <button
          onClick={() => {
            setSelectedUser(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Nouvel utilisateur
        </button>
      </div>

      <UserList
        users={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        title={selectedUser ? 'Modifier l\'utilisateur' : 'Nouvel utilisateur'}
      >
        <UserForm
          user={selectedUser || undefined}
          roles={roles}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
        />
      </Modal>
    </div>
  );
}