import { Injectable } from '@nestjs/common';
import { ExpertOnDayRepository } from './expert-on-day.repository';
import { CreateExpertOnDayDto } from './dto/create-expert-on-day.dto';
import { ExpertOnDay } from '@backend/shared/shared-types';
import { ExpertOnDayEntity } from './expert-on-day.entity';


@Injectable()
export class ExpertOnDayService {
  constructor(
    private readonly expertOnDayRepository: ExpertOnDayRepository,
  ) {}

  async createExpertOnDay(dto: CreateExpertOnDayDto): Promise<ExpertOnDay> {

    const expertOnDayEntity = new ExpertOnDayEntity({ 
      ...dto, 
    });
    
    return this.expertOnDayRepository.create(expertOnDayEntity);
  }

  async deleteExpertOnDay(id: number): Promise<void> {
    await this.expertOnDayRepository.destroy(id);
  }

  async getExpertOnday(id: number): Promise<ExpertOnDay> {
    return this.expertOnDayRepository.findById(id);
  }

  async getExpertsOnDay(): Promise<ExpertOnDay[]> {
    return this.expertOnDayRepository.find();
  }

  async updateExpertOnDay(id: number, dto: CreateExpertOnDayDto): Promise<ExpertOnDay> {
    const expertOnDayEntity = new ExpertOnDayEntity({ 
      ...dto, 
    });
    return this.expertOnDayRepository.update(id, expertOnDayEntity);
  }
}