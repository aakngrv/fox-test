import { RunningEngineController} from "./running-engine.controller";
import { RunningEngineService} from "./running-engine.service";
import { RunningEngineRepository} from "./running-engine.repository";
import { Module } from '@nestjs/common';
import { AddElementElectricalModule } from "./add-element-electrical/add-element-electrical.module";
import { AddElementMechanicalModule } from "./add-element-mechanical/add-element-mechanical.module";

@Module({
  imports: [
    AddElementElectricalModule,
    AddElementMechanicalModule
  ],
  controllers: [RunningEngineController],
  providers: [RunningEngineService, RunningEngineRepository],
  exports: [RunningEngineRepository]
})
export class RunningEngineModule {}
