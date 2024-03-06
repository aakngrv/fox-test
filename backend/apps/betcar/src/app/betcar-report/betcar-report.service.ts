import { Injectable } from '@nestjs/common';
import { BetcarReportRepository } from './betcar-report.repository';
import { SellerDetailsRepository } from '../betcar-documents/seller-details/seller-details.repository';
import { CarDataRepository } from '../betcar-documents/car-data/car-data.repository';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from '@backend/shared/shared-types';
import { UpdateReportDto } from './dto/update-report.dto';
import { BetcarReportEntity } from './betcar-report.entity';
import { AdditionalDocumentsRepository } from '../betcar-documents/additional-documents/additional-documents.repository';
import { TcpRepository } from '../betcar-documents/tcp/tcp.repository';
import { StsRepository } from '../betcar-documents/sts/sts.repository';
import { LocationRepository } from '../betcar-documents/location/location.repository';
import { CarBodyRepository } from '../betcar-equipment/car-body/car-body.repository';

@Injectable()
export class BetcarReportService {
  constructor(
    private readonly betcarReportRepository: BetcarReportRepository,
    private readonly sellerDetailsRepository: SellerDetailsRepository,
    private readonly carDataRepository: CarDataRepository,
    private readonly additionalDocumentsRepository: AdditionalDocumentsRepository,
    private readonly tcpRepository: TcpRepository,
    private readonly stsRepository: StsRepository,
    private readonly locationRepository: LocationRepository,
    private readonly carBodyRepository: CarBodyRepository,
  ) {}

  async createReport(dto: CreateReportDto): Promise<Report> {
    const sellerDetails = await this.sellerDetailsRepository.find(dto.sellerDetails);
    const carData = await this.carDataRepository.find(dto.carData);
    const additionalDocuments = await this.additionalDocumentsRepository.find(dto.additionalDocuments);
    const tcp = await this.tcpRepository.find(dto.tcp);
    const sts = await this.stsRepository.find(dto.sts);
    const location = await this.locationRepository.find(dto.location);
    const complectationBody = await this.carBodyRepository.find(dto.complectationBody);

    const reportEntity = new BetcarReportEntity({ 
      ...dto, 
      sellerDetails, 
      carData, 
      additionalDocuments, 
      tcp, 
      sts, 
      location,
      complectationBody,
    });
    
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

