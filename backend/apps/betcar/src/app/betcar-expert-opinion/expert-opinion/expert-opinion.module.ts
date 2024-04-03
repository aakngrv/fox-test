import { ExpertOpinionController } from "./expert-opinion.controller";
import { ExpertOpinionService } from "./expert-opinion.service";
import { ExpertOpinionRepository } from "./expert-opinion.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ExpertOpinionController],
  providers: [ExpertOpinionService, ExpertOpinionRepository],
  exports: [ExpertOpinionRepository]
})
export class ExpertOpinionModule {}