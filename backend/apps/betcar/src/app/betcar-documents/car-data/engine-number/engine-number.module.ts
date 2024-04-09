import { EngineNumberController } from "./engine-number.controller";
import { EngineNumberService } from "./engine-number.service";
import { EngineNumberRepository } from "./engine-number.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EngineNumberController],
  providers: [EngineNumberService, EngineNumberRepository],
  exports: [EngineNumberRepository]
})
export class EngineNumberModule {}