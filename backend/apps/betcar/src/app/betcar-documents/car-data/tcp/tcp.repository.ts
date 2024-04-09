import { TCPEntity } from "./tcp.entity";
import { TCP } from '@backend/shared/shared-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@backend/util/util-types';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TCPRepository implements CRUDRepository<TCPEntity, number, TCP> {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: TCPEntity): Promise<TCP> {
    return this.prisma.tCP.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(tCPId: number): Promise<void> {
    await this.prisma.tCP.delete({
      where: {
        tCPId,
      }
    });
  }

  public findById(tCPId: number): Promise<TCP | null> {
    return this.prisma.tCP.findFirst({
      where: {
        tCPId
      }
    });
  }

  public find(ids: number[] = []): Promise<TCP[]> {
    return this.prisma.tCP.findMany({
      where: {
        tCPId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public update(tCPId: number, item: TCPEntity): Promise<TCP> {
    return this.prisma.tCP.update({
      where: {
        tCPId
      },
      data: { ...item.toObject(), tCPId }
    });
  }
}