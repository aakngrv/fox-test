import { RoundViewVideoController} from "./round-view-video.controller";
import { RoundViewVideoService} from "./round-view-video.service";
import { RoundViewVideoRepository} from "./round-view-video.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [RoundViewVideoController],
  providers: [RoundViewVideoService, RoundViewVideoRepository],
  exports: [RoundViewVideoRepository]
})
export class RoundViewVideoModule {}
