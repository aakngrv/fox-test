import { CarBodyController } from './car-body.controller';
import { CarBodyService } from './car-body.service';
import { CarBodyRepository } from './car-body.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CarBodyController],
  providers: [CarBodyService, CarBodyRepository],
  exports: [CarBodyRepository]
})
export class CarBodyModule {}