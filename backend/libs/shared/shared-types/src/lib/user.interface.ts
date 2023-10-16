import { UserRole } from "./user-role.enum";


export interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  phone: string;
  passwordHash: string;
  role: UserRole;
}
