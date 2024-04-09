import { AddElementInteriorController } from './add-element-interior.controller';
import { AddElementInteriorService } from './add-element-interior.service';
import { AddElementInteriorRepository } from './add-element-interior.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementInteriorController],
  providers: [AddElementInteriorService, AddElementInteriorRepository],
  exports: [AddElementInteriorRepository]
})
export class AddElementInteriorModule {}
