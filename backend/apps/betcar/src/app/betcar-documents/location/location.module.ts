import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { LocationRepository } from './location.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [LocationController],
  providers: [LocationService, LocationRepository],
  exports: [LocationRepository]
})
export class LocationModule {}