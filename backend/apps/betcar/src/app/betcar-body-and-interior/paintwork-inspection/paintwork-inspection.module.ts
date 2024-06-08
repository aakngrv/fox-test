import { PaintworkInspectionController } from './paintwork-inspection.controller';
import { PaintworkInspectionService } from './paintwork-inspection.service';
import { PaintworkInspectionRepository } from './paintwork-inspection.repository';
import { Module } from '@nestjs/common';
import { AddElementPaintworkModule } from './add-element-paintwork/add-element-paintwork.module';

@Module({
  imports: [
    AddElementPaintworkModule
  ],
  controllers: [PaintworkInspectionController],
  providers: [PaintworkInspectionService, PaintworkInspectionRepository],
  exports: [PaintworkInspectionRepository]
})
export class PaintworkInspectionModule {}