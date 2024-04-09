import { AddElementDiscController } from './add-element-disc.controller';
import { AddElementDiscService } from './add-element-disc.service';
import { AddElementDiscRepository } from './add-element-disc.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementDiscController],
  providers: [AddElementDiscService, AddElementDiscRepository],
  exports: [AddElementDiscRepository]
})
export class AddElementDiscModule {}
