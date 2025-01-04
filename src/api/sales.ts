import { Sale } from '../types';
import { api } from './api';

export const saleApi = {
  getAll: () => api.get<Sale[]>('/sales'),
  getById: (id: string) => api.get<Sale>(`/sales/${id}`),
  create: (saleData: Omit<Sale, 'id'>) => api.post<Sale>('/sales', saleData),
  update: (id: string, saleData: Partial<Sale>) => api.put<Sale>(`/sales/${id}`, saleData)
};