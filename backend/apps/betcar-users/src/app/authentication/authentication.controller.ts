import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillObject } from '@backend/util/util-core';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from "./dto/update-user.dto";


@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found'
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    const existUser = await this.authService.getUser(userId);
    return fillObject(UserRdo, existUser);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Информация о пользователе успешно удалена.'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    await this.authService.deleteUser(userId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Информация о пользователе успешно обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const userId = parseInt(id, 10);
    const updatedUser = this.authService.updateUser(userId, dto)
    return fillObject(UserRdo, updatedUser);
  }
}
