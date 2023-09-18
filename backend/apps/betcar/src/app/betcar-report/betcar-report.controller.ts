import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BetcarReportService } from './betcar-report.service';
import { fillObject } from '@backend/util/util-core';
import { ReportRdo } from './rdo/report.rdo'; 
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('reports')
export class BetcarReportController {
  constructor(
    private readonly betcarReportService: BetcarReportService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const reportId = parseInt(id, 10);
    const report = await this.betcarReportService.getReport(reportId);
    return fillObject(ReportRdo, report);
  }

  @Get('/')
  async index() {
    const reports = await this.betcarReportService.getReports();
    return fillObject(ReportRdo, reports);
  }

  @Post('/')
  async create(@Body() dto: CreateReportDto) {
    const newReport = await this.betcarReportService.createReport(dto);
    return fillObject(ReportRdo, newReport);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const reportId = parseInt(id, 10);
    this.betcarReportService.deleteReport(reportId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateReportDto) {
    const reportId = parseInt(id, 10);
    const updatedReport = await this.betcarReportService.updateReport(reportId, dto);
    return fillObject(ReportRdo, updatedReport)
  }
}