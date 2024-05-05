export interface TokenPayload {
  sub: number;
  email: string;
  customer: boolean;
  executor: boolean;
  admin: boolean;
  lastname: string;
  firstname: string;
}