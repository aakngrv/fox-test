import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRole } from '@backend/shared/shared-types';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { BetcarUserEntity } from "../betcar-user/betcar-user.entity";
import { LoginUserDto } from './dto/login-user.dto';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly betcarUserRepository: BetcarUserRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, phone, city} = dto;

    const betcarUser = {
      email,
      firstname,
      lastname,
      phone,
      city,
      role: UserRole.Executor,
      passwordHash: ''
    };

    const existUser = await this.betcarUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new BetcarUserEntity(betcarUser)
      .setPassword(password)

    return this.betcarUserRepository
      .create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.betcarUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const betcarUserEntity = new BetcarUserEntity(existUser);
    if (!await betcarUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return betcarUserEntity.toObject();
  }

  public async getUser(id: string) {
    return this.betcarUserRepository.findById(id);
  }
}
