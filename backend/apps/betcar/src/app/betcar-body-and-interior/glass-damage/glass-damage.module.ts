import { GlassDamageController } from './glass-damage.controller';
import { GlassDamageService } from './glass-damage.service';
import { GlassDamageRepository } from './glass-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementGlassModule } from './add-element-glass/add-element-glass.module';

@Module({
  imports: [
    AddElementGlassModule,
  ],
  controllers: [GlassDamageController],
  providers: [GlassDamageService, GlassDamageRepository],
  exports: [GlassDamageRepository]
})
export class GlassDamageModule {}