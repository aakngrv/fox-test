export interface User {
  userId?: number;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  phone: string;
  customer?: boolean;
  executor?: boolean;
  admin?: boolean;
  userBalance: string;
  passwordHash?: string;
  createdAt: Date;
  reports?: number[];
  avatar: string;
}
