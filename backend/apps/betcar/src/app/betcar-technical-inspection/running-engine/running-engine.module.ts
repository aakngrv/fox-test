import { RunningEngineController} from "./running-engine.controller";
import { RunningEngineService} from "./running-engine.service";
import { RunningEngineRepository} from "./running-engine.repository";
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [RunningEngineController],
  providers: [RunningEngineService, RunningEngineRepository],
  exports: [RunningEngineRepository]
})
export class RunningEngineModule {}
