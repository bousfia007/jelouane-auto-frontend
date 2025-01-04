export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cin: string;
}

export interface Sale {
  id: string;
  vehicleId: string;
  clientId: string;
  saleDate: string;
  price: number;
  paymentMethod: string;
  status: string;
}

export interface Invoice {
  id: string;
  saleId: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  stock: number;
  imageUrl: string;
  status: 'AVAILABLE' | 'SOLD' | 'RESERVED';
}

// Keep existing User, Role, and Permission interfaces...