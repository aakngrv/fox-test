import { BackSideDamageController } from './back-side-damage.controller';
import { BackSideDamageService } from './back-side-damage.service';
import { BackSideDamageRepository } from './back-side-damage.repository';
import { Module } from '@nestjs/common';
import { AddElementBackModule } from './add-element-back/add-element-back.module';

@Module({
  imports: [
    AddElementBackModule,
  ],
  controllers: [BackSideDamageController],
  providers: [BackSideDamageService, BackSideDamageRepository],
  exports: [BackSideDamageRepository]
})
export class BackSideDamageModule {}