import { ComplectationProtectionEntity } from './complectation-protection.entity';
import { ComplectationProtection } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComplectationProtectionRepository implements CRUDRepository<ComplectationProtectionEntity, number, ComplectationProtection> {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ComplectationProtectionEntity): Promise<ComplectationProtection> {
    return this.prisma.complectationProtection.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(complectationProtectionId: number): Promise<void> {
    await this.prisma.complectationProtection.delete({
      where: {
        complectationProtectionId,
      }
    });
  }

  public findById(complectationProtectionId: number): Promise<ComplectationProtection | null> {
    return this.prisma.complectationProtection.findFirst({
      where: {
        complectationProtectionId
      }
    });
  }

  public find(ids: number[] = []): Promise<ComplectationProtection[]> {
    return this.prisma.complectationProtection.findMany({
      where: {
        complectationProtectionId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(complectationProtectionId: number, item: ComplectationProtectionEntity): Promise<ComplectationProtection> {
    return this.prisma.complectationProtection.update({
      where: {
        complectationProtectionId
      },
      data: { ...item.toObject(), complectationProtectionId}
    });
  }
}