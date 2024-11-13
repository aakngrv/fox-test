import { Injectable } from '@nestjs/common';
import { BetcarReportRepository } from './betcar-report.repository';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from '@backend/shared/shared-types';
import { UpdateReportDto } from './dto/update-report.dto';
import { BetcarReportEntity } from './betcar-report.entity';
import { LeftSideDamageRepository } from '../betcar-body-and-interior/left-side-damage/left-side-damage.repository';
import { BackSideDamageRepository } from '../betcar-body-and-interior/back-side-damage/back-side-damage.repository';
import { TrunkDamageRepository } from '../betcar-body-and-interior/trunk-damage/trunk-damage.repository';
import { RightSideDamageRepository } from '../betcar-body-and-interior/right-side-damage/right-side-damage.repository';
import { RoofDamageRepository } from '../betcar-body-and-interior/roof-damage/roof-damage.repository';
import { GlassDamageRepository } from '../betcar-body-and-interior/glass-damage/glass-damage.repository';
import { DiscDamageRepository } from '../betcar-body-and-interior/disc-damage/disc-damage.repository';
import { InteriorDamageRepository } from "../betcar-body-and-interior/interior-damage/interior-damage.repository";
import { ExteriorPhotoRepository } from "../betcar-body-and-interior/exterior-photo/exterior-photo.repository";
import { InteriorPhotoRepository } from "../betcar-body-and-interior/interior-photo/interior-photo.repository";
import { RoundViewVideoRepository } from "../betcar-body-and-interior/round-view-video/round-view-video.repository";
import { StoppedEngineRepository } from "../betcar-technical-inspection/stopped-engine/stopped-engine.repository";
import { RunningEngineRepository } from "../betcar-technical-inspection/running-engine/running-engine.repository";
import { DashboardRepository} from "../betcar-technical-inspection/dashboard/dashboard.repository";
import { TestDriveRepository} from "../betcar-technical-inspection/test-drive/test-drive.repository";
import { ExpertOpinionRepository} from "../betcar-expert-opinion/expert-opinion/expert-opinion.repository";

@Injectable()
export class BetcarReportService {
  constructor(
    private readonly betcarReportRepository: BetcarReportRepository,
    private readonly leftSideDamageRepository: LeftSideDamageRepository,
    private readonly backSideDamageRepository: BackSideDamageRepository,
    private readonly trunkDamageRepository: TrunkDamageRepository,
    private readonly rightSideDamageRepository: RightSideDamageRepository,
    private readonly roofDamageRepository: RoofDamageRepository,
    private readonly glassDamageRepository: GlassDamageRepository,
    private readonly discDamageRepository: DiscDamageRepository,
    private readonly interiorDamageRepository: InteriorDamageRepository,
    private readonly exteriorPhotoRepository: ExteriorPhotoRepository,
    private readonly interiorPhotoRepository: InteriorPhotoRepository,
    private readonly roundViewVideoRepository: RoundViewVideoRepository,
    private readonly stoppedEngineRepository: StoppedEngineRepository,
    private readonly runningEngineRepository: RunningEngineRepository,
    private readonly dashboardRepository: DashboardRepository,
    private readonly testDriveReposity: TestDriveRepository,
    private readonly expertOpinionRepository: ExpertOpinionRepository,
  ) {}

  async createReport(dto: CreateReportDto): Promise<Report> {
    const leftSideDamage = await this.leftSideDamageRepository.find(dto.leftSideDamage);
    const backSideDamage = await this.backSideDamageRepository.find(dto.backSideDamage);
    const trunkDamage = await this.trunkDamageRepository.find(dto.trunkDamage);
    const rightSideDamage = await this.rightSideDamageRepository.find(dto.rightSideDamage);
    const roofDamage = await this.roofDamageRepository.find(dto.roofDamage);
    const glassDamage = await this.glassDamageRepository.find(dto.glassDamage);
    const discDamage = await this.discDamageRepository.find(dto.discDamage);
    const interiorDamage = await this.interiorDamageRepository.find(dto.interiorDamage);
    const exteriorPhoto = await this.exteriorPhotoRepository.find(dto.exteriorPhoto);
    const interiorPhoto = await this.interiorPhotoRepository.find(dto.interiorPhoto);
    const roundViewVideo  = await this.roundViewVideoRepository.find(dto.roundViewVideo);
    const stoppedEngine  = await this.stoppedEngineRepository.find(dto.stoppedEngine);
    const runningEngine  = await this.runningEngineRepository.find(dto.runningEngine);
    const dashboard  = await this.dashboardRepository.find(dto.dashboard);
    const testDrive  = await this.testDriveReposity.find(dto.testDrive)
    const expertOpinion  = await this.expertOpinionRepository.find(dto.expertOpinion)

    const reportEntity = new BetcarReportEntity({ 
      ...dto, 
      leftSideDamage,
      backSideDamage,
      trunkDamage,
      rightSideDamage,
      roofDamage,
      glassDamage,
      discDamage,
      interiorDamage,
      exteriorPhoto,
      interiorPhoto,
      roundViewVideo,
      stoppedEngine,
      runningEngine,
      dashboard,
      testDrive,
      expertOpinion,
    });
    
    return this.betcarReportRepository.create(reportEntity);
  }

  async deleteReport(id: number): Promise<void> {
    await this.betcarReportRepository.destroy(id);
  }

  async getReport(id: number): Promise<Report> {
    return this.betcarReportRepository.findById(id);
  }

  // async getReportByVIN(vin: string): Promise<Report> {
  //   return await this.betcarReportRepository.findByVIN(vin);
  // }

  async getReports(): Promise<Report[]> {
    return this.betcarReportRepository.find();
  }

  // async getReportsByEmail(email: string): Promise<Report> {
  //   return this.betcarReportRepository.findByEmail(email);
  // }

  async updateReport(_id: number, _dto: UpdateReportDto): Promise<Report> {
    throw new Error('Not implemented…');
  }
}

