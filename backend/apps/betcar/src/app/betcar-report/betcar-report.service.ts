import { Injectable } from '@nestjs/common';
import { BetcarReportRepository } from './betcar-report.repository';
import { SellerDetailsRepository } from '../betcar-documents/seller-details/seller-details.repository';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from '@backend/shared/shared-types';
import { UpdateReportDto } from './dto/update-report.dto';
import { BetcarReportEntity } from './betcar-report.entity';

@Injectable()
export class BetcarReportService {
  constructor(
    private readonly betcarReportRepository: BetcarReportRepository,
    private readonly sellerDetailsRepository: SellerDetailsRepository
  ) {}

  async createReport(dto: CreateReportDto): Promise<Report> {
    const sellerDetails = await this.sellerDetailsRepository.find(dto.sellerDetails);
    const reportEntity = new BetcarReportEntity({ ...dto, sellerDetails});
    return this.betcarReportRepository.create(reportEntity);
  }

  async deleteReport(id: number): Promise<void> {
    await this.betcarReportRepository.destroy(id);
  }

  async getReport(id: number): Promise<Report> {
    return this.betcarReportRepository.findById(id);
  }

  async getReports(): Promise<Report[]> {
    return this.betcarReportRepository.find();
  }

  async updateReport(_id: number, _dto: UpdateReportDto): Promise<Report> {
    throw new Error('Not implemented…');
  }
}

