import { AddElementFrontController } from './add-element-front.controller';
import { AddElementFrontService } from './add-element-front.service';
import { AddElementFrontRepository } from './add-element-front.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementFrontController],
  providers: [AddElementFrontService, AddElementFrontRepository],
  exports: [AddElementFrontRepository]
})
export class AddElementFrontModule {}