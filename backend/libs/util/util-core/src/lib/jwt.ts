import { TokenPayload, User } from '@backend/shared/shared-types';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.userId,
    email: user.email,
    userName: user.name,
 
  };
}