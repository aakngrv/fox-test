import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constants';
import { BetcarUserEntity } from '../betcar-user/betcar-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from "@backend/shared/shared-types";


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly betcarUserRepository: BetcarUserRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {
      firstname,
      lastname,
      email,
      city,
      phone,
      customer,
      executor,
      admin,
      password,
      createdAt,
    } = dto;

    const betcarUser = {
      firstname,
      lastname,
      email,
      city,
      phone,
      customer: true,
      executor: false,
      admin: false,
      passwordHash: '',
      createdAt: new Date(),
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
    const { email, password} = dto;
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

  public async getUser(id: number): Promise<User> {
    return this.betcarUserRepository.findById(id);
  }

}
