import { Invoice } from '../types';
import { api } from './api';

export const invoiceApi = {
  getAll: () => api.get<Invoice[]>('/invoices'),
  getById: (id: string) => api.get<Invoice>(`/invoices/${id}`),
  updateStatus: (id: string, status: string) => api.patch<Invoice>(`/invoices/${id}/status`, status)
};