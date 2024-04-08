import { CarDataController } from './car-data.controller';
import { CarDataService } from './car-data.service';
import { CarDataRepository } from './car-data.repository';
import { Module } from '@nestjs/common';
import { VinBodyNumberModule} from "./vin-body-number/vin-body-number.module";
import { FrameNumberModule } from "./frame-number/frame-number.module";
import { StateNumberModule } from "./state-number/state-number.module";

@Module({
  imports: [
    VinBodyNumberModule,
    FrameNumberModule,
    StateNumberModule,
  ],
  controllers: [CarDataController],
  providers: [CarDataService, CarDataRepository],
  exports: [CarDataRepository]
})
export class CarDataModule {}