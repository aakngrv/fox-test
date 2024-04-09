import { CreateSTSDto} from "./dto/create-sts.dto";
import { STS } from '@backend/shared/shared-types';
import { STSRepository} from "./sts.repository";
import { Injectable } from '@nestjs/common';
import { STSEntity} from "./sts.entity";
import { UpdateSTSDto} from "./dto/update-sts.dto";

@Injectable()
export class STSService {

  constructor(
    private readonly sTSRepository: STSRepository
  ) {}

  async createSTS(dto: CreateSTSDto): Promise<STS> {
    const sTSEntity = new STSEntity(dto);
    return this.sTSRepository.create(sTSEntity);
  }

  async deleteSTS(id: number): Promise<void> {
    await this.sTSRepository.destroy(id);
  }

  async getSTS(id: number): Promise<STS> {
    return this.sTSRepository.findById(id);
  }

  async updateSTS(id: number, dto: UpdateSTSDto): Promise<STS> {
    return this.sTSRepository.update(id, new STSEntity(dto));
  }
}