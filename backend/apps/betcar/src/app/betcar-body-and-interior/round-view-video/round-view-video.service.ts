import { CreateRoundViewVideoDto} from "./dto/create-round-view-video.dto";
import { RoundViewVideo } from '@backend/shared/shared-types';
import { RoundViewVideoRepository} from "./round-view-video.repository";
import { Injectable } from '@nestjs/common';
import { RoundViewVideoEntity} from "./round-view-video.entity";
import { UpdateRoundViewVideoDto} from "./dto/update-round-view-video.dto";

@Injectable()
export class RoundViewVideoService {

  constructor(
    private readonly roundViewVideoRepository: RoundViewVideoRepository
  ) {}

  async createRoundViewVideo(dto: CreateRoundViewVideoDto): Promise<RoundViewVideo> {
    const roundViewVideoEntity = new RoundViewVideoEntity(dto);
    return this.roundViewVideoRepository.create(roundViewVideoEntity);
  }

  async deleteRoundViewVideo(id: number): Promise<void> {
    await this.roundViewVideoRepository.destroy(id);
  }

  async getRoundViewVideo(id: number): Promise<RoundViewVideo> {
    return this.roundViewVideoRepository.findById(id);
  }

  async updateRoundViewVideo(id: number, dto: UpdateRoundViewVideoDto): Promise<RoundViewVideo> {
    return this.roundViewVideoRepository.update(id, new RoundViewVideoEntity(dto));
  }
}