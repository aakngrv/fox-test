import { AddElementTrunkController } from './add-element-trunk.controller';
import { AddElementTrunkService } from './add-element-trunk.service';
import { AddElementTrunkRepository } from './add-element-trunk.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementTrunkController],
  providers: [AddElementTrunkService, AddElementTrunkRepository],
  exports: [AddElementTrunkRepository]
})
export class AddElementTrunkModule {}
