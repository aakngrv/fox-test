import { ServiceInspectionService} from "./service-inspection.service";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { fillObject } from '@backend/util/util-core';
import { ServiceInspectionRdo} from "./rdo/service-inspection.rdo";
import { CreateServiceInspectionDto} from "./dto/create-service-inspection.dto";
import { UpdateServiceInspectionDto} from "./dto/update-service-inspection.dto";
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Осмотр на сервисе')
@Controller('service-inspection')
export class ServiceInspectionController {

  constructor(
    private readonly serviceInspectionService: ServiceInspectionService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Осмотр на сервисе создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateServiceInspectionDto) {
    const newServiceInspection = await this.serviceInspectionService.createServiceInspection(dto);
    return fillObject(ServiceInspectionRdo, newServiceInspection);
  }

  @ApiResponse({
    type: ServiceInspectionRdo,
    status: HttpStatus.OK,
    description: 'Осмотр на сервисе найден'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const serviceInspectionId = parseInt(id, 10);
    const existServiceInspection = await this.serviceInspectionService.getServiceInspection(serviceInspectionId);
    return fillObject(ServiceInspectionRdo, existServiceInspection);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Осмотр на сервисе удален'
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    const serviceInspectionId = parseInt(id, 10);
    this.serviceInspectionService.deleteServiceInspection(serviceInspectionId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Осмотр на сервисе обновлен'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateServiceInspectionDto) {
    const serviceInspectionId = parseInt(id, 10);
    const updatedServiceInspection = this.serviceInspectionService.updateServiceInspection(serviceInspectionId, dto)
    return fillObject(ServiceInspectionRdo, updatedServiceInspection);
  }
}