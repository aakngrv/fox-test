import { AddElementRightController } from './add-element-right.controller';
import { AddElementRightService } from './add-element-right.service';
import { AddElementRightRepository } from './add-element-right.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementRightController],
  providers: [AddElementRightService, AddElementRightRepository],
  exports: [AddElementRightRepository]
})
export class AddElementRightModule {}
