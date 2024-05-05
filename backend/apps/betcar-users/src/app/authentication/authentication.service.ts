import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constants';
import { BetcarUserEntity } from '../betcar-user/betcar-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { User, TokenPayload } from "@backend/shared/shared-types";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly betcarUserRepository: BetcarUserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
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

  public async deleteUser(id: number): Promise<void> {
    await this.betcarUserRepository.destroy(id);
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    const {
      firstname,
      lastname,
      email,
      city,
      phone,
      customer,
      executor,
      admin,
      passwordHash,
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

    // const existUser = await this.betcarUserRepository
    //   .findByEmail(email);
    //
    // if (existUser) {
    //   throw new ConflictException(AUTH_USER_EXISTS);
    // }

    const userUpdateEntity = await new BetcarUserEntity(betcarUser)
      .setPassword(passwordHash)
    
    return this.betcarUserRepository.update(id, userUpdateEntity);
  }

  public async createUserToken(user: User) {
    const payload: TokenPayload = {
      sub: user.userId,
      email: user.email,
      customer: user.customer,
      executor: user.executor,
      admin: user.admin,
      lastname: user.lastname,
      firstname: user.firstname,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
