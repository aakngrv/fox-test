import { StoppedEngineController} from "./stopped-engine.controller";
import { StoppedEngineService} from "./stopped-engine.service";
import { StoppedEngineRepository} from "./stopped-engine.repository";
import { Module } from '@nestjs/common';
import { AddElementStopModule } from "./add-element-stop/add-element-stop.module";

@Module({
  imports: [
    AddElementStopModule
  ],
  controllers: [StoppedEngineController],
  providers: [StoppedEngineService, StoppedEngineRepository],
  exports: [StoppedEngineRepository]
})
export class StoppedEngineModule {}
