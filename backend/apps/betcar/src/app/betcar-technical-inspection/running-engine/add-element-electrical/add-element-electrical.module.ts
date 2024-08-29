import { AddElementElectricalController } from './add-element-electrical.controller';
import { AddElementElectricalService } from './add-element-electrical.service';
import { AddElementElectricalRepository } from './add-element-electrical.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementElectricalController],
  providers: [AddElementElectricalService, AddElementElectricalRepository],
  exports: [AddElementElectricalRepository]
})
export class AddElementElectricalModule {}
