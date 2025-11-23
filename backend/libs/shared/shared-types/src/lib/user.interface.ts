export interface User {
  userId?: number;
  name?: string;
  email?: string;
  author?: boolean;
  executor?: boolean;
  passwordHash?: string;
  createdAt?: Date;
}
