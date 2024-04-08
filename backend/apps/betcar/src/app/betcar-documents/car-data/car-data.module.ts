import { CarDataController } from './car-data.controller';
import { CarDataService } from './car-data.service';
import { CarDataRepository } from './car-data.repository';
import { Module } from '@nestjs/common';
import { VinBodyNumberModule } from "./vin-body-number/vin-body-number.module";
import { FrameNumberModule } from "./frame-number/frame-number.module";
import { StateNumberModule } from "./state-number/state-number.module";
import { TCPModule } from "./tcp/tcp.module";
import { STSModule } from "./sts/sts.module";
import { EngineNumberModule } from "./engine-number/engine-number.module";
import {AdditionalDocumentsModule } from "./additional-documents/additional-documents.module";

@Module({
  imports: [
    VinBodyNumberModule,
    FrameNumberModule,
    StateNumberModule,
    TCPModule,
    STSModule,
    EngineNumberModule,
    AdditionalDocumentsModule,
  ],
  controllers: [CarDataController],
  providers: [CarDataService, CarDataRepository],
  exports: [CarDataRepository]
})
export class CarDataModule {}