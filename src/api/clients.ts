import { Client } from '../types';
import { api } from './api';

export const clientApi = {
  getAll: () => api.get<Client[]>('/clients'),
  getById: (id: string) => api.get<Client>(`/clients/${id}`),
  create: (clientData: Omit<Client, 'id'>) => api.post<Client>('/clients', clientData),
  update: (id: string, clientData: Partial<Client>) => api.put<Client>(`/clients/${id}`, clientData),
  delete: (id: string) => api.delete(`/clients/${id}`)
};