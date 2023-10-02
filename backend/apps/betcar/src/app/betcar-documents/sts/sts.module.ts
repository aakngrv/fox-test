import { StsController } from './sts.controller';
import { StsService } from './sts.service';
import { StsRepository } from './sts.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StsController],
  providers: [StsService, StsRepository],
  exports: [StsRepository]
})
export class StsModule {}