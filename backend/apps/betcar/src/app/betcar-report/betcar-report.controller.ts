import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BetcarReportService } from './betcar-report.service';
import { fillObject } from '@backend/util/util-core';
import { ReportRdo } from './rdo/report.rdo'; 
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Отчеты')
@Controller('reports')
export class BetcarReportController {
  constructor(
    private readonly betcarReportService: BetcarReportService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Отчет успешно создан.'
  })
  @Post('/')
  async create(@Body() dto: CreateReportDto) {
    const newReport = await this.betcarReportService.createReport(dto);
    return fillObject(ReportRdo, newReport);
  }
  
  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Get('/:id')
  async show(@Param('id') id: number) {
    const existReport = await this.betcarReportService.getReport(id);
    return fillObject(ReportRdo, existReport);
  }

  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Post('/:vin')
  async showVIN(@Param('vinNumber') vin: string) {
    const existReportVIN = await this.betcarReportService.getReportByVIN(vin);
    return fillObject(ReportRdo, existReportVIN);
  }
  
  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчетов найдены'
  })
  @Get('/')
  async index() {
    const reports = await this.betcarReportService.getReports();
    return fillObject(ReportRdo, reports);
  }

  // @ApiResponse({
  //   type: ReportRdo,
  //   status: HttpStatus.OK,
  //   description: 'Данные отчетов найдены'
  // })
  // @Get('email')
  // async email(@Param('userEmail') email: string) {
  //   const reports = await this.betcarReportService.getReportsByEmail(email);
  //   return fillObject(ReportRdo, reports);
  // }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Отчет успешно удален.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    await this.betcarReportService.deleteReport(id);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные отчета успешно обновлены.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateReportDto) {
    const updatedReport = await this.betcarReportService.updateReport(id, dto)
    return fillObject(ReportRdo, updatedReport)
  }
}
