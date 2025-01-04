import { Role } from '../types';
import { api } from './api';

export const roleApi = {
  getAll: () => api.get<Role[]>('/roles'),
  getById: (id: string) => api.get<Role>(`/roles/${id}`),
  create: (roleData: Omit<Role, 'id'>) => api.post<Role>('/roles', roleData),
  update: (id: string, roleData: Partial<Role>) => api.put<Role>(`/roles/${id}`, roleData),
  delete: (id: string) => api.delete(`/roles/${id}`)
};