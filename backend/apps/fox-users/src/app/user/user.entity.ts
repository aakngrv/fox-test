import { User } from "@backend/shared/shared-types";
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './user.constants';

export class UserEntity implements User {
  public userId?: number;
  public name?: string;
  public email?: string;
  public passwordHash?: string;
  public createdAt?: Date;

  constructor(betcarUser: User) {
    this.fillEntity(betcarUser);
  }

  public fillEntity(user: User) {
  this.userId = user.userId;
  this.name = user.name;
  this.email = user.email;
  this.passwordHash = user.passwordHash;
  this.createdAt = new Date();
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject(): UserEntity {
    return {
      ...this,
    };
  }
}