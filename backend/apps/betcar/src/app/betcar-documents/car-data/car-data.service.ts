import { CreateCarDataDto } from './dto/create-car-data.dto';
import { CarData } from '@backend/shared/shared-types';
import { CarDataRepository } from './car-data.repository';
import { Injectable } from '@nestjs/common';
import { CarDataEntity } from './car-data.entity';
import { UpdateCarDataDto } from './dto/update-car-data.dto';
import { VinBodyNumberRepository}  from "./vin-body-number/vin-body-number.repository";
import { FrameNumberRepository}  from "./frame-number/frame-number.repository";
import { StateNumberRepository } from "./state-number/state-number.repository";
import { TCPRepository } from "./tcp/tcp.repository";
import { STSRepository } from "./sts/sts.repository";
import { EngineNumberRepository } from "./engine-number/engine-number.repository";
import { AdditionalDocumentsRepository} from "./additional-documents/additional-documents.repository";

@Injectable()
export class CarDataService {

  constructor(
    private readonly carDataRepository: CarDataRepository,
    private readonly vinBodyNumberRepository: VinBodyNumberRepository,
    private readonly frameNumberRepository: FrameNumberRepository,
    private readonly stateNumberRepository: StateNumberRepository,
    private readonly tCPRepository: TCPRepository,
    private readonly sTSRepository: STSRepository,
    private readonly engineNumberRepository: EngineNumberRepository,
    private readonly additionalDocumentsRepository: AdditionalDocumentsRepository,
  ) {}

  async createCarData(dto: CreateCarDataDto): Promise<CarData> {
    const vinBodyNumber = await this.vinBodyNumberRepository.find(dto.vinBodyNumber);
    const frameNumber = await this.frameNumberRepository.find(dto.frameNumber);
    const stateNumber = await this.stateNumberRepository.find(dto.stateNumber);
    const tCP = await this.tCPRepository.find(dto.tCP);
    const sTS = await this.sTSRepository.find(dto.sTS);
    const engineNumber = await this.engineNumberRepository.find(dto.engineNumber);
    const additionalDocuments = await this.additionalDocumentsRepository.find(dto.additionalDocuments);
    const carDataEntity = new CarDataEntity({
      ...dto,
      vinBodyNumber,
      frameNumber,
      stateNumber,
      tCP,
      sTS,
      engineNumber,
      additionalDocuments,
    });
    return this.carDataRepository.create(carDataEntity);
  }

  async deleteCarData(id: number): Promise<void> {
    await this.carDataRepository.destroy(id);
  }

  async getCarData(id: number): Promise<CarData> {
    return this.carDataRepository.findById(id);
  }

  async updateCarData(id: number, dto: UpdateCarDataDto): Promise<CarData> {
    const vinBodyNumber= await this.vinBodyNumberRepository.find(dto.vinBodyNumber);
    const frameNumber = await this.frameNumberRepository.find(dto.frameNumber);
    const stateNumber = await this.stateNumberRepository.find(dto.stateNumber);
    const tCP = await this.tCPRepository.find(dto.tCP);
    const sTS = await this.sTSRepository.find(dto.sTS);
    const engineNumber = await this.engineNumberRepository.find(dto.engineNumber);
    const additionalDocuments = await this.additionalDocumentsRepository.find(dto.additionalDocuments);
    return this.carDataRepository.update(id, new CarDataEntity({
      ...dto,
      vinBodyNumber,
      frameNumber,
      stateNumber,
      tCP,
      sTS,
      engineNumber,
      additionalDocuments,
    }));
  }
}