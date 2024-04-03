import { CreateExpertOpinionDto} from "./dto/create-expert-opinion.dto";
import { ExpertOpinion } from '@backend/shared/shared-types';
import { ExpertOpinionRepository} from "./expert-opinion.repository";
import { Injectable } from '@nestjs/common';
import { ExpertOpinionEntity} from "./expert-opinion.entity";
import { UpdateExpertOpinionDto} from "./dto/update-expert-opinion.dto";

@Injectable()
export class ExpertOpinionService {

  constructor(
    private readonly expertOpinionRepository: ExpertOpinionRepository
  ) {}

  async createExpertOpinion(dto: CreateExpertOpinionDto): Promise<ExpertOpinion> {
    const expertOpinionEntity = new ExpertOpinionEntity(dto);
    return this.expertOpinionRepository.create(expertOpinionEntity);
  }

  async deleteExpertOpinion(id: number): Promise<void> {
    await this.expertOpinionRepository.destroy(id);
  }

  async getExpertOpinion(id: number): Promise<ExpertOpinion> {
    return this.expertOpinionRepository.findById(id);
  }

  async updateExpertOpinion(id: number, dto: UpdateExpertOpinionDto): Promise<ExpertOpinion> {
    return this.expertOpinionRepository.update(id, new ExpertOpinionEntity(dto));
  }
}