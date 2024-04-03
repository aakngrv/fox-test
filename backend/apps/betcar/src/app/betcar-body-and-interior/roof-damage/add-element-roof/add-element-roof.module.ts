import { AddElementRoofController } from './add-element-roof.controller';
import { AddElementRoofService } from './add-element-roof.service';
import { AddElementRoofRepository } from './add-element-roof.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementRoofController],
  providers: [AddElementRoofService, AddElementRoofRepository],
  exports: [AddElementRoofRepository]
})
export class AddElementRoofModule {}
