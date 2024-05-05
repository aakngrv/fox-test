import { TokenPayload, User } from '@backend/shared/shared-types';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user.userId,
    email: user.email,
    customer: user.customer,
    executor: user.executor,
    admin: user.admin,
    lastname: user.lastname,
    firstname: user.firstname,
  };
}