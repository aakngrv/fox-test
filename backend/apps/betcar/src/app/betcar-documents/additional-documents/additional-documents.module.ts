import { AdditionalDocumentsController } from './additional-documents.controller';
import { AdditionalDocumentsService } from './additional-documents.service';
import { AdditionalDocumentsRepository } from './additional-documents.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AdditionalDocumentsController],
  providers: [AdditionalDocumentsService, AdditionalDocumentsRepository],
  exports: [AdditionalDocumentsRepository]
})
export class AdditionalDocumentsModule {}