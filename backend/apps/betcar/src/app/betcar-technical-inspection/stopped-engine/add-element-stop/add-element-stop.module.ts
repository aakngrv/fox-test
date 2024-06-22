import { AddElementStopController } from './add-element-stop.controller';
import { AddElementStopService } from './add-element-stop.service';
import { AddElementStopRepository } from './add-element-stop.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementStopController],
  providers: [AddElementStopService, AddElementStopRepository],
  exports: [AddElementStopRepository]
})
export class AddElementStopModule {}
