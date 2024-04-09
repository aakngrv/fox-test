import { CreateFrameNumberDto} from "./dto/create-frame-number.dto";
import { FrameNumber } from '@backend/shared/shared-types';
import { FrameNumberRepository} from "./frame-number.repository";
import { Injectable } from '@nestjs/common';
import { FrameNumberEntity} from "./frame-number.entity";
import { UpdateFrameNumberDto} from "./dto/update-frame-number.dto";

@Injectable()
export class FrameNumberService {

  constructor(
    private readonly frameNumberRepository: FrameNumberRepository
  ) {}

  async createFrameNumber(dto: CreateFrameNumberDto): Promise<FrameNumber> {
    const frameNumberEntity = new FrameNumberEntity(dto);
    return this.frameNumberRepository.create(frameNumberEntity);
  }

  async deleteFrameNumber(id: number): Promise<void> {
    await this.frameNumberRepository.destroy(id);
  }

  async getFrameNumber(id: number): Promise<FrameNumber> {
    return this.frameNumberRepository.findById(id);
  }

  async updateFrameNumber(id: number, dto: UpdateFrameNumberDto): Promise<FrameNumber> {
    return this.frameNumberRepository.update(id, new FrameNumberEntity(dto));
  }
}