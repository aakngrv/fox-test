import { StoppedEngineController} from "./stopped-engine.controller";
import { StoppedEngineService} from "./stopped-engine.service";
import { StoppedEngineRepository} from "./stopped-engine.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StoppedEngineController],
  providers: [StoppedEngineService, StoppedEngineRepository],
  exports: [StoppedEngineRepository]
})
export class StoppedEngineModule {}
