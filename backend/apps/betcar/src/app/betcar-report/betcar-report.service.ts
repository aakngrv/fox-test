import { Injectable } from '@nestjs/common';
import { BetcarReportRepository } from './betcar-report.repository';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from '@backend/shared/shared-types';
import { UpdateReportDto } from './dto/update-report.dto';
import { BetcarReportEntity } from './betcar-report.entity';
import { vinSearchDto } from './dto/vin-search.dto';
import { userEmailDto } from './dto/user-email.dto';
import { reportNumberDto } from './dto/report-number.dto';
import { StateNumberSearchDto } from './dto/state-number-search.dto';


@Injectable()
export class BetcarReportService {
  constructor(
    private readonly betcarReportRepository: BetcarReportRepository,
  ) {}

  async createReport(dto: CreateReportDto): Promise<Report> {

    const reportEntity = new BetcarReportEntity({ 
      ...dto, 
    });
    
    return this.betcarReportRepository.create(reportEntity);
  }

  async deleteReport(id: number): Promise<void> {
    await this.betcarReportRepository.destroy(id);
  }

  async getReport(id: number): Promise<Report> {
    return this.betcarReportRepository.findById(id);
  }

  async getReportByNumber(reportsNumber: reportNumberDto): Promise<Report> {
    const { reportNumber } = reportsNumber;
    return this.betcarReportRepository.findByNumber(reportNumber);
  }

  async getReportByVIN(vin: vinSearchDto): Promise<Report[]> {
    const { vinNumber } = vin;
    return await this.betcarReportRepository.findByVIN(vinNumber);
  }

  async getReportByStateNumber(stNumber: StateNumberSearchDto): Promise<Report[]> {
    const { stateNumber } = stNumber;
    return await this.betcarReportRepository.findByStateNumber(stateNumber);
  }

  async getReportByEmail(email: userEmailDto): Promise<Report[]> {
    const { userEmail } = email;
    return await this.betcarReportRepository.findByEmail(userEmail);
  }

  async getReports(): Promise<Report[]> {
    return this.betcarReportRepository.find();
  }

  async updateReport(id: number, dto: UpdateReportDto): Promise<Report> {
    const reportEntity = new BetcarReportEntity({ 
      ...dto, 
    });
    
    return this.betcarReportRepository.update(id, reportEntity);
  }
}

