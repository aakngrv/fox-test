import { AddElementBackController } from './add-element-back.controller';
import { AddElementBackService } from './add-element-back.service';
import { AddElementBackRepository } from './add-element-back.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementBackController],
  providers: [AddElementBackService, AddElementBackRepository],
  exports: [AddElementBackRepository]
})
export class AddElementBackModule {}
