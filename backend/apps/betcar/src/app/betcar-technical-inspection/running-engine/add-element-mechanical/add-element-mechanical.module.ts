import { AddElementMechanicalController } from './add-element-mechanical.controller';
import { AddElementMechanicalService } from './add-element-mechanical.service';
import { AddElementMechanicalRepository } from './add-element-mechanical.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementMechanicalController],
  providers: [AddElementMechanicalService, AddElementMechanicalRepository],
  exports: [AddElementMechanicalRepository]
})
export class AddElementMechanicalModule {}
