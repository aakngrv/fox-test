import { ConflictException, Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constants';
import { UserEntity } from '../user/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { User, TokenPayload } from "@backend/shared/shared-types";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtService } from '@nestjs/jwt';
import { ConfigService, ConfigType } from '@nestjs/config';
import { jwtConfig } from '@backend/config/config-users';


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @Inject (jwtConfig.KEY) private readonly jwtOptions: ConfigType<typeof jwtConfig>,
  ) {}

  public async register(dto: CreateUserDto) {
    
    const {
      email,
      password,
      createdAt,
      author,
      executor,
      name,

    } = dto;

    const user = {
      email,
      author,
      executor,
      passwordHash: '',
      createdAt: new Date(),
      name,
    };

    const existUser = await this.userRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(user)
      .setPassword(password)

    return this.userRepository
      .create(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password} = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const userEntity = new UserEntity(existUser);
    if (!await userEntity.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return userEntity.toObject();
  }

  public async getUser(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  public async deleteUser(id: number): Promise<void> {
    await this.userRepository.destroy(id);
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    const {
    email,
    createdAt,
    author,
    executor,
    name,
    } = dto;

    const user = {
      email,
      author,
      executor,
      passwordHash: '',
      createdAt: new Date(),
      name,
    };

    const userUpdateEntity = await new UserEntity(user)
    
    return this.userRepository.update(id, userUpdateEntity);
  }

  public async createUserToken(user: User) {
    const payload: TokenPayload = {
      sub: user.userId,
      email: user.email,
      userName: user.name,
      author: user.author,
      executor: user.executor,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(payload, {
        secret: this.jwtOptions.refreshTokenSecret,
        expiresIn: this.jwtOptions.refreshTokenExpiresIn
      })
    }
  }
}
