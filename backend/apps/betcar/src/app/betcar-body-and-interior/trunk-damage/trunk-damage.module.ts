import { TrunkDamageController } from './trunk-damage.controller';
import { Module } from '@nestjs/common';
import { AddElementTrunkModule } from './add-element-trunk/add-element-trunk.module';
import { TrunkDamageService } from './trunk-damage.service';
import { TrunkDamageRepository } from './trunk-damage.repository';

@Module({
  imports: [
    AddElementTrunkModule,
  ],
  controllers: [TrunkDamageController],
  providers: [TrunkDamageService, TrunkDamageRepository],
  exports: [TrunkDamageRepository]
})
export class TrunkDamageModule {}