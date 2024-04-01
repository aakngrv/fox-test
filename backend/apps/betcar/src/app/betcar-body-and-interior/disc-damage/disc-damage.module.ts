import { DiscDamageController } from './disc-damage.controller';
import { DiscDamageService } from './disc-damage.service';
import { DiscDamageRepository } from './disc-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementDiscModule } from './add-element-disc/add-element-disc.module';

@Module({
  imports: [
    AddElementDiscModule,
  ],
  controllers: [DiscDamageController],
  providers: [DiscDamageService, DiscDamageRepository],
  exports: [DiscDamageRepository]
})
export class DiscDamageModule {}