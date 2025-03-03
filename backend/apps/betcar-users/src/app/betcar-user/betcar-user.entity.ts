import { User } from "@backend/shared/shared-types";
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './betcar-user.constants';

export class BetcarUserEntity implements User {
  public userId?: number;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public phone: string;
  public executor: boolean;
  public customer: boolean;
  public admin: boolean;
  public city: string;
  public userBalance: string;
  public createdAt: Date;
  public reports?: number[];
  public avatar: string;

  constructor(betcarUser: User) {
    this.fillEntity(betcarUser);
  }

  public fillEntity(betcarUser: User) {
    this.userId = betcarUser.userId;
    this.email = betcarUser.email;
    this.firstname = betcarUser.firstname;
    this.lastname = betcarUser.lastname;
    this.passwordHash = betcarUser.passwordHash;
    this.executor = betcarUser.executor;
    this.customer = betcarUser.customer;
    this.admin = betcarUser.admin;
    this.phone = betcarUser.phone;
    this.city = betcarUser.city;
    this.userBalance = betcarUser.userBalance;
    this.createdAt = new Date();
    this.reports = betcarUser.reports;
    this.avatar = betcarUser.avatar;
    
  }

  public async setPassword(password: string): Promise<BetcarUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject(): BetcarUserEntity {
    return {
      ...this,
    };
  }
}