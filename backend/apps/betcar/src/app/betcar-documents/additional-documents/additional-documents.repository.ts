import { AdditionalDocumentsEntity } from './additional-documents.entity';
import { AdditionalDocuments } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AdditionalDocumentsRepository implements CRUDRepository<AdditionalDocumentsEntity, number, AdditionalDocuments> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: AdditionalDocumentsEntity): Promise<AdditionalDocuments> {
    return this.prisma.additionalDocuments.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(additionalDocumentsId: number): Promise<void> {
    await this.prisma.additionalDocuments.delete({
      where: {
        additionalDocumentsId,
      }
    });
  }

  public findById(additionalDocumentsId: number): Promise<AdditionalDocuments | null> {
    return this.prisma.additionalDocuments.findFirst({
      where: {
        additionalDocumentsId
      }
    });
  }

  public find(ids: number[] = []): Promise<AdditionalDocuments[]> {
    return this.prisma.additionalDocuments.findMany({
      where: {
        additionalDocumentsId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(additionalDocumentsId: number, item: AdditionalDocumentsEntity): Promise<AdditionalDocuments> {
    return this.prisma.additionalDocuments.update({
      where: {
        additionalDocumentsId
      },
      data: { ...item.toObject(), additionalDocumentsId}
    });
  }
}