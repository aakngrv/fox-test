import { AddElementGlassController } from './add-element-glass.controller';
import { AddElementGlassService } from './add-element-glass.service';
import { AddElementGlassRepository } from './add-element-glass.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementGlassController],
  providers: [AddElementGlassService, AddElementGlassRepository],
  exports: [AddElementGlassRepository]
})
export class AddElementGlassModule {}
