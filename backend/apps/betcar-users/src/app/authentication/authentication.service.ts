import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BetcarUserRepository } from '../betcar-user/betcar-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constants';
import { BetcarUserEntity } from '../betcar-user/betcar-user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly betcarUserRepository: BetcarUserRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const { 
      email, 
      phone, 
      city,  
      firstname, 
      lastname, 
      password, 
    } = dto;

    const betcarUser = {
      email, 
      firstname, 
      lastname, 
      city, 
      phone,
      avatar: '',
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
