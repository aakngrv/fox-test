import { AddElementPaintworkController } from './add-element-paintwork.controller';
import { AddElementPaintworkService } from './add-element-paintwork.service';
import { AddElementPaintworkRepository } from './add-element-paintwork.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddElementPaintworkController],
  providers: [AddElementPaintworkService, AddElementPaintworkRepository],
  exports: [AddElementPaintworkRepository]
})
export class AddElementPaintworkModule {}
