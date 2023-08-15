import { User, UserRole} from "@backend/shared/shared-types";
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './betcar-user.constant';


export class BetcarUserEntity implements User {
  public _id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public phone: string;
  public role: UserRole;

  constructor(betcarUser: {
    firstname: string;
    role: UserRole;
    email: string;
    passwordHash: string;
    lastname: string;
    phone: string;
  }) {
    this.fillEntity(betcarUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(betcarUser: User) {
    this._id = betcarUser._id;
    this.email = betcarUser.email;
    this.firstname = betcarUser.firstname;
    this.lastname = betcarUser.lastname;
    this.passwordHash = betcarUser.passwordHash;
    this.role = betcarUser.role;
    this.phone = betcarUser.phone;
  }

  public async setPassword(password: string): Promise<BetcarUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
