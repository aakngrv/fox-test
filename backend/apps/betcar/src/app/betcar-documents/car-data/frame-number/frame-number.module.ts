import { FrameNumberController } from "./frame-number.controller";
import { FrameNumberService } from "./frame-number.service";
import { FrameNumberRepository } from "./frame-number.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [FrameNumberController],
  providers: [FrameNumberService, FrameNumberRepository],
  exports: [FrameNumberRepository]
})
export class FrameNumberModule {}