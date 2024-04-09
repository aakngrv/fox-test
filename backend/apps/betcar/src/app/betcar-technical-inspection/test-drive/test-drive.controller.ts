import { TestDriveService} from "./test-drive.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { TestDriveRdo} from "./rdo/test-drive.rdo";
import { CreateTestDriveDto} from "./dto/create-test-drive.dto";
import { UpdateTestDriveDto} from "./dto/update-test-drive.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Технический осмотр - Тест драйв')
@Controller('test-drive')
export class TestDriveController {

  constructor(
    private readonly testDriveService: TestDriveService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Тест драйв создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateTestDriveDto) {
    const newTestDrive = await this.testDriveService.createTestDrive(dto);
    return fillObject(TestDriveRdo, newTestDrive);
  }

  @ApiResponse({
    type: TestDriveRdo,
    status: HttpStatus.OK,
    description: 'Тест драйв успешно найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const testDriveId = parseInt(id, 10);
    const existTestDrive = await this.testDriveService.getTestDrive(testDriveId);
    return fillObject(TestDriveRdo, existTestDrive);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Тест драйв удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const testDriveId = parseInt(id, 10);
    this.testDriveService.deleteTestDrive(testDriveId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Тест драйв обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTestDriveDto) {
    const testDriveId = parseInt(id, 10);
    const updatedTestDrive = this.testDriveService.updateTestDrive(testDriveId, dto)
    return fillObject(TestDriveRdo, updatedTestDrive);
  }
}