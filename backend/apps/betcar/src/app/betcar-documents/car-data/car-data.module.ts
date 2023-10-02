import { CarDataController } from './car-data.controller';
import { CarDataService } from './car-data.service';
import { CarDataRepository } from './car-data.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CarDataController],
  providers: [CarDataService, CarDataRepository],
  exports: [CarDataRepository]
})
export class CarDataModule {}