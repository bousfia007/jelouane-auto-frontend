import { Permission } from '../types';
import { api } from './api';

export const permissionApi = {
  getAll: () => api.get<Permission[]>('/permissions'),
  getById: (id: string) => api.get<Permission>(`/permissions/${id}`),
  create: (permissionData: Omit<Permission, 'id'>) => api.post<Permission>('/permissions', permissionData),
  update: (id: string, permissionData: Partial<Permission>) => api.put<Permission>(`/permissions/${id}`, permissionData),
  delete: (id: string) => api.delete(`/permissions/${id}`)
};