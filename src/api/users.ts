import { User } from '../types';
import { api } from './api';

export const userApi = {
  getAll: () => api.get<User[]>('/users'),
  getById: (id: string) => api.get<User>(`/users/${id}`),
  create: (userData: Omit<User, 'id'>) => api.post<User>('/users', userData),
  update: (id: string, userData: Partial<User>) => api.put<User>(`/users/${id}`, userData),
  delete: (id: string) => api.delete(`/users/${id}`),
  toggleStatus: (id: string, enabled: boolean) => api.patch(`/users/${id}/status`, { enabled })
};