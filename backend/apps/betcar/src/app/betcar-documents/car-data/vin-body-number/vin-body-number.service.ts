import { CreateVinBodyNumberDto} from "./dto/create-vin-body-number.dto";
import { VinBodyNumber } from '@backend/shared/shared-types';
import { VinBodyNumberRepository} from "./vin-body-number.repository";
import { Injectable } from '@nestjs/common';
import { VinBodyNumberEntity} from "./vin-body-number.entity";
import { UpdateVinBodyNumberDto} from "./dto/update-vin-body-number.dto";

@Injectable()
export class VinBodyNumberService {

  constructor(
    private readonly vinBodyNumberRepository: VinBodyNumberRepository
  ) {}

  async createVinBodyNumber(dto: CreateVinBodyNumberDto): Promise<VinBodyNumber> {
    const vinBodyNumberEntity = new VinBodyNumberEntity(dto);
    return this.vinBodyNumberRepository.create(vinBodyNumberEntity);
  }

  async deleteVinBodyNumber(id: number): Promise<void> {
    await this.vinBodyNumberRepository.destroy(id);
  }

  async getVinBodyNumber(id: number): Promise<VinBodyNumber> {
    return this.vinBodyNumberRepository.findById(id);
  }

  async updateVinBodyNumber(id: number, dto: UpdateVinBodyNumberDto): Promise<VinBodyNumber> {
    return this.vinBodyNumberRepository.update(id, new VinBodyNumberEntity(dto));
  }
}