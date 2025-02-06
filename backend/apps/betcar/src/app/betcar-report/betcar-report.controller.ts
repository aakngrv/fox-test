import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BetcarReportService } from './betcar-report.service';
import { fillObject } from '@backend/util/util-core';
import { ReportRdo } from './rdo/report.rdo'; 
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { vinSearchDto } from './dto/vin-search.dto';
import { userEmailDto } from './dto/user-email.dto';
import { reportNumberDto } from './dto/report-number.dto';
import { StateNumberSearchDto } from './dto/state-number-search.dto';
import { LinkSearchDto } from './dto/link-search.dto';


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
  @Post('/reportNumber')
  async showByNumber(@Body() reportNumber: reportNumberDto) {
    const existReportByNumber = await this.betcarReportService.getReportByNumber(reportNumber);
    return fillObject(ReportRdo, existReportByNumber);
  }

  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Post('/vin-body-number-search')
  async showVIN(@Body() vin: vinSearchDto) {
    const existReportVIN = await this.betcarReportService.getReportByVIN(vin);
    return fillObject(ReportRdo, existReportVIN);
  }

  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Post('/state-number-search')
  async showStateNumber(@Body() stateNumber: StateNumberSearchDto) {
    const existReportStateNumber = await this.betcarReportService.getReportByStateNumber(stateNumber);
    return fillObject(ReportRdo, existReportStateNumber);
  }

  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Post('/link-search')
  async showLink(@Body() link: LinkSearchDto) {
    const existReportLink = await this.betcarReportService.getReportByLink(link);
    return fillObject(ReportRdo, existReportLink);
  }

  @ApiResponse({
    type: ReportRdo,
    status: HttpStatus.OK,
    description: 'Данные отчета найдены'
  })
  @Post('/email')
  async showEmail(@Body() email: userEmailDto) {
    const existReportEmail = await this.betcarReportService.getReportByEmail(email);
    return fillObject(ReportRdo, existReportEmail);
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
