import { AddElementController } from './add-element.controller';
import { AddElementService } from './add-element.service';
import { AddElementRepository } from './add-element.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementController],
  providers: [AddElementService, AddElementRepository],
  exports: [AddElementRepository]
})
export class AddElementModule {}