import { AddElementLeftController } from './add-element-left.controller';
import { AddElementLeftService } from './add-element-left.service';
import { AddElementLeftRepository } from './add-element-left.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementLeftController],
  providers: [AddElementLeftService, AddElementLeftRepository],
  exports: [AddElementLeftRepository]
})
export class AddElementLeftModule {}
