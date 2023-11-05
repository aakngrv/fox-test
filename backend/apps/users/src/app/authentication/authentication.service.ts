import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserRole } from '@backend/shared/shared-types';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { BetcarUserEntity } from "../betcar-user/betcar-user.entity";
import { LoginUserDto } from './dto/login-user.dto';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';
import { ConfigService, ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from '@backend/config/config-users';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { createJWTPayload } from '@backend/util/util-core';
import * as crypto from 'node:crypto';

@Injectable()
export class AuthenticationService {
  constructor(

    private readonly betcarUserRepository: BetcarUserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @Inject (jwtConfig.KEY) private readonly jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  public async register(dto: CreateUserDto) {
    const { email, firstname, lastname, password, phone, city } = dto;

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

  public async createUserToken(user: User) {
    const accessTokenPayload = createJWTPayload(user);
    const refreshTokenPayload = { ...accessTokenPayload, tokenId: crypto.randomUUID() };
    await this.refreshTokenService.createRefreshSession(refreshTokenPayload)

    return {
      accessToken: await this.jwtService.signAsync(accessTokenPayload),
      refreshToken: await this.jwtService.signAsync(refreshTokenPayload, {
        secret: this.jwtOptions.refreshTokenSecret,
        expiresIn: this.jwtOptions.refreshTokenExpiresIn
      })
    }
  }
}
